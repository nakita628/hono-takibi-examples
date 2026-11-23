import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateApplicationRoute, postActionUpdateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdateApplicationHandler = app
  .openapi(getActionUpdateApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
