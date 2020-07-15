export class LoadModuleOnce {
  constructor(module: any) {
    if (module) {
      throw new Error(
        `${module.constructor.name} has already been loaded. Import only once.`
      );
    }
  }
}
