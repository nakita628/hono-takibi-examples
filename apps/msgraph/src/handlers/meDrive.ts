import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeDriveRoute,
  getMeDrivesCountRoute,
  getMeDrivesDriveIdRoute,
  getMeDrivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meDriveHandler = app
  .openapi(getMeDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDrivesDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
