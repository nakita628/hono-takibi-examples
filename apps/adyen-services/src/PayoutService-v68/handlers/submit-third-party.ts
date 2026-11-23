import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubmitThirdPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const submitThirdPartyHandler = app.openapi(postSubmitThirdPartyRoute, (c) => {
  throw new Error('Not implemented')
})
