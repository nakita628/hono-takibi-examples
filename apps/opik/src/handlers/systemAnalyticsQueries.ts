import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1InternalAnalyticsQueriesProjectsProjectIdRoute,
  postV1InternalAnalyticsQueriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemAnalyticsQueriesHandler = app
  .openapi(postV1InternalAnalyticsQueriesProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InternalAnalyticsQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
