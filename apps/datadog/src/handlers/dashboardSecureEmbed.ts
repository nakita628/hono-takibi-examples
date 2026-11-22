import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DashboardDashboardIdSharedSecureEmbedTokenRoute,
  getApiV2DashboardDashboardIdSharedSecureEmbedTokenRoute,
  patchApiV2DashboardDashboardIdSharedSecureEmbedTokenRoute,
  postApiV2DashboardDashboardIdSharedSecureEmbedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardSecureEmbedHandler = app
  .openapi(postApiV2DashboardDashboardIdSharedSecureEmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DashboardDashboardIdSharedSecureEmbedTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DashboardDashboardIdSharedSecureEmbedTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DashboardDashboardIdSharedSecureEmbedTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
