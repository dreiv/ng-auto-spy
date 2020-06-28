/** Keeps the types of properties of a type but assigns type of Spy to the methods */
type SpyOf<T> = T &
    Partial<{ [k in keyof T]: T[k] extends (...args: any[]) => any ? jasmine.Spy : T[k] }>;

export function autoSpy<T>(obj: new (...args: any[]) => T): SpyOf<T> {
  const res: SpyOf<T> = {} as any;

  const keys = Object.getOwnPropertyNames(obj.prototype);
  keys.forEach(key => {
    (res as any)[key] = jasmine.createSpy(key);
  });

  return res;
}
