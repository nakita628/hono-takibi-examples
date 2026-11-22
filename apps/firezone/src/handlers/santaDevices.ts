import { OpenAPIHono } from '@hono/zod-openapi'
import { getSantaDevicesIdRoute, getSantaDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const santaDevicesHandler = app
  .openapi(getSantaDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSantaDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
