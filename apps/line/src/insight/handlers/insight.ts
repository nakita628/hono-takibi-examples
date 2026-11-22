import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BotInsightDemographicRoute,
  getV2BotInsightFollowersRoute,
  getV2BotInsightMessageDeliveryRoute,
  getV2BotInsightMessageEventAggregationRoute,
  getV2BotInsightMessageEventRoute,
  getV2BotInsightRichmenuRichMenuIdDailyRoute,
  getV2BotInsightRichmenuRichMenuIdSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightHandler = app
  .openapi(getV2BotInsightDemographicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotInsightMessageDeliveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotInsightFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotInsightMessageEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotInsightMessageEventAggregationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotInsightRichmenuRichMenuIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotInsightRichmenuRichMenuIdDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
