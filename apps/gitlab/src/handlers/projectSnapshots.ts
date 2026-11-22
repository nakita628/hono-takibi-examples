import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4ProjectsIdSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const projectSnapshotsHandler = app.openapi(getApiV4ProjectsIdSnapshotRoute, (c) => {
  throw new Error('Not implemented')
})
