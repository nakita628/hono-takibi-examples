import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDrivesDriveIdRoute,
  getDrivesDriveIdRoute,
  getDrivesRoute,
  patchDrivesDriveIdRoute,
  postDrivesDriveIdHideRoute,
  postDrivesDriveIdUnhideRoute,
  postDrivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drivesHandler = app
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
  .openapi(postDrivesDriveIdHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDrivesDriveIdUnhideRoute, (c) => {
    throw new Error('Not implemented')
  })
