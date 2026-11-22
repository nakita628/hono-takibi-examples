import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcitymatchRoute } from '../routes'

const app = new OpenAPIHono()

export const cityNameSimilarityKeyHandler = app.openapi(getGetcitymatchRoute, (c) => {
  throw new Error('Not implemented')
})
