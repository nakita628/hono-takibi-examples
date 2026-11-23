import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBundleNotificationsIdRoute,
  getBundleNotificationsIdRoute,
  getBundleNotificationsRoute,
  patchBundleNotificationsIdRoute,
  postBundleNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bundleNotificationsHandler = app
  .openapi(getBundleNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBundleNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBundleNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBundleNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBundleNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
