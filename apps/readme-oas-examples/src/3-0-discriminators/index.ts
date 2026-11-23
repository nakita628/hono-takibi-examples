import { OpenAPIHono } from '@hono/zod-openapi'
import {
  discriminatorWithMappingHandler,
  discriminatorWithNoMappingHandler,
  embeddedDiscriminatorHandler,
  improperDiscriminatorPlacementHandler,
  mappingOfSchemaNamesHandler,
  mappingWithDuplicateSchemasHandler,
  nestedOneOfObjectWithNestedOneOfHandler,
  oneofAllofTopLevelDiscHandler,
  potentiallyUndefinedFormDataHandler,
  redoclyFlavoredDiscriminatorHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', discriminatorWithMappingHandler)
  .route('/', discriminatorWithNoMappingHandler)
  .route('/', embeddedDiscriminatorHandler)
  .route('/', oneofAllofTopLevelDiscHandler)
  .route('/', nestedOneOfObjectWithNestedOneOfHandler)
  .route('/', mappingWithDuplicateSchemasHandler)
  .route('/', mappingOfSchemaNamesHandler)
  .route('/', improperDiscriminatorPlacementHandler)
  .route('/', redoclyFlavoredDiscriminatorHandler)
  .route('/', potentiallyUndefinedFormDataHandler)

export default app
