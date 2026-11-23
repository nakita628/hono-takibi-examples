import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListIPSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128ListIpSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListIPSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
