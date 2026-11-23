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

export function getFeatureFlagsKey() {
  return ['feature-flags'] as const
}

export function getFeatureFlags202609AppIdFlagsAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']>
  >,
) {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/all', toValue(args)] as const
}

export function getFeatureFlags202609AppIdFlagsAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureFlags202609AppIdFlagsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeatureFlags202609AppIdFlagsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']>
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFeatureFlags202609AppIdFlagsAllQueryKey>
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
              (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFlags202609AppIdFlagsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureFlags202609AppIdFlagsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeatureFlags202609AppIdFlagsFlagNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
    >
  >,
) {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName', toValue(args)] as const
}

export function getFeatureFlags202609AppIdFlagsFlagNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureFlags202609AppIdFlagsFlagNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeatureFlags202609AppIdFlagsFlagName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFeatureFlags202609AppIdFlagsFlagNameQueryKey>
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
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFlags202609AppIdFlagsFlagNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureFlags202609AppIdFlagsFlagNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFeatureFlags202609AppIdFlagsFlagNameMutationKey() {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName', 'PUT'] as const
}

export function getPutFeatureFlags202609AppIdFlagsFlagNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutFeatureFlags202609AppIdFlagsFlagNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
      >,
    ) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$put(args, options),
      )
    },
  })
}

export function usePutFeatureFlags202609AppIdFlagsFlagName<
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$put']
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
  const mutationDefaults = getPutFeatureFlags202609AppIdFlagsFlagNameMutationOptions<
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

export function getDeleteFeatureFlags202609AppIdFlagsFlagNameMutationKey() {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName', 'DELETE'] as const
}

export function getDeleteFeatureFlags202609AppIdFlagsFlagNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFeatureFlags202609AppIdFlagsFlagNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
      >,
    ) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFeatureFlags202609AppIdFlagsFlagName<
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$delete']
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
  const mutationDefaults = getDeleteFeatureFlags202609AppIdFlagsFlagNameMutationOptions<
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

export function getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
    >
  >,
) {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals',
    toValue(args),
  ] as const
}

export function getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFeatureFlags202609AppIdFlagsFlagNamePortals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryKey>
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
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteMutationKey() {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/batch/delete',
    'POST',
  ] as const
}

export function getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.batch.delete.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDelete<
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['delete']['$post']
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
    getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteMutationOptions<
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

export function getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertMutationKey() {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/batch/upsert',
    'POST',
  ] as const
}

export function getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
      >,
    ) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.batch.upsert.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsert<
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['batch']['upsert']['$post']
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
    getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertMutationOptions<
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

export function getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
    >
  >,
) {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/:portalId',
    toValue(args),
  ] as const
}

export function getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryKey>
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
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationKey() {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/:portalId',
    'PUT',
  ] as const
}

export function getPutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
      >,
    ) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$put']
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
  const mutationDefaults = getPutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationOptions<
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

export function getDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationKey() {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/:portalId',
    'DELETE',
  ] as const
}

export function getDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
      >,
    ) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[
          ':portalId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
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
                    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$delete']
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
    getDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationOptions<
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
