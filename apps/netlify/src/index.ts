import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountIdHandler,
  accountsHandler,
  accountSlugHandler,
  agentRunnersHandler,
  aiGatewayHandler,
  apiHandler,
  billingHandler,
  buildsHandler,
  deployKeysHandler,
  deploysHandler,
  dnsZonesHandler,
  formsHandler,
  hooksHandler,
  oauthHandler,
  purgeHandler,
  servicesHandler,
  sitesHandler,
  submissionsHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', sitesHandler)
  .route('/', accountsHandler)
  .route('/', apiHandler)
  .route('/', purgeHandler)
  .route('/', deploysHandler)
  .route('/', buildsHandler)
  .route('/', accountIdHandler)
  .route('/', formsHandler)
  .route('/', hooksHandler)
  .route('/', oauthHandler)
  .route('/', deployKeysHandler)
  .route('/', accountSlugHandler)
  .route('/', billingHandler)
  .route('/', agentRunnersHandler)
  .route('/', submissionsHandler)
  .route('/', servicesHandler)
  .route('/', userHandler)
  .route('/', dnsZonesHandler)
  .route('/', aiGatewayHandler)

export default app
