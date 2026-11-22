import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteApplicationVersionRoute,
  postActionDeleteApplicationVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteApplicationVersionHandler = app
  .openapi(getActionDeleteApplicationVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteApplicationVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
