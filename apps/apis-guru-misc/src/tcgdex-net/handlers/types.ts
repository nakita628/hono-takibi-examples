import { OpenAPIHono } from '@hono/zod-openapi'
import { getTypesRoute, getTypesTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const typesHandler = app
  .openapi(getTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTypesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
