import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1FunctionRoute,
  getApiV1FunctionsRoute,
  getApiV2FunctionsRoute,
  getApiV2ProgressRoute,
  getApiV3FunctionRoute,
  getApiV3FunctionsRoute,
  getApiV3ProgressRoute,
  postApiV3FunctionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionsHandler = app
  .openapi(getApiV3ProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3FunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3FunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FunctionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
