import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getGetV1betaNameKey(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
) {
  return ['v1beta', '/v1beta/:name', args] as const
}

export function useGetV1betaName<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1betaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaName<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1betaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1betaNameKey() {
  return ['v1beta', '/v1beta/:name', 'DELETE'] as const
}

export function useDeleteV1betaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1betaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta)[':name']['$delete']> },
      ) => parseResponse(client.v1beta[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1betaNameKey() {
  return ['v1beta', '/v1beta/:name', 'PATCH'] as const
}

export function usePatchV1betaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1betaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta)[':name']['$patch']> },
      ) => parseResponse(client.v1beta[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaNameOperationsKey(
  args: InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
) {
  return ['v1beta', '/v1beta/:name/operations', args] as const
}

export function useGetV1betaNameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':name']['operations']['$get']>>
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
        ? getGetV1betaNameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaNameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':name']['operations']['$get']>>
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
        ? getGetV1betaNameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1betaParentDocumentsKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/documents', args] as const
}

export function useGetV1betaParentDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$get']>>
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
        ? getGetV1betaParentDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentDocuments<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$get']>>
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
        ? getGetV1betaParentDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta[':parent'].documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentDocumentsKey() {
  return ['v1beta', '/v1beta/:parent/documents', 'POST'] as const
}

export function usePostV1betaParentDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta)[':parent']['documents']['$post']> },
      ) => parseResponse(client.v1beta[':parent'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaParentDocumentsImportKey() {
  return ['v1beta', '/v1beta/:parent/documents:import', 'POST'] as const
}

export function usePostV1betaParentDocumentsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['documents:import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['documents:import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentDocumentsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta)[':parent']['documents:import']['$post']>
        },
      ) => parseResponse(client.v1beta[':parent']['documents:import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1betaParentUserEventsCollectKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/userEvents:collect', args] as const
}

export function useGetV1betaParentUserEventsCollect<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>>
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
        ? getGetV1betaParentUserEventsCollectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta[':parent']['userEvents:collect'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1betaParentUserEventsCollect<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>>
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
        ? getGetV1betaParentUserEventsCollectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:collect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta[':parent']['userEvents:collect'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1betaParentUserEventsImportKey() {
  return ['v1beta', '/v1beta/:parent/userEvents:import', 'POST'] as const
}

export function usePostV1betaParentUserEventsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentUserEventsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:import']['$post']>
        },
      ) => parseResponse(client.v1beta[':parent']['userEvents:import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaParentUserEventsWriteKey() {
  return ['v1beta', '/v1beta/:parent/userEvents:write', 'POST'] as const
}

export function usePostV1betaParentUserEventsWrite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaParentUserEventsWriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta)[':parent']['userEvents:write']['$post']>
        },
      ) => parseResponse(client.v1beta[':parent']['userEvents:write'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaServingConfigRecommendKey() {
  return ['v1beta', '/v1beta/:servingConfig:recommend', 'POST'] as const
}

export function usePostV1betaServingConfigRecommend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':servingConfig:recommend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':servingConfig:recommend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaServingConfigRecommendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta)[':servingConfig:recommend']['$post']> },
      ) => parseResponse(client.v1beta[':servingConfig:recommend'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
