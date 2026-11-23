import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeauthorizeDataShareRoute, postActionDeauthorizeDataShareRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeauthorizeDataShareHandler = app
  .openapi(getActionDeauthorizeDataShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeauthorizeDataShareRoute, (c) => {
    throw new Error('Not implemented')
  })
