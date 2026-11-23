import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDetachNetworkInterfaceRoute,
  postActionDetachNetworkInterfaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDetachNetworkInterfaceHandler = app
  .openapi(getActionDetachNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
