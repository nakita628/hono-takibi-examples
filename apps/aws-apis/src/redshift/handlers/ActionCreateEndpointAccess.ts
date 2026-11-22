import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateEndpointAccessRoute, postActionCreateEndpointAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateEndpointAccessHandler = app
  .openapi(getActionCreateEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateEndpointAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
