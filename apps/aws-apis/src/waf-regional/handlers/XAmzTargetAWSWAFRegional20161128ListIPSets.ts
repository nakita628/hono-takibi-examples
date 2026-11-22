import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListIPSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListIPSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListIPSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
