import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserFollowsPeoplePersonIdRoute,
  getUserFollowsPeoplePersonIdRoute,
  getUserFollowsPeopleRoute,
  putUserFollowsPeoplePersonIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const followedPeopleHandler = app
  .openapi(getUserFollowsPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowsPeoplePersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsPeoplePersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowsPeoplePersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
