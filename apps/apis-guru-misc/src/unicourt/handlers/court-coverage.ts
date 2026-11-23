import { OpenAPIHono } from '@hono/zod-openapi'
import { getCourtCoverageCourtIdRoute } from '../routes'

const app = new OpenAPIHono()

export const courtCoverageHandler = app.openapi(getCourtCoverageCourtIdRoute, (c) => {
  throw new Error('Not implemented')
})
