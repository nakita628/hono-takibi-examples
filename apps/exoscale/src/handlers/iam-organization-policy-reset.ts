import { OpenAPIHono } from '@hono/zod-openapi'
import { postIamOrganizationPolicyResetRoute } from '../routes'

const app = new OpenAPIHono()

export const iamOrganizationPolicyResetHandler = app.openapi(
  postIamOrganizationPolicyResetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
