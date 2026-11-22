import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFacilitiesAllRoute,
  getFacilitiesIdRoute,
  getFacilitiesRoute,
  getIdsRoute,
  getNearbyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const facilitiesHandler = app
  .openapi(getFacilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFacilitiesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFacilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNearbyRoute, (c) => {
    throw new Error('Not implemented')
  })
