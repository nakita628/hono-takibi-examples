type PolicyDescriptorType = { arn?: {} | undefined }
type Tag = { Key: {}; Value: {} }
type TagKeyType = string
type ProvidedContext = { ProviderArn?: {} | undefined; ContextAssertion?: {} | undefined }
type AssumeRoleResponse = {
  Credentials?:
    | { AccessKeyId: {}; SecretAccessKey: {}; SessionToken: {}; Expiration: {} }
    | undefined
  AssumedRoleUser?: { AssumedRoleId: {}; Arn: {} } | undefined
  PackedPolicySize?: {} | undefined
  SourceIdentity?: {} | undefined
}
type MalformedPolicyDocumentException = { [x: string]: unknown }
type PackedPolicyTooLargeException = { [x: string]: unknown }
type RegionDisabledException = { [x: string]: unknown }
type ExpiredTokenException = { [x: string]: unknown }
type AssumeRoleRequest = {
  RoleArn: {}
  RoleSessionName: {}
  PolicyArns?: {} | undefined
  Policy?: {} | undefined
  DurationSeconds?: {} | undefined
  Tags?: {} | undefined
  TransitiveTagKeys?: {} | undefined
  ExternalId?: {} | undefined
  SerialNumber?: {} | undefined
  TokenCode?: {} | undefined
  SourceIdentity?: {} | undefined
  ProvidedContexts?: {} | undefined
}
type AssumeRoleWithSAMLResponse = {
  Credentials?:
    | { AccessKeyId: {}; SecretAccessKey: {}; SessionToken: {}; Expiration: {} }
    | undefined
  AssumedRoleUser?: { AssumedRoleId: {}; Arn: {} } | undefined
  PackedPolicySize?: {} | undefined
  Subject?: {} | undefined
  SubjectType?: {} | undefined
  Issuer?: {} | undefined
  Audience?: {} | undefined
  NameQualifier?: {} | undefined
  SourceIdentity?: {} | undefined
}
type IDPRejectedClaimException = { [x: string]: unknown }
type InvalidIdentityTokenException = { [x: string]: unknown }
type AssumeRoleWithSAMLRequest = {
  RoleArn: {}
  PrincipalArn: {}
  SAMLAssertion: {}
  PolicyArns?: {} | undefined
  Policy?: {} | undefined
  DurationSeconds?: {} | undefined
}
type AssumeRoleWithWebIdentityResponse = {
  Credentials?:
    | { AccessKeyId: {}; SecretAccessKey: {}; SessionToken: {}; Expiration: {} }
    | undefined
  SubjectFromWebIdentityToken?: {} | undefined
  AssumedRoleUser?: { AssumedRoleId: {}; Arn: {} } | undefined
  PackedPolicySize?: {} | undefined
  Provider?: {} | undefined
  Audience?: {} | undefined
  SourceIdentity?: {} | undefined
}
type IDPCommunicationErrorException = { [x: string]: unknown }
type AssumeRoleWithWebIdentityRequest = {
  RoleArn: {}
  RoleSessionName: {}
  WebIdentityToken: {}
  ProviderId?: {} | undefined
  PolicyArns?: {} | undefined
  Policy?: {} | undefined
  DurationSeconds?: {} | undefined
}
type DecodeAuthorizationMessageResponse = { DecodedMessage?: {} | undefined }
type InvalidAuthorizationMessageException = { [x: string]: unknown }
type DecodeAuthorizationMessageRequest = { EncodedMessage: {} }
type GetAccessKeyInfoResponse = { Account?: {} | undefined }
type GetAccessKeyInfoRequest = { AccessKeyId: {} }
type GetCallerIdentityResponse = {
  UserId?: {} | undefined
  Account?: {} | undefined
  Arn?: {} | undefined
}
type GetCallerIdentityRequest = { [x: string]: unknown }
type GetFederationTokenResponse = {
  Credentials?:
    | { AccessKeyId: {}; SecretAccessKey: {}; SessionToken: {}; Expiration: {} }
    | undefined
  FederatedUser?: { FederatedUserId: {}; Arn: {} } | undefined
  PackedPolicySize?: {} | undefined
}
type GetFederationTokenRequest = {
  Name: {}
  Policy?: {} | undefined
  PolicyArns?: {} | undefined
  DurationSeconds?: {} | undefined
  Tags?: {} | undefined
}
type GetSessionTokenResponse = {
  Credentials?:
    | { AccessKeyId: {}; SecretAccessKey: {}; SessionToken: {}; Expiration: {} }
    | undefined
}
type GetSessionTokenRequest = {
  DurationSeconds?: {} | undefined
  SerialNumber?: {} | undefined
  TokenCode?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AssumeRole': {
      $get:
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                TransitiveTagKeys?: TagKeyType[] | undefined
                ExternalId?: string | undefined
                SerialNumber?: string | undefined
                TokenCode?: string | undefined
                SourceIdentity?: string | undefined
                ProvidedContexts?: ProvidedContext[] | undefined
                Action: 'AssumeRole'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AssumeRoleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                TransitiveTagKeys?: TagKeyType[] | undefined
                ExternalId?: string | undefined
                SerialNumber?: string | undefined
                TokenCode?: string | undefined
                SourceIdentity?: string | undefined
                ProvidedContexts?: ProvidedContext[] | undefined
                Action: 'AssumeRole'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: MalformedPolicyDocumentException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                TransitiveTagKeys?: TagKeyType[] | undefined
                ExternalId?: string | undefined
                SerialNumber?: string | undefined
                TokenCode?: string | undefined
                SourceIdentity?: string | undefined
                ProvidedContexts?: ProvidedContext[] | undefined
                Action: 'AssumeRole'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PackedPolicyTooLargeException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                TransitiveTagKeys?: TagKeyType[] | undefined
                ExternalId?: string | undefined
                SerialNumber?: string | undefined
                TokenCode?: string | undefined
                SourceIdentity?: string | undefined
                ProvidedContexts?: ProvidedContext[] | undefined
                Action: 'AssumeRole'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                TransitiveTagKeys?: TagKeyType[] | undefined
                ExternalId?: string | undefined
                SerialNumber?: string | undefined
                TokenCode?: string | undefined
                SourceIdentity?: string | undefined
                ProvidedContexts?: ProvidedContext[] | undefined
                Action: 'AssumeRole'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ExpiredTokenException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'AssumeRole'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleRequest }
            output: AssumeRoleResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'AssumeRole'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleRequest }
            output: MalformedPolicyDocumentException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AssumeRole'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleRequest }
            output: PackedPolicyTooLargeException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AssumeRole'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleRequest }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'AssumeRole'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleRequest }
            output: ExpiredTokenException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=AssumeRoleWithSAML': {
      $get:
        | {
            input: {
              query: {
                RoleArn: string
                PrincipalArn: string
                SAMLAssertion: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithSAML'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AssumeRoleWithSAMLResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RoleArn: string
                PrincipalArn: string
                SAMLAssertion: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithSAML'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: MalformedPolicyDocumentException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RoleArn: string
                PrincipalArn: string
                SAMLAssertion: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithSAML'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PackedPolicyTooLargeException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                RoleArn: string
                PrincipalArn: string
                SAMLAssertion: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithSAML'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: IDPRejectedClaimException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                RoleArn: string
                PrincipalArn: string
                SAMLAssertion: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithSAML'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidIdentityTokenException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                RoleArn: string
                PrincipalArn: string
                SAMLAssertion: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithSAML'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ExpiredTokenException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                RoleArn: string
                PrincipalArn: string
                SAMLAssertion: string
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithSAML'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'AssumeRoleWithSAML'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithSAMLRequest }
            output: AssumeRoleWithSAMLResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'AssumeRoleWithSAML'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithSAMLRequest }
            output: MalformedPolicyDocumentException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AssumeRoleWithSAML'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithSAMLRequest }
            output: PackedPolicyTooLargeException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AssumeRoleWithSAML'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithSAMLRequest }
            output: IDPRejectedClaimException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'AssumeRoleWithSAML'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithSAMLRequest }
            output: InvalidIdentityTokenException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'AssumeRoleWithSAML'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithSAMLRequest }
            output: ExpiredTokenException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'AssumeRoleWithSAML'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithSAMLRequest }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=AssumeRoleWithWebIdentity': {
      $get:
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                WebIdentityToken: string
                ProviderId?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithWebIdentity'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AssumeRoleWithWebIdentityResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                WebIdentityToken: string
                ProviderId?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithWebIdentity'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: MalformedPolicyDocumentException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                WebIdentityToken: string
                ProviderId?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithWebIdentity'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PackedPolicyTooLargeException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                WebIdentityToken: string
                ProviderId?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithWebIdentity'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: IDPRejectedClaimException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                WebIdentityToken: string
                ProviderId?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithWebIdentity'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: IDPCommunicationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                WebIdentityToken: string
                ProviderId?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithWebIdentity'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidIdentityTokenException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                WebIdentityToken: string
                ProviderId?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithWebIdentity'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ExpiredTokenException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                RoleArn: string
                RoleSessionName: string
                WebIdentityToken: string
                ProviderId?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                Policy?: string | undefined
                DurationSeconds?: number | undefined
                Action: 'AssumeRoleWithWebIdentity'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: { query: { Action: 'AssumeRoleWithWebIdentity'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithWebIdentityRequest }
            output: AssumeRoleWithWebIdentityResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'AssumeRoleWithWebIdentity'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithWebIdentityRequest }
            output: MalformedPolicyDocumentException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AssumeRoleWithWebIdentity'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithWebIdentityRequest }
            output: PackedPolicyTooLargeException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AssumeRoleWithWebIdentity'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithWebIdentityRequest }
            output: IDPRejectedClaimException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'AssumeRoleWithWebIdentity'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithWebIdentityRequest }
            output: IDPCommunicationErrorException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'AssumeRoleWithWebIdentity'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithWebIdentityRequest }
            output: InvalidIdentityTokenException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'AssumeRoleWithWebIdentity'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithWebIdentityRequest }
            output: ExpiredTokenException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'AssumeRoleWithWebIdentity'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssumeRoleWithWebIdentityRequest }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Action=DecodeAuthorizationMessage': {
      $get:
        | {
            input: {
              query: {
                EncodedMessage: string
                Action: 'DecodeAuthorizationMessage'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DecodeAuthorizationMessageResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                EncodedMessage: string
                Action: 'DecodeAuthorizationMessage'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidAuthorizationMessageException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DecodeAuthorizationMessage'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DecodeAuthorizationMessageRequest }
            output: DecodeAuthorizationMessageResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DecodeAuthorizationMessage'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DecodeAuthorizationMessageRequest }
            output: InvalidAuthorizationMessageException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=GetAccessKeyInfo': {
      $get: {
        input: {
          query: { AccessKeyId: string; Action: 'GetAccessKeyInfo'; Version: '2011-06-15' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccessKeyInfoResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetAccessKeyInfo'; Version: '2011-06-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAccessKeyInfoRequest }
        output: GetAccessKeyInfoResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetCallerIdentity': {
      $get: {
        input: { query: { Action: 'GetCallerIdentity'; Version: '2011-06-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCallerIdentityResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetCallerIdentity'; Version: '2011-06-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCallerIdentityRequest }
        output: GetCallerIdentityResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetFederationToken': {
      $get:
        | {
            input: {
              query: {
                Name: string
                Policy?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                Action: 'GetFederationToken'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetFederationTokenResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name: string
                Policy?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                Action: 'GetFederationToken'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: MalformedPolicyDocumentException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Name: string
                Policy?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                Action: 'GetFederationToken'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PackedPolicyTooLargeException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Name: string
                Policy?: string | undefined
                PolicyArns?: PolicyDescriptorType[] | undefined
                DurationSeconds?: number | undefined
                Tags?: Tag[] | undefined
                Action: 'GetFederationToken'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'GetFederationToken'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFederationTokenRequest }
            output: GetFederationTokenResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetFederationToken'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFederationTokenRequest }
            output: MalformedPolicyDocumentException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'GetFederationToken'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFederationTokenRequest }
            output: PackedPolicyTooLargeException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'GetFederationToken'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetFederationTokenRequest }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=GetSessionToken': {
      $get:
        | {
            input: {
              query: {
                DurationSeconds?: number | undefined
                SerialNumber?: string | undefined
                TokenCode?: string | undefined
                Action: 'GetSessionToken'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetSessionTokenResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                DurationSeconds?: number | undefined
                SerialNumber?: string | undefined
                TokenCode?: string | undefined
                Action: 'GetSessionToken'
                Version: '2011-06-15'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'GetSessionToken'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSessionTokenRequest }
            output: GetSessionTokenResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'GetSessionToken'; Version: '2011-06-15' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetSessionTokenRequest }
            output: RegionDisabledException
            outputFormat: 'text'
            status: 480
          }
    }
  },
  '/'
>
export default routes
