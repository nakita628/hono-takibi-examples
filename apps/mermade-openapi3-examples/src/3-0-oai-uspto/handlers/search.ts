import { OpenAPIHono } from '@hono/zod-openapi'
import { postDatasetVersionRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postDatasetVersionRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
