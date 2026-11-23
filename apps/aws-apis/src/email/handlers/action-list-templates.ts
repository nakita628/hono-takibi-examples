import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListTemplatesRoute, postActionListTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListTemplatesHandler = app
  .openapi(getActionListTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
