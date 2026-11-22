import { OpenAPIHono } from '@hono/zod-openapi'
import { getBikePointIdRoute, getBikePointRoute, getBikePointSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const bikePointHandler = app
  .openapi(getBikePointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBikePointSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBikePointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
