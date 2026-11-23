import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBatchIdRoute,
  getBatchIdRoute,
  getBatchRoute,
  getDbRoute,
  getDomainsDomainCheckRoute,
  getDomainsDomainRankRoute,
  getDomainsDomainWhoisRoute,
  postBatchRoute,
} from './routes'
import {
  deleteBatchIdRouteHandler,
  getBatchIdRouteHandler,
  getBatchRouteHandler,
  getDbRouteHandler,
  getDomainsDomainCheckRouteHandler,
  getDomainsDomainRankRouteHandler,
  getDomainsDomainWhoisRouteHandler,
  postBatchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBatchRoute, getBatchRouteHandler)
  .openapi(postBatchRoute, postBatchRouteHandler)
  .openapi(deleteBatchIdRoute, deleteBatchIdRouteHandler)
  .openapi(getBatchIdRoute, getBatchIdRouteHandler)
  .openapi(getDbRoute, getDbRouteHandler)
  .openapi(getDomainsDomainCheckRoute, getDomainsDomainCheckRouteHandler)
  .openapi(getDomainsDomainRankRoute, getDomainsDomainRankRouteHandler)
  .openapi(getDomainsDomainWhoisRoute, getDomainsDomainWhoisRouteHandler)

export default app
