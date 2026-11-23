import { OpenAPIHono } from '@hono/zod-openapi'
import { getIntuneDevicesIdRoute, getIntuneDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const intuneDevicesHandler = app
  .openapi(getIntuneDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntuneDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
