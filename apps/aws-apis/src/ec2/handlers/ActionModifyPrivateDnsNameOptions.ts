import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyPrivateDnsNameOptionsRoute,
  postActionModifyPrivateDnsNameOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyPrivateDnsNameOptionsHandler = app
  .openapi(getActionModifyPrivateDnsNameOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyPrivateDnsNameOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
