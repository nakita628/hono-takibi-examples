import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteExpressionRoute, postActionDeleteExpressionRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteExpressionHandler = app
  .openapi(getActionDeleteExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
