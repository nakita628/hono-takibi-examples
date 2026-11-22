import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ReleasesPublishRevisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const releasesHandler = app.openapi(postV1ReleasesPublishRevisionsRoute, (c) => {
  throw new Error('Not implemented')
})
