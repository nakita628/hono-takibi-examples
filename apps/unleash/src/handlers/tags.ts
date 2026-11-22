import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminTagsTypeValueRoute,
  deleteApiAdminTagTypesNameRoute,
  getApiAdminTagsRoute,
  getApiAdminTagsTypeRoute,
  getApiAdminTagsTypeValueRoute,
  getApiAdminTagTypesNameRoute,
  getApiAdminTagTypesNameValuesRoute,
  getApiAdminTagTypesRoute,
  postApiAdminTagsRoute,
  postApiAdminTagsTypeValueRenameRoute,
  postApiAdminTagTypesRoute,
  postApiAdminTagTypesValidateRoute,
  putApiAdminProjectsProjectIdTagsRoute,
  putApiAdminTagTypesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getApiAdminTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagsTypeValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminTagsTypeValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminTagsTypeValueRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminTagTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminTagTypesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagTypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminTagTypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminTagTypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminTagTypesNameValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
