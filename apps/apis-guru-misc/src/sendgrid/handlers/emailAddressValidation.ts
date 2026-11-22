import { OpenAPIHono } from '@hono/zod-openapi'
import { postValidationsEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const emailAddressValidationHandler = app.openapi(postValidationsEmailRoute, (c) => {
  throw new Error('Not implemented')
})
