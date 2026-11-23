import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetKmsEncryptionKeyHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
