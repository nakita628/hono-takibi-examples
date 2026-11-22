import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPicoChargingIdRoute } from '../routes'

const app = new OpenAPIHono()

export const picoChargingHandler = app.openapi(getApiPicoChargingIdRoute, (c) => {
  throw new Error('Not implemented')
})
