import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlossaryRoute } from '../routes'

const app = new OpenAPIHono()

export const glossaryHandler = app.openapi(getGlossaryRoute, (c) => {
  throw new Error('Not implemented')
})
