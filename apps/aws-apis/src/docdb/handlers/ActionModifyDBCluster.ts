import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyDBClusterRoute, postActionModifyDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDBClusterHandler = app
  .openapi(getActionModifyDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
