import { OpenAPIHono } from '@hono/zod-openapi'
import { getHistoryRoute, getMeRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
