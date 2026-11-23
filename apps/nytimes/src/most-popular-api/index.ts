import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMostemailedSectionTimePeriodJsonRoute,
  getMostsharedSectionTimePeriodJsonRoute,
  getMostviewedSectionTimePeriodJsonRoute,
} from './routes'
import {
  getMostemailedSectionTimePeriodJsonRouteHandler,
  getMostsharedSectionTimePeriodJsonRouteHandler,
  getMostviewedSectionTimePeriodJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getMostemailedSectionTimePeriodJsonRoute,
    getMostemailedSectionTimePeriodJsonRouteHandler,
  )
  .openapi(getMostsharedSectionTimePeriodJsonRoute, getMostsharedSectionTimePeriodJsonRouteHandler)
  .openapi(getMostviewedSectionTimePeriodJsonRoute, getMostviewedSectionTimePeriodJsonRouteHandler)

export default app
