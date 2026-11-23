import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseUpdatesRoute } from '../routes'

const app = new OpenAPIHono()

export const caseUpdatesHandler = app.openapi(getCaseUpdatesRoute, (c) => {
  throw new Error('Not implemented')
})
