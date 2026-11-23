import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerPutModelPackageGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerPutModelPackageGroupPolicyHandler = app.openapi(
  postXAmzTargetSageMakerPutModelPackageGroupPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
