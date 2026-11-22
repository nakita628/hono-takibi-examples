import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdSyslogServersRoute,
  putNetworksNetworkIdSyslogServersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syslogServersHandler = app
  .openapi(getNetworksNetworkIdSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
