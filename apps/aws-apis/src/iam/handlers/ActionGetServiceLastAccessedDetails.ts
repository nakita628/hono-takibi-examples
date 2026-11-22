import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetServiceLastAccessedDetailsRoute,
  postActionGetServiceLastAccessedDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetServiceLastAccessedDetailsHandler = app
  .openapi(getActionGetServiceLastAccessedDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetServiceLastAccessedDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
