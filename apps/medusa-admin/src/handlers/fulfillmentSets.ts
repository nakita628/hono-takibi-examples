import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminFulfillmentSetsIdRoute,
  deleteAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
  getAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
  postAdminFulfillmentSetsIdServiceZonesRoute,
  postAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fulfillmentSetsHandler = app
  .openapi(deleteAdminFulfillmentSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentSetsIdServiceZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFulfillmentSetsIdServiceZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentSetsIdServiceZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminFulfillmentSetsIdServiceZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
