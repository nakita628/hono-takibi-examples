import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdDriveRoute,
  getUsersUserIdDrivesCountRoute,
  getUsersUserIdDrivesDriveIdRoute,
  getUsersUserIdDrivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersDriveHandler = app
  .openapi(getUsersUserIdDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDrivesDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
