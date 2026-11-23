import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserSystemuidsRoute,
  postUserDeviceQuitRoute,
  postUserOnlinestatusRoute,
  postUserSystemuidsAddRoute,
  postUserSystemuidsAddToCacheRoute,
  postUserSystemuidsRemoveFromCacheRoute,
  postUserSystemuidsRemoveRoute,
  postUserTokenRoute,
  postUserUpdatePluginNoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postUserTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserDeviceQuitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOnlinestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSystemuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSystemuidsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSystemuidsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSystemuidsAddToCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSystemuidsRemoveFromCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUpdatePluginNoRoute, (c) => {
    throw new Error('Not implemented')
  })
