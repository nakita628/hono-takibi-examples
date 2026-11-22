import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSecurityCenterSecuritytxtRoute,
  getZonesZoneIdSecurityCenterSecuritytxtRoute,
  putZonesZoneIdSecurityCenterSecuritytxtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityTxtHandler = app
  .openapi(deleteZonesZoneIdSecurityCenterSecuritytxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSecurityCenterSecuritytxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSecurityCenterSecuritytxtRoute, (c) => {
    throw new Error('Not implemented')
  })
