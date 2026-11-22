import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdApiKeysRoute,
  postOrganizationsOrganizationIdApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsApiKeysHandler = app
  .openapi(getOrganizationsOrganizationIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
