import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelPackageGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteModelPackageGroupPolicyHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelPackageGroupPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
