import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeFollowingFollowUserIdRoute,
  deleteUsersUserIdFollowingFollowUserIdRoute,
  getMeFollowersRoute,
  getMeFollowingFollowUserIdRoute,
  getMeFollowingRoute,
  getUsersUserIdFollowersRoute,
  getUsersUserIdFollowingFollowUserIdRoute,
  getUsersUserIdFollowingRoute,
  postMeFollowingRoute,
  postUsersUserIdFollowingRoute,
  putMeFollowingFollowUserIdRoute,
  putUsersUserIdFollowingFollowUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersFollowsHandler = app
  .openapi(getMeFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdFollowingFollowUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
