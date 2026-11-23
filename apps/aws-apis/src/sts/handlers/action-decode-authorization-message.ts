import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDecodeAuthorizationMessageRoute,
  postActionDecodeAuthorizationMessageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDecodeAuthorizationMessageHandler = app
  .openapi(getActionDecodeAuthorizationMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDecodeAuthorizationMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
