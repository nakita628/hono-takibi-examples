import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOnboardedAppPackagesAppDIdAppdRoute,
  getOnboardedAppPackagesAppDIdPackageContentRoute,
  putOnboardedAppPackagesAppDIdPackageContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onboardedAppPackagesHandler = app
  .openapi(getOnboardedAppPackagesAppDIdAppdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOnboardedAppPackagesAppDIdPackageContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOnboardedAppPackagesAppDIdPackageContentRoute, (c) => {
    throw new Error('Not implemented')
  })
