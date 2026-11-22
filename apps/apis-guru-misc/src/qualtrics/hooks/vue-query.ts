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
      Extract<
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

export function getDistributionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.distributions.$get>>,
) {
  return ['distributions', '/distributions', toValue(args)] as const
}

export function getDistributionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.distributions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistributionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.distributions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDistributions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.distributions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
          >,
          ReturnType<typeof getDistributionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistributionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.distributions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.distributions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.distributions.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>
  >,
) {
  return ['distributions', '/distributions/:DistributionId/links', toValue(args)] as const
}

export function getDistributionsDistributionIdLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDistributionsDistributionIdLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.distributions[':DistributionId'].links.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.distributions)[':DistributionId']['links']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>
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
                  ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDistributionsDistributionIdLinksQueryKey>
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
          Awaited<ReturnType<(typeof client.distributions)[':DistributionId']['links']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDistributionsDistributionIdLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDistributionsDistributionIdLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.distributions[':DistributionId'].links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.eventsubscriptions.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.eventsubscriptions.index.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>
  >,
) {
  return ['eventsubscriptions', '/eventsubscriptions/:SubscriptionId', toValue(args)] as const
}

export function getEventsubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventsubscriptions[':SubscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsubscriptionsSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eventsubscriptions)[':SubscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eventsubscriptions[':SubscriptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSurveyDefinitionsSurveyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>
  >,
) {
  return ['survey-definitions', '/survey-definitions/:SurveyId', toValue(args)] as const
}

export function getSurveyDefinitionsSurveyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSurveyDefinitionsSurveyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['survey-definitions'][':SurveyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['survey-definitions'][':SurveyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSurveyDefinitionsSurveyIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['survey-definitions'][':SurveyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSurveyDefinitionsSurveyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSurveyDefinitionsSurveyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['survey-definitions'][':SurveyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
