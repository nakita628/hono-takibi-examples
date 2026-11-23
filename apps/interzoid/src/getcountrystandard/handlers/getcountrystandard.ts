import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcountrystandardRoute } from '../routes'

const app = new OpenAPIHono()

export const getcountrystandardHandler = app.openapi(getGetcountrystandardRoute, (c) => {
  throw new Error('Not implemented')
})
