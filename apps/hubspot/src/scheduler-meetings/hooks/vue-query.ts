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

export function getSchedulerKey() {
  return ['scheduler'] as const
}

export function getPostScheduler202609MeetingsCalendarMutationKey() {
  return ['scheduler', '/scheduler/2026-09/meetings/calendar', 'POST'] as const
}

export function getPostScheduler202609MeetingsCalendarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScheduler202609MeetingsCalendarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']>,
    ) {
      return parseResponse(client.scheduler['2026-09'].meetings.calendar.$post(args, options))
    },
  })
}

export function usePostScheduler202609MeetingsCalendar<
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
                  ReturnType<(typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']>,
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
  const mutationDefaults = getPostScheduler202609MeetingsCalendarMutationOptions<
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

export function getScheduler202609MeetingsMeetingLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
  >,
) {
  return ['scheduler', '/scheduler/2026-09/meetings/meeting-links', toValue(args)] as const
}

export function getScheduler202609MeetingsMeetingLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduler202609MeetingsMeetingLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scheduler['2026-09'].meetings['meeting-links'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduler202609MeetingsMeetingLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
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
                    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']
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
                    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getScheduler202609MeetingsMeetingLinksQueryKey>
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
            ReturnType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduler202609MeetingsMeetingLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduler202609MeetingsMeetingLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostScheduler202609MeetingsMeetingLinksBookMutationKey() {
  return ['scheduler', '/scheduler/2026-09/meetings/meeting-links/book', 'POST'] as const
}

export function getPostScheduler202609MeetingsMeetingLinksBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostScheduler202609MeetingsMeetingLinksBookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['$post']
      >,
    ) {
      return parseResponse(
        client.scheduler['2026-09'].meetings['meeting-links'].book.$post(args, options),
      )
    },
  })
}

export function usePostScheduler202609MeetingsMeetingLinksBook<
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
                    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['$post']
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
  const mutationDefaults = getPostScheduler202609MeetingsMeetingLinksBookMutationOptions<
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

export function getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
    >
  >,
) {
  return [
    'scheduler',
    '/scheduler/2026-09/meetings/meeting-links/book/availability-page/:slug',
    toValue(args),
  ] as const
}

export function getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scheduler['2026-09'].meetings['meeting-links'].book['availability-page'][
          ':slug'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
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
                    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
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
                    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryKey>
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
              (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].book['availability-page'][
            ':slug'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getScheduler202609MeetingsMeetingLinksBookSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
    >
  >,
) {
  return [
    'scheduler',
    '/scheduler/2026-09/meetings/meeting-links/book/:slug',
    toValue(args),
  ] as const
}

export function getScheduler202609MeetingsMeetingLinksBookSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduler202609MeetingsMeetingLinksBookSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scheduler['2026-09'].meetings['meeting-links'].book[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduler202609MeetingsMeetingLinksBookSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
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
                    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
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
                    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getScheduler202609MeetingsMeetingLinksBookSlugQueryKey>
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
              (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduler202609MeetingsMeetingLinksBookSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduler202609MeetingsMeetingLinksBookSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].book[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
