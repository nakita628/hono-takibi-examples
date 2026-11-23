import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeteringReadingRoute, postMeteringReadingRoute } from '../routes'

const app = new OpenAPIHono()

export const meteringHandler = app
  .openapi(getMeteringReadingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeteringReadingRoute, (c) => {
    throw new Error('Not implemented')
  })
