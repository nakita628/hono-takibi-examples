import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ObservabilitySchemaMetricIdRoute,
  getV2ObservabilitySchemaRoute,
  postV2ObservabilityQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ObservabilityQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ObservabilitySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ObservabilitySchemaMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
