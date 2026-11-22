import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ConfigNamingExamplesRoute,
  getApiV1ConfigNamingIdRoute,
  getApiV1ConfigNamingRoute,
  putApiV1ConfigNamingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namingConfigHandler = app
  .openapi(getApiV1ConfigNamingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigNamingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigNamingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigNamingExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
