import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionRoute,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionRoute,
  getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute,
  postRetentionPolicyAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const retentionPolicyAssignmentsHandler = app
  .openapi(postRetentionPolicyAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetentionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetentionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
