import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetContextKeysForCustomPolicyRoute,
  postActionGetContextKeysForCustomPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetContextKeysForCustomPolicyHandler = app
  .openapi(getActionGetContextKeysForCustomPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetContextKeysForCustomPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
