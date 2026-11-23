import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListImportsRoute, postActionListImportsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListImportsHandler = app
  .openapi(getActionListImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
