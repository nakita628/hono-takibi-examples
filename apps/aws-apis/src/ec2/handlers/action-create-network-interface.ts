import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateNetworkInterfaceRoute,
  postActionCreateNetworkInterfaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateNetworkInterfaceHandler = app
  .openapi(getActionCreateNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateNetworkInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
