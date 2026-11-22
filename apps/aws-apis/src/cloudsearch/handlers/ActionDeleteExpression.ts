import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteExpressionRoute, postActionDeleteExpressionRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteExpressionHandler = app
  .openapi(getActionDeleteExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
