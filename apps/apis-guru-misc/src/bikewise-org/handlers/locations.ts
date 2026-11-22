import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2LocationsMarkersRoute, getV2LocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getV2LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsMarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
