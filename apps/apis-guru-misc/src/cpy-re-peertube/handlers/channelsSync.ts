import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideoChannelSyncsChannelSyncIdRoute,
  postApiV1VideoChannelSyncsChannelSyncIdSyncRoute,
  postApiV1VideoChannelSyncsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsSyncHandler = app
  .openapi(postApiV1VideoChannelSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelSyncsChannelSyncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelSyncsChannelSyncIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
