import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OpenCloseCryptoFromToDateRoute } from '../routes'

const app = new OpenAPIHono()

export const cryptoOpenCloseHandler = app.openapi(getV1OpenCloseCryptoFromToDateRoute, (c) => {
  throw new Error('Not implemented')
})
