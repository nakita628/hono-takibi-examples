import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcountrystandardRoute } from '../routes'

const app = new OpenAPIHono()

export const countryNameStandardizationHandler = app.openapi(getGetcountrystandardRoute, (c) => {
  throw new Error('Not implemented')
})
