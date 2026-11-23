import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTerminalsUnderAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const getTerminalsUnderAccountHandler = app.openapi(
  postGetTerminalsUnderAccountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
