import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3ConfigNamingExamplesRoute,
  getApiV3ConfigNamingIdRoute,
  getApiV3ConfigNamingRoute,
  putApiV3ConfigNamingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namingConfigHandler = app
  .openapi(getApiV3ConfigNamingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigNamingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigNamingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigNamingExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
