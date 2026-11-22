import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3JqlFunctionComputationRoute,
  postRestApi3JqlFunctionComputationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restHandler = app
  .openapi(getRestApi3JqlFunctionComputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlFunctionComputationRoute, (c) => {
    throw new Error('Not implemented')
  })
