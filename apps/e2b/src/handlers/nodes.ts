import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNodesNodeIDRoute,
  getNodesNodeIDSandboxesRoute,
  getNodesRoute,
  postNodesNodeIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(getNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIDSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
