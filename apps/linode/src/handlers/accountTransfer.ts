import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionAccountTransferRoute } from '../routes'

const app = new OpenAPIHono()

export const accountTransferHandler = app.openapi(getApiVersionAccountTransferRoute, (c) => {
  throw new Error('Not implemented')
})
