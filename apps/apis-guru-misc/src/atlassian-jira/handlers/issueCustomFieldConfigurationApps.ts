import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute,
  putRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCustomFieldConfigurationAppsHandler = app
  .openapi(getRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
