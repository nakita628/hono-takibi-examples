import { OpenAPIHono } from '@hono/zod-openapi'
import { getServerSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const serverSummariesHandler = app.openapi(getServerSummariesRoute, (c) => {
  throw new Error('Not implemented')
})
