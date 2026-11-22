import { OpenAPIHono } from '@hono/zod-openapi'
import { getVXReferenceIposRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceStocksIposHandler = app.openapi(getVXReferenceIposRoute, (c) => {
  throw new Error('Not implemented')
})
