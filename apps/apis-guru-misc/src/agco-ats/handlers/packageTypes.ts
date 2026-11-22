import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PackageTypesIDRoute,
  deleteApiV2PackageTypesIdUsersUserIDRoute,
  getApiV2PackageTypesIDRoute,
  getApiV2PackageTypesRoute,
  postApiV2PackageTypesIdUsersUserIDRoute,
  postApiV2PackageTypesRoute,
  putApiV2PackageTypesIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packageTypesHandler = app
  .openapi(getApiV2PackageTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PackageTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PackageTypesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PackageTypesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PackageTypesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PackageTypesIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PackageTypesIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
