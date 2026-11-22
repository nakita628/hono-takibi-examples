import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CustomersSegmentsRoute, getV2CustomersSegmentsSegmentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const customerSegmentsHandler = app
  .openapi(getV2CustomersSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
