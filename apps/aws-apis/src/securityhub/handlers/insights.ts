import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInsightsInsightArnRoute,
  getInsightsResultsInsightArnRoute,
  patchInsightsInsightArnRoute,
  postInsightsGetRoute,
  postInsightsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsHandler = app
  .openapi(postInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInsightsInsightArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInsightsInsightArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsResultsInsightArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
