import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DriversIdRoute,
  getV1DriversIdRoute,
  getV1DriversRoute,
  patchV1DriversIdRoute,
  postV1DriversRoute,
} from '../routes'

const app = new OpenAPIHono()

export const driversHandler = app
  .openapi(getV1DriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DriversIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DriversIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DriversIdRoute, (c) => {
    throw new Error('Not implemented')
  })
