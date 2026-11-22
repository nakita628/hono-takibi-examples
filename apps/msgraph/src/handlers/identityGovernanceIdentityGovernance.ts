import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdentityGovernanceRoute, patchIdentityGovernanceRoute } from '../routes'

const app = new OpenAPIHono()

export const identityGovernanceIdentityGovernanceHandler = app
  .openapi(getIdentityGovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
