type EntityNotExistsException = { [x: string]: unknown }
type ProhibitedStateException = { [x: string]: unknown }
type UnauthorizedOperationException = { [x: string]: unknown }
type UnauthorizedResourceAccessException = { [x: string]: unknown }
type FailedDependencyException = { [x: string]: unknown }
type ServiceUnavailableException = { [x: string]: unknown }
type ConcurrentModificationException = { [x: string]: unknown }
type GetDocumentVersionResponse = {
  Metadata?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        ContentType?: {} | undefined
        Size?: {} | undefined
        Signature?: {} | undefined
        Status?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        ContentCreatedTimestamp?: {} | undefined
        ContentModifiedTimestamp?: {} | undefined
        CreatorId?: {} | undefined
        Thumbnail?: {} | undefined
        Source?: {} | undefined
      }
    | undefined
  CustomMetadata?: {} | undefined
}
type InvalidPasswordException = { [x: string]: unknown }
type InvalidOperationException = { [x: string]: unknown }
type ActivateUserResponse = {
  User?:
    | {
        Id?: {} | undefined
        Username?: {} | undefined
        EmailAddress?: {} | undefined
        GivenName?: {} | undefined
        Surname?: {} | undefined
        OrganizationId?: {} | undefined
        RootFolderId?: {} | undefined
        RecycleBinFolderId?: {} | undefined
        Status?: {} | undefined
        Type?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        TimeZoneId?: {} | undefined
        Locale?: {} | undefined
        Storage?:
          | {
              StorageUtilizedInBytes?: {} | undefined
              StorageRule?:
                | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type SharePrincipal = { Id: {}; Type: {}; Role: {} }
type AddResourcePermissionsResponse = { ShareResults?: {} | undefined }
type DescribeResourcePermissionsResponse = { Principals?: {} | undefined; Marker?: {} | undefined }
type InvalidArgumentException = { [x: string]: unknown }
type CreateCommentResponse = {
  Comment?:
    | {
        CommentId: {}
        ParentId?: {} | undefined
        ThreadId?: {} | undefined
        Text?: {} | undefined
        Contributor?:
          | {
              Id?: {} | undefined
              Username?: {} | undefined
              EmailAddress?: {} | undefined
              GivenName?: {} | undefined
              Surname?: {} | undefined
              OrganizationId?: {} | undefined
              RootFolderId?: {} | undefined
              RecycleBinFolderId?: {} | undefined
              Status?: {} | undefined
              Type?: {} | undefined
              CreatedTimestamp?: {} | undefined
              ModifiedTimestamp?: {} | undefined
              TimeZoneId?: {} | undefined
              Locale?: {} | undefined
              Storage?:
                | {
                    StorageUtilizedInBytes?: {} | undefined
                    StorageRule?:
                      | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                      | undefined
                  }
                | undefined
            }
          | undefined
        CreatedTimestamp?: {} | undefined
        Status?: {} | undefined
        Visibility?: {} | undefined
        RecipientId?: {} | undefined
      }
    | undefined
}
type DocumentLockedForCommentsException = { [x: string]: unknown }
type InvalidCommentOperationException = { [x: string]: unknown }
type CustomMetadataValueType = string
type CreateCustomMetadataResponse = { [x: string]: unknown }
type CustomMetadataLimitExceededException = { [x: string]: unknown }
type CustomMetadataKeyType = string
type DeleteCustomMetadataResponse = { [x: string]: unknown }
type CreateFolderResponse = {
  Metadata?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        CreatorId?: {} | undefined
        ParentFolderId?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        ResourceState?: {} | undefined
        Signature?: {} | undefined
        Labels?: {} | undefined
        Size?: {} | undefined
        LatestVersionSize?: {} | undefined
      }
    | undefined
}
type EntityAlreadyExistsException = { [x: string]: unknown }
type ConflictingOperationException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type SharedLabel = string
type CreateLabelsResponse = { [x: string]: unknown }
type TooManyLabelsException = { [x: string]: unknown }
type DeleteLabelsResponse = { [x: string]: unknown }
type CreateNotificationSubscriptionResponse = {
  Subscription?:
    | { SubscriptionId?: {} | undefined; EndPoint?: {} | undefined; Protocol?: {} | undefined }
    | undefined
}
type TooManySubscriptionsException = { [x: string]: unknown }
type DescribeNotificationSubscriptionsResponse = {
  Subscriptions?: {} | undefined
  Marker?: {} | undefined
}
type CreateUserResponse = {
  User?:
    | {
        Id?: {} | undefined
        Username?: {} | undefined
        EmailAddress?: {} | undefined
        GivenName?: {} | undefined
        Surname?: {} | undefined
        OrganizationId?: {} | undefined
        RootFolderId?: {} | undefined
        RecycleBinFolderId?: {} | undefined
        Status?: {} | undefined
        Type?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        TimeZoneId?: {} | undefined
        Locale?: {} | undefined
        Storage?:
          | {
              StorageUtilizedInBytes?: {} | undefined
              StorageRule?:
                | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeUsersResponse = {
  Users?: {} | undefined
  TotalNumberOfUsers?: {} | undefined
  Marker?: {} | undefined
}
type RequestedEntityTooLargeException = { [x: string]: unknown }
type GetDocumentResponse = {
  Metadata?:
    | {
        Id?: {} | undefined
        CreatorId?: {} | undefined
        ParentFolderId?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        LatestVersionMetadata?:
          | {
              Id?: {} | undefined
              Name?: {} | undefined
              ContentType?: {} | undefined
              Size?: {} | undefined
              Signature?: {} | undefined
              Status?: {} | undefined
              CreatedTimestamp?: {} | undefined
              ModifiedTimestamp?: {} | undefined
              ContentCreatedTimestamp?: {} | undefined
              ContentModifiedTimestamp?: {} | undefined
              CreatorId?: {} | undefined
              Thumbnail?: {} | undefined
              Source?: {} | undefined
            }
          | undefined
        ResourceState?: {} | undefined
        Labels?: {} | undefined
      }
    | undefined
  CustomMetadata?: {} | undefined
}
type GetFolderResponse = {
  Metadata?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        CreatorId?: {} | undefined
        ParentFolderId?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        ResourceState?: {} | undefined
        Signature?: {} | undefined
        Labels?: {} | undefined
        Size?: {} | undefined
        LatestVersionSize?: {} | undefined
      }
    | undefined
  CustomMetadata?: {} | undefined
}
type DescribeFolderContentsResponse = {
  Folders?: {} | undefined
  Documents?: {} | undefined
  Marker?: {} | undefined
}
type UpdateUserResponse = {
  User?:
    | {
        Id?: {} | undefined
        Username?: {} | undefined
        EmailAddress?: {} | undefined
        GivenName?: {} | undefined
        Surname?: {} | undefined
        OrganizationId?: {} | undefined
        RootFolderId?: {} | undefined
        RecycleBinFolderId?: {} | undefined
        Status?: {} | undefined
        Type?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        TimeZoneId?: {} | undefined
        Locale?: {} | undefined
        Storage?:
          | {
              StorageUtilizedInBytes?: {} | undefined
              StorageRule?:
                | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type IllegalUserStateException = { [x: string]: unknown }
type DeactivatingLastSystemUserException = { [x: string]: unknown }
type DescribeActivitiesResponse = { UserActivities?: {} | undefined; Marker?: {} | undefined }
type DescribeCommentsResponse = { Comments?: {} | undefined; Marker?: {} | undefined }
type DescribeDocumentVersionsResponse = {
  DocumentVersions?: {} | undefined
  Marker?: {} | undefined
}
type DescribeGroupsResponse = { Groups?: {} | undefined; Marker?: {} | undefined }
type DescribeRootFoldersResponse = { Folders?: {} | undefined; Marker?: {} | undefined }
type GetCurrentUserResponse = {
  User?:
    | {
        Id?: {} | undefined
        Username?: {} | undefined
        EmailAddress?: {} | undefined
        GivenName?: {} | undefined
        Surname?: {} | undefined
        OrganizationId?: {} | undefined
        RootFolderId?: {} | undefined
        RecycleBinFolderId?: {} | undefined
        Status?: {} | undefined
        Type?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        TimeZoneId?: {} | undefined
        Locale?: {} | undefined
        Storage?:
          | {
              StorageUtilizedInBytes?: {} | undefined
              StorageRule?:
                | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetDocumentPathResponse = { Path?: { Components?: {} | undefined } | undefined }
type GetFolderPathResponse = { Path?: { Components?: {} | undefined } | undefined }
type GetResourcesResponse = {
  Folders?: {} | undefined
  Documents?: {} | undefined
  Marker?: {} | undefined
}
type InitiateDocumentVersionUploadResponse = {
  Metadata?:
    | {
        Id?: {} | undefined
        CreatorId?: {} | undefined
        ParentFolderId?: {} | undefined
        CreatedTimestamp?: {} | undefined
        ModifiedTimestamp?: {} | undefined
        LatestVersionMetadata?:
          | {
              Id?: {} | undefined
              Name?: {} | undefined
              ContentType?: {} | undefined
              Size?: {} | undefined
              Signature?: {} | undefined
              Status?: {} | undefined
              CreatedTimestamp?: {} | undefined
              ModifiedTimestamp?: {} | undefined
              ContentCreatedTimestamp?: {} | undefined
              ContentModifiedTimestamp?: {} | undefined
              CreatorId?: {} | undefined
              Thumbnail?: {} | undefined
              Source?: {} | undefined
            }
          | undefined
        ResourceState?: {} | undefined
        Labels?: {} | undefined
      }
    | undefined
  UploadMetadata?: { UploadUrl?: {} | undefined; SignedHeaders?: {} | undefined } | undefined
}
type StorageLimitExceededException = { [x: string]: unknown }
type StorageLimitWillExceedException = { [x: string]: unknown }
type DraftUploadOutOfSyncException = { [x: string]: unknown }
type ResourceAlreadyCheckedOutException = { [x: string]: unknown }
type SearchQueryScopeType = 'NAME' | 'CONTENT'
type AdditionalResponseFieldType = 'WEBURL'
type SearchSortResult = { Field?: {} | undefined; Order?: {} | undefined }
type SearchResourcesResponse = { Items?: {} | undefined; Marker?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/documents/:DocumentId/versions/:VersionId': {
      $delete:
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { fields?: string | undefined; includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDocumentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { fields?: string | undefined; includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { fields?: string | undefined; includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { fields?: string | undefined; includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { fields?: string | undefined; includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { fields?: string | undefined; includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { fields?: string | undefined; includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { fields?: string | undefined; includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidPasswordException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VersionStatus?: 'ACTIVE' | undefined } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/api/v1/users/:UserId/activation': {
      $post:
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ActivateUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/api/v1/resources/:ResourceId/permissions': {
      $post:
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
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
                Principals: SharePrincipal[]
                NotificationOptions?:
                  | { SendEmail?: {} | undefined; EmailMessage?: {} | undefined }
                  | undefined
              }
            }
            output: AddResourcePermissionsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
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
                Principals: SharePrincipal[]
                NotificationOptions?:
                  | { SendEmail?: {} | undefined; EmailMessage?: {} | undefined }
                  | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
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
                Principals: SharePrincipal[]
                NotificationOptions?:
                  | { SendEmail?: {} | undefined; EmailMessage?: {} | undefined }
                  | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
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
                Principals: SharePrincipal[]
                NotificationOptions?:
                  | { SendEmail?: {} | undefined; EmailMessage?: {} | undefined }
                  | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
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
                Principals: SharePrincipal[]
                NotificationOptions?:
                  | { SendEmail?: {} | undefined; EmailMessage?: {} | undefined }
                  | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
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
                Principals: SharePrincipal[]
                NotificationOptions?:
                  | { SendEmail?: {} | undefined; EmailMessage?: {} | undefined }
                  | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                principalId?: string | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeResourcePermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                principalId?: string | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                principalId?: string | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                principalId?: string | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                principalId?: string | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                principalId?: string | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/api/v1/documents/:DocumentId/versions/:VersionId/comment': {
      $post:
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: CreateCommentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: DocumentLockedForCommentsException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentId?: string | undefined
                ThreadId?: string | undefined
                Text: string
                Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
                NotifyCollaborators?: boolean | undefined
              }
            }
            output: InvalidCommentOperationException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/api/v1/resources/:ResourceId/customMetadata': {
      $put:
        | {
            input: { param: { ResourceId: string } } & {
              query: { versionid?: string | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomMetadata: { [x: string]: CustomMetadataValueType } } }
            output: CreateCustomMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { versionid?: string | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomMetadata: { [x: string]: CustomMetadataValueType } } }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { versionid?: string | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomMetadata: { [x: string]: CustomMetadataValueType } } }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { versionid?: string | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomMetadata: { [x: string]: CustomMetadataValueType } } }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { versionid?: string | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomMetadata: { [x: string]: CustomMetadataValueType } } }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { versionid?: string | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomMetadata: { [x: string]: CustomMetadataValueType } } }
            output: CustomMetadataLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { versionid?: string | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomMetadata: { [x: string]: CustomMetadataValueType } } }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { versionid?: string | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CustomMetadata: { [x: string]: CustomMetadataValueType } } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 486
          }
      $delete:
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                versionId?: string | undefined
                keys?: CustomMetadataKeyType[] | undefined
                deleteAll?: boolean | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteCustomMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                versionId?: string | undefined
                keys?: CustomMetadataKeyType[] | undefined
                deleteAll?: boolean | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                versionId?: string | undefined
                keys?: CustomMetadataKeyType[] | undefined
                deleteAll?: boolean | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                versionId?: string | undefined
                keys?: CustomMetadataKeyType[] | undefined
                deleteAll?: boolean | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                versionId?: string | undefined
                keys?: CustomMetadataKeyType[] | undefined
                deleteAll?: boolean | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                versionId?: string | undefined
                keys?: CustomMetadataKeyType[] | undefined
                deleteAll?: boolean | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: {
                versionId?: string | undefined
                keys?: CustomMetadataKeyType[] | undefined
                deleteAll?: boolean | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/api/v1/folders': {
      $post:
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: CreateFolderResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: EntityAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined; ParentFolderId: string } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/api/v1/resources/:ResourceId/labels': {
      $put:
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Labels: SharedLabel[] } }
            output: CreateLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Labels: SharedLabel[] } }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Labels: SharedLabel[] } }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Labels: SharedLabel[] } }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Labels: SharedLabel[] } }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Labels: SharedLabel[] } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { ResourceId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Labels: SharedLabel[] } }
            output: TooManyLabelsException
            outputFormat: 'json'
            status: 485
          }
      $delete:
        | {
            input: { param: { ResourceId: string } } & {
              query: { labels?: SharedLabel[] | undefined; deleteAll?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteLabelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { labels?: SharedLabel[] | undefined; deleteAll?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { labels?: SharedLabel[] | undefined; deleteAll?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { labels?: SharedLabel[] | undefined; deleteAll?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { labels?: SharedLabel[] | undefined; deleteAll?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { labels?: SharedLabel[] | undefined; deleteAll?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { ResourceId: string } } & {
              query: { labels?: SharedLabel[] | undefined; deleteAll?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/api/v1/organizations/:OrganizationId/subscriptions': {
      $post:
        | {
            input: { param: { OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Endpoint: string; Protocol: 'HTTPS' | 'SQS'; SubscriptionType: 'ALL' } }
            output: CreateNotificationSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Endpoint: string; Protocol: 'HTTPS' | 'SQS'; SubscriptionType: 'ALL' } }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Endpoint: string; Protocol: 'HTTPS' | 'SQS'; SubscriptionType: 'ALL' } }
            output: TooManySubscriptionsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Endpoint: string; Protocol: 'HTTPS' | 'SQS'; SubscriptionType: 'ALL' } }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Endpoint: string; Protocol: 'HTTPS' | 'SQS'; SubscriptionType: 'ALL' } }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { OrganizationId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
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
            output: DescribeNotificationSubscriptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { OrganizationId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
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
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { OrganizationId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
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
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { OrganizationId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/api/v1/users': {
      $post:
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                OrganizationId?: string | undefined
                Username: string
                EmailAddress?: string | undefined
                GivenName: string
                Surname: string
                Password: string
                TimeZoneId?: string | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
              }
            }
            output: CreateUserResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                OrganizationId?: string | undefined
                Username: string
                EmailAddress?: string | undefined
                GivenName: string
                Surname: string
                Password: string
                TimeZoneId?: string | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
              }
            }
            output: EntityAlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                OrganizationId?: string | undefined
                Username: string
                EmailAddress?: string | undefined
                GivenName: string
                Surname: string
                Password: string
                TimeZoneId?: string | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                OrganizationId?: string | undefined
                Username: string
                EmailAddress?: string | undefined
                GivenName: string
                Surname: string
                Password: string
                TimeZoneId?: string | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                OrganizationId?: string | undefined
                Username: string
                EmailAddress?: string | undefined
                GivenName: string
                Surname: string
                Password: string
                TimeZoneId?: string | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                OrganizationId?: string | undefined
                Username: string
                EmailAddress?: string | undefined
                GivenName: string
                Surname: string
                Password: string
                TimeZoneId?: string | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: {
                organizationId?: string | undefined
                userIds?: string | undefined
                query?: string | undefined
                include?: 'ALL' | 'ACTIVE_PENDING' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                sort?:
                  | 'USER_NAME'
                  | 'FULL_NAME'
                  | 'STORAGE_LIMIT'
                  | 'USER_STATUS'
                  | 'STORAGE_USED'
                  | undefined
                marker?: string | undefined
                limit?: number | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                userIds?: string | undefined
                query?: string | undefined
                include?: 'ALL' | 'ACTIVE_PENDING' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                sort?:
                  | 'USER_NAME'
                  | 'FULL_NAME'
                  | 'STORAGE_LIMIT'
                  | 'USER_STATUS'
                  | 'STORAGE_USED'
                  | undefined
                marker?: string | undefined
                limit?: number | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                userIds?: string | undefined
                query?: string | undefined
                include?: 'ALL' | 'ACTIVE_PENDING' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                sort?:
                  | 'USER_NAME'
                  | 'FULL_NAME'
                  | 'STORAGE_LIMIT'
                  | 'USER_STATUS'
                  | 'STORAGE_USED'
                  | undefined
                marker?: string | undefined
                limit?: number | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                userIds?: string | undefined
                query?: string | undefined
                include?: 'ALL' | 'ACTIVE_PENDING' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                sort?:
                  | 'USER_NAME'
                  | 'FULL_NAME'
                  | 'STORAGE_LIMIT'
                  | 'USER_STATUS'
                  | 'STORAGE_USED'
                  | undefined
                marker?: string | undefined
                limit?: number | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                userIds?: string | undefined
                query?: string | undefined
                include?: 'ALL' | 'ACTIVE_PENDING' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                sort?:
                  | 'USER_NAME'
                  | 'FULL_NAME'
                  | 'STORAGE_LIMIT'
                  | 'USER_STATUS'
                  | 'STORAGE_USED'
                  | undefined
                marker?: string | undefined
                limit?: number | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                userIds?: string | undefined
                query?: string | undefined
                include?: 'ALL' | 'ACTIVE_PENDING' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                sort?:
                  | 'USER_NAME'
                  | 'FULL_NAME'
                  | 'STORAGE_LIMIT'
                  | 'USER_STATUS'
                  | 'STORAGE_USED'
                  | undefined
                marker?: string | undefined
                limit?: number | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                userIds?: string | undefined
                query?: string | undefined
                include?: 'ALL' | 'ACTIVE_PENDING' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                sort?:
                  | 'USER_NAME'
                  | 'FULL_NAME'
                  | 'STORAGE_LIMIT'
                  | 'USER_STATUS'
                  | 'STORAGE_USED'
                  | undefined
                marker?: string | undefined
                limit?: number | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                userIds?: string | undefined
                query?: string | undefined
                include?: 'ALL' | 'ACTIVE_PENDING' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                sort?:
                  | 'USER_NAME'
                  | 'FULL_NAME'
                  | 'STORAGE_LIMIT'
                  | 'USER_STATUS'
                  | 'STORAGE_USED'
                  | undefined
                marker?: string | undefined
                limit?: number | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RequestedEntityTooLargeException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/api/v1/documents/:DocumentId/versions/:VersionId/comment/:CommentId': {
      $delete:
        | {
            input: { param: { DocumentId: string; VersionId: string; CommentId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { DocumentId: string; VersionId: string; CommentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string; VersionId: string; CommentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string; VersionId: string; CommentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string; VersionId: string; CommentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string; VersionId: string; CommentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string; VersionId: string; CommentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string; VersionId: string; CommentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DocumentLockedForCommentsException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/api/v1/documents/:DocumentId': {
      $delete:
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 488
          }
      $get:
        | {
            input: { param: { DocumentId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDocumentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidPasswordException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: EntityAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/api/v1/documentVersions/:DocumentId/versions/:VersionId#deletePriorVersions': {
      $delete:
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: { deletePriorVersions: boolean }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/api/v1/folders/:FolderId': {
      $delete:
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 488
          }
      $get:
        | {
            input: { param: { FolderId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetFolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FolderId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FolderId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FolderId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FolderId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FolderId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FolderId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FolderId: string } } & {
              query: { includeCustomMetadata?: boolean | undefined }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 486
          }
      $patch:
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: EntityAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
                ParentFolderId?: string | undefined
                ResourceState?: 'ACTIVE' | 'RESTORING' | 'RECYCLING' | 'RECYCLED' | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/api/v1/folders/:FolderId/contents': {
      $delete:
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { FolderId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { FolderId: string } } & {
              query: {
                sort?: 'DATE' | 'NAME' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                limit?: number | undefined
                marker?: string | undefined
                type?: 'ALL' | 'DOCUMENT' | 'FOLDER' | undefined
                include?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeFolderContentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                sort?: 'DATE' | 'NAME' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                limit?: number | undefined
                marker?: string | undefined
                type?: 'ALL' | 'DOCUMENT' | 'FOLDER' | undefined
                include?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                sort?: 'DATE' | 'NAME' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                limit?: number | undefined
                marker?: string | undefined
                type?: 'ALL' | 'DOCUMENT' | 'FOLDER' | undefined
                include?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                sort?: 'DATE' | 'NAME' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                limit?: number | undefined
                marker?: string | undefined
                type?: 'ALL' | 'DOCUMENT' | 'FOLDER' | undefined
                include?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                sort?: 'DATE' | 'NAME' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                limit?: number | undefined
                marker?: string | undefined
                type?: 'ALL' | 'DOCUMENT' | 'FOLDER' | undefined
                include?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                sort?: 'DATE' | 'NAME' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                limit?: number | undefined
                marker?: string | undefined
                type?: 'ALL' | 'DOCUMENT' | 'FOLDER' | undefined
                include?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                sort?: 'DATE' | 'NAME' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                limit?: number | undefined
                marker?: string | undefined
                type?: 'ALL' | 'DOCUMENT' | 'FOLDER' | undefined
                include?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/api/v1/organizations/:OrganizationId/subscriptions/:SubscriptionId': {
      $delete:
        | {
            input: { param: { SubscriptionId: string; OrganizationId: string } } & {
              header: {
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
        | {
            input: { param: { SubscriptionId: string; OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { SubscriptionId: string; OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { SubscriptionId: string; OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { SubscriptionId: string; OrganizationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/api/v1/users/:UserId': {
      $delete:
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: UpdateUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: IllegalUserStateException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: DeactivatingLastSystemUserException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { UserId: string } } & {
              header: {
                Authentication?: string | undefined
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
                GivenName?: string | undefined
                Surname?: string | undefined
                Type?: 'USER' | 'ADMIN' | 'POWERUSER' | 'MINIMALUSER' | 'WORKSPACESUSER' | undefined
                StorageRule?:
                  | { StorageAllocatedInBytes?: {} | undefined; StorageType?: {} | undefined }
                  | undefined
                TimeZoneId?: string | undefined
                Locale?:
                  | 'en'
                  | 'fr'
                  | 'ko'
                  | 'de'
                  | 'es'
                  | 'ja'
                  | 'ru'
                  | 'zh_CN'
                  | 'zh_TW'
                  | 'pt_BR'
                  | 'default'
                  | undefined
                GrantPoweruserPrivileges?: 'TRUE' | 'FALSE' | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/api/v1/activities': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                organizationId?: string | undefined
                activityTypes?: string | undefined
                resourceId?: string | undefined
                userId?: string | undefined
                includeIndirectActivities?: boolean | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeActivitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                organizationId?: string | undefined
                activityTypes?: string | undefined
                resourceId?: string | undefined
                userId?: string | undefined
                includeIndirectActivities?: boolean | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                organizationId?: string | undefined
                activityTypes?: string | undefined
                resourceId?: string | undefined
                userId?: string | undefined
                includeIndirectActivities?: boolean | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                organizationId?: string | undefined
                activityTypes?: string | undefined
                resourceId?: string | undefined
                userId?: string | undefined
                includeIndirectActivities?: boolean | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                organizationId?: string | undefined
                activityTypes?: string | undefined
                resourceId?: string | undefined
                userId?: string | undefined
                includeIndirectActivities?: boolean | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                organizationId?: string | undefined
                activityTypes?: string | undefined
                resourceId?: string | undefined
                userId?: string | undefined
                includeIndirectActivities?: boolean | undefined
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/api/v1/documents/:DocumentId/versions/:VersionId/comments': {
      $get:
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeCommentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string; VersionId: string } } & {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/api/v1/documents/:DocumentId/versions': {
      $get:
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeDocumentVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                marker?: string | undefined
                limit?: number | undefined
                include?: string | undefined
                fields?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidPasswordException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/api/v1/groups#searchQuery': {
      $get:
        | {
            input: {
              query: {
                searchQuery: string
                organizationId?: string | undefined
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchQuery: string
                organizationId?: string | undefined
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                searchQuery: string
                organizationId?: string | undefined
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                searchQuery: string
                organizationId?: string | undefined
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                searchQuery: string
                organizationId?: string | undefined
                marker?: string | undefined
                limit?: number | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/api/v1/me/root#Authentication': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeRootFoldersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                marker?: string | undefined
                Limit?: string | undefined
                Marker?: string | undefined
              }
            } & {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/api/v1/me#Authentication': {
      $get:
        | {
            input: {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetCurrentUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                Authentication: string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/api/v1/documents/:DocumentId/path': {
      $get:
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDocumentPathResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/api/v1/folders/:FolderId/path': {
      $get:
        | {
            input: { param: { FolderId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetFolderPathResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FolderId: string } } & {
              query: {
                limit?: number | undefined
                fields?: string | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/api/v1/resources': {
      $get:
        | {
            input: {
              query: {
                userId?: string | undefined
                collectionType?: 'SHARED_WITH_ME' | undefined
                limit?: number | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                collectionType?: 'SHARED_WITH_ME' | undefined
                limit?: number | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                collectionType?: 'SHARED_WITH_ME' | undefined
                limit?: number | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                collectionType?: 'SHARED_WITH_ME' | undefined
                limit?: number | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                collectionType?: 'SHARED_WITH_ME' | undefined
                limit?: number | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                collectionType?: 'SHARED_WITH_ME' | undefined
                limit?: number | undefined
                marker?: string | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/api/v1/documents': {
      $post:
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: InitiateDocumentVersionUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: EntityAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: StorageLimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: StorageLimitWillExceedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: DraftUploadOutOfSyncException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: ResourceAlreadyCheckedOutException
            outputFormat: 'json'
            status: 491
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: InvalidPasswordException
            outputFormat: 'json'
            status: 492
          }
        | {
            input: {
              header: {
                Authentication?: string | undefined
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
                Id?: string | undefined
                Name?: string | undefined
                ContentCreatedTimestamp?: string | undefined
                ContentModifiedTimestamp?: string | undefined
                ContentType?: string | undefined
                DocumentSizeInBytes?: number | undefined
                ParentFolderId?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 493
          }
    }
  } & {
    '/api/v1/resources/:ResourceId/permissions/:PrincipalId': {
      $delete:
        | {
            input: { param: { ResourceId: string; PrincipalId: string } } & {
              query: {
                type?: 'USER' | 'GROUP' | 'INVITE' | 'ANONYMOUS' | 'ORGANIZATION' | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { ResourceId: string; PrincipalId: string } } & {
              query: {
                type?: 'USER' | 'GROUP' | 'INVITE' | 'ANONYMOUS' | 'ORGANIZATION' | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceId: string; PrincipalId: string } } & {
              query: {
                type?: 'USER' | 'GROUP' | 'INVITE' | 'ANONYMOUS' | 'ORGANIZATION' | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceId: string; PrincipalId: string } } & {
              query: {
                type?: 'USER' | 'GROUP' | 'INVITE' | 'ANONYMOUS' | 'ORGANIZATION' | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceId: string; PrincipalId: string } } & {
              query: {
                type?: 'USER' | 'GROUP' | 'INVITE' | 'ANONYMOUS' | 'ORGANIZATION' | undefined
              }
            } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/api/v1/documentVersions/restore/:DocumentId': {
      $post:
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
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
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EntityNotExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ProhibitedStateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictingOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: FailedDependencyException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { DocumentId: string } } & {
              header: {
                Authentication?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/api/v1/search': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
              header: {
                Authentication?: string | undefined
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
                QueryText?: string | undefined
                QueryScopes?: SearchQueryScopeType[] | undefined
                OrganizationId?: string | undefined
                AdditionalResponseFields?: AdditionalResponseFieldType[] | undefined
                Filters?:
                  | {
                      TextLocales?: {} | undefined
                      ContentCategories?: {} | undefined
                      ResourceTypes?: {} | undefined
                      Labels?: {} | undefined
                      Principals?: {} | undefined
                      AncestorIds?: {} | undefined
                      SearchCollectionTypes?: {} | undefined
                      SizeRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      CreatedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      ModifiedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                    }
                  | undefined
                OrderBy?: SearchSortResult[] | undefined
                Limit?: number | undefined
                Marker?: string | undefined
              }
            }
            output: SearchResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
              header: {
                Authentication?: string | undefined
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
                QueryText?: string | undefined
                QueryScopes?: SearchQueryScopeType[] | undefined
                OrganizationId?: string | undefined
                AdditionalResponseFields?: AdditionalResponseFieldType[] | undefined
                Filters?:
                  | {
                      TextLocales?: {} | undefined
                      ContentCategories?: {} | undefined
                      ResourceTypes?: {} | undefined
                      Labels?: {} | undefined
                      Principals?: {} | undefined
                      AncestorIds?: {} | undefined
                      SearchCollectionTypes?: {} | undefined
                      SizeRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      CreatedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      ModifiedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                    }
                  | undefined
                OrderBy?: SearchSortResult[] | undefined
                Limit?: number | undefined
                Marker?: string | undefined
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
              header: {
                Authentication?: string | undefined
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
                QueryText?: string | undefined
                QueryScopes?: SearchQueryScopeType[] | undefined
                OrganizationId?: string | undefined
                AdditionalResponseFields?: AdditionalResponseFieldType[] | undefined
                Filters?:
                  | {
                      TextLocales?: {} | undefined
                      ContentCategories?: {} | undefined
                      ResourceTypes?: {} | undefined
                      Labels?: {} | undefined
                      Principals?: {} | undefined
                      AncestorIds?: {} | undefined
                      SearchCollectionTypes?: {} | undefined
                      SizeRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      CreatedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      ModifiedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                    }
                  | undefined
                OrderBy?: SearchSortResult[] | undefined
                Limit?: number | undefined
                Marker?: string | undefined
              }
            }
            output: UnauthorizedResourceAccessException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
              header: {
                Authentication?: string | undefined
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
                QueryText?: string | undefined
                QueryScopes?: SearchQueryScopeType[] | undefined
                OrganizationId?: string | undefined
                AdditionalResponseFields?: AdditionalResponseFieldType[] | undefined
                Filters?:
                  | {
                      TextLocales?: {} | undefined
                      ContentCategories?: {} | undefined
                      ResourceTypes?: {} | undefined
                      Labels?: {} | undefined
                      Principals?: {} | undefined
                      AncestorIds?: {} | undefined
                      SearchCollectionTypes?: {} | undefined
                      SizeRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      CreatedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      ModifiedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                    }
                  | undefined
                OrderBy?: SearchSortResult[] | undefined
                Limit?: number | undefined
                Marker?: string | undefined
              }
            }
            output: UnauthorizedOperationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
              header: {
                Authentication?: string | undefined
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
                QueryText?: string | undefined
                QueryScopes?: SearchQueryScopeType[] | undefined
                OrganizationId?: string | undefined
                AdditionalResponseFields?: AdditionalResponseFieldType[] | undefined
                Filters?:
                  | {
                      TextLocales?: {} | undefined
                      ContentCategories?: {} | undefined
                      ResourceTypes?: {} | undefined
                      Labels?: {} | undefined
                      Principals?: {} | undefined
                      AncestorIds?: {} | undefined
                      SearchCollectionTypes?: {} | undefined
                      SizeRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      CreatedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                      ModifiedRange?:
                        | { StartValue?: {} | undefined; EndValue?: {} | undefined }
                        | undefined
                    }
                  | undefined
                OrderBy?: SearchSortResult[] | undefined
                Limit?: number | undefined
                Marker?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
