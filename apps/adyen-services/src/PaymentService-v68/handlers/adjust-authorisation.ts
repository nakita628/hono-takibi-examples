import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdjustAuthorisationRoute } from '../routes'

const app = new OpenAPIHono()

export const adjustAuthorisationHandler = app.openapi(postAdjustAuthorisationRoute, (c) => {
  throw new Error('Not implemented')
})
