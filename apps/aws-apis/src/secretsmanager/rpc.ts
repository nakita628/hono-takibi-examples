import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetSecretsmanagerCancelRotateSecret(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.CancelRotateSecret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.CancelRotateSecret'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerCreateSecret(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.CreateSecret'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerDeleteResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.DeleteResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.DeleteResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerDeleteSecret(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.DeleteSecret'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerDescribeSecret(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DescribeSecret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.DescribeSecret'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerGetRandomPassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.GetRandomPassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.GetRandomPassword'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerGetResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.GetResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.GetResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerGetSecretValue(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.GetSecretValue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.GetSecretValue'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerListSecretVersionIds(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.ListSecretVersionIds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.ListSecretVersionIds'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerListSecrets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.ListSecrets'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerPutResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.PutResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.PutResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerPutSecretValue(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.PutSecretValue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.PutSecretValue'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerRemoveRegionsFromReplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerReplicateSecretToRegions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerRestoreSecret(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RestoreSecret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.RestoreSecret'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerRotateSecret(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.RotateSecret'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerStopReplicationToReplica(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.StopReplicationToReplica']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.StopReplicationToReplica'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerUpdateSecret(
  args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.UpdateSecret'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerUpdateSecretVersionStage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage'].$post(args, options),
  )
}

export async function postXAmzTargetSecretsmanagerValidateResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=secretsmanager.ValidateResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=secretsmanager.ValidateResourcePolicy'].$post(args, options),
  )
}
