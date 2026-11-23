type ChangeInfo = { Id: {}; Status: {}; SubmittedAt: {}; Comment?: {} | undefined }
type ActivateKeySigningKeyResponse = { ChangeInfo: ChangeInfo }
type ConcurrentModification = { [x: string]: unknown }
type NoSuchKeySigningKey = { [x: string]: unknown }
type InvalidKeySigningKeyStatus = { [x: string]: unknown }
type InvalidSigningStatus = { [x: string]: unknown }
type InvalidKMSArn = { [x: string]: unknown }
type InvalidInput = { [x: string]: unknown }
type VPCId = string
type AssociateVPCWithHostedZoneResponse = {
  ChangeInfo: { Id: {}; Status: {}; SubmittedAt: {}; Comment?: {} | undefined }
}
type NoSuchHostedZone = { [x: string]: unknown }
type NotAuthorizedException = { [x: string]: unknown }
type InvalidVPCId = { [x: string]: unknown }
type PublicZoneVPCAssociation = { [x: string]: unknown }
type ConflictingDomainExists = { [x: string]: unknown }
type LimitsExceeded = { [x: string]: unknown }
type PriorRequestNotComplete = { [x: string]: unknown }
type CidrCollectionChange = { LocationName: {}; Action: {}; CidrList: {} }
type ChangeCidrCollectionResponse = { Id: {} }
type NoSuchCidrCollectionException = { [x: string]: unknown }
type CidrCollectionVersionMismatchException = { [x: string]: unknown }
type CidrBlockInUseException = { [x: string]: unknown }
type DeleteCidrCollectionResponse = { [x: string]: unknown }
type CidrCollectionInUseException = { [x: string]: unknown }
type ListCidrLocationsResponse = { NextToken?: {} | undefined; CidrLocations?: {} | undefined }
type ChangeResourceRecordSetsResponse = {
  ChangeInfo: { Id: {}; Status: {}; SubmittedAt: {}; Comment?: {} | undefined }
}
type NoSuchHealthCheck = { [x: string]: unknown }
type InvalidChangeBatch = { [x: string]: unknown }
type ChangeTagsForResourceResponse = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type ListTagsForResourceResponse = {
  ResourceTagSet: {
    ResourceType?: {} | undefined
    ResourceId?: {} | undefined
    Tags?: {} | undefined
  }
}
type CreateCidrCollectionResponse = {
  Collection?:
    | { Arn?: {} | undefined; Id?: {} | undefined; Name?: {} | undefined; Version?: {} | undefined }
    | undefined
}
type CidrCollectionAlreadyExistsException = { [x: string]: unknown }
type ListCidrCollectionsResponse = { NextToken?: {} | undefined; CidrCollections?: {} | undefined }
type CreateHealthCheckResponse = {
  HealthCheck: {
    Id: {}
    CallerReference: {}
    LinkedService?: { ServicePrincipal?: {} | undefined; Description?: {} | undefined } | undefined
    HealthCheckConfig: {
      IPAddress?: {} | undefined
      Port?: {} | undefined
      Type: {}
      ResourcePath?: {} | undefined
      FullyQualifiedDomainName?: {} | undefined
      SearchString?: {} | undefined
      RequestInterval?: {} | undefined
      FailureThreshold?: {} | undefined
      MeasureLatency?: {} | undefined
      Inverted?: {} | undefined
      Disabled?: {} | undefined
      HealthThreshold?: {} | undefined
      ChildHealthChecks?: {} | undefined
      EnableSNI?: {} | undefined
      Regions?: {} | undefined
      AlarmIdentifier?: { Region: {}; Name: {} } | undefined
      InsufficientDataHealthStatus?: {} | undefined
      RoutingControlArn?: {} | undefined
    }
    HealthCheckVersion: {}
    CloudWatchAlarmConfiguration?:
      | {
          EvaluationPeriods: {}
          Threshold: {}
          ComparisonOperator: {}
          Period: {}
          MetricName: {}
          Namespace: {}
          Statistic: {}
          Dimensions?: {} | undefined
        }
      | undefined
  }
}
type TooManyHealthChecks = { [x: string]: unknown }
type HealthCheckAlreadyExists = { [x: string]: unknown }
type ListHealthChecksResponse = {
  HealthChecks: {}
  Marker: {}
  IsTruncated: {}
  NextMarker?: {} | undefined
  MaxItems: {}
}
type IncompatibleVersion = { [x: string]: unknown }
type CreateHostedZoneResponse = {
  HostedZone: {
    Id: {}
    Name: {}
    CallerReference: {}
    Config?: { Comment?: {} | undefined; PrivateZone?: {} | undefined } | undefined
    ResourceRecordSetCount?: {} | undefined
    LinkedService?: { ServicePrincipal?: {} | undefined; Description?: {} | undefined } | undefined
  }
  ChangeInfo: { Id: {}; Status: {}; SubmittedAt: {}; Comment?: {} | undefined }
  DelegationSet: { Id?: {} | undefined; CallerReference?: {} | undefined; NameServers: {} }
  VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
}
type InvalidDomainName = { [x: string]: unknown }
type HostedZoneAlreadyExists = { [x: string]: unknown }
type TooManyHostedZones = { [x: string]: unknown }
type DelegationSetNotAvailable = { [x: string]: unknown }
type NoSuchDelegationSet = { [x: string]: unknown }
type DelegationSetNotReusable = { [x: string]: unknown }
type ListHostedZonesResponse = {
  HostedZones: {}
  Marker: {}
  IsTruncated: {}
  NextMarker?: {} | undefined
  MaxItems: {}
}
type CreateKeySigningKeyResponse = {
  ChangeInfo: ChangeInfo
  KeySigningKey: {
    Name?: {} | undefined
    KmsArn?: {} | undefined
    Flag?: {} | undefined
    SigningAlgorithmMnemonic?: {} | undefined
    SigningAlgorithmType?: {} | undefined
    DigestAlgorithmMnemonic?: {} | undefined
    DigestAlgorithmType?: {} | undefined
    KeyTag?: {} | undefined
    DigestValue?: {} | undefined
    PublicKey?: {} | undefined
    DSRecord?: {} | undefined
    DNSKEYRecord?: {} | undefined
    Status?: {} | undefined
    StatusMessage?: {} | undefined
    CreatedDate?: {} | undefined
    LastModifiedDate?: {} | undefined
  }
}
type InvalidArgument = { [x: string]: unknown }
type InvalidKeySigningKeyName = { [x: string]: unknown }
type KeySigningKeyAlreadyExists = { [x: string]: unknown }
type TooManyKeySigningKeys = { [x: string]: unknown }
type CreateQueryLoggingConfigResponse = {
  QueryLoggingConfig: { Id: {}; HostedZoneId: {}; CloudWatchLogsLogGroupArn: {} }
}
type NoSuchCloudWatchLogsLogGroup = { [x: string]: unknown }
type QueryLoggingConfigAlreadyExists = { [x: string]: unknown }
type InsufficientCloudWatchLogsResourcePolicy = { [x: string]: unknown }
type ListQueryLoggingConfigsResponse = { QueryLoggingConfigs: {}; NextToken?: {} | undefined }
type InvalidPaginationToken = { [x: string]: unknown }
type CreateReusableDelegationSetResponse = {
  DelegationSet: { Id?: {} | undefined; CallerReference?: {} | undefined; NameServers: {} }
}
type DelegationSetAlreadyCreated = { [x: string]: unknown }
type HostedZoneNotFound = { [x: string]: unknown }
type DelegationSetAlreadyReusable = { [x: string]: unknown }
type ListReusableDelegationSetsResponse = {
  DelegationSets: {}
  Marker: {}
  IsTruncated: {}
  NextMarker?: {} | undefined
  MaxItems: {}
}
type CreateTrafficPolicyResponse = {
  TrafficPolicy: { Id: {}; Version: {}; Name: {}; Type: {}; Document: {}; Comment?: {} | undefined }
}
type TooManyTrafficPolicies = { [x: string]: unknown }
type TrafficPolicyAlreadyExists = { [x: string]: unknown }
type InvalidTrafficPolicyDocument = { [x: string]: unknown }
type CreateTrafficPolicyInstanceResponse = {
  TrafficPolicyInstance: {
    Id: {}
    HostedZoneId: {}
    Name: {}
    TTL: {}
    State: {}
    Message: {}
    TrafficPolicyId: {}
    TrafficPolicyVersion: {}
    TrafficPolicyType: {}
  }
}
type TooManyTrafficPolicyInstances = { [x: string]: unknown }
type NoSuchTrafficPolicy = { [x: string]: unknown }
type TrafficPolicyInstanceAlreadyExists = { [x: string]: unknown }
type CreateTrafficPolicyVersionResponse = {
  TrafficPolicy: { Id: {}; Version: {}; Name: {}; Type: {}; Document: {}; Comment?: {} | undefined }
}
type TooManyTrafficPolicyVersionsForCurrentPolicy = { [x: string]: unknown }
type CreateVPCAssociationAuthorizationResponse = {
  HostedZoneId: {}
  VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
}
type TooManyVPCAssociationAuthorizations = { [x: string]: unknown }
type ListVPCAssociationAuthorizationsResponse = {
  HostedZoneId: {}
  NextToken?: {} | undefined
  VPCs: {}
}
type DeactivateKeySigningKeyResponse = { ChangeInfo: ChangeInfo }
type KeySigningKeyInUse = { [x: string]: unknown }
type KeySigningKeyInParentDSRecord = { [x: string]: unknown }
type DeleteHealthCheckResponse = { [x: string]: unknown }
type HealthCheckInUse = { [x: string]: unknown }
type GetHealthCheckResponse = {
  HealthCheck: {
    Id: {}
    CallerReference: {}
    LinkedService?: { ServicePrincipal?: {} | undefined; Description?: {} | undefined } | undefined
    HealthCheckConfig: {
      IPAddress?: {} | undefined
      Port?: {} | undefined
      Type: {}
      ResourcePath?: {} | undefined
      FullyQualifiedDomainName?: {} | undefined
      SearchString?: {} | undefined
      RequestInterval?: {} | undefined
      FailureThreshold?: {} | undefined
      MeasureLatency?: {} | undefined
      Inverted?: {} | undefined
      Disabled?: {} | undefined
      HealthThreshold?: {} | undefined
      ChildHealthChecks?: {} | undefined
      EnableSNI?: {} | undefined
      Regions?: {} | undefined
      AlarmIdentifier?: { Region: {}; Name: {} } | undefined
      InsufficientDataHealthStatus?: {} | undefined
      RoutingControlArn?: {} | undefined
    }
    HealthCheckVersion: {}
    CloudWatchAlarmConfiguration?:
      | {
          EvaluationPeriods: {}
          Threshold: {}
          ComparisonOperator: {}
          Period: {}
          MetricName: {}
          Namespace: {}
          Statistic: {}
          Dimensions?: {} | undefined
        }
      | undefined
  }
}
type UpdateHealthCheckResponse = {
  HealthCheck: {
    Id: {}
    CallerReference: {}
    LinkedService?: { ServicePrincipal?: {} | undefined; Description?: {} | undefined } | undefined
    HealthCheckConfig: {
      IPAddress?: {} | undefined
      Port?: {} | undefined
      Type: {}
      ResourcePath?: {} | undefined
      FullyQualifiedDomainName?: {} | undefined
      SearchString?: {} | undefined
      RequestInterval?: {} | undefined
      FailureThreshold?: {} | undefined
      MeasureLatency?: {} | undefined
      Inverted?: {} | undefined
      Disabled?: {} | undefined
      HealthThreshold?: {} | undefined
      ChildHealthChecks?: {} | undefined
      EnableSNI?: {} | undefined
      Regions?: {} | undefined
      AlarmIdentifier?: { Region: {}; Name: {} } | undefined
      InsufficientDataHealthStatus?: {} | undefined
      RoutingControlArn?: {} | undefined
    }
    HealthCheckVersion: {}
    CloudWatchAlarmConfiguration?:
      | {
          EvaluationPeriods: {}
          Threshold: {}
          ComparisonOperator: {}
          Period: {}
          MetricName: {}
          Namespace: {}
          Statistic: {}
          Dimensions?: {} | undefined
        }
      | undefined
  }
}
type HealthCheckVersionMismatch = { [x: string]: unknown }
type DeleteHostedZoneResponse = {
  ChangeInfo: { Id: {}; Status: {}; SubmittedAt: {}; Comment?: {} | undefined }
}
type HostedZoneNotEmpty = { [x: string]: unknown }
type GetHostedZoneResponse = {
  HostedZone: {
    Id: {}
    Name: {}
    CallerReference: {}
    Config?: { Comment?: {} | undefined; PrivateZone?: {} | undefined } | undefined
    ResourceRecordSetCount?: {} | undefined
    LinkedService?: { ServicePrincipal?: {} | undefined; Description?: {} | undefined } | undefined
  }
  DelegationSet?:
    | { Id?: {} | undefined; CallerReference?: {} | undefined; NameServers: {} }
    | undefined
  VPCs?: {} | undefined
}
type UpdateHostedZoneCommentResponse = {
  HostedZone: {
    Id: {}
    Name: {}
    CallerReference: {}
    Config?: { Comment?: {} | undefined; PrivateZone?: {} | undefined } | undefined
    ResourceRecordSetCount?: {} | undefined
    LinkedService?: { ServicePrincipal?: {} | undefined; Description?: {} | undefined } | undefined
  }
}
type DeleteKeySigningKeyResponse = { ChangeInfo: ChangeInfo }
type DeleteQueryLoggingConfigResponse = { [x: string]: unknown }
type NoSuchQueryLoggingConfig = { [x: string]: unknown }
type GetQueryLoggingConfigResponse = {
  QueryLoggingConfig: { Id: {}; HostedZoneId: {}; CloudWatchLogsLogGroupArn: {} }
}
type DeleteReusableDelegationSetResponse = { [x: string]: unknown }
type DelegationSetInUse = { [x: string]: unknown }
type GetReusableDelegationSetResponse = {
  DelegationSet: { Id?: {} | undefined; CallerReference?: {} | undefined; NameServers: {} }
}
type DeleteTrafficPolicyResponse = { [x: string]: unknown }
type TrafficPolicyInUse = { [x: string]: unknown }
type GetTrafficPolicyResponse = {
  TrafficPolicy: { Id: {}; Version: {}; Name: {}; Type: {}; Document: {}; Comment?: {} | undefined }
}
type UpdateTrafficPolicyCommentResponse = {
  TrafficPolicy: { Id: {}; Version: {}; Name: {}; Type: {}; Document: {}; Comment?: {} | undefined }
}
type DeleteTrafficPolicyInstanceResponse = { [x: string]: unknown }
type NoSuchTrafficPolicyInstance = { [x: string]: unknown }
type GetTrafficPolicyInstanceResponse = {
  TrafficPolicyInstance: {
    Id: {}
    HostedZoneId: {}
    Name: {}
    TTL: {}
    State: {}
    Message: {}
    TrafficPolicyId: {}
    TrafficPolicyVersion: {}
    TrafficPolicyType: {}
  }
}
type UpdateTrafficPolicyInstanceResponse = {
  TrafficPolicyInstance: {
    Id: {}
    HostedZoneId: {}
    Name: {}
    TTL: {}
    State: {}
    Message: {}
    TrafficPolicyId: {}
    TrafficPolicyVersion: {}
    TrafficPolicyType: {}
  }
}
type ConflictingTypes = { [x: string]: unknown }
type DeleteVPCAssociationAuthorizationResponse = { [x: string]: unknown }
type VPCAssociationAuthorizationNotFound = { [x: string]: unknown }
type DisableHostedZoneDNSSECResponse = { ChangeInfo: ChangeInfo }
type DNSSECNotFound = { [x: string]: unknown }
type DisassociateVPCFromHostedZoneResponse = {
  ChangeInfo: { Id: {}; Status: {}; SubmittedAt: {}; Comment?: {} | undefined }
}
type VPCAssociationNotFound = { [x: string]: unknown }
type LastVPCAssociation = { [x: string]: unknown }
type EnableHostedZoneDNSSECResponse = { ChangeInfo: ChangeInfo }
type KeySigningKeyWithActiveStatusNotFound = { [x: string]: unknown }
type HostedZonePartiallyDelegated = { [x: string]: unknown }
type GetAccountLimitResponse = { Limit: { Type: {}; Value: {} }; Count: {} }
type GetChangeResponse = {
  ChangeInfo: { Id: {}; Status: {}; SubmittedAt: {}; Comment?: {} | undefined }
}
type NoSuchChange = { [x: string]: unknown }
type GetCheckerIpRangesResponse = { CheckerIpRanges: {} }
type GetDNSSECResponse = {
  Status: { ServeSignature?: {} | undefined; StatusMessage?: {} | undefined }
  KeySigningKeys: {}
}
type GetGeoLocationResponse = {
  GeoLocationDetails: {
    ContinentCode?: {} | undefined
    ContinentName?: {} | undefined
    CountryCode?: {} | undefined
    CountryName?: {} | undefined
    SubdivisionCode?: {} | undefined
    SubdivisionName?: {} | undefined
  }
}
type NoSuchGeoLocation = { [x: string]: unknown }
type GetHealthCheckCountResponse = { HealthCheckCount: {} }
type GetHealthCheckLastFailureReasonResponse = { HealthCheckObservations: {} }
type GetHealthCheckStatusResponse = { HealthCheckObservations: {} }
type GetHostedZoneCountResponse = { HostedZoneCount: {} }
type GetHostedZoneLimitResponse = { Limit: { Type: {}; Value: {} }; Count: {} }
type HostedZoneNotPrivate = { [x: string]: unknown }
type GetReusableDelegationSetLimitResponse = { Limit: { Type: {}; Value: {} }; Count: {} }
type GetTrafficPolicyInstanceCountResponse = { TrafficPolicyInstanceCount: {} }
type ListCidrBlocksResponse = { NextToken?: {} | undefined; CidrBlocks?: {} | undefined }
type NoSuchCidrLocationException = { [x: string]: unknown }
type ListGeoLocationsResponse = {
  GeoLocationDetailsList: {}
  IsTruncated: {}
  NextContinentCode?: {} | undefined
  NextCountryCode?: {} | undefined
  NextSubdivisionCode?: {} | undefined
  MaxItems: {}
}
type ListHostedZonesByNameResponse = {
  HostedZones: {}
  DNSName?: {} | undefined
  HostedZoneId?: {} | undefined
  IsTruncated: {}
  NextDNSName?: {} | undefined
  NextHostedZoneId?: {} | undefined
  MaxItems: {}
}
type ListHostedZonesByVPCResponse = {
  HostedZoneSummaries: {}
  MaxItems: {}
  NextToken?: {} | undefined
}
type ListResourceRecordSetsResponse = {
  ResourceRecordSets: {}
  IsTruncated: {}
  NextRecordName?: {} | undefined
  NextRecordType?: {} | undefined
  NextRecordIdentifier?: {} | undefined
  MaxItems: {}
}
type ListTagsForResourcesResponse = { ResourceTagSets: {} }
type ListTrafficPoliciesResponse = {
  TrafficPolicySummaries: {}
  IsTruncated: {}
  TrafficPolicyIdMarker: {}
  MaxItems: {}
}
type ListTrafficPolicyInstancesResponse = {
  TrafficPolicyInstances: {}
  HostedZoneIdMarker?: {} | undefined
  TrafficPolicyInstanceNameMarker?: {} | undefined
  TrafficPolicyInstanceTypeMarker?: {} | undefined
  IsTruncated: {}
  MaxItems: {}
}
type ListTrafficPolicyInstancesByHostedZoneResponse = {
  TrafficPolicyInstances: {}
  TrafficPolicyInstanceNameMarker?: {} | undefined
  TrafficPolicyInstanceTypeMarker?: {} | undefined
  IsTruncated: {}
  MaxItems: {}
}
type ListTrafficPolicyInstancesByPolicyResponse = {
  TrafficPolicyInstances: {}
  HostedZoneIdMarker?: {} | undefined
  TrafficPolicyInstanceNameMarker?: {} | undefined
  TrafficPolicyInstanceTypeMarker?: {} | undefined
  IsTruncated: {}
  MaxItems: {}
}
type ListTrafficPolicyVersionsResponse = {
  TrafficPolicies: {}
  IsTruncated: {}
  TrafficPolicyVersionMarker: {}
  MaxItems: {}
}
type TestDNSAnswerResponse = {
  Nameserver: {}
  RecordName: {}
  RecordType: {}
  RecordData: {}
  ResponseCode: {}
  Protocol: {}
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2013-04-01/keysigningkey/:HostedZoneId/:Name/activate': {
      $post:
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: ActivateKeySigningKeyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: ConcurrentModification
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: NoSuchKeySigningKey
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidKeySigningKeyStatus
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidSigningStatus
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidKMSArn
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/associatevpc': {
      $post:
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: AssociateVPCWithHostedZoneResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'text'
            status: 481
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: InvalidVPCId
            outputFormat: 'text'
            status: 482
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: InvalidInput
            outputFormat: 'text'
            status: 483
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: PublicZoneVPCAssociation
            outputFormat: 'text'
            status: 484
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: ConflictingDomainExists
            outputFormat: 'text'
            status: 485
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: LimitsExceeded
            outputFormat: 'text'
            status: 486
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 487
          }
    }
  } & {
    '/2013-04-01/cidrcollection/:CidrCollectionId': {
      $post:
        | {
            input: { param: { CidrCollectionId: string } } & {
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
              json: { CollectionVersion?: number | undefined; Changes: CidrCollectionChange[] }
            }
            output: ChangeCidrCollectionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
              json: { CollectionVersion?: number | undefined; Changes: CidrCollectionChange[] }
            }
            output: NoSuchCidrCollectionException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
              json: { CollectionVersion?: number | undefined; Changes: CidrCollectionChange[] }
            }
            output: CidrCollectionVersionMismatchException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
              json: { CollectionVersion?: number | undefined; Changes: CidrCollectionChange[] }
            }
            output: InvalidInput
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
              json: { CollectionVersion?: number | undefined; Changes: CidrCollectionChange[] }
            }
            output: CidrBlockInUseException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
              json: { CollectionVersion?: number | undefined; Changes: CidrCollectionChange[] }
            }
            output: LimitsExceeded
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
              json: { CollectionVersion?: number | undefined; Changes: CidrCollectionChange[] }
            }
            output: ConcurrentModification
            outputFormat: 'text'
            status: 485
          }
      $delete:
        | {
            input: { param: { CidrCollectionId: string } } & {
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
            output: DeleteCidrCollectionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
            output: NoSuchCidrCollectionException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
            output: CidrCollectionInUseException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
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
            output: ConcurrentModification
            outputFormat: 'text'
            status: 483
          }
      $get:
        | {
            input: { param: { CidrCollectionId: string } } & {
              query: {
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: ListCidrLocationsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
              query: {
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: NoSuchCidrCollectionException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
              query: {
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/rrset/': {
      $post:
        | {
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
            } & { json: { ChangeBatch: { Comment?: {} | undefined; Changes?: {} | undefined } } }
            output: ChangeResourceRecordSetsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            } & { json: { ChangeBatch: { Comment?: {} | undefined; Changes?: {} | undefined } } }
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            } & { json: { ChangeBatch: { Comment?: {} | undefined; Changes?: {} | undefined } } }
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 481
          }
        | {
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
            } & { json: { ChangeBatch: { Comment?: {} | undefined; Changes?: {} | undefined } } }
            output: InvalidChangeBatch
            outputFormat: 'text'
            status: 482
          }
        | {
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
            } & { json: { ChangeBatch: { Comment?: {} | undefined; Changes?: {} | undefined } } }
            output: InvalidInput
            outputFormat: 'text'
            status: 483
          }
        | {
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
            } & { json: { ChangeBatch: { Comment?: {} | undefined; Changes?: {} | undefined } } }
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/2013-04-01/tags/:ResourceType/:ResourceId': {
      $post:
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
                AddTags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                RemoveTagKeys?: {}[] | undefined
              }
            }
            output: ChangeTagsForResourceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
                AddTags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                RemoveTagKeys?: {}[] | undefined
              }
            }
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
                AddTags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                RemoveTagKeys?: {}[] | undefined
              }
            }
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
                AddTags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                RemoveTagKeys?: {}[] | undefined
              }
            }
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
                AddTags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                RemoveTagKeys?: {}[] | undefined
              }
            }
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
                AddTags?: { Key?: {} | undefined; Value?: {} | undefined }[] | undefined
                RemoveTagKeys?: {}[] | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'text'
            status: 484
          }
      $get:
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
            output: ListTagsForResourceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone'; ResourceId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/2013-04-01/cidrcollection': {
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
            } & { json: { Name: string; CallerReference: string } }
            output: CreateCidrCollectionResponse
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
            } & { json: { Name: string; CallerReference: string } }
            output: LimitsExceeded
            outputFormat: 'text'
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
            } & { json: { Name: string; CallerReference: string } }
            output: InvalidInput
            outputFormat: 'text'
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
            } & { json: { Name: string; CallerReference: string } }
            output: CidrCollectionAlreadyExistsException
            outputFormat: 'text'
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
            } & { json: { Name: string; CallerReference: string } }
            output: ConcurrentModification
            outputFormat: 'text'
            status: 483
          }
      $get:
        | {
            input: {
              query: {
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: ListCidrCollectionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/2013-04-01/healthcheck': {
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
                CallerReference: string
                HealthCheckConfig: {
                  IPAddress?: {} | undefined
                  Port?: {} | undefined
                  Type?: {} | undefined
                  ResourcePath?: {} | undefined
                  FullyQualifiedDomainName?: {} | undefined
                  SearchString?: {} | undefined
                  RequestInterval?: {} | undefined
                  FailureThreshold?: {} | undefined
                  MeasureLatency?: {} | undefined
                  Inverted?: {} | undefined
                  Disabled?: {} | undefined
                  HealthThreshold?: {} | undefined
                  ChildHealthChecks?: {} | undefined
                  EnableSNI?: {} | undefined
                  Regions?: {} | undefined
                  AlarmIdentifier?: { Region: {}; Name: {} } | undefined
                  InsufficientDataHealthStatus?: {} | undefined
                  RoutingControlArn?: {} | undefined
                }
              }
            }
            output: CreateHealthCheckResponse
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
                CallerReference: string
                HealthCheckConfig: {
                  IPAddress?: {} | undefined
                  Port?: {} | undefined
                  Type?: {} | undefined
                  ResourcePath?: {} | undefined
                  FullyQualifiedDomainName?: {} | undefined
                  SearchString?: {} | undefined
                  RequestInterval?: {} | undefined
                  FailureThreshold?: {} | undefined
                  MeasureLatency?: {} | undefined
                  Inverted?: {} | undefined
                  Disabled?: {} | undefined
                  HealthThreshold?: {} | undefined
                  ChildHealthChecks?: {} | undefined
                  EnableSNI?: {} | undefined
                  Regions?: {} | undefined
                  AlarmIdentifier?: { Region: {}; Name: {} } | undefined
                  InsufficientDataHealthStatus?: {} | undefined
                  RoutingControlArn?: {} | undefined
                }
              }
            }
            output: TooManyHealthChecks
            outputFormat: 'text'
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
                CallerReference: string
                HealthCheckConfig: {
                  IPAddress?: {} | undefined
                  Port?: {} | undefined
                  Type?: {} | undefined
                  ResourcePath?: {} | undefined
                  FullyQualifiedDomainName?: {} | undefined
                  SearchString?: {} | undefined
                  RequestInterval?: {} | undefined
                  FailureThreshold?: {} | undefined
                  MeasureLatency?: {} | undefined
                  Inverted?: {} | undefined
                  Disabled?: {} | undefined
                  HealthThreshold?: {} | undefined
                  ChildHealthChecks?: {} | undefined
                  EnableSNI?: {} | undefined
                  Regions?: {} | undefined
                  AlarmIdentifier?: { Region: {}; Name: {} } | undefined
                  InsufficientDataHealthStatus?: {} | undefined
                  RoutingControlArn?: {} | undefined
                }
              }
            }
            output: HealthCheckAlreadyExists
            outputFormat: 'text'
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
                CallerReference: string
                HealthCheckConfig: {
                  IPAddress?: {} | undefined
                  Port?: {} | undefined
                  Type?: {} | undefined
                  ResourcePath?: {} | undefined
                  FullyQualifiedDomainName?: {} | undefined
                  SearchString?: {} | undefined
                  RequestInterval?: {} | undefined
                  FailureThreshold?: {} | undefined
                  MeasureLatency?: {} | undefined
                  Inverted?: {} | undefined
                  Disabled?: {} | undefined
                  HealthThreshold?: {} | undefined
                  ChildHealthChecks?: {} | undefined
                  EnableSNI?: {} | undefined
                  Regions?: {} | undefined
                  AlarmIdentifier?: { Region: {}; Name: {} } | undefined
                  InsufficientDataHealthStatus?: {} | undefined
                  RoutingControlArn?: {} | undefined
                }
              }
            }
            output: InvalidInput
            outputFormat: 'text'
            status: 482
          }
      $get:
        | {
            input: {
              query: {
                marker?: string | undefined
                maxitems?: string | undefined
                MaxItems?: string | undefined
                Marker?: string | undefined
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
            output: ListHealthChecksResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                maxitems?: string | undefined
                MaxItems?: string | undefined
                Marker?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                maxitems?: string | undefined
                MaxItems?: string | undefined
                Marker?: string | undefined
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
            output: IncompatibleVersion
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/hostedzone': {
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: CreateHostedZoneResponse
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: InvalidDomainName
            outputFormat: 'text'
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: HostedZoneAlreadyExists
            outputFormat: 'text'
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: TooManyHostedZones
            outputFormat: 'text'
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: InvalidVPCId
            outputFormat: 'text'
            status: 483
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: InvalidInput
            outputFormat: 'text'
            status: 484
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: DelegationSetNotAvailable
            outputFormat: 'text'
            status: 485
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: ConflictingDomainExists
            outputFormat: 'text'
            status: 486
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: NoSuchDelegationSet
            outputFormat: 'text'
            status: 487
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
                Name: string
                VPC?: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } | undefined
                CallerReference: string
                HostedZoneConfig?:
                  | { Comment?: {} | undefined; PrivateZone?: {} | undefined }
                  | undefined
                DelegationSetId?: string | undefined
              }
            }
            output: DelegationSetNotReusable
            outputFormat: 'text'
            status: 488
          }
      $get:
        | {
            input: {
              query: {
                marker?: string | undefined
                maxitems?: string | undefined
                delegationsetid?: string | undefined
                MaxItems?: string | undefined
                Marker?: string | undefined
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
            output: ListHostedZonesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                maxitems?: string | undefined
                delegationsetid?: string | undefined
                MaxItems?: string | undefined
                Marker?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                maxitems?: string | undefined
                delegationsetid?: string | undefined
                MaxItems?: string | undefined
                Marker?: string | undefined
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
            output: NoSuchDelegationSet
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                marker?: string | undefined
                maxitems?: string | undefined
                delegationsetid?: string | undefined
                MaxItems?: string | undefined
                Marker?: string | undefined
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
            output: DelegationSetNotReusable
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/keysigningkey': {
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: CreateKeySigningKeyResponse
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: NoSuchHostedZone
            outputFormat: 'text'
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: InvalidArgument
            outputFormat: 'text'
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: InvalidInput
            outputFormat: 'text'
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: InvalidKMSArn
            outputFormat: 'text'
            status: 483
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: InvalidKeySigningKeyStatus
            outputFormat: 'text'
            status: 484
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: InvalidSigningStatus
            outputFormat: 'text'
            status: 485
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: InvalidKeySigningKeyName
            outputFormat: 'text'
            status: 486
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: KeySigningKeyAlreadyExists
            outputFormat: 'text'
            status: 487
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: TooManyKeySigningKeys
            outputFormat: 'text'
            status: 488
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
                CallerReference: string
                HostedZoneId: string
                KeyManagementServiceArn: string
                Name: string
                Status: string
              }
            }
            output: ConcurrentModification
            outputFormat: 'text'
            status: 489
          }
    }
  } & {
    '/2013-04-01/queryloggingconfig': {
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
            } & { json: { HostedZoneId: string; CloudWatchLogsLogGroupArn: string } }
            output: CreateQueryLoggingConfigResponse
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
            } & { json: { HostedZoneId: string; CloudWatchLogsLogGroupArn: string } }
            output: ConcurrentModification
            outputFormat: 'text'
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
            } & { json: { HostedZoneId: string; CloudWatchLogsLogGroupArn: string } }
            output: NoSuchHostedZone
            outputFormat: 'text'
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
            } & { json: { HostedZoneId: string; CloudWatchLogsLogGroupArn: string } }
            output: NoSuchCloudWatchLogsLogGroup
            outputFormat: 'text'
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
            } & { json: { HostedZoneId: string; CloudWatchLogsLogGroupArn: string } }
            output: InvalidInput
            outputFormat: 'text'
            status: 483
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
            } & { json: { HostedZoneId: string; CloudWatchLogsLogGroupArn: string } }
            output: QueryLoggingConfigAlreadyExists
            outputFormat: 'text'
            status: 484
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
            } & { json: { HostedZoneId: string; CloudWatchLogsLogGroupArn: string } }
            output: InsufficientCloudWatchLogsResourcePolicy
            outputFormat: 'text'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                hostedzoneid?: string | undefined
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: ListQueryLoggingConfigsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                hostedzoneid?: string | undefined
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                hostedzoneid?: string | undefined
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: InvalidPaginationToken
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                hostedzoneid?: string | undefined
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/delegationset': {
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
            } & { json: { CallerReference: string; HostedZoneId?: string | undefined } }
            output: CreateReusableDelegationSetResponse
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
            } & { json: { CallerReference: string; HostedZoneId?: string | undefined } }
            output: DelegationSetAlreadyCreated
            outputFormat: 'text'
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
            } & { json: { CallerReference: string; HostedZoneId?: string | undefined } }
            output: LimitsExceeded
            outputFormat: 'text'
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
            } & { json: { CallerReference: string; HostedZoneId?: string | undefined } }
            output: HostedZoneNotFound
            outputFormat: 'text'
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
            } & { json: { CallerReference: string; HostedZoneId?: string | undefined } }
            output: InvalidArgument
            outputFormat: 'text'
            status: 483
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
            } & { json: { CallerReference: string; HostedZoneId?: string | undefined } }
            output: InvalidInput
            outputFormat: 'text'
            status: 484
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
            } & { json: { CallerReference: string; HostedZoneId?: string | undefined } }
            output: DelegationSetNotAvailable
            outputFormat: 'text'
            status: 485
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
            } & { json: { CallerReference: string; HostedZoneId?: string | undefined } }
            output: DelegationSetAlreadyReusable
            outputFormat: 'text'
            status: 486
          }
      $get:
        | {
            input: { query: { marker?: string | undefined; maxitems?: string | undefined } } & {
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
            output: ListReusableDelegationSetsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { marker?: string | undefined; maxitems?: string | undefined } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/2013-04-01/trafficpolicy': {
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
            } & { json: { Name: string; Document: string; Comment?: string | undefined } }
            output: CreateTrafficPolicyResponse
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
            } & { json: { Name: string; Document: string; Comment?: string | undefined } }
            output: InvalidInput
            outputFormat: 'text'
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
            } & { json: { Name: string; Document: string; Comment?: string | undefined } }
            output: TooManyTrafficPolicies
            outputFormat: 'text'
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
            } & { json: { Name: string; Document: string; Comment?: string | undefined } }
            output: TrafficPolicyAlreadyExists
            outputFormat: 'text'
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
            } & { json: { Name: string; Document: string; Comment?: string | undefined } }
            output: InvalidTrafficPolicyDocument
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/2013-04-01/trafficpolicyinstance': {
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
                HostedZoneId: string
                Name: string
                TTL: number
                TrafficPolicyId: string
                TrafficPolicyVersion: number
              }
            }
            output: CreateTrafficPolicyInstanceResponse
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
                HostedZoneId: string
                Name: string
                TTL: number
                TrafficPolicyId: string
                TrafficPolicyVersion: number
              }
            }
            output: NoSuchHostedZone
            outputFormat: 'text'
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
                HostedZoneId: string
                Name: string
                TTL: number
                TrafficPolicyId: string
                TrafficPolicyVersion: number
              }
            }
            output: InvalidInput
            outputFormat: 'text'
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
                HostedZoneId: string
                Name: string
                TTL: number
                TrafficPolicyId: string
                TrafficPolicyVersion: number
              }
            }
            output: TooManyTrafficPolicyInstances
            outputFormat: 'text'
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
                HostedZoneId: string
                Name: string
                TTL: number
                TrafficPolicyId: string
                TrafficPolicyVersion: number
              }
            }
            output: NoSuchTrafficPolicy
            outputFormat: 'text'
            status: 483
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
                HostedZoneId: string
                Name: string
                TTL: number
                TrafficPolicyId: string
                TrafficPolicyVersion: number
              }
            }
            output: TrafficPolicyInstanceAlreadyExists
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/2013-04-01/trafficpolicy/:Id': {
      $post:
        | {
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
            } & { json: { Document: string; Comment?: string | undefined } }
            output: CreateTrafficPolicyVersionResponse
            outputFormat: 'text'
            status: 201
          }
        | {
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
            } & { json: { Document: string; Comment?: string | undefined } }
            output: NoSuchTrafficPolicy
            outputFormat: 'text'
            status: 480
          }
        | {
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
            } & { json: { Document: string; Comment?: string | undefined } }
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
        | {
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
            } & { json: { Document: string; Comment?: string | undefined } }
            output: TooManyTrafficPolicyVersionsForCurrentPolicy
            outputFormat: 'text'
            status: 482
          }
        | {
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
            } & { json: { Document: string; Comment?: string | undefined } }
            output: ConcurrentModification
            outputFormat: 'text'
            status: 483
          }
        | {
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
            } & { json: { Document: string; Comment?: string | undefined } }
            output: InvalidTrafficPolicyDocument
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/authorizevpcassociation': {
      $post:
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: CreateVPCAssociationAuthorizationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: ConcurrentModification
            outputFormat: 'text'
            status: 480
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: TooManyVPCAssociationAuthorizations
            outputFormat: 'text'
            status: 481
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 482
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: InvalidVPCId
            outputFormat: 'text'
            status: 483
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: InvalidInput
            outputFormat: 'text'
            status: 484
          }
      $get:
        | {
            input: { param: { Id: string } } & {
              query: { nexttoken?: string | undefined; maxresults?: string | undefined }
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
            output: ListVPCAssociationAuthorizationsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              query: { nexttoken?: string | undefined; maxresults?: string | undefined }
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              query: { nexttoken?: string | undefined; maxresults?: string | undefined }
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { Id: string } } & {
              query: { nexttoken?: string | undefined; maxresults?: string | undefined }
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
            output: InvalidPaginationToken
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/keysigningkey/:HostedZoneId/:Name/deactivate': {
      $post:
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: DeactivateKeySigningKeyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: ConcurrentModification
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: NoSuchKeySigningKey
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidKeySigningKeyStatus
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidSigningStatus
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: KeySigningKeyInUse
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: KeySigningKeyInParentDSRecord
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/2013-04-01/healthcheck/:HealthCheckId': {
      $delete:
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: DeleteHealthCheckResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: HealthCheckInUse
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 482
          }
      $get:
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: GetHealthCheckResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: IncompatibleVersion
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { param: { HealthCheckId: string } } & {
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
                HealthCheckVersion?: number | undefined
                IPAddress?: string | undefined
                Port?: number | undefined
                ResourcePath?: string | undefined
                FullyQualifiedDomainName?: string | undefined
                SearchString?: string | undefined
                FailureThreshold?: number | undefined
                Inverted?: boolean | undefined
                Disabled?: boolean | undefined
                HealthThreshold?: number | undefined
                ChildHealthChecks?: {}[] | undefined
                EnableSNI?: boolean | undefined
                Regions?: {}[] | undefined
                AlarmIdentifier?: { Region?: {} | undefined; Name?: {} | undefined } | undefined
                InsufficientDataHealthStatus?:
                  | 'Healthy'
                  | 'Unhealthy'
                  | 'LastKnownStatus'
                  | undefined
                ResetElements?: {}[] | undefined
              }
            }
            output: UpdateHealthCheckResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
                HealthCheckVersion?: number | undefined
                IPAddress?: string | undefined
                Port?: number | undefined
                ResourcePath?: string | undefined
                FullyQualifiedDomainName?: string | undefined
                SearchString?: string | undefined
                FailureThreshold?: number | undefined
                Inverted?: boolean | undefined
                Disabled?: boolean | undefined
                HealthThreshold?: number | undefined
                ChildHealthChecks?: {}[] | undefined
                EnableSNI?: boolean | undefined
                Regions?: {}[] | undefined
                AlarmIdentifier?: { Region?: {} | undefined; Name?: {} | undefined } | undefined
                InsufficientDataHealthStatus?:
                  | 'Healthy'
                  | 'Unhealthy'
                  | 'LastKnownStatus'
                  | undefined
                ResetElements?: {}[] | undefined
              }
            }
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
                HealthCheckVersion?: number | undefined
                IPAddress?: string | undefined
                Port?: number | undefined
                ResourcePath?: string | undefined
                FullyQualifiedDomainName?: string | undefined
                SearchString?: string | undefined
                FailureThreshold?: number | undefined
                Inverted?: boolean | undefined
                Disabled?: boolean | undefined
                HealthThreshold?: number | undefined
                ChildHealthChecks?: {}[] | undefined
                EnableSNI?: boolean | undefined
                Regions?: {}[] | undefined
                AlarmIdentifier?: { Region?: {} | undefined; Name?: {} | undefined } | undefined
                InsufficientDataHealthStatus?:
                  | 'Healthy'
                  | 'Unhealthy'
                  | 'LastKnownStatus'
                  | undefined
                ResetElements?: {}[] | undefined
              }
            }
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
                HealthCheckVersion?: number | undefined
                IPAddress?: string | undefined
                Port?: number | undefined
                ResourcePath?: string | undefined
                FullyQualifiedDomainName?: string | undefined
                SearchString?: string | undefined
                FailureThreshold?: number | undefined
                Inverted?: boolean | undefined
                Disabled?: boolean | undefined
                HealthThreshold?: number | undefined
                ChildHealthChecks?: {}[] | undefined
                EnableSNI?: boolean | undefined
                Regions?: {}[] | undefined
                AlarmIdentifier?: { Region?: {} | undefined; Name?: {} | undefined } | undefined
                InsufficientDataHealthStatus?:
                  | 'Healthy'
                  | 'Unhealthy'
                  | 'LastKnownStatus'
                  | undefined
                ResetElements?: {}[] | undefined
              }
            }
            output: HealthCheckVersionMismatch
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id': {
      $delete:
        | {
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
            output: DeleteHostedZoneResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: HostedZoneNotEmpty
            outputFormat: 'text'
            status: 481
          }
        | {
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
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 482
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 483
          }
        | {
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
            output: InvalidDomainName
            outputFormat: 'text'
            status: 484
          }
      $get:
        | {
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
            output: GetHostedZoneResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
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
            } & { json: { Comment?: string | undefined } }
            output: UpdateHostedZoneCommentResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            } & { json: { Comment?: string | undefined } }
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            } & { json: { Comment?: string | undefined } }
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
        | {
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
            } & { json: { Comment?: string | undefined } }
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/keysigningkey/:HostedZoneId/:Name': {
      $delete:
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: DeleteKeySigningKeyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: ConcurrentModification
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: NoSuchKeySigningKey
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidKeySigningKeyStatus
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidSigningStatus
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidKMSArn
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { param: { HostedZoneId: string; Name: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/2013-04-01/queryloggingconfig/:Id': {
      $delete:
        | {
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
            output: DeleteQueryLoggingConfigResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: ConcurrentModification
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: NoSuchQueryLoggingConfig
            outputFormat: 'text'
            status: 481
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 482
          }
      $get:
        | {
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
            output: GetQueryLoggingConfigResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchQueryLoggingConfig
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/delegationset/:Id': {
      $delete:
        | {
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
            output: DeleteReusableDelegationSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchDelegationSet
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: DelegationSetInUse
            outputFormat: 'text'
            status: 481
          }
        | {
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
            output: DelegationSetNotReusable
            outputFormat: 'text'
            status: 482
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 483
          }
      $get:
        | {
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
            output: GetReusableDelegationSetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchDelegationSet
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: DelegationSetNotReusable
            outputFormat: 'text'
            status: 481
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/trafficpolicy/:Id/:Version': {
      $delete:
        | {
            input: { param: { Id: string; Version: number } } & {
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
            output: DeleteTrafficPolicyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: string; Version: number } } & {
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
            output: NoSuchTrafficPolicy
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { Id: string; Version: number } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { Id: string; Version: number } } & {
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
            output: TrafficPolicyInUse
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { Id: string; Version: number } } & {
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
            output: ConcurrentModification
            outputFormat: 'text'
            status: 483
          }
      $get:
        | {
            input: { param: { Id: string; Version: number } } & {
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
            output: GetTrafficPolicyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: string; Version: number } } & {
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
            output: NoSuchTrafficPolicy
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { Id: string; Version: number } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { param: { Id: string; Version: number } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Comment: string } }
            output: UpdateTrafficPolicyCommentResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: string; Version: number } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Comment: string } }
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { Id: string; Version: number } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Comment: string } }
            output: NoSuchTrafficPolicy
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { Id: string; Version: number } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Comment: string } }
            output: ConcurrentModification
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/trafficpolicyinstance/:Id': {
      $delete:
        | {
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
            output: DeleteTrafficPolicyInstanceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchTrafficPolicyInstance
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
        | {
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
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 482
          }
      $get:
        | {
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
            output: GetTrafficPolicyInstanceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchTrafficPolicyInstance
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
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
            } & { json: { TTL: number; TrafficPolicyId: string; TrafficPolicyVersion: number } }
            output: UpdateTrafficPolicyInstanceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            } & { json: { TTL: number; TrafficPolicyId: string; TrafficPolicyVersion: number } }
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
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
            } & { json: { TTL: number; TrafficPolicyId: string; TrafficPolicyVersion: number } }
            output: NoSuchTrafficPolicy
            outputFormat: 'text'
            status: 481
          }
        | {
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
            } & { json: { TTL: number; TrafficPolicyId: string; TrafficPolicyVersion: number } }
            output: NoSuchTrafficPolicyInstance
            outputFormat: 'text'
            status: 482
          }
        | {
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
            } & { json: { TTL: number; TrafficPolicyId: string; TrafficPolicyVersion: number } }
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 483
          }
        | {
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
            } & { json: { TTL: number; TrafficPolicyId: string; TrafficPolicyVersion: number } }
            output: ConflictingTypes
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/deauthorizevpcassociation': {
      $post:
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: DeleteVPCAssociationAuthorizationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: ConcurrentModification
            outputFormat: 'text'
            status: 480
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: VPCAssociationAuthorizationNotFound
            outputFormat: 'text'
            status: 481
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 482
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: InvalidVPCId
            outputFormat: 'text'
            status: 483
          }
        | {
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
            } & { json: { VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined } } }
            output: InvalidInput
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/disable-dnssec': {
      $post:
        | {
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
            output: DisableHostedZoneDNSSECResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: InvalidArgument
            outputFormat: 'text'
            status: 481
          }
        | {
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
            output: ConcurrentModification
            outputFormat: 'text'
            status: 482
          }
        | {
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
            output: KeySigningKeyInParentDSRecord
            outputFormat: 'text'
            status: 483
          }
        | {
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
            output: DNSSECNotFound
            outputFormat: 'text'
            status: 484
          }
        | {
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
            output: InvalidKeySigningKeyStatus
            outputFormat: 'text'
            status: 485
          }
        | {
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
            output: InvalidKMSArn
            outputFormat: 'text'
            status: 486
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 487
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/disassociatevpc': {
      $post:
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: DisassociateVPCFromHostedZoneResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: InvalidVPCId
            outputFormat: 'text'
            status: 481
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: VPCAssociationNotFound
            outputFormat: 'text'
            status: 482
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: LastVPCAssociation
            outputFormat: 'text'
            status: 483
          }
        | {
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
            } & {
              json: {
                VPC: { VPCRegion?: {} | undefined; VPCId?: VPCId | undefined }
                Comment?: string | undefined
              }
            }
            output: InvalidInput
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/enable-dnssec': {
      $post:
        | {
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
            output: EnableHostedZoneDNSSECResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: InvalidArgument
            outputFormat: 'text'
            status: 481
          }
        | {
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
            output: ConcurrentModification
            outputFormat: 'text'
            status: 482
          }
        | {
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
            output: KeySigningKeyWithActiveStatusNotFound
            outputFormat: 'text'
            status: 483
          }
        | {
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
            output: InvalidKMSArn
            outputFormat: 'text'
            status: 484
          }
        | {
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
            output: HostedZonePartiallyDelegated
            outputFormat: 'text'
            status: 485
          }
        | {
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
            output: DNSSECNotFound
            outputFormat: 'text'
            status: 486
          }
        | {
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
            output: InvalidKeySigningKeyStatus
            outputFormat: 'text'
            status: 487
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 488
          }
    }
  } & {
    '/2013-04-01/accountlimit/:Type': {
      $get:
        | {
            input: {
              param: {
                Type:
                  | 'MAX_HEALTH_CHECKS_BY_OWNER'
                  | 'MAX_HOSTED_ZONES_BY_OWNER'
                  | 'MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER'
                  | 'MAX_REUSABLE_DELEGATION_SETS_BY_OWNER'
                  | 'MAX_TRAFFIC_POLICIES_BY_OWNER'
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
            output: GetAccountLimitResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                Type:
                  | 'MAX_HEALTH_CHECKS_BY_OWNER'
                  | 'MAX_HOSTED_ZONES_BY_OWNER'
                  | 'MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER'
                  | 'MAX_REUSABLE_DELEGATION_SETS_BY_OWNER'
                  | 'MAX_TRAFFIC_POLICIES_BY_OWNER'
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/2013-04-01/change/:Id': {
      $get:
        | {
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
            output: GetChangeResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchChange
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/checkeripranges': {
      $get: {
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
        }
        output: GetCheckerIpRangesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/dnssec': {
      $get:
        | {
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
            output: GetDNSSECResponse
            outputFormat: 'text'
            status: 200
          }
        | {
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
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
            output: InvalidArgument
            outputFormat: 'text'
            status: 481
          }
        | {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/geolocation': {
      $get:
        | {
            input: {
              query: {
                continentcode?: string | undefined
                countrycode?: string | undefined
                subdivisioncode?: string | undefined
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
            output: GetGeoLocationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                continentcode?: string | undefined
                countrycode?: string | undefined
                subdivisioncode?: string | undefined
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
            output: NoSuchGeoLocation
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                continentcode?: string | undefined
                countrycode?: string | undefined
                subdivisioncode?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/healthcheckcount': {
      $get: {
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
        }
        output: GetHealthCheckCountResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2013-04-01/healthcheck/:HealthCheckId/lastfailurereason': {
      $get:
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: GetHealthCheckLastFailureReasonResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/healthcheck/:HealthCheckId/status': {
      $get:
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: GetHealthCheckStatusResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { HealthCheckId: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/hostedzonecount': {
      $get:
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
            }
            output: GetHostedZoneCountResponse
            outputFormat: 'text'
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
            }
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/2013-04-01/hostedzonelimit/:Id/:Type': {
      $get:
        | {
            input: {
              param: { Type: 'MAX_RRSETS_BY_ZONE' | 'MAX_VPCS_ASSOCIATED_BY_ZONE'; Id: string }
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
            output: GetHostedZoneLimitResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { Type: 'MAX_RRSETS_BY_ZONE' | 'MAX_VPCS_ASSOCIATED_BY_ZONE'; Id: string }
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              param: { Type: 'MAX_RRSETS_BY_ZONE' | 'MAX_VPCS_ASSOCIATED_BY_ZONE'; Id: string }
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              param: { Type: 'MAX_RRSETS_BY_ZONE' | 'MAX_VPCS_ASSOCIATED_BY_ZONE'; Id: string }
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
            output: HostedZoneNotPrivate
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/reusabledelegationsetlimit/:Id/:Type': {
      $get:
        | {
            input: { param: { Type: 'MAX_ZONES_BY_REUSABLE_DELEGATION_SET'; Id: string } } & {
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
            output: GetReusableDelegationSetLimitResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Type: 'MAX_ZONES_BY_REUSABLE_DELEGATION_SET'; Id: string } } & {
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { Type: 'MAX_ZONES_BY_REUSABLE_DELEGATION_SET'; Id: string } } & {
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
            output: NoSuchDelegationSet
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/trafficpolicyinstancecount': {
      $get: {
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
        }
        output: GetTrafficPolicyInstanceCountResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/2013-04-01/cidrcollection/:CidrCollectionId/cidrblocks': {
      $get:
        | {
            input: { param: { CidrCollectionId: string } } & {
              query: {
                location?: string | undefined
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: ListCidrBlocksResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
              query: {
                location?: string | undefined
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: NoSuchCidrCollectionException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
              query: {
                location?: string | undefined
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: NoSuchCidrLocationException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { CidrCollectionId: string } } & {
              query: {
                location?: string | undefined
                nexttoken?: string | undefined
                maxresults?: string | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/geolocations': {
      $get:
        | {
            input: {
              query: {
                startcontinentcode?: string | undefined
                startcountrycode?: string | undefined
                startsubdivisioncode?: string | undefined
                maxitems?: string | undefined
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
            output: ListGeoLocationsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startcontinentcode?: string | undefined
                startcountrycode?: string | undefined
                startsubdivisioncode?: string | undefined
                maxitems?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/2013-04-01/hostedzonesbyname': {
      $get:
        | {
            input: {
              query: {
                dnsname?: string | undefined
                hostedzoneid?: string | undefined
                maxitems?: string | undefined
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
            output: ListHostedZonesByNameResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                dnsname?: string | undefined
                hostedzoneid?: string | undefined
                maxitems?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                dnsname?: string | undefined
                hostedzoneid?: string | undefined
                maxitems?: string | undefined
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
            output: InvalidDomainName
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/hostedzonesbyvpc#vpcid&vpcregion': {
      $get:
        | {
            input: {
              query: {
                vpcid: string
                vpcregion:
                  | 'us-east-1'
                  | 'us-east-2'
                  | 'us-west-1'
                  | 'us-west-2'
                  | 'eu-west-1'
                  | 'eu-west-2'
                  | 'eu-west-3'
                  | 'eu-central-1'
                  | 'eu-central-2'
                  | 'ap-east-1'
                  | 'me-south-1'
                  | 'us-gov-west-1'
                  | 'us-gov-east-1'
                  | 'us-iso-east-1'
                  | 'us-iso-west-1'
                  | 'us-isob-east-1'
                  | 'me-central-1'
                  | 'ap-southeast-1'
                  | 'ap-southeast-2'
                  | 'ap-southeast-3'
                  | 'ap-south-1'
                  | 'ap-south-2'
                  | 'ap-northeast-1'
                  | 'ap-northeast-2'
                  | 'ap-northeast-3'
                  | 'eu-north-1'
                  | 'sa-east-1'
                  | 'ca-central-1'
                  | 'cn-north-1'
                  | 'af-south-1'
                  | 'eu-south-1'
                  | 'eu-south-2'
                  | 'ap-southeast-4'
                  | 'il-central-1'
                maxitems?: string | undefined
                nexttoken?: string | undefined
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
            output: ListHostedZonesByVPCResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                vpcid: string
                vpcregion:
                  | 'us-east-1'
                  | 'us-east-2'
                  | 'us-west-1'
                  | 'us-west-2'
                  | 'eu-west-1'
                  | 'eu-west-2'
                  | 'eu-west-3'
                  | 'eu-central-1'
                  | 'eu-central-2'
                  | 'ap-east-1'
                  | 'me-south-1'
                  | 'us-gov-west-1'
                  | 'us-gov-east-1'
                  | 'us-iso-east-1'
                  | 'us-iso-west-1'
                  | 'us-isob-east-1'
                  | 'me-central-1'
                  | 'ap-southeast-1'
                  | 'ap-southeast-2'
                  | 'ap-southeast-3'
                  | 'ap-south-1'
                  | 'ap-south-2'
                  | 'ap-northeast-1'
                  | 'ap-northeast-2'
                  | 'ap-northeast-3'
                  | 'eu-north-1'
                  | 'sa-east-1'
                  | 'ca-central-1'
                  | 'cn-north-1'
                  | 'af-south-1'
                  | 'eu-south-1'
                  | 'eu-south-2'
                  | 'ap-southeast-4'
                  | 'il-central-1'
                maxitems?: string | undefined
                nexttoken?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                vpcid: string
                vpcregion:
                  | 'us-east-1'
                  | 'us-east-2'
                  | 'us-west-1'
                  | 'us-west-2'
                  | 'eu-west-1'
                  | 'eu-west-2'
                  | 'eu-west-3'
                  | 'eu-central-1'
                  | 'eu-central-2'
                  | 'ap-east-1'
                  | 'me-south-1'
                  | 'us-gov-west-1'
                  | 'us-gov-east-1'
                  | 'us-iso-east-1'
                  | 'us-iso-west-1'
                  | 'us-isob-east-1'
                  | 'me-central-1'
                  | 'ap-southeast-1'
                  | 'ap-southeast-2'
                  | 'ap-southeast-3'
                  | 'ap-south-1'
                  | 'ap-south-2'
                  | 'ap-northeast-1'
                  | 'ap-northeast-2'
                  | 'ap-northeast-3'
                  | 'eu-north-1'
                  | 'sa-east-1'
                  | 'ca-central-1'
                  | 'cn-north-1'
                  | 'af-south-1'
                  | 'eu-south-1'
                  | 'eu-south-2'
                  | 'ap-southeast-4'
                  | 'il-central-1'
                maxitems?: string | undefined
                nexttoken?: string | undefined
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
            output: InvalidPaginationToken
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/hostedzone/:Id/rrset': {
      $get:
        | {
            input: { param: { Id: string } } & {
              query: {
                name?: string | undefined
                type?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                identifier?: string | undefined
                maxitems?: string | undefined
                MaxItems?: string | undefined
                StartRecordName?: string | undefined
                StartRecordType?: string | undefined
                StartRecordIdentifier?: string | undefined
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
            output: ListResourceRecordSetsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                name?: string | undefined
                type?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                identifier?: string | undefined
                maxitems?: string | undefined
                MaxItems?: string | undefined
                StartRecordName?: string | undefined
                StartRecordType?: string | undefined
                StartRecordIdentifier?: string | undefined
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              query: {
                name?: string | undefined
                type?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                identifier?: string | undefined
                maxitems?: string | undefined
                MaxItems?: string | undefined
                StartRecordName?: string | undefined
                StartRecordType?: string | undefined
                StartRecordIdentifier?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/tags/:ResourceType': {
      $post:
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ResourceIds: {}[] } }
            output: ListTagsForResourcesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ResourceIds: {}[] } }
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ResourceIds: {}[] } }
            output: NoSuchHealthCheck
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ResourceIds: {}[] } }
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ResourceIds: {}[] } }
            output: PriorRequestNotComplete
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { param: { ResourceType: 'healthcheck' | 'hostedzone' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ResourceIds: {}[] } }
            output: ThrottlingException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/2013-04-01/trafficpolicies': {
      $get:
        | {
            input: {
              query: { trafficpolicyid?: string | undefined; maxitems?: string | undefined }
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
            output: ListTrafficPoliciesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { trafficpolicyid?: string | undefined; maxitems?: string | undefined }
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/2013-04-01/trafficpolicyinstances': {
      $get:
        | {
            input: {
              query: {
                hostedzoneid?: string | undefined
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: ListTrafficPolicyInstancesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                hostedzoneid?: string | undefined
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                hostedzoneid?: string | undefined
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: NoSuchTrafficPolicyInstance
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/trafficpolicyinstances/hostedzone#id': {
      $get:
        | {
            input: {
              query: {
                id: string
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: ListTrafficPolicyInstancesByHostedZoneResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                id: string
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                id: string
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: NoSuchTrafficPolicyInstance
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                id: string
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/trafficpolicyinstances/trafficpolicy#id&version': {
      $get:
        | {
            input: {
              query: {
                id: string
                version: number
                hostedzoneid?: string | undefined
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: ListTrafficPolicyInstancesByPolicyResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                id: string
                version: number
                hostedzoneid?: string | undefined
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                id: string
                version: number
                hostedzoneid?: string | undefined
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: NoSuchTrafficPolicyInstance
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                id: string
                version: number
                hostedzoneid?: string | undefined
                trafficpolicyinstancename?: string | undefined
                trafficpolicyinstancetype?:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                  | undefined
                maxitems?: string | undefined
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
            output: NoSuchTrafficPolicy
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/2013-04-01/trafficpolicies/:Id/versions': {
      $get:
        | {
            input: { param: { Id: string } } & {
              query: { trafficpolicyversion?: string | undefined; maxitems?: string | undefined }
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
            output: ListTrafficPolicyVersionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Id: string } } & {
              query: { trafficpolicyversion?: string | undefined; maxitems?: string | undefined }
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
            output: InvalidInput
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { param: { Id: string } } & {
              query: { trafficpolicyversion?: string | undefined; maxitems?: string | undefined }
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
            output: NoSuchTrafficPolicy
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype': {
      $get:
        | {
            input: {
              query: {
                hostedzoneid: string
                recordname: string
                recordtype:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                resolverip?: string | undefined
                edns0clientsubnetip?: string | undefined
                edns0clientsubnetmask?: string | undefined
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
            output: TestDNSAnswerResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                hostedzoneid: string
                recordname: string
                recordtype:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                resolverip?: string | undefined
                edns0clientsubnetip?: string | undefined
                edns0clientsubnetmask?: string | undefined
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
            output: NoSuchHostedZone
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                hostedzoneid: string
                recordname: string
                recordtype:
                  | 'SOA'
                  | 'A'
                  | 'TXT'
                  | 'NS'
                  | 'CNAME'
                  | 'MX'
                  | 'NAPTR'
                  | 'PTR'
                  | 'SRV'
                  | 'SPF'
                  | 'AAAA'
                  | 'CAA'
                  | 'DS'
                resolverip?: string | undefined
                edns0clientsubnetip?: string | undefined
                edns0clientsubnetmask?: string | undefined
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
            output: InvalidInput
            outputFormat: 'text'
            status: 481
          }
    }
  },
  '/'
>
export default routes
