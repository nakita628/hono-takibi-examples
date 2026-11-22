import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CustomerPoliciesFilesUploadPolicyFileRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app.openapi(postV1CustomerPoliciesFilesUploadPolicyFileRoute, (c) => {
  throw new Error('Not implemented')
})
