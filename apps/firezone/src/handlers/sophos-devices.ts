import { OpenAPIHono } from '@hono/zod-openapi'
import { getSophosDevicesIdRoute, getSophosDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const sophosDevicesHandler = app
  .openapi(getSophosDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSophosDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
