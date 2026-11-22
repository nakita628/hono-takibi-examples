import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiRegisterForRealtimeApiIdRoute,
  getApiRegisterForRealtimeApiRoute,
  postApiRegisterForRealtimeApiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registerForRealtimeApiHandler = app
  .openapi(getApiRegisterForRealtimeApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRegisterForRealtimeApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRegisterForRealtimeApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
