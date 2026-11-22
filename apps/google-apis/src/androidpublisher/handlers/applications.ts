import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute,
  postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
