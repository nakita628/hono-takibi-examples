import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetVerifiedAccessGroupPolicyRoute,
  postActionGetVerifiedAccessGroupPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetVerifiedAccessGroupPolicyHandler = app
  .openapi(getActionGetVerifiedAccessGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetVerifiedAccessGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
