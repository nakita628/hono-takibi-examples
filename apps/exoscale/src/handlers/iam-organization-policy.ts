import { OpenAPIHono } from '@hono/zod-openapi'
import { getIamOrganizationPolicyRoute, putIamOrganizationPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const iamOrganizationPolicyHandler = app
  .openapi(getIamOrganizationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIamOrganizationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
