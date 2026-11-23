import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetSecretsmanagerCancelRotateSecretKey() {
  return ['#X-Amz-Target=secretsmanager.CancelRotateSecret'] as const
}

export function getXAmzTargetSecretsmanagerCreateSecretKey() {
  return ['#X-Amz-Target=secretsmanager.CreateSecret'] as const
}

export function getXAmzTargetSecretsmanagerDeleteResourcePolicyKey() {
  return ['#X-Amz-Target=secretsmanager.DeleteResourcePolicy'] as const
}

export function getXAmzTargetSecretsmanagerDeleteSecretKey() {
  return ['#X-Amz-Target=secretsmanager.DeleteSecret'] as const
}

export function getXAmzTargetSecretsmanagerDescribeSecretKey() {
  return ['#X-Amz-Target=secretsmanager.DescribeSecret'] as const
}

export function getXAmzTargetSecretsmanagerGetRandomPasswordKey() {
  return ['#X-Amz-Target=secretsmanager.GetRandomPassword'] as const
}

export function getXAmzTargetSecretsmanagerGetResourcePolicyKey() {
  return ['#X-Amz-Target=secretsmanager.GetResourcePolicy'] as const
}

export function getXAmzTargetSecretsmanagerGetSecretValueKey() {
  return ['#X-Amz-Target=secretsmanager.GetSecretValue'] as const
}

export function getXAmzTargetSecretsmanagerListSecretVersionIdsKey() {
  return ['#X-Amz-Target=secretsmanager.ListSecretVersionIds'] as const
}

export function getXAmzTargetSecretsmanagerListSecretsKey() {
  return ['#X-Amz-Target=secretsmanager.ListSecrets'] as const
}

export function getXAmzTargetSecretsmanagerPutResourcePolicyKey() {
  return ['#X-Amz-Target=secretsmanager.PutResourcePolicy'] as const
}

export function getXAmzTargetSecretsmanagerPutSecretValueKey() {
  return ['#X-Amz-Target=secretsmanager.PutSecretValue'] as const
}

export function getXAmzTargetSecretsmanagerRemoveRegionsFromReplicationKey() {
  return ['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication'] as const
}

export function getXAmzTargetSecretsmanagerReplicateSecretToRegionsKey() {
  return ['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions'] as const
}

export function getXAmzTargetSecretsmanagerRestoreSecretKey() {
  return ['#X-Amz-Target=secretsmanager.RestoreSecret'] as const
}

export function getXAmzTargetSecretsmanagerRotateSecretKey() {
  return ['#X-Amz-Target=secretsmanager.RotateSecret'] as const
}

export function getXAmzTargetSecretsmanagerStopReplicationToReplicaKey() {
  return ['#X-Amz-Target=secretsmanager.StopReplicationToReplica'] as const
}

export function getXAmzTargetSecretsmanagerTagResourceKey() {
  return ['#X-Amz-Target=secretsmanager.TagResource'] as const
}

export function getXAmzTargetSecretsmanagerUntagResourceKey() {
  return ['#X-Amz-Target=secretsmanager.UntagResource'] as const
}

export function getXAmzTargetSecretsmanagerUpdateSecretKey() {
  return ['#X-Amz-Target=secretsmanager.UpdateSecret'] as const
}

export function getXAmzTargetSecretsmanagerUpdateSecretVersionStageKey() {
  return ['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage'] as const
}

export function getXAmzTargetSecretsmanagerValidateResourcePolicyKey() {
  return ['#X-Amz-Target=secretsmanager.ValidateResourcePolicy'] as const
}

export function getPostXAmzTargetSecretsmanagerCancelRotateSecretKey() {
  return [
    '#X-Amz-Target=secretsmanager.CancelRotateSecret',
    '/#X-Amz-Target=secretsmanager.CancelRotateSecret',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerCancelRotateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.CancelRotateSecret']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.CancelRotateSecret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerCancelRotateSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.CancelRotateSecret']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.CancelRotateSecret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerCreateSecretKey() {
  return [
    '#X-Amz-Target=secretsmanager.CreateSecret',
    '/#X-Amz-Target=secretsmanager.CreateSecret',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerCreateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerCreateSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.CreateSecret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerDeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=secretsmanager.DeleteResourcePolicy',
    '/#X-Amz-Target=secretsmanager.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerDeleteResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=secretsmanager.DeleteResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerDeleteResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.DeleteResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerDeleteSecretKey() {
  return [
    '#X-Amz-Target=secretsmanager.DeleteSecret',
    '/#X-Amz-Target=secretsmanager.DeleteSecret',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerDeleteSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerDeleteSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.DeleteSecret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerDescribeSecretKey() {
  return [
    '#X-Amz-Target=secretsmanager.DescribeSecret',
    '/#X-Amz-Target=secretsmanager.DescribeSecret',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerDescribeSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.DescribeSecret']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DescribeSecret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerDescribeSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.DescribeSecret']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.DescribeSecret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerGetRandomPasswordKey() {
  return [
    '#X-Amz-Target=secretsmanager.GetRandomPassword',
    '/#X-Amz-Target=secretsmanager.GetRandomPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerGetRandomPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.GetRandomPassword']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.GetRandomPassword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerGetRandomPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.GetRandomPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.GetRandomPassword'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerGetResourcePolicyKey() {
  return [
    '#X-Amz-Target=secretsmanager.GetResourcePolicy',
    '/#X-Amz-Target=secretsmanager.GetResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerGetResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.GetResourcePolicy']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.GetResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerGetResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.GetResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.GetResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerGetSecretValueKey() {
  return [
    '#X-Amz-Target=secretsmanager.GetSecretValue',
    '/#X-Amz-Target=secretsmanager.GetSecretValue',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerGetSecretValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.GetSecretValue']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.GetSecretValue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerGetSecretValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.GetSecretValue']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.GetSecretValue'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerListSecretVersionIdsKey() {
  return [
    '#X-Amz-Target=secretsmanager.ListSecretVersionIds',
    '/#X-Amz-Target=secretsmanager.ListSecretVersionIds',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerListSecretVersionIds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=secretsmanager.ListSecretVersionIds']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecretVersionIds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerListSecretVersionIdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.ListSecretVersionIds']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.ListSecretVersionIds'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerListSecretsKey() {
  return [
    '#X-Amz-Target=secretsmanager.ListSecrets',
    '/#X-Amz-Target=secretsmanager.ListSecrets',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerListSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerListSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=secretsmanager.ListSecrets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerPutResourcePolicyKey() {
  return [
    '#X-Amz-Target=secretsmanager.PutResourcePolicy',
    '/#X-Amz-Target=secretsmanager.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerPutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.PutResourcePolicy']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.PutResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerPutResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.PutResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.PutResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerPutSecretValueKey() {
  return [
    '#X-Amz-Target=secretsmanager.PutSecretValue',
    '/#X-Amz-Target=secretsmanager.PutSecretValue',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerPutSecretValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.PutSecretValue']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.PutSecretValue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerPutSecretValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.PutSecretValue']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.PutSecretValue'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerRemoveRegionsFromReplicationKey() {
  return [
    '#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication',
    '/#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerRemoveRegionsFromReplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerRemoveRegionsFromReplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerReplicateSecretToRegionsKey() {
  return [
    '#X-Amz-Target=secretsmanager.ReplicateSecretToRegions',
    '/#X-Amz-Target=secretsmanager.ReplicateSecretToRegions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerReplicateSecretToRegions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerReplicateSecretToRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerRestoreSecretKey() {
  return [
    '#X-Amz-Target=secretsmanager.RestoreSecret',
    '/#X-Amz-Target=secretsmanager.RestoreSecret',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerRestoreSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.RestoreSecret']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RestoreSecret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerRestoreSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.RestoreSecret']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.RestoreSecret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerRotateSecretKey() {
  return [
    '#X-Amz-Target=secretsmanager.RotateSecret',
    '/#X-Amz-Target=secretsmanager.RotateSecret',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerRotateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerRotateSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.RotateSecret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerStopReplicationToReplicaKey() {
  return [
    '#X-Amz-Target=secretsmanager.StopReplicationToReplica',
    '/#X-Amz-Target=secretsmanager.StopReplicationToReplica',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerStopReplicationToReplica<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=secretsmanager.StopReplicationToReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.StopReplicationToReplica']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerStopReplicationToReplicaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.StopReplicationToReplica']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.StopReplicationToReplica'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerTagResourceKey() {
  return [
    '#X-Amz-Target=secretsmanager.TagResource',
    '/#X-Amz-Target=secretsmanager.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=secretsmanager.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerUntagResourceKey() {
  return [
    '#X-Amz-Target=secretsmanager.UntagResource',
    '/#X-Amz-Target=secretsmanager.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerUpdateSecretKey() {
  return [
    '#X-Amz-Target=secretsmanager.UpdateSecret',
    '/#X-Amz-Target=secretsmanager.UpdateSecret',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerUpdateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerUpdateSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.UpdateSecret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerUpdateSecretVersionStageKey() {
  return [
    '#X-Amz-Target=secretsmanager.UpdateSecretVersionStage',
    '/#X-Amz-Target=secretsmanager.UpdateSecretVersionStage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerUpdateSecretVersionStage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerUpdateSecretVersionStageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSecretsmanagerValidateResourcePolicyKey() {
  return [
    '#X-Amz-Target=secretsmanager.ValidateResourcePolicy',
    '/#X-Amz-Target=secretsmanager.ValidateResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSecretsmanagerValidateResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=secretsmanager.ValidateResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.ValidateResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSecretsmanagerValidateResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=secretsmanager.ValidateResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=secretsmanager.ValidateResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
