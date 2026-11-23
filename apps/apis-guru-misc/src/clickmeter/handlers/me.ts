import { OpenAPIHono } from '@hono/zod-openapi'
import { getMePlanRoute, getMeRoute } from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
