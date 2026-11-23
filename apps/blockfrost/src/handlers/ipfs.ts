import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIpfsGatewayIPFSPathRoute,
  getIpfsPinListIPFSPathRoute,
  getIpfsPinListRoute,
  postIpfsAddRoute,
  postIpfsPinAddIPFSPathRoute,
  postIpfsPinRemoveIPFSPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipfsHandler = app
  .openapi(postIpfsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpfsGatewayIPFSPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpfsPinAddIPFSPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpfsPinListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpfsPinListIPFSPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpfsPinRemoveIPFSPathRoute, (c) => {
    throw new Error('Not implemented')
  })
