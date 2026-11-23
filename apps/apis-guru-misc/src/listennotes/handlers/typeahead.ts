import { OpenAPIHono } from '@hono/zod-openapi'
import { getTypeaheadRoute } from '../routes'

const app = new OpenAPIHono()

export const typeaheadHandler = app.openapi(getTypeaheadRoute, (c) => {
  throw new Error('Not implemented')
})
