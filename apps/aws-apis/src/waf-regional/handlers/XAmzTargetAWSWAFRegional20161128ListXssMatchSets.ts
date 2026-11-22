import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListXssMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListXssMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListXssMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
