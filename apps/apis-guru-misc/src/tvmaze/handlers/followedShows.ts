import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserFollowsShowsShowIdRoute,
  getUserFollowsShowsRoute,
  getUserFollowsShowsShowIdRoute,
  putUserFollowsShowsShowIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const followedShowsHandler = app
  .openapi(getUserFollowsShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowsShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowsShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
