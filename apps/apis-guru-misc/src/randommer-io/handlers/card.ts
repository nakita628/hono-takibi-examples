import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiCardRoute, getApiCardTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const cardHandler = app
  .openapi(getApiCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCardTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
