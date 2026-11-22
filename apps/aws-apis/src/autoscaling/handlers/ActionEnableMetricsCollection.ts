import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableMetricsCollectionRoute,
  postActionEnableMetricsCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionEnableMetricsCollectionHandler = app
  .openapi(getActionEnableMetricsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableMetricsCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
