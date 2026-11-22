import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectAggregatedNodeTypesRoute,
  getProjectsProjectZonesZoneNodeTypesNodeTypeRoute,
  getProjectsProjectZonesZoneNodeTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeTypesHandler = app
  .openapi(getProjectsProjectAggregatedNodeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneNodeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneNodeTypesNodeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
