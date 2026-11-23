import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContentJsonRoute,
  getContentSourceSectionJsonRoute,
  getContentSourceSectionTimePeriodJsonRoute,
} from './routes'
import {
  getContentJsonRouteHandler,
  getContentSourceSectionJsonRouteHandler,
  getContentSourceSectionTimePeriodJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getContentJsonRoute, getContentJsonRouteHandler)
  .openapi(getContentSourceSectionJsonRoute, getContentSourceSectionJsonRouteHandler)
  .openapi(
    getContentSourceSectionTimePeriodJsonRoute,
    getContentSourceSectionTimePeriodJsonRouteHandler,
  )

export default app
