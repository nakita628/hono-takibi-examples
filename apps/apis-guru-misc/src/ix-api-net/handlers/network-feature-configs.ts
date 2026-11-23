import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworkFeatureConfigsIdRoute,
  getNetworkFeatureConfigsIdRoute,
  getNetworkFeatureConfigsRoute,
  patchNetworkFeatureConfigsIdRoute,
  postNetworkFeatureConfigsRoute,
  putNetworkFeatureConfigsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkFeatureConfigsHandler = app
  .openapi(getNetworkFeatureConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkFeatureConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkFeatureConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkFeatureConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNetworkFeatureConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworkFeatureConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
