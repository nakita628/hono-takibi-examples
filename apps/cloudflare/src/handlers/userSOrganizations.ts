import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserOrganizationsOrganizationIdRoute,
  getUserOrganizationsOrganizationIdRoute,
  getUserOrganizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userSOrganizationsHandler = app
  .openapi(getUserOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
