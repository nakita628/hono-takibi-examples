import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdDriveRoute,
  getSitesSiteIdDrivesCountRoute,
  getSitesSiteIdDrivesDriveIdRoute,
  getSitesSiteIdDrivesRoute,
  getSitesSiteIdGetByPathPathPathDriveRoute,
  getSitesSiteIdGetByPathPathPathDrivesRoute,
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
  .openapi(getSitesSiteIdDrivesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathDriveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
