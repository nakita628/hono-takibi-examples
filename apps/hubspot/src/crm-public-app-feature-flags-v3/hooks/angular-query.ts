import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFeatureFlagsKey() {
  return ['feature-flags'] as const
}

export function getFeatureFlags202609AppIdFlagsAllQueryKey(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
  >,
) {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/all', args] as const
}

export function getFeatureFlags202609AppIdFlagsAllQueryOptions<
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
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFeatureFlags202609AppIdFlagsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFeatureFlags202609AppIdFlagsAll<
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
  args: () => InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags']['all']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFeatureFlags202609AppIdFlagsAllQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFeatureFlags202609AppIdFlagsFlagNameQueryKey(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
  >,
) {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName', args] as const
}

export function getFeatureFlags202609AppIdFlagsFlagNameQueryOptions<
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
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFeatureFlags202609AppIdFlagsFlagNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFeatureFlags202609AppIdFlagsFlagName<
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
  args: () => InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFeatureFlags202609AppIdFlagsFlagNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutFeatureFlags202609AppIdFlagsFlagName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFeatureFlags202609AppIdFlagsFlagNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFeatureFlags202609AppIdFlagsFlagName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFeatureFlags202609AppIdFlagsFlagNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryKey(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
  >,
) {
  return ['feature-flags', '/feature-flags/2026-09/:appId/flags/:flagName/portals', args] as const
}

export function getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFeatureFlags202609AppIdFlagsFlagNamePortals<
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
  args: () => InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFeatureFlags202609AppIdFlagsFlagNamePortalsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchDeleteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostFeatureFlags202609AppIdFlagsFlagNamePortalsBatchUpsertMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryKey(
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
  >,
) {
  return [
    'feature-flags',
    '/feature-flags/2026-09/:appId/flags/:flagName/portals/:portalId',
    args,
  ] as const
}

export function getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['feature-flags']['2026-09'][':appId'].flags[':flagName'].portals[':portalId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
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
  args: () => InferRequestType<
    (typeof client)['feature-flags']['2026-09'][':appId']['flags'][':flagName']['portals'][':portalId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
