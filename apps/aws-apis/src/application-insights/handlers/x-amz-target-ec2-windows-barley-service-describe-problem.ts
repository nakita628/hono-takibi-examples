import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDescribeProblemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceDescribeProblemHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDescribeProblemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
