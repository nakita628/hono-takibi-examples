import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPositionConfigurationsResourceIdentifierResourceTypeRoute,
  getPositionConfigurationsRoute,
  putPositionConfigurationsResourceIdentifierResourceTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const positionConfigurationsHandler = app
  .openapi(getPositionConfigurationsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPositionConfigurationsResourceIdentifierResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPositionConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
