import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIamOrganizationPolicyRoute,
  postIamOrganizationPolicyResetRoute,
  putIamOrganizationPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationPolicyHandler = app
  .openapi(getIamOrganizationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIamOrganizationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIamOrganizationPolicyResetRoute, (c) => {
    throw new Error('Not implemented')
  })
