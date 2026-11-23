import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDirectoriesKey() {
  return ['directories'] as const
}

export function getDistributionsKey() {
  return ['distributions'] as const
}

export function getEventsubscriptionsKey() {
  return ['eventsubscriptions'] as const
}

export function getSurveyDefinitionsKey() {
  return ['survey-definitions'] as const
}

export function getPostDirectoriesDirectoryIdMailinglistsMailingListIdContactsMutationKey() {
  return [
    'directories',
    '/directories/:DirectoryId/mailinglists/:MailingListId/contacts',
    'POST',
  ] as const
}

export function getPostDirectoriesDirectoryIdMailinglistsMailingListIdContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDirectoriesDirectoryIdMailinglistsMailingListIdContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
      >,
    ) {
      return parseResponse(
        client.directories[':DirectoryId'].mailinglists[':MailingListId'].contacts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDirectoriesDirectoryIdMailinglistsMailingListIdContacts<
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
                  (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.directories)[':DirectoryId']['mailinglists'][':MailingListId']['contacts']['$post']
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
    getPostDirectoriesDirectoryIdMailinglistsMailingListIdContactsMutationOptions<
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

export function getDistributionsQueryKey(args: InferRequestType<typeof client.distributions.$get>) {
  return ['distributions', '/distributions', args] as const
}

export function getDistributionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.distributions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsQueryKey>
  >({
    queryKey: getDistributionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.distributions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.distributions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDistributionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.distributions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDistributionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDistributionsMutationKey() {
  return ['distributions', '/distributions', 'POST'] as const
}

export function getPostDistributionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.distributions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDistributionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.distributions.$post>) {
      return parseResponse(client.distributions.$post(args, options))
    },
  })
}

export function usePostDistributions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.distributions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDistributionsMutationOptions<TError, TOnMutateResult>(
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

export function getDistributionsDistributionIdLinksQueryKey(
  args: InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>,
) {
  return ['distributions', '/distributions/:DistributionId/links', args] as const
}

export function getDistributionsDistributionIdLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsDistributionIdLinksQueryKey>
  >({
    queryKey: getDistributionsDistributionIdLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.distributions[':DistributionId'].links.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDistributionsDistributionIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsDistributionIdLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDistributionsDistributionIdLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDistributionsDistributionIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDistributionsDistributionIdLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDistributionsDistributionIdLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEventsubscriptionsIndexMutationKey() {
  return ['eventsubscriptions', '/eventsubscriptions/', 'POST'] as const
}

export function getPostEventsubscriptionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsubscriptions.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eventsubscriptions.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsubscriptionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventsubscriptions.index.$post>) {
      return parseResponse(client.eventsubscriptions.index.$post(args, options))
    },
  })
}

export function usePostEventsubscriptionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.eventsubscriptions.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.eventsubscriptions.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsubscriptionsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteEventsubscriptionsIndexMutationKey() {
  return ['eventsubscriptions', '/eventsubscriptions/', 'DELETE'] as const
}

export function getDeleteEventsubscriptionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.eventsubscriptions.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.eventsubscriptions.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsubscriptionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.eventsubscriptions.index.$delete>) {
      return parseResponse(client.eventsubscriptions.index.$delete(args, options))
    },
  })
}

export function useDeleteEventsubscriptionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.eventsubscriptions.index.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.eventsubscriptions.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEventsubscriptionsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getEventsubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>,
) {
  return ['eventsubscriptions', '/eventsubscriptions/:SubscriptionId', args] as const
}

export function getEventsubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getEventsubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventsubscriptions[':SubscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventsubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsubscriptionsSubscriptionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEventsubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventsubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsubscriptionsSubscriptionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEventsubscriptionsSubscriptionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSurveyDefinitionsSurveyIdQueryKey(
  args: InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>,
) {
  return ['survey-definitions', '/survey-definitions/:SurveyId', args] as const
}

export function getSurveyDefinitionsSurveyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSurveyDefinitionsSurveyIdQueryKey>
  >({
    queryKey: getSurveyDefinitionsSurveyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['survey-definitions'][':SurveyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSurveyDefinitionsSurveyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSurveyDefinitionsSurveyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSurveyDefinitionsSurveyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSurveyDefinitionsSurveyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSurveyDefinitionsSurveyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSurveyDefinitionsSurveyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
