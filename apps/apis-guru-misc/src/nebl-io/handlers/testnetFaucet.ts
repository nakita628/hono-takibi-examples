import { OpenAPIHono } from '@hono/zod-openapi'
import { getTestnetFaucetRoute } from '../routes'

const app = new OpenAPIHono()

export const testnetFaucetHandler = app.openapi(getTestnetFaucetRoute, (c) => {
  throw new Error('Not implemented')
})
