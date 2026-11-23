import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListCustomerManagedPolicyReferencesInPermissionSetHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceListCustomerManagedPolicyReferencesInPermissionSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
