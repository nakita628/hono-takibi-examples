import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcountrymatchRoute } from '../routes'

const app = new OpenAPIHono()

export const getcountrymatchHandler = app.openapi(getGetcountrymatchRoute, (c) => {
  throw new Error('Not implemented')
})
