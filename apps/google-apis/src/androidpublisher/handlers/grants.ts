import { OpenAPIHono } from '@hono/zod-openapi'
import { postAndroidpublisherV3ParentGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const grantsHandler = app.openapi(postAndroidpublisherV3ParentGrantsRoute, (c) => {
  throw new Error('Not implemented')
})
