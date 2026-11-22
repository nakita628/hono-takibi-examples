import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIpfsPinListIPFSPathRoute,
  getIpfsPinListRoute,
  postIpfsPinAddIPFSPathRoute,
  postIpfsPinRemoveIPFSPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipfsPinsHandler = app
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
