import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworksOwnerRepoEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app.openapi(getNetworksOwnerRepoEventsRoute, (c) => {
  throw new Error('Not implemented')
})
