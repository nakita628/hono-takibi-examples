import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideoChannelsOwnershipIdRoute,
  deleteApiV1VideosOwnershipIdRoute,
  getApiV1VideoChannelsChannelHandleOwnershipRoute,
  getApiV1VideoChannelsOwnershipRoute,
  getApiV1VideosOwnershipRoute,
  getApiV1VideosVideoIdOrUUIDOwnershipRoute,
  postApiV1VideoChannelsChannelHandleGiveOwnershipRoute,
  postApiV1VideoChannelsOwnershipIdAcceptRoute,
  postApiV1VideoChannelsOwnershipIdRefuseRoute,
  postApiV1VideosOwnershipIdAcceptRoute,
  postApiV1VideosOwnershipIdRefuseRoute,
  postApiV1VideosVideoIdOrUUIDGiveOwnershipRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ownershipChangeHandler = app
  .openapi(getApiV1VideosOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosOwnershipIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosOwnershipIdRefuseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosVideoIdOrUUIDOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosVideoIdOrUUIDGiveOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsOwnershipIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsOwnershipIdRefuseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoChannelsOwnershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoChannelsChannelHandleGiveOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
