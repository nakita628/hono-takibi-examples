import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyEndpointAccessRoute, postActionModifyEndpointAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyEndpointAccessHandler = app
  .openapi(getActionModifyEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
