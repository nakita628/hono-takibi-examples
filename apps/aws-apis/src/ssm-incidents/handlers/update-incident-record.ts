import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateIncidentRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const updateIncidentRecordHandler = app.openapi(postUpdateIncidentRecordRoute, (c) => {
  throw new Error('Not implemented')
})
