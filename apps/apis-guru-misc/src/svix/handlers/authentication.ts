import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1AuthAppAppIdExpireAllIndexRoute,
  postApiV1AuthAppPortalAccessAppIdIndexRoute,
  postApiV1AuthDashboardAccessAppIdIndexRoute,
  postApiV1AuthLogoutIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postApiV1AuthAppPortalAccessAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthAppAppIdExpireAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthDashboardAccessAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthLogoutIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
