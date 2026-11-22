import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNodeNodeIdAllocationsRoute,
  getNodeNodeIdRoute,
  getNodesRoute,
  postNodeNodeIdDrainRoute,
  postNodeNodeIdEligibilityRoute,
  postNodeNodeIdPurgeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(getNodeNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeNodeIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodeNodeIdDrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodeNodeIdEligibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodeNodeIdPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
