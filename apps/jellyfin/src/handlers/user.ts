import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdRoute,
  getUsersMeRoute,
  getUsersPublicRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  postUsersConfigurationRoute,
  postUsersNewRoute,
  postUsersPasswordRoute,
  postUsersRoute,
  postUsersUserIdPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
