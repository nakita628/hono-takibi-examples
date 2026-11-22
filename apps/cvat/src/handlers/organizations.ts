import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiOrganizationsIdRoute,
  getApiOrganizationsIdRoute,
  getApiOrganizationsRoute,
  patchApiOrganizationsIdRoute,
  postApiOrganizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getApiOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
