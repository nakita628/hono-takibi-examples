import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenaiDetailsRoute, getOpenaiSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const openaiHandler = app
  .openapi(getOpenaiDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenaiSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
