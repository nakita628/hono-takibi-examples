import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrganizationsIdRoute,
  getV1OrganizationsRoute,
  patchV1OrganizationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
