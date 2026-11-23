import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateApplicationVersionRoute,
  postActionUpdateApplicationVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateApplicationVersionHandler = app
  .openapi(getActionUpdateApplicationVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateApplicationVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
