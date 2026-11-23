import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImageScanFindingAggregationsRoute } from '../routes'

const app = new OpenAPIHono()

export const listImageScanFindingAggregationsHandler = app.openapi(
  postListImageScanFindingAggregationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
