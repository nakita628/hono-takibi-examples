type CreateGroupRequest = {
  IdentityStoreId: {}
  DisplayName?: {} | undefined
  Description?: {} | undefined
}
type CreateGroupResponse = { GroupId: {}; IdentityStoreId: {} }
type CreateGroupMembershipRequest = {
  IdentityStoreId: {}
  GroupId: {}
  MemberId: { UserId?: {} | undefined }
}
type CreateGroupMembershipResponse = { MembershipId: {}; IdentityStoreId: {} }
type CreateUserRequest = {
  IdentityStoreId: {}
  UserName?: {} | undefined
  Name?:
    | {
        Formatted?: {} | undefined
        FamilyName?: {} | undefined
        GivenName?: {} | undefined
        MiddleName?: {} | undefined
        HonorificPrefix?: {} | undefined
        HonorificSuffix?: {} | undefined
      }
    | undefined
  DisplayName?: {} | undefined
  NickName?: {} | undefined
  ProfileUrl?: {} | undefined
  Emails?: {} | undefined
  Addresses?: {} | undefined
  PhoneNumbers?: {} | undefined
  UserType?: {} | undefined
  Title?: {} | undefined
  PreferredLanguage?: {} | undefined
  Locale?: {} | undefined
  Timezone?: {} | undefined
}
type CreateUserResponse = { UserId: {}; IdentityStoreId: {} }
type DeleteGroupRequest = { IdentityStoreId: {}; GroupId: {} }
type DeleteGroupResponse = { [x: string]: unknown }
type DeleteGroupMembershipRequest = { IdentityStoreId: {}; MembershipId: {} }
type DeleteGroupMembershipResponse = { [x: string]: unknown }
type DeleteUserRequest = { IdentityStoreId: {}; UserId: {} }
type DeleteUserResponse = { [x: string]: unknown }
type DescribeGroupRequest = { IdentityStoreId: {}; GroupId: {} }
type DescribeGroupResponse = {
  GroupId: {}
  DisplayName?: {} | undefined
  ExternalIds?: {} | undefined
  Description?: {} | undefined
  IdentityStoreId: {}
}
type DescribeGroupMembershipRequest = { IdentityStoreId: {}; MembershipId: {} }
type MemberId = { UserId?: {} | undefined }
type DescribeGroupMembershipResponse = {
  IdentityStoreId: {}
  MembershipId: {}
  GroupId: {}
  MemberId: MemberId
}
type DescribeUserRequest = { IdentityStoreId: {}; UserId: {} }
type DescribeUserResponse = {
  UserName?: {} | undefined
  UserId: {}
  ExternalIds?: {} | undefined
  Name?:
    | {
        Formatted?: {} | undefined
        FamilyName?: {} | undefined
        GivenName?: {} | undefined
        MiddleName?: {} | undefined
        HonorificPrefix?: {} | undefined
        HonorificSuffix?: {} | undefined
      }
    | undefined
  DisplayName?: {} | undefined
  NickName?: {} | undefined
  ProfileUrl?: {} | undefined
  Emails?: {} | undefined
  Addresses?: {} | undefined
  PhoneNumbers?: {} | undefined
  UserType?: {} | undefined
  Title?: {} | undefined
  PreferredLanguage?: {} | undefined
  Locale?: {} | undefined
  Timezone?: {} | undefined
  IdentityStoreId: {}
}
type GetGroupIdRequest = {
  IdentityStoreId: {}
  AlternateIdentifier: {
    ExternalId?: { Issuer: {}; Id: {} } | undefined
    UniqueAttribute?: { AttributePath: {}; AttributeValue: {} } | undefined
  }
}
type GetGroupIdResponse = { GroupId: {}; IdentityStoreId: {} }
type GetGroupMembershipIdRequest = {
  IdentityStoreId: {}
  GroupId: {}
  MemberId: { UserId?: {} | undefined }
}
type GetGroupMembershipIdResponse = { MembershipId: {}; IdentityStoreId: {} }
type GetUserIdRequest = {
  IdentityStoreId: {}
  AlternateIdentifier: {
    ExternalId?: { Issuer: {}; Id: {} } | undefined
    UniqueAttribute?: { AttributePath: {}; AttributeValue: {} } | undefined
  }
}
type GetUserIdResponse = { UserId: {}; IdentityStoreId: {} }
type IsMemberInGroupsRequest = {
  IdentityStoreId: {}
  MemberId: { UserId?: {} | undefined }
  GroupIds: {}
}
type IsMemberInGroupsResponse = { Results: {} }
type ListGroupMembershipsRequest = {
  IdentityStoreId: {}
  GroupId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListGroupMembershipsResponse = { GroupMemberships: {}; NextToken?: {} | undefined }
type ListGroupMembershipsForMemberRequest = {
  IdentityStoreId: {}
  MemberId: { UserId?: {} | undefined }
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListGroupMembershipsForMemberResponse = { GroupMemberships: {}; NextToken?: {} | undefined }
type ListGroupsRequest = {
  IdentityStoreId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListGroupsResponse = { Groups: {}; NextToken?: {} | undefined }
type ListUsersRequest = {
  IdentityStoreId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListUsersResponse = { Users: {}; NextToken?: {} | undefined }
type UpdateGroupRequest = { IdentityStoreId: {}; GroupId: {}; Operations: {} }
type UpdateGroupResponse = { [x: string]: unknown }
type UpdateUserRequest = { IdentityStoreId: {}; UserId: {}; Operations: {} }
type UpdateUserResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSIdentityStore.CreateGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.CreateGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGroupRequest }
        output: CreateGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.CreateGroupMembership': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.CreateGroupMembership'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGroupMembershipRequest }
        output: CreateGroupMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.CreateUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.CreateUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserRequest }
        output: CreateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.DeleteGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.DeleteGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGroupRequest }
        output: DeleteGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.DeleteGroupMembership'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGroupMembershipRequest }
        output: DeleteGroupMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.DeleteUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.DeleteUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserRequest }
        output: DeleteUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.DescribeGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.DescribeGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeGroupRequest }
        output: DescribeGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.DescribeGroupMembership'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeGroupMembershipRequest }
        output: DescribeGroupMembershipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.DescribeUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.DescribeUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUserRequest }
        output: DescribeUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.GetGroupId': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.GetGroupId'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetGroupIdRequest }
        output: GetGroupIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.GetGroupMembershipId'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetGroupMembershipIdRequest }
        output: GetGroupMembershipIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.GetUserId': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.GetUserId'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUserIdRequest }
        output: GetUserIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.IsMemberInGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.IsMemberInGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: IsMemberInGroupsRequest }
        output: IsMemberInGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.ListGroupMemberships': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.ListGroupMemberships'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGroupMembershipsRequest }
        output: ListGroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.ListGroupMembershipsForMember'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGroupMembershipsForMemberRequest }
        output: ListGroupMembershipsForMemberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.ListGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.ListGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGroupsRequest }
        output: ListGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.ListUsers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.ListUsers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUsersRequest }
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.UpdateGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.UpdateGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateGroupRequest }
        output: UpdateGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIdentityStore.UpdateUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIdentityStore.UpdateUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateUserRequest }
        output: UpdateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
