import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionActivateOrganizationsAccessRoute,
  postActionActivateOrganizationsAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionActivateOrganizationsAccessHandler = app
  .openapi(getActionActivateOrganizationsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionActivateOrganizationsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
