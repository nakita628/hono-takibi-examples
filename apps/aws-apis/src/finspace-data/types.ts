type AssociateUserToPermissionGroupResponse = { statusCode?: {} | undefined }
type DisassociateUserFromPermissionGroupResponse = { statusCode?: {} | undefined }
type StringMapValue = string
type CreateChangesetResponse = { datasetId?: {} | undefined; changesetId?: {} | undefined }
type ListChangesetsResponse = { changesets?: {} | undefined; nextToken?: {} | undefined }
type StringValueLength1to255 = string
type CreateDataViewResponse = { datasetId?: {} | undefined; dataViewId?: {} | undefined }
type ListDataViewsResponse = { nextToken?: {} | undefined; dataViews?: {} | undefined }
type CreateDatasetResponse = { datasetId?: {} | undefined }
type ListDatasetsResponse = { datasets?: {} | undefined; nextToken?: {} | undefined }
type ApplicationPermission =
  | 'CreateDataset'
  | 'ManageClusters'
  | 'ManageUsersAndGroups'
  | 'ManageAttributeSets'
  | 'ViewAuditData'
  | 'AccessNotebooks'
  | 'GetTemporaryCredentials'
type CreatePermissionGroupResponse = { permissionGroupId?: {} | undefined }
type CreateUserResponse = { userId?: {} | undefined }
type DeleteDatasetResponse = { datasetId?: {} | undefined }
type GetDatasetResponse = {
  datasetId?: {} | undefined
  datasetArn?: {} | undefined
  datasetTitle?: {} | undefined
  kind?: {} | undefined
  datasetDescription?: {} | undefined
  createTime?: {} | undefined
  lastModifiedTime?: {} | undefined
  schemaDefinition?:
    | {
        tabularSchemaConfig?:
          | { columns?: {} | undefined; primaryKeyColumns?: {} | undefined }
          | undefined
      }
    | undefined
  alias?: {} | undefined
  status?: {} | undefined
}
type UpdateDatasetResponse = { datasetId?: {} | undefined }
type DeletePermissionGroupResponse = { permissionGroupId?: {} | undefined }
type PermissionGroup = {
  permissionGroupId?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  applicationPermissions?: {} | undefined
  createTime?: {} | undefined
  lastModifiedTime?: {} | undefined
  membershipStatus?: {} | undefined
}
type GetPermissionGroupResponse = { permissionGroup?: PermissionGroup | undefined }
type UpdatePermissionGroupResponse = { permissionGroupId?: {} | undefined }
type DisableUserResponse = { userId?: {} | undefined }
type EnableUserResponse = { userId?: {} | undefined }
type GetChangesetResponse = {
  changesetId?: {} | undefined
  changesetArn?: {} | undefined
  datasetId?: {} | undefined
  changeType?: {} | undefined
  sourceParams?: {} | undefined
  formatParams?: {} | undefined
  createTime?: {} | undefined
  status?: {} | undefined
  errorInfo?: { errorMessage?: {} | undefined; errorCategory?: {} | undefined } | undefined
  activeUntilTimestamp?: {} | undefined
  activeFromTimestamp?: {} | undefined
  updatesChangesetId?: {} | undefined
  updatedByChangesetId?: {} | undefined
}
type UpdateChangesetResponse = { changesetId?: {} | undefined; datasetId?: {} | undefined }
type GetDataViewResponse = {
  autoUpdate?: {} | undefined
  partitionColumns?: {} | undefined
  datasetId?: {} | undefined
  asOfTimestamp?: {} | undefined
  errorInfo?: { errorMessage?: {} | undefined; errorCategory?: {} | undefined } | undefined
  lastModifiedTime?: {} | undefined
  createTime?: {} | undefined
  sortColumns?: {} | undefined
  dataViewId?: {} | undefined
  dataViewArn?: {} | undefined
  destinationTypeParams?:
    | {
        destinationType: {}
        s3DestinationExportFileFormat?: {} | undefined
        s3DestinationExportFileFormatOptions?: {} | undefined
      }
    | undefined
  status?: {} | undefined
}
type GetExternalDataViewAccessDetailsResponse = {
  credentials?:
    | {
        accessKeyId?: {} | undefined
        secretAccessKey?: {} | undefined
        sessionToken?: {} | undefined
        expiration?: {} | undefined
      }
    | undefined
  s3Location?: { bucket: {}; key: {} } | undefined
}
type GetProgrammaticAccessCredentialsResponse = {
  credentials?:
    | {
        accessKeyId?: {} | undefined
        secretAccessKey?: {} | undefined
        sessionToken?: {} | undefined
      }
    | undefined
  durationInMinutes?: {} | undefined
}
type GetUserResponse = {
  userId?: {} | undefined
  status?: {} | undefined
  firstName?: {} | undefined
  lastName?: {} | undefined
  emailAddress?: {} | undefined
  type?: {} | undefined
  apiAccess?: {} | undefined
  apiAccessPrincipalArn?: {} | undefined
  createTime?: {} | undefined
  lastEnabledTime?: {} | undefined
  lastDisabledTime?: {} | undefined
  lastModifiedTime?: {} | undefined
  lastLoginTime?: {} | undefined
}
type UpdateUserResponse = { userId?: {} | undefined }
type GetWorkingLocationResponse = {
  s3Uri?: {} | undefined
  s3Path?: {} | undefined
  s3Bucket?: {} | undefined
}
type ListPermissionGroupsResponse = {
  permissionGroups?: {} | undefined
  nextToken?: {} | undefined
}
type ListPermissionGroupsByUserResponse = {
  permissionGroups?: {} | undefined
  nextToken?: {} | undefined
}
type ListUsersResponse = { users?: {} | undefined; nextToken?: {} | undefined }
type ListUsersByPermissionGroupResponse = { users?: {} | undefined; nextToken?: {} | undefined }
type ResetUserPasswordResponse = { userId?: {} | undefined; temporaryPassword?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/permission-group/:permissionGroupId/users/:userId': {
      $post: {
        input: { param: { permissionGroupId: string; userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined } }
        output: AssociateUserToPermissionGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { permissionGroupId: string; userId: string } } & {
          query: { clientToken?: string | undefined }
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
        output: DisassociateUserFromPermissionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasets/:datasetId/changesetsv2': {
      $post: {
        input: { param: { datasetId: string } } & {
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
            changeType: 'REPLACE' | 'APPEND' | 'MODIFY'
            sourceParams: { [x: string]: StringMapValue }
            formatParams: { [x: string]: StringMapValue }
          }
        }
        output: CreateChangesetResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { datasetId: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
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
        output: ListChangesetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasets/:datasetId/dataviewsv2': {
      $post: {
        input: { param: { datasetId: string } } & {
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
            autoUpdate?: boolean | undefined
            sortColumns?: StringValueLength1to255[] | undefined
            partitionColumns?: StringValueLength1to255[] | undefined
            asOfTimestamp?: number | undefined
            destinationTypeParams: {
              destinationType?: {} | undefined
              s3DestinationExportFileFormat?: {} | undefined
              s3DestinationExportFileFormatOptions?: {} | undefined
            }
          }
        }
        output: CreateDataViewResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { datasetId: string } } & {
          query: { nextToken?: string | undefined; maxResults?: number | undefined }
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
        output: ListDataViewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasetsv2': {
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
            datasetTitle: string
            kind: 'TABULAR' | 'NON_TABULAR'
            datasetDescription?: string | undefined
            ownerInfo?:
              | { name?: {} | undefined; phoneNumber?: {} | undefined; email?: {} | undefined }
              | undefined
            permissionGroupParams: {
              permissionGroupId?: {} | undefined
              datasetPermissions?: {} | undefined
            }
            alias?: string | undefined
            schemaDefinition?:
              | {
                  tabularSchemaConfig?:
                    | { columns?: {} | undefined; primaryKeyColumns?: {} | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: CreateDatasetResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDatasetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/permission-group': {
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
            name: string
            description?: string | undefined
            applicationPermissions: ApplicationPermission[]
            clientToken?: string | undefined
          }
        }
        output: CreatePermissionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user': {
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
            emailAddress: string
            type: 'SUPER_USER' | 'APP_USER'
            firstName?: string | undefined
            lastName?: string | undefined
            ApiAccess?: 'ENABLED' | 'DISABLED' | undefined
            apiAccessPrincipalArn?: string | undefined
            clientToken?: string | undefined
          }
        }
        output: CreateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasetsv2/:datasetId': {
      $delete: {
        input: { param: { datasetId: string } } & {
          query: { clientToken?: string | undefined }
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
        output: DeleteDatasetResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { datasetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDatasetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { datasetId: string } } & {
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
            datasetTitle: string
            kind: 'TABULAR' | 'NON_TABULAR'
            datasetDescription?: string | undefined
            alias?: string | undefined
            schemaDefinition?:
              | {
                  tabularSchemaConfig?:
                    | { columns?: {} | undefined; primaryKeyColumns?: {} | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: UpdateDatasetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/permission-group/:permissionGroupId': {
      $delete: {
        input: { param: { permissionGroupId: string } } & {
          query: { clientToken?: string | undefined }
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
        output: DeletePermissionGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { permissionGroupId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetPermissionGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { permissionGroupId: string } } & {
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
            name?: string | undefined
            description?: string | undefined
            applicationPermissions?: ApplicationPermission[] | undefined
            clientToken?: string | undefined
          }
        }
        output: UpdatePermissionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/disable': {
      $post: {
        input: { param: { userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined } }
        output: DisableUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/enable': {
      $post: {
        input: { param: { userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined } }
        output: EnableUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasets/:datasetId/changesetsv2/:changesetId': {
      $get: {
        input: { param: { datasetId: string; changesetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetChangesetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { datasetId: string; changesetId: string } } & {
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
            sourceParams: { [x: string]: StringMapValue }
            formatParams: { [x: string]: StringMapValue }
          }
        }
        output: UpdateChangesetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasets/:datasetId/dataviewsv2/:dataviewId': {
      $get: {
        input: { param: { dataviewId: string; datasetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDataViewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasets/:datasetId/dataviewsv2/:dataviewId/external-access-details': {
      $post: {
        input: { param: { dataviewId: string; datasetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetExternalDataViewAccessDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credentials/programmatic#environmentId': {
      $get: {
        input: { query: { durationInMinutes?: number | undefined; environmentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetProgrammaticAccessCredentialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId': {
      $get: {
        input: { param: { userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetUserResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { userId: string } } & {
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
            type?: 'SUPER_USER' | 'APP_USER' | undefined
            firstName?: string | undefined
            lastName?: string | undefined
            apiAccess?: 'ENABLED' | 'DISABLED' | undefined
            apiAccessPrincipalArn?: string | undefined
            clientToken?: string | undefined
          }
        }
        output: UpdateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workingLocationV1': {
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
        } & { json: { locationType?: 'INGESTION' | 'SAGEMAKER' | undefined } }
        output: GetWorkingLocationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/permission-group#maxResults': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults: number } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPermissionGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/permission-groups#maxResults': {
      $get: {
        input: { param: { userId: string } } & {
          query: { nextToken?: string | undefined; maxResults: number }
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
        output: ListPermissionGroupsByUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user#maxResults': {
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults: number } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/permission-group/:permissionGroupId/users#maxResults': {
      $get: {
        input: { param: { permissionGroupId: string } } & {
          query: { nextToken?: string | undefined; maxResults: number }
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
        output: ListUsersByPermissionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:userId/password': {
      $post: {
        input: { param: { userId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken?: string | undefined } }
        output: ResetUserPasswordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
