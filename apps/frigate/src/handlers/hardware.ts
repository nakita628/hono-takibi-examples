import { OpenAPIHono } from '@hono/zod-openapi'
import { getHardwareHwaccelRoute, getHardwareProbeRoute } from '../routes'

const app = new OpenAPIHono()

export const hardwareHandler = app
  .openapi(getHardwareProbeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareHwaccelRoute, (c) => {
    throw new Error('Not implemented')
  })
