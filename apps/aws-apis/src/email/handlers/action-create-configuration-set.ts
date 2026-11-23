import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateConfigurationSetRoute,
  postActionCreateConfigurationSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateConfigurationSetHandler = app
  .openapi(getActionCreateConfigurationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateConfigurationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
