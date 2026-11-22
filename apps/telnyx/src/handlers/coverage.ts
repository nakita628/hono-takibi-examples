import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworkCoverageRoute } from '../routes'

const app = new OpenAPIHono()

export const coverageHandler = app.openapi(getNetworkCoverageRoute, (c) => {
  throw new Error('Not implemented')
})
