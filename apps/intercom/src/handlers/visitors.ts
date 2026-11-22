import { OpenAPIHono } from '@hono/zod-openapi'
import { getVisitorsRoute, postVisitorsConvertRoute, putVisitorsRoute } from '../routes'

const app = new OpenAPIHono()

export const visitorsHandler = app
  .openapi(putVisitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVisitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVisitorsConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
