import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SystemTaskIdRoute, getApiV1SystemTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const taskHandler = app
  .openapi(getApiV1SystemTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
