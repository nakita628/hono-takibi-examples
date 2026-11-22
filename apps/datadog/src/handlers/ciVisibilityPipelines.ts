import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2CiPipelinesEventsRoute,
  postApiV2CiPipelineRoute,
  postApiV2CiPipelinesAnalyticsAggregateRoute,
  postApiV2CiPipelinesEventsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ciVisibilityPipelinesHandler = app
  .openapi(postApiV2CiPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CiPipelinesAnalyticsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CiPipelinesEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CiPipelinesEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
