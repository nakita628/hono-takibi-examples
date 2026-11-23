import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerGetModelPackageGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerGetModelPackageGroupPolicyHandler = app.openapi(
  postXAmzTargetSageMakerGetModelPackageGroupPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
