import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableIpamOrganizationAdminAccountRoute,
  postActionEnableIpamOrganizationAdminAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableIpamOrganizationAdminAccountHandler = app
  .openapi(getActionEnableIpamOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableIpamOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
