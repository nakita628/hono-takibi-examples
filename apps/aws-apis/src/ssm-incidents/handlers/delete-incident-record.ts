import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteIncidentRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteIncidentRecordHandler = app.openapi(postDeleteIncidentRecordRoute, (c) => {
  throw new Error('Not implemented')
})
