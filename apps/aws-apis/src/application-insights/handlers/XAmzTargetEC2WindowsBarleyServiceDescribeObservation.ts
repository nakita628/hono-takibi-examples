import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDescribeObservationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceDescribeObservationHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDescribeObservationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
