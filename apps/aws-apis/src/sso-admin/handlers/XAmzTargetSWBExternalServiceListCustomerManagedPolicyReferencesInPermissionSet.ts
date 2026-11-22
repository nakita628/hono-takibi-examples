import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
