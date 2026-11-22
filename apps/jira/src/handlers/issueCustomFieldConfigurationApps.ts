import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute,
  postRestApi3AppFieldContextConfigurationListRoute,
  putRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCustomFieldConfigurationAppsHandler = app
  .openapi(postRestApi3AppFieldContextConfigurationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
