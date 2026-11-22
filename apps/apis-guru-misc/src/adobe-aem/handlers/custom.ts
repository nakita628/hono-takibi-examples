import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemHealthRoute,
  postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRoute,
  postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customHandler = app
  .openapi(postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSystemHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
