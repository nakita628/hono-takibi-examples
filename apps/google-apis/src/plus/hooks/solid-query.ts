import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActivitiesKey() {
  return ['activities'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getPeopleKey() {
  return ['people'] as const
}

export function getActivitiesQueryKey(args: InferRequestType<typeof client.activities.$get>) {
  return ['activities', '/activities', args] as const
}

export function getActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.activities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActivitiesQueryKey>
  >({
    queryKey: getActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.activities.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getActivitiesQueryKey>
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
    return { ...getActivitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getActivitiesActivityIdQueryKey(
  args: InferRequestType<(typeof client.activities)[':activityId']['$get']>,
) {
  return ['activities', '/activities/:activityId', args] as const
}

export function getActivitiesActivityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.activities)[':activityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.activities)[':activityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.activities)[':activityId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActivitiesActivityIdQueryKey>
  >({
    queryKey: getActivitiesActivityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activities[':activityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActivitiesActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.activities)[':activityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.activities)[':activityId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.activities)[':activityId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActivitiesActivityIdQueryKey>
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
      ...getActivitiesActivityIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActivitiesActivityIdCommentsQueryKey(
  args: InferRequestType<(typeof client.activities)[':activityId']['comments']['$get']>,
) {
  return ['activities', '/activities/:activityId/comments', args] as const
}

export function getActivitiesActivityIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.activities)[':activityId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.activities)[':activityId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.activities)[':activityId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActivitiesActivityIdCommentsQueryKey>
  >({
    queryKey: getActivitiesActivityIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activities[':activityId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActivitiesActivityIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.activities)[':activityId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.activities)[':activityId']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.activities)[':activityId']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActivitiesActivityIdCommentsQueryKey>
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
      ...getActivitiesActivityIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getActivitiesActivityIdPeopleCollectionQueryKey(
  args: InferRequestType<
    (typeof client.activities)[':activityId']['people'][':collection']['$get']
  >,
) {
  return ['activities', '/activities/:activityId/people/:collection', args] as const
}

export function getActivitiesActivityIdPeopleCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.activities)[':activityId']['people'][':collection']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.activities)[':activityId']['people'][':collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.activities)[':activityId']['people'][':collection']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActivitiesActivityIdPeopleCollectionQueryKey>
  >({
    queryKey: getActivitiesActivityIdPeopleCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activities[':activityId'].people[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActivitiesActivityIdPeopleCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.activities)[':activityId']['people'][':collection']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.activities)[':activityId']['people'][':collection']['$get']
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
                    (typeof client.activities)[':activityId']['people'][':collection']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getActivitiesActivityIdPeopleCollectionQueryKey>
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
      ...getActivitiesActivityIdPeopleCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCommentsCommentIdQueryKey(
  args: InferRequestType<(typeof client.comments)[':commentId']['$get']>,
) {
  return ['comments', '/comments/:commentId', args] as const
}

export function getCommentsCommentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':commentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':commentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':commentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsCommentIdQueryKey>
  >({
    queryKey: getCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':commentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':commentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments)[':commentId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':commentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommentsCommentIdQueryKey>
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
    return { ...getCommentsCommentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPeopleQueryKey(args: InferRequestType<typeof client.people.$get>) {
  return ['people', '/people', args] as const
}

export function getPeopleQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.people.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >({
    queryKey: getPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.people.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPeopleQueryKey>
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
    return { ...getPeopleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPeopleUserIdQueryKey(
  args: InferRequestType<(typeof client.people)[':userId']['$get']>,
) {
  return ['people', '/people/:userId', args] as const
}

export function getPeopleUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUserIdQueryKey>
  >({
    queryKey: getPeopleUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPeopleUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPeopleUserIdQueryKey>
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
    return { ...getPeopleUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPeopleUserIdActivitiesCollectionQueryKey(
  args: InferRequestType<(typeof client.people)[':userId']['activities'][':collection']['$get']>,
) {
  return ['people', '/people/:userId/activities/:collection', args] as const
}

export function getPeopleUserIdActivitiesCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':userId']['activities'][':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':userId']['activities'][':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.people)[':userId']['activities'][':collection']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUserIdActivitiesCollectionQueryKey>
  >({
    queryKey: getPeopleUserIdActivitiesCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':userId'].activities[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPeopleUserIdActivitiesCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':userId']['activities'][':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.people)[':userId']['activities'][':collection']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.people)[':userId']['activities'][':collection']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPeopleUserIdActivitiesCollectionQueryKey>
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
      ...getPeopleUserIdActivitiesCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPeopleUserIdPeopleCollectionQueryKey(
  args: InferRequestType<(typeof client.people)[':userId']['people'][':collection']['$get']>,
) {
  return ['people', '/people/:userId/people/:collection', args] as const
}

export function getPeopleUserIdPeopleCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':userId']['people'][':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':userId']['people'][':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.people)[':userId']['people'][':collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUserIdPeopleCollectionQueryKey>
  >({
    queryKey: getPeopleUserIdPeopleCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':userId'].people[':collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPeopleUserIdPeopleCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':userId']['people'][':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':userId']['people'][':collection']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.people)[':userId']['people'][':collection']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPeopleUserIdPeopleCollectionQueryKey>
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
      ...getPeopleUserIdPeopleCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
