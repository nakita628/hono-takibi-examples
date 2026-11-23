import { OpenAPIHono } from '@hono/zod-openapi'
import { getOnvifProbeRoute } from '../routes'

const app = new OpenAPIHono()

export const onvifHandler = app.openapi(getOnvifProbeRoute, (c) => {
  throw new Error('Not implemented')
})
