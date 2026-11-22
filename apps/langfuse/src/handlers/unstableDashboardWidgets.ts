import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  getApiPublicUnstableDashboardWidgetsRoute,
  getApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  patchApiPublicUnstableDashboardWidgetsWidgetIdRoute,
  postApiPublicUnstableDashboardWidgetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unstableDashboardWidgetsHandler = app
  .openapi(getApiPublicUnstableDashboardWidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicUnstableDashboardWidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableDashboardWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicUnstableDashboardWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicUnstableDashboardWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
