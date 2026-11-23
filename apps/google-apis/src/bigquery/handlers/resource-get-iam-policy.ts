import { OpenAPIHono } from '@hono/zod-openapi'
import { postResourceGetIamPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceGetIamPolicyHandler = app.openapi(postResourceGetIamPolicyRoute, (c) => {
  throw new Error('Not implemented')
})
