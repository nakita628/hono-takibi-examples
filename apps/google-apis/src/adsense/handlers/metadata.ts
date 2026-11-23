import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetadataDimensionsRoute, getMetadataMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getMetadataDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
