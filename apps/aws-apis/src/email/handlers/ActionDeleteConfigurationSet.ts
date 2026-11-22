import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteConfigurationSetRoute,
  postActionDeleteConfigurationSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteConfigurationSetHandler = app
  .openapi(getActionDeleteConfigurationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteConfigurationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
