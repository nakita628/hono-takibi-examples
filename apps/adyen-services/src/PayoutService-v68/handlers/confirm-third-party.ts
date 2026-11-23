import { OpenAPIHono } from '@hono/zod-openapi'
import { postConfirmThirdPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const confirmThirdPartyHandler = app.openapi(postConfirmThirdPartyRoute, (c) => {
  throw new Error('Not implemented')
})
