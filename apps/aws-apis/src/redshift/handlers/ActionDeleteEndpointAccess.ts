import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteEndpointAccessRoute, postActionDeleteEndpointAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteEndpointAccessHandler = app
  .openapi(getActionDeleteEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
