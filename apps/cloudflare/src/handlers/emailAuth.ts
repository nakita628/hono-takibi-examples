import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdEmailAuthDmarcReportsRoute,
  getZonesZoneIdEmailAuthSpfInspectRoute,
  patchZonesZoneIdEmailAuthDmarcReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailAuthHandler = app
  .openapi(getZonesZoneIdEmailAuthDmarcReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdEmailAuthDmarcReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailAuthSpfInspectRoute, (c) => {
    throw new Error('Not implemented')
  })
