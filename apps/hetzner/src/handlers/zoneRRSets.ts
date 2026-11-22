import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesIdOrNameRrsetsRrNameRrTypeRoute,
  getZonesIdOrNameRrsetsRoute,
  getZonesIdOrNameRrsetsRrNameRrTypeRoute,
  postZonesIdOrNameRrsetsRoute,
  putZonesIdOrNameRrsetsRrNameRrTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneRRSetsHandler = app
  .openapi(getZonesIdOrNameRrsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesIdOrNameRrsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesIdOrNameRrsetsRrNameRrTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesIdOrNameRrsetsRrNameRrTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesIdOrNameRrsetsRrNameRrTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
