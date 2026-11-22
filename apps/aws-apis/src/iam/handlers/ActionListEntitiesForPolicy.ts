import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListEntitiesForPolicyRoute,
  postActionListEntitiesForPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListEntitiesForPolicyHandler = app
  .openapi(getActionListEntitiesForPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListEntitiesForPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
