import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVerifiedAccessInstanceLoggingConfigurationRoute,
  postActionModifyVerifiedAccessInstanceLoggingConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyVerifiedAccessInstanceLoggingConfigurationHandler = app
  .openapi(getActionModifyVerifiedAccessInstanceLoggingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVerifiedAccessInstanceLoggingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
