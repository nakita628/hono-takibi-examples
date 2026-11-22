import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3JqlFunctionComputationRoute,
  postRestApi3JqlFunctionComputationRoute,
  postRestApi3JqlFunctionComputationSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jqlFunctionsAppsHandler = app
  .openapi(getRestApi3JqlFunctionComputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlFunctionComputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlFunctionComputationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
