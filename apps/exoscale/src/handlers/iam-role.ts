import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIamRoleIdRoute,
  getIamRoleIdRoute,
  getIamRoleRoute,
  postIamRoleIdAssumeRoute,
  postIamRoleRoute,
  putIamRoleIdPolicyRoute,
  putIamRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const iamRoleHandler = app
  .openapi(postIamRoleIdAssumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIamRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIamRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIamRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIamRoleIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIamRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIamRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
