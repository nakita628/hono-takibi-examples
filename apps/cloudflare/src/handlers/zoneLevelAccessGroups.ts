import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAccessGroupsGroupIdRoute,
  getZonesZoneIdAccessGroupsGroupIdRoute,
  getZonesZoneIdAccessGroupsRoute,
  postZonesZoneIdAccessGroupsRoute,
  putZonesZoneIdAccessGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelAccessGroupsHandler = app
  .openapi(getZonesZoneIdAccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
