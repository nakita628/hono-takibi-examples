import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdAdminsAdminIdRoute,
  getApiV1OrgsOrgIdAdminsRoute,
  putApiV1OrgsOrgIdAdminsAdminIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsAdminsHandler = app
  .openapi(getApiV1OrgsOrgIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
