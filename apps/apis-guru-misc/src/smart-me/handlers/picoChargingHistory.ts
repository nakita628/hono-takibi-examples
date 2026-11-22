import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPicoHistoryIdRoute } from '../routes'

const app = new OpenAPIHono()

export const picoChargingHistoryHandler = app.openapi(getApiPicoHistoryIdRoute, (c) => {
  throw new Error('Not implemented')
})
