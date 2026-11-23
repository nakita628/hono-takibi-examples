import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListTypesRoute, postActionListTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListTypesHandler = app
  .openapi(getActionListTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
