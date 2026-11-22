import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ConfigDevelopmentIdRoute,
  getApiV1ConfigDevelopmentRoute,
  putApiV1ConfigDevelopmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const developmentConfigHandler = app
  .openapi(putApiV1ConfigDevelopmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDevelopmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigDevelopmentRoute, (c) => {
    throw new Error('Not implemented')
  })
