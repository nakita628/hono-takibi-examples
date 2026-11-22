import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdFollowedSitesCountRoute,
  getUsersUserIdFollowedSitesRoute,
  getUsersUserIdFollowedSitesSiteIdRoute,
  postUsersUserIdFollowedSitesAddRoute,
  postUsersUserIdFollowedSitesRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersSiteHandler = app
  .openapi(getUsersUserIdFollowedSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowedSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowedSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdFollowedSitesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdFollowedSitesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
