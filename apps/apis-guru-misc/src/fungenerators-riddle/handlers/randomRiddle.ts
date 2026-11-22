import { OpenAPIHono } from '@hono/zod-openapi'
import { getRiddleRandomRoute, getRiddleSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const randomRiddleHandler = app
  .openapi(getRiddleRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiddleSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
