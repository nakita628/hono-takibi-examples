type FlatObject = {
  string?: string | undefined
  boolean?: boolean | undefined
  number?: number | undefined
}
type ArrayOfFlatObjects = FlatObject[]
type ArrayOfPrimitives = string[]
type ObjectOfObjectsAndArrays = {
  singleObject?: FlatObject | undefined
  arrayOfPrimitives?: ArrayOfPrimitives | undefined
  arrayOfObjects?: ArrayOfFlatObjects | undefined
  primitive?: string | undefined
}
type ArrayOfObjectsOfObjectsAndArrays = ObjectOfObjectsAndArrays[]
type ObjectWithArray = {
  Array?:
    | {
        inputs?: { 'input 1'?: string | undefined; 'input 2'?: string | undefined }[] | undefined
        nums?: (0 | 1 | 2 | 3)[] | undefined
      }[]
    | undefined
}
type ObjectOfAdditionalPropertiesObjectPolymorphism = {
  [x: string]: {
    primitive?: string | undefined
    boolean?: boolean | undefined
    metadata?:
      | { [x: string]: unknown }
      | FlatObject
      | FlatObject
      | FlatObject
      | ObjectWithArray
      | undefined
  }
}
type ObjectOfEverything = {
  objectOfObjectsAndArrays?: ObjectOfObjectsAndArrays | undefined
  arrayOfObjectsOfObjectsAndArrays?: ArrayOfObjectsOfObjectsAndArrays | undefined
  objectOfAdditionalProperties?: ObjectOfAdditionalPropertiesObjectPolymorphism | undefined
  string?: string | undefined
}
type MultischemaOfEverything =
  | ArrayOfObjectsOfObjectsAndArrays
  | { objEverything?: ObjectOfEverything | undefined; flatObj?: FlatObject | undefined }
  | ArrayOfPrimitives
  | ArrayOfFlatObjects
  | FlatObject
  | ObjectOfEverything
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/top-level-array': {
      $post: {
        input: { json: ArrayOfFlatObjects }
        output: ArrayOfFlatObjects
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: ObjectOfEverything[] }
        output: ObjectOfEverything[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/anything/top-level-object/simple': {
      $post: {
        input: {
          json: {
            nestedObject_1?: FlatObject | undefined
            nestedObject_2?: FlatObject | undefined
            nestedObject_3?: FlatObject | undefined
          }
        }
        output: { nestedObject?: FlatObject | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/top-level-object/of-everything': {
      $post: {
        input: { json: ObjectOfEverything }
        output: ObjectOfEverything
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/multischema/of-everything': {
      $post: {
        input: { json: MultischemaOfEverything }
        output: MultischemaOfEverything
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
