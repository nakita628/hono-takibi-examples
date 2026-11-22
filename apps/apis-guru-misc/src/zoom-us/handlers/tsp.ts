import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdTspTspIdRoute,
  getTspRoute,
  getUsersUserIdTspRoute,
  getUsersUserIdTspTspIdRoute,
  patchTspRoute,
  patchUsersUserIdTspSettingsRoute,
  patchUsersUserIdTspTspIdRoute,
  postUsersUserIdTspRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tspHandler = app
  .openapi(getTspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTspRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTspSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTspTspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTspTspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTspTspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
