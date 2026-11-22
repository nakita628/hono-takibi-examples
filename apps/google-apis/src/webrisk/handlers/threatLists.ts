import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ThreatListsComputeDiffRoute } from '../routes'

const app = new OpenAPIHono()

export const threatListsHandler = app.openapi(getV1ThreatListsComputeDiffRoute, (c) => {
  throw new Error('Not implemented')
})
