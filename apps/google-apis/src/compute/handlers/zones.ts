import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectsProjectZonesRoute, getProjectsProjectZonesZoneRoute } from '../routes'

const app = new OpenAPIHono()

export const zonesHandler = app
  .openapi(getProjectsProjectZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
