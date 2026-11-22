import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const vmSnapshotHandler = app.openapi(putVmSnapshotRoute, (c) => {
  throw new Error('Not implemented')
})
