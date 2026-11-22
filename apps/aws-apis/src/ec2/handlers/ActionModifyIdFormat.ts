import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyIdFormatRoute, postActionModifyIdFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyIdFormatHandler = app
  .openapi(getActionModifyIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
