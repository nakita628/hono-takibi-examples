import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyAquaConfigurationRoute,
  postActionModifyAquaConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyAquaConfigurationHandler = app
  .openapi(getActionModifyAquaConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyAquaConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
