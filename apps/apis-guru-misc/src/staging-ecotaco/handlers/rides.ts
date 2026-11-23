import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRidesIdCancelFeesRoute,
  getRidesIdCancelRoute,
  getRidesIdEstimateRoute,
  getRidesIdRoute,
  postRidesIdReserveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ridesHandler = app
  .openapi(getRidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRidesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRidesIdCancelFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRidesIdEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRidesIdReserveRoute, (c) => {
    throw new Error('Not implemented')
  })
