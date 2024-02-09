goog.provide("goog.dom.animationFrame");
goog.provide("goog.dom.animationFrame.Spec");
goog.provide("goog.dom.animationFrame.State");
goog.require("goog.dom.animationFrame.polyfill");
goog.dom.animationFrame.polyfill.install();
goog.dom.animationFrame.Task_;
goog.dom.animationFrame.TaskSet_;
goog.dom.animationFrame.Spec;
goog.dom.animationFrame.State = function() {
};
goog.dom.animationFrame.tasks_ = [[], []];
goog.dom.animationFrame.doubleBufferIndex_ = 0;
goog.dom.animationFrame.requestedFrame_ = false;
goog.dom.animationFrame.taskId_ = 0;
goog.dom.animationFrame.running_ = false;
goog.dom.animationFrame.createTask = function(spec, opt_context) {
  var id = goog.dom.animationFrame.taskId_++;
  var measureTask = {id:id, fn:spec.measure, context:opt_context};
  var mutateTask = {id:id, fn:spec.mutate, context:opt_context};
  var taskSet = {measureTask:measureTask, mutateTask:mutateTask, state:{}, args:undefined, isScheduled:false};
  return function() {
    if (arguments.length > 0) {
      if (!taskSet.args) {
        taskSet.args = [];
      }
      taskSet.args.length = 0;
      taskSet.args.push.apply(taskSet.args, arguments);
      taskSet.args.push(taskSet.state);
    } else {
      if (!taskSet.args || taskSet.args.length == 0) {
        taskSet.args = [taskSet.state];
      } else {
        taskSet.args[0] = taskSet.state;
        taskSet.args.length = 1;
      }
    }
    if (!taskSet.isScheduled) {
      taskSet.isScheduled = true;
      var tasksArray = goog.dom.animationFrame.tasks_[goog.dom.animationFrame.doubleBufferIndex_];
      tasksArray.push(taskSet);
    }
    goog.dom.animationFrame.requestAnimationFrame_();
  };
};
goog.dom.animationFrame.runTasks_ = function() {
  goog.dom.animationFrame.running_ = true;
  goog.dom.animationFrame.requestedFrame_ = false;
  var tasksArray = goog.dom.animationFrame.tasks_[goog.dom.animationFrame.doubleBufferIndex_];
  var taskLength = tasksArray.length;
  goog.dom.animationFrame.doubleBufferIndex_ = (goog.dom.animationFrame.doubleBufferIndex_ + 1) % 2;
  var task;
  for (var i = 0; i < taskLength; ++i) {
    task = tasksArray[i];
    var measureTask = task.measureTask;
    task.isScheduled = false;
    if (measureTask.fn) {
      measureTask.fn.apply(measureTask.context, task.args);
    }
  }
  for (var i = 0; i < taskLength; ++i) {
    task = tasksArray[i];
    var mutateTask = task.mutateTask;
    task.isScheduled = false;
    if (mutateTask.fn) {
      mutateTask.fn.apply(mutateTask.context, task.args);
    }
    task.state = {};
  }
  tasksArray.length = 0;
  goog.dom.animationFrame.running_ = false;
};
goog.dom.animationFrame.isRunning = function() {
  return goog.dom.animationFrame.running_;
};
goog.dom.animationFrame.requestAnimationFrame_ = function() {
  if (goog.dom.animationFrame.requestedFrame_) {
    return;
  }
  goog.dom.animationFrame.requestedFrame_ = true;
  window.requestAnimationFrame(goog.dom.animationFrame.runTasks_);
};

//# sourceMappingURL=goog.dom.animationframe.animationframe.js.map
