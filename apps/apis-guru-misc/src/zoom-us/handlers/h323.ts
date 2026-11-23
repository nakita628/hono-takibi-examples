import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteH323DevicesDeviceIdRoute,
  getH323DevicesRoute,
  patchH323DevicesDeviceIdRoute,
  postH323DevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const h323Handler = app
  .openapi(getH323DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postH323DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteH323DevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchH323DevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
