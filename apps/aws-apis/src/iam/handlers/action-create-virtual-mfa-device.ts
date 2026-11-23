import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVirtualMFADeviceRoute,
  postActionCreateVirtualMFADeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateVirtualMfaDeviceHandler = app
  .openapi(getActionCreateVirtualMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVirtualMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
