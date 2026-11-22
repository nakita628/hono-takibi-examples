import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInsightsIdRoute,
  getInsightsIdRoute,
  postInsightsRoute,
  postInsightsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsHandler = app
  .openapi(deleteInsightsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInsightsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
