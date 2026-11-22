import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdHoldRoute,
  getZonesZoneIdHoldRoute,
  patchZonesZoneIdHoldRoute,
  postZonesZoneIdHoldRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneHoldsHandler = app
  .openapi(deleteZonesZoneIdHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
