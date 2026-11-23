import { OpenAPIHono } from '@hono/zod-openapi'
import { getDefenderDevicesDefenderDeviceRoute, getDefenderDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const defenderDevicesHandler = app
  .openapi(getDefenderDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDefenderDevicesDefenderDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
