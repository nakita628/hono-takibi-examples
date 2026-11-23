import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreateSessionRoute, postCreateSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const createSessionHandler = app
  .openapi(getCreateSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
