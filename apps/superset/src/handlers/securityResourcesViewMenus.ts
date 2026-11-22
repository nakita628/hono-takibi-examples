import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SecurityResourcesPkRoute,
  getApiV1SecurityResourcesIndexRoute,
  getApiV1SecurityResourcesInfoRoute,
  getApiV1SecurityResourcesPkRoute,
  postApiV1SecurityResourcesIndexRoute,
  putApiV1SecurityResourcesPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityResourcesViewMenusHandler = app
  .openapi(getApiV1SecurityResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityResourcesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
