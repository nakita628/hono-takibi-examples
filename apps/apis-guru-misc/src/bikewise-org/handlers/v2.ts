import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2IncidentsIdRoute,
  getV2IncidentsRoute,
  getV2LocationsMarkersRoute,
  getV2LocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2IncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IncidentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsMarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
