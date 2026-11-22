import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworkServiceConfigsIdRoute,
  getNetworkServiceConfigsIdCancellationPolicyRoute,
  getNetworkServiceConfigsIdRoute,
  getNetworkServiceConfigsRoute,
  patchNetworkServiceConfigsIdRoute,
  postNetworkServiceConfigsRoute,
  putNetworkServiceConfigsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkServiceConfigsHandler = app
  .openapi(getNetworkServiceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkServiceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkServiceConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkServiceConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNetworkServiceConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworkServiceConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkServiceConfigsIdCancellationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
