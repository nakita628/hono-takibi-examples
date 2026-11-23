import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAssumeRoleWithSAMLRoute, postActionAssumeRoleWithSAMLRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAssumeRoleWithSamlHandler = app
  .openapi(getActionAssumeRoleWithSAMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssumeRoleWithSAMLRoute, (c) => {
    throw new Error('Not implemented')
  })
