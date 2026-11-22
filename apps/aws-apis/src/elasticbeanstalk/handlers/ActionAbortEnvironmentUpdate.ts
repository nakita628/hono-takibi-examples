import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAbortEnvironmentUpdateRoute,
  postActionAbortEnvironmentUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAbortEnvironmentUpdateHandler = app
  .openapi(getActionAbortEnvironmentUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAbortEnvironmentUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
