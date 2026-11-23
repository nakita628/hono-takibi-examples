type AcceptInvitationResponse = { [x: string]: unknown }
type String = string
type BatchGetCustomDataIdentifiersResponse = {
  customDataIdentifiers?: {} | undefined
  notFoundIdentifierIds?: {} | undefined
}
type CreateAllowListResponse = { arn?: {} | undefined; id?: {} | undefined }
type ListAllowListsResponse = { allowLists?: {} | undefined; nextToken?: {} | undefined }
type CreateClassificationJobResponse = { jobArn?: {} | undefined; jobId?: {} | undefined }
type SeverityLevel = { occurrencesThreshold: {}; severity: {} }
type CreateCustomDataIdentifierResponse = { customDataIdentifierId?: {} | undefined }
type CreateFindingsFilterResponse = { arn?: {} | undefined; id?: {} | undefined }
type ListFindingsFiltersResponse = {
  findingsFilterListItems?: {} | undefined
  nextToken?: {} | undefined
}
type CreateInvitationsResponse = { unprocessedAccounts?: {} | undefined }
type ListInvitationsResponse = { invitations?: {} | undefined; nextToken?: {} | undefined }
type CreateMemberResponse = { arn?: {} | undefined }
type ListMembersResponse = { members?: {} | undefined; nextToken?: {} | undefined }
type FindingType =
  | 'SensitiveData:S3Object/Multiple'
  | 'SensitiveData:S3Object/Financial'
  | 'SensitiveData:S3Object/Personal'
  | 'SensitiveData:S3Object/Credentials'
  | 'SensitiveData:S3Object/CustomIdentifier'
  | 'Policy:IAMUser/S3BucketPublic'
  | 'Policy:IAMUser/S3BucketSharedExternally'
  | 'Policy:IAMUser/S3BucketReplicatedExternally'
  | 'Policy:IAMUser/S3BucketEncryptionDisabled'
  | 'Policy:IAMUser/S3BlockPublicAccessDisabled'
  | 'Policy:IAMUser/S3BucketSharedWithCloudFront'
type CreateSampleFindingsResponse = { [x: string]: unknown }
type DeclineInvitationsResponse = { unprocessedAccounts?: {} | undefined }
type DeleteAllowListResponse = { [x: string]: unknown }
type GetAllowListResponse = {
  arn?: {} | undefined
  createdAt?: {} | undefined
  criteria?:
    | { regex?: {} | undefined; s3WordsList?: { bucketName: {}; objectKey: {} } | undefined }
    | undefined
  description?: {} | undefined
  id?: {} | undefined
  name?: {} | undefined
  status?: { code: {}; description?: {} | undefined } | undefined
  tags?: {} | undefined
  updatedAt?: {} | undefined
}
type UpdateAllowListResponse = { arn?: {} | undefined; id?: {} | undefined }
type DeleteCustomDataIdentifierResponse = { [x: string]: unknown }
type GetCustomDataIdentifierResponse = {
  arn?: {} | undefined
  createdAt?: {} | undefined
  deleted?: {} | undefined
  description?: {} | undefined
  id?: {} | undefined
  ignoreWords?: {} | undefined
  keywords?: {} | undefined
  maximumMatchDistance?: {} | undefined
  name?: {} | undefined
  regex?: {} | undefined
  severityLevels?: {} | undefined
  tags?: {} | undefined
}
type DeleteFindingsFilterResponse = { [x: string]: unknown }
type GetFindingsFilterResponse = {
  action?: {} | undefined
  arn?: {} | undefined
  description?: {} | undefined
  findingCriteria?: { criterion?: {} | undefined } | undefined
  id?: {} | undefined
  name?: {} | undefined
  position?: {} | undefined
  tags?: {} | undefined
}
type UpdateFindingsFilterResponse = { arn?: {} | undefined; id?: {} | undefined }
type DeleteInvitationsResponse = { unprocessedAccounts?: {} | undefined }
type DeleteMemberResponse = { [x: string]: unknown }
type GetMemberResponse = {
  accountId?: {} | undefined
  administratorAccountId?: {} | undefined
  arn?: {} | undefined
  email?: {} | undefined
  invitedAt?: {} | undefined
  masterAccountId?: {} | undefined
  relationshipStatus?: {} | undefined
  tags?: {} | undefined
  updatedAt?: {} | undefined
}
type BucketCriteriaAdditionalProperties = {
  eq?: {} | undefined
  gt?: {} | undefined
  gte?: {} | undefined
  lt?: {} | undefined
  lte?: {} | undefined
  neq?: {} | undefined
  prefix?: {} | undefined
}
type DescribeBucketsResponse = { buckets?: {} | undefined; nextToken?: {} | undefined }
type DescribeClassificationJobResponse = {
  allowListIds?: {} | undefined
  clientToken?: {} | undefined
  createdAt?: {} | undefined
  customDataIdentifierIds?: {} | undefined
  description?: {} | undefined
  initialRun?: {} | undefined
  jobArn?: {} | undefined
  jobId?: {} | undefined
  jobStatus?: {} | undefined
  jobType?: {} | undefined
  lastRunErrorStatus?: { code?: {} | undefined } | undefined
  lastRunTime?: {} | undefined
  managedDataIdentifierIds?: {} | undefined
  managedDataIdentifierSelector?: {} | undefined
  name?: {} | undefined
  s3JobDefinition?:
    | {
        bucketCriteria?:
          | {
              excludes?: { and?: {} | undefined } | undefined
              includes?: { and?: {} | undefined } | undefined
            }
          | undefined
        bucketDefinitions?: {} | undefined
        scoping?:
          | {
              excludes?: { and?: {} | undefined } | undefined
              includes?: { and?: {} | undefined } | undefined
            }
          | undefined
      }
    | undefined
  samplingPercentage?: {} | undefined
  scheduleFrequency?:
    | {
        dailySchedule?: {} | undefined
        monthlySchedule?: { dayOfMonth?: {} | undefined } | undefined
        weeklySchedule?: { dayOfWeek?: {} | undefined } | undefined
      }
    | undefined
  statistics?:
    | { approximateNumberOfObjectsToProcess?: {} | undefined; numberOfRuns?: {} | undefined }
    | undefined
  tags?: {} | undefined
  userPausedDetails?:
    | {
        jobExpiresAt?: {} | undefined
        jobImminentExpirationHealthEventArn?: {} | undefined
        jobPausedAt?: {} | undefined
      }
    | undefined
}
type UpdateClassificationJobResponse = { [x: string]: unknown }
type DescribeOrganizationConfigurationResponse = {
  autoEnable?: {} | undefined
  maxAccountLimitReached?: {} | undefined
}
type UpdateOrganizationConfigurationResponse = { [x: string]: unknown }
type DisableMacieResponse = { [x: string]: unknown }
type EnableMacieResponse = { [x: string]: unknown }
type GetMacieSessionResponse = {
  createdAt?: {} | undefined
  findingPublishingFrequency?: {} | undefined
  serviceRole?: {} | undefined
  status?: {} | undefined
  updatedAt?: {} | undefined
}
type UpdateMacieSessionResponse = { [x: string]: unknown }
type DisableOrganizationAdminAccountResponse = { [x: string]: unknown }
type DisassociateFromAdministratorAccountResponse = { [x: string]: unknown }
type DisassociateFromMasterAccountResponse = { [x: string]: unknown }
type DisassociateMemberResponse = { [x: string]: unknown }
type EnableOrganizationAdminAccountResponse = { [x: string]: unknown }
type ListOrganizationAdminAccountsResponse = {
  adminAccounts?: {} | undefined
  nextToken?: {} | undefined
}
type GetAdministratorAccountResponse = {
  administrator?:
    | {
        accountId?: {} | undefined
        invitationId?: {} | undefined
        invitedAt?: {} | undefined
        relationshipStatus?: {} | undefined
      }
    | undefined
}
type GetAutomatedDiscoveryConfigurationResponse = {
  classificationScopeId?: {} | undefined
  disabledAt?: {} | undefined
  firstEnabledAt?: {} | undefined
  lastUpdatedAt?: {} | undefined
  sensitivityInspectionTemplateId?: {} | undefined
  status?: {} | undefined
}
type UpdateAutomatedDiscoveryConfigurationResponse = { [x: string]: unknown }
type GetBucketStatisticsResponse = {
  bucketCount?: {} | undefined
  bucketCountByEffectivePermission?:
    | {
        publiclyAccessible?: {} | undefined
        publiclyReadable?: {} | undefined
        publiclyWritable?: {} | undefined
        unknown?: {} | undefined
      }
    | undefined
  bucketCountByEncryptionType?:
    | {
        kmsManaged?: {} | undefined
        s3Managed?: {} | undefined
        unencrypted?: {} | undefined
        unknown?: {} | undefined
      }
    | undefined
  bucketCountByObjectEncryptionRequirement?:
    | {
        allowsUnencryptedObjectUploads?: {} | undefined
        deniesUnencryptedObjectUploads?: {} | undefined
        unknown?: {} | undefined
      }
    | undefined
  bucketCountBySharedAccessType?:
    | {
        external?: {} | undefined
        internal?: {} | undefined
        notShared?: {} | undefined
        unknown?: {} | undefined
      }
    | undefined
  bucketStatisticsBySensitivity?:
    | {
        classificationError?:
          | {
              classifiableSizeInBytes?: {} | undefined
              publiclyAccessibleCount?: {} | undefined
              totalCount?: {} | undefined
              totalSizeInBytes?: {} | undefined
            }
          | undefined
        notClassified?:
          | {
              classifiableSizeInBytes?: {} | undefined
              publiclyAccessibleCount?: {} | undefined
              totalCount?: {} | undefined
              totalSizeInBytes?: {} | undefined
            }
          | undefined
        notSensitive?:
          | {
              classifiableSizeInBytes?: {} | undefined
              publiclyAccessibleCount?: {} | undefined
              totalCount?: {} | undefined
              totalSizeInBytes?: {} | undefined
            }
          | undefined
        sensitive?:
          | {
              classifiableSizeInBytes?: {} | undefined
              publiclyAccessibleCount?: {} | undefined
              totalCount?: {} | undefined
              totalSizeInBytes?: {} | undefined
            }
          | undefined
      }
    | undefined
  classifiableObjectCount?: {} | undefined
  classifiableSizeInBytes?: {} | undefined
  lastUpdated?: {} | undefined
  objectCount?: {} | undefined
  sizeInBytes?: {} | undefined
  sizeInBytesCompressed?: {} | undefined
  unclassifiableObjectCount?:
    | { fileType?: {} | undefined; storageClass?: {} | undefined; total?: {} | undefined }
    | undefined
  unclassifiableObjectSizeInBytes?:
    | { fileType?: {} | undefined; storageClass?: {} | undefined; total?: {} | undefined }
    | undefined
}
type GetClassificationExportConfigurationResponse = {
  configuration?:
    | { s3Destination?: { bucketName: {}; keyPrefix?: {} | undefined; kmsKeyArn: {} } | undefined }
    | undefined
}
type PutClassificationExportConfigurationResponse = {
  configuration?:
    | { s3Destination?: { bucketName: {}; keyPrefix?: {} | undefined; kmsKeyArn: {} } | undefined }
    | undefined
}
type GetClassificationScopeResponse = {
  id?: {} | undefined
  name?: {} | undefined
  s3?: { excludes: { bucketNames: {} } } | undefined
}
type UpdateClassificationScopeResponse = { [x: string]: unknown }
type GetFindingStatisticsResponse = { countsByGroup?: {} | undefined }
type GetFindingsResponse = { findings?: {} | undefined }
type GetFindingsPublicationConfigurationResponse = {
  securityHubConfiguration?:
    | { publishClassificationFindings: {}; publishPolicyFindings: {} }
    | undefined
}
type PutFindingsPublicationConfigurationResponse = { [x: string]: unknown }
type GetInvitationsCountResponse = { invitationsCount?: {} | undefined }
type GetMasterAccountResponse = {
  master?:
    | {
        accountId?: {} | undefined
        invitationId?: {} | undefined
        invitedAt?: {} | undefined
        relationshipStatus?: {} | undefined
      }
    | undefined
}
type GetResourceProfileResponse = {
  profileUpdatedAt?: {} | undefined
  sensitivityScore?: {} | undefined
  sensitivityScoreOverridden?: {} | undefined
  statistics?:
    | {
        totalBytesClassified?: {} | undefined
        totalDetections?: {} | undefined
        totalDetectionsSuppressed?: {} | undefined
        totalItemsClassified?: {} | undefined
        totalItemsSensitive?: {} | undefined
        totalItemsSkipped?: {} | undefined
        totalItemsSkippedInvalidEncryption?: {} | undefined
        totalItemsSkippedInvalidKms?: {} | undefined
        totalItemsSkippedPermissionDenied?: {} | undefined
      }
    | undefined
}
type UpdateResourceProfileResponse = { [x: string]: unknown }
type GetRevealConfigurationResponse = {
  configuration?: { kmsKeyId?: {} | undefined; status: {} } | undefined
}
type UpdateRevealConfigurationResponse = {
  configuration?: { kmsKeyId?: {} | undefined; status: {} } | undefined
}
type GetSensitiveDataOccurrencesResponse = {
  error?: {} | undefined
  sensitiveDataOccurrences?: {} | undefined
  status?: {} | undefined
}
type GetSensitiveDataOccurrencesAvailabilityResponse = {
  code?: {} | undefined
  reasons?: {} | undefined
}
type GetSensitivityInspectionTemplateResponse = {
  description?: {} | undefined
  excludes?: { managedDataIdentifierIds?: {} | undefined } | undefined
  includes?:
    | {
        allowListIds?: {} | undefined
        customDataIdentifierIds?: {} | undefined
        managedDataIdentifierIds?: {} | undefined
      }
    | undefined
  name?: {} | undefined
  sensitivityInspectionTemplateId?: {} | undefined
}
type UpdateSensitivityInspectionTemplateResponse = { [x: string]: unknown }
type UsageStatisticsFilter = {
  comparator?: {} | undefined
  key?: {} | undefined
  values?: {} | undefined
}
type GetUsageStatisticsResponse = {
  nextToken?: {} | undefined
  records?: {} | undefined
  timeRange?: {} | undefined
}
type GetUsageTotalsResponse = { timeRange?: {} | undefined; usageTotals?: {} | undefined }
type ListClassificationJobsResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListClassificationScopesResponse = {
  classificationScopes?: {} | undefined
  nextToken?: {} | undefined
}
type ListCustomDataIdentifiersResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListFindingsResponse = { findingIds?: {} | undefined; nextToken?: {} | undefined }
type ListManagedDataIdentifiersResponse = { items?: {} | undefined; nextToken?: {} | undefined }
type ListResourceProfileArtifactsResponse = {
  artifacts?: {} | undefined
  nextToken?: {} | undefined
}
type ListResourceProfileDetectionsResponse = {
  detections?: {} | undefined
  nextToken?: {} | undefined
}
type SuppressDataIdentifier = { id?: {} | undefined; type?: {} | undefined }
type UpdateResourceProfileDetectionsResponse = { [x: string]: unknown }
type ListSensitivityInspectionTemplatesResponse = {
  nextToken?: {} | undefined
  sensitivityInspectionTemplates?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type SearchResourcesResponse = { matchingResources?: {} | undefined; nextToken?: {} | undefined }
type TestCustomDataIdentifierResponse = { matchCount?: {} | undefined }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateMemberSessionResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/invitations/accept': {
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
            administratorAccountId?: string | undefined
            invitationId: string
            masterAccount?: string | undefined
          }
        }
        output: AcceptInvitationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/custom-data-identifiers/get': {
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
        } & { json: { ids?: String[] | undefined } }
        output: BatchGetCustomDataIdentifiersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/allow-lists': {
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
            clientToken: string
            criteria: {
              regex?: {} | undefined
              s3WordsList?: { bucketName: {}; objectKey: {} } | undefined
            }
            description?: string | undefined
            name: string
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateAllowListResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAllowListsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs': {
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
            allowListIds?: String[] | undefined
            clientToken: string
            customDataIdentifierIds?: String[] | undefined
            description?: string | undefined
            initialRun?: boolean | undefined
            jobType: 'ONE_TIME' | 'SCHEDULED'
            managedDataIdentifierIds?: String[] | undefined
            managedDataIdentifierSelector?: 'ALL' | 'EXCLUDE' | 'INCLUDE' | 'NONE' | undefined
            name: string
            s3JobDefinition: {
              bucketCriteria?:
                | {
                    excludes?: { and?: {} | undefined } | undefined
                    includes?: { and?: {} | undefined } | undefined
                  }
                | undefined
              bucketDefinitions?: {} | undefined
              scoping?:
                | {
                    excludes?: { and?: {} | undefined } | undefined
                    includes?: { and?: {} | undefined } | undefined
                  }
                | undefined
            }
            samplingPercentage?: number | undefined
            scheduleFrequency?:
              | {
                  dailySchedule?: {} | undefined
                  monthlySchedule?: { dayOfMonth?: {} | undefined } | undefined
                  weeklySchedule?: { dayOfWeek?: {} | undefined } | undefined
                }
              | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateClassificationJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/custom-data-identifiers': {
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
            clientToken?: string | undefined
            description?: string | undefined
            ignoreWords?: String[] | undefined
            keywords?: String[] | undefined
            maximumMatchDistance?: number | undefined
            name: string
            regex: string
            severityLevels?: SeverityLevel[] | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateCustomDataIdentifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findingsfilters': {
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
            action: 'ARCHIVE' | 'NOOP'
            clientToken?: string | undefined
            description?: string | undefined
            findingCriteria: { criterion?: {} | undefined }
            name: string
            position?: number | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateFindingsFilterResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListFindingsFiltersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invitations': {
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
            accountIds: String[]
            disableEmailNotification?: boolean | undefined
            message?: string | undefined
          }
        }
        output: CreateInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
          header: {
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
        } & {
          json: {
            account: { accountId?: {} | undefined; email?: {} | undefined }
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateMemberResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            onlyAssociated?: string | undefined
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
    '/findings/sample': {
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
        } & { json: { findingTypes?: FindingType[] | undefined } }
        output: CreateSampleFindingsResponse
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
        } & { json: { accountIds: String[] } }
        output: DeclineInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/allow-lists/:id': {
      $delete: {
        input: { param: { id: string } } & { query: { ignoreJobChecks?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteAllowListResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAllowListResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
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
            criteria: {
              regex?: {} | undefined
              s3WordsList?: { bucketName: {}; objectKey: {} } | undefined
            }
            description?: string | undefined
            name: string
          }
        }
        output: UpdateAllowListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/custom-data-identifiers/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteCustomDataIdentifierResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCustomDataIdentifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findingsfilters/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteFindingsFilterResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetFindingsFilterResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
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
            action?: 'ARCHIVE' | 'NOOP' | undefined
            clientToken?: string | undefined
            description?: string | undefined
            findingCriteria?: { criterion?: {} | undefined } | undefined
            name?: string | undefined
            position?: number | undefined
          }
        }
        output: UpdateFindingsFilterResponse
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
        } & { json: { accountIds: String[] } }
        output: DeleteInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/members/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteMemberResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetMemberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasources/s3': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            criteria?: { [x: string]: BucketCriteriaAdditionalProperties } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            sortCriteria?: { attributeName?: {} | undefined; orderBy?: {} | undefined } | undefined
          }
        }
        output: DescribeBucketsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId': {
      $get: {
        input: { param: { jobId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeClassificationJobResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { jobId: string } } & {
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
            jobStatus: 'RUNNING' | 'PAUSED' | 'CANCELLED' | 'COMPLETE' | 'IDLE' | 'USER_PAUSED'
          }
        }
        output: UpdateClassificationJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/configuration': {
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
        } & { json: { autoEnable: boolean } }
        output: UpdateOrganizationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/macie': {
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
        output: DisableMacieResponse
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
            clientToken?: string | undefined
            findingPublishingFrequency?: 'FIFTEEN_MINUTES' | 'ONE_HOUR' | 'SIX_HOURS' | undefined
            status?: 'PAUSED' | 'ENABLED' | undefined
          }
        }
        output: EnableMacieResponse
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
        output: GetMacieSessionResponse
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
            findingPublishingFrequency?: 'FIFTEEN_MINUTES' | 'ONE_HOUR' | 'SIX_HOURS' | undefined
            status?: 'PAUSED' | 'ENABLED' | undefined
          }
        }
        output: UpdateMacieSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin#adminAccountId': {
      $delete: {
        input: { query: { adminAccountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
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
    '/members/disassociate/:id': {
      $post: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DisassociateMemberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin': {
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
        } & { json: { adminAccountId: string; clientToken?: string | undefined } }
        output: EnableOrganizationAdminAccountResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
          header: {
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
    '/administrator': {
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
    '/automated-discovery/configuration': {
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
        output: GetAutomatedDiscoveryConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: { status: 'ENABLED' | 'DISABLED' } }
        output: UpdateAutomatedDiscoveryConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasources/s3/statistics': {
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
        } & { json: { accountId?: string | undefined } }
        output: GetBucketStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/classification-export-configuration': {
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
        output: GetClassificationExportConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
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
            configuration: {
              s3Destination?:
                | { bucketName: {}; keyPrefix?: {} | undefined; kmsKeyArn: {} }
                | undefined
            }
          }
        }
        output: PutClassificationExportConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/classification-scopes/:id': {
      $get: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetClassificationScopeResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
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
          json: { s3?: { excludes?: { bucketNames: {}; operation: {} } | undefined } | undefined }
        }
        output: UpdateClassificationScopeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings/statistics': {
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
            findingCriteria?: { criterion?: {} | undefined } | undefined
            groupBy:
              | 'resourcesAffected.s3Bucket.name'
              | 'type'
              | 'classificationDetails.jobId'
              | 'severity.description'
            size?: number | undefined
            sortCriteria?: { attributeName?: {} | undefined; orderBy?: {} | undefined } | undefined
          }
        }
        output: GetFindingStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings/describe': {
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
            findingIds: String[]
            sortCriteria?: { attributeName?: {} | undefined; orderBy?: {} | undefined } | undefined
          }
        }
        output: GetFindingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings-publication-configuration': {
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
        output: GetFindingsPublicationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
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
            clientToken?: string | undefined
            securityHubConfiguration?:
              | {
                  publishClassificationFindings?: {} | undefined
                  publishPolicyFindings?: {} | undefined
                }
              | undefined
          }
        }
        output: PutFindingsPublicationConfigurationResponse
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
    '/master': {
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
    '/resource-profiles#resourceArn': {
      $get: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetResourceProfileResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { sensitivityScoreOverride?: number | undefined } }
        output: UpdateResourceProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reveal-configuration': {
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
        output: GetRevealConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: { configuration: { kmsKeyId?: {} | undefined; status?: {} | undefined } } }
        output: UpdateRevealConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings/:findingId/reveal': {
      $get: {
        input: { param: { findingId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSensitiveDataOccurrencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings/:findingId/reveal/availability': {
      $get: {
        input: { param: { findingId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSensitiveDataOccurrencesAvailabilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/sensitivity-inspections/:id': {
      $get: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSensitivityInspectionTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
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
            description?: string | undefined
            excludes?: { managedDataIdentifierIds?: {} | undefined } | undefined
            includes?:
              | {
                  allowListIds?: {} | undefined
                  customDataIdentifierIds?: {} | undefined
                  managedDataIdentifierIds?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateSensitivityInspectionTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usage/statistics': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            filterBy?: UsageStatisticsFilter[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            sortBy?: { key?: {} | undefined; orderBy?: {} | undefined } | undefined
            timeRange?: 'MONTH_TO_DATE' | 'PAST_30_DAYS' | undefined
          }
        }
        output: GetUsageStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usage': {
      $get: {
        input: { query: { timeRange?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetUsageTotalsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/list': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            filterCriteria?: { excludes?: {} | undefined; includes?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            sortCriteria?: { attributeName?: {} | undefined; orderBy?: {} | undefined } | undefined
          }
        }
        output: ListClassificationJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/classification-scopes': {
      $get: {
        input: { query: { name?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListClassificationScopesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/custom-data-identifiers/list': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListCustomDataIdentifiersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/findings': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            findingCriteria?: { criterion?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            sortCriteria?: { attributeName?: {} | undefined; orderBy?: {} | undefined } | undefined
          }
        }
        output: ListFindingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/managed-data-identifiers/list': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
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
        output: ListManagedDataIdentifiersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resource-profiles/artifacts#resourceArn': {
      $get: {
        input: { query: { nextToken?: string | undefined; resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListResourceProfileArtifactsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resource-profiles/detections#resourceArn': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            resourceArn: string
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
        output: ListResourceProfileDetectionsResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { suppressDataIdentifiers?: SuppressDataIdentifier[] | undefined } }
        output: UpdateResourceProfileDetectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/sensitivity-inspections': {
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSensitivityInspectionTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
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
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: String } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/datasources/search-resources': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            bucketCriteria?:
              | {
                  excludes?: { and?: {} | undefined } | undefined
                  includes?: { and?: {} | undefined } | undefined
                }
              | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
            sortCriteria?: { attributeName?: {} | undefined; orderBy?: {} | undefined } | undefined
          }
        }
        output: SearchResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/custom-data-identifiers/test': {
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
            ignoreWords?: String[] | undefined
            keywords?: String[] | undefined
            maximumMatchDistance?: number | undefined
            regex: string
            sampleText: string
          }
        }
        output: TestCustomDataIdentifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: String[] } } & {
          header: {
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
        status: 204
      }
    }
  } & {
    '/macie/members/:id': {
      $patch: {
        input: { param: { id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { status: 'PAUSED' | 'ENABLED' } }
        output: UpdateMemberSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
