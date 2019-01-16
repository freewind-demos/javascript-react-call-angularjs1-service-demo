import angular from 'angular';

const ngHelloModule = angular.module('helloModule', []);

ngHelloModule.service('helloService', function () {
  this.hello = (name) => {
    console.log(`Hello, ${name}!`)
  }
})

export default ngHelloModule;
