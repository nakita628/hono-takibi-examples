import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiHttpMethodCodeIdRoute, getApiHttpMethodCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const httpMethodCodeHandler = app
  .openapi(getApiHttpMethodCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHttpMethodCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
