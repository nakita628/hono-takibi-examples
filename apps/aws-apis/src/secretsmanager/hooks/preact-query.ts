import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostXAmzTargetSecretsmanagerCancelRotateSecretMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.CancelRotateSecret',
    '/#X-Amz-Target=secretsmanager.CancelRotateSecret',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerCancelRotateSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.CancelRotateSecret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerCancelRotateSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.CancelRotateSecret']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.CancelRotateSecret'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerCancelRotateSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=secretsmanager.CancelRotateSecret']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.CancelRotateSecret']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerCancelRotateSecretMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerCreateSecretMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.CreateSecret',
    '/#X-Amz-Target=secretsmanager.CreateSecret',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerCreateSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerCreateSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=secretsmanager.CreateSecret'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSecretsmanagerCreateSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.CreateSecret']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerCreateSecretMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerDeleteResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.DeleteResourcePolicy',
    '/#X-Amz-Target=secretsmanager.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerDeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerDeleteResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.DeleteResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.DeleteResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerDeleteResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.DeleteResourcePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerDeleteResourcePolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerDeleteSecretMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.DeleteSecret',
    '/#X-Amz-Target=secretsmanager.DeleteSecret',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerDeleteSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerDeleteSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=secretsmanager.DeleteSecret'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSecretsmanagerDeleteSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DeleteSecret']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerDeleteSecretMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerDescribeSecretMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.DescribeSecret',
    '/#X-Amz-Target=secretsmanager.DescribeSecret',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerDescribeSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DescribeSecret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerDescribeSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.DescribeSecret']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.DescribeSecret'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerDescribeSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.DescribeSecret']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerDescribeSecretMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerGetRandomPasswordMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.GetRandomPassword',
    '/#X-Amz-Target=secretsmanager.GetRandomPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerGetRandomPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.GetRandomPassword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerGetRandomPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.GetRandomPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.GetRandomPassword'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerGetRandomPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=secretsmanager.GetRandomPassword']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.GetRandomPassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerGetRandomPasswordMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerGetResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.GetResourcePolicy',
    '/#X-Amz-Target=secretsmanager.GetResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerGetResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.GetResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerGetResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.GetResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.GetResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerGetResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=secretsmanager.GetResourcePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.GetResourcePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerGetResourcePolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerGetSecretValueMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.GetSecretValue',
    '/#X-Amz-Target=secretsmanager.GetSecretValue',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerGetSecretValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.GetSecretValue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerGetSecretValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.GetSecretValue']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.GetSecretValue'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerGetSecretValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.GetSecretValue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerGetSecretValueMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerListSecretVersionIdsMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.ListSecretVersionIds',
    '/#X-Amz-Target=secretsmanager.ListSecretVersionIds',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerListSecretVersionIdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecretVersionIds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerListSecretVersionIdsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.ListSecretVersionIds']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.ListSecretVersionIds'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerListSecretVersionIds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.ListSecretVersionIds']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerListSecretVersionIdsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerListSecretsMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.ListSecrets',
    '/#X-Amz-Target=secretsmanager.ListSecrets',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerListSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerListSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=secretsmanager.ListSecrets'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSecretsmanagerListSecrets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.ListSecrets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerListSecretsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerPutResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.PutResourcePolicy',
    '/#X-Amz-Target=secretsmanager.PutResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerPutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.PutResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerPutResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.PutResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.PutResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerPutResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=secretsmanager.PutResourcePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.PutResourcePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerPutResourcePolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerPutSecretValueMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.PutSecretValue',
    '/#X-Amz-Target=secretsmanager.PutSecretValue',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerPutSecretValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.PutSecretValue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerPutSecretValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.PutSecretValue']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.PutSecretValue'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerPutSecretValue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.PutSecretValue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerPutSecretValueMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerRemoveRegionsFromReplicationMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication',
    '/#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerRemoveRegionsFromReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerRemoveRegionsFromReplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerRemoveRegionsFromReplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSecretsmanagerRemoveRegionsFromReplicationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerReplicateSecretToRegionsMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.ReplicateSecretToRegions',
    '/#X-Amz-Target=secretsmanager.ReplicateSecretToRegions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerReplicateSecretToRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerReplicateSecretToRegionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerReplicateSecretToRegions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.ReplicateSecretToRegions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerReplicateSecretToRegionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerRestoreSecretMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.RestoreSecret',
    '/#X-Amz-Target=secretsmanager.RestoreSecret',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerRestoreSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RestoreSecret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerRestoreSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.RestoreSecret']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.RestoreSecret'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerRestoreSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RestoreSecret']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerRestoreSecretMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerRotateSecretMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.RotateSecret',
    '/#X-Amz-Target=secretsmanager.RotateSecret',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerRotateSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerRotateSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=secretsmanager.RotateSecret'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSecretsmanagerRotateSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.RotateSecret']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerRotateSecretMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerStopReplicationToReplicaMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.StopReplicationToReplica',
    '/#X-Amz-Target=secretsmanager.StopReplicationToReplica',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerStopReplicationToReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.StopReplicationToReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerStopReplicationToReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.StopReplicationToReplica']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.StopReplicationToReplica'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerStopReplicationToReplica<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.StopReplicationToReplica']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerStopReplicationToReplicaMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerTagResourceMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.TagResource',
    '/#X-Amz-Target=secretsmanager.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=secretsmanager.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSecretsmanagerTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerTagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.UntagResource',
    '/#X-Amz-Target=secretsmanager.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerUntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerUpdateSecretMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.UpdateSecret',
    '/#X-Amz-Target=secretsmanager.UpdateSecret',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerUpdateSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerUpdateSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=secretsmanager.UpdateSecret'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetSecretsmanagerUpdateSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=secretsmanager.UpdateSecret']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerUpdateSecretMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerUpdateSecretVersionStageMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.UpdateSecretVersionStage',
    '/#X-Amz-Target=secretsmanager.UpdateSecretVersionStage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerUpdateSecretVersionStageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerUpdateSecretVersionStageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerUpdateSecretVersionStage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.UpdateSecretVersionStage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerUpdateSecretVersionStageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSecretsmanagerValidateResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=secretsmanager.ValidateResourcePolicy',
    '/#X-Amz-Target=secretsmanager.ValidateResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSecretsmanagerValidateResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=secretsmanager.ValidateResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSecretsmanagerValidateResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=secretsmanager.ValidateResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=secretsmanager.ValidateResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSecretsmanagerValidateResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=secretsmanager.ValidateResourcePolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSecretsmanagerValidateResourcePolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
