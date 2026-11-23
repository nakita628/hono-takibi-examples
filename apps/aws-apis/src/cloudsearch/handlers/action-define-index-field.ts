import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDefineIndexFieldRoute, postActionDefineIndexFieldRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDefineIndexFieldHandler = app
  .openapi(getActionDefineIndexFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDefineIndexFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
