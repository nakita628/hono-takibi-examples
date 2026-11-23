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

export function getPlatformKey() {
  return ['platform'] as const
}

export function getPlatformDocsQueryKey() {
  return ['platform', '/platform/docs'] as const
}

export function getPlatformDocsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformDocsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.docs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlatformDocs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
          >,
          ReturnType<typeof getPlatformDocsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.docs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformDocsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformDocsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.docs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformDocsSwaggerUiQueryKey() {
  return ['platform', '/platform/docs/swagger-ui'] as const
}

export function getPlatformDocsSwaggerUiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformDocsSwaggerUiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.docs['swagger-ui'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformDocsSwaggerUi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformDocsSwaggerUiQueryKey>
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
          Awaited<ReturnType<(typeof client.platform.docs)['swagger-ui']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformDocsSwaggerUiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformDocsSwaggerUiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.docs['swagger-ui'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPrivateAutocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.autocomplete.$get>>,
) {
  return ['platform', '/platform/private/autocomplete', toValue(args)] as const
}

export function getPlatformPrivateAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.autocomplete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.autocomplete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.autocomplete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateAutocompleteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.autocomplete.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.autocomplete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlatformPrivateBesthitsearchMutationKey() {
  return ['platform', '/platform/private/besthitsearch', 'POST'] as const
}

export function getPostPlatformPrivateBesthitsearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.besthitsearch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.besthitsearch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateBesthitsearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.private.besthitsearch.$post>) {
      return parseResponse(client.platform.private.besthitsearch.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateBesthitsearch<
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
                Awaited<ReturnType<typeof client.platform.private.besthitsearch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.private.besthitsearch.$post>,
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
  const mutationDefaults = getPostPlatformPrivateBesthitsearchMutationOptions<
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

export function getPostPlatformPrivateDiseaseMutationKey() {
  return ['platform', '/platform/private/disease', 'POST'] as const
}

export function getPostPlatformPrivateDiseaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.disease.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.disease.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateDiseaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.private.disease.$post>) {
      return parseResponse(client.platform.private.disease.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateDisease<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.private.disease.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.private.disease.$post>,
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
  const mutationDefaults = getPostPlatformPrivateDiseaseMutationOptions<TError, TOnMutateResult>(
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

export function getPlatformPrivateDiseaseDiseaseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>
  >,
) {
  return ['platform', '/platform/private/disease/:disease', toValue(args)] as const
}

export function getPlatformPrivateDiseaseDiseaseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateDiseaseDiseaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.disease[':disease'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateDiseaseDisease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.disease)[':disease']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateDiseaseDiseaseQueryKey>
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
          Awaited<ReturnType<(typeof client.platform.private.disease)[':disease']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateDiseaseDiseaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateDiseaseDiseaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.disease[':disease'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPrivateDrugDRUGIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>
  >,
) {
  return ['platform', '/platform/private/drug/:DRUG_ID', toValue(args)] as const
}

export function getPlatformPrivateDrugDRUGIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateDrugDRUGIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.drug[':DRUG_ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateDrugDRUGID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateDrugDRUGIDQueryKey>
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
          Awaited<ReturnType<(typeof client.platform.private.drug)[':DRUG_ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateDrugDRUGIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateDrugDRUGIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.drug[':DRUG_ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPrivateEcoECOIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>,
) {
  return ['platform', '/platform/private/eco/:ECO_ID', toValue(args)] as const
}

export function getPlatformPrivateEcoECOIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateEcoECOIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.eco[':ECO_ID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateEcoECOID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateEcoECOIDQueryKey>
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
          Awaited<ReturnType<(typeof client.platform.private.eco)[':ECO_ID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateEcoECOIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateEcoECOIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.eco[':ECO_ID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlatformPrivateEnrichmentTargetsMutationKey() {
  return ['platform', '/platform/private/enrichment/targets', 'POST'] as const
}

export function getPostPlatformPrivateEnrichmentTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.enrichment.targets.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.enrichment.targets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateEnrichmentTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.platform.private.enrichment.targets.$post>,
    ) {
      return parseResponse(client.platform.private.enrichment.targets.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateEnrichmentTargets<
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
                Awaited<ReturnType<typeof client.platform.private.enrichment.targets.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.private.enrichment.targets.$post>,
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
  const mutationDefaults = getPostPlatformPrivateEnrichmentTargetsMutationOptions<
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

export function getPlatformPrivateQuicksearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.quicksearch.$get>>,
) {
  return ['platform', '/platform/private/quicksearch', toValue(args)] as const
}

export function getPlatformPrivateQuicksearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.quicksearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateQuicksearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.quicksearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateQuicksearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.quicksearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateQuicksearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.quicksearch.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateQuicksearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateQuicksearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.quicksearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlatformPrivateRelationMutationKey() {
  return ['platform', '/platform/private/relation', 'POST'] as const
}

export function getPostPlatformPrivateRelationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.relation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.relation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateRelationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.private.relation.$post>) {
      return parseResponse(client.platform.private.relation.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateRelation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.private.relation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.private.relation.$post>,
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
  const mutationDefaults = getPostPlatformPrivateRelationMutationOptions<TError, TOnMutateResult>(
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

export function getPlatformPrivateRelationDiseaseDiseaseQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
  >,
) {
  return ['platform', '/platform/private/relation/disease/:disease', toValue(args)] as const
}

export function getPlatformPrivateRelationDiseaseDiseaseQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateRelationDiseaseDiseaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.relation.disease[':disease'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateRelationDiseaseDisease<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
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
                  ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateRelationDiseaseDiseaseQueryKey>
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
          Awaited<ReturnType<(typeof client.platform.private.relation.disease)[':disease']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateRelationDiseaseDiseaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateRelationDiseaseDiseaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.relation.disease[':disease'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPrivateRelationTargetTargetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>
  >,
) {
  return ['platform', '/platform/private/relation/target/:target', toValue(args)] as const
}

export function getPlatformPrivateRelationTargetTargetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateRelationTargetTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.relation.target[':target'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateRelationTargetTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.relation.target)[':target']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>
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
                  ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateRelationTargetTargetQueryKey>
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
          Awaited<ReturnType<(typeof client.platform.private.relation.target)[':target']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateRelationTargetTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateRelationTargetTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.relation.target[':target'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlatformPrivateTargetMutationKey() {
  return ['platform', '/platform/private/target', 'POST'] as const
}

export function getPostPlatformPrivateTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.target.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.target.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateTargetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.private.target.$post>) {
      return parseResponse(client.platform.private.target.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platform.private.target.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.platform.private.target.$post>,
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
  const mutationDefaults = getPostPlatformPrivateTargetMutationOptions<TError, TOnMutateResult>(
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

export function getPlatformPrivateTargetExpressionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.target.expression.$get>>,
) {
  return ['platform', '/platform/private/target/expression', toValue(args)] as const
}

export function getPlatformPrivateTargetExpressionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.target.expression.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateTargetExpressionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.target.expression.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateTargetExpression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.private.target.expression.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateTargetExpressionQueryKey>
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
          Awaited<ReturnType<typeof client.platform.private.target.expression.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateTargetExpressionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateTargetExpressionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.target.expression.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlatformPrivateTargetExpressionMutationKey() {
  return ['platform', '/platform/private/target/expression', 'POST'] as const
}

export function getPostPlatformPrivateTargetExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.private.target.expression.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.private.target.expression.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPrivateTargetExpressionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.platform.private.target.expression.$post>,
    ) {
      return parseResponse(client.platform.private.target.expression.$post(args, options))
    },
  })
}

export function usePostPlatformPrivateTargetExpression<
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
                Awaited<ReturnType<typeof client.platform.private.target.expression.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.private.target.expression.$post>,
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
  const mutationDefaults = getPostPlatformPrivateTargetExpressionMutationOptions<
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

export function getPlatformPrivateTargetTargetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.target)[':target']['$get']>
  >,
) {
  return ['platform', '/platform/private/target/:target', toValue(args)] as const
}

export function getPlatformPrivateTargetTargetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.target)[':target']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPrivateTargetTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.private.target[':target'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPrivateTargetTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform.private.target)[':target']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformPrivateTargetTargetQueryKey>
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
          Awaited<ReturnType<(typeof client.platform.private.target)[':target']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPrivateTargetTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPrivateTargetTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.private.target[':target'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPublicAssociationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.association.$get>>,
) {
  return ['platform', '/platform/public/association', toValue(args)] as const
}

export function getPlatformPublicAssociationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.association.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPublicAssociationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.association.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicAssociation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.association.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.association.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.association.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPublicAssociationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.association.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicAssociationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPublicAssociationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.association.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPublicAssociationFilterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.association.filter.$get>>,
) {
  return ['platform', '/platform/public/association/filter', toValue(args)] as const
}

export function getPlatformPublicAssociationFilterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.association.filter.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPublicAssociationFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.association.filter.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicAssociationFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.association.filter.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPublicAssociationFilterQueryKey>
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
          Awaited<ReturnType<typeof client.platform.public.association.filter.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicAssociationFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPublicAssociationFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.association.filter.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlatformPublicAssociationFilterMutationKey() {
  return ['platform', '/platform/public/association/filter', 'POST'] as const
}

export function getPostPlatformPublicAssociationFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.association.filter.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.public.association.filter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPublicAssociationFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.platform.public.association.filter.$post>,
    ) {
      return parseResponse(client.platform.public.association.filter.$post(args, options))
    },
  })
}

export function usePostPlatformPublicAssociationFilter<
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
                Awaited<ReturnType<typeof client.platform.public.association.filter.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.public.association.filter.$post>,
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
  const mutationDefaults = getPostPlatformPublicAssociationFilterMutationOptions<
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

export function getPlatformPublicEvidenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.evidence.$get>>,
) {
  return ['platform', '/platform/public/evidence', toValue(args)] as const
}

export function getPlatformPublicEvidenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.evidence.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPublicEvidenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.evidence.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicEvidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.evidence.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
            >
          >,
          ReturnType<typeof getPlatformPublicEvidenceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicEvidenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPublicEvidenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.evidence.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlatformPublicEvidenceMutationKey() {
  return ['platform', '/platform/public/evidence', 'POST'] as const
}

export function getPostPlatformPublicEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.platform.public.evidence.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPublicEvidenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.public.evidence.$post>) {
      return parseResponse(client.platform.public.evidence.$post(args, options))
    },
  })
}

export function usePostPlatformPublicEvidence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.evidence.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.public.evidence.$post>,
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
  const mutationDefaults = getPostPlatformPublicEvidenceMutationOptions<TError, TOnMutateResult>(
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

export function getPlatformPublicEvidenceFilterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.evidence.filter.$get>>,
) {
  return ['platform', '/platform/public/evidence/filter', toValue(args)] as const
}

export function getPlatformPublicEvidenceFilterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.evidence.filter.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPublicEvidenceFilterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.evidence.filter.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicEvidenceFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.evidence.filter.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPublicEvidenceFilterQueryKey>
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
          Awaited<ReturnType<typeof client.platform.public.evidence.filter.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicEvidenceFilterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPublicEvidenceFilterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.evidence.filter.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlatformPublicEvidenceFilterMutationKey() {
  return ['platform', '/platform/public/evidence/filter', 'POST'] as const
}

export function getPostPlatformPublicEvidenceFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.platform.public.evidence.filter.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.platform.public.evidence.filter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlatformPublicEvidenceFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.platform.public.evidence.filter.$post>) {
      return parseResponse(client.platform.public.evidence.filter.$post(args, options))
    },
  })
}

export function usePostPlatformPublicEvidenceFilter<
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
                Awaited<ReturnType<typeof client.platform.public.evidence.filter.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.platform.public.evidence.filter.$post>,
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
  const mutationDefaults = getPostPlatformPublicEvidenceFilterMutationOptions<
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

export function getPlatformPublicSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.search.$get>>,
) {
  return ['platform', '/platform/public/search', toValue(args)] as const
}

export function getPlatformPublicSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPublicSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.public.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
            >
          >,
          ReturnType<typeof getPlatformPublicSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPublicSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPublicUtilsMetricsQueryKey() {
  return ['platform', '/platform/public/utils/metrics'] as const
}

export function getPlatformPublicUtilsMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformPublicUtilsMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.utils.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicUtilsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPublicUtilsMetricsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformPublicUtilsMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.utils.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPublicUtilsPingQueryKey() {
  return ['platform', '/platform/public/utils/ping'] as const
}

export function getPlatformPublicUtilsPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformPublicUtilsPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.utils.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicUtilsPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPublicUtilsPingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.ping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformPublicUtilsPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.utils.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPublicUtilsStatsQueryKey() {
  return ['platform', '/platform/public/utils/stats'] as const
}

export function getPlatformPublicUtilsStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformPublicUtilsStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.utils.stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicUtilsStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPublicUtilsStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformPublicUtilsStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.utils.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPublicUtilsTherapeuticareasQueryKey() {
  return ['platform', '/platform/public/utils/therapeuticareas'] as const
}

export function getPlatformPublicUtilsTherapeuticareasQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformPublicUtilsTherapeuticareasQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.utils.therapeuticareas.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicUtilsTherapeuticareas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPublicUtilsTherapeuticareasQueryKey>
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
          Awaited<ReturnType<typeof client.platform.public.utils.therapeuticareas.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsTherapeuticareasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformPublicUtilsTherapeuticareasQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.utils.therapeuticareas.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPublicUtilsVersionQueryKey() {
  return ['platform', '/platform/public/utils/version'] as const
}

export function getPlatformPublicUtilsVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformPublicUtilsVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.public.utils.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPublicUtilsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>
              >
            >
          >,
          ReturnType<typeof getPlatformPublicUtilsVersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.platform.public.utils.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPublicUtilsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformPublicUtilsVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.public.utils.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformSwaggerQueryKey() {
  return ['platform', '/platform/swagger'] as const
}

export function getPlatformSwaggerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPlatformSwaggerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.swagger.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlatformSwagger<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>
            >
          >,
          ReturnType<typeof getPlatformSwaggerQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.swagger.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformSwaggerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPlatformSwaggerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.swagger.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
