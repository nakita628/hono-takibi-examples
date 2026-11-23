import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseTracksRoute } from '../routes'

const app = new OpenAPIHono()

export const caseTracksHandler = app.openapi(getCaseTracksRoute, (c) => {
  throw new Error('Not implemented')
})
