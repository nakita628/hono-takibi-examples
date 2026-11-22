import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PortalMetersMeterSlugQueryRoute,
  getApiV1PortalTokensRoute,
  postApiV1PortalTokensInvalidateRoute,
  postApiV1PortalTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portalHandler = app
  .openapi(getApiV1PortalMetersMeterSlugQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PortalTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PortalTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PortalTokensInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
