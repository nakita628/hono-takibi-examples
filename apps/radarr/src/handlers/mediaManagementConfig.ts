import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3ConfigMediamanagementIdRoute,
  getApiV3ConfigMediamanagementRoute,
  putApiV3ConfigMediamanagementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaManagementConfigHandler = app
  .openapi(getApiV3ConfigMediamanagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigMediamanagementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigMediamanagementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
