import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2alphaKey() {
  return ['v2alpha'] as const
}

export function getPostV2alphaAttributesConfigAddCatalogAttributeKey() {
  return ['v2alpha', '/v2alpha/:attributesConfig:addCatalogAttribute', 'POST'] as const
}

export function usePostV2alphaAttributesConfigAddCatalogAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaAttributesConfigAddCatalogAttributeKey()
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
            (typeof client.v2alpha)[':attributesConfig:addCatalogAttribute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2alpha[':attributesConfig:addCatalogAttribute'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaAttributesConfigBatchRemoveCatalogAttributesKey() {
  return ['v2alpha', '/v2alpha/:attributesConfig:batchRemoveCatalogAttributes', 'POST'] as const
}

export function usePostV2alphaAttributesConfigBatchRemoveCatalogAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaAttributesConfigBatchRemoveCatalogAttributesKey()
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
            (typeof client.v2alpha)[':attributesConfig:batchRemoveCatalogAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2alpha[':attributesConfig:batchRemoveCatalogAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaAttributesConfigRemoveCatalogAttributeKey() {
  return ['v2alpha', '/v2alpha/:attributesConfig:removeCatalogAttribute', 'POST'] as const
}

export function usePostV2alphaAttributesConfigRemoveCatalogAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaAttributesConfigRemoveCatalogAttributeKey()
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
            (typeof client.v2alpha)[':attributesConfig:removeCatalogAttribute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2alpha[':attributesConfig:removeCatalogAttribute'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaAttributesConfigReplaceCatalogAttributeKey() {
  return ['v2alpha', '/v2alpha/:attributesConfig:replaceCatalogAttribute', 'POST'] as const
}

export function usePostV2alphaAttributesConfigReplaceCatalogAttribute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaAttributesConfigReplaceCatalogAttributeKey()
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
            (typeof client.v2alpha)[':attributesConfig:replaceCatalogAttribute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2alpha[':attributesConfig:replaceCatalogAttribute'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaCatalogCompleteQueryKey(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:catalog:completeQuery', args] as const
}

export function useGetV2alphaCatalogCompleteQuery<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
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
        ? getGetV2alphaCatalogCompleteQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':catalog:completeQuery'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaCatalogCompleteQuery<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
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
        ? getGetV2alphaCatalogCompleteQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':catalog:completeQuery']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':catalog:completeQuery'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2alphaCatalogGetDefaultBranchKey(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:catalog:getDefaultBranch', args] as const
}

export function useGetV2alphaCatalogGetDefaultBranch<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
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
        ? getGetV2alphaCatalogGetDefaultBranchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2alpha[':catalog:getDefaultBranch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaCatalogGetDefaultBranch<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
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
        ? getGetV2alphaCatalogGetDefaultBranchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':catalog:getDefaultBranch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2alpha[':catalog:getDefaultBranch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaCatalogSetDefaultBranchKey() {
  return ['v2alpha', '/v2alpha/:catalog:setDefaultBranch', 'POST'] as const
}

export function usePostV2alphaCatalogSetDefaultBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaCatalogSetDefaultBranchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2alpha)[':catalog:setDefaultBranch']['$post']> },
      ) => parseResponse(client.v2alpha[':catalog:setDefaultBranch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaNameKey(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:name', args] as const
}

export function useGetV2alphaName<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2alphaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaName<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2alphaNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaNameKey() {
  return ['v2alpha', '/v2alpha/:name', 'POST'] as const
}

export function usePostV2alphaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':name']['$post']> },
      ) => parseResponse(client.v2alpha[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2alphaNameKey() {
  return ['v2alpha', '/v2alpha/:name', 'DELETE'] as const
}

export function useDeleteV2alphaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2alphaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':name']['$delete']> },
      ) => parseResponse(client.v2alpha[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2alphaNameKey() {
  return ['v2alpha', '/v2alpha/:name', 'PATCH'] as const
}

export function usePatchV2alphaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2alphaNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':name']['$patch']> },
      ) => parseResponse(client.v2alpha[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaNameOperationsKey(
  args: InferRequestType<(typeof client.v2alpha)[':name']['operations']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:name/operations', args] as const
}

export function useGetV2alphaNameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
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
        ? getGetV2alphaNameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaNameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
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
        ? getGetV2alphaNameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaNamePauseKey() {
  return ['v2alpha', '/v2alpha/:name:pause', 'POST'] as const
}

export function usePostV2alphaNamePause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name:pause']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':name:pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaNamePauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':name:pause']['$post']> },
      ) => parseResponse(client.v2alpha[':name:pause'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaNameResumeKey() {
  return ['v2alpha', '/v2alpha/:name:resume', 'POST'] as const
}

export function usePostV2alphaNameResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name:resume']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':name:resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaNameResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':name:resume']['$post']> },
      ) => parseResponse(client.v2alpha[':name:resume'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaNameSetInventoryKey() {
  return ['v2alpha', '/v2alpha/:name:setInventory', 'POST'] as const
}

export function usePostV2alphaNameSetInventory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':name:setInventory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':name:setInventory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaNameSetInventoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':name:setInventory']['$post']> },
      ) => parseResponse(client.v2alpha[':name:setInventory'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaNameTuneKey() {
  return ['v2alpha', '/v2alpha/:name:tune', 'POST'] as const
}

export function usePostV2alphaNameTune<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha)[':name:tune']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':name:tune']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaNameTuneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':name:tune']['$post']> },
      ) => parseResponse(client.v2alpha[':name:tune'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaParentCatalogsKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/catalogs', args] as const
}

export function useGetV2alphaParentCatalogs<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
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
        ? getGetV2alphaParentCatalogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].catalogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaParentCatalogs<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
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
        ? getGetV2alphaParentCatalogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['catalogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].catalogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaParentCompletionDataImportKey() {
  return ['v2alpha', '/v2alpha/:parent/completionData:import', 'POST'] as const
}

export function usePostV2alphaParentCompletionDataImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['completionData:import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['completionData:import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentCompletionDataImportKey()
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
            (typeof client.v2alpha)[':parent']['completionData:import']['$post']
          >
        },
      ) =>
        parseResponse(client.v2alpha[':parent']['completionData:import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaParentControlsKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/controls', args] as const
}

export function useGetV2alphaParentControls<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
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
        ? getGetV2alphaParentControlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].controls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaParentControls<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
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
        ? getGetV2alphaParentControlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].controls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaParentControlsKey() {
  return ['v2alpha', '/v2alpha/:parent/controls', 'POST'] as const
}

export function usePostV2alphaParentControls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['controls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentControlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':parent']['controls']['$post']> },
      ) => parseResponse(client.v2alpha[':parent'].controls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaParentMerchantCenterAccountLinksKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/merchantCenterAccountLinks', args] as const
}

export function useGetV2alphaParentMerchantCenterAccountLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
            >
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
        ? getGetV2alphaParentMerchantCenterAccountLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2alpha[':parent'].merchantCenterAccountLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaParentMerchantCenterAccountLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
            >
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
        ? getGetV2alphaParentMerchantCenterAccountLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2alpha)[':parent']['merchantCenterAccountLinks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2alpha[':parent'].merchantCenterAccountLinks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2alphaParentModelsKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/models', args] as const
}

export function useGetV2alphaParentModels<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
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
        ? getGetV2alphaParentModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaParentModels<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
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
        ? getGetV2alphaParentModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaParentModelsKey() {
  return ['v2alpha', '/v2alpha/:parent/models', 'POST'] as const
}

export function usePostV2alphaParentModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['models']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':parent']['models']['$post']> },
      ) => parseResponse(client.v2alpha[':parent'].models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaParentProductsKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/products', args] as const
}

export function useGetV2alphaParentProducts<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
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
        ? getGetV2alphaParentProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaParentProducts<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
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
        ? getGetV2alphaParentProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaParentProductsKey() {
  return ['v2alpha', '/v2alpha/:parent/products', 'POST'] as const
}

export function usePostV2alphaParentProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':parent']['products']['$post']> },
      ) => parseResponse(client.v2alpha[':parent'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaParentProductsImportKey() {
  return ['v2alpha', '/v2alpha/:parent/products:import', 'POST'] as const
}

export function usePostV2alphaParentProductsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products:import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['products:import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentProductsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':parent']['products:import']['$post']>
        },
      ) => parseResponse(client.v2alpha[':parent']['products:import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaParentProductsPurgeKey() {
  return ['v2alpha', '/v2alpha/:parent/products:purge', 'POST'] as const
}

export function usePostV2alphaParentProductsPurge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['products:purge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['products:purge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentProductsPurgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2alpha)[':parent']['products:purge']['$post']> },
      ) => parseResponse(client.v2alpha[':parent']['products:purge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaParentServingConfigsKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/servingConfigs', args] as const
}

export function useGetV2alphaParentServingConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
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
        ? getGetV2alphaParentServingConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].servingConfigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaParentServingConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
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
        ? getGetV2alphaParentServingConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha[':parent'].servingConfigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaParentServingConfigsKey() {
  return ['v2alpha', '/v2alpha/:parent/servingConfigs', 'POST'] as const
}

export function usePostV2alphaParentServingConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentServingConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2alpha)[':parent']['servingConfigs']['$post']> },
      ) => parseResponse(client.v2alpha[':parent'].servingConfigs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alphaParentUserEventsCollectKey(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>,
) {
  return ['v2alpha', '/v2alpha/:parent/userEvents:collect', args] as const
}

export function useGetV2alphaParentUserEventsCollect<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
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
        ? getGetV2alphaParentUserEventsCollectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2alpha[':parent']['userEvents:collect'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alphaParentUserEventsCollect<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
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
        ? getGetV2alphaParentUserEventsCollectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:collect']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2alpha[':parent']['userEvents:collect'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alphaParentUserEventsImportKey() {
  return ['v2alpha', '/v2alpha/:parent/userEvents:import', 'POST'] as const
}

export function usePostV2alphaParentUserEventsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentUserEventsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:import']['$post']>
        },
      ) => parseResponse(client.v2alpha[':parent']['userEvents:import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaParentUserEventsPurgeKey() {
  return ['v2alpha', '/v2alpha/:parent/userEvents:purge', 'POST'] as const
}

export function usePostV2alphaParentUserEventsPurge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentUserEventsPurgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:purge']['$post']>
        },
      ) => parseResponse(client.v2alpha[':parent']['userEvents:purge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaParentUserEventsRejoinKey() {
  return ['v2alpha', '/v2alpha/:parent/userEvents:rejoin', 'POST'] as const
}

export function usePostV2alphaParentUserEventsRejoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentUserEventsRejoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:rejoin']['$post']>
        },
      ) => parseResponse(client.v2alpha[':parent']['userEvents:rejoin'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaParentUserEventsWriteKey() {
  return ['v2alpha', '/v2alpha/:parent/userEvents:write', 'POST'] as const
}

export function usePostV2alphaParentUserEventsWrite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaParentUserEventsWriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':parent']['userEvents:write']['$post']>
        },
      ) => parseResponse(client.v2alpha[':parent']['userEvents:write'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaPlacementPredictKey() {
  return ['v2alpha', '/v2alpha/:placement:predict', 'POST'] as const
}

export function usePostV2alphaPlacementPredict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':placement:predict']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':placement:predict']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaPlacementPredictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':placement:predict']['$post']> },
      ) => parseResponse(client.v2alpha[':placement:predict'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaPlacementSearchKey() {
  return ['v2alpha', '/v2alpha/:placement:search', 'POST'] as const
}

export function usePostV2alphaPlacementSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':placement:search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':placement:search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaPlacementSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha)[':placement:search']['$post']> },
      ) => parseResponse(client.v2alpha[':placement:search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaProductAddFulfillmentPlacesKey() {
  return ['v2alpha', '/v2alpha/:product:addFulfillmentPlaces', 'POST'] as const
}

export function usePostV2alphaProductAddFulfillmentPlaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaProductAddFulfillmentPlacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':product:addFulfillmentPlaces']['$post']>
        },
      ) => parseResponse(client.v2alpha[':product:addFulfillmentPlaces'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaProductAddLocalInventoriesKey() {
  return ['v2alpha', '/v2alpha/:product:addLocalInventories', 'POST'] as const
}

export function usePostV2alphaProductAddLocalInventories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaProductAddLocalInventoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':product:addLocalInventories']['$post']>
        },
      ) => parseResponse(client.v2alpha[':product:addLocalInventories'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaProductRemoveFulfillmentPlacesKey() {
  return ['v2alpha', '/v2alpha/:product:removeFulfillmentPlaces', 'POST'] as const
}

export function usePostV2alphaProductRemoveFulfillmentPlaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaProductRemoveFulfillmentPlacesKey()
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
            (typeof client.v2alpha)[':product:removeFulfillmentPlaces']['$post']
          >
        },
      ) =>
        parseResponse(client.v2alpha[':product:removeFulfillmentPlaces'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaProductRemoveLocalInventoriesKey() {
  return ['v2alpha', '/v2alpha/:product:removeLocalInventories', 'POST'] as const
}

export function usePostV2alphaProductRemoveLocalInventories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaProductRemoveLocalInventoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':product:removeLocalInventories']['$post']>
        },
      ) =>
        parseResponse(client.v2alpha[':product:removeLocalInventories'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaServingConfigAddControlKey() {
  return ['v2alpha', '/v2alpha/:servingConfig:addControl', 'POST'] as const
}

export function usePostV2alphaServingConfigAddControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaServingConfigAddControlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2alpha)[':servingConfig:addControl']['$post']> },
      ) => parseResponse(client.v2alpha[':servingConfig:addControl'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alphaServingConfigRemoveControlKey() {
  return ['v2alpha', '/v2alpha/:servingConfig:removeControl', 'POST'] as const
}

export function usePostV2alphaServingConfigRemoveControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alphaServingConfigRemoveControlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2alpha)[':servingConfig:removeControl']['$post']>
        },
      ) => parseResponse(client.v2alpha[':servingConfig:removeControl'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
