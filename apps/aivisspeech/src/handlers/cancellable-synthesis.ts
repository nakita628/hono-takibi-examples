import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancellableSynthesisRoute } from '../routes'

const app = new OpenAPIHono()

export const cancellableSynthesisHandler = app.openapi(postCancellableSynthesisRoute, (c) => {
  throw new Error('Not implemented')
})
