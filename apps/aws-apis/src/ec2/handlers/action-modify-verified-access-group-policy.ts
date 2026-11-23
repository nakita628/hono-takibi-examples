import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVerifiedAccessGroupPolicyRoute,
  postActionModifyVerifiedAccessGroupPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyVerifiedAccessGroupPolicyHandler = app
  .openapi(getActionModifyVerifiedAccessGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVerifiedAccessGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
