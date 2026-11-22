import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiCommentsIdRoute, getApiCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getApiCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
