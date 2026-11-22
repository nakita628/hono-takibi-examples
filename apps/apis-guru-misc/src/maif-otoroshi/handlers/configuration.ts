import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiGlobalconfigRoute,
  patchApiGlobalconfigRoute,
  putApiGlobalconfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(getApiGlobalconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGlobalconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiGlobalconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
