import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSchedulerKey() {
  return ['scheduler'] as const
}

export function getPostScheduler202609MeetingsCalendarKey() {
  return ['scheduler', '/scheduler/2026-09/meetings/calendar', 'POST'] as const
}

export function usePostScheduler202609MeetingsCalendar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScheduler202609MeetingsCalendarKey()
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
            (typeof client.scheduler)['2026-09']['meetings']['calendar']['$post']
          >
        },
      ) => parseResponse(client.scheduler['2026-09'].meetings.calendar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScheduler202609MeetingsMeetingLinksKey(
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>,
) {
  return ['scheduler', '/scheduler/2026-09/meetings/meeting-links', args] as const
}

export function useGetScheduler202609MeetingsMeetingLinks<TError = unknown>(
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
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
        ? getGetScheduler202609MeetingsMeetingLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduler202609MeetingsMeetingLinks<TError = unknown>(
  args: InferRequestType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
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
        ? getGetScheduler202609MeetingsMeetingLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.scheduler)['2026-09']['meetings']['meeting-links']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostScheduler202609MeetingsMeetingLinksBookKey() {
  return ['scheduler', '/scheduler/2026-09/meetings/meeting-links/book', 'POST'] as const
}

export function usePostScheduler202609MeetingsMeetingLinksBook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScheduler202609MeetingsMeetingLinksBookKey()
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
            (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['$post']
          >
        },
      ) =>
        parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].book.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugKey(
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

export function useGetScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].book['availability-page'][
            ':slug'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlug<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book']['availability-page'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].book['availability-page'][
            ':slug'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetScheduler202609MeetingsMeetingLinksBookSlugKey(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
  >,
) {
  return ['scheduler', '/scheduler/2026-09/meetings/meeting-links/book/:slug', args] as const
}

export function useGetScheduler202609MeetingsMeetingLinksBookSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetScheduler202609MeetingsMeetingLinksBookSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].book[':slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScheduler202609MeetingsMeetingLinksBookSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.scheduler)['2026-09']['meetings']['meeting-links']['book'][':slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetScheduler202609MeetingsMeetingLinksBookSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.scheduler['2026-09'].meetings['meeting-links'].book[':slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
