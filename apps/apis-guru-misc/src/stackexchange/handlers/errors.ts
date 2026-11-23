import { OpenAPIHono } from '@hono/zod-openapi'
import { getErrorsIdRoute, getErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const errorsHandler = app
  .openapi(getErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getErrorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
