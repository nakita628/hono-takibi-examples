import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRoute,
  getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute,
  getLegalHoldPolicyAssignmentsRoute,
  postLegalHoldPolicyAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const legalHoldPolicyAssignmentsHandler = app
  .openapi(getLegalHoldPolicyAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegalHoldPolicyAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
