import { OpenAPIHono } from '@hono/zod-openapi'
import { getLawRevisionsLawIdOrNumRoute } from '../routes'

const app = new OpenAPIHono()

export const lawRevisionsHandler = app.openapi(getLawRevisionsLawIdOrNumRoute, (c) => {
  throw new Error('Not implemented')
})
