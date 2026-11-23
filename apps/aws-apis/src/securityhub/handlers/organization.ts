import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationAdminRoute,
  getOrganizationConfigurationRoute,
  postOrganizationAdminDisableRoute,
  postOrganizationAdminEnableRoute,
  postOrganizationConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getOrganizationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationAdminDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationAdminEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
