import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeactivateOrganizationsAccessRoute,
  postActionDeactivateOrganizationsAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeactivateOrganizationsAccessHandler = app
  .openapi(getActionDeactivateOrganizationsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeactivateOrganizationsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
