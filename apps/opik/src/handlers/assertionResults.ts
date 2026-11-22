import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1PrivateAssertionResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const assertionResultsHandler = app.openapi(putV1PrivateAssertionResultsRoute, (c) => {
  throw new Error('Not implemented')
})
