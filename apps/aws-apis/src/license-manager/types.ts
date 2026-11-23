type AcceptGrantRequest = { GrantArn: {} }
type AcceptGrantResponse = {
  GrantArn?: {} | undefined
  Status?: {} | undefined
  Version?: {} | undefined
}
type CheckInLicenseRequest = { LicenseConsumptionToken: {}; Beneficiary?: {} | undefined }
type CheckInLicenseResponse = { [x: string]: unknown }
type CheckoutBorrowLicenseRequest = {
  LicenseArn: {}
  Entitlements: {}
  DigitalSignatureMethod: {}
  NodeId?: {} | undefined
  CheckoutMetadata?: {} | undefined
  ClientToken: {}
}
type CheckoutBorrowLicenseResponse = {
  LicenseArn?: {} | undefined
  LicenseConsumptionToken?: {} | undefined
  EntitlementsAllowed?: {} | undefined
  NodeId?: {} | undefined
  SignedToken?: {} | undefined
  IssuedAt?: {} | undefined
  Expiration?: {} | undefined
  CheckoutMetadata?: {} | undefined
}
type CheckoutLicenseRequest = {
  ProductSKU: {}
  CheckoutType: {}
  KeyFingerprint: {}
  Entitlements: {}
  ClientToken: {}
  Beneficiary?: {} | undefined
  NodeId?: {} | undefined
}
type CheckoutLicenseResponse = {
  CheckoutType?: {} | undefined
  LicenseConsumptionToken?: {} | undefined
  EntitlementsAllowed?: {} | undefined
  SignedToken?: {} | undefined
  NodeId?: {} | undefined
  IssuedAt?: {} | undefined
  Expiration?: {} | undefined
  LicenseArn?: {} | undefined
}
type CreateGrantRequest = {
  ClientToken: {}
  GrantName: {}
  LicenseArn: {}
  Principals: {}
  HomeRegion: {}
  AllowedOperations: {}
}
type CreateGrantResponse = {
  GrantArn?: {} | undefined
  Status?: {} | undefined
  Version?: {} | undefined
}
type CreateGrantVersionRequest = {
  ClientToken: {}
  GrantArn: {}
  GrantName?: {} | undefined
  AllowedOperations?: {} | undefined
  Status?: {} | undefined
  StatusReason?: {} | undefined
  SourceVersion?: {} | undefined
  Options?: { ActivationOverrideBehavior?: {} | undefined } | undefined
}
type CreateGrantVersionResponse = {
  GrantArn?: {} | undefined
  Status?: {} | undefined
  Version?: {} | undefined
}
type CreateLicenseRequest = {
  LicenseName: {}
  ProductName: {}
  ProductSKU: {}
  Issuer: { Name: {}; SignKey?: {} | undefined }
  HomeRegion: {}
  Validity: { Begin: {}; End?: {} | undefined }
  Entitlements: {}
  Beneficiary: {}
  ConsumptionConfiguration: {
    RenewType?: {} | undefined
    ProvisionalConfiguration?: { MaxTimeToLiveInMinutes: {} } | undefined
    BorrowConfiguration?: { AllowEarlyCheckIn: {}; MaxTimeToLiveInMinutes: {} } | undefined
  }
  LicenseMetadata?: {} | undefined
  ClientToken: {}
}
type CreateLicenseResponse = {
  LicenseArn?: {} | undefined
  Status?: {} | undefined
  Version?: {} | undefined
}
type CreateLicenseConfigurationRequest = {
  Name: {}
  Description?: {} | undefined
  LicenseCountingType: {}
  LicenseCount?: {} | undefined
  LicenseCountHardLimit?: {} | undefined
  LicenseRules?: {} | undefined
  Tags?: {} | undefined
  DisassociateWhenNotFound?: {} | undefined
  ProductInformationList?: {} | undefined
}
type CreateLicenseConfigurationResponse = { LicenseConfigurationArn?: {} | undefined }
type CreateLicenseConversionTaskForResourceRequest = {
  ResourceArn: {}
  SourceLicenseContext: { UsageOperation?: {} | undefined }
  DestinationLicenseContext: { UsageOperation?: {} | undefined }
}
type CreateLicenseConversionTaskForResourceResponse = { LicenseConversionTaskId?: {} | undefined }
type CreateLicenseManagerReportGeneratorRequest = {
  ReportGeneratorName: {}
  Type: {}
  ReportContext: { licenseConfigurationArns: {} }
  ReportFrequency: { value?: {} | undefined; period?: {} | undefined }
  ClientToken: {}
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreateLicenseManagerReportGeneratorResponse = {
  LicenseManagerReportGeneratorArn?: {} | undefined
}
type CreateLicenseVersionRequest = {
  LicenseArn: {}
  LicenseName: {}
  ProductName: {}
  Issuer: { Name: {}; SignKey?: {} | undefined }
  HomeRegion: {}
  Validity: { Begin: {}; End?: {} | undefined }
  LicenseMetadata?: {} | undefined
  Entitlements: {}
  ConsumptionConfiguration: {
    RenewType?: {} | undefined
    ProvisionalConfiguration?: { MaxTimeToLiveInMinutes: {} } | undefined
    BorrowConfiguration?: { AllowEarlyCheckIn: {}; MaxTimeToLiveInMinutes: {} } | undefined
  }
  Status: {}
  ClientToken: {}
  SourceVersion?: {} | undefined
}
type CreateLicenseVersionResponse = {
  LicenseArn?: {} | undefined
  Version?: {} | undefined
  Status?: {} | undefined
}
type CreateTokenRequest = {
  LicenseArn: {}
  RoleArns?: {} | undefined
  ExpirationInDays?: {} | undefined
  TokenProperties?: {} | undefined
  ClientToken: {}
}
type CreateTokenResponse = {
  TokenId?: {} | undefined
  TokenType?: {} | undefined
  Token?: {} | undefined
}
type DeleteGrantRequest = { GrantArn: {}; StatusReason?: {} | undefined; Version: {} }
type DeleteGrantResponse = {
  GrantArn?: {} | undefined
  Status?: {} | undefined
  Version?: {} | undefined
}
type DeleteLicenseRequest = { LicenseArn: {}; SourceVersion: {} }
type DeleteLicenseResponse = { Status?: {} | undefined; DeletionDate?: {} | undefined }
type DeleteLicenseConfigurationRequest = { LicenseConfigurationArn: {} }
type DeleteLicenseConfigurationResponse = { [x: string]: unknown }
type DeleteLicenseManagerReportGeneratorRequest = { LicenseManagerReportGeneratorArn: {} }
type DeleteLicenseManagerReportGeneratorResponse = { [x: string]: unknown }
type DeleteTokenRequest = { TokenId: {} }
type DeleteTokenResponse = { [x: string]: unknown }
type ExtendLicenseConsumptionRequest = { LicenseConsumptionToken: {}; DryRun?: {} | undefined }
type ExtendLicenseConsumptionResponse = {
  LicenseConsumptionToken?: {} | undefined
  Expiration?: {} | undefined
}
type GetAccessTokenRequest = { Token: {}; TokenProperties?: {} | undefined }
type GetAccessTokenResponse = { AccessToken?: {} | undefined }
type GetGrantRequest = { GrantArn: {}; Version?: {} | undefined }
type GetGrantResponse = {
  Grant?:
    | {
        GrantArn: {}
        GrantName: {}
        ParentArn: {}
        LicenseArn: {}
        GranteePrincipalArn: {}
        HomeRegion: {}
        GrantStatus: {}
        StatusReason?: {} | undefined
        Version: {}
        GrantedOperations: {}
        Options?: { ActivationOverrideBehavior?: {} | undefined } | undefined
      }
    | undefined
}
type GetLicenseRequest = { LicenseArn: {}; Version?: {} | undefined }
type GetLicenseResponse = {
  License?:
    | {
        LicenseArn?: {} | undefined
        LicenseName?: {} | undefined
        ProductName?: {} | undefined
        ProductSKU?: {} | undefined
        Issuer?:
          | { Name?: {} | undefined; SignKey?: {} | undefined; KeyFingerprint?: {} | undefined }
          | undefined
        HomeRegion?: {} | undefined
        Status?: {} | undefined
        Validity?: { Begin: {}; End?: {} | undefined } | undefined
        Beneficiary?: {} | undefined
        Entitlements?: {} | undefined
        ConsumptionConfiguration?:
          | {
              RenewType?: {} | undefined
              ProvisionalConfiguration?: { MaxTimeToLiveInMinutes: {} } | undefined
              BorrowConfiguration?:
                | { AllowEarlyCheckIn: {}; MaxTimeToLiveInMinutes: {} }
                | undefined
            }
          | undefined
        LicenseMetadata?: {} | undefined
        CreateTime?: {} | undefined
        Version?: {} | undefined
      }
    | undefined
}
type GetLicenseConfigurationRequest = { LicenseConfigurationArn: {} }
type GetLicenseConfigurationResponse = {
  LicenseConfigurationId?: {} | undefined
  LicenseConfigurationArn?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  LicenseCountingType?: {} | undefined
  LicenseRules?: {} | undefined
  LicenseCount?: {} | undefined
  LicenseCountHardLimit?: {} | undefined
  ConsumedLicenses?: {} | undefined
  Status?: {} | undefined
  OwnerAccountId?: {} | undefined
  ConsumedLicenseSummaryList?: {} | undefined
  ManagedResourceSummaryList?: {} | undefined
  Tags?: {} | undefined
  ProductInformationList?: {} | undefined
  AutomatedDiscoveryInformation?: { LastRunTime?: {} | undefined } | undefined
  DisassociateWhenNotFound?: {} | undefined
}
type GetLicenseConversionTaskRequest = { LicenseConversionTaskId: {} }
type GetLicenseConversionTaskResponse = {
  LicenseConversionTaskId?: {} | undefined
  ResourceArn?: {} | undefined
  SourceLicenseContext?: { UsageOperation?: {} | undefined } | undefined
  DestinationLicenseContext?: { UsageOperation?: {} | undefined } | undefined
  StatusMessage?: {} | undefined
  Status?: {} | undefined
  StartTime?: {} | undefined
  LicenseConversionTime?: {} | undefined
  EndTime?: {} | undefined
}
type GetLicenseManagerReportGeneratorRequest = { LicenseManagerReportGeneratorArn: {} }
type GetLicenseManagerReportGeneratorResponse = {
  ReportGenerator?:
    | {
        ReportGeneratorName?: {} | undefined
        ReportType?: {} | undefined
        ReportContext?: { licenseConfigurationArns: {} } | undefined
        ReportFrequency?: { value?: {} | undefined; period?: {} | undefined } | undefined
        LicenseManagerReportGeneratorArn?: {} | undefined
        LastRunStatus?: {} | undefined
        LastRunFailureReason?: {} | undefined
        LastReportGenerationTime?: {} | undefined
        ReportCreatorAccount?: {} | undefined
        Description?: {} | undefined
        S3Location?: { bucket?: {} | undefined; keyPrefix?: {} | undefined } | undefined
        CreateTime?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type GetLicenseUsageRequest = { LicenseArn: {} }
type GetLicenseUsageResponse = { LicenseUsage?: { EntitlementUsages?: {} | undefined } | undefined }
type GetServiceSettingsRequest = { [x: string]: unknown }
type GetServiceSettingsResponse = {
  S3BucketArn?: {} | undefined
  SnsTopicArn?: {} | undefined
  OrganizationConfiguration?: { EnableIntegration: {} } | undefined
  EnableCrossAccountsDiscovery?: {} | undefined
  LicenseManagerResourceShareArn?: {} | undefined
}
type ListAssociationsForLicenseConfigurationRequest = {
  LicenseConfigurationArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAssociationsForLicenseConfigurationResponse = {
  LicenseConfigurationAssociations?: {} | undefined
  NextToken?: {} | undefined
}
type ListDistributedGrantsRequest = {
  GrantArns?: {} | undefined
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDistributedGrantsResponse = { Grants?: {} | undefined; NextToken?: {} | undefined }
type ListFailuresForLicenseConfigurationOperationsRequest = {
  LicenseConfigurationArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListFailuresForLicenseConfigurationOperationsResponse = {
  LicenseOperationFailureList?: {} | undefined
  NextToken?: {} | undefined
}
type ListLicenseConfigurationsRequest = {
  LicenseConfigurationArns?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListLicenseConfigurationsResponse = {
  LicenseConfigurations?: {} | undefined
  NextToken?: {} | undefined
}
type ListLicenseConversionTasksRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListLicenseConversionTasksResponse = {
  LicenseConversionTasks?: {} | undefined
  NextToken?: {} | undefined
}
type ListLicenseManagerReportGeneratorsRequest = {
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListLicenseManagerReportGeneratorsResponse = {
  ReportGenerators?: {} | undefined
  NextToken?: {} | undefined
}
type ListLicenseSpecificationsForResourceRequest = {
  ResourceArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListLicenseSpecificationsForResourceResponse = {
  LicenseSpecifications?: {} | undefined
  NextToken?: {} | undefined
}
type ListLicenseVersionsRequest = {
  LicenseArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListLicenseVersionsResponse = { Licenses?: {} | undefined; NextToken?: {} | undefined }
type ListLicensesRequest = {
  LicenseArns?: {} | undefined
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListLicensesResponse = { Licenses?: {} | undefined; NextToken?: {} | undefined }
type ListReceivedGrantsRequest = {
  GrantArns?: {} | undefined
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListReceivedGrantsResponse = { Grants?: {} | undefined; NextToken?: {} | undefined }
type ListReceivedGrantsForOrganizationRequest = {
  LicenseArn: {}
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListReceivedGrantsForOrganizationResponse = {
  Grants?: {} | undefined
  NextToken?: {} | undefined
}
type ListReceivedLicensesRequest = {
  LicenseArns?: {} | undefined
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListReceivedLicensesResponse = { Licenses?: {} | undefined; NextToken?: {} | undefined }
type ListReceivedLicensesForOrganizationRequest = {
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListReceivedLicensesForOrganizationResponse = {
  Licenses?: {} | undefined
  NextToken?: {} | undefined
}
type ListResourceInventoryRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListResourceInventoryResponse = {
  ResourceInventoryList?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListTokensRequest = {
  TokenIds?: {} | undefined
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTokensResponse = { Tokens?: {} | undefined; NextToken?: {} | undefined }
type ListUsageForLicenseConfigurationRequest = {
  LicenseConfigurationArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListUsageForLicenseConfigurationResponse = {
  LicenseConfigurationUsageList?: {} | undefined
  NextToken?: {} | undefined
}
type RejectGrantRequest = { GrantArn: {} }
type RejectGrantResponse = {
  GrantArn?: {} | undefined
  Status?: {} | undefined
  Version?: {} | undefined
}
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateLicenseConfigurationRequest = {
  LicenseConfigurationArn: {}
  LicenseConfigurationStatus?: {} | undefined
  LicenseRules?: {} | undefined
  LicenseCount?: {} | undefined
  LicenseCountHardLimit?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  ProductInformationList?: {} | undefined
  DisassociateWhenNotFound?: {} | undefined
}
type UpdateLicenseConfigurationResponse = { [x: string]: unknown }
type UpdateLicenseManagerReportGeneratorRequest = {
  LicenseManagerReportGeneratorArn: {}
  ReportGeneratorName: {}
  Type: {}
  ReportContext: { licenseConfigurationArns: {} }
  ReportFrequency: { value?: {} | undefined; period?: {} | undefined }
  ClientToken: {}
  Description?: {} | undefined
}
type UpdateLicenseManagerReportGeneratorResponse = { [x: string]: unknown }
type UpdateLicenseSpecificationsForResourceRequest = {
  ResourceArn: {}
  AddLicenseSpecifications?: {} | undefined
  RemoveLicenseSpecifications?: {} | undefined
}
type UpdateLicenseSpecificationsForResourceResponse = { [x: string]: unknown }
type UpdateServiceSettingsRequest = {
  S3BucketArn?: {} | undefined
  SnsTopicArn?: {} | undefined
  OrganizationConfiguration?: { EnableIntegration: {} } | undefined
  EnableCrossAccountsDiscovery?: {} | undefined
}
type UpdateServiceSettingsResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSLicenseManager.AcceptGrant': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.AcceptGrant'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcceptGrantRequest }
        output: AcceptGrantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CheckInLicense': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CheckInLicense'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CheckInLicenseRequest }
        output: CheckInLicenseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CheckoutBorrowLicense'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CheckoutBorrowLicenseRequest }
        output: CheckoutBorrowLicenseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CheckoutLicense': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CheckoutLicense'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CheckoutLicenseRequest }
        output: CheckoutLicenseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CreateGrant': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CreateGrant'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGrantRequest }
        output: CreateGrantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CreateGrantVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CreateGrantVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGrantVersionRequest }
        output: CreateGrantVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CreateLicense': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CreateLicense'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLicenseRequest }
        output: CreateLicenseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CreateLicenseConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLicenseConfigurationRequest }
        output: CreateLicenseConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CreateLicenseConversionTaskForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLicenseConversionTaskForResourceRequest }
        output: CreateLicenseConversionTaskForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CreateLicenseManagerReportGenerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLicenseManagerReportGeneratorRequest }
        output: CreateLicenseManagerReportGeneratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CreateLicenseVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLicenseVersionRequest }
        output: CreateLicenseVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.CreateToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.CreateToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTokenRequest }
        output: CreateTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.DeleteGrant': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.DeleteGrant'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGrantRequest }
        output: DeleteGrantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicense': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.DeleteLicense'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLicenseRequest }
        output: DeleteLicenseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.DeleteLicenseConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLicenseConfigurationRequest }
        output: DeleteLicenseConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.DeleteLicenseManagerReportGenerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLicenseManagerReportGeneratorRequest }
        output: DeleteLicenseManagerReportGeneratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.DeleteToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.DeleteToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTokenRequest }
        output: DeleteTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ExtendLicenseConsumption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExtendLicenseConsumptionRequest }
        output: ExtendLicenseConsumptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.GetAccessToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.GetAccessToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAccessTokenRequest }
        output: GetAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.GetGrant': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.GetGrant'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetGrantRequest }
        output: GetGrantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.GetLicense': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.GetLicense'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLicenseRequest }
        output: GetLicenseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.GetLicenseConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLicenseConfigurationRequest }
        output: GetLicenseConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.GetLicenseConversionTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLicenseConversionTaskRequest }
        output: GetLicenseConversionTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.GetLicenseManagerReportGenerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLicenseManagerReportGeneratorRequest }
        output: GetLicenseManagerReportGeneratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.GetLicenseUsage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.GetLicenseUsage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLicenseUsageRequest }
        output: GetLicenseUsageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.GetServiceSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.GetServiceSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceSettingsRequest }
        output: GetServiceSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListAssociationsForLicenseConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAssociationsForLicenseConfigurationRequest }
        output: ListAssociationsForLicenseConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListDistributedGrants': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListDistributedGrants'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDistributedGrantsRequest }
        output: ListDistributedGrantsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListFailuresForLicenseConfigurationOperations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFailuresForLicenseConfigurationOperationsRequest }
        output: ListFailuresForLicenseConfigurationOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListLicenseConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLicenseConfigurationsRequest }
        output: ListLicenseConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListLicenseConversionTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLicenseConversionTasksRequest }
        output: ListLicenseConversionTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListLicenseManagerReportGenerators'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLicenseManagerReportGeneratorsRequest }
        output: ListLicenseManagerReportGeneratorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListLicenseSpecificationsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLicenseSpecificationsForResourceRequest }
        output: ListLicenseSpecificationsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListLicenseVersions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListLicenseVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLicenseVersionsRequest }
        output: ListLicenseVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListLicenses': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListLicenses'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLicensesRequest }
        output: ListLicensesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedGrants': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListReceivedGrants'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReceivedGrantsRequest }
        output: ListReceivedGrantsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListReceivedGrantsForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReceivedGrantsForOrganizationRequest }
        output: ListReceivedGrantsForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListReceivedLicenses'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReceivedLicensesRequest }
        output: ListReceivedLicensesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListReceivedLicensesForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReceivedLicensesForOrganizationRequest }
        output: ListReceivedLicensesForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListResourceInventory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListResourceInventory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourceInventoryRequest }
        output: ListResourceInventoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListTagsForResource'
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
    '/#X-Amz-Target=AWSLicenseManager.ListTokens': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListTokens'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTokensRequest }
        output: ListTokensResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.ListUsageForLicenseConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUsageForLicenseConfigurationRequest }
        output: ListUsageForLicenseConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.RejectGrant': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.RejectGrant'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RejectGrantRequest }
        output: RejectGrantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.TagResource'
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
    '/#X-Amz-Target=AWSLicenseManager.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.UntagResource'
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
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.UpdateLicenseConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateLicenseConfigurationRequest }
        output: UpdateLicenseConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.UpdateLicenseManagerReportGenerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateLicenseManagerReportGeneratorRequest }
        output: UpdateLicenseManagerReportGeneratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.UpdateLicenseSpecificationsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateLicenseSpecificationsForResourceRequest }
        output: UpdateLicenseSpecificationsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSLicenseManager.UpdateServiceSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceSettingsRequest }
        output: UpdateServiceSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
