import { OpenAPIHono } from '@hono/zod-openapi'
import { getInfraNodesIdRoute, getInfraNodesRoute } from '../routes'

const app = new OpenAPIHono()

export const infraHandler = app
  .openapi(getInfraNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfraNodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
