import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdEndpointEndpointIdIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdSecretIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdStatsIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute,
  getApiV1AppAppIdEndpointIndexRoute,
  patchApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
  patchApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute,
  postApiV1AppAppIdEndpointEndpointIdRecoverIndexRoute,
  postApiV1AppAppIdEndpointEndpointIdReplayMissingIndexRoute,
  postApiV1AppAppIdEndpointEndpointIdSecretRotateIndexRoute,
  postApiV1AppAppIdEndpointIndexRoute,
  putApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
  putApiV1AppAppIdEndpointEndpointIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endpointHandler = app
  .openapi(getApiV1AppAppIdEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdEndpointEndpointIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdEndpointEndpointIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdRecoverIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdReplayMissingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdSecretIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdSecretRotateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdStatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
