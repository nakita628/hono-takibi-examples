import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeFleetMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const describeFleetMetadataHandler = app.openapi(postDescribeFleetMetadataRoute, (c) => {
  throw new Error('Not implemented')
})
