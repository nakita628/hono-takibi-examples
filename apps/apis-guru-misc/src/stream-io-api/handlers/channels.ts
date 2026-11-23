import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsTypeIdFileRoute,
  deleteChannelsTypeIdImageRoute,
  deleteChannelsTypeIdRoute,
  getChannelsTypeIdMessagesRoute,
  patchChannelsTypeIdRoute,
  postChannelsDeleteRoute,
  postChannelsReadRoute,
  postChannelsRoute,
  postChannelsTypeIdCallRoute,
  postChannelsTypeIdEventRoute,
  postChannelsTypeIdFileRoute,
  postChannelsTypeIdHideRoute,
  postChannelsTypeIdImageRoute,
  postChannelsTypeIdMessageRoute,
  postChannelsTypeIdQueryRoute,
  postChannelsTypeIdReadRoute,
  postChannelsTypeIdRoute,
  postChannelsTypeIdShowRoute,
  postChannelsTypeIdStopWatchingRoute,
  postChannelsTypeIdTruncateRoute,
  postChannelsTypeIdUnreadRoute,
  postChannelsTypeQueryRoute,
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
  .openapi(postChannelsTypeIdEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsTypeIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsTypeIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsTypeIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsTypeIdMessagesRoute, (c) => {
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
