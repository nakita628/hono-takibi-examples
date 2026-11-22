import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2SnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const reportingAndSharingHandler = app.openapi(postApiV2SnapshotRoute, (c) => {
  throw new Error('Not implemented')
})
