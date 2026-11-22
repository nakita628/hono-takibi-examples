import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ChannelConnectionsIdentifierRoute,
  getV1ChannelConnectionsIdentifierRoute,
  getV1ChannelConnectionsRoute,
  patchV1ChannelConnectionsIdentifierRoute,
  postV1ChannelConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelConnectionsHandler = app
  .openapi(getV1ChannelConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChannelConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelConnectionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ChannelConnectionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ChannelConnectionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
