import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountNameEnvironmentComBrHandler,
  accountNameVtexcommercestableComBrHandler,
  apiHandler,
  fulfillmentEndpointHandler,
  marketplaceServicesEndpointHandler,
  portalVtexcommercestableComBrHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', portalVtexcommercestableComBrHandler)
  .route('/', accountNameVtexcommercestableComBrHandler)
  .route('/', accountNameEnvironmentComBrHandler)
  .route('/', fulfillmentEndpointHandler)
  .route('/', marketplaceServicesEndpointHandler)

export default app
