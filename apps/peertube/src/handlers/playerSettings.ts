import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PlayerSettingsVideoChannelsChannelHandleRoute,
  getApiV1PlayerSettingsVideosIdRoute,
  putApiV1PlayerSettingsVideoChannelsChannelHandleRoute,
  putApiV1PlayerSettingsVideosIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playerSettingsHandler = app
  .openapi(getApiV1PlayerSettingsVideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PlayerSettingsVideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlayerSettingsVideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PlayerSettingsVideoChannelsChannelHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
