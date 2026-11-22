import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNetworkInterfaceRoute,
  postActionDeleteNetworkInterfaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteNetworkInterfaceHandler = app
  .openapi(getActionDeleteNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
