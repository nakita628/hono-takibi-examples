import { OpenAPIHono } from '@hono/zod-openapi'
import { putUuidDtmfRoute } from '../routes'

const app = new OpenAPIHono()

export const playDTMFHandler = app.openapi(putUuidDtmfRoute, (c) => {
  throw new Error('Not implemented')
})
