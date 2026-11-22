import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ChannelEndpointsIdentifierRoute,
  getV1ChannelEndpointsIdentifierRoute,
  getV1ChannelEndpointsRoute,
  patchV1ChannelEndpointsIdentifierRoute,
  postV1ChannelEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelEndpointsHandler = app
  .openapi(getV1ChannelEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChannelEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelEndpointsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ChannelEndpointsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ChannelEndpointsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
