import { OpenAPIHono } from '@hono/zod-openapi'
import { postTestingTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const testingTokensHandler = app.openapi(postTestingTokensRoute, (c) => {
  throw new Error('Not implemented')
})
