import { OpenAPIHono } from '@hono/zod-openapi'
import {
  graphqlHandler,
  openapiJsonHandler,
  serviceCredentialHandler,
  serviceCredentialTypeHandler,
  serviceInstanceHandler,
  serviceInventoryHandler,
  serviceOfferingHandler,
  serviceOfferingNodeHandler,
  servicePlanHandler,
  sourceHandler,
  tagsHandler,
  taskHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', graphqlHandler)
  .route('/', openapiJsonHandler)
  .route('/', serviceCredentialTypeHandler)
  .route('/', serviceCredentialHandler)
  .route('/', serviceInstanceHandler)
  .route('/', serviceInventoryHandler)
  .route('/', serviceOfferingNodeHandler)
  .route('/', serviceOfferingHandler)
  .route('/', servicePlanHandler)
  .route('/', sourceHandler)
  .route('/', tagsHandler)
  .route('/', taskHandler)

export default app
