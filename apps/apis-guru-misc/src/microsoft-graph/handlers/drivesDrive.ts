import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDrivesDriveIdRoute,
  getDrivesDriveIdRoute,
  getDrivesRoute,
  patchDrivesDriveIdRoute,
  postDrivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesDriveHandler = app
  .openapi(getDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDrivesDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrivesDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDrivesDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
