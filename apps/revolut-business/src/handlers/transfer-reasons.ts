import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransferReasonsRoute } from '../routes'

const app = new OpenAPIHono()

export const transferReasonsHandler = app.openapi(getTransferReasonsRoute, (c) => {
  throw new Error('Not implemented')
})
