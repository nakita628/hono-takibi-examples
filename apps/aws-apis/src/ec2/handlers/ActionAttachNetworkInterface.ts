import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAttachNetworkInterfaceRoute,
  postActionAttachNetworkInterfaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAttachNetworkInterfaceHandler = app
  .openapi(getActionAttachNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
