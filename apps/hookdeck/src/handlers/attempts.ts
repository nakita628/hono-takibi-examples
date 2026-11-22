import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttemptsIdRoute, getAttemptsRoute } from '../routes'

const app = new OpenAPIHono()

export const attemptsHandler = app
  .openapi(getAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttemptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
