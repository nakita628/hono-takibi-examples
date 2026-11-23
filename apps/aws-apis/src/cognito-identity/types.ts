type CreateIdentityPoolInput = {
  IdentityPoolName: {}
  AllowUnauthenticatedIdentities: {}
  AllowClassicFlow?: {} | undefined
  SupportedLoginProviders?: {} | undefined
  DeveloperProviderName?: {} | undefined
  OpenIdConnectProviderARNs?: {} | undefined
  CognitoIdentityProviders?: {} | undefined
  SamlProviderARNs?: {} | undefined
  IdentityPoolTags?: {} | undefined
}
type IdentityPool = {
  IdentityPoolId: {}
  IdentityPoolName: {}
  AllowUnauthenticatedIdentities: {}
  AllowClassicFlow?: {} | undefined
  SupportedLoginProviders?: {} | undefined
  DeveloperProviderName?: {} | undefined
  OpenIdConnectProviderARNs?: {} | undefined
  CognitoIdentityProviders?: {} | undefined
  SamlProviderARNs?: {} | undefined
  IdentityPoolTags?: {} | undefined
}
type DeleteIdentitiesInput = { IdentityIdsToDelete: {} }
type DeleteIdentitiesResponse = { UnprocessedIdentityIds?: {} | undefined }
type DeleteIdentityPoolInput = { IdentityPoolId: {} }
type DescribeIdentityInput = { IdentityId: {} }
type IdentityDescription = {
  IdentityId?: {} | undefined
  Logins?: {} | undefined
  CreationDate?: {} | undefined
  LastModifiedDate?: {} | undefined
}
type DescribeIdentityPoolInput = { IdentityPoolId: {} }
type GetCredentialsForIdentityInput = {
  IdentityId: {}
  Logins?: {} | undefined
  CustomRoleArn?: {} | undefined
}
type GetCredentialsForIdentityResponse = {
  IdentityId?: {} | undefined
  Credentials?:
    | {
        AccessKeyId?: {} | undefined
        SecretKey?: {} | undefined
        SessionToken?: {} | undefined
        Expiration?: {} | undefined
      }
    | undefined
}
type GetIdInput = { AccountId?: {} | undefined; IdentityPoolId: {}; Logins?: {} | undefined }
type GetIdResponse = { IdentityId?: {} | undefined }
type GetIdentityPoolRolesInput = { IdentityPoolId: {} }
type GetIdentityPoolRolesResponse = {
  IdentityPoolId?: {} | undefined
  Roles?: {} | undefined
  RoleMappings?: {} | undefined
}
type GetOpenIdTokenInput = { IdentityId: {}; Logins?: {} | undefined }
type GetOpenIdTokenResponse = { IdentityId?: {} | undefined; Token?: {} | undefined }
type GetOpenIdTokenForDeveloperIdentityInput = {
  IdentityPoolId: {}
  IdentityId?: {} | undefined
  Logins: {}
  PrincipalTags?: {} | undefined
  TokenDuration?: {} | undefined
}
type GetOpenIdTokenForDeveloperIdentityResponse = {
  IdentityId?: {} | undefined
  Token?: {} | undefined
}
type GetPrincipalTagAttributeMapInput = { IdentityPoolId: {}; IdentityProviderName: {} }
type GetPrincipalTagAttributeMapResponse = {
  IdentityPoolId?: {} | undefined
  IdentityProviderName?: {} | undefined
  UseDefaults?: {} | undefined
  PrincipalTags?: {} | undefined
}
type ListIdentitiesInput = {
  IdentityPoolId: {}
  MaxResults: {}
  NextToken?: {} | undefined
  HideDisabled?: {} | undefined
}
type ListIdentitiesResponse = {
  IdentityPoolId?: {} | undefined
  Identities?: {} | undefined
  NextToken?: {} | undefined
}
type ListIdentityPoolsInput = { MaxResults: {}; NextToken?: {} | undefined }
type ListIdentityPoolsResponse = { IdentityPools?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceInput = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type LookupDeveloperIdentityInput = {
  IdentityPoolId: {}
  IdentityId?: {} | undefined
  DeveloperUserIdentifier?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type LookupDeveloperIdentityResponse = {
  IdentityId?: {} | undefined
  DeveloperUserIdentifierList?: {} | undefined
  NextToken?: {} | undefined
}
type MergeDeveloperIdentitiesInput = {
  SourceUserIdentifier: {}
  DestinationUserIdentifier: {}
  DeveloperProviderName: {}
  IdentityPoolId: {}
}
type MergeDeveloperIdentitiesResponse = { IdentityId?: {} | undefined }
type SetIdentityPoolRolesInput = { IdentityPoolId: {}; Roles: {}; RoleMappings?: {} | undefined }
type SetPrincipalTagAttributeMapInput = {
  IdentityPoolId: {}
  IdentityProviderName: {}
  UseDefaults?: {} | undefined
  PrincipalTags?: {} | undefined
}
type SetPrincipalTagAttributeMapResponse = {
  IdentityPoolId?: {} | undefined
  IdentityProviderName?: {} | undefined
  UseDefaults?: {} | undefined
  PrincipalTags?: {} | undefined
}
type TagResourceInput = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UnlinkDeveloperIdentityInput = {
  IdentityId: {}
  IdentityPoolId: {}
  DeveloperProviderName: {}
  DeveloperUserIdentifier: {}
}
type UnlinkIdentityInput = { IdentityId: {}; Logins: {}; LoginsToRemove: {} }
type UntagResourceInput = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.CreateIdentityPool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateIdentityPoolInput }
        output: IdentityPool
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.DeleteIdentities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteIdentitiesInput }
        output: DeleteIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.DeleteIdentityPool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteIdentityPoolInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.DescribeIdentity'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeIdentityInput }
        output: IdentityDescription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.DescribeIdentityPool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeIdentityPoolInput }
        output: IdentityPool
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.GetCredentialsForIdentity'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCredentialsForIdentityInput }
        output: GetCredentialsForIdentityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.GetId': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.GetId'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetIdInput }
        output: GetIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.GetIdentityPoolRoles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetIdentityPoolRolesInput }
        output: GetIdentityPoolRolesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.GetOpenIdToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOpenIdTokenInput }
        output: GetOpenIdTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOpenIdTokenForDeveloperIdentityInput }
        output: GetOpenIdTokenForDeveloperIdentityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.GetPrincipalTagAttributeMap'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPrincipalTagAttributeMapInput }
        output: GetPrincipalTagAttributeMapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.ListIdentities': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.ListIdentities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListIdentitiesInput }
        output: ListIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.ListIdentityPools'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListIdentityPoolsInput }
        output: ListIdentityPoolsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceInput }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.LookupDeveloperIdentity'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: LookupDeveloperIdentityInput }
        output: LookupDeveloperIdentityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.MergeDeveloperIdentities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: MergeDeveloperIdentitiesInput }
        output: MergeDeveloperIdentitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.SetIdentityPoolRoles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetIdentityPoolRolesInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.SetPrincipalTagAttributeMap'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetPrincipalTagAttributeMapInput }
        output: SetPrincipalTagAttributeMapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceInput }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.UnlinkDeveloperIdentity'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UnlinkDeveloperIdentityInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.UnlinkIdentity'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UnlinkIdentityInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceInput }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityService.UpdateIdentityPool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: IdentityPool }
        output: IdentityPool
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
