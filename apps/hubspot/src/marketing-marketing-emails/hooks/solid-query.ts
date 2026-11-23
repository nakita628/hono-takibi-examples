import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getMarketingEmails202609QueryKey(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['$get']>,
) {
  return ['marketing', '/marketing/emails/2026-09', args] as const
}

export function getMarketingEmails202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingEmails202609QueryKey>
  >({
    queryKey: getMarketingEmails202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.emails['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingEmails202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.emails)['2026-09']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMarketingEmails202609QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketingEmails202609QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostMarketingEmails202609MutationKey() {
  return ['marketing', '/marketing/emails/2026-09', 'POST'] as const
}

export function getPostMarketingEmails202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.emails)['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmails202609MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.marketing.emails)['2026-09']['$post']>) {
      return parseResponse(client.marketing.emails['2026-09'].$post(args, options))
    },
  })
}

export function createPostMarketingEmails202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.emails)['2026-09']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingEmails202609MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMarketingEmails202609AbTestCreateVariationMutationKey() {
  return ['marketing', '/marketing/emails/2026-09/ab-test/create-variation', 'POST'] as const
}

export function getPostMarketingEmails202609AbTestCreateVariationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmails202609AbTestCreateVariationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.emails['2026-09']['ab-test']['create-variation'].$post(args, options),
      )
    },
  })
}

export function createPostMarketingEmails202609AbTestCreateVariation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.emails)['2026-09']['ab-test']['create-variation']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingEmails202609AbTestCreateVariationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMarketingEmails202609CloneMutationKey() {
  return ['marketing', '/marketing/emails/2026-09/clone', 'POST'] as const
}

export function getPostMarketingEmails202609CloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.emails)['2026-09']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmails202609CloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.emails)['2026-09']['clone']['$post']>,
    ) {
      return parseResponse(client.marketing.emails['2026-09'].clone.$post(args, options))
    },
  })
}

export function createPostMarketingEmails202609Clone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.emails)['2026-09']['clone']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.emails)['2026-09']['clone']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingEmails202609CloneMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingEmails202609StatisticsHistogramQueryKey(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
  >,
) {
  return ['marketing', '/marketing/emails/2026-09/statistics/histogram', args] as const
}

export function getMarketingEmails202609StatisticsHistogramQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingEmails202609StatisticsHistogramQueryKey>
  >({
    queryKey: getMarketingEmails202609StatisticsHistogramQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.emails['2026-09'].statistics.histogram.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingEmails202609StatisticsHistogram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09']['statistics']['histogram']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMarketingEmails202609StatisticsHistogramQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketingEmails202609StatisticsHistogramQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMarketingEmails202609StatisticsListQueryKey(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>,
) {
  return ['marketing', '/marketing/emails/2026-09/statistics/list', args] as const
}

export function getMarketingEmails202609StatisticsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingEmails202609StatisticsListQueryKey>
  >({
    queryKey: getMarketingEmails202609StatisticsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.emails['2026-09'].statistics.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingEmails202609StatisticsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09']['statistics']['list']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMarketingEmails202609StatisticsListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketingEmails202609StatisticsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingEmails202609EmailIdQueryKey(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId', args] as const
}

export function getMarketingEmails202609EmailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingEmails202609EmailIdQueryKey>
  >({
    queryKey: getMarketingEmails202609EmailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingEmails202609EmailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMarketingEmails202609EmailIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketingEmails202609EmailIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteMarketingEmails202609EmailIdMutationKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId', 'DELETE'] as const
}

export function getDeleteMarketingEmails202609EmailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingEmails202609EmailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>,
    ) {
      return parseResponse(client.marketing.emails['2026-09'][':emailId'].$delete(args, options))
    },
  })
}

export function createDeleteMarketingEmails202609EmailId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMarketingEmails202609EmailIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchMarketingEmails202609EmailIdMutationKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId', 'PATCH'] as const
}

export function getPatchMarketingEmails202609EmailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingEmails202609EmailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>,
    ) {
      return parseResponse(client.marketing.emails['2026-09'][':emailId'].$patch(args, options))
    },
  })
}

export function createPatchMarketingEmails202609EmailId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMarketingEmails202609EmailIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingEmails202609EmailIdAbTestGetVariationQueryKey(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
  >,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId/ab-test/get-variation', args] as const
}

export function getMarketingEmails202609EmailIdAbTestGetVariationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingEmails202609EmailIdAbTestGetVariationQueryKey>
  >({
    queryKey: getMarketingEmails202609EmailIdAbTestGetVariationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId']['ab-test']['get-variation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingEmails202609EmailIdAbTestGetVariation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09'][':emailId']['ab-test']['get-variation']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMarketingEmails202609EmailIdAbTestGetVariationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketingEmails202609EmailIdAbTestGetVariationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMarketingEmails202609EmailIdDraftQueryKey(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId/draft', args] as const
}

export function getMarketingEmails202609EmailIdDraftQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingEmails202609EmailIdDraftQueryKey>
  >({
    queryKey: getMarketingEmails202609EmailIdDraftQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].draft.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingEmails202609EmailIdDraft<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMarketingEmails202609EmailIdDraftQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketingEmails202609EmailIdDraftQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchMarketingEmails202609EmailIdDraftMutationKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId/draft', 'PATCH'] as const
}

export function getPatchMarketingEmails202609EmailIdDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMarketingEmails202609EmailIdDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']
      >,
    ) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].draft.$patch(args, options),
      )
    },
  })
}

export function createPatchMarketingEmails202609EmailIdDraft<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMarketingEmails202609EmailIdDraftMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMarketingEmails202609EmailIdDraftResetMutationKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId/draft/reset', 'POST'] as const
}

export function getPostMarketingEmails202609EmailIdDraftResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmails202609EmailIdDraftResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].draft.reset.$post(args, options),
      )
    },
  })
}

export function createPostMarketingEmails202609EmailIdDraftReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['draft']['reset']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingEmails202609EmailIdDraftResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMarketingEmails202609EmailIdPublishMutationKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId/publish', 'POST'] as const
}

export function getPostMarketingEmails202609EmailIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmails202609EmailIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].publish.$post(args, options),
      )
    },
  })
}

export function createPostMarketingEmails202609EmailIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['publish']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingEmails202609EmailIdPublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMarketingEmails202609EmailIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
  >,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId/revisions', args] as const
}

export function getMarketingEmails202609EmailIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingEmails202609EmailIdRevisionsQueryKey>
  >({
    queryKey: getMarketingEmails202609EmailIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingEmails202609EmailIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMarketingEmails202609EmailIdRevisionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketingEmails202609EmailIdRevisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMarketingEmails202609EmailIdRevisionsRevisionIdQueryKey(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
  >,
) {
  return ['marketing', '/marketing/emails/2026-09/:emailId/revisions/:revisionId', args] as const
}

export function getMarketingEmails202609EmailIdRevisionsRevisionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingEmails202609EmailIdRevisionsRevisionIdQueryKey>
  >({
    queryKey: getMarketingEmails202609EmailIdRevisionsRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMarketingEmails202609EmailIdRevisionsRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMarketingEmails202609EmailIdRevisionsRevisionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMarketingEmails202609EmailIdRevisionsRevisionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreMutationKey() {
  return [
    'marketing',
    '/marketing/emails/2026-09/:emailId/revisions/:revisionId/restore',
    'POST',
  ] as const
}

export function getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostMarketingEmails202609EmailIdRevisionsRevisionIdRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftMutationKey() {
  return [
    'marketing',
    '/marketing/emails/2026-09/:emailId/revisions/:revisionId/restore-to-draft',
    'POST',
  ] as const
}

export function getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].revisions[':revisionId'][
          'restore-to-draft'
        ].$post(args, options),
      )
    },
  })
}

export function createPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraft<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['revisions'][':revisionId']['restore-to-draft']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMarketingEmails202609EmailIdUnpublishMutationKey() {
  return ['marketing', '/marketing/emails/2026-09/:emailId/unpublish', 'POST'] as const
}

export function getPostMarketingEmails202609EmailIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmails202609EmailIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.emails['2026-09'][':emailId'].unpublish.$post(args, options),
      )
    },
  })
}

export function createPostMarketingEmails202609EmailIdUnpublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.emails)['2026-09'][':emailId']['unpublish']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingEmails202609EmailIdUnpublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
