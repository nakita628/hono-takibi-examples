import { OpenAPIHono } from '@hono/zod-openapi'
import { getErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const errorsHandler = app.openapi(getErrorsRoute, (c) => {
  throw new Error('Not implemented')
})
