import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListInstancesHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
