type AcceptAdministratorInvitationResponse = { [x: string]: unknown }
type Invitation = {
  AccountId?: {} | undefined
  InvitationId?: {} | undefined
  InvitedAt?: {} | undefined
  MemberStatus?: {} | undefined
}
type GetAdministratorAccountResponse = { Administrator?: Invitation | undefined }
type AcceptInvitationResponse = { [x: string]: unknown }
type GetMasterAccountResponse = {
  Master?:
    | {
        AccountId?: {} | undefined
        InvitationId?: {} | undefined
        InvitedAt?: {} | undefined
        MemberStatus?: {} | undefined
      }
    | undefined
}
type NonEmptyString = string
type BatchDisableStandardsResponse = { StandardsSubscriptions?: {} | undefined }
type StandardsSubscriptionRequest = { StandardsArn: {}; StandardsInput?: {} | undefined }
type BatchEnableStandardsResponse = { StandardsSubscriptions?: {} | undefined }
type BatchGetSecurityControlsResponse = { SecurityControls: {}; UnprocessedIds?: {} | undefined }
type StandardsControlAssociationId = { SecurityControlId: {}; StandardsArn: {} }
type BatchGetStandardsControlAssociationsResponse = {
  StandardsControlAssociationDetails: {}
  UnprocessedAssociations?: {} | undefined
}
type AwsSecurityFinding = {
  SchemaVersion: {}
  Id: {}
  ProductArn: {}
  ProductName?: {} | undefined
  CompanyName?: {} | undefined
  Region?: {} | undefined
  GeneratorId: {}
  AwsAccountId: {}
  Types?: {} | undefined
  FirstObservedAt?: {} | undefined
  LastObservedAt?: {} | undefined
  CreatedAt: {}
  UpdatedAt: {}
  Severity?:
    | {
        Product?: {} | undefined
        Label?: {} | undefined
        Normalized?: {} | undefined
        Original?: {} | undefined
      }
    | undefined
  Confidence?: {} | undefined
  Criticality?: {} | undefined
  Title: {}
  Description: {}
  Remediation?:
    | { Recommendation?: { Text?: {} | undefined; Url?: {} | undefined } | undefined }
    | undefined
  SourceUrl?: {} | undefined
  ProductFields?: {} | undefined
  UserDefinedFields?: {} | undefined
  Malware?: {} | undefined
  Network?:
    | {
        Direction?: {} | undefined
        Protocol?: {} | undefined
        OpenPortRange?: { Begin?: {} | undefined; End?: {} | undefined } | undefined
        SourceIpV4?: {} | undefined
        SourceIpV6?: {} | undefined
        SourcePort?: {} | undefined
        SourceDomain?: {} | undefined
        SourceMac?: {} | undefined
        DestinationIpV4?: {} | undefined
        DestinationIpV6?: {} | undefined
        DestinationPort?: {} | undefined
        DestinationDomain?: {} | undefined
      }
    | undefined
  NetworkPath?: {} | undefined
  Process?:
    | {
        Name?: {} | undefined
        Path?: {} | undefined
        Pid?: {} | undefined
        ParentPid?: {} | undefined
        LaunchedAt?: {} | undefined
        TerminatedAt?: {} | undefined
      }
    | undefined
  Threats?: {} | undefined
  ThreatIntelIndicators?: {} | undefined
  Resources: {}
  Compliance?:
    | {
        Status?: {} | undefined
        RelatedRequirements?: {} | undefined
        StatusReasons?: {} | undefined
        SecurityControlId?: {} | undefined
        AssociatedStandards?: {} | undefined
      }
    | undefined
  VerificationState?: {} | undefined
  WorkflowState?: {} | undefined
  Workflow?: { Status?: {} | undefined } | undefined
  RecordState?: {} | undefined
  RelatedFindings?: {} | undefined
  Note?: { Text: {}; UpdatedBy: {}; UpdatedAt: {} } | undefined
  Vulnerabilities?: {} | undefined
  PatchSummary?:
    | {
        Id: {}
        InstalledCount?: {} | undefined
        MissingCount?: {} | undefined
        FailedCount?: {} | undefined
        InstalledOtherCount?: {} | undefined
        InstalledRejectedCount?: {} | undefined
        InstalledPendingReboot?: {} | undefined
        OperationStartTime?: {} | undefined
        OperationEndTime?: {} | undefined
        RebootOption?: {} | undefined
        Operation?: {} | undefined
      }
    | undefined
  Action?:
    | {
        ActionType?: {} | undefined
        NetworkConnectionAction?:
          | {
              ConnectionDirection?: {} | undefined
              RemoteIpDetails?:
                | {
                    IpAddressV4?: {} | undefined
                    Organization?:
                      | {
                          Asn?: {} | undefined
                          AsnOrg?: {} | undefined
                          Isp?: {} | undefined
                          Org?: {} | undefined
                        }
                      | undefined
                    Country?:
                      | { CountryCode?: {} | undefined; CountryName?: {} | undefined }
                      | undefined
                    City?: { CityName?: {} | undefined } | undefined
                    GeoLocation?: { Lon?: {} | undefined; Lat?: {} | undefined } | undefined
                  }
                | undefined
              RemotePortDetails?: { Port?: {} | undefined; PortName?: {} | undefined } | undefined
              LocalPortDetails?: { Port?: {} | undefined; PortName?: {} | undefined } | undefined
              Protocol?: {} | undefined
              Blocked?: {} | undefined
            }
          | undefined
        AwsApiCallAction?:
          | {
              Api?: {} | undefined
              ServiceName?: {} | undefined
              CallerType?: {} | undefined
              RemoteIpDetails?:
                | {
                    IpAddressV4?: {} | undefined
                    Organization?:
                      | {
                          Asn?: {} | undefined
                          AsnOrg?: {} | undefined
                          Isp?: {} | undefined
                          Org?: {} | undefined
                        }
                      | undefined
                    Country?:
                      | { CountryCode?: {} | undefined; CountryName?: {} | undefined }
                      | undefined
                    City?: { CityName?: {} | undefined } | undefined
                    GeoLocation?: { Lon?: {} | undefined; Lat?: {} | undefined } | undefined
                  }
                | undefined
              DomainDetails?: { Domain?: {} | undefined } | undefined
              AffectedResources?: {} | undefined
              FirstSeen?: {} | undefined
              LastSeen?: {} | undefined
            }
          | undefined
        DnsRequestAction?:
          | { Domain?: {} | undefined; Protocol?: {} | undefined; Blocked?: {} | undefined }
          | undefined
        PortProbeAction?:
          | { PortProbeDetails?: {} | undefined; Blocked?: {} | undefined }
          | undefined
      }
    | undefined
  FindingProviderFields?:
    | {
        Confidence?: {} | undefined
        Criticality?: {} | undefined
        RelatedFindings?: {} | undefined
        Severity?: { Label?: {} | undefined; Original?: {} | undefined } | undefined
        Types?: {} | undefined
      }
    | undefined
  Sample?: {} | undefined
}
type BatchImportFindingsResponse = {
  FailedCount: {}
  SuccessCount: {}
  FailedFindings?: {} | undefined
}
type AwsSecurityFindingIdentifier = { Id: {}; ProductArn: {} }
type RelatedFinding = { ProductArn: {}; Id: {} }
type BatchUpdateFindingsResponse = { ProcessedFindings: {}; UnprocessedFindings: {} }
type StandardsControlAssociationUpdate = {
  StandardsArn: {}
  SecurityControlId: {}
  AssociationStatus: {}
  UpdatedReason?: {} | undefined
}
type BatchUpdateStandardsControlAssociationsResponse = {
  UnprocessedAssociationUpdates?: {} | undefined
}
type CreateActionTargetResponse = { ActionTargetArn: {} }
type CreateFindingAggregatorResponse = {
  FindingAggregatorArn?: {} | undefined
  FindingAggregationRegion?: {} | undefined
  RegionLinkingMode?: {} | undefined
  Regions?: {} | undefined
}
type CreateInsightResponse = { InsightArn: {} }
type AccountDetails = { AccountId: {}; Email?: {} | undefined }
type CreateMembersResponse = { UnprocessedAccounts?: {} | undefined }
type ListMembersResponse = { Members?: {} | undefined; NextToken?: {} | undefined }
type DeclineInvitationsResponse = { UnprocessedAccounts?: {} | undefined }
type DeleteActionTargetResponse = { ActionTargetArn: {} }
type UpdateActionTargetResponse = { [x: string]: unknown }
type DeleteFindingAggregatorResponse = { [x: string]: unknown }
type DeleteInsightResponse = { InsightArn: {} }
type UpdateInsightResponse = { [x: string]: unknown }
type DeleteInvitationsResponse = { UnprocessedAccounts?: {} | undefined }
type DeleteMembersResponse = { UnprocessedAccounts?: {} | undefined }
type DescribeActionTargetsResponse = { ActionTargets: {}; NextToken?: {} | undefined }
type DescribeHubResponse = {
  HubArn?: {} | undefined
  SubscribedAt?: {} | undefined
  AutoEnableControls?: {} | undefined
  ControlFindingGenerator?: {} | undefined
}
type DisableSecurityHubResponse = { [x: string]: unknown }
type TagValue = string
type EnableSecurityHubResponse = { [x: string]: unknown }
type UpdateSecurityHubConfigurationResponse = { [x: string]: unknown }
type DescribeOrganizationConfigurationResponse = {
  AutoEnable?: {} | undefined
  MemberAccountLimitReached?: {} | undefined
  AutoEnableStandards?: {} | undefined
}
type UpdateOrganizationConfigurationResponse = { [x: string]: unknown }
type DescribeProductsResponse = { Products: {}; NextToken?: {} | undefined }
type DescribeStandardsResponse = { Standards?: {} | undefined; NextToken?: {} | undefined }
type DescribeStandardsControlsResponse = { Controls?: {} | undefined; NextToken?: {} | undefined }
type DisableImportFindingsForProductResponse = { [x: string]: unknown }
type DisableOrganizationAdminAccountResponse = { [x: string]: unknown }
type DisassociateFromAdministratorAccountResponse = { [x: string]: unknown }
type DisassociateFromMasterAccountResponse = { [x: string]: unknown }
type DisassociateMembersResponse = { [x: string]: unknown }
type EnableImportFindingsForProductResponse = { ProductSubscriptionArn?: {} | undefined }
type ListEnabledProductsForImportResponse = {
  ProductSubscriptions?: {} | undefined
  NextToken?: {} | undefined
}
type EnableOrganizationAdminAccountResponse = { [x: string]: unknown }
type GetEnabledStandardsResponse = {
  StandardsSubscriptions?: {} | undefined
  NextToken?: {} | undefined
}
type GetFindingAggregatorResponse = {
  FindingAggregatorArn?: {} | undefined
  FindingAggregationRegion?: {} | undefined
  RegionLinkingMode?: {} | undefined
  Regions?: {} | undefined
}
type SortCriterion = { Field?: {} | undefined; SortOrder?: {} | undefined }
type GetFindingsResponse = { Findings: {}; NextToken?: {} | undefined }
type UpdateFindingsResponse = { [x: string]: unknown }
type GetInsightResultsResponse = {
  InsightResults: { InsightArn: {}; GroupByAttribute: {}; ResultValues: {} }
}
type GetInsightsResponse = { Insights: {}; NextToken?: {} | undefined }
type GetInvitationsCountResponse = { InvitationsCount?: {} | undefined }
type GetMembersResponse = { Members?: {} | undefined; UnprocessedAccounts?: {} | undefined }
type InviteMembersResponse = { UnprocessedAccounts?: {} | undefined }
type ListFindingAggregatorsResponse = {
  FindingAggregators?: {} | undefined
  NextToken?: {} | undefined
}
type ListInvitationsResponse = { Invitations?: {} | undefined; NextToken?: {} | undefined }
type ListOrganizationAdminAccountsResponse = {
  AdminAccounts?: {} | undefined
  NextToken?: {} | undefined
}
type ListSecurityControlDefinitionsResponse = {
  SecurityControlDefinitions: {}
  NextToken?: {} | undefined
}
type ListStandardsControlAssociationsResponse = {
  StandardsControlAssociationSummaries: {}
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateFindingAggregatorResponse = {
  FindingAggregatorArn?: {} | undefined
  FindingAggregationRegion?: {} | undefined
  RegionLinkingMode?: {} | undefined
  Regions?: {} | undefined
}
type UpdateStandardsControlResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/administrator': {
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
        } & { json: { AdministratorId: string; InvitationId: string } }
        output: AcceptAdministratorInvitationResponse
        outputFormat: 'json'
        status: 200
      }
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
        output: GetAdministratorAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/master': {
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
        } & { json: { MasterId: string; InvitationId: string } }
        output: AcceptInvitationResponse
        outputFormat: 'json'
        status: 200
      }
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
        output: GetMasterAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/standards/deregister': {
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
        } & { json: { StandardsSubscriptionArns: NonEmptyString[] } }
        output: BatchDisableStandardsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/standards/register': {
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
        } & { json: { StandardsSubscriptionRequests: StandardsSubscriptionRequest[] } }
        output: BatchEnableStandardsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/securityControls/batchGet': {
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
        } & { json: { SecurityControlIds: NonEmptyString[] } }
        output: BatchGetSecurityControlsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associations/batchGet': {
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
        } & { json: { StandardsControlAssociationIds: StandardsControlAssociationId[] } }
        output: BatchGetStandardsControlAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings/import': {
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
        } & { json: { Findings: AwsSecurityFinding[] } }
        output: BatchImportFindingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings/batchupdate': {
      $patch: {
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
            FindingIdentifiers: AwsSecurityFindingIdentifier[]
            Note?: { Text?: {} | undefined; UpdatedBy?: {} | undefined } | undefined
            Severity?:
              | { Normalized?: {} | undefined; Product?: {} | undefined; Label?: {} | undefined }
              | undefined
            VerificationState?:
              | 'UNKNOWN'
              | 'TRUE_POSITIVE'
              | 'FALSE_POSITIVE'
              | 'BENIGN_POSITIVE'
              | undefined
            Confidence?: number | undefined
            Criticality?: number | undefined
            Types?: NonEmptyString[] | undefined
            UserDefinedFields?: { [x: string]: NonEmptyString } | undefined
            Workflow?: { Status?: {} | undefined } | undefined
            RelatedFindings?: RelatedFinding[] | undefined
          }
        }
        output: BatchUpdateFindingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associations': {
      $patch: {
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
        } & { json: { StandardsControlAssociationUpdates: StandardsControlAssociationUpdate[] } }
        output: BatchUpdateStandardsControlAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actionTargets': {
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
        } & { json: { Name: string; Description: string; Id: string } }
        output: CreateActionTargetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findingAggregator/create': {
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
        } & { json: { RegionLinkingMode: string; Regions?: NonEmptyString[] | undefined } }
        output: CreateFindingAggregatorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/insights': {
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
            Filters: {
              ProductArn?: {} | undefined
              AwsAccountId?: {} | undefined
              Id?: {} | undefined
              GeneratorId?: {} | undefined
              Region?: {} | undefined
              Type?: {} | undefined
              FirstObservedAt?: {} | undefined
              LastObservedAt?: {} | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
              SeverityProduct?: {} | undefined
              SeverityNormalized?: {} | undefined
              SeverityLabel?: {} | undefined
              Confidence?: {} | undefined
              Criticality?: {} | undefined
              Title?: {} | undefined
              Description?: {} | undefined
              RecommendationText?: {} | undefined
              SourceUrl?: {} | undefined
              ProductFields?: {} | undefined
              ProductName?: {} | undefined
              CompanyName?: {} | undefined
              UserDefinedFields?: {} | undefined
              MalwareName?: {} | undefined
              MalwareType?: {} | undefined
              MalwarePath?: {} | undefined
              MalwareState?: {} | undefined
              NetworkDirection?: {} | undefined
              NetworkProtocol?: {} | undefined
              NetworkSourceIpV4?: {} | undefined
              NetworkSourceIpV6?: {} | undefined
              NetworkSourcePort?: {} | undefined
              NetworkSourceDomain?: {} | undefined
              NetworkSourceMac?: {} | undefined
              NetworkDestinationIpV4?: {} | undefined
              NetworkDestinationIpV6?: {} | undefined
              NetworkDestinationPort?: {} | undefined
              NetworkDestinationDomain?: {} | undefined
              ProcessName?: {} | undefined
              ProcessPath?: {} | undefined
              ProcessPid?: {} | undefined
              ProcessParentPid?: {} | undefined
              ProcessLaunchedAt?: {} | undefined
              ProcessTerminatedAt?: {} | undefined
              ThreatIntelIndicatorType?: {} | undefined
              ThreatIntelIndicatorValue?: {} | undefined
              ThreatIntelIndicatorCategory?: {} | undefined
              ThreatIntelIndicatorLastObservedAt?: {} | undefined
              ThreatIntelIndicatorSource?: {} | undefined
              ThreatIntelIndicatorSourceUrl?: {} | undefined
              ResourceType?: {} | undefined
              ResourceId?: {} | undefined
              ResourcePartition?: {} | undefined
              ResourceRegion?: {} | undefined
              ResourceTags?: {} | undefined
              ResourceAwsEc2InstanceType?: {} | undefined
              ResourceAwsEc2InstanceImageId?: {} | undefined
              ResourceAwsEc2InstanceIpV4Addresses?: {} | undefined
              ResourceAwsEc2InstanceIpV6Addresses?: {} | undefined
              ResourceAwsEc2InstanceKeyName?: {} | undefined
              ResourceAwsEc2InstanceIamInstanceProfileArn?: {} | undefined
              ResourceAwsEc2InstanceVpcId?: {} | undefined
              ResourceAwsEc2InstanceSubnetId?: {} | undefined
              ResourceAwsEc2InstanceLaunchedAt?: {} | undefined
              ResourceAwsS3BucketOwnerId?: {} | undefined
              ResourceAwsS3BucketOwnerName?: {} | undefined
              ResourceAwsIamAccessKeyUserName?: {} | undefined
              ResourceAwsIamAccessKeyPrincipalName?: {} | undefined
              ResourceAwsIamAccessKeyStatus?: {} | undefined
              ResourceAwsIamAccessKeyCreatedAt?: {} | undefined
              ResourceAwsIamUserUserName?: {} | undefined
              ResourceContainerName?: {} | undefined
              ResourceContainerImageId?: {} | undefined
              ResourceContainerImageName?: {} | undefined
              ResourceContainerLaunchedAt?: {} | undefined
              ResourceDetailsOther?: {} | undefined
              ComplianceStatus?: {} | undefined
              VerificationState?: {} | undefined
              WorkflowState?: {} | undefined
              WorkflowStatus?: {} | undefined
              RecordState?: {} | undefined
              RelatedFindingsProductArn?: {} | undefined
              RelatedFindingsId?: {} | undefined
              NoteText?: {} | undefined
              NoteUpdatedAt?: {} | undefined
              NoteUpdatedBy?: {} | undefined
              Keyword?: {} | undefined
              FindingProviderFieldsConfidence?: {} | undefined
              FindingProviderFieldsCriticality?: {} | undefined
              FindingProviderFieldsRelatedFindingsId?: {} | undefined
              FindingProviderFieldsRelatedFindingsProductArn?: {} | undefined
              FindingProviderFieldsSeverityLabel?: {} | undefined
              FindingProviderFieldsSeverityOriginal?: {} | undefined
              FindingProviderFieldsTypes?: {} | undefined
              Sample?: {} | undefined
              ComplianceSecurityControlId?: {} | undefined
              ComplianceAssociatedStandardsId?: {} | undefined
            }
            GroupByAttribute: string
          }
        }
        output: CreateInsightResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members': {
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
        } & { json: { AccountDetails: AccountDetails[] } }
        output: CreateMembersResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            OnlyAssociated?: boolean | undefined
            MaxResults?: number | undefined
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
        output: ListMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invitations/decline': {
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
        } & { json: { AccountIds: NonEmptyString[] } }
        output: DeclineInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actionTargets/:ActionTargetArn': {
      $delete: {
        input: { param: { ActionTargetArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteActionTargetResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ActionTargetArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name?: string | undefined; Description?: string | undefined } }
        output: UpdateActionTargetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findingAggregator/delete/:FindingAggregatorArn': {
      $delete: {
        input: { param: { FindingAggregatorArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteFindingAggregatorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/insights/:InsightArn': {
      $delete: {
        input: { param: { InsightArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteInsightResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { InsightArn: string } } & {
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
            Name?: string | undefined
            Filters?:
              | {
                  ProductArn?: {} | undefined
                  AwsAccountId?: {} | undefined
                  Id?: {} | undefined
                  GeneratorId?: {} | undefined
                  Region?: {} | undefined
                  Type?: {} | undefined
                  FirstObservedAt?: {} | undefined
                  LastObservedAt?: {} | undefined
                  CreatedAt?: {} | undefined
                  UpdatedAt?: {} | undefined
                  SeverityProduct?: {} | undefined
                  SeverityNormalized?: {} | undefined
                  SeverityLabel?: {} | undefined
                  Confidence?: {} | undefined
                  Criticality?: {} | undefined
                  Title?: {} | undefined
                  Description?: {} | undefined
                  RecommendationText?: {} | undefined
                  SourceUrl?: {} | undefined
                  ProductFields?: {} | undefined
                  ProductName?: {} | undefined
                  CompanyName?: {} | undefined
                  UserDefinedFields?: {} | undefined
                  MalwareName?: {} | undefined
                  MalwareType?: {} | undefined
                  MalwarePath?: {} | undefined
                  MalwareState?: {} | undefined
                  NetworkDirection?: {} | undefined
                  NetworkProtocol?: {} | undefined
                  NetworkSourceIpV4?: {} | undefined
                  NetworkSourceIpV6?: {} | undefined
                  NetworkSourcePort?: {} | undefined
                  NetworkSourceDomain?: {} | undefined
                  NetworkSourceMac?: {} | undefined
                  NetworkDestinationIpV4?: {} | undefined
                  NetworkDestinationIpV6?: {} | undefined
                  NetworkDestinationPort?: {} | undefined
                  NetworkDestinationDomain?: {} | undefined
                  ProcessName?: {} | undefined
                  ProcessPath?: {} | undefined
                  ProcessPid?: {} | undefined
                  ProcessParentPid?: {} | undefined
                  ProcessLaunchedAt?: {} | undefined
                  ProcessTerminatedAt?: {} | undefined
                  ThreatIntelIndicatorType?: {} | undefined
                  ThreatIntelIndicatorValue?: {} | undefined
                  ThreatIntelIndicatorCategory?: {} | undefined
                  ThreatIntelIndicatorLastObservedAt?: {} | undefined
                  ThreatIntelIndicatorSource?: {} | undefined
                  ThreatIntelIndicatorSourceUrl?: {} | undefined
                  ResourceType?: {} | undefined
                  ResourceId?: {} | undefined
                  ResourcePartition?: {} | undefined
                  ResourceRegion?: {} | undefined
                  ResourceTags?: {} | undefined
                  ResourceAwsEc2InstanceType?: {} | undefined
                  ResourceAwsEc2InstanceImageId?: {} | undefined
                  ResourceAwsEc2InstanceIpV4Addresses?: {} | undefined
                  ResourceAwsEc2InstanceIpV6Addresses?: {} | undefined
                  ResourceAwsEc2InstanceKeyName?: {} | undefined
                  ResourceAwsEc2InstanceIamInstanceProfileArn?: {} | undefined
                  ResourceAwsEc2InstanceVpcId?: {} | undefined
                  ResourceAwsEc2InstanceSubnetId?: {} | undefined
                  ResourceAwsEc2InstanceLaunchedAt?: {} | undefined
                  ResourceAwsS3BucketOwnerId?: {} | undefined
                  ResourceAwsS3BucketOwnerName?: {} | undefined
                  ResourceAwsIamAccessKeyUserName?: {} | undefined
                  ResourceAwsIamAccessKeyPrincipalName?: {} | undefined
                  ResourceAwsIamAccessKeyStatus?: {} | undefined
                  ResourceAwsIamAccessKeyCreatedAt?: {} | undefined
                  ResourceAwsIamUserUserName?: {} | undefined
                  ResourceContainerName?: {} | undefined
                  ResourceContainerImageId?: {} | undefined
                  ResourceContainerImageName?: {} | undefined
                  ResourceContainerLaunchedAt?: {} | undefined
                  ResourceDetailsOther?: {} | undefined
                  ComplianceStatus?: {} | undefined
                  VerificationState?: {} | undefined
                  WorkflowState?: {} | undefined
                  WorkflowStatus?: {} | undefined
                  RecordState?: {} | undefined
                  RelatedFindingsProductArn?: {} | undefined
                  RelatedFindingsId?: {} | undefined
                  NoteText?: {} | undefined
                  NoteUpdatedAt?: {} | undefined
                  NoteUpdatedBy?: {} | undefined
                  Keyword?: {} | undefined
                  FindingProviderFieldsConfidence?: {} | undefined
                  FindingProviderFieldsCriticality?: {} | undefined
                  FindingProviderFieldsRelatedFindingsId?: {} | undefined
                  FindingProviderFieldsRelatedFindingsProductArn?: {} | undefined
                  FindingProviderFieldsSeverityLabel?: {} | undefined
                  FindingProviderFieldsSeverityOriginal?: {} | undefined
                  FindingProviderFieldsTypes?: {} | undefined
                  Sample?: {} | undefined
                  ComplianceSecurityControlId?: {} | undefined
                  ComplianceAssociatedStandardsId?: {} | undefined
                }
              | undefined
            GroupByAttribute?: string | undefined
          }
        }
        output: UpdateInsightResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invitations/delete': {
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
        } & { json: { AccountIds: NonEmptyString[] } }
        output: DeleteInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/delete': {
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
        } & { json: { AccountIds: NonEmptyString[] } }
        output: DeleteMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actionTargets/get': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            ActionTargetArns?: NonEmptyString[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: DescribeActionTargetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts': {
      $get: {
        input: { query: { HubArn?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeHubResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
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
        output: DisableSecurityHubResponse
        outputFormat: 'json'
        status: 200
      }
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
            Tags?: { [x: string]: TagValue } | undefined
            EnableDefaultStandards?: boolean | undefined
            ControlFindingGenerator?: 'STANDARD_CONTROL' | 'SECURITY_CONTROL' | undefined
          }
        }
        output: EnableSecurityHubResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
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
            AutoEnableControls?: boolean | undefined
            ControlFindingGenerator?: 'STANDARD_CONTROL' | 'SECURITY_CONTROL' | undefined
          }
        }
        output: UpdateSecurityHubConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/configuration': {
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
        output: DescribeOrganizationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: { AutoEnable: boolean; AutoEnableStandards?: 'NONE' | 'DEFAULT' | undefined } }
        output: UpdateOrganizationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/products': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            ProductArn?: string | undefined
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
        output: DescribeProductsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/standards': {
      $get: {
        input: { query: { NextToken?: string | undefined; MaxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeStandardsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/standards/controls/:StandardsSubscriptionArn': {
      $get: {
        input: { param: { StandardsSubscriptionArn: string } } & {
          query: { NextToken?: string | undefined; MaxResults?: number | undefined }
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
        output: DescribeStandardsControlsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/productSubscriptions/:ProductSubscriptionArn': {
      $delete: {
        input: { param: { ProductSubscriptionArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisableImportFindingsForProductResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/admin/disable': {
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
        } & { json: { AdminAccountId: string } }
        output: DisableOrganizationAdminAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/administrator/disassociate': {
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
        }
        output: DisassociateFromAdministratorAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/master/disassociate': {
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
        }
        output: DisassociateFromMasterAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/disassociate': {
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
        } & { json: { AccountIds: NonEmptyString[] } }
        output: DisassociateMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/productSubscriptions': {
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
        } & { json: { ProductArn: string } }
        output: EnableImportFindingsForProductResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { NextToken?: string | undefined; MaxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListEnabledProductsForImportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/admin/enable': {
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
        } & { json: { AdminAccountId: string } }
        output: EnableOrganizationAdminAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/standards/get': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            StandardsSubscriptionArns?: NonEmptyString[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: GetEnabledStandardsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findingAggregator/get/:FindingAggregatorArn': {
      $get: {
        input: { param: { FindingAggregatorArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetFindingAggregatorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            Filters?:
              | {
                  ProductArn?: {} | undefined
                  AwsAccountId?: {} | undefined
                  Id?: {} | undefined
                  GeneratorId?: {} | undefined
                  Region?: {} | undefined
                  Type?: {} | undefined
                  FirstObservedAt?: {} | undefined
                  LastObservedAt?: {} | undefined
                  CreatedAt?: {} | undefined
                  UpdatedAt?: {} | undefined
                  SeverityProduct?: {} | undefined
                  SeverityNormalized?: {} | undefined
                  SeverityLabel?: {} | undefined
                  Confidence?: {} | undefined
                  Criticality?: {} | undefined
                  Title?: {} | undefined
                  Description?: {} | undefined
                  RecommendationText?: {} | undefined
                  SourceUrl?: {} | undefined
                  ProductFields?: {} | undefined
                  ProductName?: {} | undefined
                  CompanyName?: {} | undefined
                  UserDefinedFields?: {} | undefined
                  MalwareName?: {} | undefined
                  MalwareType?: {} | undefined
                  MalwarePath?: {} | undefined
                  MalwareState?: {} | undefined
                  NetworkDirection?: {} | undefined
                  NetworkProtocol?: {} | undefined
                  NetworkSourceIpV4?: {} | undefined
                  NetworkSourceIpV6?: {} | undefined
                  NetworkSourcePort?: {} | undefined
                  NetworkSourceDomain?: {} | undefined
                  NetworkSourceMac?: {} | undefined
                  NetworkDestinationIpV4?: {} | undefined
                  NetworkDestinationIpV6?: {} | undefined
                  NetworkDestinationPort?: {} | undefined
                  NetworkDestinationDomain?: {} | undefined
                  ProcessName?: {} | undefined
                  ProcessPath?: {} | undefined
                  ProcessPid?: {} | undefined
                  ProcessParentPid?: {} | undefined
                  ProcessLaunchedAt?: {} | undefined
                  ProcessTerminatedAt?: {} | undefined
                  ThreatIntelIndicatorType?: {} | undefined
                  ThreatIntelIndicatorValue?: {} | undefined
                  ThreatIntelIndicatorCategory?: {} | undefined
                  ThreatIntelIndicatorLastObservedAt?: {} | undefined
                  ThreatIntelIndicatorSource?: {} | undefined
                  ThreatIntelIndicatorSourceUrl?: {} | undefined
                  ResourceType?: {} | undefined
                  ResourceId?: {} | undefined
                  ResourcePartition?: {} | undefined
                  ResourceRegion?: {} | undefined
                  ResourceTags?: {} | undefined
                  ResourceAwsEc2InstanceType?: {} | undefined
                  ResourceAwsEc2InstanceImageId?: {} | undefined
                  ResourceAwsEc2InstanceIpV4Addresses?: {} | undefined
                  ResourceAwsEc2InstanceIpV6Addresses?: {} | undefined
                  ResourceAwsEc2InstanceKeyName?: {} | undefined
                  ResourceAwsEc2InstanceIamInstanceProfileArn?: {} | undefined
                  ResourceAwsEc2InstanceVpcId?: {} | undefined
                  ResourceAwsEc2InstanceSubnetId?: {} | undefined
                  ResourceAwsEc2InstanceLaunchedAt?: {} | undefined
                  ResourceAwsS3BucketOwnerId?: {} | undefined
                  ResourceAwsS3BucketOwnerName?: {} | undefined
                  ResourceAwsIamAccessKeyUserName?: {} | undefined
                  ResourceAwsIamAccessKeyPrincipalName?: {} | undefined
                  ResourceAwsIamAccessKeyStatus?: {} | undefined
                  ResourceAwsIamAccessKeyCreatedAt?: {} | undefined
                  ResourceAwsIamUserUserName?: {} | undefined
                  ResourceContainerName?: {} | undefined
                  ResourceContainerImageId?: {} | undefined
                  ResourceContainerImageName?: {} | undefined
                  ResourceContainerLaunchedAt?: {} | undefined
                  ResourceDetailsOther?: {} | undefined
                  ComplianceStatus?: {} | undefined
                  VerificationState?: {} | undefined
                  WorkflowState?: {} | undefined
                  WorkflowStatus?: {} | undefined
                  RecordState?: {} | undefined
                  RelatedFindingsProductArn?: {} | undefined
                  RelatedFindingsId?: {} | undefined
                  NoteText?: {} | undefined
                  NoteUpdatedAt?: {} | undefined
                  NoteUpdatedBy?: {} | undefined
                  Keyword?: {} | undefined
                  FindingProviderFieldsConfidence?: {} | undefined
                  FindingProviderFieldsCriticality?: {} | undefined
                  FindingProviderFieldsRelatedFindingsId?: {} | undefined
                  FindingProviderFieldsRelatedFindingsProductArn?: {} | undefined
                  FindingProviderFieldsSeverityLabel?: {} | undefined
                  FindingProviderFieldsSeverityOriginal?: {} | undefined
                  FindingProviderFieldsTypes?: {} | undefined
                  Sample?: {} | undefined
                  ComplianceSecurityControlId?: {} | undefined
                  ComplianceAssociatedStandardsId?: {} | undefined
                }
              | undefined
            SortCriteria?: SortCriterion[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: GetFindingsResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
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
            Filters: {
              ProductArn?: {} | undefined
              AwsAccountId?: {} | undefined
              Id?: {} | undefined
              GeneratorId?: {} | undefined
              Region?: {} | undefined
              Type?: {} | undefined
              FirstObservedAt?: {} | undefined
              LastObservedAt?: {} | undefined
              CreatedAt?: {} | undefined
              UpdatedAt?: {} | undefined
              SeverityProduct?: {} | undefined
              SeverityNormalized?: {} | undefined
              SeverityLabel?: {} | undefined
              Confidence?: {} | undefined
              Criticality?: {} | undefined
              Title?: {} | undefined
              Description?: {} | undefined
              RecommendationText?: {} | undefined
              SourceUrl?: {} | undefined
              ProductFields?: {} | undefined
              ProductName?: {} | undefined
              CompanyName?: {} | undefined
              UserDefinedFields?: {} | undefined
              MalwareName?: {} | undefined
              MalwareType?: {} | undefined
              MalwarePath?: {} | undefined
              MalwareState?: {} | undefined
              NetworkDirection?: {} | undefined
              NetworkProtocol?: {} | undefined
              NetworkSourceIpV4?: {} | undefined
              NetworkSourceIpV6?: {} | undefined
              NetworkSourcePort?: {} | undefined
              NetworkSourceDomain?: {} | undefined
              NetworkSourceMac?: {} | undefined
              NetworkDestinationIpV4?: {} | undefined
              NetworkDestinationIpV6?: {} | undefined
              NetworkDestinationPort?: {} | undefined
              NetworkDestinationDomain?: {} | undefined
              ProcessName?: {} | undefined
              ProcessPath?: {} | undefined
              ProcessPid?: {} | undefined
              ProcessParentPid?: {} | undefined
              ProcessLaunchedAt?: {} | undefined
              ProcessTerminatedAt?: {} | undefined
              ThreatIntelIndicatorType?: {} | undefined
              ThreatIntelIndicatorValue?: {} | undefined
              ThreatIntelIndicatorCategory?: {} | undefined
              ThreatIntelIndicatorLastObservedAt?: {} | undefined
              ThreatIntelIndicatorSource?: {} | undefined
              ThreatIntelIndicatorSourceUrl?: {} | undefined
              ResourceType?: {} | undefined
              ResourceId?: {} | undefined
              ResourcePartition?: {} | undefined
              ResourceRegion?: {} | undefined
              ResourceTags?: {} | undefined
              ResourceAwsEc2InstanceType?: {} | undefined
              ResourceAwsEc2InstanceImageId?: {} | undefined
              ResourceAwsEc2InstanceIpV4Addresses?: {} | undefined
              ResourceAwsEc2InstanceIpV6Addresses?: {} | undefined
              ResourceAwsEc2InstanceKeyName?: {} | undefined
              ResourceAwsEc2InstanceIamInstanceProfileArn?: {} | undefined
              ResourceAwsEc2InstanceVpcId?: {} | undefined
              ResourceAwsEc2InstanceSubnetId?: {} | undefined
              ResourceAwsEc2InstanceLaunchedAt?: {} | undefined
              ResourceAwsS3BucketOwnerId?: {} | undefined
              ResourceAwsS3BucketOwnerName?: {} | undefined
              ResourceAwsIamAccessKeyUserName?: {} | undefined
              ResourceAwsIamAccessKeyPrincipalName?: {} | undefined
              ResourceAwsIamAccessKeyStatus?: {} | undefined
              ResourceAwsIamAccessKeyCreatedAt?: {} | undefined
              ResourceAwsIamUserUserName?: {} | undefined
              ResourceContainerName?: {} | undefined
              ResourceContainerImageId?: {} | undefined
              ResourceContainerImageName?: {} | undefined
              ResourceContainerLaunchedAt?: {} | undefined
              ResourceDetailsOther?: {} | undefined
              ComplianceStatus?: {} | undefined
              VerificationState?: {} | undefined
              WorkflowState?: {} | undefined
              WorkflowStatus?: {} | undefined
              RecordState?: {} | undefined
              RelatedFindingsProductArn?: {} | undefined
              RelatedFindingsId?: {} | undefined
              NoteText?: {} | undefined
              NoteUpdatedAt?: {} | undefined
              NoteUpdatedBy?: {} | undefined
              Keyword?: {} | undefined
              FindingProviderFieldsConfidence?: {} | undefined
              FindingProviderFieldsCriticality?: {} | undefined
              FindingProviderFieldsRelatedFindingsId?: {} | undefined
              FindingProviderFieldsRelatedFindingsProductArn?: {} | undefined
              FindingProviderFieldsSeverityLabel?: {} | undefined
              FindingProviderFieldsSeverityOriginal?: {} | undefined
              FindingProviderFieldsTypes?: {} | undefined
              Sample?: {} | undefined
              ComplianceSecurityControlId?: {} | undefined
              ComplianceAssociatedStandardsId?: {} | undefined
            }
            Note?: { Text?: {} | undefined; UpdatedBy?: {} | undefined } | undefined
            RecordState?: 'ACTIVE' | 'ARCHIVED' | undefined
          }
        }
        output: UpdateFindingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/insights/results/:InsightArn': {
      $get: {
        input: { param: { InsightArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetInsightResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/insights/get': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            InsightArns?: NonEmptyString[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        }
        output: GetInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invitations/count': {
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
        output: GetInvitationsCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/get': {
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
        } & { json: { AccountIds: NonEmptyString[] } }
        output: GetMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/invite': {
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
        } & { json: { AccountIds: NonEmptyString[] } }
        output: InviteMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findingAggregator/list': {
      $get: {
        input: { query: { NextToken?: string | undefined; MaxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListFindingAggregatorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invitations': {
      $get: {
        input: { query: { MaxResults?: number | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/admin': {
      $get: {
        input: { query: { MaxResults?: number | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListOrganizationAdminAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/securityControls/definitions': {
      $get: {
        input: {
          query: {
            StandardsArn?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
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
        output: ListSecurityControlDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associations#SecurityControlId': {
      $get: {
        input: {
          query: {
            SecurityControlId: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
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
        output: ListStandardsControlAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn': {
      $get: {
        input: { param: { ResourceArn: string } } & {
          header: {
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
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ResourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn#tagKeys': {
      $delete: {
        input: { param: { ResourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findingAggregator/update': {
      $patch: {
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
            FindingAggregatorArn: string
            RegionLinkingMode: string
            Regions?: NonEmptyString[] | undefined
          }
        }
        output: UpdateFindingAggregatorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/standards/control/:StandardsControlArn': {
      $patch: {
        input: { param: { StandardsControlArn: string } } & {
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
            ControlStatus?: 'ENABLED' | 'DISABLED' | undefined
            DisabledReason?: string | undefined
          }
        }
        output: UpdateStandardsControlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
