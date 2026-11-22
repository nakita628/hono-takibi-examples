import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ChainsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const chainsHandler = app.openapi(getV1ChainsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
