import { OpenAPIHono } from '@hono/zod-openapi'
import { postListIncidentRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const listIncidentRecordsHandler = app.openapi(postListIncidentRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
