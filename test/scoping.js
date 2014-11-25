describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      return callback();
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      return request(this.method);
    };

    expect(mod.req()).toBe('scoping');
    
    var otherArgs = [];
  for(var i = 1; i < arguments.length; i++){ 
    otherArgs.push(arguments[i]);
  }
   return function(e) {
   
    otherArgs.push(e || window.event);
   
    otherArgs.reverse();
    callingFunction.apply(scope, otherArgs);

  });
});

