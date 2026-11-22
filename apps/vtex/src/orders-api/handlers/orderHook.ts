import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiOrdersHookConfigRoute,
  getApiOrdersHookConfigRoute,
  postApiOrdersHookConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderHookHandler = app
  .openapi(deleteApiOrdersHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersHookConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
