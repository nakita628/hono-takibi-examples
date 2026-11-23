import { OpenAPIHono } from '@hono/zod-openapi'
import { postWorkerCmdCheckconstraintsRoute } from '../routes'

const app = new OpenAPIHono()

export const workerCmdCheckconstraintsHandler = app.openapi(
  postWorkerCmdCheckconstraintsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
