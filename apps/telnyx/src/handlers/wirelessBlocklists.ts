import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWirelessBlocklistsIdRoute,
  getWirelessBlocklistsIdRoute,
  getWirelessBlocklistsRoute,
  getWirelessBlocklistValuesRoute,
  patchWirelessBlocklistsIdRoute,
  postWirelessBlocklistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessBlocklistsHandler = app
  .openapi(getWirelessBlocklistValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessBlocklistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessBlocklistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWirelessBlocklistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
