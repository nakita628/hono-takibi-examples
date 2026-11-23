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
type CustomMetadataValueType = string
type CreateCustomMetadataResponse = { [x: string]: unknown }
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
type SharedLabel = string
type CreateLabelsResponse = { [x: string]: unknown }
type DeleteLabelsResponse = { [x: string]: unknown }
type CreateNotificationSubscriptionResponse = {
  Subscription?:
    | { SubscriptionId?: {} | undefined; EndPoint?: {} | undefined; Protocol?: {} | undefined }
    | undefined
}
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
type SearchQueryScopeType = 'NAME' | 'CONTENT'
type AdditionalResponseFieldType = 'WEBURL'
type SearchSortResult = { Field?: {} | undefined; Order?: {} | undefined }
type SearchResourcesResponse = { Items?: {} | undefined; Marker?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/documents/:DocumentId/versions/:VersionId': {
      $delete: {
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
      $get: {
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
      $patch: {
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
    }
  } & {
    '/api/v1/users/:UserId/activation': {
      $post: {
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
      $delete: {
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
    }
  } & {
    '/api/v1/resources/:ResourceId/permissions': {
      $post: {
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
      $get: {
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
      $delete: {
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
    }
  } & {
    '/api/v1/documents/:DocumentId/versions/:VersionId/comment': {
      $post: {
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
    }
  } & {
    '/api/v1/resources/:ResourceId/customMetadata': {
      $put: {
        input: { param: { ResourceId: string } } & { query: { versionid?: string | undefined } } & {
          header: {
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
      $delete: {
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
    }
  } & {
    '/api/v1/folders': {
      $post: {
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
    }
  } & {
    '/api/v1/resources/:ResourceId/labels': {
      $put: {
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
      $delete: {
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
    }
  } & {
    '/api/v1/organizations/:OrganizationId/subscriptions': {
      $post: {
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
      $get: {
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
    }
  } & {
    '/api/v1/users': {
      $post: {
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
      $get: {
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
    }
  } & {
    '/api/v1/documents/:DocumentId/versions/:VersionId/comment/:CommentId': {
      $delete: {
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
    }
  } & {
    '/api/v1/documents/:DocumentId': {
      $delete: {
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
      $get: {
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
      $patch: {
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
    }
  } & {
    '/api/v1/documentVersions/:DocumentId/versions/:VersionId#deletePriorVersions': {
      $delete: {
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
    }
  } & {
    '/api/v1/folders/:FolderId': {
      $delete: {
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
      $get: {
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
      $patch: {
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
    }
  } & {
    '/api/v1/folders/:FolderId/contents': {
      $delete: {
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
      $get: {
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
    }
  } & {
    '/api/v1/organizations/:OrganizationId/subscriptions/:SubscriptionId': {
      $delete: {
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
    }
  } & {
    '/api/v1/users/:UserId': {
      $delete: {
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
      $patch: {
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
    }
  } & {
    '/api/v1/activities': {
      $get: {
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
    }
  } & {
    '/api/v1/documents/:DocumentId/versions/:VersionId/comments': {
      $get: {
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
    }
  } & {
    '/api/v1/documents/:DocumentId/versions': {
      $get: {
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
    }
  } & {
    '/api/v1/groups#searchQuery': {
      $get: {
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
    }
  } & {
    '/api/v1/me/root#Authentication': {
      $get: {
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
    }
  } & {
    '/api/v1/me#Authentication': {
      $get: {
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
    }
  } & {
    '/api/v1/documents/:DocumentId/path': {
      $get: {
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
    }
  } & {
    '/api/v1/folders/:FolderId/path': {
      $get: {
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
    }
  } & {
    '/api/v1/resources': {
      $get: {
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
    }
  } & {
    '/api/v1/documents': {
      $post: {
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
    }
  } & {
    '/api/v1/resources/:ResourceId/permissions/:PrincipalId': {
      $delete: {
        input: { param: { ResourceId: string; PrincipalId: string } } & {
          query: { type?: 'USER' | 'GROUP' | 'INVITE' | 'ANONYMOUS' | 'ORGANIZATION' | undefined }
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
    }
  } & {
    '/api/v1/documentVersions/restore/:DocumentId': {
      $post: {
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
    }
  } & {
    '/api/v1/search': {
      $post: {
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
                  SizeRange?: { StartValue?: {} | undefined; EndValue?: {} | undefined } | undefined
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
    }
  },
  '/'
>
export default routes
