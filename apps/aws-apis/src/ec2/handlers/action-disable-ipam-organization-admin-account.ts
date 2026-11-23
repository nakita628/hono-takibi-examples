import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableIpamOrganizationAdminAccountRoute,
  postActionDisableIpamOrganizationAdminAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisableIpamOrganizationAdminAccountHandler = app
  .openapi(getActionDisableIpamOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableIpamOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
