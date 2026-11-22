import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1B2bRbacOrganizationsOrganizationIdRoute,
  getV1B2bRbacPolicyRoute,
  putV1B2bRbacOrganizationsOrganizationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const b2BRbacHandler = app
  .openapi(getV1B2bRbacPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bRbacOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1B2bRbacOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
