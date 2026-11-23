import { OpenAPIHono } from '@hono/zod-openapi'
import { getShardStoresRoute } from '../routes'

const app = new OpenAPIHono()

export const shardStoresHandler = app.openapi(getShardStoresRoute, (c) => {
  throw new Error('Not implemented')
})
