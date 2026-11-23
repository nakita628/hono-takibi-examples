import { OpenAPIHono } from '@hono/zod-openapi'
import { getNameConceptTypeSpecificConceptJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const nameHandler = app.openapi(getNameConceptTypeSpecificConceptJsonRoute, (c) => {
  throw new Error('Not implemented')
})
