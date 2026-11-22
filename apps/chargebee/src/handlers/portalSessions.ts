import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPortalSessionsPortalSessionIdRoute,
  postPortalSessionsPortalSessionIdActivateRoute,
  postPortalSessionsPortalSessionIdLogoutRoute,
  postPortalSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portalSessionsHandler = app
  .openapi(postPortalSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortalSessionsPortalSessionIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortalSessionsPortalSessionIdLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortalSessionsPortalSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
