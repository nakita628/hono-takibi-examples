import { OpenAPIHono } from '@hono/zod-openapi'
import { getFfprobeRoute, getFfprobeSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const ffprobeHandler = app
  .openapi(getFfprobeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFfprobeSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
