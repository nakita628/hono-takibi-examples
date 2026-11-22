import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVpnConnectionOptionsRoute,
  postActionModifyVpnConnectionOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVpnConnectionOptionsHandler = app
  .openapi(getActionModifyVpnConnectionOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpnConnectionOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
