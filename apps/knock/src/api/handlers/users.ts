import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1UsersUserIdPreferencesIdRoute,
  deleteV1UsersUserIdRoute,
  getV1UsersRoute,
  getV1UsersUserIdPreferenceCenterConfigRoute,
  getV1UsersUserIdPreferencesIdRoute,
  getV1UsersUserIdPreferencesRoute,
  getV1UsersUserIdRoute,
  postV1UsersBulkDeleteRoute,
  postV1UsersBulkIdentifyRoute,
  postV1UsersBulkPreferencesRoute,
  postV1UsersUserIdMergeRoute,
  postV1UsersUserIdPreferenceCenterSignedUrlRoute,
  putV1UsersUserIdPreferencesIdCategoriesKeyRoute,
  putV1UsersUserIdPreferencesIdCategoriesRoute,
  putV1UsersUserIdPreferencesIdChannelTypesRoute,
  putV1UsersUserIdPreferencesIdChannelTypesTypeRoute,
  putV1UsersUserIdPreferencesIdRoute,
  putV1UsersUserIdPreferencesIdWorkflowsKeyRoute,
  putV1UsersUserIdPreferencesIdWorkflowsRoute,
  putV1UsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(putV1UsersUserIdPreferencesIdChannelTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdChannelTypesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdCategoriesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersUserIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersBulkIdentifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdPreferenceCenterConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdWorkflowsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersBulkPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UsersUserIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersUserIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1UsersUserIdPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsersUserIdPreferenceCenterSignedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
