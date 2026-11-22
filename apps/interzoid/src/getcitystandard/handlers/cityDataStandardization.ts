import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcitystandardRoute } from '../routes'

const app = new OpenAPIHono()

export const cityDataStandardizationHandler = app.openapi(getGetcitystandardRoute, (c) => {
  throw new Error('Not implemented')
})
