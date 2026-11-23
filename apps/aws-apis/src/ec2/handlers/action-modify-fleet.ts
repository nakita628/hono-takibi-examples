import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyFleetRoute, postActionModifyFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyFleetHandler = app
  .openapi(getActionModifyFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
