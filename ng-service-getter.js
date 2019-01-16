import ngHelloModule from './ng-hello-module';

let ngInjector;
ngHelloModule.run(($injector) => {
  ngInjector = $injector;
});

angular.bootstrap(document.createElement('div'), [ngHelloModule.name])

console.log('ngInjector', ngInjector);

export function getNgService(serviceName) {
  return ngInjector.get(serviceName);
}
