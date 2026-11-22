import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyNetworkInterfaceAttributeRoute,
  postActionModifyNetworkInterfaceAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyNetworkInterfaceAttributeHandler = app
  .openapi(getActionModifyNetworkInterfaceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyNetworkInterfaceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
