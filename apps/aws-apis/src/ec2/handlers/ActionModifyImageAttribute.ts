import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyImageAttributeRoute, postActionModifyImageAttributeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyImageAttributeHandler = app
  .openapi(getActionModifyImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyImageAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
