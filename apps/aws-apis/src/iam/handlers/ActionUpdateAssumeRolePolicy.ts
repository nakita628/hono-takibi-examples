import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateAssumeRolePolicyRoute,
  postActionUpdateAssumeRolePolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateAssumeRolePolicyHandler = app
  .openapi(getActionUpdateAssumeRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateAssumeRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
