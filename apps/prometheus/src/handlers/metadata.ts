import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetadataRoute, getSearchMetricNamesRoute, postSearchMetricNamesRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getSearchMetricNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchMetricNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
