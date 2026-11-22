import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3SystemTaskIdRoute, getApiV3SystemTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const taskHandler = app
  .openapi(getApiV3SystemTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
