import { OpenAPIHono } from '@hono/zod-openapi'
import { getSaveOntologyTagRoute } from '../routes'

const app = new OpenAPIHono()

export const saveOntologyTagHandler = app.openapi(getSaveOntologyTagRoute, (c) => {
  throw new Error('Not implemented')
})
