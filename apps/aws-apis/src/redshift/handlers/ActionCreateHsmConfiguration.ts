import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateHsmConfigurationRoute,
  postActionCreateHsmConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateHsmConfigurationHandler = app
  .openapi(getActionCreateHsmConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateHsmConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
