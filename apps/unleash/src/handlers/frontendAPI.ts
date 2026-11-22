import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFrontendRoute,
  postApiFrontendClientMetricsRoute,
  postApiFrontendClientRegisterRoute,
  postApiFrontendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const frontendAPIHandler = app
  .openapi(getApiFrontendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFrontendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFrontendClientMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFrontendClientRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
