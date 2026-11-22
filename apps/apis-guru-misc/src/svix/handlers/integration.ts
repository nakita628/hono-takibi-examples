import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdIntegrationIntegIdIndexRoute,
  getApiV1AppAppIdIntegrationIndexRoute,
  getApiV1AppAppIdIntegrationIntegIdIndexRoute,
  getApiV1AppAppIdIntegrationIntegIdKeyIndexRoute,
  postApiV1AppAppIdIntegrationIndexRoute,
  postApiV1AppAppIdIntegrationIntegIdKeyRotateIndexRoute,
  putApiV1AppAppIdIntegrationIntegIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationHandler = app
  .openapi(getApiV1AppAppIdIntegrationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdIntegrationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdIntegrationIntegIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdIntegrationIntegIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdIntegrationIntegIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdIntegrationIntegIdKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdIntegrationIntegIdKeyRotateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
