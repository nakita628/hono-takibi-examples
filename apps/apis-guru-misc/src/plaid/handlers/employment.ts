import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmploymentVerificationGetRoute } from '../routes'

const app = new OpenAPIHono()

export const employmentHandler = app.openapi(postEmploymentVerificationGetRoute, (c) => {
  throw new Error('Not implemented')
})
