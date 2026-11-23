type CancelRotateSecretRequest = { SecretId: {} }
type CancelRotateSecretResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  VersionId?: {} | undefined
}
type CreateSecretRequest = {
  Name: {}
  ClientRequestToken?: {} | undefined
  Description?: {} | undefined
  KmsKeyId?: {} | undefined
  SecretBinary?: {} | undefined
  SecretString?: {} | undefined
  Tags?: {} | undefined
  AddReplicaRegions?: {} | undefined
  ForceOverwriteReplicaSecret?: {} | undefined
}
type CreateSecretResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  VersionId?: {} | undefined
  ReplicationStatus?: {} | undefined
}
type DeleteResourcePolicyRequest = { SecretId: {} }
type DeleteResourcePolicyResponse = { ARN?: {} | undefined; Name?: {} | undefined }
type DeleteSecretRequest = {
  SecretId: {}
  RecoveryWindowInDays?: {} | undefined
  ForceDeleteWithoutRecovery?: {} | undefined
}
type DeleteSecretResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  DeletionDate?: {} | undefined
}
type DescribeSecretRequest = { SecretId: {} }
type DescribeSecretResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  KmsKeyId?: {} | undefined
  RotationEnabled?: {} | undefined
  RotationLambdaARN?: {} | undefined
  RotationRules?:
    | {
        AutomaticallyAfterDays?: {} | undefined
        Duration?: {} | undefined
        ScheduleExpression?: {} | undefined
      }
    | undefined
  LastRotatedDate?: {} | undefined
  LastChangedDate?: {} | undefined
  LastAccessedDate?: {} | undefined
  DeletedDate?: {} | undefined
  NextRotationDate?: {} | undefined
  Tags?: {} | undefined
  VersionIdsToStages?: {} | undefined
  OwningService?: {} | undefined
  CreatedDate?: {} | undefined
  PrimaryRegion?: {} | undefined
  ReplicationStatus?: {} | undefined
}
type GetRandomPasswordRequest = {
  PasswordLength?: {} | undefined
  ExcludeCharacters?: {} | undefined
  ExcludeNumbers?: {} | undefined
  ExcludePunctuation?: {} | undefined
  ExcludeUppercase?: {} | undefined
  ExcludeLowercase?: {} | undefined
  IncludeSpace?: {} | undefined
  RequireEachIncludedType?: {} | undefined
}
type GetRandomPasswordResponse = { RandomPassword?: {} | undefined }
type GetResourcePolicyRequest = { SecretId: {} }
type GetResourcePolicyResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  ResourcePolicy?: {} | undefined
}
type GetSecretValueRequest = {
  SecretId: {}
  VersionId?: {} | undefined
  VersionStage?: {} | undefined
}
type GetSecretValueResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  VersionId?: {} | undefined
  SecretBinary?: {} | undefined
  SecretString?: {} | undefined
  VersionStages?: {} | undefined
  CreatedDate?: {} | undefined
}
type ListSecretVersionIdsRequest = {
  SecretId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  IncludeDeprecated?: {} | undefined
}
type ListSecretVersionIdsResponse = {
  Versions?: {} | undefined
  NextToken?: {} | undefined
  ARN?: {} | undefined
  Name?: {} | undefined
}
type ListSecretsRequest = {
  IncludePlannedDeletion?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
  SortOrder?: {} | undefined
}
type ListSecretsResponse = { SecretList?: {} | undefined; NextToken?: {} | undefined }
type PutResourcePolicyRequest = {
  SecretId: {}
  ResourcePolicy: {}
  BlockPublicPolicy?: {} | undefined
}
type PutResourcePolicyResponse = { ARN?: {} | undefined; Name?: {} | undefined }
type PutSecretValueRequest = {
  SecretId: {}
  ClientRequestToken?: {} | undefined
  SecretBinary?: {} | undefined
  SecretString?: {} | undefined
  VersionStages?: {} | undefined
}
type PutSecretValueResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  VersionId?: {} | undefined
  VersionStages?: {} | undefined
}
type RemoveRegionsFromReplicationRequest = { SecretId: {}; RemoveReplicaRegions: {} }
type RemoveRegionsFromReplicationResponse = {
  ARN?: {} | undefined
  ReplicationStatus?: {} | undefined
}
type ReplicateSecretToRegionsRequest = {
  SecretId: {}
  AddReplicaRegions: {}
  ForceOverwriteReplicaSecret?: {} | undefined
}
type ReplicateSecretToRegionsResponse = { ARN?: {} | undefined; ReplicationStatus?: {} | undefined }
type RestoreSecretRequest = { SecretId: {} }
type RestoreSecretResponse = { ARN?: {} | undefined; Name?: {} | undefined }
type RotateSecretRequest = {
  SecretId: {}
  ClientRequestToken?: {} | undefined
  RotationLambdaARN?: {} | undefined
  RotationRules?:
    | {
        AutomaticallyAfterDays?: {} | undefined
        Duration?: {} | undefined
        ScheduleExpression?: {} | undefined
      }
    | undefined
  RotateImmediately?: {} | undefined
}
type RotateSecretResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  VersionId?: {} | undefined
}
type StopReplicationToReplicaRequest = { SecretId: {} }
type StopReplicationToReplicaResponse = { ARN?: {} | undefined }
type TagResourceRequest = { SecretId: {}; Tags: {} }
type UntagResourceRequest = { SecretId: {}; TagKeys: {} }
type UpdateSecretRequest = {
  SecretId: {}
  ClientRequestToken?: {} | undefined
  Description?: {} | undefined
  KmsKeyId?: {} | undefined
  SecretBinary?: {} | undefined
  SecretString?: {} | undefined
}
type UpdateSecretResponse = {
  ARN?: {} | undefined
  Name?: {} | undefined
  VersionId?: {} | undefined
}
type UpdateSecretVersionStageRequest = {
  SecretId: {}
  VersionStage: {}
  RemoveFromVersionId?: {} | undefined
  MoveToVersionId?: {} | undefined
}
type UpdateSecretVersionStageResponse = { ARN?: {} | undefined; Name?: {} | undefined }
type ValidateResourcePolicyRequest = { SecretId?: {} | undefined; ResourcePolicy: {} }
type ValidateResourcePolicyResponse = {
  PolicyValidationPassed?: {} | undefined
  ValidationErrors?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=secretsmanager.CancelRotateSecret': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.CancelRotateSecret'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelRotateSecretRequest }
        output: CancelRotateSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.CreateSecret': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.CreateSecret'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSecretRequest }
        output: CreateSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.DeleteResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.DeleteResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourcePolicyRequest }
        output: DeleteResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.DeleteSecret': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.DeleteSecret'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSecretRequest }
        output: DeleteSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.DescribeSecret': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.DescribeSecret'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSecretRequest }
        output: DescribeSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.GetRandomPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.GetRandomPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRandomPasswordRequest }
        output: GetRandomPasswordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.GetResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.GetResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourcePolicyRequest }
        output: GetResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.GetSecretValue': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.GetSecretValue'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSecretValueRequest }
        output: GetSecretValueResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.ListSecretVersionIds': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'secretsmanager.ListSecretVersionIds'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSecretVersionIdsRequest }
        output: ListSecretVersionIdsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.ListSecrets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'secretsmanager.ListSecrets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSecretsRequest }
        output: ListSecretsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.PutResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutResourcePolicyRequest }
        output: PutResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.PutSecretValue': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.PutSecretValue'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutSecretValueRequest }
        output: PutSecretValueResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.RemoveRegionsFromReplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveRegionsFromReplicationRequest }
        output: RemoveRegionsFromReplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.ReplicateSecretToRegions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.ReplicateSecretToRegions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ReplicateSecretToRegionsRequest }
        output: ReplicateSecretToRegionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.RestoreSecret': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.RestoreSecret'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreSecretRequest }
        output: RestoreSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.RotateSecret': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.RotateSecret'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RotateSecretRequest }
        output: RotateSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.StopReplicationToReplica': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.StopReplicationToReplica'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopReplicationToReplicaRequest }
        output: StopReplicationToReplicaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.UpdateSecret': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.UpdateSecret'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSecretRequest }
        output: UpdateSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.UpdateSecretVersionStage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.UpdateSecretVersionStage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSecretVersionStageRequest }
        output: UpdateSecretVersionStageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=secretsmanager.ValidateResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'secretsmanager.ValidateResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ValidateResourcePolicyRequest }
        output: ValidateResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
