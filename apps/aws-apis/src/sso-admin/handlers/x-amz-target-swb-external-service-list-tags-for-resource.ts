import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
