import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadarEntitiesLocationsLocationRoute, getRadarEntitiesLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const radarLocationsHandler = app
  .openapi(getRadarEntitiesLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEntitiesLocationsLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
