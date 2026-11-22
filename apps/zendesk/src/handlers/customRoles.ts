import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CustomRolesCustomRoleIdRoute,
  getApiV2CustomRolesCustomRoleIdRoute,
  getApiV2CustomRolesRoute,
  postApiV2CustomRolesRoute,
  putApiV2CustomRolesCustomRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customRolesHandler = app
  .openapi(getApiV2CustomRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomRolesCustomRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomRolesCustomRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomRolesCustomRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
