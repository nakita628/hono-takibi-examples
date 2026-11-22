import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcountrymatchRoute } from '../routes'

const app = new OpenAPIHono()

export const countryMatchSimilarityKeyHandler = app.openapi(getGetcountrymatchRoute, (c) => {
  throw new Error('Not implemented')
})
