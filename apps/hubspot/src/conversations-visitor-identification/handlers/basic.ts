import { OpenAPIHono } from '@hono/zod-openapi'
import { postVisitorIdentification202609TokensCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(postVisitorIdentification202609TokensCreateRoute, (c) => {
  throw new Error('Not implemented')
})
