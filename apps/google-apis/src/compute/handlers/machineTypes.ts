import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectAggregatedMachineTypesRoute,
  getProjectsProjectZonesZoneMachineTypesMachineTypeRoute,
  getProjectsProjectZonesZoneMachineTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const machineTypesHandler = app
  .openapi(getProjectsProjectAggregatedMachineTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneMachineTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneMachineTypesMachineTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
