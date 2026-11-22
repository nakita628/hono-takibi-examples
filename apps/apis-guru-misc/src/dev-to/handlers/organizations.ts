import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOrganizationsUsernameArticlesRoute,
  getApiOrganizationsUsernameRoute,
  getApiOrganizationsUsernameUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getApiOrganizationsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsUsernameArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsUsernameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
