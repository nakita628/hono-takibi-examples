import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ObservabilityManageConfigurationProjectsRoute,
  putV1ObservabilityManageConfigurationProjectsProjectIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const observabilityHandler = app
  .openapi(getV1ObservabilityManageConfigurationProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObservabilityManageConfigurationProjectsProjectIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
