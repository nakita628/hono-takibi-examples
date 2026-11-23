import { OpenAPIHono } from '@hono/zod-openapi'
import { postGenerateGuidRoute } from '../routes'

const app = new OpenAPIHono()

export const generateGuidHandler = app.openapi(postGenerateGuidRoute, (c) => {
  throw new Error('Not implemented')
})
