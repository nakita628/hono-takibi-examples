import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsTypeIdRoute,
  getExportChannelsIdRoute,
  getMembersRoute,
  getSearchRoute,
  patchChannelsTypeIdRoute,
  postChannelsDeleteRoute,
  postChannelsReadRoute,
  postChannelsRoute,
  postChannelsTypeIdCallRoute,
  postChannelsTypeIdHideRoute,
  postChannelsTypeIdQueryRoute,
  postChannelsTypeIdReadRoute,
  postChannelsTypeIdRoute,
  postChannelsTypeIdShowRoute,
  postChannelsTypeIdStopWatchingRoute,
  postChannelsTypeIdTruncateRoute,
  postChannelsTypeIdUnreadRoute,
  postChannelsTypeQueryRoute,
  postExportChannelsRoute,
  postModerationMuteChannelRoute,
  postModerationUnmuteChannelRoute,
  postSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(postChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdStopWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdTruncateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationMuteChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationUnmuteChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
