type CachedMethods = { Quantity: {}; Items: {} }
type AllowedMethods = { Quantity: {}; Items: {}; CachedMethods?: CachedMethods | undefined }
type Distribution = {
  Id: {}
  ARN: {}
  Status: {}
  LastModifiedTime: {}
  InProgressInvalidationBatches: {}
  DomainName: {}
  ActiveTrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
  ActiveTrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
  DistributionConfig: {
    CallerReference: {}
    Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
    DefaultRootObject?: {} | undefined
    Origins: { Quantity: {}; Items: {} }
    OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
    DefaultCacheBehavior: {
      TargetOriginId: {}
      TrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
      TrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
      ViewerProtocolPolicy: {}
      AllowedMethods?: AllowedMethods | undefined
      SmoothStreaming?: {} | undefined
      Compress?: {} | undefined
      LambdaFunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
      FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
      FieldLevelEncryptionId?: {} | undefined
      RealtimeLogConfigArn?: {} | undefined
      CachePolicyId?: {} | undefined
      OriginRequestPolicyId?: {} | undefined
      ResponseHeadersPolicyId?: {} | undefined
      ForwardedValues?:
        | {
            QueryString: {}
            Cookies: {
              Forward: {}
              WhitelistedNames?: { Quantity: {}; Items?: {} | undefined } | undefined
            }
            Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
            QueryStringCacheKeys?: { Quantity: {}; Items?: {} | undefined } | undefined
          }
        | undefined
      MinTTL?: {} | undefined
      DefaultTTL?: {} | undefined
      MaxTTL?: {} | undefined
    }
    CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
    CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
    Comment: {}
    Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
    PriceClass?: {} | undefined
    Enabled: {}
    ViewerCertificate?:
      | {
          CloudFrontDefaultCertificate?: {} | undefined
          IAMCertificateId?: {} | undefined
          ACMCertificateArn?: {} | undefined
          SSLSupportMethod?: {} | undefined
          MinimumProtocolVersion?: {} | undefined
          Certificate?: {} | undefined
          CertificateSource?: {} | undefined
        }
      | undefined
    Restrictions?:
      | { GeoRestriction: { RestrictionType: {}; Quantity: {}; Items?: {} | undefined } }
      | undefined
    WebACLId?: {} | undefined
    HttpVersion?: {} | undefined
    IsIPV6Enabled?: {} | undefined
    ContinuousDeploymentPolicyId?: {} | undefined
    Staging?: {} | undefined
  }
  AliasICPRecordals?: {} | undefined
}
type CopyDistributionResult = { Distribution?: Distribution | undefined }
type InvalidArgument = { [x: string]: unknown }
type InvalidRequiredProtocol = { [x: string]: unknown }
type NoSuchOrigin = { [x: string]: unknown }
type TooManyOrigins = { [x: string]: unknown }
type TooManyOriginGroupsPerDistribution = { [x: string]: unknown }
type TooManyCacheBehaviors = { [x: string]: unknown }
type TooManyCookieNamesInWhiteList = { [x: string]: unknown }
type InvalidForwardCookies = { [x: string]: unknown }
type TooManyHeadersInForwardedValues = { [x: string]: unknown }
type InconsistentQuantities = { [x: string]: unknown }
type TooManyCertificates = { [x: string]: unknown }
type Headers = { Quantity: {}; Items?: {} | undefined }
type CookieNames = { Quantity: {}; Items?: {} | undefined }
type CreateCachePolicyResult = {
  CachePolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        CachePolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          DefaultTTL?: {} | undefined
          MaxTTL?: {} | undefined
          MinTTL: {}
          ParametersInCacheKeyAndForwardedToOrigin?:
            | {
                EnableAcceptEncodingGzip: {}
                EnableAcceptEncodingBrotli?: {} | undefined
                HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
                CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
                QueryStringsConfig: {
                  QueryStringBehavior: {}
                  QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
                }
              }
            | undefined
        }
      }
    | undefined
}
type ListCachePoliciesResult = {
  CachePolicyList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type CreateCloudFrontOriginAccessIdentityResult = {
  CloudFrontOriginAccessIdentity?:
    | {
        Id: {}
        S3CanonicalUserId: {}
        CloudFrontOriginAccessIdentityConfig?: { CallerReference: {}; Comment: {} } | undefined
      }
    | undefined
}
type ListCloudFrontOriginAccessIdentitiesResult = {
  CloudFrontOriginAccessIdentityList?:
    | {
        Marker: {}
        NextMarker?: {} | undefined
        MaxItems: {}
        IsTruncated: {}
        Quantity: {}
        Items?: {} | undefined
      }
    | undefined
}
type SessionStickinessConfig = { IdleTTL: {}; MaximumTTL: {} }
type ContinuousDeploymentPolicyConfig = {
  StagingDistributionDnsNames: { Quantity: {}; Items?: {} | undefined }
  Enabled: {}
  TrafficConfig?:
    | {
        SingleWeightConfig?:
          | { Weight: {}; SessionStickinessConfig?: SessionStickinessConfig | undefined }
          | undefined
        SingleHeaderConfig?: { Header: {}; Value: {} } | undefined
        Type: {}
      }
    | undefined
}
type CreateContinuousDeploymentPolicyResult = {
  ContinuousDeploymentPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig
      }
    | undefined
}
type ListContinuousDeploymentPoliciesResult = {
  ContinuousDeploymentPolicyList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type CreateDistributionResult = {
  Distribution?:
    | {
        Id: {}
        ARN: {}
        Status: {}
        LastModifiedTime: {}
        InProgressInvalidationBatches: {}
        DomainName: {}
        ActiveTrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
        ActiveTrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
        DistributionConfig: {
          CallerReference: {}
          Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
          DefaultRootObject?: {} | undefined
          Origins: { Quantity: {}; Items: {} }
          OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
          DefaultCacheBehavior: {
            TargetOriginId: {}
            TrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
            TrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
            ViewerProtocolPolicy: {}
            AllowedMethods?: AllowedMethods | undefined
            SmoothStreaming?: {} | undefined
            Compress?: {} | undefined
            LambdaFunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
            FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
            FieldLevelEncryptionId?: {} | undefined
            RealtimeLogConfigArn?: {} | undefined
            CachePolicyId?: {} | undefined
            OriginRequestPolicyId?: {} | undefined
            ResponseHeadersPolicyId?: {} | undefined
            ForwardedValues?:
              | {
                  QueryString: {}
                  Cookies: {
                    Forward: {}
                    WhitelistedNames?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                  Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                  QueryStringCacheKeys?: { Quantity: {}; Items?: {} | undefined } | undefined
                }
              | undefined
            MinTTL?: {} | undefined
            DefaultTTL?: {} | undefined
            MaxTTL?: {} | undefined
          }
          CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
          CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
          Comment: {}
          Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
          PriceClass?: {} | undefined
          Enabled: {}
          ViewerCertificate?:
            | {
                CloudFrontDefaultCertificate?: {} | undefined
                IAMCertificateId?: {} | undefined
                ACMCertificateArn?: {} | undefined
                SSLSupportMethod?: {} | undefined
                MinimumProtocolVersion?: {} | undefined
                Certificate?: {} | undefined
                CertificateSource?: {} | undefined
              }
            | undefined
          Restrictions?:
            | { GeoRestriction: { RestrictionType: {}; Quantity: {}; Items?: {} | undefined } }
            | undefined
          WebACLId?: {} | undefined
          HttpVersion?: {} | undefined
          IsIPV6Enabled?: {} | undefined
          ContinuousDeploymentPolicyId?: {} | undefined
          Staging?: {} | undefined
        }
        AliasICPRecordals?: {} | undefined
      }
    | undefined
}
type InvalidHeadersForS3Origin = { [x: string]: unknown }
type InvalidLocationCode = { [x: string]: unknown }
type ListDistributionsResult = {
  DistributionList?:
    | {
        Marker: {}
        NextMarker?: {} | undefined
        MaxItems: {}
        IsTruncated: {}
        Quantity: {}
        Items?: {} | undefined
      }
    | undefined
}
type CreateDistributionWithTagsResult = {
  Distribution?:
    | {
        Id: {}
        ARN: {}
        Status: {}
        LastModifiedTime: {}
        InProgressInvalidationBatches: {}
        DomainName: {}
        ActiveTrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
        ActiveTrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
        DistributionConfig: {
          CallerReference: {}
          Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
          DefaultRootObject?: {} | undefined
          Origins: { Quantity: {}; Items: {} }
          OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
          DefaultCacheBehavior: {
            TargetOriginId: {}
            TrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
            TrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
            ViewerProtocolPolicy: {}
            AllowedMethods?: AllowedMethods | undefined
            SmoothStreaming?: {} | undefined
            Compress?: {} | undefined
            LambdaFunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
            FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
            FieldLevelEncryptionId?: {} | undefined
            RealtimeLogConfigArn?: {} | undefined
            CachePolicyId?: {} | undefined
            OriginRequestPolicyId?: {} | undefined
            ResponseHeadersPolicyId?: {} | undefined
            ForwardedValues?:
              | {
                  QueryString: {}
                  Cookies: {
                    Forward: {}
                    WhitelistedNames?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                  Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                  QueryStringCacheKeys?: { Quantity: {}; Items?: {} | undefined } | undefined
                }
              | undefined
            MinTTL?: {} | undefined
            DefaultTTL?: {} | undefined
            MaxTTL?: {} | undefined
          }
          CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
          CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
          Comment: {}
          Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
          PriceClass?: {} | undefined
          Enabled: {}
          ViewerCertificate?:
            | {
                CloudFrontDefaultCertificate?: {} | undefined
                IAMCertificateId?: {} | undefined
                ACMCertificateArn?: {} | undefined
                SSLSupportMethod?: {} | undefined
                MinimumProtocolVersion?: {} | undefined
                Certificate?: {} | undefined
                CertificateSource?: {} | undefined
              }
            | undefined
          Restrictions?:
            | { GeoRestriction: { RestrictionType: {}; Quantity: {}; Items?: {} | undefined } }
            | undefined
          WebACLId?: {} | undefined
          HttpVersion?: {} | undefined
          IsIPV6Enabled?: {} | undefined
          ContinuousDeploymentPolicyId?: {} | undefined
          Staging?: {} | undefined
        }
        AliasICPRecordals?: {} | undefined
      }
    | undefined
}
type InvalidGeoRestrictionParameter = { [x: string]: unknown }
type CreateFieldLevelEncryptionConfigResult = {
  FieldLevelEncryption?:
    | {
        Id: {}
        LastModifiedTime: {}
        FieldLevelEncryptionConfig: {
          CallerReference: {}
          Comment?: {} | undefined
          QueryArgProfileConfig?:
            | {
                ForwardWhenQueryArgProfileIsUnknown: {}
                QueryArgProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
              }
            | undefined
          ContentTypeProfileConfig?:
            | {
                ForwardWhenContentTypeIsUnknown: {}
                ContentTypeProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
              }
            | undefined
        }
      }
    | undefined
}
type ListFieldLevelEncryptionConfigsResult = {
  FieldLevelEncryptionList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type CreateFieldLevelEncryptionProfileResult = {
  FieldLevelEncryptionProfile?:
    | {
        Id: {}
        LastModifiedTime: {}
        FieldLevelEncryptionProfileConfig: {
          Name: {}
          CallerReference: {}
          Comment?: {} | undefined
          EncryptionEntities: { Quantity: {}; Items?: {} | undefined }
        }
      }
    | undefined
}
type ListFieldLevelEncryptionProfilesResult = {
  FieldLevelEncryptionProfileList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type CreateFunctionResult = {
  FunctionSummary?:
    | {
        Name: {}
        Status?: {} | undefined
        FunctionConfig: { Comment: {}; Runtime: {} }
        FunctionMetadata: {
          FunctionARN: {}
          Stage?: {} | undefined
          CreatedTime?: {} | undefined
          LastModifiedTime: {}
        }
      }
    | undefined
}
type ListFunctionsResult = {
  FunctionList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type CreateInvalidationResult = {
  Invalidation?:
    | {
        Id: {}
        Status: {}
        CreateTime: {}
        InvalidationBatch: { Paths: { Quantity: {}; Items?: {} | undefined }; CallerReference: {} }
      }
    | undefined
}
type ListInvalidationsResult = {
  InvalidationList?:
    | {
        Marker: {}
        NextMarker?: {} | undefined
        MaxItems: {}
        IsTruncated: {}
        Quantity: {}
        Items?: {} | undefined
      }
    | undefined
}
type CreateKeyGroupResult = {
  KeyGroup?:
    | {
        Id: {}
        LastModifiedTime: {}
        KeyGroupConfig: { Name: {}; Items: {}; Comment?: {} | undefined }
      }
    | undefined
}
type ListKeyGroupsResult = {
  KeyGroupList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type CreateMonitoringSubscriptionResult = {
  MonitoringSubscription?:
    | { RealtimeMetricsSubscriptionConfig?: { RealtimeMetricsSubscriptionStatus: {} } | undefined }
    | undefined
}
type DeleteMonitoringSubscriptionResult = { [x: string]: unknown }
type GetMonitoringSubscriptionResult = {
  MonitoringSubscription?:
    | { RealtimeMetricsSubscriptionConfig?: { RealtimeMetricsSubscriptionStatus: {} } | undefined }
    | undefined
}
type CreateOriginAccessControlResult = {
  OriginAccessControl?:
    | {
        Id: {}
        OriginAccessControlConfig?:
          | {
              Name: {}
              Description?: {} | undefined
              SigningProtocol: {}
              SigningBehavior: {}
              OriginAccessControlOriginType: {}
            }
          | undefined
      }
    | undefined
}
type ListOriginAccessControlsResult = {
  OriginAccessControlList?:
    | {
        Marker: {}
        NextMarker?: {} | undefined
        MaxItems: {}
        IsTruncated: {}
        Quantity: {}
        Items?: {} | undefined
      }
    | undefined
}
type CreateOriginRequestPolicyResult = {
  OriginRequestPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        OriginRequestPolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
          CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
          QueryStringsConfig: {
            QueryStringBehavior: {}
            QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
          }
        }
      }
    | undefined
}
type ListOriginRequestPoliciesResult = {
  OriginRequestPolicyList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type CreatePublicKeyResult = {
  PublicKey?:
    | {
        Id: {}
        CreatedTime: {}
        PublicKeyConfig: { CallerReference: {}; Name: {}; EncodedKey: {}; Comment?: {} | undefined }
      }
    | undefined
}
type ListPublicKeysResult = {
  PublicKeyList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type EndPoint = { StreamType: {}; KinesisStreamConfig?: { RoleARN: {}; StreamARN: {} } | undefined }
type CreateRealtimeLogConfigResult = {
  RealtimeLogConfig?: { ARN: {}; Name: {}; SamplingRate: {}; EndPoints: {}; Fields: {} } | undefined
}
type ListRealtimeLogConfigsResult = {
  RealtimeLogConfigs?:
    | {
        MaxItems: {}
        Items?: {} | undefined
        IsTruncated: {}
        Marker: {}
        NextMarker?: {} | undefined
      }
    | undefined
}
type CreateResponseHeadersPolicyResult = {
  ResponseHeadersPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        ResponseHeadersPolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          CorsConfig?:
            | {
                AccessControlAllowOrigins: { Quantity: {}; Items: {} }
                AccessControlAllowHeaders: { Quantity: {}; Items: {} }
                AccessControlAllowMethods: { Quantity: {}; Items: {} }
                AccessControlAllowCredentials: {}
                AccessControlExposeHeaders?: { Quantity: {}; Items?: {} | undefined } | undefined
                AccessControlMaxAgeSec?: {} | undefined
                OriginOverride: {}
              }
            | undefined
          SecurityHeadersConfig?:
            | {
                XSSProtection?:
                  | {
                      Override: {}
                      Protection: {}
                      ModeBlock?: {} | undefined
                      ReportUri?: {} | undefined
                    }
                  | undefined
                FrameOptions?: { Override: {}; FrameOption: {} } | undefined
                ReferrerPolicy?: { Override: {}; ReferrerPolicy: {} } | undefined
                ContentSecurityPolicy?: { Override: {}; ContentSecurityPolicy: {} } | undefined
                ContentTypeOptions?: { Override: {} } | undefined
                StrictTransportSecurity?:
                  | {
                      Override: {}
                      IncludeSubdomains?: {} | undefined
                      Preload?: {} | undefined
                      AccessControlMaxAgeSec: {}
                    }
                  | undefined
              }
            | undefined
          ServerTimingHeadersConfig?: { Enabled: {}; SamplingRate?: {} | undefined } | undefined
          CustomHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
          RemoveHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
        }
      }
    | undefined
}
type ListResponseHeadersPoliciesResult = {
  ResponseHeadersPolicyList?:
    | { NextMarker?: {} | undefined; MaxItems: {}; Quantity: {}; Items?: {} | undefined }
    | undefined
}
type CreateStreamingDistributionResult = {
  StreamingDistribution?:
    | {
        Id: {}
        ARN: {}
        Status: {}
        LastModifiedTime?: {} | undefined
        DomainName: {}
        ActiveTrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
        StreamingDistributionConfig: {
          CallerReference: {}
          S3Origin: { DomainName: {}; OriginAccessIdentity: {} }
          Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
          Comment: {}
          Logging?: { Enabled: {}; Bucket: {}; Prefix: {} } | undefined
          TrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
          PriceClass?: {} | undefined
          Enabled: {}
        }
      }
    | undefined
}
type ListStreamingDistributionsResult = {
  StreamingDistributionList?:
    | {
        Marker: {}
        NextMarker?: {} | undefined
        MaxItems: {}
        IsTruncated: {}
        Quantity: {}
        Items?: {} | undefined
      }
    | undefined
}
type CreateStreamingDistributionWithTagsResult = {
  StreamingDistribution?:
    | {
        Id: {}
        ARN: {}
        Status: {}
        LastModifiedTime?: {} | undefined
        DomainName: {}
        ActiveTrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
        StreamingDistributionConfig: {
          CallerReference: {}
          S3Origin: { DomainName: {}; OriginAccessIdentity: {} }
          Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
          Comment: {}
          Logging?: { Enabled: {}; Bucket: {}; Prefix: {} } | undefined
          TrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
          PriceClass?: {} | undefined
          Enabled: {}
        }
      }
    | undefined
}
type GetCachePolicyResult = {
  CachePolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        CachePolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          DefaultTTL?: {} | undefined
          MaxTTL?: {} | undefined
          MinTTL: {}
          ParametersInCacheKeyAndForwardedToOrigin?:
            | {
                EnableAcceptEncodingGzip: {}
                EnableAcceptEncodingBrotli?: {} | undefined
                HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
                CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
                QueryStringsConfig: {
                  QueryStringBehavior: {}
                  QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
                }
              }
            | undefined
        }
      }
    | undefined
}
type UpdateCachePolicyResult = {
  CachePolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        CachePolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          DefaultTTL?: {} | undefined
          MaxTTL?: {} | undefined
          MinTTL: {}
          ParametersInCacheKeyAndForwardedToOrigin?:
            | {
                EnableAcceptEncodingGzip: {}
                EnableAcceptEncodingBrotli?: {} | undefined
                HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
                CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
                QueryStringsConfig: {
                  QueryStringBehavior: {}
                  QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
                }
              }
            | undefined
        }
      }
    | undefined
}
type GetCloudFrontOriginAccessIdentityResult = {
  CloudFrontOriginAccessIdentity?:
    | {
        Id: {}
        S3CanonicalUserId: {}
        CloudFrontOriginAccessIdentityConfig?: { CallerReference: {}; Comment: {} } | undefined
      }
    | undefined
}
type GetContinuousDeploymentPolicyResult = {
  ContinuousDeploymentPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig
      }
    | undefined
}
type UpdateContinuousDeploymentPolicyResult = {
  ContinuousDeploymentPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig
      }
    | undefined
}
type GetDistributionResult = {
  Distribution?:
    | {
        Id: {}
        ARN: {}
        Status: {}
        LastModifiedTime: {}
        InProgressInvalidationBatches: {}
        DomainName: {}
        ActiveTrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
        ActiveTrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
        DistributionConfig: {
          CallerReference: {}
          Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
          DefaultRootObject?: {} | undefined
          Origins: { Quantity: {}; Items: {} }
          OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
          DefaultCacheBehavior: {
            TargetOriginId: {}
            TrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
            TrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
            ViewerProtocolPolicy: {}
            AllowedMethods?: AllowedMethods | undefined
            SmoothStreaming?: {} | undefined
            Compress?: {} | undefined
            LambdaFunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
            FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
            FieldLevelEncryptionId?: {} | undefined
            RealtimeLogConfigArn?: {} | undefined
            CachePolicyId?: {} | undefined
            OriginRequestPolicyId?: {} | undefined
            ResponseHeadersPolicyId?: {} | undefined
            ForwardedValues?:
              | {
                  QueryString: {}
                  Cookies: {
                    Forward: {}
                    WhitelistedNames?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                  Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                  QueryStringCacheKeys?: { Quantity: {}; Items?: {} | undefined } | undefined
                }
              | undefined
            MinTTL?: {} | undefined
            DefaultTTL?: {} | undefined
            MaxTTL?: {} | undefined
          }
          CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
          CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
          Comment: {}
          Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
          PriceClass?: {} | undefined
          Enabled: {}
          ViewerCertificate?:
            | {
                CloudFrontDefaultCertificate?: {} | undefined
                IAMCertificateId?: {} | undefined
                ACMCertificateArn?: {} | undefined
                SSLSupportMethod?: {} | undefined
                MinimumProtocolVersion?: {} | undefined
                Certificate?: {} | undefined
                CertificateSource?: {} | undefined
              }
            | undefined
          Restrictions?:
            | { GeoRestriction: { RestrictionType: {}; Quantity: {}; Items?: {} | undefined } }
            | undefined
          WebACLId?: {} | undefined
          HttpVersion?: {} | undefined
          IsIPV6Enabled?: {} | undefined
          ContinuousDeploymentPolicyId?: {} | undefined
          Staging?: {} | undefined
        }
        AliasICPRecordals?: {} | undefined
      }
    | undefined
}
type GetFieldLevelEncryptionResult = {
  FieldLevelEncryption?:
    | {
        Id: {}
        LastModifiedTime: {}
        FieldLevelEncryptionConfig: {
          CallerReference: {}
          Comment?: {} | undefined
          QueryArgProfileConfig?:
            | {
                ForwardWhenQueryArgProfileIsUnknown: {}
                QueryArgProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
              }
            | undefined
          ContentTypeProfileConfig?:
            | {
                ForwardWhenContentTypeIsUnknown: {}
                ContentTypeProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
              }
            | undefined
        }
      }
    | undefined
}
type GetFieldLevelEncryptionProfileResult = {
  FieldLevelEncryptionProfile?:
    | {
        Id: {}
        LastModifiedTime: {}
        FieldLevelEncryptionProfileConfig: {
          Name: {}
          CallerReference: {}
          Comment?: {} | undefined
          EncryptionEntities: { Quantity: {}; Items?: {} | undefined }
        }
      }
    | undefined
}
type UpdateFunctionResult = {
  FunctionSummary?:
    | {
        Name: {}
        Status?: {} | undefined
        FunctionConfig: { Comment: {}; Runtime: {} }
        FunctionMetadata: {
          FunctionARN: {}
          Stage?: {} | undefined
          CreatedTime?: {} | undefined
          LastModifiedTime: {}
        }
      }
    | undefined
}
type GetKeyGroupResult = {
  KeyGroup?:
    | {
        Id: {}
        LastModifiedTime: {}
        KeyGroupConfig: { Name: {}; Items: {}; Comment?: {} | undefined }
      }
    | undefined
}
type UpdateKeyGroupResult = {
  KeyGroup?:
    | {
        Id: {}
        LastModifiedTime: {}
        KeyGroupConfig: { Name: {}; Items: {}; Comment?: {} | undefined }
      }
    | undefined
}
type GetOriginAccessControlResult = {
  OriginAccessControl?:
    | {
        Id: {}
        OriginAccessControlConfig?:
          | {
              Name: {}
              Description?: {} | undefined
              SigningProtocol: {}
              SigningBehavior: {}
              OriginAccessControlOriginType: {}
            }
          | undefined
      }
    | undefined
}
type GetOriginRequestPolicyResult = {
  OriginRequestPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        OriginRequestPolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
          CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
          QueryStringsConfig: {
            QueryStringBehavior: {}
            QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
          }
        }
      }
    | undefined
}
type UpdateOriginRequestPolicyResult = {
  OriginRequestPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        OriginRequestPolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
          CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
          QueryStringsConfig: {
            QueryStringBehavior: {}
            QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
          }
        }
      }
    | undefined
}
type GetPublicKeyResult = {
  PublicKey?:
    | {
        Id: {}
        CreatedTime: {}
        PublicKeyConfig: { CallerReference: {}; Name: {}; EncodedKey: {}; Comment?: {} | undefined }
      }
    | undefined
}
type GetResponseHeadersPolicyResult = {
  ResponseHeadersPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        ResponseHeadersPolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          CorsConfig?:
            | {
                AccessControlAllowOrigins: { Quantity: {}; Items: {} }
                AccessControlAllowHeaders: { Quantity: {}; Items: {} }
                AccessControlAllowMethods: { Quantity: {}; Items: {} }
                AccessControlAllowCredentials: {}
                AccessControlExposeHeaders?: { Quantity: {}; Items?: {} | undefined } | undefined
                AccessControlMaxAgeSec?: {} | undefined
                OriginOverride: {}
              }
            | undefined
          SecurityHeadersConfig?:
            | {
                XSSProtection?:
                  | {
                      Override: {}
                      Protection: {}
                      ModeBlock?: {} | undefined
                      ReportUri?: {} | undefined
                    }
                  | undefined
                FrameOptions?: { Override: {}; FrameOption: {} } | undefined
                ReferrerPolicy?: { Override: {}; ReferrerPolicy: {} } | undefined
                ContentSecurityPolicy?: { Override: {}; ContentSecurityPolicy: {} } | undefined
                ContentTypeOptions?: { Override: {} } | undefined
                StrictTransportSecurity?:
                  | {
                      Override: {}
                      IncludeSubdomains?: {} | undefined
                      Preload?: {} | undefined
                      AccessControlMaxAgeSec: {}
                    }
                  | undefined
              }
            | undefined
          ServerTimingHeadersConfig?: { Enabled: {}; SamplingRate?: {} | undefined } | undefined
          CustomHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
          RemoveHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
        }
      }
    | undefined
}
type UpdateResponseHeadersPolicyResult = {
  ResponseHeadersPolicy?:
    | {
        Id: {}
        LastModifiedTime: {}
        ResponseHeadersPolicyConfig: {
          Comment?: {} | undefined
          Name: {}
          CorsConfig?:
            | {
                AccessControlAllowOrigins: { Quantity: {}; Items: {} }
                AccessControlAllowHeaders: { Quantity: {}; Items: {} }
                AccessControlAllowMethods: { Quantity: {}; Items: {} }
                AccessControlAllowCredentials: {}
                AccessControlExposeHeaders?: { Quantity: {}; Items?: {} | undefined } | undefined
                AccessControlMaxAgeSec?: {} | undefined
                OriginOverride: {}
              }
            | undefined
          SecurityHeadersConfig?:
            | {
                XSSProtection?:
                  | {
                      Override: {}
                      Protection: {}
                      ModeBlock?: {} | undefined
                      ReportUri?: {} | undefined
                    }
                  | undefined
                FrameOptions?: { Override: {}; FrameOption: {} } | undefined
                ReferrerPolicy?: { Override: {}; ReferrerPolicy: {} } | undefined
                ContentSecurityPolicy?: { Override: {}; ContentSecurityPolicy: {} } | undefined
                ContentTypeOptions?: { Override: {} } | undefined
                StrictTransportSecurity?:
                  | {
                      Override: {}
                      IncludeSubdomains?: {} | undefined
                      Preload?: {} | undefined
                      AccessControlMaxAgeSec: {}
                    }
                  | undefined
              }
            | undefined
          ServerTimingHeadersConfig?: { Enabled: {}; SamplingRate?: {} | undefined } | undefined
          CustomHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
          RemoveHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
        }
      }
    | undefined
}
type GetStreamingDistributionResult = {
  StreamingDistribution?:
    | {
        Id: {}
        ARN: {}
        Status: {}
        LastModifiedTime?: {} | undefined
        DomainName: {}
        ActiveTrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
        StreamingDistributionConfig: {
          CallerReference: {}
          S3Origin: { DomainName: {}; OriginAccessIdentity: {} }
          Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
          Comment: {}
          Logging?: { Enabled: {}; Bucket: {}; Prefix: {} } | undefined
          TrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
          PriceClass?: {} | undefined
          Enabled: {}
        }
      }
    | undefined
}
type DescribeFunctionResult = {
  FunctionSummary?:
    | {
        Name: {}
        Status?: {} | undefined
        FunctionConfig: { Comment: {}; Runtime: {} }
        FunctionMetadata: {
          FunctionARN: {}
          Stage?: {} | undefined
          CreatedTime?: {} | undefined
          LastModifiedTime: {}
        }
      }
    | undefined
}
type GetCachePolicyConfigResult = {
  CachePolicyConfig?:
    | {
        Comment?: {} | undefined
        Name: {}
        DefaultTTL?: {} | undefined
        MaxTTL?: {} | undefined
        MinTTL: {}
        ParametersInCacheKeyAndForwardedToOrigin?:
          | {
              EnableAcceptEncodingGzip: {}
              EnableAcceptEncodingBrotli?: {} | undefined
              HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
              CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
              QueryStringsConfig: {
                QueryStringBehavior: {}
                QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
              }
            }
          | undefined
      }
    | undefined
}
type GetCloudFrontOriginAccessIdentityConfigResult = {
  CloudFrontOriginAccessIdentityConfig?: { CallerReference: {}; Comment: {} } | undefined
}
type UpdateCloudFrontOriginAccessIdentityResult = {
  CloudFrontOriginAccessIdentity?:
    | {
        Id: {}
        S3CanonicalUserId: {}
        CloudFrontOriginAccessIdentityConfig?: { CallerReference: {}; Comment: {} } | undefined
      }
    | undefined
}
type GetContinuousDeploymentPolicyConfigResult = {
  ContinuousDeploymentPolicyConfig?: ContinuousDeploymentPolicyConfig | undefined
}
type GetDistributionConfigResult = {
  DistributionConfig?:
    | {
        CallerReference: {}
        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
        DefaultRootObject?: {} | undefined
        Origins: { Quantity: {}; Items: {} }
        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
        DefaultCacheBehavior: {
          TargetOriginId: {}
          TrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
          TrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
          ViewerProtocolPolicy: {}
          AllowedMethods?: AllowedMethods | undefined
          SmoothStreaming?: {} | undefined
          Compress?: {} | undefined
          LambdaFunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
          FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
          FieldLevelEncryptionId?: {} | undefined
          RealtimeLogConfigArn?: {} | undefined
          CachePolicyId?: {} | undefined
          OriginRequestPolicyId?: {} | undefined
          ResponseHeadersPolicyId?: {} | undefined
          ForwardedValues?:
            | {
                QueryString: {}
                Cookies: {
                  Forward: {}
                  WhitelistedNames?: { Quantity: {}; Items?: {} | undefined } | undefined
                }
                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                QueryStringCacheKeys?: { Quantity: {}; Items?: {} | undefined } | undefined
              }
            | undefined
          MinTTL?: {} | undefined
          DefaultTTL?: {} | undefined
          MaxTTL?: {} | undefined
        }
        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
        Comment: {}
        Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
        PriceClass?: {} | undefined
        Enabled: {}
        ViewerCertificate?:
          | {
              CloudFrontDefaultCertificate?: {} | undefined
              IAMCertificateId?: {} | undefined
              ACMCertificateArn?: {} | undefined
              SSLSupportMethod?: {} | undefined
              MinimumProtocolVersion?: {} | undefined
              Certificate?: {} | undefined
              CertificateSource?: {} | undefined
            }
          | undefined
        Restrictions?:
          | { GeoRestriction: { RestrictionType: {}; Quantity: {}; Items?: {} | undefined } }
          | undefined
        WebACLId?: {} | undefined
        HttpVersion?: {} | undefined
        IsIPV6Enabled?: {} | undefined
        ContinuousDeploymentPolicyId?: {} | undefined
        Staging?: {} | undefined
      }
    | undefined
}
type UpdateDistributionResult = {
  Distribution?:
    | {
        Id: {}
        ARN: {}
        Status: {}
        LastModifiedTime: {}
        InProgressInvalidationBatches: {}
        DomainName: {}
        ActiveTrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
        ActiveTrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
        DistributionConfig: {
          CallerReference: {}
          Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
          DefaultRootObject?: {} | undefined
          Origins: { Quantity: {}; Items: {} }
          OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
          DefaultCacheBehavior: {
            TargetOriginId: {}
            TrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
            TrustedKeyGroups?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
            ViewerProtocolPolicy: {}
            AllowedMethods?: AllowedMethods | undefined
            SmoothStreaming?: {} | undefined
            Compress?: {} | undefined
            LambdaFunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
            FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
            FieldLevelEncryptionId?: {} | undefined
            RealtimeLogConfigArn?: {} | undefined
            CachePolicyId?: {} | undefined
            OriginRequestPolicyId?: {} | undefined
            ResponseHeadersPolicyId?: {} | undefined
            ForwardedValues?:
              | {
                  QueryString: {}
                  Cookies: {
                    Forward: {}
                    WhitelistedNames?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                  Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                  QueryStringCacheKeys?: { Quantity: {}; Items?: {} | undefined } | undefined
                }
              | undefined
            MinTTL?: {} | undefined
            DefaultTTL?: {} | undefined
            MaxTTL?: {} | undefined
          }
          CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
          CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
          Comment: {}
          Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
          PriceClass?: {} | undefined
          Enabled: {}
          ViewerCertificate?:
            | {
                CloudFrontDefaultCertificate?: {} | undefined
                IAMCertificateId?: {} | undefined
                ACMCertificateArn?: {} | undefined
                SSLSupportMethod?: {} | undefined
                MinimumProtocolVersion?: {} | undefined
                Certificate?: {} | undefined
                CertificateSource?: {} | undefined
              }
            | undefined
          Restrictions?:
            | { GeoRestriction: { RestrictionType: {}; Quantity: {}; Items?: {} | undefined } }
            | undefined
          WebACLId?: {} | undefined
          HttpVersion?: {} | undefined
          IsIPV6Enabled?: {} | undefined
          ContinuousDeploymentPolicyId?: {} | undefined
          Staging?: {} | undefined
        }
        AliasICPRecordals?: {} | undefined
      }
    | undefined
}
type GetFieldLevelEncryptionConfigResult = {
  FieldLevelEncryptionConfig?:
    | {
        CallerReference: {}
        Comment?: {} | undefined
        QueryArgProfileConfig?:
          | {
              ForwardWhenQueryArgProfileIsUnknown: {}
              QueryArgProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
            }
          | undefined
        ContentTypeProfileConfig?:
          | {
              ForwardWhenContentTypeIsUnknown: {}
              ContentTypeProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateFieldLevelEncryptionConfigResult = {
  FieldLevelEncryption?:
    | {
        Id: {}
        LastModifiedTime: {}
        FieldLevelEncryptionConfig: {
          CallerReference: {}
          Comment?: {} | undefined
          QueryArgProfileConfig?:
            | {
                ForwardWhenQueryArgProfileIsUnknown: {}
                QueryArgProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
              }
            | undefined
          ContentTypeProfileConfig?:
            | {
                ForwardWhenContentTypeIsUnknown: {}
                ContentTypeProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
              }
            | undefined
        }
      }
    | undefined
}
type GetFieldLevelEncryptionProfileConfigResult = {
  FieldLevelEncryptionProfileConfig?:
    | {
        Name: {}
        CallerReference: {}
        Comment?: {} | undefined
        EncryptionEntities: { Quantity: {}; Items?: {} | undefined }
      }
    | undefined
}
type UpdateFieldLevelEncryptionProfileResult = {
  FieldLevelEncryptionProfile?:
    | {
        Id: {}
        LastModifiedTime: {}
        FieldLevelEncryptionProfileConfig: {
          Name: {}
          CallerReference: {}
          Comment?: {} | undefined
          EncryptionEntities: { Quantity: {}; Items?: {} | undefined }
        }
      }
    | undefined
}
type GetFunctionResult = { FunctionCode?: {} | undefined }
type GetInvalidationResult = {
  Invalidation?:
    | {
        Id: {}
        Status: {}
        CreateTime: {}
        InvalidationBatch: { Paths: { Quantity: {}; Items?: {} | undefined }; CallerReference: {} }
      }
    | undefined
}
type GetKeyGroupConfigResult = {
  KeyGroupConfig?: { Name: {}; Items: {}; Comment?: {} | undefined } | undefined
}
type GetOriginAccessControlConfigResult = {
  OriginAccessControlConfig?:
    | {
        Name: {}
        Description?: {} | undefined
        SigningProtocol: {}
        SigningBehavior: {}
        OriginAccessControlOriginType: {}
      }
    | undefined
}
type UpdateOriginAccessControlResult = {
  OriginAccessControl?:
    | {
        Id: {}
        OriginAccessControlConfig?:
          | {
              Name: {}
              Description?: {} | undefined
              SigningProtocol: {}
              SigningBehavior: {}
              OriginAccessControlOriginType: {}
            }
          | undefined
      }
    | undefined
}
type GetOriginRequestPolicyConfigResult = {
  OriginRequestPolicyConfig?:
    | {
        Comment?: {} | undefined
        Name: {}
        HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
        CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
        QueryStringsConfig: {
          QueryStringBehavior: {}
          QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
        }
      }
    | undefined
}
type GetPublicKeyConfigResult = {
  PublicKeyConfig?:
    | { CallerReference: {}; Name: {}; EncodedKey: {}; Comment?: {} | undefined }
    | undefined
}
type UpdatePublicKeyResult = {
  PublicKey?:
    | {
        Id: {}
        CreatedTime: {}
        PublicKeyConfig: { CallerReference: {}; Name: {}; EncodedKey: {}; Comment?: {} | undefined }
      }
    | undefined
}
type GetRealtimeLogConfigResult = {
  RealtimeLogConfig?: { ARN: {}; Name: {}; SamplingRate: {}; EndPoints: {}; Fields: {} } | undefined
}
type GetResponseHeadersPolicyConfigResult = {
  ResponseHeadersPolicyConfig?:
    | {
        Comment?: {} | undefined
        Name: {}
        CorsConfig?:
          | {
              AccessControlAllowOrigins: { Quantity: {}; Items: {} }
              AccessControlAllowHeaders: { Quantity: {}; Items: {} }
              AccessControlAllowMethods: { Quantity: {}; Items: {} }
              AccessControlAllowCredentials: {}
              AccessControlExposeHeaders?: { Quantity: {}; Items?: {} | undefined } | undefined
              AccessControlMaxAgeSec?: {} | undefined
              OriginOverride: {}
            }
          | undefined
        SecurityHeadersConfig?:
          | {
              XSSProtection?:
                | {
                    Override: {}
                    Protection: {}
                    ModeBlock?: {} | undefined
                    ReportUri?: {} | undefined
                  }
                | undefined
              FrameOptions?: { Override: {}; FrameOption: {} } | undefined
              ReferrerPolicy?: { Override: {}; ReferrerPolicy: {} } | undefined
              ContentSecurityPolicy?: { Override: {}; ContentSecurityPolicy: {} } | undefined
              ContentTypeOptions?: { Override: {} } | undefined
              StrictTransportSecurity?:
                | {
                    Override: {}
                    IncludeSubdomains?: {} | undefined
                    Preload?: {} | undefined
                    AccessControlMaxAgeSec: {}
                  }
                | undefined
            }
          | undefined
        ServerTimingHeadersConfig?: { Enabled: {}; SamplingRate?: {} | undefined } | undefined
        CustomHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
        RemoveHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
      }
    | undefined
}
type GetStreamingDistributionConfigResult = {
  StreamingDistributionConfig?:
    | {
        CallerReference: {}
        S3Origin: { DomainName: {}; OriginAccessIdentity: {} }
        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
        Comment: {}
        Logging?: { Enabled: {}; Bucket: {}; Prefix: {} } | undefined
        TrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
        PriceClass?: {} | undefined
        Enabled: {}
      }
    | undefined
}
type UpdateStreamingDistributionResult = {
  StreamingDistribution?:
    | {
        Id: {}
        ARN: {}
        Status: {}
        LastModifiedTime?: {} | undefined
        DomainName: {}
        ActiveTrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
        StreamingDistributionConfig: {
          CallerReference: {}
          S3Origin: { DomainName: {}; OriginAccessIdentity: {} }
          Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
          Comment: {}
          Logging?: { Enabled: {}; Bucket: {}; Prefix: {} } | undefined
          TrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
          PriceClass?: {} | undefined
          Enabled: {}
        }
      }
    | undefined
}
type ListConflictingAliasesResult = {
  ConflictingAliasesList?:
    | {
        NextMarker?: {} | undefined
        MaxItems?: {} | undefined
        Quantity?: {} | undefined
        Items?: {} | undefined
      }
    | undefined
}
type ListDistributionsByCachePolicyIdResult = {
  DistributionIdList?:
    | {
        Marker: {}
        NextMarker?: {} | undefined
        MaxItems: {}
        IsTruncated: {}
        Quantity: {}
        Items?: {} | undefined
      }
    | undefined
}
type DistributionIdList = {
  Marker: {}
  NextMarker?: {} | undefined
  MaxItems: {}
  IsTruncated: {}
  Quantity: {}
  Items?: {} | undefined
}
type ListDistributionsByKeyGroupResult = { DistributionIdList?: DistributionIdList | undefined }
type ListDistributionsByOriginRequestPolicyIdResult = {
  DistributionIdList?:
    | {
        Marker: {}
        NextMarker?: {} | undefined
        MaxItems: {}
        IsTruncated: {}
        Quantity: {}
        Items?: {} | undefined
      }
    | undefined
}
type DistributionList = {
  Marker: {}
  NextMarker?: {} | undefined
  MaxItems: {}
  IsTruncated: {}
  Quantity: {}
  Items?: {} | undefined
}
type ListDistributionsByRealtimeLogConfigResult = {
  DistributionList?: DistributionList | undefined
}
type ListDistributionsByResponseHeadersPolicyIdResult = {
  DistributionIdList?: DistributionIdList | undefined
}
type ListDistributionsByWebACLIdResult = {
  DistributionList?:
    | {
        Marker: {}
        NextMarker?: {} | undefined
        MaxItems: {}
        IsTruncated: {}
        Quantity: {}
        Items?: {} | undefined
      }
    | undefined
}
type ListTagsForResourceResult = { Tags: { Items?: {} | undefined } }
type PublishFunctionResult = {
  FunctionSummary?:
    | {
        Name: {}
        Status?: {} | undefined
        FunctionConfig: { Comment: {}; Runtime: {} }
        FunctionMetadata: {
          FunctionARN: {}
          Stage?: {} | undefined
          CreatedTime?: {} | undefined
          LastModifiedTime: {}
        }
      }
    | undefined
}
type TestFunctionResult = {
  TestResult?:
    | {
        FunctionSummary?:
          | {
              Name: {}
              Status?: {} | undefined
              FunctionConfig: { Comment: {}; Runtime: {} }
              FunctionMetadata: {
                FunctionARN: {}
                Stage?: {} | undefined
                CreatedTime?: {} | undefined
                LastModifiedTime: {}
              }
            }
          | undefined
        ComputeUtilization?: {} | undefined
        FunctionExecutionLogs?: {} | undefined
        FunctionErrorMessage?: {} | undefined
        FunctionOutput?: {} | undefined
      }
    | undefined
}
type UpdateDistributionWithStagingConfigResult = { Distribution?: Distribution | undefined }
type UpdateRealtimeLogConfigResult = {
  RealtimeLogConfig?: { ARN: {}; Name: {}; SamplingRate: {}; EndPoints: {}; Fields: {} } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2020-05-31/distribution/:TargetDistributionId/associate-alias#Alias': {
      $put: {
        input: { param: { TargetDistributionId: string } } & { query: { Alias: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/2020-05-31/distribution/:PrimaryDistributionId/copy': {
      $post:
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: CopyDistributionResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: InvalidArgument
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: InvalidRequiredProtocol
            outputFormat: 'text'
            status: 501
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: NoSuchOrigin
            outputFormat: 'text'
            status: 502
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: TooManyOrigins
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: TooManyOriginGroupsPerDistribution
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: TooManyCacheBehaviors
            outputFormat: 'text'
            status: 505
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: TooManyCookieNamesInWhiteList
            outputFormat: 'text'
            status: 506
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: InvalidForwardCookies
            outputFormat: 'text'
            status: 507
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: TooManyHeadersInForwardedValues
            outputFormat: 'text'
            status: 508
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: InconsistentQuantities
            outputFormat: 'text'
            status: 510
          }
        | {
            input: { param: { PrimaryDistributionId: string } } & {
              header: {
                Staging?: boolean | undefined
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CallerReference: string; Enabled?: boolean | undefined } }
            output: TooManyCertificates
            outputFormat: 'text'
            status: 511
          }
    }
  } & {
    '/2020-05-31/cache-policy': {
      $post: {
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
            CachePolicyConfig: {
              Comment?: {} | undefined
              Name?: {} | undefined
              DefaultTTL?: {} | undefined
              MaxTTL?: {} | undefined
              MinTTL?: {} | undefined
              ParametersInCacheKeyAndForwardedToOrigin?:
                | {
                    EnableAcceptEncodingGzip: {}
                    EnableAcceptEncodingBrotli?: {} | undefined
                    HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
                    CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
                    QueryStringsConfig: {
                      QueryStringBehavior: {}
                      QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
                    }
                  }
                | undefined
            }
          }
        }
        output: CreateCachePolicyResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: {
          query: {
            Type?: 'managed' | 'custom' | undefined
            Marker?: string | undefined
            MaxItems?: string | undefined
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
        output: ListCachePoliciesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-access-identity/cloudfront': {
      $post: {
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
            CloudFrontOriginAccessIdentityConfig: {
              CallerReference?: {} | undefined
              Comment?: {} | undefined
            }
          }
        }
        output: CreateCloudFrontOriginAccessIdentityResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListCloudFrontOriginAccessIdentitiesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/continuous-deployment-policy': {
      $post: {
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
            ContinuousDeploymentPolicyConfig: {
              StagingDistributionDnsNames?: { Quantity: {}; Items?: {} | undefined } | undefined
              Enabled?: {} | undefined
              TrafficConfig?:
                | {
                    SingleWeightConfig?:
                      | {
                          Weight: {}
                          SessionStickinessConfig?: SessionStickinessConfig | undefined
                        }
                      | undefined
                    SingleHeaderConfig?: { Header: {}; Value: {} } | undefined
                    Type: {}
                  }
                | undefined
            }
          }
        }
        output: CreateContinuousDeploymentPolicyResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListContinuousDeploymentPoliciesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distribution': {
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: CreateDistributionResult
            outputFormat: 'text'
            status: 201
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InvalidRequiredProtocol
            outputFormat: 'text'
            status: 500
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: NoSuchOrigin
            outputFormat: 'text'
            status: 501
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyOrigins
            outputFormat: 'text'
            status: 502
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyOriginGroupsPerDistribution
            outputFormat: 'text'
            status: 503
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyCacheBehaviors
            outputFormat: 'text'
            status: 504
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyCookieNamesInWhiteList
            outputFormat: 'text'
            status: 505
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InvalidForwardCookies
            outputFormat: 'text'
            status: 506
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyHeadersInForwardedValues
            outputFormat: 'text'
            status: 507
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InvalidHeadersForS3Origin
            outputFormat: 'text'
            status: 508
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyCertificates
            outputFormat: 'text'
            status: 510
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InvalidLocationCode
            outputFormat: 'text'
            status: 511
          }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListDistributionsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distribution#WithTags': {
      $post:
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: CreateDistributionWithTagsResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: NoSuchOrigin
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: TooManyOrigins
            outputFormat: 'text'
            status: 501
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: TooManyOriginGroupsPerDistribution
            outputFormat: 'text'
            status: 502
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: TooManyCacheBehaviors
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: TooManyCookieNamesInWhiteList
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: InvalidForwardCookies
            outputFormat: 'text'
            status: 505
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: TooManyHeadersInForwardedValues
            outputFormat: 'text'
            status: 506
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: InvalidHeadersForS3Origin
            outputFormat: 'text'
            status: 507
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: InconsistentQuantities
            outputFormat: 'text'
            status: 508
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: InvalidLocationCode
            outputFormat: 'text'
            status: 510
          }
        | {
            input: { query: { WithTags: true } } & {
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
                DistributionConfigWithTags: {
                  DistributionConfig?:
                    | {
                        CallerReference: {}
                        Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultRootObject?: {} | undefined
                        Origins: { Quantity: {}; Items: {} }
                        OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                        DefaultCacheBehavior: {
                          TargetOriginId: {}
                          TrustedSigners?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          TrustedKeyGroups?:
                            | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                            | undefined
                          ViewerProtocolPolicy: {}
                          AllowedMethods?: AllowedMethods | undefined
                          SmoothStreaming?: {} | undefined
                          Compress?: {} | undefined
                          LambdaFunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FunctionAssociations?:
                            | { Quantity: {}; Items?: {} | undefined }
                            | undefined
                          FieldLevelEncryptionId?: {} | undefined
                          RealtimeLogConfigArn?: {} | undefined
                          CachePolicyId?: {} | undefined
                          OriginRequestPolicyId?: {} | undefined
                          ResponseHeadersPolicyId?: {} | undefined
                          ForwardedValues?:
                            | {
                                QueryString: {}
                                Cookies: {
                                  Forward: {}
                                  WhitelistedNames?:
                                    | { Quantity: {}; Items?: {} | undefined }
                                    | undefined
                                }
                                Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                                QueryStringCacheKeys?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                            | undefined
                          MinTTL?: {} | undefined
                          DefaultTTL?: {} | undefined
                          MaxTTL?: {} | undefined
                        }
                        CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                        CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                        Comment: {}
                        Logging?:
                          | { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} }
                          | undefined
                        PriceClass?: {} | undefined
                        Enabled: {}
                        ViewerCertificate?:
                          | {
                              CloudFrontDefaultCertificate?: {} | undefined
                              IAMCertificateId?: {} | undefined
                              ACMCertificateArn?: {} | undefined
                              SSLSupportMethod?: {} | undefined
                              MinimumProtocolVersion?: {} | undefined
                              Certificate?: {} | undefined
                              CertificateSource?: {} | undefined
                            }
                          | undefined
                        Restrictions?:
                          | {
                              GeoRestriction: {
                                RestrictionType: {}
                                Quantity: {}
                                Items?: {} | undefined
                              }
                            }
                          | undefined
                        WebACLId?: {} | undefined
                        HttpVersion?: {} | undefined
                        IsIPV6Enabled?: {} | undefined
                        ContinuousDeploymentPolicyId?: {} | undefined
                        Staging?: {} | undefined
                      }
                    | undefined
                  Tags?: { Items?: {} | undefined } | undefined
                }
              }
            }
            output: InvalidGeoRestrictionParameter
            outputFormat: 'text'
            status: 511
          }
    }
  } & {
    '/2020-05-31/field-level-encryption': {
      $post: {
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
            FieldLevelEncryptionConfig: {
              CallerReference?: {} | undefined
              Comment?: {} | undefined
              QueryArgProfileConfig?:
                | {
                    ForwardWhenQueryArgProfileIsUnknown: {}
                    QueryArgProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                | undefined
              ContentTypeProfileConfig?:
                | {
                    ForwardWhenContentTypeIsUnknown: {}
                    ContentTypeProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                | undefined
            }
          }
        }
        output: CreateFieldLevelEncryptionConfigResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListFieldLevelEncryptionConfigsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/field-level-encryption-profile': {
      $post: {
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
            FieldLevelEncryptionProfileConfig: {
              Name?: {} | undefined
              CallerReference?: {} | undefined
              Comment?: {} | undefined
              EncryptionEntities?: { Quantity: {}; Items?: {} | undefined } | undefined
            }
          }
        }
        output: CreateFieldLevelEncryptionProfileResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListFieldLevelEncryptionProfilesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/function': {
      $post: {
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
            Name: string
            FunctionConfig: { Comment?: {} | undefined; Runtime?: {} | undefined }
            FunctionCode: string
          }
        }
        output: CreateFunctionResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: {
          query: {
            Marker?: string | undefined
            MaxItems?: string | undefined
            Stage?: 'DEVELOPMENT' | 'LIVE' | undefined
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
        output: ListFunctionsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distribution/:DistributionId/invalidation': {
      $post: {
        input: { param: { DistributionId: string } } & {
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
            InvalidationBatch: {
              Paths?: { Quantity: {}; Items?: {} | undefined } | undefined
              CallerReference?: {} | undefined
            }
          }
        }
        output: CreateInvalidationResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { param: { DistributionId: string } } & {
          query: { Marker?: string | undefined; MaxItems?: string | undefined }
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
        output: ListInvalidationsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/key-group': {
      $post: {
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
            KeyGroupConfig: {
              Name?: {} | undefined
              Items?: {} | undefined
              Comment?: {} | undefined
            }
          }
        }
        output: CreateKeyGroupResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListKeyGroupsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distributions/:DistributionId/monitoring-subscription/': {
      $post: {
        input: { param: { DistributionId: string } } & {
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
            MonitoringSubscription: {
              RealtimeMetricsSubscriptionConfig?:
                | { RealtimeMetricsSubscriptionStatus: {} }
                | undefined
            }
          }
        }
        output: CreateMonitoringSubscriptionResult
        outputFormat: 'text'
        status: 200
      }
      $delete: {
        input: { param: { DistributionId: string } } & {
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
        output: DeleteMonitoringSubscriptionResult
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { DistributionId: string } } & {
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
        output: GetMonitoringSubscriptionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-access-control': {
      $post: {
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
            OriginAccessControlConfig: {
              Name?: {} | undefined
              Description?: {} | undefined
              SigningProtocol?: {} | undefined
              SigningBehavior?: {} | undefined
              OriginAccessControlOriginType?: {} | undefined
            }
          }
        }
        output: CreateOriginAccessControlResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListOriginAccessControlsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-request-policy': {
      $post: {
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
            OriginRequestPolicyConfig: {
              Comment?: {} | undefined
              Name?: {} | undefined
              HeadersConfig?: { HeaderBehavior: {}; Headers?: Headers | undefined } | undefined
              CookiesConfig?: { CookieBehavior: {}; Cookies?: CookieNames | undefined } | undefined
              QueryStringsConfig?:
                | {
                    QueryStringBehavior: {}
                    QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                | undefined
            }
          }
        }
        output: CreateOriginRequestPolicyResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: {
          query: {
            Type?: 'managed' | 'custom' | undefined
            Marker?: string | undefined
            MaxItems?: string | undefined
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
        output: ListOriginRequestPoliciesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/public-key': {
      $post: {
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
            PublicKeyConfig: {
              CallerReference?: {} | undefined
              Name?: {} | undefined
              EncodedKey?: {} | undefined
              Comment?: {} | undefined
            }
          }
        }
        output: CreatePublicKeyResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListPublicKeysResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/realtime-log-config': {
      $post: {
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
        } & { json: { EndPoints: EndPoint[]; Fields: {}[]; Name: string; SamplingRate: number } }
        output: CreateRealtimeLogConfigResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { MaxItems?: string | undefined; Marker?: string | undefined } } & {
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
        output: ListRealtimeLogConfigsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/response-headers-policy': {
      $post: {
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
            ResponseHeadersPolicyConfig: {
              Comment?: {} | undefined
              Name?: {} | undefined
              CorsConfig?:
                | {
                    AccessControlAllowOrigins: { Quantity: {}; Items: {} }
                    AccessControlAllowHeaders: { Quantity: {}; Items: {} }
                    AccessControlAllowMethods: { Quantity: {}; Items: {} }
                    AccessControlAllowCredentials: {}
                    AccessControlExposeHeaders?:
                      | { Quantity: {}; Items?: {} | undefined }
                      | undefined
                    AccessControlMaxAgeSec?: {} | undefined
                    OriginOverride: {}
                  }
                | undefined
              SecurityHeadersConfig?:
                | {
                    XSSProtection?:
                      | {
                          Override: {}
                          Protection: {}
                          ModeBlock?: {} | undefined
                          ReportUri?: {} | undefined
                        }
                      | undefined
                    FrameOptions?: { Override: {}; FrameOption: {} } | undefined
                    ReferrerPolicy?: { Override: {}; ReferrerPolicy: {} } | undefined
                    ContentSecurityPolicy?: { Override: {}; ContentSecurityPolicy: {} } | undefined
                    ContentTypeOptions?: { Override: {} } | undefined
                    StrictTransportSecurity?:
                      | {
                          Override: {}
                          IncludeSubdomains?: {} | undefined
                          Preload?: {} | undefined
                          AccessControlMaxAgeSec: {}
                        }
                      | undefined
                  }
                | undefined
              ServerTimingHeadersConfig?: { Enabled: {}; SamplingRate?: {} | undefined } | undefined
              CustomHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
              RemoveHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
            }
          }
        }
        output: CreateResponseHeadersPolicyResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: {
          query: {
            Type?: 'managed' | 'custom' | undefined
            Marker?: string | undefined
            MaxItems?: string | undefined
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
        output: ListResponseHeadersPoliciesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/streaming-distribution': {
      $post: {
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
            StreamingDistributionConfig: {
              CallerReference?: {} | undefined
              S3Origin?: { DomainName: {}; OriginAccessIdentity: {} } | undefined
              Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
              Comment?: {} | undefined
              Logging?: { Enabled: {}; Bucket: {}; Prefix: {} } | undefined
              TrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
              PriceClass?: {} | undefined
              Enabled?: {} | undefined
            }
          }
        }
        output: CreateStreamingDistributionResult
        outputFormat: 'text'
        status: 201
      }
      $get: {
        input: { query: { Marker?: string | undefined; MaxItems?: string | undefined } } & {
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
        output: ListStreamingDistributionsResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/streaming-distribution#WithTags': {
      $post: {
        input: { query: { WithTags: true } } & {
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
            StreamingDistributionConfigWithTags: {
              StreamingDistributionConfig?:
                | {
                    CallerReference: {}
                    S3Origin: { DomainName: {}; OriginAccessIdentity: {} }
                    Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                    Comment: {}
                    Logging?: { Enabled: {}; Bucket: {}; Prefix: {} } | undefined
                    TrustedSigners: { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                    PriceClass?: {} | undefined
                    Enabled: {}
                  }
                | undefined
              Tags?: { Items?: {} | undefined } | undefined
            }
          }
        }
        output: CreateStreamingDistributionWithTagsResult
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/2020-05-31/cache-policy/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetCachePolicyResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            CachePolicyConfig: {
              Comment?: {} | undefined
              Name?: {} | undefined
              DefaultTTL?: {} | undefined
              MaxTTL?: {} | undefined
              MinTTL?: {} | undefined
              ParametersInCacheKeyAndForwardedToOrigin?:
                | {
                    EnableAcceptEncodingGzip: {}
                    EnableAcceptEncodingBrotli?: {} | undefined
                    HeadersConfig: { HeaderBehavior: {}; Headers?: Headers | undefined }
                    CookiesConfig: { CookieBehavior: {}; Cookies?: CookieNames | undefined }
                    QueryStringsConfig: {
                      QueryStringBehavior: {}
                      QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
                    }
                  }
                | undefined
            }
          }
        }
        output: UpdateCachePolicyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-access-identity/cloudfront/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetCloudFrontOriginAccessIdentityResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/continuous-deployment-policy/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetContinuousDeploymentPolicyResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            ContinuousDeploymentPolicyConfig: {
              StagingDistributionDnsNames?: { Quantity: {}; Items?: {} | undefined } | undefined
              Enabled?: {} | undefined
              TrafficConfig?:
                | {
                    SingleWeightConfig?:
                      | {
                          Weight: {}
                          SessionStickinessConfig?: SessionStickinessConfig | undefined
                        }
                      | undefined
                    SingleHeaderConfig?: { Header: {}; Value: {} } | undefined
                    Type: {}
                  }
                | undefined
            }
          }
        }
        output: UpdateContinuousDeploymentPolicyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distribution/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetDistributionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/field-level-encryption/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetFieldLevelEncryptionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/field-level-encryption-profile/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetFieldLevelEncryptionProfileResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/function/:Name#If-Match': {
      $delete: {
        input: { param: { Name: string } } & {
          header: {
            'If-Match': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { Name: string } } & {
          header: {
            'If-Match': string
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
            FunctionConfig: { Comment?: {} | undefined; Runtime?: {} | undefined }
            FunctionCode: string
          }
        }
        output: UpdateFunctionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/key-group/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetKeyGroupResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            KeyGroupConfig: {
              Name?: {} | undefined
              Items?: {} | undefined
              Comment?: {} | undefined
            }
          }
        }
        output: UpdateKeyGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-access-control/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetOriginAccessControlResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-request-policy/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetOriginRequestPolicyResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            OriginRequestPolicyConfig: {
              Comment?: {} | undefined
              Name?: {} | undefined
              HeadersConfig?: { HeaderBehavior: {}; Headers?: Headers | undefined } | undefined
              CookiesConfig?: { CookieBehavior: {}; Cookies?: CookieNames | undefined } | undefined
              QueryStringsConfig?:
                | {
                    QueryStringBehavior: {}
                    QueryStrings?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                | undefined
            }
          }
        }
        output: UpdateOriginRequestPolicyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/public-key/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetPublicKeyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/delete-realtime-log-config/': {
      $post: {
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
        } & { json: { Name?: string | undefined; ARN?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2020-05-31/response-headers-policy/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetResponseHeadersPolicyResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            ResponseHeadersPolicyConfig: {
              Comment?: {} | undefined
              Name?: {} | undefined
              CorsConfig?:
                | {
                    AccessControlAllowOrigins: { Quantity: {}; Items: {} }
                    AccessControlAllowHeaders: { Quantity: {}; Items: {} }
                    AccessControlAllowMethods: { Quantity: {}; Items: {} }
                    AccessControlAllowCredentials: {}
                    AccessControlExposeHeaders?:
                      | { Quantity: {}; Items?: {} | undefined }
                      | undefined
                    AccessControlMaxAgeSec?: {} | undefined
                    OriginOverride: {}
                  }
                | undefined
              SecurityHeadersConfig?:
                | {
                    XSSProtection?:
                      | {
                          Override: {}
                          Protection: {}
                          ModeBlock?: {} | undefined
                          ReportUri?: {} | undefined
                        }
                      | undefined
                    FrameOptions?: { Override: {}; FrameOption: {} } | undefined
                    ReferrerPolicy?: { Override: {}; ReferrerPolicy: {} } | undefined
                    ContentSecurityPolicy?: { Override: {}; ContentSecurityPolicy: {} } | undefined
                    ContentTypeOptions?: { Override: {} } | undefined
                    StrictTransportSecurity?:
                      | {
                          Override: {}
                          IncludeSubdomains?: {} | undefined
                          Preload?: {} | undefined
                          AccessControlMaxAgeSec: {}
                        }
                      | undefined
                  }
                | undefined
              ServerTimingHeadersConfig?: { Enabled: {}; SamplingRate?: {} | undefined } | undefined
              CustomHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
              RemoveHeadersConfig?: { Quantity: {}; Items?: {} | undefined } | undefined
            }
          }
        }
        output: UpdateResponseHeadersPolicyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/streaming-distribution/:Id': {
      $delete: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetStreamingDistributionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/function/:Name/describe': {
      $get: {
        input: { param: { Name: string } } & {
          query: { Stage?: 'DEVELOPMENT' | 'LIVE' | undefined }
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
        output: DescribeFunctionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/cache-policy/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetCachePolicyConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-access-identity/cloudfront/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetCloudFrontOriginAccessIdentityConfigResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            CloudFrontOriginAccessIdentityConfig: {
              CallerReference?: {} | undefined
              Comment?: {} | undefined
            }
          }
        }
        output: UpdateCloudFrontOriginAccessIdentityResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/continuous-deployment-policy/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetContinuousDeploymentPolicyConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distribution/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetDistributionConfigResult
        outputFormat: 'text'
        status: 200
      }
      $put:
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: UpdateDistributionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: NoSuchOrigin
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyOrigins
            outputFormat: 'text'
            status: 501
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyOriginGroupsPerDistribution
            outputFormat: 'text'
            status: 502
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyCacheBehaviors
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyCookieNamesInWhiteList
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InvalidForwardCookies
            outputFormat: 'text'
            status: 505
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: TooManyHeadersInForwardedValues
            outputFormat: 'text'
            status: 506
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InvalidHeadersForS3Origin
            outputFormat: 'text'
            status: 507
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InconsistentQuantities
            outputFormat: 'text'
            status: 508
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InvalidLocationCode
            outputFormat: 'text'
            status: 510
          }
        | {
            input: { param: { Id: string } } & {
              header: {
                'If-Match'?: string | undefined
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
                DistributionConfig: {
                  CallerReference?: {} | undefined
                  Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultRootObject?: {} | undefined
                  Origins?: { Quantity: {}; Items: {} } | undefined
                  OriginGroups?: { Quantity: {}; Items?: {} | undefined } | undefined
                  DefaultCacheBehavior?:
                    | {
                        TargetOriginId: {}
                        TrustedSigners?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        TrustedKeyGroups?:
                          | { Enabled: {}; Quantity: {}; Items?: {} | undefined }
                          | undefined
                        ViewerProtocolPolicy: {}
                        AllowedMethods?: AllowedMethods | undefined
                        SmoothStreaming?: {} | undefined
                        Compress?: {} | undefined
                        LambdaFunctionAssociations?:
                          | { Quantity: {}; Items?: {} | undefined }
                          | undefined
                        FunctionAssociations?: { Quantity: {}; Items?: {} | undefined } | undefined
                        FieldLevelEncryptionId?: {} | undefined
                        RealtimeLogConfigArn?: {} | undefined
                        CachePolicyId?: {} | undefined
                        OriginRequestPolicyId?: {} | undefined
                        ResponseHeadersPolicyId?: {} | undefined
                        ForwardedValues?:
                          | {
                              QueryString: {}
                              Cookies: {
                                Forward: {}
                                WhitelistedNames?:
                                  | { Quantity: {}; Items?: {} | undefined }
                                  | undefined
                              }
                              Headers?: { Quantity: {}; Items?: {} | undefined } | undefined
                              QueryStringCacheKeys?:
                                | { Quantity: {}; Items?: {} | undefined }
                                | undefined
                            }
                          | undefined
                        MinTTL?: {} | undefined
                        DefaultTTL?: {} | undefined
                        MaxTTL?: {} | undefined
                      }
                    | undefined
                  CacheBehaviors?: { Quantity: {}; Items?: {} | undefined } | undefined
                  CustomErrorResponses?: { Quantity: {}; Items?: {} | undefined } | undefined
                  Comment?: {} | undefined
                  Logging?: { Enabled: {}; IncludeCookies: {}; Bucket: {}; Prefix: {} } | undefined
                  PriceClass?: {} | undefined
                  Enabled?: {} | undefined
                  ViewerCertificate?:
                    | {
                        CloudFrontDefaultCertificate?: {} | undefined
                        IAMCertificateId?: {} | undefined
                        ACMCertificateArn?: {} | undefined
                        SSLSupportMethod?: {} | undefined
                        MinimumProtocolVersion?: {} | undefined
                        Certificate?: {} | undefined
                        CertificateSource?: {} | undefined
                      }
                    | undefined
                  Restrictions?:
                    | {
                        GeoRestriction: {
                          RestrictionType: {}
                          Quantity: {}
                          Items?: {} | undefined
                        }
                      }
                    | undefined
                  WebACLId?: {} | undefined
                  HttpVersion?: {} | undefined
                  IsIPV6Enabled?: {} | undefined
                  ContinuousDeploymentPolicyId?: {} | undefined
                  Staging?: {} | undefined
                }
              }
            }
            output: InvalidGeoRestrictionParameter
            outputFormat: 'text'
            status: 511
          }
    }
  } & {
    '/2020-05-31/field-level-encryption/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetFieldLevelEncryptionConfigResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            FieldLevelEncryptionConfig: {
              CallerReference?: {} | undefined
              Comment?: {} | undefined
              QueryArgProfileConfig?:
                | {
                    ForwardWhenQueryArgProfileIsUnknown: {}
                    QueryArgProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                | undefined
              ContentTypeProfileConfig?:
                | {
                    ForwardWhenContentTypeIsUnknown: {}
                    ContentTypeProfiles?: { Quantity: {}; Items?: {} | undefined } | undefined
                  }
                | undefined
            }
          }
        }
        output: UpdateFieldLevelEncryptionConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/field-level-encryption-profile/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetFieldLevelEncryptionProfileConfigResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            FieldLevelEncryptionProfileConfig: {
              Name?: {} | undefined
              CallerReference?: {} | undefined
              Comment?: {} | undefined
              EncryptionEntities?: { Quantity: {}; Items?: {} | undefined } | undefined
            }
          }
        }
        output: UpdateFieldLevelEncryptionProfileResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/function/:Name': {
      $get: {
        input: { param: { Name: string } } & {
          query: { Stage?: 'DEVELOPMENT' | 'LIVE' | undefined }
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
        output: GetFunctionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distribution/:DistributionId/invalidation/:Id': {
      $get: {
        input: { param: { DistributionId: string; Id: string } } & {
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
        output: GetInvalidationResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/key-group/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetKeyGroupConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-access-control/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetOriginAccessControlConfigResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            OriginAccessControlConfig: {
              Name?: {} | undefined
              Description?: {} | undefined
              SigningProtocol?: {} | undefined
              SigningBehavior?: {} | undefined
              OriginAccessControlOriginType?: {} | undefined
            }
          }
        }
        output: UpdateOriginAccessControlResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/origin-request-policy/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetOriginRequestPolicyConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/public-key/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetPublicKeyConfigResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            PublicKeyConfig: {
              CallerReference?: {} | undefined
              Name?: {} | undefined
              EncodedKey?: {} | undefined
              Comment?: {} | undefined
            }
          }
        }
        output: UpdatePublicKeyResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/get-realtime-log-config/': {
      $post: {
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
        } & { json: { Name?: string | undefined; ARN?: string | undefined } }
        output: GetRealtimeLogConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/response-headers-policy/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetResponseHeadersPolicyConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/streaming-distribution/:Id/config': {
      $get: {
        input: { param: { Id: string } } & {
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
        output: GetStreamingDistributionConfigResult
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Id: string } } & {
          header: {
            'If-Match'?: string | undefined
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
            StreamingDistributionConfig: {
              CallerReference?: {} | undefined
              S3Origin?: { DomainName: {}; OriginAccessIdentity: {} } | undefined
              Aliases?: { Quantity: {}; Items?: {} | undefined } | undefined
              Comment?: {} | undefined
              Logging?: { Enabled: {}; Bucket: {}; Prefix: {} } | undefined
              TrustedSigners?: { Enabled: {}; Quantity: {}; Items?: {} | undefined } | undefined
              PriceClass?: {} | undefined
              Enabled?: {} | undefined
            }
          }
        }
        output: UpdateStreamingDistributionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/conflicting-alias#DistributionId&Alias': {
      $get: {
        input: {
          query: {
            DistributionId: string
            Alias: string
            Marker?: string | undefined
            MaxItems?: number | undefined
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
        output: ListConflictingAliasesResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distributionsByCachePolicyId/:CachePolicyId': {
      $get: {
        input: { param: { CachePolicyId: string } } & {
          query: { Marker?: string | undefined; MaxItems?: string | undefined }
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
        output: ListDistributionsByCachePolicyIdResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distributionsByKeyGroupId/:KeyGroupId': {
      $get: {
        input: { param: { KeyGroupId: string } } & {
          query: { Marker?: string | undefined; MaxItems?: string | undefined }
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
        output: ListDistributionsByKeyGroupResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distributionsByOriginRequestPolicyId/:OriginRequestPolicyId': {
      $get: {
        input: { param: { OriginRequestPolicyId: string } } & {
          query: { Marker?: string | undefined; MaxItems?: string | undefined }
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
        output: ListDistributionsByOriginRequestPolicyIdResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distributionsByRealtimeLogConfig/': {
      $post: {
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
            Marker?: string | undefined
            MaxItems?: string | undefined
            RealtimeLogConfigName?: string | undefined
            RealtimeLogConfigArn?: string | undefined
          }
        }
        output: ListDistributionsByRealtimeLogConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distributionsByResponseHeadersPolicyId/:ResponseHeadersPolicyId': {
      $get: {
        input: { param: { ResponseHeadersPolicyId: string } } & {
          query: { Marker?: string | undefined; MaxItems?: string | undefined }
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
        output: ListDistributionsByResponseHeadersPolicyIdResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/distributionsByWebACLId/:WebACLId': {
      $get: {
        input: { param: { WebACLId: string } } & {
          query: { Marker?: string | undefined; MaxItems?: string | undefined }
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
        output: ListDistributionsByWebACLIdResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/tagging#Resource': {
      $get: {
        input: { query: { Resource: string } } & {
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
        output: ListTagsForResourceResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/function/:Name/publish#If-Match': {
      $post: {
        input: { param: { Name: string } } & {
          header: {
            'If-Match': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PublishFunctionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/tagging#Operation=Tag&Resource': {
      $post: {
        input: { query: { Resource: string; Operation: 'Tag' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { Items?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2020-05-31/function/:Name/test#If-Match': {
      $post: {
        input: { param: { Name: string } } & {
          header: {
            'If-Match': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Stage?: 'DEVELOPMENT' | 'LIVE' | undefined; EventObject: string } }
        output: TestFunctionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2020-05-31/tagging#Operation=Untag&Resource': {
      $post: {
        input: { query: { Resource: string; Operation: 'Untag' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TagKeys: { Items?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2020-05-31/distribution/:Id/promote-staging-config': {
      $put:
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UpdateDistributionWithStagingConfigResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NoSuchOrigin
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyOrigins
            outputFormat: 'text'
            status: 501
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyOriginGroupsPerDistribution
            outputFormat: 'text'
            status: 502
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyCacheBehaviors
            outputFormat: 'text'
            status: 503
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyCookieNamesInWhiteList
            outputFormat: 'text'
            status: 504
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidForwardCookies
            outputFormat: 'text'
            status: 505
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyHeadersInForwardedValues
            outputFormat: 'text'
            status: 506
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidHeadersForS3Origin
            outputFormat: 'text'
            status: 507
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InconsistentQuantities
            outputFormat: 'text'
            status: 508
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidLocationCode
            outputFormat: 'text'
            status: 510
          }
        | {
            input: { param: { Id: string } } & {
              query: { StagingDistributionId?: string | undefined }
            } & {
              header: {
                'If-Match'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidGeoRestrictionParameter
            outputFormat: 'text'
            status: 511
          }
    }
  } & {
    '/2020-05-31/realtime-log-config/': {
      $put: {
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
            EndPoints?: EndPoint[] | undefined
            Fields?: {}[] | undefined
            Name?: string | undefined
            ARN?: string | undefined
            SamplingRate?: number | undefined
          }
        }
        output: UpdateRealtimeLogConfigResult
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
