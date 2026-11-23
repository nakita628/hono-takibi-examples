type AddCustomAttributesRequest = { UserPoolId: {}; CustomAttributes: {} }
type AddCustomAttributesResponse = { [x: string]: unknown }
type AdminAddUserToGroupRequest = { UserPoolId: {}; Username: {}; GroupName: {} }
type AdminConfirmSignUpRequest = { UserPoolId: {}; Username: {}; ClientMetadata?: {} | undefined }
type AdminConfirmSignUpResponse = { [x: string]: unknown }
type AdminCreateUserRequest = {
  UserPoolId: {}
  Username: {}
  UserAttributes?: {} | undefined
  ValidationData?: {} | undefined
  TemporaryPassword?: {} | undefined
  ForceAliasCreation?: {} | undefined
  MessageAction?: {} | undefined
  DesiredDeliveryMediums?: {} | undefined
  ClientMetadata?: {} | undefined
}
type AdminCreateUserResponse = {
  User?:
    | {
        Username?: {} | undefined
        Attributes?: {} | undefined
        UserCreateDate?: {} | undefined
        UserLastModifiedDate?: {} | undefined
        Enabled?: {} | undefined
        UserStatus?: {} | undefined
        MFAOptions?: {} | undefined
      }
    | undefined
}
type AdminDeleteUserRequest = { UserPoolId: {}; Username: {} }
type AdminDeleteUserAttributesRequest = { UserPoolId: {}; Username: {}; UserAttributeNames: {} }
type AdminDeleteUserAttributesResponse = { [x: string]: unknown }
type AdminDisableProviderForUserRequest = {
  UserPoolId: {}
  User: {
    ProviderName?: {} | undefined
    ProviderAttributeName?: {} | undefined
    ProviderAttributeValue?: {} | undefined
  }
}
type AdminDisableProviderForUserResponse = { [x: string]: unknown }
type AdminDisableUserRequest = { UserPoolId: {}; Username: {} }
type AdminDisableUserResponse = { [x: string]: unknown }
type AdminEnableUserRequest = { UserPoolId: {}; Username: {} }
type AdminEnableUserResponse = { [x: string]: unknown }
type AdminForgetDeviceRequest = { UserPoolId: {}; Username: {}; DeviceKey: {} }
type AdminGetDeviceRequest = { DeviceKey: {}; UserPoolId: {}; Username: {} }
type AdminGetDeviceResponse = {
  Device: {
    DeviceKey?: {} | undefined
    DeviceAttributes?: {} | undefined
    DeviceCreateDate?: {} | undefined
    DeviceLastModifiedDate?: {} | undefined
    DeviceLastAuthenticatedDate?: {} | undefined
  }
}
type AdminGetUserRequest = { UserPoolId: {}; Username: {} }
type AdminGetUserResponse = {
  Username: {}
  UserAttributes?: {} | undefined
  UserCreateDate?: {} | undefined
  UserLastModifiedDate?: {} | undefined
  Enabled?: {} | undefined
  UserStatus?: {} | undefined
  MFAOptions?: {} | undefined
  PreferredMfaSetting?: {} | undefined
  UserMFASettingList?: {} | undefined
}
type AdminInitiateAuthRequest = {
  UserPoolId: {}
  ClientId: {}
  AuthFlow: {}
  AuthParameters?: {} | undefined
  ClientMetadata?: {} | undefined
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  ContextData?:
    | {
        IpAddress: {}
        ServerName: {}
        ServerPath: {}
        HttpHeaders: {}
        EncodedData?: {} | undefined
      }
    | undefined
}
type AdminInitiateAuthResponse = {
  ChallengeName?: {} | undefined
  Session?: {} | undefined
  ChallengeParameters?: {} | undefined
  AuthenticationResult?:
    | {
        AccessToken?: {} | undefined
        ExpiresIn?: {} | undefined
        TokenType?: {} | undefined
        RefreshToken?: {} | undefined
        IdToken?: {} | undefined
        NewDeviceMetadata?:
          | { DeviceKey?: {} | undefined; DeviceGroupKey?: {} | undefined }
          | undefined
      }
    | undefined
}
type AdminLinkProviderForUserRequest = {
  UserPoolId: {}
  DestinationUser: {
    ProviderName?: {} | undefined
    ProviderAttributeName?: {} | undefined
    ProviderAttributeValue?: {} | undefined
  }
  SourceUser: {
    ProviderName?: {} | undefined
    ProviderAttributeName?: {} | undefined
    ProviderAttributeValue?: {} | undefined
  }
}
type AdminLinkProviderForUserResponse = { [x: string]: unknown }
type AdminListDevicesRequest = {
  UserPoolId: {}
  Username: {}
  Limit?: {} | undefined
  PaginationToken?: {} | undefined
}
type AdminListDevicesResponse = { Devices?: {} | undefined; PaginationToken?: {} | undefined }
type AdminListGroupsForUserRequest = {
  Username: {}
  UserPoolId: {}
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type AdminListGroupsForUserResponse = { Groups?: {} | undefined; NextToken?: {} | undefined }
type AdminListUserAuthEventsRequest = {
  UserPoolId: {}
  Username: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type AdminListUserAuthEventsResponse = { AuthEvents?: {} | undefined; NextToken?: {} | undefined }
type AdminRemoveUserFromGroupRequest = { UserPoolId: {}; Username: {}; GroupName: {} }
type AdminResetUserPasswordRequest = {
  UserPoolId: {}
  Username: {}
  ClientMetadata?: {} | undefined
}
type AdminResetUserPasswordResponse = { [x: string]: unknown }
type AdminRespondToAuthChallengeRequest = {
  UserPoolId: {}
  ClientId: {}
  ChallengeName: {}
  ChallengeResponses?: {} | undefined
  Session?: {} | undefined
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  ContextData?:
    | {
        IpAddress: {}
        ServerName: {}
        ServerPath: {}
        HttpHeaders: {}
        EncodedData?: {} | undefined
      }
    | undefined
  ClientMetadata?: {} | undefined
}
type AdminRespondToAuthChallengeResponse = {
  ChallengeName?: {} | undefined
  Session?: {} | undefined
  ChallengeParameters?: {} | undefined
  AuthenticationResult?:
    | {
        AccessToken?: {} | undefined
        ExpiresIn?: {} | undefined
        TokenType?: {} | undefined
        RefreshToken?: {} | undefined
        IdToken?: {} | undefined
        NewDeviceMetadata?:
          | { DeviceKey?: {} | undefined; DeviceGroupKey?: {} | undefined }
          | undefined
      }
    | undefined
}
type AdminSetUserMFAPreferenceRequest = {
  SMSMfaSettings?: { Enabled?: {} | undefined; PreferredMfa?: {} | undefined } | undefined
  SoftwareTokenMfaSettings?: { Enabled?: {} | undefined; PreferredMfa?: {} | undefined } | undefined
  Username: {}
  UserPoolId: {}
}
type AdminSetUserMFAPreferenceResponse = { [x: string]: unknown }
type AdminSetUserPasswordRequest = {
  UserPoolId: {}
  Username: {}
  Password: {}
  Permanent?: {} | undefined
}
type AdminSetUserPasswordResponse = { [x: string]: unknown }
type AdminSetUserSettingsRequest = { UserPoolId: {}; Username: {}; MFAOptions: {} }
type AdminSetUserSettingsResponse = { [x: string]: unknown }
type AdminUpdateAuthEventFeedbackRequest = {
  UserPoolId: {}
  Username: {}
  EventId: {}
  FeedbackValue: {}
}
type AdminUpdateAuthEventFeedbackResponse = { [x: string]: unknown }
type AdminUpdateDeviceStatusRequest = {
  UserPoolId: {}
  Username: {}
  DeviceKey: {}
  DeviceRememberedStatus?: {} | undefined
}
type AdminUpdateDeviceStatusResponse = { [x: string]: unknown }
type AdminUpdateUserAttributesRequest = {
  UserPoolId: {}
  Username: {}
  UserAttributes: {}
  ClientMetadata?: {} | undefined
}
type AdminUpdateUserAttributesResponse = { [x: string]: unknown }
type AdminUserGlobalSignOutRequest = { UserPoolId: {}; Username: {} }
type AdminUserGlobalSignOutResponse = { [x: string]: unknown }
type AssociateSoftwareTokenRequest = { AccessToken?: {} | undefined; Session?: {} | undefined }
type AssociateSoftwareTokenResponse = { SecretCode?: {} | undefined; Session?: {} | undefined }
type ChangePasswordRequest = { PreviousPassword: {}; ProposedPassword: {}; AccessToken: {} }
type ChangePasswordResponse = { [x: string]: unknown }
type ConfirmDeviceRequest = {
  AccessToken: {}
  DeviceKey: {}
  DeviceSecretVerifierConfig?:
    | { PasswordVerifier?: {} | undefined; Salt?: {} | undefined }
    | undefined
  DeviceName?: {} | undefined
}
type ConfirmDeviceResponse = { UserConfirmationNecessary?: {} | undefined }
type ConfirmForgotPasswordRequest = {
  ClientId: {}
  SecretHash?: {} | undefined
  Username: {}
  ConfirmationCode: {}
  Password: {}
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  UserContextData?: { IpAddress?: {} | undefined; EncodedData?: {} | undefined } | undefined
  ClientMetadata?: {} | undefined
}
type ConfirmForgotPasswordResponse = { [x: string]: unknown }
type ConfirmSignUpRequest = {
  ClientId: {}
  SecretHash?: {} | undefined
  Username: {}
  ConfirmationCode: {}
  ForceAliasCreation?: {} | undefined
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  UserContextData?: { IpAddress?: {} | undefined; EncodedData?: {} | undefined } | undefined
  ClientMetadata?: {} | undefined
}
type ConfirmSignUpResponse = { [x: string]: unknown }
type CreateGroupRequest = {
  GroupName: {}
  UserPoolId: {}
  Description?: {} | undefined
  RoleArn?: {} | undefined
  Precedence?: {} | undefined
}
type CreateGroupResponse = {
  Group?:
    | {
        GroupName?: {} | undefined
        UserPoolId?: {} | undefined
        Description?: {} | undefined
        RoleArn?: {} | undefined
        Precedence?: {} | undefined
        LastModifiedDate?: {} | undefined
        CreationDate?: {} | undefined
      }
    | undefined
}
type CreateIdentityProviderRequest = {
  UserPoolId: {}
  ProviderName: {}
  ProviderType: {}
  ProviderDetails: {}
  AttributeMapping?: {} | undefined
  IdpIdentifiers?: {} | undefined
}
type CreateIdentityProviderResponse = {
  IdentityProvider: {
    UserPoolId?: {} | undefined
    ProviderName?: {} | undefined
    ProviderType?: {} | undefined
    ProviderDetails?: {} | undefined
    AttributeMapping?: {} | undefined
    IdpIdentifiers?: {} | undefined
    LastModifiedDate?: {} | undefined
    CreationDate?: {} | undefined
  }
}
type CreateResourceServerRequest = {
  UserPoolId: {}
  Identifier: {}
  Name: {}
  Scopes?: {} | undefined
}
type CreateResourceServerResponse = {
  ResourceServer: {
    UserPoolId?: {} | undefined
    Identifier?: {} | undefined
    Name?: {} | undefined
    Scopes?: {} | undefined
  }
}
type CreateUserImportJobRequest = { JobName: {}; UserPoolId: {}; CloudWatchLogsRoleArn: {} }
type CreateUserImportJobResponse = {
  UserImportJob?:
    | {
        JobName?: {} | undefined
        JobId?: {} | undefined
        UserPoolId?: {} | undefined
        PreSignedUrl?: {} | undefined
        CreationDate?: {} | undefined
        StartDate?: {} | undefined
        CompletionDate?: {} | undefined
        Status?: {} | undefined
        CloudWatchLogsRoleArn?: {} | undefined
        ImportedUsers?: {} | undefined
        SkippedUsers?: {} | undefined
        FailedUsers?: {} | undefined
        CompletionMessage?: {} | undefined
      }
    | undefined
}
type CreateUserPoolRequest = {
  PoolName: {}
  Policies?:
    | {
        PasswordPolicy?:
          | {
              MinimumLength?: {} | undefined
              RequireUppercase?: {} | undefined
              RequireLowercase?: {} | undefined
              RequireNumbers?: {} | undefined
              RequireSymbols?: {} | undefined
              TemporaryPasswordValidityDays?: {} | undefined
            }
          | undefined
      }
    | undefined
  DeletionProtection?: {} | undefined
  LambdaConfig?:
    | {
        PreSignUp?: {} | undefined
        CustomMessage?: {} | undefined
        PostConfirmation?: {} | undefined
        PreAuthentication?: {} | undefined
        PostAuthentication?: {} | undefined
        DefineAuthChallenge?: {} | undefined
        CreateAuthChallenge?: {} | undefined
        VerifyAuthChallengeResponse?: {} | undefined
        PreTokenGeneration?: {} | undefined
        UserMigration?: {} | undefined
        CustomSMSSender?: { LambdaVersion: {}; LambdaArn: {} } | undefined
        CustomEmailSender?: { LambdaVersion: {}; LambdaArn: {} } | undefined
        KMSKeyID?: {} | undefined
      }
    | undefined
  AutoVerifiedAttributes?: {} | undefined
  AliasAttributes?: {} | undefined
  UsernameAttributes?: {} | undefined
  SmsVerificationMessage?: {} | undefined
  EmailVerificationMessage?: {} | undefined
  EmailVerificationSubject?: {} | undefined
  VerificationMessageTemplate?:
    | {
        SmsMessage?: {} | undefined
        EmailMessage?: {} | undefined
        EmailSubject?: {} | undefined
        EmailMessageByLink?: {} | undefined
        EmailSubjectByLink?: {} | undefined
        DefaultEmailOption?: {} | undefined
      }
    | undefined
  SmsAuthenticationMessage?: {} | undefined
  MfaConfiguration?: {} | undefined
  UserAttributeUpdateSettings?:
    | { AttributesRequireVerificationBeforeUpdate?: {} | undefined }
    | undefined
  DeviceConfiguration?:
    | {
        ChallengeRequiredOnNewDevice?: {} | undefined
        DeviceOnlyRememberedOnUserPrompt?: {} | undefined
      }
    | undefined
  EmailConfiguration?:
    | {
        SourceArn?: {} | undefined
        ReplyToEmailAddress?: {} | undefined
        EmailSendingAccount?: {} | undefined
        From?: {} | undefined
        ConfigurationSet?: {} | undefined
      }
    | undefined
  SmsConfiguration?:
    | { SnsCallerArn: {}; ExternalId?: {} | undefined; SnsRegion?: {} | undefined }
    | undefined
  UserPoolTags?: {} | undefined
  AdminCreateUserConfig?:
    | {
        AllowAdminCreateUserOnly?: {} | undefined
        UnusedAccountValidityDays?: {} | undefined
        InviteMessageTemplate?:
          | {
              SMSMessage?: {} | undefined
              EmailMessage?: {} | undefined
              EmailSubject?: {} | undefined
            }
          | undefined
      }
    | undefined
  Schema?: {} | undefined
  UserPoolAddOns?: { AdvancedSecurityMode: {} } | undefined
  UsernameConfiguration?: { CaseSensitive: {} } | undefined
  AccountRecoverySetting?: { RecoveryMechanisms?: {} | undefined } | undefined
}
type CreateUserPoolResponse = {
  UserPool?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Policies?:
          | {
              PasswordPolicy?:
                | {
                    MinimumLength?: {} | undefined
                    RequireUppercase?: {} | undefined
                    RequireLowercase?: {} | undefined
                    RequireNumbers?: {} | undefined
                    RequireSymbols?: {} | undefined
                    TemporaryPasswordValidityDays?: {} | undefined
                  }
                | undefined
            }
          | undefined
        DeletionProtection?: {} | undefined
        LambdaConfig?:
          | {
              PreSignUp?: {} | undefined
              CustomMessage?: {} | undefined
              PostConfirmation?: {} | undefined
              PreAuthentication?: {} | undefined
              PostAuthentication?: {} | undefined
              DefineAuthChallenge?: {} | undefined
              CreateAuthChallenge?: {} | undefined
              VerifyAuthChallengeResponse?: {} | undefined
              PreTokenGeneration?: {} | undefined
              UserMigration?: {} | undefined
              CustomSMSSender?: { LambdaVersion: {}; LambdaArn: {} } | undefined
              CustomEmailSender?: { LambdaVersion: {}; LambdaArn: {} } | undefined
              KMSKeyID?: {} | undefined
            }
          | undefined
        Status?: {} | undefined
        LastModifiedDate?: {} | undefined
        CreationDate?: {} | undefined
        SchemaAttributes?: {} | undefined
        AutoVerifiedAttributes?: {} | undefined
        AliasAttributes?: {} | undefined
        UsernameAttributes?: {} | undefined
        SmsVerificationMessage?: {} | undefined
        EmailVerificationMessage?: {} | undefined
        EmailVerificationSubject?: {} | undefined
        VerificationMessageTemplate?:
          | {
              SmsMessage?: {} | undefined
              EmailMessage?: {} | undefined
              EmailSubject?: {} | undefined
              EmailMessageByLink?: {} | undefined
              EmailSubjectByLink?: {} | undefined
              DefaultEmailOption?: {} | undefined
            }
          | undefined
        SmsAuthenticationMessage?: {} | undefined
        UserAttributeUpdateSettings?:
          | { AttributesRequireVerificationBeforeUpdate?: {} | undefined }
          | undefined
        MfaConfiguration?: {} | undefined
        DeviceConfiguration?:
          | {
              ChallengeRequiredOnNewDevice?: {} | undefined
              DeviceOnlyRememberedOnUserPrompt?: {} | undefined
            }
          | undefined
        EstimatedNumberOfUsers?: {} | undefined
        EmailConfiguration?:
          | {
              SourceArn?: {} | undefined
              ReplyToEmailAddress?: {} | undefined
              EmailSendingAccount?: {} | undefined
              From?: {} | undefined
              ConfigurationSet?: {} | undefined
            }
          | undefined
        SmsConfiguration?:
          | { SnsCallerArn: {}; ExternalId?: {} | undefined; SnsRegion?: {} | undefined }
          | undefined
        UserPoolTags?: {} | undefined
        SmsConfigurationFailure?: {} | undefined
        EmailConfigurationFailure?: {} | undefined
        Domain?: {} | undefined
        CustomDomain?: {} | undefined
        AdminCreateUserConfig?:
          | {
              AllowAdminCreateUserOnly?: {} | undefined
              UnusedAccountValidityDays?: {} | undefined
              InviteMessageTemplate?:
                | {
                    SMSMessage?: {} | undefined
                    EmailMessage?: {} | undefined
                    EmailSubject?: {} | undefined
                  }
                | undefined
            }
          | undefined
        UserPoolAddOns?: { AdvancedSecurityMode: {} } | undefined
        UsernameConfiguration?: { CaseSensitive: {} } | undefined
        Arn?: {} | undefined
        AccountRecoverySetting?: { RecoveryMechanisms?: {} | undefined } | undefined
      }
    | undefined
}
type CreateUserPoolClientRequest = {
  UserPoolId: {}
  ClientName: {}
  GenerateSecret?: {} | undefined
  RefreshTokenValidity?: {} | undefined
  AccessTokenValidity?: {} | undefined
  IdTokenValidity?: {} | undefined
  TokenValidityUnits?:
    | { AccessToken?: {} | undefined; IdToken?: {} | undefined; RefreshToken?: {} | undefined }
    | undefined
  ReadAttributes?: {} | undefined
  WriteAttributes?: {} | undefined
  ExplicitAuthFlows?: {} | undefined
  SupportedIdentityProviders?: {} | undefined
  CallbackURLs?: {} | undefined
  LogoutURLs?: {} | undefined
  DefaultRedirectURI?: {} | undefined
  AllowedOAuthFlows?: {} | undefined
  AllowedOAuthScopes?: {} | undefined
  AllowedOAuthFlowsUserPoolClient?: {} | undefined
  AnalyticsConfiguration?:
    | {
        ApplicationId?: {} | undefined
        ApplicationArn?: {} | undefined
        RoleArn?: {} | undefined
        ExternalId?: {} | undefined
        UserDataShared?: {} | undefined
      }
    | undefined
  PreventUserExistenceErrors?: {} | undefined
  EnableTokenRevocation?: {} | undefined
  EnablePropagateAdditionalUserContextData?: {} | undefined
  AuthSessionValidity?: {} | undefined
}
type CreateUserPoolClientResponse = {
  UserPoolClient?:
    | {
        UserPoolId?: {} | undefined
        ClientName?: {} | undefined
        ClientId?: {} | undefined
        ClientSecret?: {} | undefined
        LastModifiedDate?: {} | undefined
        CreationDate?: {} | undefined
        RefreshTokenValidity?: {} | undefined
        AccessTokenValidity?: {} | undefined
        IdTokenValidity?: {} | undefined
        TokenValidityUnits?:
          | {
              AccessToken?: {} | undefined
              IdToken?: {} | undefined
              RefreshToken?: {} | undefined
            }
          | undefined
        ReadAttributes?: {} | undefined
        WriteAttributes?: {} | undefined
        ExplicitAuthFlows?: {} | undefined
        SupportedIdentityProviders?: {} | undefined
        CallbackURLs?: {} | undefined
        LogoutURLs?: {} | undefined
        DefaultRedirectURI?: {} | undefined
        AllowedOAuthFlows?: {} | undefined
        AllowedOAuthScopes?: {} | undefined
        AllowedOAuthFlowsUserPoolClient?: {} | undefined
        AnalyticsConfiguration?:
          | {
              ApplicationId?: {} | undefined
              ApplicationArn?: {} | undefined
              RoleArn?: {} | undefined
              ExternalId?: {} | undefined
              UserDataShared?: {} | undefined
            }
          | undefined
        PreventUserExistenceErrors?: {} | undefined
        EnableTokenRevocation?: {} | undefined
        EnablePropagateAdditionalUserContextData?: {} | undefined
        AuthSessionValidity?: {} | undefined
      }
    | undefined
}
type CreateUserPoolDomainRequest = {
  Domain: {}
  UserPoolId: {}
  CustomDomainConfig?: { CertificateArn: {} } | undefined
}
type CreateUserPoolDomainResponse = { CloudFrontDomain?: {} | undefined }
type DeleteGroupRequest = { GroupName: {}; UserPoolId: {} }
type DeleteIdentityProviderRequest = { UserPoolId: {}; ProviderName: {} }
type DeleteResourceServerRequest = { UserPoolId: {}; Identifier: {} }
type DeleteUserRequest = { AccessToken: {} }
type DeleteUserAttributesRequest = { UserAttributeNames: {}; AccessToken: {} }
type DeleteUserAttributesResponse = { [x: string]: unknown }
type DeleteUserPoolRequest = { UserPoolId: {} }
type DeleteUserPoolClientRequest = { UserPoolId: {}; ClientId: {} }
type DeleteUserPoolDomainRequest = { Domain: {}; UserPoolId: {} }
type DeleteUserPoolDomainResponse = { [x: string]: unknown }
type DescribeIdentityProviderRequest = { UserPoolId: {}; ProviderName: {} }
type DescribeIdentityProviderResponse = {
  IdentityProvider: {
    UserPoolId?: {} | undefined
    ProviderName?: {} | undefined
    ProviderType?: {} | undefined
    ProviderDetails?: {} | undefined
    AttributeMapping?: {} | undefined
    IdpIdentifiers?: {} | undefined
    LastModifiedDate?: {} | undefined
    CreationDate?: {} | undefined
  }
}
type DescribeResourceServerRequest = { UserPoolId: {}; Identifier: {} }
type DescribeResourceServerResponse = {
  ResourceServer: {
    UserPoolId?: {} | undefined
    Identifier?: {} | undefined
    Name?: {} | undefined
    Scopes?: {} | undefined
  }
}
type DescribeRiskConfigurationRequest = { UserPoolId: {}; ClientId?: {} | undefined }
type DescribeRiskConfigurationResponse = {
  RiskConfiguration: {
    UserPoolId?: {} | undefined
    ClientId?: {} | undefined
    CompromisedCredentialsRiskConfiguration?:
      | { EventFilter?: {} | undefined; Actions: { EventAction: {} } }
      | undefined
    AccountTakeoverRiskConfiguration?:
      | {
          NotifyConfiguration?:
            | {
                From?: {} | undefined
                ReplyTo?: {} | undefined
                SourceArn: {}
                BlockEmail?:
                  | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                  | undefined
                NoActionEmail?:
                  | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                  | undefined
                MfaEmail?:
                  | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                  | undefined
              }
            | undefined
          Actions: {
            LowAction?: { Notify: {}; EventAction: {} } | undefined
            MediumAction?: { Notify: {}; EventAction: {} } | undefined
            HighAction?: { Notify: {}; EventAction: {} } | undefined
          }
        }
      | undefined
    RiskExceptionConfiguration?:
      | { BlockedIPRangeList?: {} | undefined; SkippedIPRangeList?: {} | undefined }
      | undefined
    LastModifiedDate?: {} | undefined
  }
}
type DescribeUserImportJobRequest = { UserPoolId: {}; JobId: {} }
type DescribeUserImportJobResponse = {
  UserImportJob?:
    | {
        JobName?: {} | undefined
        JobId?: {} | undefined
        UserPoolId?: {} | undefined
        PreSignedUrl?: {} | undefined
        CreationDate?: {} | undefined
        StartDate?: {} | undefined
        CompletionDate?: {} | undefined
        Status?: {} | undefined
        CloudWatchLogsRoleArn?: {} | undefined
        ImportedUsers?: {} | undefined
        SkippedUsers?: {} | undefined
        FailedUsers?: {} | undefined
        CompletionMessage?: {} | undefined
      }
    | undefined
}
type DescribeUserPoolRequest = { UserPoolId: {} }
type DescribeUserPoolResponse = {
  UserPool?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Policies?:
          | {
              PasswordPolicy?:
                | {
                    MinimumLength?: {} | undefined
                    RequireUppercase?: {} | undefined
                    RequireLowercase?: {} | undefined
                    RequireNumbers?: {} | undefined
                    RequireSymbols?: {} | undefined
                    TemporaryPasswordValidityDays?: {} | undefined
                  }
                | undefined
            }
          | undefined
        DeletionProtection?: {} | undefined
        LambdaConfig?:
          | {
              PreSignUp?: {} | undefined
              CustomMessage?: {} | undefined
              PostConfirmation?: {} | undefined
              PreAuthentication?: {} | undefined
              PostAuthentication?: {} | undefined
              DefineAuthChallenge?: {} | undefined
              CreateAuthChallenge?: {} | undefined
              VerifyAuthChallengeResponse?: {} | undefined
              PreTokenGeneration?: {} | undefined
              UserMigration?: {} | undefined
              CustomSMSSender?: { LambdaVersion: {}; LambdaArn: {} } | undefined
              CustomEmailSender?: { LambdaVersion: {}; LambdaArn: {} } | undefined
              KMSKeyID?: {} | undefined
            }
          | undefined
        Status?: {} | undefined
        LastModifiedDate?: {} | undefined
        CreationDate?: {} | undefined
        SchemaAttributes?: {} | undefined
        AutoVerifiedAttributes?: {} | undefined
        AliasAttributes?: {} | undefined
        UsernameAttributes?: {} | undefined
        SmsVerificationMessage?: {} | undefined
        EmailVerificationMessage?: {} | undefined
        EmailVerificationSubject?: {} | undefined
        VerificationMessageTemplate?:
          | {
              SmsMessage?: {} | undefined
              EmailMessage?: {} | undefined
              EmailSubject?: {} | undefined
              EmailMessageByLink?: {} | undefined
              EmailSubjectByLink?: {} | undefined
              DefaultEmailOption?: {} | undefined
            }
          | undefined
        SmsAuthenticationMessage?: {} | undefined
        UserAttributeUpdateSettings?:
          | { AttributesRequireVerificationBeforeUpdate?: {} | undefined }
          | undefined
        MfaConfiguration?: {} | undefined
        DeviceConfiguration?:
          | {
              ChallengeRequiredOnNewDevice?: {} | undefined
              DeviceOnlyRememberedOnUserPrompt?: {} | undefined
            }
          | undefined
        EstimatedNumberOfUsers?: {} | undefined
        EmailConfiguration?:
          | {
              SourceArn?: {} | undefined
              ReplyToEmailAddress?: {} | undefined
              EmailSendingAccount?: {} | undefined
              From?: {} | undefined
              ConfigurationSet?: {} | undefined
            }
          | undefined
        SmsConfiguration?:
          | { SnsCallerArn: {}; ExternalId?: {} | undefined; SnsRegion?: {} | undefined }
          | undefined
        UserPoolTags?: {} | undefined
        SmsConfigurationFailure?: {} | undefined
        EmailConfigurationFailure?: {} | undefined
        Domain?: {} | undefined
        CustomDomain?: {} | undefined
        AdminCreateUserConfig?:
          | {
              AllowAdminCreateUserOnly?: {} | undefined
              UnusedAccountValidityDays?: {} | undefined
              InviteMessageTemplate?:
                | {
                    SMSMessage?: {} | undefined
                    EmailMessage?: {} | undefined
                    EmailSubject?: {} | undefined
                  }
                | undefined
            }
          | undefined
        UserPoolAddOns?: { AdvancedSecurityMode: {} } | undefined
        UsernameConfiguration?: { CaseSensitive: {} } | undefined
        Arn?: {} | undefined
        AccountRecoverySetting?: { RecoveryMechanisms?: {} | undefined } | undefined
      }
    | undefined
}
type DescribeUserPoolClientRequest = { UserPoolId: {}; ClientId: {} }
type DescribeUserPoolClientResponse = {
  UserPoolClient?:
    | {
        UserPoolId?: {} | undefined
        ClientName?: {} | undefined
        ClientId?: {} | undefined
        ClientSecret?: {} | undefined
        LastModifiedDate?: {} | undefined
        CreationDate?: {} | undefined
        RefreshTokenValidity?: {} | undefined
        AccessTokenValidity?: {} | undefined
        IdTokenValidity?: {} | undefined
        TokenValidityUnits?:
          | {
              AccessToken?: {} | undefined
              IdToken?: {} | undefined
              RefreshToken?: {} | undefined
            }
          | undefined
        ReadAttributes?: {} | undefined
        WriteAttributes?: {} | undefined
        ExplicitAuthFlows?: {} | undefined
        SupportedIdentityProviders?: {} | undefined
        CallbackURLs?: {} | undefined
        LogoutURLs?: {} | undefined
        DefaultRedirectURI?: {} | undefined
        AllowedOAuthFlows?: {} | undefined
        AllowedOAuthScopes?: {} | undefined
        AllowedOAuthFlowsUserPoolClient?: {} | undefined
        AnalyticsConfiguration?:
          | {
              ApplicationId?: {} | undefined
              ApplicationArn?: {} | undefined
              RoleArn?: {} | undefined
              ExternalId?: {} | undefined
              UserDataShared?: {} | undefined
            }
          | undefined
        PreventUserExistenceErrors?: {} | undefined
        EnableTokenRevocation?: {} | undefined
        EnablePropagateAdditionalUserContextData?: {} | undefined
        AuthSessionValidity?: {} | undefined
      }
    | undefined
}
type DescribeUserPoolDomainRequest = { Domain: {} }
type DescribeUserPoolDomainResponse = {
  DomainDescription?:
    | {
        UserPoolId?: {} | undefined
        AWSAccountId?: {} | undefined
        Domain?: {} | undefined
        S3Bucket?: {} | undefined
        CloudFrontDistribution?: {} | undefined
        Version?: {} | undefined
        Status?: {} | undefined
        CustomDomainConfig?: { CertificateArn: {} } | undefined
      }
    | undefined
}
type ForgetDeviceRequest = { AccessToken?: {} | undefined; DeviceKey: {} }
type ForgotPasswordRequest = {
  ClientId: {}
  SecretHash?: {} | undefined
  UserContextData?: { IpAddress?: {} | undefined; EncodedData?: {} | undefined } | undefined
  Username: {}
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  ClientMetadata?: {} | undefined
}
type ForgotPasswordResponse = {
  CodeDeliveryDetails?:
    | {
        Destination?: {} | undefined
        DeliveryMedium?: {} | undefined
        AttributeName?: {} | undefined
      }
    | undefined
}
type GetCSVHeaderRequest = { UserPoolId: {} }
type GetCSVHeaderResponse = { UserPoolId?: {} | undefined; CSVHeader?: {} | undefined }
type GetDeviceRequest = { DeviceKey: {}; AccessToken?: {} | undefined }
type GetDeviceResponse = {
  Device: {
    DeviceKey?: {} | undefined
    DeviceAttributes?: {} | undefined
    DeviceCreateDate?: {} | undefined
    DeviceLastModifiedDate?: {} | undefined
    DeviceLastAuthenticatedDate?: {} | undefined
  }
}
type GetGroupRequest = { GroupName: {}; UserPoolId: {} }
type GetGroupResponse = {
  Group?:
    | {
        GroupName?: {} | undefined
        UserPoolId?: {} | undefined
        Description?: {} | undefined
        RoleArn?: {} | undefined
        Precedence?: {} | undefined
        LastModifiedDate?: {} | undefined
        CreationDate?: {} | undefined
      }
    | undefined
}
type GetIdentityProviderByIdentifierRequest = { UserPoolId: {}; IdpIdentifier: {} }
type GetIdentityProviderByIdentifierResponse = {
  IdentityProvider: {
    UserPoolId?: {} | undefined
    ProviderName?: {} | undefined
    ProviderType?: {} | undefined
    ProviderDetails?: {} | undefined
    AttributeMapping?: {} | undefined
    IdpIdentifiers?: {} | undefined
    LastModifiedDate?: {} | undefined
    CreationDate?: {} | undefined
  }
}
type GetLogDeliveryConfigurationRequest = { UserPoolId: {} }
type GetLogDeliveryConfigurationResponse = {
  LogDeliveryConfiguration?: { UserPoolId: {}; LogConfigurations: {} } | undefined
}
type GetSigningCertificateRequest = { UserPoolId: {} }
type GetSigningCertificateResponse = { Certificate?: {} | undefined }
type GetUICustomizationRequest = { UserPoolId: {}; ClientId?: {} | undefined }
type GetUICustomizationResponse = {
  UICustomization: {
    UserPoolId?: {} | undefined
    ClientId?: {} | undefined
    ImageUrl?: {} | undefined
    CSS?: {} | undefined
    CSSVersion?: {} | undefined
    LastModifiedDate?: {} | undefined
    CreationDate?: {} | undefined
  }
}
type GetUserRequest = { AccessToken: {} }
type GetUserResponse = {
  Username: {}
  UserAttributes: {}
  MFAOptions?: {} | undefined
  PreferredMfaSetting?: {} | undefined
  UserMFASettingList?: {} | undefined
}
type GetUserAttributeVerificationCodeRequest = {
  AccessToken: {}
  AttributeName: {}
  ClientMetadata?: {} | undefined
}
type GetUserAttributeVerificationCodeResponse = {
  CodeDeliveryDetails?:
    | {
        Destination?: {} | undefined
        DeliveryMedium?: {} | undefined
        AttributeName?: {} | undefined
      }
    | undefined
}
type GetUserPoolMfaConfigRequest = { UserPoolId: {} }
type GetUserPoolMfaConfigResponse = {
  SmsMfaConfiguration?:
    | {
        SmsAuthenticationMessage?: {} | undefined
        SmsConfiguration?:
          | { SnsCallerArn: {}; ExternalId?: {} | undefined; SnsRegion?: {} | undefined }
          | undefined
      }
    | undefined
  SoftwareTokenMfaConfiguration?: { Enabled?: {} | undefined } | undefined
  MfaConfiguration?: {} | undefined
}
type GlobalSignOutRequest = { AccessToken: {} }
type GlobalSignOutResponse = { [x: string]: unknown }
type InitiateAuthRequest = {
  AuthFlow: {}
  AuthParameters?: {} | undefined
  ClientMetadata?: {} | undefined
  ClientId: {}
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  UserContextData?: { IpAddress?: {} | undefined; EncodedData?: {} | undefined } | undefined
}
type InitiateAuthResponse = {
  ChallengeName?: {} | undefined
  Session?: {} | undefined
  ChallengeParameters?: {} | undefined
  AuthenticationResult?:
    | {
        AccessToken?: {} | undefined
        ExpiresIn?: {} | undefined
        TokenType?: {} | undefined
        RefreshToken?: {} | undefined
        IdToken?: {} | undefined
        NewDeviceMetadata?:
          | { DeviceKey?: {} | undefined; DeviceGroupKey?: {} | undefined }
          | undefined
      }
    | undefined
}
type ListDevicesRequest = {
  AccessToken: {}
  Limit?: {} | undefined
  PaginationToken?: {} | undefined
}
type ListDevicesResponse = { Devices?: {} | undefined; PaginationToken?: {} | undefined }
type ListGroupsRequest = { UserPoolId: {}; Limit?: {} | undefined; NextToken?: {} | undefined }
type ListGroupsResponse = { Groups?: {} | undefined; NextToken?: {} | undefined }
type ListIdentityProvidersRequest = {
  UserPoolId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListIdentityProvidersResponse = { Providers: {}; NextToken?: {} | undefined }
type ListResourceServersRequest = {
  UserPoolId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListResourceServersResponse = { ResourceServers: {}; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListUserImportJobsRequest = {
  UserPoolId: {}
  MaxResults: {}
  PaginationToken?: {} | undefined
}
type ListUserImportJobsResponse = {
  UserImportJobs?: {} | undefined
  PaginationToken?: {} | undefined
}
type ListUserPoolClientsRequest = {
  UserPoolId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListUserPoolClientsResponse = { UserPoolClients?: {} | undefined; NextToken?: {} | undefined }
type ListUserPoolsRequest = { NextToken?: {} | undefined; MaxResults: {} }
type ListUserPoolsResponse = { UserPools?: {} | undefined; NextToken?: {} | undefined }
type ListUsersRequest = {
  UserPoolId: {}
  AttributesToGet?: {} | undefined
  Limit?: {} | undefined
  PaginationToken?: {} | undefined
  Filter?: {} | undefined
}
type ListUsersResponse = { Users?: {} | undefined; PaginationToken?: {} | undefined }
type ListUsersInGroupRequest = {
  UserPoolId: {}
  GroupName: {}
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListUsersInGroupResponse = { Users?: {} | undefined; NextToken?: {} | undefined }
type ResendConfirmationCodeRequest = {
  ClientId: {}
  SecretHash?: {} | undefined
  UserContextData?: { IpAddress?: {} | undefined; EncodedData?: {} | undefined } | undefined
  Username: {}
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  ClientMetadata?: {} | undefined
}
type ResendConfirmationCodeResponse = {
  CodeDeliveryDetails?:
    | {
        Destination?: {} | undefined
        DeliveryMedium?: {} | undefined
        AttributeName?: {} | undefined
      }
    | undefined
}
type RespondToAuthChallengeRequest = {
  ClientId: {}
  ChallengeName: {}
  Session?: {} | undefined
  ChallengeResponses?: {} | undefined
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  UserContextData?: { IpAddress?: {} | undefined; EncodedData?: {} | undefined } | undefined
  ClientMetadata?: {} | undefined
}
type RespondToAuthChallengeResponse = {
  ChallengeName?: {} | undefined
  Session?: {} | undefined
  ChallengeParameters?: {} | undefined
  AuthenticationResult?:
    | {
        AccessToken?: {} | undefined
        ExpiresIn?: {} | undefined
        TokenType?: {} | undefined
        RefreshToken?: {} | undefined
        IdToken?: {} | undefined
        NewDeviceMetadata?:
          | { DeviceKey?: {} | undefined; DeviceGroupKey?: {} | undefined }
          | undefined
      }
    | undefined
}
type ForbiddenException = { [x: string]: unknown }
type RevokeTokenRequest = { Token: {}; ClientId: {}; ClientSecret?: {} | undefined }
type RevokeTokenResponse = { [x: string]: unknown }
type SetLogDeliveryConfigurationRequest = { UserPoolId: {}; LogConfigurations: {} }
type SetLogDeliveryConfigurationResponse = {
  LogDeliveryConfiguration?: { UserPoolId: {}; LogConfigurations: {} } | undefined
}
type SetRiskConfigurationRequest = {
  UserPoolId: {}
  ClientId?: {} | undefined
  CompromisedCredentialsRiskConfiguration?:
    | { EventFilter?: {} | undefined; Actions: { EventAction: {} } }
    | undefined
  AccountTakeoverRiskConfiguration?:
    | {
        NotifyConfiguration?:
          | {
              From?: {} | undefined
              ReplyTo?: {} | undefined
              SourceArn: {}
              BlockEmail?:
                | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                | undefined
              NoActionEmail?:
                | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                | undefined
              MfaEmail?:
                | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                | undefined
            }
          | undefined
        Actions: {
          LowAction?: { Notify: {}; EventAction: {} } | undefined
          MediumAction?: { Notify: {}; EventAction: {} } | undefined
          HighAction?: { Notify: {}; EventAction: {} } | undefined
        }
      }
    | undefined
  RiskExceptionConfiguration?:
    | { BlockedIPRangeList?: {} | undefined; SkippedIPRangeList?: {} | undefined }
    | undefined
}
type SetRiskConfigurationResponse = {
  RiskConfiguration: {
    UserPoolId?: {} | undefined
    ClientId?: {} | undefined
    CompromisedCredentialsRiskConfiguration?:
      | { EventFilter?: {} | undefined; Actions: { EventAction: {} } }
      | undefined
    AccountTakeoverRiskConfiguration?:
      | {
          NotifyConfiguration?:
            | {
                From?: {} | undefined
                ReplyTo?: {} | undefined
                SourceArn: {}
                BlockEmail?:
                  | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                  | undefined
                NoActionEmail?:
                  | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                  | undefined
                MfaEmail?:
                  | { Subject: {}; HtmlBody?: {} | undefined; TextBody?: {} | undefined }
                  | undefined
              }
            | undefined
          Actions: {
            LowAction?: { Notify: {}; EventAction: {} } | undefined
            MediumAction?: { Notify: {}; EventAction: {} } | undefined
            HighAction?: { Notify: {}; EventAction: {} } | undefined
          }
        }
      | undefined
    RiskExceptionConfiguration?:
      | { BlockedIPRangeList?: {} | undefined; SkippedIPRangeList?: {} | undefined }
      | undefined
    LastModifiedDate?: {} | undefined
  }
}
type SetUICustomizationRequest = {
  UserPoolId: {}
  ClientId?: {} | undefined
  CSS?: {} | undefined
  ImageFile?: {} | undefined
}
type SetUICustomizationResponse = {
  UICustomization: {
    UserPoolId?: {} | undefined
    ClientId?: {} | undefined
    ImageUrl?: {} | undefined
    CSS?: {} | undefined
    CSSVersion?: {} | undefined
    LastModifiedDate?: {} | undefined
    CreationDate?: {} | undefined
  }
}
type SetUserMFAPreferenceRequest = {
  SMSMfaSettings?: { Enabled?: {} | undefined; PreferredMfa?: {} | undefined } | undefined
  SoftwareTokenMfaSettings?: { Enabled?: {} | undefined; PreferredMfa?: {} | undefined } | undefined
  AccessToken: {}
}
type SetUserMFAPreferenceResponse = { [x: string]: unknown }
type SetUserPoolMfaConfigRequest = {
  UserPoolId: {}
  SmsMfaConfiguration?:
    | {
        SmsAuthenticationMessage?: {} | undefined
        SmsConfiguration?:
          | { SnsCallerArn: {}; ExternalId?: {} | undefined; SnsRegion?: {} | undefined }
          | undefined
      }
    | undefined
  SoftwareTokenMfaConfiguration?: { Enabled?: {} | undefined } | undefined
  MfaConfiguration?: {} | undefined
}
type SetUserPoolMfaConfigResponse = {
  SmsMfaConfiguration?:
    | {
        SmsAuthenticationMessage?: {} | undefined
        SmsConfiguration?:
          | { SnsCallerArn: {}; ExternalId?: {} | undefined; SnsRegion?: {} | undefined }
          | undefined
      }
    | undefined
  SoftwareTokenMfaConfiguration?: { Enabled?: {} | undefined } | undefined
  MfaConfiguration?: {} | undefined
}
type SetUserSettingsRequest = { AccessToken: {}; MFAOptions: {} }
type SetUserSettingsResponse = { [x: string]: unknown }
type SignUpRequest = {
  ClientId: {}
  SecretHash?: {} | undefined
  Username: {}
  Password: {}
  UserAttributes?: {} | undefined
  ValidationData?: {} | undefined
  AnalyticsMetadata?: { AnalyticsEndpointId?: {} | undefined } | undefined
  UserContextData?: { IpAddress?: {} | undefined; EncodedData?: {} | undefined } | undefined
  ClientMetadata?: {} | undefined
}
type SignUpResponse = {
  UserConfirmed: {}
  CodeDeliveryDetails?:
    | {
        Destination?: {} | undefined
        DeliveryMedium?: {} | undefined
        AttributeName?: {} | undefined
      }
    | undefined
  UserSub: {}
}
type StartUserImportJobRequest = { UserPoolId: {}; JobId: {} }
type StartUserImportJobResponse = {
  UserImportJob?:
    | {
        JobName?: {} | undefined
        JobId?: {} | undefined
        UserPoolId?: {} | undefined
        PreSignedUrl?: {} | undefined
        CreationDate?: {} | undefined
        StartDate?: {} | undefined
        CompletionDate?: {} | undefined
        Status?: {} | undefined
        CloudWatchLogsRoleArn?: {} | undefined
        ImportedUsers?: {} | undefined
        SkippedUsers?: {} | undefined
        FailedUsers?: {} | undefined
        CompletionMessage?: {} | undefined
      }
    | undefined
}
type StopUserImportJobRequest = { UserPoolId: {}; JobId: {} }
type StopUserImportJobResponse = {
  UserImportJob?:
    | {
        JobName?: {} | undefined
        JobId?: {} | undefined
        UserPoolId?: {} | undefined
        PreSignedUrl?: {} | undefined
        CreationDate?: {} | undefined
        StartDate?: {} | undefined
        CompletionDate?: {} | undefined
        Status?: {} | undefined
        CloudWatchLogsRoleArn?: {} | undefined
        ImportedUsers?: {} | undefined
        SkippedUsers?: {} | undefined
        FailedUsers?: {} | undefined
        CompletionMessage?: {} | undefined
      }
    | undefined
}
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAuthEventFeedbackRequest = {
  UserPoolId: {}
  Username: {}
  EventId: {}
  FeedbackToken: {}
  FeedbackValue: {}
}
type UpdateAuthEventFeedbackResponse = { [x: string]: unknown }
type UpdateDeviceStatusRequest = {
  AccessToken: {}
  DeviceKey: {}
  DeviceRememberedStatus?: {} | undefined
}
type UpdateDeviceStatusResponse = { [x: string]: unknown }
type UpdateGroupRequest = {
  GroupName: {}
  UserPoolId: {}
  Description?: {} | undefined
  RoleArn?: {} | undefined
  Precedence?: {} | undefined
}
type UpdateGroupResponse = {
  Group?:
    | {
        GroupName?: {} | undefined
        UserPoolId?: {} | undefined
        Description?: {} | undefined
        RoleArn?: {} | undefined
        Precedence?: {} | undefined
        LastModifiedDate?: {} | undefined
        CreationDate?: {} | undefined
      }
    | undefined
}
type UpdateIdentityProviderRequest = {
  UserPoolId: {}
  ProviderName: {}
  ProviderDetails?: {} | undefined
  AttributeMapping?: {} | undefined
  IdpIdentifiers?: {} | undefined
}
type UpdateIdentityProviderResponse = {
  IdentityProvider: {
    UserPoolId?: {} | undefined
    ProviderName?: {} | undefined
    ProviderType?: {} | undefined
    ProviderDetails?: {} | undefined
    AttributeMapping?: {} | undefined
    IdpIdentifiers?: {} | undefined
    LastModifiedDate?: {} | undefined
    CreationDate?: {} | undefined
  }
}
type UpdateResourceServerRequest = {
  UserPoolId: {}
  Identifier: {}
  Name: {}
  Scopes?: {} | undefined
}
type UpdateResourceServerResponse = {
  ResourceServer: {
    UserPoolId?: {} | undefined
    Identifier?: {} | undefined
    Name?: {} | undefined
    Scopes?: {} | undefined
  }
}
type UpdateUserAttributesRequest = {
  UserAttributes: {}
  AccessToken: {}
  ClientMetadata?: {} | undefined
}
type UpdateUserAttributesResponse = { CodeDeliveryDetailsList?: {} | undefined }
type UpdateUserPoolRequest = {
  UserPoolId: {}
  Policies?:
    | {
        PasswordPolicy?:
          | {
              MinimumLength?: {} | undefined
              RequireUppercase?: {} | undefined
              RequireLowercase?: {} | undefined
              RequireNumbers?: {} | undefined
              RequireSymbols?: {} | undefined
              TemporaryPasswordValidityDays?: {} | undefined
            }
          | undefined
      }
    | undefined
  DeletionProtection?: {} | undefined
  LambdaConfig?:
    | {
        PreSignUp?: {} | undefined
        CustomMessage?: {} | undefined
        PostConfirmation?: {} | undefined
        PreAuthentication?: {} | undefined
        PostAuthentication?: {} | undefined
        DefineAuthChallenge?: {} | undefined
        CreateAuthChallenge?: {} | undefined
        VerifyAuthChallengeResponse?: {} | undefined
        PreTokenGeneration?: {} | undefined
        UserMigration?: {} | undefined
        CustomSMSSender?: { LambdaVersion: {}; LambdaArn: {} } | undefined
        CustomEmailSender?: { LambdaVersion: {}; LambdaArn: {} } | undefined
        KMSKeyID?: {} | undefined
      }
    | undefined
  AutoVerifiedAttributes?: {} | undefined
  SmsVerificationMessage?: {} | undefined
  EmailVerificationMessage?: {} | undefined
  EmailVerificationSubject?: {} | undefined
  VerificationMessageTemplate?:
    | {
        SmsMessage?: {} | undefined
        EmailMessage?: {} | undefined
        EmailSubject?: {} | undefined
        EmailMessageByLink?: {} | undefined
        EmailSubjectByLink?: {} | undefined
        DefaultEmailOption?: {} | undefined
      }
    | undefined
  SmsAuthenticationMessage?: {} | undefined
  UserAttributeUpdateSettings?:
    | { AttributesRequireVerificationBeforeUpdate?: {} | undefined }
    | undefined
  MfaConfiguration?: {} | undefined
  DeviceConfiguration?:
    | {
        ChallengeRequiredOnNewDevice?: {} | undefined
        DeviceOnlyRememberedOnUserPrompt?: {} | undefined
      }
    | undefined
  EmailConfiguration?:
    | {
        SourceArn?: {} | undefined
        ReplyToEmailAddress?: {} | undefined
        EmailSendingAccount?: {} | undefined
        From?: {} | undefined
        ConfigurationSet?: {} | undefined
      }
    | undefined
  SmsConfiguration?:
    | { SnsCallerArn: {}; ExternalId?: {} | undefined; SnsRegion?: {} | undefined }
    | undefined
  UserPoolTags?: {} | undefined
  AdminCreateUserConfig?:
    | {
        AllowAdminCreateUserOnly?: {} | undefined
        UnusedAccountValidityDays?: {} | undefined
        InviteMessageTemplate?:
          | {
              SMSMessage?: {} | undefined
              EmailMessage?: {} | undefined
              EmailSubject?: {} | undefined
            }
          | undefined
      }
    | undefined
  UserPoolAddOns?: { AdvancedSecurityMode: {} } | undefined
  AccountRecoverySetting?: { RecoveryMechanisms?: {} | undefined } | undefined
}
type UpdateUserPoolResponse = { [x: string]: unknown }
type UpdateUserPoolClientRequest = {
  UserPoolId: {}
  ClientId: {}
  ClientName?: {} | undefined
  RefreshTokenValidity?: {} | undefined
  AccessTokenValidity?: {} | undefined
  IdTokenValidity?: {} | undefined
  TokenValidityUnits?:
    | { AccessToken?: {} | undefined; IdToken?: {} | undefined; RefreshToken?: {} | undefined }
    | undefined
  ReadAttributes?: {} | undefined
  WriteAttributes?: {} | undefined
  ExplicitAuthFlows?: {} | undefined
  SupportedIdentityProviders?: {} | undefined
  CallbackURLs?: {} | undefined
  LogoutURLs?: {} | undefined
  DefaultRedirectURI?: {} | undefined
  AllowedOAuthFlows?: {} | undefined
  AllowedOAuthScopes?: {} | undefined
  AllowedOAuthFlowsUserPoolClient?: {} | undefined
  AnalyticsConfiguration?:
    | {
        ApplicationId?: {} | undefined
        ApplicationArn?: {} | undefined
        RoleArn?: {} | undefined
        ExternalId?: {} | undefined
        UserDataShared?: {} | undefined
      }
    | undefined
  PreventUserExistenceErrors?: {} | undefined
  EnableTokenRevocation?: {} | undefined
  EnablePropagateAdditionalUserContextData?: {} | undefined
  AuthSessionValidity?: {} | undefined
}
type UpdateUserPoolClientResponse = {
  UserPoolClient?:
    | {
        UserPoolId?: {} | undefined
        ClientName?: {} | undefined
        ClientId?: {} | undefined
        ClientSecret?: {} | undefined
        LastModifiedDate?: {} | undefined
        CreationDate?: {} | undefined
        RefreshTokenValidity?: {} | undefined
        AccessTokenValidity?: {} | undefined
        IdTokenValidity?: {} | undefined
        TokenValidityUnits?:
          | {
              AccessToken?: {} | undefined
              IdToken?: {} | undefined
              RefreshToken?: {} | undefined
            }
          | undefined
        ReadAttributes?: {} | undefined
        WriteAttributes?: {} | undefined
        ExplicitAuthFlows?: {} | undefined
        SupportedIdentityProviders?: {} | undefined
        CallbackURLs?: {} | undefined
        LogoutURLs?: {} | undefined
        DefaultRedirectURI?: {} | undefined
        AllowedOAuthFlows?: {} | undefined
        AllowedOAuthScopes?: {} | undefined
        AllowedOAuthFlowsUserPoolClient?: {} | undefined
        AnalyticsConfiguration?:
          | {
              ApplicationId?: {} | undefined
              ApplicationArn?: {} | undefined
              RoleArn?: {} | undefined
              ExternalId?: {} | undefined
              UserDataShared?: {} | undefined
            }
          | undefined
        PreventUserExistenceErrors?: {} | undefined
        EnableTokenRevocation?: {} | undefined
        EnablePropagateAdditionalUserContextData?: {} | undefined
        AuthSessionValidity?: {} | undefined
      }
    | undefined
}
type UpdateUserPoolDomainRequest = {
  Domain: {}
  UserPoolId: {}
  CustomDomainConfig: { CertificateArn: {} }
}
type UpdateUserPoolDomainResponse = { CloudFrontDomain?: {} | undefined }
type VerifySoftwareTokenRequest = {
  AccessToken?: {} | undefined
  Session?: {} | undefined
  UserCode: {}
  FriendlyDeviceName?: {} | undefined
}
type VerifySoftwareTokenResponse = { Status?: {} | undefined; Session?: {} | undefined }
type VerifyUserAttributeRequest = { AccessToken: {}; AttributeName: {}; Code: {} }
type VerifyUserAttributeResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AddCustomAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddCustomAttributesRequest }
        output: AddCustomAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminAddUserToGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminAddUserToGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminConfirmSignUp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminConfirmSignUpRequest }
        output: AdminConfirmSignUpResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminCreateUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminCreateUserRequest }
        output: AdminCreateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminDeleteUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminDeleteUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminDeleteUserAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminDeleteUserAttributesRequest }
        output: AdminDeleteUserAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminDisableProviderForUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminDisableProviderForUserRequest }
        output: AdminDisableProviderForUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminDisableUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminDisableUserRequest }
        output: AdminDisableUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminEnableUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminEnableUserRequest }
        output: AdminEnableUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminForgetDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminForgetDeviceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminGetDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminGetDeviceRequest }
        output: AdminGetDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminGetUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminGetUserRequest }
        output: AdminGetUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminInitiateAuth'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminInitiateAuthRequest }
        output: AdminInitiateAuthResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminLinkProviderForUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminLinkProviderForUserRequest }
        output: AdminLinkProviderForUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminListDevices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminListDevicesRequest }
        output: AdminListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminListGroupsForUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminListGroupsForUserRequest }
        output: AdminListGroupsForUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminListUserAuthEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminListUserAuthEventsRequest }
        output: AdminListUserAuthEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminRemoveUserFromGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminResetUserPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminResetUserPasswordRequest }
        output: AdminResetUserPasswordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminRespondToAuthChallengeRequest }
        output: AdminRespondToAuthChallengeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminSetUserMFAPreference'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminSetUserMFAPreferenceRequest }
        output: AdminSetUserMFAPreferenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminSetUserPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminSetUserPasswordRequest }
        output: AdminSetUserPasswordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminSetUserSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminSetUserSettingsRequest }
        output: AdminSetUserSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminUpdateAuthEventFeedbackRequest }
        output: AdminUpdateAuthEventFeedbackResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminUpdateDeviceStatusRequest }
        output: AdminUpdateDeviceStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminUpdateUserAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminUpdateUserAttributesRequest }
        output: AdminUpdateUserAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AdminUserGlobalSignOut'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdminUserGlobalSignOutRequest }
        output: AdminUserGlobalSignOutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.AssociateSoftwareToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateSoftwareTokenRequest }
        output: AssociateSoftwareTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ChangePassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ChangePasswordRequest }
        output: ChangePasswordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ConfirmDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ConfirmDeviceRequest }
        output: ConfirmDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ConfirmForgotPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ConfirmForgotPasswordRequest }
        output: ConfirmForgotPasswordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ConfirmSignUp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ConfirmSignUpRequest }
        output: ConfirmSignUpResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.CreateGroup'
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
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.CreateIdentityProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateIdentityProviderRequest }
        output: CreateIdentityProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.CreateResourceServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateResourceServerRequest }
        output: CreateResourceServerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.CreateUserImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserImportJobRequest }
        output: CreateUserImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.CreateUserPool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserPoolRequest }
        output: CreateUserPoolResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.CreateUserPoolClient'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserPoolClientRequest }
        output: CreateUserPoolClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.CreateUserPoolDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserPoolDomainRequest }
        output: CreateUserPoolDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DeleteGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DeleteIdentityProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteIdentityProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DeleteResourceServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourceServerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DeleteUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DeleteUserAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserAttributesRequest }
        output: DeleteUserAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DeleteUserPool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserPoolRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DeleteUserPoolClient'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserPoolClientRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DeleteUserPoolDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserPoolDomainRequest }
        output: DeleteUserPoolDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DescribeIdentityProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeIdentityProviderRequest }
        output: DescribeIdentityProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DescribeResourceServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeResourceServerRequest }
        output: DescribeResourceServerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DescribeRiskConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRiskConfigurationRequest }
        output: DescribeRiskConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DescribeUserImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUserImportJobRequest }
        output: DescribeUserImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DescribeUserPool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUserPoolRequest }
        output: DescribeUserPoolResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DescribeUserPoolClient'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUserPoolClientRequest }
        output: DescribeUserPoolClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.DescribeUserPoolDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUserPoolDomainRequest }
        output: DescribeUserPoolDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ForgetDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ForgetDeviceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ForgotPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ForgotPasswordRequest }
        output: ForgotPasswordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetCSVHeader'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCSVHeaderRequest }
        output: GetCSVHeaderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetDevice'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDeviceRequest }
        output: GetDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetGroupRequest }
        output: GetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetIdentityProviderByIdentifierRequest }
        output: GetIdentityProviderByIdentifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLogDeliveryConfigurationRequest }
        output: GetLogDeliveryConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetSigningCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSigningCertificateRequest }
        output: GetSigningCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetUICustomization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUICustomizationRequest }
        output: GetUICustomizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUserRequest }
        output: GetUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUserAttributeVerificationCodeRequest }
        output: GetUserAttributeVerificationCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetUserPoolMfaConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUserPoolMfaConfigRequest }
        output: GetUserPoolMfaConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.GlobalSignOut'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GlobalSignOutRequest }
        output: GlobalSignOutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: InitiateAuthRequest }
        output: InitiateAuthResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListDevices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDevicesRequest }
        output: ListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListGroups'
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
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListIdentityProviders'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListIdentityProvidersRequest }
        output: ListIdentityProvidersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListResourceServers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourceServersRequest }
        output: ListResourceServersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListUserImportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUserImportJobsRequest }
        output: ListUserImportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListUserPoolClients'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUserPoolClientsRequest }
        output: ListUserPoolClientsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListUserPools'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUserPoolsRequest }
        output: ListUserPoolsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers': {
      $post: {
        input: { query: { Limit?: string | undefined; PaginationToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListUsers'
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
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ListUsersInGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUsersInGroupRequest }
        output: ListUsersInGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.ResendConfirmationCode'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResendConfirmationCodeRequest }
        output: ResendConfirmationCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSCognitoIdentityProviderService.RespondToAuthChallenge'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RespondToAuthChallengeRequest }
            output: RespondToAuthChallengeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSCognitoIdentityProviderService.RespondToAuthChallenge'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RespondToAuthChallengeRequest }
            output: ForbiddenException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.RevokeToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeTokenRequest }
        output: RevokeTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetLogDeliveryConfigurationRequest }
        output: SetLogDeliveryConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.SetRiskConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetRiskConfigurationRequest }
        output: SetRiskConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.SetUICustomization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetUICustomizationRequest }
        output: SetUICustomizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.SetUserMFAPreference'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetUserMFAPreferenceRequest }
        output: SetUserMFAPreferenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.SetUserPoolMfaConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetUserPoolMfaConfigRequest }
        output: SetUserPoolMfaConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.SetUserSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetUserSettingsRequest }
        output: SetUserSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.SignUp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SignUpRequest }
        output: SignUpResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.StartUserImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartUserImportJobRequest }
        output: StartUserImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.StopUserImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopUserImportJobRequest }
        output: StopUserImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateAuthEventFeedback'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAuthEventFeedbackRequest }
        output: UpdateAuthEventFeedbackResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateDeviceStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDeviceStatusRequest }
        output: UpdateDeviceStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateGroup'
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
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateIdentityProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateIdentityProviderRequest }
        output: UpdateIdentityProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateResourceServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateResourceServerRequest }
        output: UpdateResourceServerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateUserAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateUserAttributesRequest }
        output: UpdateUserAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateUserPool'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateUserPoolRequest }
        output: UpdateUserPoolResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateUserPoolClient'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateUserPoolClientRequest }
        output: UpdateUserPoolClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.UpdateUserPoolDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateUserPoolDomainRequest }
        output: UpdateUserPoolDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.VerifySoftwareToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifySoftwareTokenRequest }
        output: VerifySoftwareTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSCognitoIdentityProviderService.VerifyUserAttribute'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifyUserAttributeRequest }
        output: VerifyUserAttributeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
