import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2DiscoveryClientStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app.openapi(postV2DiscoveryClientStatusRoute, (c) => {
  throw new Error('Not implemented')
})
