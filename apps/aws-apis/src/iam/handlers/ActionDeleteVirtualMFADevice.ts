import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVirtualMFADeviceRoute,
  postActionDeleteVirtualMFADeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteVirtualMFADeviceHandler = app
  .openapi(getActionDeleteVirtualMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVirtualMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
