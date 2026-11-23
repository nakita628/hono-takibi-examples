import { OpenAPIHono } from '@hono/zod-openapi'
import { getApisApiVersionRestRoute, getApisRoute } from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiVersionRestRoute, (c) => {
    throw new Error('Not implemented')
  })
