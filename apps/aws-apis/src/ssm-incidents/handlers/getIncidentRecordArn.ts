import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetIncidentRecordArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getIncidentRecordArnHandler = app.openapi(getGetIncidentRecordArnRoute, (c) => {
  throw new Error('Not implemented')
})
