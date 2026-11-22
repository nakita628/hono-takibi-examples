import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdDriveRoute,
  getSitesSiteIdDrivesDriveIdRoute,
  getSitesSiteIdDrivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDriveHandler = app
  .openapi(getSitesSiteIdDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDrivesDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
