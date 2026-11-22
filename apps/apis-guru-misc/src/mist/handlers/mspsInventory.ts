import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MspsMspIdInventoryDeviceMacRoute } from '../routes'

const app = new OpenAPIHono()

export const mspsInventoryHandler = app.openapi(getApiV1MspsMspIdInventoryDeviceMacRoute, (c) => {
  throw new Error('Not implemented')
})
