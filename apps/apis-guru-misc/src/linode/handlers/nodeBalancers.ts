import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  deleteNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  deleteNodebalancersNodeBalancerIdRoute,
  getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  getNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
  getNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  getNodebalancersNodeBalancerIdConfigsRoute,
  getNodebalancersNodeBalancerIdRoute,
  getNodebalancersNodeBalancerIdStatsRoute,
  getNodebalancersRoute,
  postNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
  postNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute,
  postNodebalancersNodeBalancerIdConfigsRoute,
  postNodebalancersRoute,
  putNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  putNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  putNodebalancersNodeBalancerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeBalancersHandler = app
  .openapi(getNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodebalancersNodeBalancerIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodebalancersNodeBalancerIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodebalancersNodeBalancerIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
