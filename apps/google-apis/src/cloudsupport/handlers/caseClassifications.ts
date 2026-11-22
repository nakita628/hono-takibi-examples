import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2betaCaseClassificationsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const caseClassificationsHandler = app.openapi(
  getV2betaCaseClassificationsSearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
