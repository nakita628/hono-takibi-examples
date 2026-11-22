import { OpenAPIHono } from '@hono/zod-openapi'
import { getStudiosNameRoute, getStudiosRoute } from '../routes'

const app = new OpenAPIHono()

export const studiosHandler = app
  .openapi(getStudiosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
