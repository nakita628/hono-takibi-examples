import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta3Key() {
  return ['v1beta3'] as const
}

export function getPostV1beta3HumanReviewConfigReviewDocumentKey() {
  return ['v1beta3', '/v1beta3/:humanReviewConfig:reviewDocument', 'POST'] as const
}

export function usePostV1beta3HumanReviewConfigReviewDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3HumanReviewConfigReviewDocumentKey()
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
            (typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta3[':humanReviewConfig:reviewDocument'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta3NameKey(
  args: InferRequestType<(typeof client.v1beta3)[':name']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:name', args] as const
}

export function useGetV1beta3Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta3NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1beta3NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1beta3NameKey() {
  return ['v1beta3', '/v1beta3/:name', 'DELETE'] as const
}

export function useDeleteV1beta3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1beta3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta3)[':name']['$delete']> },
      ) => parseResponse(client.v1beta3[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta3NameLocationsKey(
  args: InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:name/locations', args] as const
}

export function useGetV1beta3NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta3NameBatchProcessKey() {
  return ['v1beta3', '/v1beta3/:name:batchProcess', 'POST'] as const
}

export function usePostV1beta3NameBatchProcess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':name:batchProcess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':name:batchProcess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3NameBatchProcessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta3)[':name:batchProcess']['$post']> },
      ) => parseResponse(client.v1beta3[':name:batchProcess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta3NameCancelKey() {
  return ['v1beta3', '/v1beta3/:name:cancel', 'POST'] as const
}

export function usePostV1beta3NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta3)[':name:cancel']['$post']> },
      ) => parseResponse(client.v1beta3[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta3NameDeployKey() {
  return ['v1beta3', '/v1beta3/:name:deploy', 'POST'] as const
}

export function usePostV1beta3NameDeploy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:deploy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':name:deploy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3NameDeployKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta3)[':name:deploy']['$post']> },
      ) => parseResponse(client.v1beta3[':name:deploy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta3NameDisableKey() {
  return ['v1beta3', '/v1beta3/:name:disable', 'POST'] as const
}

export function usePostV1beta3NameDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:disable']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':name:disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3NameDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta3)[':name:disable']['$post']> },
      ) => parseResponse(client.v1beta3[':name:disable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta3NameEnableKey() {
  return ['v1beta3', '/v1beta3/:name:enable', 'POST'] as const
}

export function usePostV1beta3NameEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:enable']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':name:enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3NameEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta3)[':name:enable']['$post']> },
      ) => parseResponse(client.v1beta3[':name:enable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta3NameProcessKey() {
  return ['v1beta3', '/v1beta3/:name:process', 'POST'] as const
}

export function usePostV1beta3NameProcess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:process']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':name:process']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3NameProcessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta3)[':name:process']['$post']> },
      ) => parseResponse(client.v1beta3[':name:process'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta3NameUndeployKey() {
  return ['v1beta3', '/v1beta3/:name:undeploy', 'POST'] as const
}

export function usePostV1beta3NameUndeploy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':name:undeploy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':name:undeploy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3NameUndeployKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta3)[':name:undeploy']['$post']> },
      ) => parseResponse(client.v1beta3[':name:undeploy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta3ParentEvaluationsKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent/evaluations', args] as const
}

export function useGetV1beta3ParentEvaluations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentEvaluationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':parent'].evaluations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3ParentEvaluations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentEvaluationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':parent'].evaluations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3ParentProcessorTypesKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent/processorTypes', args] as const
}

export function useGetV1beta3ParentProcessorTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentProcessorTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':parent'].processorTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3ParentProcessorTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentProcessorTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':parent'].processorTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta3ParentProcessorVersionsKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent/processorVersions', args] as const
}

export function useGetV1beta3ParentProcessorVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentProcessorVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3[':parent'].processorVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3ParentProcessorVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentProcessorVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3[':parent'].processorVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta3ParentProcessorVersionsImportProcessorVersionKey() {
  return ['v1beta3', '/v1beta3/:parent/processorVersions:importProcessorVersion', 'POST'] as const
}

export function usePostV1beta3ParentProcessorVersionsImportProcessorVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3ParentProcessorVersionsImportProcessorVersionKey()
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
            (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta3[':parent']['processorVersions:importProcessorVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta3ParentProcessorVersionsTrainKey() {
  return ['v1beta3', '/v1beta3/:parent/processorVersions:train', 'POST'] as const
}

export function usePostV1beta3ParentProcessorVersionsTrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3ParentProcessorVersionsTrainKey()
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
            (typeof client.v1beta3)[':parent']['processorVersions:train']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta3[':parent']['processorVersions:train'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta3ParentProcessorsKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent/processors', args] as const
}

export function useGetV1beta3ParentProcessors<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentProcessorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':parent'].processors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3ParentProcessors<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentProcessorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta3[':parent'].processors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta3ParentProcessorsKey() {
  return ['v1beta3', '/v1beta3/:parent/processors', 'POST'] as const
}

export function usePostV1beta3ParentProcessors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3ParentProcessorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$post']> },
      ) => parseResponse(client.v1beta3[':parent'].processors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta3ParentFetchProcessorTypesKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent:fetchProcessorTypes', args] as const
}

export function useGetV1beta3ParentFetchProcessorTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentFetchProcessorTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3[':parent:fetchProcessorTypes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta3ParentFetchProcessorTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1beta3ParentFetchProcessorTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta3[':parent:fetchProcessorTypes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta3ProcessorVersionEvaluateProcessorVersionKey() {
  return ['v1beta3', '/v1beta3/:processorVersion:evaluateProcessorVersion', 'POST'] as const
}

export function usePostV1beta3ProcessorVersionEvaluateProcessorVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3ProcessorVersionEvaluateProcessorVersionKey()
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
            (typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta3[':processorVersion:evaluateProcessorVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta3ProcessorSetDefaultProcessorVersionKey() {
  return ['v1beta3', '/v1beta3/:processor:setDefaultProcessorVersion', 'POST'] as const
}

export function usePostV1beta3ProcessorSetDefaultProcessorVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta3ProcessorSetDefaultProcessorVersionKey()
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
            (typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta3[':processor:setDefaultProcessorVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
