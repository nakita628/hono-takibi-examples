import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutAttributesRoute, postActionPutAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPutAttributesHandler = app
  .openapi(getActionPutAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
