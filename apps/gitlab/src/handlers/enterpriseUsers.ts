import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdEnterpriseUsersUserIdRoute,
  getApiV4GroupsIdEnterpriseUsersRoute,
  getApiV4GroupsIdEnterpriseUsersUserIdRoute,
  patchApiV4GroupsIdEnterpriseUsersUserIdDisableTwoFactorRoute,
  patchApiV4GroupsIdEnterpriseUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterpriseUsersHandler = app
  .openapi(getApiV4GroupsIdEnterpriseUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEnterpriseUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4GroupsIdEnterpriseUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdEnterpriseUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4GroupsIdEnterpriseUsersUserIdDisableTwoFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
