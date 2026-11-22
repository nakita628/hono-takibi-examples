import { OpenAPIHono } from '@hono/zod-openapi'
import {
  discriminatorWithMappingHandler,
  discriminatorWithNoMappingHandler,
  embeddedDiscriminatorHandler,
  mappingOfSchemaNamesHandler,
  mappingWithDuplicateSchemasHandler,
  nestedOneOfObjectWithNestedOneOfHandler,
  oneofAllofTopLevelDiscHandler,
  quirksHandler,
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
  .route('/', quirksHandler)

export default app
