import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1DomainnamesDomainNameApiassociationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/domainnames/:domainName/apiassociation', keyArgs] as const
}

export function getV1DomainnamesDomainNameApiassociationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainnamesDomainNameApiassociationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domainnames[':domainName'].apiassociation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainnamesDomainNameApiassociation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1DomainnamesDomainNameApiassociationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainnamesDomainNameApiassociationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainnamesDomainNameApiassociationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domainnames[':domainName'].apiassociation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DomainnamesDomainNameApiassociationMutationKey() {
  return ['v1', '/v1/domainnames/:domainName/apiassociation', 'POST'] as const
}

export function getPostV1DomainnamesDomainNameApiassociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainnamesDomainNameApiassociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']
      >,
    ) {
      return parseResponse(client.v1.domainnames[':domainName'].apiassociation.$post(args, options))
    },
  })
}

export function usePostV1DomainnamesDomainNameApiassociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainnamesDomainNameApiassociationMutationOptions<
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

export function getDeleteV1DomainnamesDomainNameApiassociationMutationKey() {
  return ['v1', '/v1/domainnames/:domainName/apiassociation', 'DELETE'] as const
}

export function getDeleteV1DomainnamesDomainNameApiassociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainnamesDomainNameApiassociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.domainnames[':domainName'].apiassociation.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1DomainnamesDomainNameApiassociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1DomainnamesDomainNameApiassociationMutationOptions<
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

export function getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsMutationKey() {
  return ['v1', '/v1/sourceApis/:sourceApiIdentifier/mergedApiAssociations', 'POST'] as const
}

export function getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.sourceApis[':sourceApiIdentifier'].mergedApiAssociations.$post(args, options),
      )
    },
  })
}

export function usePostV1SourceApisSourceApiIdentifierMergedApiAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1SourceApisSourceApiIdentifierMergedApiAssociationsMutationOptions<
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

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsMutationKey() {
  return ['v1', '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations', 'POST'] as const
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations.$post(args, options),
      )
    },
  })
}

export function usePostV1MergedApisMergedApiIdentifierSourceApiAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsMutationOptions<
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

export function getV1ApisApiIdApiCachesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/ApiCaches', keyArgs] as const
}

export function getV1ApisApiIdApiCachesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdApiCachesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].ApiCaches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdApiCaches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdApiCachesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdApiCachesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdApiCachesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].ApiCaches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdApiCachesMutationKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches', 'POST'] as const
}

export function getPostV1ApisApiIdApiCachesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdApiCachesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].ApiCaches.$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdApiCaches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdApiCachesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ApisApiIdApiCachesMutationKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdApiCachesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdApiCachesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].ApiCaches.$delete(args, options))
    },
  })
}

export function useDeleteV1ApisApiIdApiCaches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApisApiIdApiCachesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdApikeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/apikeys', keyArgs] as const
}

export function getV1ApisApiIdApikeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdApikeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].apikeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdApikeysQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdApikeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdApikeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].apikeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdApikeysMutationKey() {
  return ['v1', '/v1/apis/:apiId/apikeys', 'POST'] as const
}

export function getPostV1ApisApiIdApikeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdApikeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].apikeys.$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdApikeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdApikeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdDatasourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/datasources', keyArgs] as const
}

export function getV1ApisApiIdDatasourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdDatasourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].datasources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdDatasources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdDatasourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdDatasourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdDatasourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].datasources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdDatasourcesMutationKey() {
  return ['v1', '/v1/apis/:apiId/datasources', 'POST'] as const
}

export function getPostV1ApisApiIdDatasourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdDatasourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].datasources.$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdDatasources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdDatasourcesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DomainnamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domainnames.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/domainnames', keyArgs] as const
}

export function getV1DomainnamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domainnames.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainnamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domainnames.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Domainnames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.domainnames.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
          >,
          ReturnType<typeof getV1DomainnamesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainnamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainnamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domainnames.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DomainnamesMutationKey() {
  return ['v1', '/v1/domainnames', 'POST'] as const
}

export function getPostV1DomainnamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.domainnames.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainnamesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domainnames.$post>) {
      return parseResponse(client.v1.domainnames.$post(args, options))
    },
  })
}

export function usePostV1Domainnames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.domainnames.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.domainnames.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainnamesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdFunctionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/functions', keyArgs] as const
}

export function getV1ApisApiIdFunctionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdFunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].functions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdFunctionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdFunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].functions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdFunctionsMutationKey() {
  return ['v1', '/v1/apis/:apiId/functions', 'POST'] as const
}

export function getPostV1ApisApiIdFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdFunctionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].functions.$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdFunctionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apis.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis', keyArgs] as const
}

export function getV1ApisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Apis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.apis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>
          >,
          ReturnType<typeof getV1ApisQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ApisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisMutationKey() {
  return ['v1', '/v1/apis', 'POST'] as const
}

export function getPostV1ApisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.apis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.apis.$post>) {
      return parseResponse(client.v1.apis.$post(args, options))
    },
  })
}

export function usePostV1Apis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apis.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.apis.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdTypesTypeNameResolversQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers', keyArgs] as const
}

export function getV1ApisApiIdTypesTypeNameResolversQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdTypesTypeNameResolversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdTypesTypeNameResolvers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdTypesTypeNameResolversQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdTypesTypeNameResolversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdTypesTypeNameResolversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].types[':typeName'].resolvers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdTypesTypeNameResolversMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers', 'POST'] as const
}

export function getPostV1ApisApiIdTypesTypeNameResolversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdTypesTypeNameResolversMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers.$post(args, options),
      )
    },
  })
}

export function usePostV1ApisApiIdTypesTypeNameResolvers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdTypesTypeNameResolversMutationOptions<
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

export function getPostV1ApisApiIdTypesMutationKey() {
  return ['v1', '/v1/apis/:apiId/types', 'POST'] as const
}

export function getPostV1ApisApiIdTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdTypesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']>) {
      return parseResponse(client.v1.apis[':apiId'].types.$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdTypesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdApikeysIdMutationKey() {
  return ['v1', '/v1/apis/:apiId/apikeys/:id', 'POST'] as const
}

export function getPostV1ApisApiIdApikeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdApikeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].apikeys[':id'].$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdApikeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdApikeysIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ApisApiIdApikeysIdMutationKey() {
  return ['v1', '/v1/apis/:apiId/apikeys/:id', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdApikeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdApikeysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].apikeys[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ApisApiIdApikeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApisApiIdApikeysIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdDatasourcesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/datasources/:name', keyArgs] as const
}

export function getV1ApisApiIdDatasourcesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdDatasourcesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].datasources[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdDatasourcesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdDatasourcesNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdDatasourcesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdDatasourcesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].datasources[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdDatasourcesNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/datasources/:name', 'POST'] as const
}

export function getPostV1ApisApiIdDatasourcesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdDatasourcesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].datasources[':name'].$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdDatasourcesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdDatasourcesNameMutationOptions<
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

export function getDeleteV1ApisApiIdDatasourcesNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/datasources/:name', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdDatasourcesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdDatasourcesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].datasources[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1ApisApiIdDatasourcesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApisApiIdDatasourcesNameMutationOptions<
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

export function getV1DomainnamesDomainNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/domainnames/:domainName', keyArgs] as const
}

export function getV1DomainnamesDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DomainnamesDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.domainnames[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DomainnamesDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DomainnamesDomainNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainnamesDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DomainnamesDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.domainnames[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DomainnamesDomainNameMutationKey() {
  return ['v1', '/v1/domainnames/:domainName', 'POST'] as const
}

export function getPostV1DomainnamesDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainnamesDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']>,
    ) {
      return parseResponse(client.v1.domainnames[':domainName'].$post(args, options))
    },
  })
}

export function usePostV1DomainnamesDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainnamesDomainNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1DomainnamesDomainNameMutationKey() {
  return ['v1', '/v1/domainnames/:domainName', 'DELETE'] as const
}

export function getDeleteV1DomainnamesDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainnamesDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']>,
    ) {
      return parseResponse(client.v1.domainnames[':domainName'].$delete(args, options))
    },
  })
}

export function useDeleteV1DomainnamesDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domainnames)[':domainName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1DomainnamesDomainNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdFunctionsFunctionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/functions/:functionId', keyArgs] as const
}

export function getV1ApisApiIdFunctionsFunctionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdFunctionsFunctionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].functions[':functionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdFunctionsFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdFunctionsFunctionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdFunctionsFunctionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdFunctionsFunctionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].functions[':functionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdFunctionsFunctionIdMutationKey() {
  return ['v1', '/v1/apis/:apiId/functions/:functionId', 'POST'] as const
}

export function getPostV1ApisApiIdFunctionsFunctionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdFunctionsFunctionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']
      >,
    ) {
      return parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdFunctionsFunctionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdFunctionsFunctionIdMutationOptions<
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

export function getDeleteV1ApisApiIdFunctionsFunctionIdMutationKey() {
  return ['v1', '/v1/apis/:apiId/functions/:functionId', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdFunctionsFunctionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdFunctionsFunctionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']
      >,
    ) {
      return parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$delete(args, options))
    },
  })
}

export function useDeleteV1ApisApiIdFunctionsFunctionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApisApiIdFunctionsFunctionIdMutationOptions<
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

export function getV1ApisApiIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId', keyArgs] as const
}

export function getV1ApisApiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
            >
          >,
          ReturnType<typeof getV1ApisApiIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdMutationKey() {
  return ['v1', '/v1/apis/:apiId', 'POST'] as const
}

export function getPostV1ApisApiIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.apis)[':apiId']['$post']>) {
      return parseResponse(client.v1.apis[':apiId'].$post(args, options))
    },
  })
}

export function usePostV1ApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ApisApiIdMutationKey() {
  return ['v1', '/v1/apis/:apiId', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']>) {
      return parseResponse(client.v1.apis[':apiId'].$delete(args, options))
    },
  })
}

export function useDeleteV1ApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApisApiIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', keyArgs] as const
}

export function getV1ApisApiIdTypesTypeNameResolversFieldNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdTypesTypeNameResolversFieldName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdTypesTypeNameResolversFieldNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdTypesTypeNameResolversFieldNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', 'POST'] as const
}

export function getPostV1ApisApiIdTypesTypeNameResolversFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdTypesTypeNameResolversFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$post(args, options),
      )
    },
  })
}

export function usePostV1ApisApiIdTypesTypeNameResolversFieldName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdTypesTypeNameResolversFieldNameMutationOptions<
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

export function getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ApisApiIdTypesTypeNameResolversFieldName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApisApiIdTypesTypeNameResolversFieldNameMutationOptions<
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

export function getPostV1ApisApiIdTypesTypeNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName', 'POST'] as const
}

export function getPostV1ApisApiIdTypesTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdTypesTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].types[':typeName'].$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdTypesTypeName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdTypesTypeNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1ApisApiIdTypesTypeNameMutationKey() {
  return ['v1', '/v1/apis/:apiId/types/:typeName', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdTypesTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdTypesTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].types[':typeName'].$delete(args, options))
    },
  })
}

export function useDeleteV1ApisApiIdTypesTypeName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApisApiIdTypesTypeNameMutationOptions<
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

export function getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdMutationKey() {
  return [
    'v1',
    '/v1/sourceApis/:sourceApiIdentifier/mergedApiAssociations/:associationId',
    'DELETE',
  ] as const
}

export function getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.sourceApis[':sourceApiIdentifier'].mergedApiAssociations[
          ':associationId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationIdMutationOptions<
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

export function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId',
    keyArgs,
  ] as const
}

export function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId',
    'POST',
  ] as const
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationOptions<
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

export function getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId',
    'DELETE',
  ] as const
}

export function getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[
          ':associationId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMutationOptions<
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

export function getPostV1DataplaneEvaluatecodeMutationKey() {
  return ['v1', '/v1/dataplane-evaluatecode', 'POST'] as const
}

export function getPostV1DataplaneEvaluatecodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatecode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplaneEvaluatecodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']>,
    ) {
      return parseResponse(client.v1['dataplane-evaluatecode'].$post(args, options))
    },
  })
}

export function usePostV1DataplaneEvaluatecode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatecode']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DataplaneEvaluatecodeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1DataplaneEvaluatetemplateMutationKey() {
  return ['v1', '/v1/dataplane-evaluatetemplate', 'POST'] as const
}

export function getPostV1DataplaneEvaluatetemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DataplaneEvaluatetemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>,
    ) {
      return parseResponse(client.v1['dataplane-evaluatetemplate'].$post(args, options))
    },
  })
}

export function usePostV1DataplaneEvaluatetemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DataplaneEvaluatetemplateMutationOptions<
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

export function getDeleteV1ApisApiIdFlushCacheMutationKey() {
  return ['v1', '/v1/apis/:apiId/FlushCache', 'DELETE'] as const
}

export function getDeleteV1ApisApiIdFlushCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ApisApiIdFlushCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].FlushCache.$delete(args, options))
    },
  })
}

export function useDeleteV1ApisApiIdFlushCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ApisApiIdFlushCacheMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdSchemaFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/schema#format', keyArgs] as const
}

export function getV1ApisApiIdSchemaFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdSchemaFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId']['schema#format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdSchemaFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdSchemaFormatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdSchemaFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdSchemaFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId']['schema#format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ApisApiIdSchemacreationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/schemacreation', keyArgs] as const
}

export function getV1ApisApiIdSchemacreationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdSchemacreationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].schemacreation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdSchemacreation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdSchemacreationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdSchemacreationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdSchemacreationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].schemacreation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ApisApiIdSchemacreationMutationKey() {
  return ['v1', '/v1/apis/:apiId/schemacreation', 'POST'] as const
}

export function getPostV1ApisApiIdSchemacreationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdSchemacreationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].schemacreation.$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdSchemacreation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdSchemacreationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdTypesTypeNameFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/types/:typeName#format', keyArgs] as const
}

export function getV1ApisApiIdTypesTypeNameFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdTypesTypeNameFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].types[':typeName#format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdTypesTypeNameFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdTypesTypeNameFormatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdTypesTypeNameFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdTypesTypeNameFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].types[':typeName#format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ApisApiIdFunctionsFunctionIdResolversQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/functions/:functionId/resolvers', keyArgs] as const
}

export function getV1ApisApiIdFunctionsFunctionIdResolversQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdFunctionsFunctionIdResolversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].functions[':functionId'].resolvers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdFunctionsFunctionIdResolvers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdFunctionsFunctionIdResolversQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdFunctionsFunctionIdResolversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdFunctionsFunctionIdResolversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].functions[':functionId'].resolvers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ApisApiIdSourceApiAssociationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/sourceApiAssociations', keyArgs] as const
}

export function getV1ApisApiIdSourceApiAssociationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdSourceApiAssociationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId'].sourceApiAssociations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdSourceApiAssociations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdSourceApiAssociationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdSourceApiAssociationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdSourceApiAssociationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId'].sourceApiAssociations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/tags/:resourceArn', keyArgs] as const
}

export function getV1TagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TagsResourceArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TagsResourceArnMutationKey() {
  return ['v1', '/v1/tags/:resourceArn', 'POST'] as const
}

export function getPostV1TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.v1.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostV1TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ApisApiIdTypesFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/apis/:apiId/types#format', keyArgs] as const
}

export function getV1ApisApiIdTypesFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ApisApiIdTypesFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.apis[':apiId']['types#format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ApisApiIdTypesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ApisApiIdTypesFormatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ApisApiIdTypesFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ApisApiIdTypesFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.apis[':apiId']['types#format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId/types#format',
    keyArgs,
  ] as const
}

export function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'][
          'types#format'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormatQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'][
            'types#format'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeMutationKey() {
  return [
    'v1',
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId/merge',
    'POST',
  ] as const
}

export function getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[
          ':associationId'
        ].merge.$post(args, options),
      )
    },
  })
}

export function usePostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMergeMutationOptions<
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

export function getDeleteV1TagsResourceArnTagKeysMutationKey() {
  return ['v1', '/v1/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteV1TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteV1TagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TagsResourceArnTagKeysMutationOptions<
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

export function getPostV1ApisApiIdApiCachesUpdateMutationKey() {
  return ['v1', '/v1/apis/:apiId/ApiCaches/update', 'POST'] as const
}

export function getPostV1ApisApiIdApiCachesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ApisApiIdApiCachesUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>,
    ) {
      return parseResponse(client.v1.apis[':apiId'].ApiCaches.update.$post(args, options))
    },
  })
}

export function usePostV1ApisApiIdApiCachesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ApisApiIdApiCachesUpdateMutationOptions<
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
