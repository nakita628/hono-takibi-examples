import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aiGatewayHandler,
  aliasesHandler,
  apiKeysHandler,
  domainsHandler,
  projectsHandler,
  speedInsightsHandler,
  storageHandler,
  v10Handler,
  v11Handler,
  v12Handler,
  v13Handler,
  v1Handler,
  v2Handler,
  v3Handler,
  v4Handler,
  v5Handler,
  v6Handler,
  v7Handler,
  v8Handler,
  v9Handler,
  webHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1Handler)
  .route('/', aiGatewayHandler)
  .route('/', v8Handler)
  .route('/', v2Handler)
  .route('/', v3Handler)
  .route('/', v13Handler)
  .route('/', v12Handler)
  .route('/', v5Handler)
  .route('/', domainsHandler)
  .route('/', v6Handler)
  .route('/', v9Handler)
  .route('/', v7Handler)
  .route('/', apiKeysHandler)
  .route('/', v10Handler)
  .route('/', v11Handler)
  .route('/', projectsHandler)
  .route('/', v4Handler)
  .route('/', speedInsightsHandler)
  .route('/', storageHandler)
  .route('/', webHandler)
  .route('/', aliasesHandler)

export default app
