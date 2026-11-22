import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkingStateIdIndexRoute,
  getWorkingStateIndexRoute,
  postWorkingStateIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workingStateHandler = app
  .openapi(getWorkingStateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkingStateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkingStateIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
