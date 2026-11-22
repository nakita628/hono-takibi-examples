import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2IncrementalRoutingAttributesRoute,
  getApiV2IncrementalRoutingAttributeValuesRoute,
  getApiV2IncrementalRoutingInstanceValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incrementalSkillBasedRoutingHandler = app
  .openapi(getApiV2IncrementalRoutingAttributeValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalRoutingAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalRoutingInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
