import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SecurityPermissionsResourcesPkRoute,
  getApiV1SecurityPermissionsResourcesIndexRoute,
  getApiV1SecurityPermissionsResourcesInfoRoute,
  getApiV1SecurityPermissionsResourcesPkRoute,
  postApiV1SecurityPermissionsResourcesIndexRoute,
  putApiV1SecurityPermissionsResourcesPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityPermissionsOnResourcesViewMenusHandler = app
  .openapi(getApiV1SecurityPermissionsResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityPermissionsResourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsResourcesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecurityPermissionsResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecurityPermissionsResourcesPkRoute, (c) => {
    throw new Error('Not implemented')
  })
