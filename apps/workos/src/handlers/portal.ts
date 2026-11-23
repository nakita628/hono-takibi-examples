import { OpenAPIHono } from '@hono/zod-openapi'
import { postPortalGenerateLinkRoute, postPortalRevokeLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const portalHandler = app
  .openapi(postPortalGenerateLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortalRevokeLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
