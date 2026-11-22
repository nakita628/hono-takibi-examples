import { OpenAPIHono } from '@hono/zod-openapi'
import { postIdentityValidationRoute } from '../routes'

const app = new OpenAPIHono()

export const identityValidationHandler = app.openapi(postIdentityValidationRoute, (c) => {
  throw new Error('Not implemented')
})
