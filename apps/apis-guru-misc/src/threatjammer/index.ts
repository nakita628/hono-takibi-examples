import { OpenAPIHono } from '@hono/zod-openapi'
import {
  allowlistDataQueryAndManagementHandler,
  authenticationTokenManagementInThisRegionHandler,
  autonomousSystemsInformationHandler,
  dataAssessmentHandler,
  datacenterInformationHandler,
  dataLoggingHandler,
  dataSourcesHandler,
  denylistDataQueryAndManagementHandler,
  geolocationHandler,
  originManagementInThisRegionHandler,
  originTokenManagementInThisRegionHandler,
  platformDatasetsHandler,
  userAgentHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', allowlistDataQueryAndManagementHandler)
  .route('/', autonomousSystemsInformationHandler)
  .route('/', dataAssessmentHandler)
  .route('/', datacenterInformationHandler)
  .route('/', platformDatasetsHandler)
  .route('/', denylistDataQueryAndManagementHandler)
  .route('/', geolocationHandler)
  .route('/', dataLoggingHandler)
  .route('/', originManagementInThisRegionHandler)
  .route('/', originTokenManagementInThisRegionHandler)
  .route('/', dataSourcesHandler)
  .route('/', authenticationTokenManagementInThisRegionHandler)
  .route('/', userAgentHandler)

export default app
