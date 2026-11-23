import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSuggestedClubInvitesRoute } from '../routes'

const app = new OpenAPIHono()

export const getSuggestedClubInvitesHandler = app.openapi(postGetSuggestedClubInvitesRoute, (c) => {
  throw new Error('Not implemented')
})
