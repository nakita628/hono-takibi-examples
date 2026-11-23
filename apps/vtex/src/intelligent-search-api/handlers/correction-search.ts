import { OpenAPIHono } from '@hono/zod-openapi'
import { getCorrectionSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const correctionSearchHandler = app.openapi(getCorrectionSearchRoute, (c) => {
  throw new Error('Not implemented')
})
