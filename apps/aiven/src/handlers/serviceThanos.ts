import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectProjectServiceServiceNameThanosStorageSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceThanosHandler = app.openapi(
  getProjectProjectServiceServiceNameThanosStorageSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
