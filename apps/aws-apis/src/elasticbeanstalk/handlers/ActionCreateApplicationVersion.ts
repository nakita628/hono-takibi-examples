import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateApplicationVersionRoute,
  postActionCreateApplicationVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateApplicationVersionHandler = app
  .openapi(getActionCreateApplicationVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateApplicationVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
