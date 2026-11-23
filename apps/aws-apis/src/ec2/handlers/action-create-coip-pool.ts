import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateCoipPoolRoute, postActionCreateCoipPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateCoipPoolHandler = app
  .openapi(getActionCreateCoipPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCoipPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
