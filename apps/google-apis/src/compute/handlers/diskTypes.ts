import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectAggregatedDiskTypesRoute,
  getProjectsProjectZonesZoneDiskTypesDiskTypeRoute,
  getProjectsProjectZonesZoneDiskTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const diskTypesHandler = app
  .openapi(getProjectsProjectAggregatedDiskTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneDiskTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneDiskTypesDiskTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
