import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1HistoricForexFromToDateRoute } from '../routes'

const app = new OpenAPIHono()

export const fxTradesHandler = app.openapi(getV1HistoricForexFromToDateRoute, (c) => {
  throw new Error('Not implemented')
})
