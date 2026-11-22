import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateInsightsViewsInsightsViewIdRoute,
  getV1PrivateInsightsViewsInsightsViewIdRoute,
  getV1PrivateInsightsViewsRoute,
  patchV1PrivateInsightsViewsInsightsViewIdRoute,
  postV1PrivateInsightsViewsDeleteBatchRoute,
  postV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryRoute,
  postV1PrivateInsightsViewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsViewsHandler = app
  .openapi(getV1PrivateInsightsViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateInsightsViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateInsightsViewsInsightsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateInsightsViewsInsightsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateInsightsViewsInsightsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateInsightsViewsDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
