import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Handler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentHandler,
  XAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Handler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentHandler)
  .route('/', XAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipHandler)

export default app
