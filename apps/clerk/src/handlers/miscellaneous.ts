import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicInterstitialRoute } from '../routes'

const app = new OpenAPIHono()

export const miscellaneousHandler = app.openapi(getPublicInterstitialRoute, (c) => {
  throw new Error('Not implemented')
})
