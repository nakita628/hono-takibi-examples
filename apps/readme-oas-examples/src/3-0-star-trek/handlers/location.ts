import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocationRoute, getLocationSearchRoute, postLocationSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const locationHandler = app
  .openapi(getLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
