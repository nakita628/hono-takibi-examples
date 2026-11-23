import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTerminationPolicyTypesRoute,
  postActionDescribeTerminationPolicyTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTerminationPolicyTypesHandler = app
  .openapi(getActionDescribeTerminationPolicyTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTerminationPolicyTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
