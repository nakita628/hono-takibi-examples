import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteAccessKeyRoute, postActionDeleteAccessKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteAccessKeyHandler = app
  .openapi(getActionDeleteAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
