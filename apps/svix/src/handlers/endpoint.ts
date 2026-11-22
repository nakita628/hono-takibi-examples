import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdEndpointEndpointIdRoute,
  getApiV1AppAppIdEndpointEndpointIdHeadersRoute,
  getApiV1AppAppIdEndpointEndpointIdRoute,
  getApiV1AppAppIdEndpointEndpointIdSecretRoute,
  getApiV1AppAppIdEndpointEndpointIdStatsRoute,
  getApiV1AppAppIdEndpointRoute,
  patchApiV1AppAppIdEndpointEndpointIdHeadersRoute,
  patchApiV1AppAppIdEndpointEndpointIdRoute,
  postApiV1AppAppIdEndpointEndpointIdRecoverRoute,
  postApiV1AppAppIdEndpointEndpointIdSecretRotateRoute,
  postApiV1AppAppIdEndpointEndpointIdSendExampleRoute,
  postApiV1AppAppIdEndpointRoute,
  putApiV1AppAppIdEndpointEndpointIdHeadersRoute,
  putApiV1AppAppIdEndpointEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endpointHandler = app
  .openapi(getApiV1AppAppIdEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdSecretRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdSendExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdEndpointEndpointIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdEndpointEndpointIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
