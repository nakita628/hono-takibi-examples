import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSuggestedInvitesRoute } from '../routes'

const app = new OpenAPIHono()

export const getSuggestedInvitesHandler = app.openapi(postGetSuggestedInvitesRoute, (c) => {
  throw new Error('Not implemented')
})
