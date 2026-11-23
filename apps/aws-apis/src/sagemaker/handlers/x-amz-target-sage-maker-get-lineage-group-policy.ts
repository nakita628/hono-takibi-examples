import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerGetLineageGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerGetLineageGroupPolicyHandler = app.openapi(
  postXAmzTargetSageMakerGetLineageGroupPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
