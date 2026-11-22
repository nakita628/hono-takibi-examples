import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteAttributesRoute, postActionDeleteAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteAttributesHandler = app
  .openapi(getActionDeleteAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
