import { OpenAPIHono } from '@hono/zod-openapi'
import { getAddonsIdIndexRoute, getAddonsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const addonsHandler = app
  .openapi(getAddonsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddonsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
