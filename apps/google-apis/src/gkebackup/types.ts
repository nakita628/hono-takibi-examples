type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type NamespacedName = { name?: string | undefined; namespace?: string | undefined }
type VolumeRestore = {
  completeTime?: string | undefined
  createTime?: string | undefined
  etag?: string | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'RESTORING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'DELETING'
    | undefined
  stateMessage?: string | undefined
  targetPvc?: NamespacedName | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  volumeBackup?: string | undefined
  volumeHandle?: string | undefined
  volumeType?: 'VOLUME_TYPE_UNSPECIFIED' | 'GCE_PERSISTENT_DISK' | undefined
}
type GroupKind = { resourceGroup?: string | undefined; resourceKind?: string | undefined }
type ClusterResourceRestoreScope = { selectedGroupKinds?: GroupKind[] | undefined }
type NamespacedNames = { namespacedNames?: NamespacedName[] | undefined }
type Namespaces = { namespaces?: string[] | undefined }
type SubstitutionRule = {
  newValue?: string | undefined
  originalValuePattern?: string | undefined
  targetGroupKinds?: GroupKind[] | undefined
  targetJsonPath?: string | undefined
  targetNamespaces?: string[] | undefined
}
type RestoreConfig = {
  allNamespaces?: boolean | undefined
  clusterResourceConflictPolicy?:
    | 'CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED'
    | 'USE_EXISTING_VERSION'
    | 'USE_BACKUP_VERSION'
    | undefined
  clusterResourceRestoreScope?: ClusterResourceRestoreScope | undefined
  namespacedResourceRestoreMode?:
    | 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
    | 'DELETE_AND_RESTORE'
    | 'FAIL_ON_CONFLICT'
    | undefined
  selectedApplications?: NamespacedNames | undefined
  selectedNamespaces?: Namespaces | undefined
  substitutionRules?: SubstitutionRule[] | undefined
  volumeDataRestorePolicy?:
    | 'VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED'
    | 'RESTORE_VOLUME_DATA_FROM_BACKUP'
    | 'REUSE_VOLUME_HANDLE_FROM_BACKUP'
    | 'NO_VOLUME_DATA_RESTORATION'
    | undefined
}
type Restore = {
  backup?: string | undefined
  cluster?: string | undefined
  completeTime?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  resourcesExcludedCount?: number | undefined
  resourcesFailedCount?: number | undefined
  resourcesRestoredCount?: number | undefined
  restoreConfig?: RestoreConfig | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'IN_PROGRESS'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'DELETING'
    | undefined
  stateReason?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  volumesRestoredCount?: number | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type Empty = { [x: string]: unknown }
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleLongrunningCancelOperationRequest = { [x: string]: unknown }
type EncryptionKey = { gcpKmsEncryptionKey?: string | undefined }
type BackupConfig = {
  allNamespaces?: boolean | undefined
  encryptionKey?: EncryptionKey | undefined
  includeSecrets?: boolean | undefined
  includeVolumeData?: boolean | undefined
  selectedApplications?: NamespacedNames | undefined
  selectedNamespaces?: Namespaces | undefined
}
type Schedule = { cronSchedule?: string | undefined; paused?: boolean | undefined }
type RetentionPolicy = {
  backupDeleteLockDays?: number | undefined
  backupRetainDays?: number | undefined
  locked?: boolean | undefined
}
type BackupPlan = {
  backupConfig?: BackupConfig | undefined
  backupSchedule?: Schedule | undefined
  cluster?: string | undefined
  createTime?: string | undefined
  deactivated?: boolean | undefined
  description?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  protectedPodCount?: number | undefined
  retentionPolicy?: RetentionPolicy | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type ListBackupPlansResponse = {
  backupPlans?: BackupPlan[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ClusterMetadata = {
  anthosVersion?: string | undefined
  backupCrdVersions?: { [x: string]: string } | undefined
  cluster?: string | undefined
  gkeVersion?: string | undefined
  k8sVersion?: string | undefined
}
type Backup = {
  allNamespaces?: boolean | undefined
  clusterMetadata?: ClusterMetadata | undefined
  completeTime?: string | undefined
  configBackupSizeBytes?: string | undefined
  containsSecrets?: boolean | undefined
  containsVolumeData?: boolean | undefined
  createTime?: string | undefined
  deleteLockDays?: number | undefined
  deleteLockExpireTime?: string | undefined
  description?: string | undefined
  encryptionKey?: EncryptionKey | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  manual?: boolean | undefined
  name?: string | undefined
  podCount?: number | undefined
  resourceCount?: number | undefined
  retainDays?: number | undefined
  retainExpireTime?: string | undefined
  selectedApplications?: NamespacedNames | undefined
  selectedNamespaces?: Namespaces | undefined
  sizeBytes?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'IN_PROGRESS'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'DELETING'
    | undefined
  stateReason?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  volumeCount?: number | undefined
}
type ListBackupsResponse = { backups?: Backup[] | undefined; nextPageToken?: string | undefined }
type RestorePlan = {
  backupPlan?: string | undefined
  cluster?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  restoreConfig?: RestoreConfig | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type ListRestorePlansResponse = {
  nextPageToken?: string | undefined
  restorePlans?: RestorePlan[] | undefined
  unreachable?: string[] | undefined
}
type ListRestoresResponse = {
  nextPageToken?: string | undefined
  restores?: Restore[] | undefined
  unreachable?: string[] | undefined
}
type VolumeBackup = {
  completeTime?: string | undefined
  createTime?: string | undefined
  diskSizeBytes?: string | undefined
  etag?: string | undefined
  format?: 'VOLUME_BACKUP_FORMAT_UNSPECIFIED' | 'GCE_PERSISTENT_DISK' | undefined
  name?: string | undefined
  sourcePvc?: NamespacedName | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'SNAPSHOTTING'
    | 'UPLOADING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'DELETING'
    | undefined
  stateMessage?: string | undefined
  storageBytes?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  volumeBackupHandle?: string | undefined
}
type ListVolumeBackupsResponse = {
  nextPageToken?: string | undefined
  volumeBackups?: VolumeBackup[] | undefined
}
type ListVolumeRestoresResponse = {
  nextPageToken?: string | undefined
  volumeRestores?: VolumeRestore[] | undefined
}
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            etag?: string | undefined
            force?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: VolumeRestore
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Restore }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/operations': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleLongrunningCancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/backupPlans': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListBackupPlansResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            backupPlanId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BackupPlan }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/backups': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListBackupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            backupId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Backup }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/restorePlans': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListRestorePlansResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            restorePlanId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RestorePlan }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/restores': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListRestoresResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            restoreId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Restore }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/volumeBackups': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListVolumeBackupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/volumeRestores': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListVolumeRestoresResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
