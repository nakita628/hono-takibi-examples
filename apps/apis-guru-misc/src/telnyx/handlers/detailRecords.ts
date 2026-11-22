import { OpenAPIHono } from '@hono/zod-openapi'
import { getDetailRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const detailRecordsHandler = app.openapi(getDetailRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
