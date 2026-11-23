import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BotInsightDemographicRoute,
  getV2BotInsightFollowersRoute,
  getV2BotInsightMessageDeliveryRoute,
  getV2BotInsightMessageEventAggregationRoute,
  getV2BotInsightMessageEventRoute,
  getV2BotInsightRichmenuRichMenuIdDailyRoute,
  getV2BotInsightRichmenuRichMenuIdSummaryRoute,
} from './routes'
import {
  getV2BotInsightDemographicRouteHandler,
  getV2BotInsightFollowersRouteHandler,
  getV2BotInsightMessageDeliveryRouteHandler,
  getV2BotInsightMessageEventAggregationRouteHandler,
  getV2BotInsightMessageEventRouteHandler,
  getV2BotInsightRichmenuRichMenuIdDailyRouteHandler,
  getV2BotInsightRichmenuRichMenuIdSummaryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2BotInsightDemographicRoute, getV2BotInsightDemographicRouteHandler)
  .openapi(getV2BotInsightMessageDeliveryRoute, getV2BotInsightMessageDeliveryRouteHandler)
  .openapi(getV2BotInsightFollowersRoute, getV2BotInsightFollowersRouteHandler)
  .openapi(getV2BotInsightMessageEventRoute, getV2BotInsightMessageEventRouteHandler)
  .openapi(
    getV2BotInsightMessageEventAggregationRoute,
    getV2BotInsightMessageEventAggregationRouteHandler,
  )
  .openapi(
    getV2BotInsightRichmenuRichMenuIdSummaryRoute,
    getV2BotInsightRichmenuRichMenuIdSummaryRouteHandler,
  )
  .openapi(
    getV2BotInsightRichmenuRichMenuIdDailyRoute,
    getV2BotInsightRichmenuRichMenuIdDailyRouteHandler,
  )

export default app
