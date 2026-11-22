import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUserIdFollowedSitesRoute, getUsersUserIdFollowedSitesSiteIdRoute } from '../routes'

const app = new OpenAPIHono()

export const usersSiteHandler = app
  .openapi(getUsersUserIdFollowedSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowedSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
