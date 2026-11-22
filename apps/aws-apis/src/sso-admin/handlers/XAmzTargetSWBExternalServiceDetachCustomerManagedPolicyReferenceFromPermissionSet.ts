import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceDetachCustomerManagedPolicyReferenceFromPermissionSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
