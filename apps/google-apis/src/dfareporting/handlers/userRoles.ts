import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdUserRolesIdRoute,
  getUserprofilesProfileIdUserRolesIdRoute,
  getUserprofilesProfileIdUserRolesRoute,
  patchUserprofilesProfileIdUserRolesRoute,
  postUserprofilesProfileIdUserRolesRoute,
  putUserprofilesProfileIdUserRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userRolesHandler = app
  .openapi(getUserprofilesProfileIdUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdUserRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdUserRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
