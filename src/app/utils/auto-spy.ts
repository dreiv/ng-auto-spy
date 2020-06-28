export type SpyOf<T> = T &
  { [k in keyof T]: T[k] extends Function ? jasmine.Spy : T[k] };

export function autoSpy<T>(obj: new (...args: any[]) => T): SpyOf<T> {
  const res: SpyOf<T> = {} as any;

  const keys = Object.getOwnPropertyNames(obj.prototype);
  keys.forEach(key => {
    res[key] = jasmine.createSpy(key);
  });

  return res;
}
