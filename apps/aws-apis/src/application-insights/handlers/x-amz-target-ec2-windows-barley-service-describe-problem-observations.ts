import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceDescribeProblemObservationsHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
