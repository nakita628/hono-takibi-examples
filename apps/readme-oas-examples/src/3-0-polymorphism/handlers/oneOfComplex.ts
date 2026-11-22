import { OpenAPIHono } from '@hono/zod-openapi'
import { postOneOfComplexRoute } from '../routes'

const app = new OpenAPIHono()

export const oneOfComplexHandler = app.openapi(postOneOfComplexRoute, (c) => {
  throw new Error('Not implemented')
})
