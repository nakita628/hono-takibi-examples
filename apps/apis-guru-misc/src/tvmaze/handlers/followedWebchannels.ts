import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserFollowsWebchannelsWebchannelIdRoute,
  getUserFollowsWebchannelsRoute,
  getUserFollowsWebchannelsWebchannelIdRoute,
  putUserFollowsWebchannelsWebchannelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const followedWebchannelsHandler = app
  .openapi(getUserFollowsWebchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowsWebchannelsWebchannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsWebchannelsWebchannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowsWebchannelsWebchannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
