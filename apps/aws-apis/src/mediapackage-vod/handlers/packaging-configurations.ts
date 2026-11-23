import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePackagingConfigurationsIdRoute,
  getPackagingConfigurationsIdRoute,
  getPackagingConfigurationsRoute,
  postPackagingConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagingConfigurationsHandler = app
  .openapi(postPackagingConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagingConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePackagingConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagingConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
