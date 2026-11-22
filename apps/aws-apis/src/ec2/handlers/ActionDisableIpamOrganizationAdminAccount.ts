import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableIpamOrganizationAdminAccountRoute,
  postActionDisableIpamOrganizationAdminAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisableIpamOrganizationAdminAccountHandler = app
  .openapi(getActionDisableIpamOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableIpamOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
