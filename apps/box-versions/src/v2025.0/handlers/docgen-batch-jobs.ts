import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocgenBatchJobsBatchIdRoute } from '../routes'

const app = new OpenAPIHono()

export const docgenBatchJobsHandler = app.openapi(getDocgenBatchJobsBatchIdRoute, (c) => {
  throw new Error('Not implemented')
})
