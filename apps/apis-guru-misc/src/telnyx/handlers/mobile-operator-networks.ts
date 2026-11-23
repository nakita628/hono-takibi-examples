import { OpenAPIHono } from '@hono/zod-openapi'
import { getMobileOperatorNetworksRoute } from '../routes'

const app = new OpenAPIHono()

export const mobileOperatorNetworksHandler = app.openapi(getMobileOperatorNetworksRoute, (c) => {
  throw new Error('Not implemented')
})
