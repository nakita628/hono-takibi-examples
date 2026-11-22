import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrganizationsRoute,
  postV1OrganizationsRoute,
  putV1OrganizationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
