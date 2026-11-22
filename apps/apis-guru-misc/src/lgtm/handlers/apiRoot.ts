import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiRoute, getRoute } from '../routes'

const app = new OpenAPIHono()

export const apiRootHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
