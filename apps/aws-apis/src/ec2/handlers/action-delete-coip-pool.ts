import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteCoipPoolRoute, postActionDeleteCoipPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteCoipPoolHandler = app
  .openapi(getActionDeleteCoipPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCoipPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
