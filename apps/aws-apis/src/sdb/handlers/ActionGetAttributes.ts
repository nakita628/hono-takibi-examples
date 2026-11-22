import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetAttributesRoute, postActionGetAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetAttributesHandler = app
  .openapi(getActionGetAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
