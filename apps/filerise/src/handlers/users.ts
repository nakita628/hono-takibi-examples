import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminRemoveUserPhpRoute,
  getApiAdminGetUsersPhpRoute,
  getApiProfileGetCurrentUserPhpRoute,
  getApiProfileGetUserPermissionsPhpRoute,
  postApiAdminAddUserPhpRoute,
  postApiProfileChangePasswordPhpRoute,
  postApiProfileUploadPicturePhpRoute,
  putApiAdminUpdateUserPermissionsPhpRoute,
  putApiProfileUpdateUserPanelPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postApiAdminAddUserPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminGetUsersPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminRemoveUserPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminUpdateUserPermissionsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileChangePasswordPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProfileGetCurrentUserPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProfileGetUserPermissionsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiProfileUpdateUserPanelPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileUploadPicturePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
