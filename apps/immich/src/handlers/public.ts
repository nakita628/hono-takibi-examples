import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicConfigDefaultsRoute, getPublicConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getPublicConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicConfigDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
