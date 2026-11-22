import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiApplicationDeployRoute,
  deleteApiApplicationIdRoute,
  getApiApplicationIdRoute,
  getApiApplicationIndexRoute,
  postApiApplicationDeployRoute,
  postApiApplicationIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsAPIHandler = app
  .openapi(getApiApplicationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiApplicationDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplicationDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
