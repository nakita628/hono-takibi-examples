import { OpenAPIHono } from '@hono/zod-openapi'
import {
  graphqlHandler,
  openapiJsonHandler,
  serviceCredentialsHandler,
  serviceCredentialTypesHandler,
  serviceInstancesHandler,
  serviceInventoriesHandler,
  serviceOfferingNodesHandler,
  serviceOfferingsHandler,
  servicePlansHandler,
  sourcesHandler,
  tagsHandler,
  tasksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', graphqlHandler)
  .route('/', openapiJsonHandler)
  .route('/', serviceCredentialTypesHandler)
  .route('/', serviceCredentialsHandler)
  .route('/', serviceInstancesHandler)
  .route('/', serviceInventoriesHandler)
  .route('/', serviceOfferingNodesHandler)
  .route('/', serviceOfferingsHandler)
  .route('/', servicePlansHandler)
  .route('/', sourcesHandler)
  .route('/', tagsHandler)
  .route('/', tasksHandler)

export default app
