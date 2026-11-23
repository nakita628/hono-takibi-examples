import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworkServicesIdChangeRequestRoute,
  deleteNetworkServicesIdRoute,
  getNetworkServicesIdCancellationPolicyRoute,
  getNetworkServicesIdChangeRequestRoute,
  getNetworkServicesIdRoute,
  getNetworkServicesRoute,
  patchNetworkServicesIdRoute,
  postNetworkServicesIdChangeRequestRoute,
  postNetworkServicesRoute,
  putNetworkServicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkServicesHandler = app
  .openapi(getNetworkServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNetworkServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworkServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkServicesIdCancellationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkServicesIdChangeRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkServicesIdChangeRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworkServicesIdChangeRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
