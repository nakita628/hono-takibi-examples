import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceAttachCustomerManagedPolicyReferenceToPermissionSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
