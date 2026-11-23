import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountInfo202609ApiUsageDailyPrivateAppsRoute,
  getAccountInfo202609DetailsRoute,
} from './routes'
import {
  getAccountInfo202609ApiUsageDailyPrivateAppsRouteHandler,
  getAccountInfo202609DetailsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getAccountInfo202609ApiUsageDailyPrivateAppsRoute,
    getAccountInfo202609ApiUsageDailyPrivateAppsRouteHandler,
  )
  .openapi(getAccountInfo202609DetailsRoute, getAccountInfo202609DetailsRouteHandler)

export default app
