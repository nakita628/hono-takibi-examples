import { OpenAPIHono } from '@hono/zod-openapi'
import { getGraphEdgesFromIdRoute, getGraphNodeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const graphHandler = app
  .openapi(getGraphEdgesFromIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGraphNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
