import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrgsAdminAccountslistRoute,
  postOrgsDescribeOrganizationConfigurationRoute,
  postOrgsDisableAdminAccountRoute,
  postOrgsEnableAdminAccountRoute,
  postOrgsUpdateOrganizationConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsHandler = app
  .openapi(postOrgsDescribeOrganizationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsDisableAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsEnableAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsAdminAccountslistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsUpdateOrganizationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
