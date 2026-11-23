import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateAccessKeyRoute, postActionCreateAccessKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateAccessKeyHandler = app
  .openapi(getActionCreateAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
