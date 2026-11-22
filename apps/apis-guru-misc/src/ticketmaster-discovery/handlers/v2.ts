import { OpenAPIHono } from '@hono/zod-openapi'
import { getDiscoveryV2SuggestRoute } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app.openapi(getDiscoveryV2SuggestRoute, (c) => {
  throw new Error('Not implemented')
})
