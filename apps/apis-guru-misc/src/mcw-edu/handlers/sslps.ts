import { OpenAPIHono } from '@hono/zod-openapi'
import { getSslpsMappedChrStartStopMapKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const sslpsHandler = app.openapi(getSslpsMappedChrStartStopMapKeyRoute, (c) => {
  throw new Error('Not implemented')
})
