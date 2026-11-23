import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateApplicationRoute, postActionCreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateApplicationHandler = app
  .openapi(getActionCreateApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
