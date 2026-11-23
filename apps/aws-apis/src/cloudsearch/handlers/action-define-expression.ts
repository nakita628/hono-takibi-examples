import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDefineExpressionRoute, postActionDefineExpressionRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDefineExpressionHandler = app
  .openapi(getActionDefineExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDefineExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
