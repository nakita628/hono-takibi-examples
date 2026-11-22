import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2DagBundlesBundleNameFilesRoute,
  getApiV2DagBundlesBundleNameRoute,
  getApiV2DagBundlesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dagBundleHandler = app
  .openapi(getApiV2DagBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagBundlesBundleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagBundlesBundleNameFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
