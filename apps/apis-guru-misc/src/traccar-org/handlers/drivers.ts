import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDriversIdRoute,
  getDriversRoute,
  postDriversRoute,
  putDriversIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const driversHandler = app
  .openapi(getDriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDriversIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDriversIdRoute, (c) => {
    throw new Error('Not implemented')
  })
