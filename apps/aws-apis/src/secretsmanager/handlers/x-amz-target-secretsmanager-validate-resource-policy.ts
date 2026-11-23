import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerValidateResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerValidateResourcePolicyHandler = app.openapi(
  postXAmzTargetSecretsmanagerValidateResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
