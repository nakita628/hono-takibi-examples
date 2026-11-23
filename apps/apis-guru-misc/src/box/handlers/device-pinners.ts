import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicePinnersDevicePinnerIdRoute,
  getDevicePinnersDevicePinnerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicePinnersHandler = app
  .openapi(deleteDevicePinnersDevicePinnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicePinnersDevicePinnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
