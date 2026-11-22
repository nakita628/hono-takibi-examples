import { OpenAPIHono } from '@hono/zod-openapi'
import { getRiftboundContentV1ContentsRoute } from '../routes'

const app = new OpenAPIHono()

export const riftboundContentV1Handler = app.openapi(getRiftboundContentV1ContentsRoute, (c) => {
  throw new Error('Not implemented')
})
