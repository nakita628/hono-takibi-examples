import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableMetricsCollectionRoute,
  postActionDisableMetricsCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisableMetricsCollectionHandler = app
  .openapi(getActionDisableMetricsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableMetricsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
