import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PrivateReportFailuresRoute, postV1PrivateReportFailuresRoute } from '../routes'

const app = new OpenAPIHono()

export const reportFailuresHandler = app
  .openapi(getV1PrivateReportFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateReportFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
