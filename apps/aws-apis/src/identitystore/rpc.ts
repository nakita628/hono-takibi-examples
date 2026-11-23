import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSIdentityStoreCreateGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.CreateGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreCreateGroupMembership(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreCreateUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.CreateUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreDeleteGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.DeleteGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreDeleteGroupMembership(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreDeleteUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.DeleteUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreDescribeGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.DescribeGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreDescribeGroupMembership(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreDescribeUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.DescribeUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreGetGroupId(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.GetGroupId'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreGetGroupMembershipId(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreGetUserId(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.GetUserId'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreIsMemberInGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreListGroupMemberships(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreListGroupMembershipsForMember(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreListGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.ListGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreListUsers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.ListUsers'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreUpdateGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.UpdateGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSIdentityStoreUpdateUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSIdentityStore.UpdateUser'].$post(args, options),
  )
}
