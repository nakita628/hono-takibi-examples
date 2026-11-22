import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListVirtualMFADevicesRoute,
  postActionListVirtualMFADevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListVirtualMFADevicesHandler = app
  .openapi(getActionListVirtualMFADevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListVirtualMFADevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
