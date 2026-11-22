import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.$get>>,
) {
  return ['activities', '/activities', toValue(args)] as const
}

export function getActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>
          >,
          ReturnType<typeof getActivitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActivitiesActivityIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.activities)[':activityId']['$get']>>,
) {
  return ['activities', '/activities/:activityId', toValue(args)] as const
}

export function getActivitiesActivityIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.activities)[':activityId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivitiesActivityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activities[':activityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActivitiesActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.activities)[':activityId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.activities)[':activityId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.activities)[':activityId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.activities)[':activityId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActivitiesActivityIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.activities)[':activityId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActivitiesActivityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivitiesActivityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activities[':activityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActivitiesActivityIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.activities)[':activityId']['comments']['$get']>
  >,
) {
  return ['activities', '/activities/:activityId/comments', toValue(args)] as const
}

export function getActivitiesActivityIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.activities)[':activityId']['comments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivitiesActivityIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activities[':activityId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActivitiesActivityIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.activities)[':activityId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.activities)[':activityId']['comments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.activities)[':activityId']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.activities)[':activityId']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActivitiesActivityIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.activities)[':activityId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActivitiesActivityIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivitiesActivityIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activities[':activityId'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActivitiesActivityIdPeopleCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.activities)[':activityId']['people'][':collection']['$get']>
  >,
) {
  return ['activities', '/activities/:activityId/people/:collection', toValue(args)] as const
}

export function getActivitiesActivityIdPeopleCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.activities)[':activityId']['people'][':collection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivitiesActivityIdPeopleCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activities[':activityId'].people[':collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActivitiesActivityIdPeopleCollection<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.activities)[':activityId']['people'][':collection']['$get']>
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
                    (typeof client.activities)[':activityId']['people'][':collection']['$get']
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
                    (typeof client.activities)[':activityId']['people'][':collection']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActivitiesActivityIdPeopleCollectionQueryKey>
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
            ReturnType<(typeof client.activities)[':activityId']['people'][':collection']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActivitiesActivityIdPeopleCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivitiesActivityIdPeopleCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activities[':activityId'].people[':collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':commentId']['$get']>>,
) {
  return ['comments', '/comments/:commentId', toValue(args)] as const
}

export function getCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':commentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments[':commentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':commentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':commentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':commentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':commentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommentsCommentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':commentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments[':commentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
) {
  return ['people', '/people', toValue(args)] as const
}

export function getPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          ReturnType<typeof getPeopleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':userId']['$get']>>,
) {
  return ['people', '/people/:userId', toValue(args)] as const
}

export function getPeopleUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getPeopleUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleUserIdActivitiesCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':userId']['activities'][':collection']['$get']>
  >,
) {
  return ['people', '/people/:userId/activities/:collection', toValue(args)] as const
}

export function getPeopleUserIdActivitiesCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':userId']['activities'][':collection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleUserIdActivitiesCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':userId'].activities[':collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleUserIdActivitiesCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':userId']['activities'][':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':userId']['activities'][':collection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.people)[':userId']['activities'][':collection']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPeopleUserIdActivitiesCollectionQueryKey>
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
            ReturnType<(typeof client.people)[':userId']['activities'][':collection']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUserIdActivitiesCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleUserIdActivitiesCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':userId'].activities[':collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleUserIdPeopleCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':userId']['people'][':collection']['$get']>
  >,
) {
  return ['people', '/people/:userId/people/:collection', toValue(args)] as const
}

export function getPeopleUserIdPeopleCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':userId']['people'][':collection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleUserIdPeopleCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':userId'].people[':collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleUserIdPeopleCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':userId']['people'][':collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':userId']['people'][':collection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.people)[':userId']['people'][':collection']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPeopleUserIdPeopleCollectionQueryKey>
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
          Awaited<ReturnType<(typeof client.people)[':userId']['people'][':collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUserIdPeopleCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleUserIdPeopleCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':userId'].people[':collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
