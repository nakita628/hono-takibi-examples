import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpLoginConfirmRoute } from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app.openapi(postIndexPhpLoginConfirmRoute, (c) => {
  throw new Error('Not implemented')
})
