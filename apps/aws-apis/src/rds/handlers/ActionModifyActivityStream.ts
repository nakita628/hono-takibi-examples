import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyActivityStreamRoute, postActionModifyActivityStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyActivityStreamHandler = app
  .openapi(getActionModifyActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
