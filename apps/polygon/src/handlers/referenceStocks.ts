import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceSplitsRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceStocksHandler = app.openapi(getV3ReferenceSplitsRoute, (c) => {
  throw new Error('Not implemented')
})
