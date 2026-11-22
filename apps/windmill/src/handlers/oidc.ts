import { OpenAPIHono } from '@hono/zod-openapi'
import { getOidcSigningStatusRoute, postWWorkspaceOidcTokenAudienceRoute } from '../routes'

const app = new OpenAPIHono()

export const oidcHandler = app
  .openapi(getOidcSigningStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOidcTokenAudienceRoute, (c) => {
    throw new Error('Not implemented')
  })
