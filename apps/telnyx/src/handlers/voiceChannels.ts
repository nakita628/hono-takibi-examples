import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelZonesRoute,
  getInboundChannelsRoute,
  getListChannelZoneIdRoute,
  getListRoute,
  patchInboundChannelsRoute,
  putChannelZonesChannelZoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voiceChannelsHandler = app
  .openapi(getChannelZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelZonesChannelZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboundChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInboundChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListChannelZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
