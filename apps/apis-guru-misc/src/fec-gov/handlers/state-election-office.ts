import { OpenAPIHono } from '@hono/zod-openapi'
import { getStateElectionOfficeIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const stateElectionOfficeHandler = app.openapi(getStateElectionOfficeIndexRoute, (c) => {
  throw new Error('Not implemented')
})
