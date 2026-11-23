import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>,
) {
  return ['scheduler', '/scheduler/2026-09/meetings/meeting-links', args] as const
}

export function getScheduler202609MeetingsMeetingLinksQueryOptions<
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
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getScheduler202609MeetingsMeetingLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scheduler['2026-09'].meetings['meeting-links'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getScheduler202609MeetingsMeetingLinksQueryKey>
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
      ...getScheduler202609MeetingsMeetingLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScheduler202609MeetingsMeetingLinks<
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
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getScheduler202609MeetingsMeetingLinksQueryKey>
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
      ...getScheduler202609MeetingsMeetingLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
  >,
) {
  return [
    'scheduler',
    '/scheduler/2026-09/meetings/meeting-links/book/availability-page/:slug',
    args,
  ] as const
}

export function getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryOptions<
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
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scheduler['2026-09'].meetings['meeting-links'].book['availability-page'][
          ':slug'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryKey>
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
      ...getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlug<
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
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getScheduler202609MeetingsMeetingLinksBookSlugQueryKey(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
  >,
) {
  return ['scheduler', '/scheduler/2026-09/meetings/meeting-links/book/:slug', args] as const
}

export function getScheduler202609MeetingsMeetingLinksBookSlugQueryOptions<
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
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getScheduler202609MeetingsMeetingLinksBookSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scheduler['2026-09'].meetings['meeting-links'].book[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getScheduler202609MeetingsMeetingLinksBookSlugQueryKey>
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
      ...getScheduler202609MeetingsMeetingLinksBookSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseScheduler202609MeetingsMeetingLinksBookSlug<
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
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getScheduler202609MeetingsMeetingLinksBookSlugQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
