import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRestApi3AppFieldValueRoute,
  putRestApi3AppFieldFieldIdOrKeyValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCustomFieldValuesAppsHandler = app
  .openapi(postRestApi3AppFieldValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3AppFieldFieldIdOrKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
