import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsIdentityStoreCreateGroupHandler,
  xAmzTargetAwsIdentityStoreCreateGroupMembershipHandler,
  xAmzTargetAwsIdentityStoreCreateUserHandler,
  xAmzTargetAwsIdentityStoreDeleteGroupHandler,
  xAmzTargetAwsIdentityStoreDeleteGroupMembershipHandler,
  xAmzTargetAwsIdentityStoreDeleteUserHandler,
  xAmzTargetAwsIdentityStoreDescribeGroupHandler,
  xAmzTargetAwsIdentityStoreDescribeGroupMembershipHandler,
  xAmzTargetAwsIdentityStoreDescribeUserHandler,
  xAmzTargetAwsIdentityStoreGetGroupIdHandler,
  xAmzTargetAwsIdentityStoreGetGroupMembershipIdHandler,
  xAmzTargetAwsIdentityStoreGetUserIdHandler,
  xAmzTargetAwsIdentityStoreIsMemberInGroupsHandler,
  xAmzTargetAwsIdentityStoreListGroupMembershipsForMemberHandler,
  xAmzTargetAwsIdentityStoreListGroupMembershipsHandler,
  xAmzTargetAwsIdentityStoreListGroupsHandler,
  xAmzTargetAwsIdentityStoreListUsersHandler,
  xAmzTargetAwsIdentityStoreUpdateGroupHandler,
  xAmzTargetAwsIdentityStoreUpdateUserHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsIdentityStoreCreateGroupHandler)
  .route('/', xAmzTargetAwsIdentityStoreCreateGroupMembershipHandler)
  .route('/', xAmzTargetAwsIdentityStoreCreateUserHandler)
  .route('/', xAmzTargetAwsIdentityStoreDeleteGroupHandler)
  .route('/', xAmzTargetAwsIdentityStoreDeleteGroupMembershipHandler)
  .route('/', xAmzTargetAwsIdentityStoreDeleteUserHandler)
  .route('/', xAmzTargetAwsIdentityStoreDescribeGroupHandler)
  .route('/', xAmzTargetAwsIdentityStoreDescribeGroupMembershipHandler)
  .route('/', xAmzTargetAwsIdentityStoreDescribeUserHandler)
  .route('/', xAmzTargetAwsIdentityStoreGetGroupIdHandler)
  .route('/', xAmzTargetAwsIdentityStoreGetGroupMembershipIdHandler)
  .route('/', xAmzTargetAwsIdentityStoreGetUserIdHandler)
  .route('/', xAmzTargetAwsIdentityStoreIsMemberInGroupsHandler)
  .route('/', xAmzTargetAwsIdentityStoreListGroupMembershipsHandler)
  .route('/', xAmzTargetAwsIdentityStoreListGroupMembershipsForMemberHandler)
  .route('/', xAmzTargetAwsIdentityStoreListGroupsHandler)
  .route('/', xAmzTargetAwsIdentityStoreListUsersHandler)
  .route('/', xAmzTargetAwsIdentityStoreUpdateGroupHandler)
  .route('/', xAmzTargetAwsIdentityStoreUpdateUserHandler)

export default app
