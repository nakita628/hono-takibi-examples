import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartActivityStreamRoute, postActionStartActivityStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const actionStartActivityStreamHandler = app
  .openapi(getActionStartActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartActivityStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
