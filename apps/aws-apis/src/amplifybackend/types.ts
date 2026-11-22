type CloneBackendResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type NotFoundException = { [x: string]: unknown }
type GatewayTimeoutException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type BadRequestException = { [x: string]: unknown }
type CreateBackendResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type CreateBackendAPIResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type BackendAuthSocialProviderConfig = { ClientId?: {} | undefined; ClientSecret?: {} | undefined }
type BackendAuthAppleProviderConfig = {
  ClientId?: {} | undefined
  KeyId?: {} | undefined
  PrivateKey?: {} | undefined
  TeamId?: {} | undefined
}
type CreateBackendAuthResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type CreateBackendConfigResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  JobId?: {} | undefined
  Status?: {} | undefined
}
type CreateBackendStorageResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  JobId?: {} | undefined
  Status?: {} | undefined
}
type CreateTokenResponse = {
  AppId?: {} | undefined
  ChallengeCode?: {} | undefined
  SessionId?: {} | undefined
  Ttl?: {} | undefined
}
type DeleteBackendResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type DeleteBackendAPIResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type DeleteBackendAuthResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type DeleteBackendStorageResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  JobId?: {} | undefined
  Status?: {} | undefined
}
type DeleteTokenResponse = { IsSuccess?: {} | undefined }
type GenerateBackendAPIModelsResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type GetBackendResponse = {
  AmplifyFeatureFlags?: {} | undefined
  AmplifyMetaConfig?: {} | undefined
  AppId?: {} | undefined
  AppName?: {} | undefined
  BackendEnvironmentList?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
}
type GetBackendAPIResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  ResourceConfig?:
    | {
        AdditionalAuthTypes?: {} | undefined
        ApiName?: {} | undefined
        ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
        DefaultAuthType?:
          | {
              Mode?: {} | undefined
              Settings?:
                | {
                    CognitoUserPoolId?: {} | undefined
                    Description?: {} | undefined
                    ExpirationTime?: {} | undefined
                    OpenIDAuthTTL?: {} | undefined
                    OpenIDClientId?: {} | undefined
                    OpenIDIatTTL?: {} | undefined
                    OpenIDIssueURL?: {} | undefined
                    OpenIDProviderName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Service?: {} | undefined
        TransformSchema?: {} | undefined
      }
    | undefined
  ResourceName?: {} | undefined
}
type GetBackendAPIModelsResponse = {
  Models?: {} | undefined
  Status?: {} | undefined
  ModelIntrospectionSchema?: {} | undefined
}
type GetBackendAuthResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  ResourceConfig?:
    | {
        AuthResources: {}
        IdentityPoolConfigs?: { IdentityPoolName: {}; UnauthenticatedLogin: {} } | undefined
        Service: {}
        UserPoolConfigs: {
          ForgotPassword?:
            | {
                DeliveryMethod: {}
                EmailSettings?:
                  | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                  | undefined
                SmsSettings?: { SmsMessage?: {} | undefined } | undefined
              }
            | undefined
          Mfa?:
            | {
                MFAMode: {}
                Settings?: { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined } | undefined
              }
            | undefined
          OAuth?:
            | {
                DomainPrefix?: {} | undefined
                OAuthGrantType: {}
                OAuthScopes: {}
                RedirectSignInURIs: {}
                RedirectSignOutURIs: {}
                SocialProviderSettings?:
                  | {
                      Facebook?: BackendAuthSocialProviderConfig | undefined
                      Google?: BackendAuthSocialProviderConfig | undefined
                      LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                      SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                    }
                  | undefined
              }
            | undefined
          PasswordPolicy?: { AdditionalConstraints?: {} | undefined; MinimumLength: {} } | undefined
          RequiredSignUpAttributes: {}
          SignInMethod: {}
          UserPoolName: {}
          VerificationMessage?:
            | {
                DeliveryMethod: {}
                EmailSettings?:
                  | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                  | undefined
                SmsSettings?: { SmsMessage?: {} | undefined } | undefined
              }
            | undefined
        }
      }
    | undefined
  ResourceName?: {} | undefined
}
type GetBackendJobResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  CreateTime?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
  UpdateTime?: {} | undefined
}
type UpdateBackendJobResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  CreateTime?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
  UpdateTime?: {} | undefined
}
type GetBackendStorageResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  ResourceConfig?:
    | {
        BucketName?: {} | undefined
        Imported: {}
        Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
        ServiceName: {}
      }
    | undefined
  ResourceName?: {} | undefined
}
type GetTokenResponse = {
  AppId?: {} | undefined
  ChallengeCode?: {} | undefined
  SessionId?: {} | undefined
  Ttl?: {} | undefined
}
type ImportBackendAuthResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type ImportBackendStorageResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  JobId?: {} | undefined
  Status?: {} | undefined
}
type ListBackendJobsResponse = { Jobs?: {} | undefined; NextToken?: {} | undefined }
type ListS3BucketsResponse = { Buckets?: {} | undefined; NextToken?: {} | undefined }
type RemoveAllBackendsResponse = {
  AppId?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type RemoveBackendConfigResponse = { Error?: {} | undefined }
type UpdateBackendAPIResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type UpdateBackendAuthResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  Error?: {} | undefined
  JobId?: {} | undefined
  Operation?: {} | undefined
  Status?: {} | undefined
}
type UpdateBackendConfigResponse = {
  AppId?: {} | undefined
  BackendManagerAppId?: {} | undefined
  Error?: {} | undefined
  LoginAuthConfig?:
    | {
        AwsCognitoIdentityPoolId?: {} | undefined
        AwsCognitoRegion?: {} | undefined
        AwsUserPoolsId?: {} | undefined
        AwsUserPoolsWebClientId?: {} | undefined
      }
    | undefined
}
type UpdateBackendStorageResponse = {
  AppId?: {} | undefined
  BackendEnvironmentName?: {} | undefined
  JobId?: {} | undefined
  Status?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/backend/:appId/environments/:backendEnvironmentName/clone': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { targetEnvironmentName: string } }
            output: CloneBackendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { targetEnvironmentName: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { targetEnvironmentName: string } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { targetEnvironmentName: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { targetEnvironmentName: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                appId: string
                appName: string
                backendEnvironmentName: string
                resourceConfig?: { [x: string]: unknown } | undefined
                resourceName?: string | undefined
              }
            }
            output: CreateBackendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                appId: string
                appName: string
                backendEnvironmentName: string
                resourceConfig?: { [x: string]: unknown } | undefined
                resourceName?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                appId: string
                appName: string
                backendEnvironmentName: string
                resourceConfig?: { [x: string]: unknown } | undefined
                resourceName?: string | undefined
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                appId: string
                appName: string
                backendEnvironmentName: string
                resourceConfig?: { [x: string]: unknown } | undefined
                resourceName?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                appId: string
                appName: string
                backendEnvironmentName: string
                resourceConfig?: { [x: string]: unknown } | undefined
                resourceName?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/api': {
      $post:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AdditionalAuthTypes?: {} | undefined
                  ApiName?: {} | undefined
                  ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                  DefaultAuthType?:
                    | {
                        Mode?: {} | undefined
                        Settings?:
                          | {
                              CognitoUserPoolId?: {} | undefined
                              Description?: {} | undefined
                              ExpirationTime?: {} | undefined
                              OpenIDAuthTTL?: {} | undefined
                              OpenIDClientId?: {} | undefined
                              OpenIDIatTTL?: {} | undefined
                              OpenIDIssueURL?: {} | undefined
                              OpenIDProviderName?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Service?: {} | undefined
                  TransformSchema?: {} | undefined
                }
                resourceName: string
              }
            }
            output: CreateBackendAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AdditionalAuthTypes?: {} | undefined
                  ApiName?: {} | undefined
                  ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                  DefaultAuthType?:
                    | {
                        Mode?: {} | undefined
                        Settings?:
                          | {
                              CognitoUserPoolId?: {} | undefined
                              Description?: {} | undefined
                              ExpirationTime?: {} | undefined
                              OpenIDAuthTTL?: {} | undefined
                              OpenIDClientId?: {} | undefined
                              OpenIDIatTTL?: {} | undefined
                              OpenIDIssueURL?: {} | undefined
                              OpenIDProviderName?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Service?: {} | undefined
                  TransformSchema?: {} | undefined
                }
                resourceName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AdditionalAuthTypes?: {} | undefined
                  ApiName?: {} | undefined
                  ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                  DefaultAuthType?:
                    | {
                        Mode?: {} | undefined
                        Settings?:
                          | {
                              CognitoUserPoolId?: {} | undefined
                              Description?: {} | undefined
                              ExpirationTime?: {} | undefined
                              OpenIDAuthTTL?: {} | undefined
                              OpenIDClientId?: {} | undefined
                              OpenIDIatTTL?: {} | undefined
                              OpenIDIssueURL?: {} | undefined
                              OpenIDProviderName?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Service?: {} | undefined
                  TransformSchema?: {} | undefined
                }
                resourceName: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AdditionalAuthTypes?: {} | undefined
                  ApiName?: {} | undefined
                  ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                  DefaultAuthType?:
                    | {
                        Mode?: {} | undefined
                        Settings?:
                          | {
                              CognitoUserPoolId?: {} | undefined
                              Description?: {} | undefined
                              ExpirationTime?: {} | undefined
                              OpenIDAuthTTL?: {} | undefined
                              OpenIDClientId?: {} | undefined
                              OpenIDIatTTL?: {} | undefined
                              OpenIDIssueURL?: {} | undefined
                              OpenIDProviderName?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Service?: {} | undefined
                  TransformSchema?: {} | undefined
                }
                resourceName: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AdditionalAuthTypes?: {} | undefined
                  ApiName?: {} | undefined
                  ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                  DefaultAuthType?:
                    | {
                        Mode?: {} | undefined
                        Settings?:
                          | {
                              CognitoUserPoolId?: {} | undefined
                              Description?: {} | undefined
                              ExpirationTime?: {} | undefined
                              OpenIDAuthTTL?: {} | undefined
                              OpenIDClientId?: {} | undefined
                              OpenIDIatTTL?: {} | undefined
                              OpenIDIssueURL?: {} | undefined
                              OpenIDProviderName?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Service?: {} | undefined
                  TransformSchema?: {} | undefined
                }
                resourceName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/auth': {
      $post:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?:
                    | { IdentityPoolName: {}; UnauthenticatedLogin: {} }
                    | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode: {}
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType: {}
                              OAuthScopes: {}
                              RedirectSignInURIs: {}
                              RedirectSignOutURIs: {}
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | { AdditionalConstraints?: {} | undefined; MinimumLength: {} }
                          | undefined
                        RequiredSignUpAttributes: {}
                        SignInMethod: {}
                        UserPoolName: {}
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: CreateBackendAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?:
                    | { IdentityPoolName: {}; UnauthenticatedLogin: {} }
                    | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode: {}
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType: {}
                              OAuthScopes: {}
                              RedirectSignInURIs: {}
                              RedirectSignOutURIs: {}
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | { AdditionalConstraints?: {} | undefined; MinimumLength: {} }
                          | undefined
                        RequiredSignUpAttributes: {}
                        SignInMethod: {}
                        UserPoolName: {}
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?:
                    | { IdentityPoolName: {}; UnauthenticatedLogin: {} }
                    | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode: {}
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType: {}
                              OAuthScopes: {}
                              RedirectSignInURIs: {}
                              RedirectSignOutURIs: {}
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | { AdditionalConstraints?: {} | undefined; MinimumLength: {} }
                          | undefined
                        RequiredSignUpAttributes: {}
                        SignInMethod: {}
                        UserPoolName: {}
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?:
                    | { IdentityPoolName: {}; UnauthenticatedLogin: {} }
                    | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode: {}
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType: {}
                              OAuthScopes: {}
                              RedirectSignInURIs: {}
                              RedirectSignOutURIs: {}
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | { AdditionalConstraints?: {} | undefined; MinimumLength: {} }
                          | undefined
                        RequiredSignUpAttributes: {}
                        SignInMethod: {}
                        UserPoolName: {}
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?:
                    | { IdentityPoolName: {}; UnauthenticatedLogin: {} }
                    | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode: {}
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType: {}
                              OAuthScopes: {}
                              RedirectSignInURIs: {}
                              RedirectSignOutURIs: {}
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | { AdditionalConstraints?: {} | undefined; MinimumLength: {} }
                          | undefined
                        RequiredSignUpAttributes: {}
                        SignInMethod: {}
                        UserPoolName: {}
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/config': {
      $post:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendManagerAppId?: string | undefined } }
            output: CreateBackendConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendManagerAppId?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendManagerAppId?: string | undefined } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendManagerAppId?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendManagerAppId?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/storage': {
      $post:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  BucketName?: {} | undefined
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: CreateBackendStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  BucketName?: {} | undefined
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  BucketName?: {} | undefined
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  BucketName?: {} | undefined
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                backendEnvironmentName: string
                resourceConfig: {
                  BucketName?: {} | undefined
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/challenge': {
      $post:
        | {
            input: { param: { appId: string } } & {
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
            output: CreateTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/environments/:backendEnvironmentName/remove': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
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
            output: DeleteBackendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
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
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/api/:backendEnvironmentName/remove': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: DeleteBackendAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/auth/:backendEnvironmentName/remove': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: DeleteBackendAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/storage/:backendEnvironmentName/remove': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string; serviceName: 'S3' } }
            output: DeleteBackendStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string; serviceName: 'S3' } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string; serviceName: 'S3' } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string; serviceName: 'S3' } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string; serviceName: 'S3' } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/challenge/:sessionId/remove': {
      $post:
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: DeleteTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/api/:backendEnvironmentName/generateModels': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GenerateBackendAPIModelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/details': {
      $post:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendEnvironmentName?: string | undefined } }
            output: GetBackendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendEnvironmentName?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendEnvironmentName?: string | undefined } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendEnvironmentName?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { backendEnvironmentName?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/api/:backendEnvironmentName/details': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: GetBackendAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/api/:backendEnvironmentName/getModels': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GetBackendAPIModelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/auth/:backendEnvironmentName/details': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GetBackendAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/job/:backendEnvironmentName/:jobId': {
      $get:
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
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
            output: GetBackendJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
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
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { operation?: string | undefined; status?: string | undefined } }
            output: UpdateBackendJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { operation?: string | undefined; status?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { operation?: string | undefined; status?: string | undefined } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { operation?: string | undefined; status?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string; jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { operation?: string | undefined; status?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/storage/:backendEnvironmentName/details': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GetBackendStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceName: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/challenge/:sessionId': {
      $get:
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: GetTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; sessionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/auth/:backendEnvironmentName/import': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                identityPoolId?: string | undefined
                nativeClientId: string
                userPoolId: string
                webClientId: string
              }
            }
            output: ImportBackendAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                identityPoolId?: string | undefined
                nativeClientId: string
                userPoolId: string
                webClientId: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                identityPoolId?: string | undefined
                nativeClientId: string
                userPoolId: string
                webClientId: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                identityPoolId?: string | undefined
                nativeClientId: string
                userPoolId: string
                webClientId: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                identityPoolId?: string | undefined
                nativeClientId: string
                userPoolId: string
                webClientId: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/storage/:backendEnvironmentName/import': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { bucketName?: string | undefined; serviceName: 'S3' } }
            output: ImportBackendStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { bucketName?: string | undefined; serviceName: 'S3' } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { bucketName?: string | undefined; serviceName: 'S3' } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { bucketName?: string | undefined; serviceName: 'S3' } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { bucketName?: string | undefined; serviceName: 'S3' } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/job/:backendEnvironmentName': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                jobId?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                operation?: string | undefined
                status?: string | undefined
              }
            }
            output: ListBackendJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                jobId?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                operation?: string | undefined
                status?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                jobId?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                operation?: string | undefined
                status?: string | undefined
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                jobId?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                operation?: string | undefined
                status?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                jobId?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                operation?: string | undefined
                status?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/s3Buckets': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { nextToken?: string | undefined } }
            output: ListS3BucketsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { nextToken?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { nextToken?: string | undefined } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { nextToken?: string | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { nextToken?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/remove': {
      $post:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { cleanAmplifyApp?: boolean | undefined } }
            output: RemoveAllBackendsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { cleanAmplifyApp?: boolean | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { cleanAmplifyApp?: boolean | undefined } }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { cleanAmplifyApp?: boolean | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { cleanAmplifyApp?: boolean | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/config/remove': {
      $post:
        | {
            input: { param: { appId: string } } & {
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
            output: RemoveBackendConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
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
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/api/:backendEnvironmentName': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: UpdateBackendAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig?:
                  | {
                      AdditionalAuthTypes?: {} | undefined
                      ApiName?: {} | undefined
                      ConflictResolution?: { ResolutionStrategy?: {} | undefined } | undefined
                      DefaultAuthType?:
                        | {
                            Mode?: {} | undefined
                            Settings?:
                              | {
                                  CognitoUserPoolId?: {} | undefined
                                  Description?: {} | undefined
                                  ExpirationTime?: {} | undefined
                                  OpenIDAuthTTL?: {} | undefined
                                  OpenIDClientId?: {} | undefined
                                  OpenIDIatTTL?: {} | undefined
                                  OpenIDIssueURL?: {} | undefined
                                  OpenIDProviderName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      Service?: {} | undefined
                      TransformSchema?: {} | undefined
                    }
                  | undefined
                resourceName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/auth/:backendEnvironmentName': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?: { UnauthenticatedLogin?: {} | undefined } | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod?: {} | undefined
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode?: {} | undefined
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType?: {} | undefined
                              OAuthScopes?: {} | undefined
                              RedirectSignInURIs?: {} | undefined
                              RedirectSignOutURIs?: {} | undefined
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | {
                              AdditionalConstraints?: {} | undefined
                              MinimumLength?: {} | undefined
                            }
                          | undefined
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: UpdateBackendAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?: { UnauthenticatedLogin?: {} | undefined } | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod?: {} | undefined
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode?: {} | undefined
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType?: {} | undefined
                              OAuthScopes?: {} | undefined
                              RedirectSignInURIs?: {} | undefined
                              RedirectSignOutURIs?: {} | undefined
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | {
                              AdditionalConstraints?: {} | undefined
                              MinimumLength?: {} | undefined
                            }
                          | undefined
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?: { UnauthenticatedLogin?: {} | undefined } | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod?: {} | undefined
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode?: {} | undefined
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType?: {} | undefined
                              OAuthScopes?: {} | undefined
                              RedirectSignInURIs?: {} | undefined
                              RedirectSignOutURIs?: {} | undefined
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | {
                              AdditionalConstraints?: {} | undefined
                              MinimumLength?: {} | undefined
                            }
                          | undefined
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?: { UnauthenticatedLogin?: {} | undefined } | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod?: {} | undefined
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode?: {} | undefined
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType?: {} | undefined
                              OAuthScopes?: {} | undefined
                              RedirectSignInURIs?: {} | undefined
                              RedirectSignOutURIs?: {} | undefined
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | {
                              AdditionalConstraints?: {} | undefined
                              MinimumLength?: {} | undefined
                            }
                          | undefined
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  AuthResources?: {} | undefined
                  IdentityPoolConfigs?: { UnauthenticatedLogin?: {} | undefined } | undefined
                  Service?: {} | undefined
                  UserPoolConfigs?:
                    | {
                        ForgotPassword?:
                          | {
                              DeliveryMethod?: {} | undefined
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                        Mfa?:
                          | {
                              MFAMode?: {} | undefined
                              Settings?:
                                | { MfaTypes?: {} | undefined; SmsMessage?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        OAuth?:
                          | {
                              DomainPrefix?: {} | undefined
                              OAuthGrantType?: {} | undefined
                              OAuthScopes?: {} | undefined
                              RedirectSignInURIs?: {} | undefined
                              RedirectSignOutURIs?: {} | undefined
                              SocialProviderSettings?:
                                | {
                                    Facebook?: BackendAuthSocialProviderConfig | undefined
                                    Google?: BackendAuthSocialProviderConfig | undefined
                                    LoginWithAmazon?: BackendAuthSocialProviderConfig | undefined
                                    SignInWithApple?: BackendAuthAppleProviderConfig | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        PasswordPolicy?:
                          | {
                              AdditionalConstraints?: {} | undefined
                              MinimumLength?: {} | undefined
                            }
                          | undefined
                        VerificationMessage?:
                          | {
                              DeliveryMethod: {}
                              EmailSettings?:
                                | { EmailMessage?: {} | undefined; EmailSubject?: {} | undefined }
                                | undefined
                              SmsSettings?: { SmsMessage?: {} | undefined } | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
                resourceName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/config/update': {
      $post:
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                loginAuthConfig?:
                  | {
                      AwsCognitoIdentityPoolId?: {} | undefined
                      AwsCognitoRegion?: {} | undefined
                      AwsUserPoolsId?: {} | undefined
                      AwsUserPoolsWebClientId?: {} | undefined
                    }
                  | undefined
              }
            }
            output: UpdateBackendConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                loginAuthConfig?:
                  | {
                      AwsCognitoIdentityPoolId?: {} | undefined
                      AwsCognitoRegion?: {} | undefined
                      AwsUserPoolsId?: {} | undefined
                      AwsUserPoolsWebClientId?: {} | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                loginAuthConfig?:
                  | {
                      AwsCognitoIdentityPoolId?: {} | undefined
                      AwsCognitoRegion?: {} | undefined
                      AwsUserPoolsId?: {} | undefined
                      AwsUserPoolsWebClientId?: {} | undefined
                    }
                  | undefined
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                loginAuthConfig?:
                  | {
                      AwsCognitoIdentityPoolId?: {} | undefined
                      AwsCognitoRegion?: {} | undefined
                      AwsUserPoolsId?: {} | undefined
                      AwsUserPoolsWebClientId?: {} | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                loginAuthConfig?:
                  | {
                      AwsCognitoIdentityPoolId?: {} | undefined
                      AwsCognitoRegion?: {} | undefined
                      AwsUserPoolsId?: {} | undefined
                      AwsUserPoolsWebClientId?: {} | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/backend/:appId/storage/:backendEnvironmentName': {
      $post:
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: UpdateBackendStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: GatewayTimeoutException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { appId: string; backendEnvironmentName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                resourceConfig: {
                  Permissions?: { Authenticated: {}; UnAuthenticated?: {} | undefined } | undefined
                  ServiceName?: {} | undefined
                }
                resourceName: string
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
