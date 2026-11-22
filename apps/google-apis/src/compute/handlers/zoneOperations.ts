import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneOperationsOperationRoute,
  getProjectsProjectZonesZoneOperationsOperationRoute,
  getProjectsProjectZonesZoneOperationsRoute,
  postProjectsProjectZonesZoneOperationsOperationWaitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneOperationsHandler = app
  .openapi(getProjectsProjectZonesZoneOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneOperationsOperationWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
