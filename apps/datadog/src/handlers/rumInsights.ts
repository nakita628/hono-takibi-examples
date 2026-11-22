import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV2RumQueryInsightAggregatedLongTasksRoute,
  postApiV2RumQueryInsightAggregatedWaterfallRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumInsightsHandler = app
  .openapi(postApiV2RumQueryInsightAggregatedLongTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumQueryInsightAggregatedWaterfallRoute, (c) => {
    throw new Error('Not implemented')
  })
