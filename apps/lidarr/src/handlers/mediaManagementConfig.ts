import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ConfigMediamanagementIdRoute,
  getApiV1ConfigMediamanagementRoute,
  putApiV1ConfigMediamanagementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaManagementConfigHandler = app
  .openapi(getApiV1ConfigMediamanagementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigMediamanagementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigMediamanagementRoute, (c) => {
    throw new Error('Not implemented')
  })
