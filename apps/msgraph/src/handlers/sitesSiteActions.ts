import { OpenAPIHono } from '@hono/zod-openapi'
import { postSitesAddRoute, postSitesRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesSiteActionsHandler = app
  .openapi(postSitesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
