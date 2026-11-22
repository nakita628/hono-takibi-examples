import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteHsmConfigurationRoute,
  postActionDeleteHsmConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteHsmConfigurationHandler = app
  .openapi(getActionDeleteHsmConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteHsmConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
