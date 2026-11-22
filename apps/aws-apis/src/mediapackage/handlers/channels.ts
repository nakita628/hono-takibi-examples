import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsIdRoute,
  getChannelsIdRoute,
  getChannelsRoute,
  postChannelsRoute,
  putChannelsIdConfigureLogsRoute,
  putChannelsIdCredentialsRoute,
  putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRoute,
  putChannelsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(putChannelsIdConfigureLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
