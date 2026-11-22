import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyListenerRoute, postActionModifyListenerRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyListenerHandler = app
  .openapi(getActionModifyListenerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyListenerRoute, (c) => {
    throw new Error('Not implemented')
  })
