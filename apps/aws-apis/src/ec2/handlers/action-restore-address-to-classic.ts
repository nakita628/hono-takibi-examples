import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreAddressToClassicRoute,
  postActionRestoreAddressToClassicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRestoreAddressToClassicHandler = app
  .openapi(getActionRestoreAddressToClassicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreAddressToClassicRoute, (c) => {
    throw new Error('Not implemented')
  })
