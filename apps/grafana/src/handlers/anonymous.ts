import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnonymousDevicesRoute, getAnonymousSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const anonymousHandler = app
  .openapi(getAnonymousDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnonymousSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
