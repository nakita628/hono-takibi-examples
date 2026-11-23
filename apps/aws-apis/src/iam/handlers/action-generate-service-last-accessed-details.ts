import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGenerateServiceLastAccessedDetailsRoute,
  postActionGenerateServiceLastAccessedDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGenerateServiceLastAccessedDetailsHandler = app
  .openapi(getActionGenerateServiceLastAccessedDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGenerateServiceLastAccessedDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
