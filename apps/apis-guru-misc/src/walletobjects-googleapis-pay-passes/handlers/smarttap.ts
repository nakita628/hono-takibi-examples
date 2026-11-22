import { OpenAPIHono } from '@hono/zod-openapi'
import { postWalletobjectsV1SmartTapRoute } from '../routes'

const app = new OpenAPIHono()

export const smarttapHandler = app.openapi(postWalletobjectsV1SmartTapRoute, (c) => {
  throw new Error('Not implemented')
})
