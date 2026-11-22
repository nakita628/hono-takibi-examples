import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNodesNodeIdRoute,
  getNodesNodeIdInheritedPropertiesRoute,
  getNodesNodeIdRoute,
  getNodesPendingRoute,
  getNodesRoute,
  getNodesStatusRoute,
  postNodesApplyPolicyRoute,
  postNodesNodeIdApplyPolicyRoute,
  postNodesNodeIdRoute,
  postNodesPendingNodeIdRoute,
  putNodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(getNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesApplyPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesPendingNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdApplyPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdInheritedPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
