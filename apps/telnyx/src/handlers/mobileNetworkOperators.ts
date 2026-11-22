import { OpenAPIHono } from '@hono/zod-openapi'
import { getMobileNetworkOperatorsRoute } from '../routes'

const app = new OpenAPIHono()

export const mobileNetworkOperatorsHandler = app.openapi(getMobileNetworkOperatorsRoute, (c) => {
  throw new Error('Not implemented')
})
