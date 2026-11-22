import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RolesCustomRoleKeyRoute,
  getApiV2RolesCustomRoleKeyRoute,
  getApiV2RolesRoute,
  patchApiV2RolesCustomRoleKeyRoute,
  postApiV2RolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customRolesHandler = app
  .openapi(getApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesCustomRoleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RolesCustomRoleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RolesCustomRoleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
