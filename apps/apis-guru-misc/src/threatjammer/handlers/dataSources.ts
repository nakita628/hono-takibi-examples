import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1SourceIpRoute,
  getV1SourceIpSourceRangeTimeRangeRoute,
  getV1SourceIpSourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataSourcesHandler = app
  .openapi(getV1SourceIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceIpSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceIpSourceRangeTimeRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
