import { OpenAPIHono } from '@hono/zod-openapi'
import { postTechnicalCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const technicalCancelHandler = app.openapi(postTechnicalCancelRoute, (c) => {
  throw new Error('Not implemented')
})
