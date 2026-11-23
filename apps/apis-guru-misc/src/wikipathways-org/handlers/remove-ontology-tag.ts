import { OpenAPIHono } from '@hono/zod-openapi'
import { getRemoveOntologyTagRoute } from '../routes'

const app = new OpenAPIHono()

export const removeOntologyTagHandler = app.openapi(getRemoveOntologyTagRoute, (c) => {
  throw new Error('Not implemented')
})
