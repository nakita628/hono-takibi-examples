import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceListProblemsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceListProblemsHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceListProblemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
