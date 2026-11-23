import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRoute,
  postAdminPortalLinkTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminPortalLinkTokensHandler = app
  .openapi(postAdminPortalLinkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
