import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
