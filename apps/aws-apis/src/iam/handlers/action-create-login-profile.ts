import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateLoginProfileRoute, postActionCreateLoginProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateLoginProfileHandler = app
  .openapi(getActionCreateLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
