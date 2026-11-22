import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsGroupIdDriveRoute,
  getGroupsGroupIdDrivesDriveIdRoute,
  getGroupsGroupIdDrivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsDriveHandler = app
  .openapi(getGroupsGroupIdDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdDrivesDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
