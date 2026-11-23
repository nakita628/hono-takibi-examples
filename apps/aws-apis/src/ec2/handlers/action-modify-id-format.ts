import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyIdFormatRoute, postActionModifyIdFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyIdFormatHandler = app
  .openapi(getActionModifyIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
