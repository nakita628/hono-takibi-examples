import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdMicrosoftGraphCancelRoute,
  postRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdMicrosoftGraphCancelRoute,
  postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdMicrosoftGraphCancelRoute,
  postRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdMicrosoftGraphCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleManagementActionsHandler = app
  .openapi(
    postRoleManagementDirectoryRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementDirectoryRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementRoleAssignmentScheduleRequestsUnifiedRoleAssignmentScheduleRequestIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRoleManagementEntitlementManagementRoleEligibilityScheduleRequestsUnifiedRoleEligibilityScheduleRequestIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
