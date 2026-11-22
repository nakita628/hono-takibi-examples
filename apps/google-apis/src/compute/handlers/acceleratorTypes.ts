import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectAggregatedAcceleratorTypesRoute,
  getProjectsProjectZonesZoneAcceleratorTypesAcceleratorTypeRoute,
  getProjectsProjectZonesZoneAcceleratorTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const acceleratorTypesHandler = app
  .openapi(getProjectsProjectAggregatedAcceleratorTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneAcceleratorTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneAcceleratorTypesAcceleratorTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
