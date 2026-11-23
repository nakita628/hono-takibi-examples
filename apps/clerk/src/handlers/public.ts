import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicInterstitialRoute } from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app.openapi(getPublicInterstitialRoute, (c) => {
  throw new Error('Not implemented')
})
