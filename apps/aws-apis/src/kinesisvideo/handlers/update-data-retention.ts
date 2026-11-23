import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateDataRetentionRoute } from '../routes'

const app = new OpenAPIHono()

export const updateDataRetentionHandler = app.openapi(postUpdateDataRetentionRoute, (c) => {
  throw new Error('Not implemented')
})
