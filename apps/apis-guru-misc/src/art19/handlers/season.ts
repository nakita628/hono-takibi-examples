import { OpenAPIHono } from '@hono/zod-openapi'
import { getSeasonsIdRoute, getSeasonsRoute } from '../routes'

const app = new OpenAPIHono()

export const seasonHandler = app
  .openapi(getSeasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
