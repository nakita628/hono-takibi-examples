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

export function getActuatorKey() {
  return ['actuator'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getActuatorInfoQueryKey() {
  return ['actuator', '/actuator/info'] as const
}

export function getActuatorInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getActuatorInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actuator.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useActuatorInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
          >,
          ReturnType<typeof getActuatorInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActuatorInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getActuatorInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.actuator.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLogoutQueryKey() {
  return ['api', '/api/logout'] as const
}

export function getApiLogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiLogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>
          >,
          ReturnType<typeof getApiLogoutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiLogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLogoutMutationKey() {
  return ['api', '/api/logout', 'POST'] as const
}

export function getPostApiLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.logout.$post(undefined, options))
    },
  })
}

export function usePostApiLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostApiLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AgeRatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>>,
) {
  return ['api', '/api/v1/age-ratings', toValue(args)] as const
}

export function getApiV1AgeRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AgeRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['age-ratings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AgeRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AgeRatingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AgeRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AgeRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['age-ratings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AnnouncementsQueryKey() {
  return ['api', '/api/v1/announcements'] as const
}

export function getApiV1AnnouncementsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AnnouncementsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.announcements.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Announcements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AnnouncementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnouncementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AnnouncementsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.announcements.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1AnnouncementsMutationKey() {
  return ['api', '/api/v1/announcements', 'PUT'] as const
}

export function getPutApiV1AnnouncementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.announcements.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AnnouncementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.announcements.$put>) {
      return parseResponse(client.api.v1.announcements.$put(args, options))
    },
  })
}

export function usePutApiV1Announcements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.announcements.$put>,
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
  const mutationDefaults = getPutApiV1AnnouncementsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AuthorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.authors.$get>>,
) {
  return ['api', '/api/v1/authors', toValue(args)] as const
}

export function getApiV1AuthorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.authors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AuthorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.authors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Authors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.authors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
          >,
          ReturnType<typeof getApiV1AuthorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuthorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AuthorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.authors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AuthorsNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.authors.names.$get>>,
) {
  return ['api', '/api/v1/authors/names', toValue(args)] as const
}

export function getApiV1AuthorsNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.authors.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AuthorsNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.authors.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AuthorsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.authors.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AuthorsNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuthorsNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AuthorsNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.authors.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AuthorsRolesQueryKey() {
  return ['api', '/api/v1/authors/roles'] as const
}

export function getApiV1AuthorsRolesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AuthorsRolesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.authors.roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AuthorsRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AuthorsRolesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuthorsRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AuthorsRolesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.authors.roles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.$get>>,
) {
  return ['api', '/api/v1/books', toValue(args)] as const
}

export function getApiV1BooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Books<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
          >,
          ReturnType<typeof getApiV1BooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksDuplicatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.duplicates.$get>>,
) {
  return ['api', '/api/v1/books/duplicates', toValue(args)] as const
}

export function getApiV1BooksDuplicatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.duplicates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksDuplicatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books.duplicates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksDuplicates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.duplicates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BooksDuplicatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksDuplicatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksDuplicatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books.duplicates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BooksImportMutationKey() {
  return ['api', '/api/v1/books/import', 'POST'] as const
}

export function getPostApiV1BooksImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.books.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BooksImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.books.import.$post>) {
      return parseResponse(client.api.v1.books.import.$post(args, options))
    },
  })
}

export function usePostApiV1BooksImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.books.import.$post>,
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
  const mutationDefaults = getPostApiV1BooksImportMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BooksLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.latest.$get>>,
) {
  return ['api', '/api/v1/books/latest', toValue(args)] as const
}

export function getApiV1BooksLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BooksLatestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BooksListMutationKey() {
  return ['api', '/api/v1/books/list', 'POST'] as const
}

export function getPostApiV1BooksListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.books.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BooksListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.books.list.$post>) {
      return parseResponse(client.api.v1.books.list.$post(args, options))
    },
  })
}

export function usePostApiV1BooksList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.books.list.$post>,
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
  const mutationDefaults = getPostApiV1BooksListMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1BooksMetadataMutationKey() {
  return ['api', '/api/v1/books/metadata', 'PATCH'] as const
}

export function getPatchApiV1BooksMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.metadata.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.books.metadata.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1BooksMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.books.metadata.$patch>) {
      return parseResponse(client.api.v1.books.metadata.$patch(args, options))
    },
  })
}

export function usePatchApiV1BooksMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.books.metadata.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.books.metadata.$patch>,
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
  const mutationDefaults = getPatchApiV1BooksMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BooksOndeckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.ondeck.$get>>,
) {
  return ['api', '/api/v1/books/ondeck', toValue(args)] as const
}

export function getApiV1BooksOndeckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.ondeck.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksOndeckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books.ondeck.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksOndeck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.books.ondeck.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BooksOndeckQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksOndeckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksOndeckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books.ondeck.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1BooksThumbnailsMutationKey() {
  return ['api', '/api/v1/books/thumbnails', 'PUT'] as const
}

export function getPutApiV1BooksThumbnailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.thumbnails.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.books.thumbnails.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BooksThumbnailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.books.thumbnails.$put>) {
      return parseResponse(client.api.v1.books.thumbnails.$put(args, options))
    },
  })
}

export function usePutApiV1BooksThumbnails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.thumbnails.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.books.thumbnails.$put>,
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
  const mutationDefaults = getPutApiV1BooksThumbnailsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BooksBookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>>,
) {
  return ['api', '/api/v1/books/:bookId', toValue(args)] as const
}

export function getApiV1BooksBookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BooksBookIdAnalyzeMutationKey() {
  return ['api', '/api/v1/books/:bookId/analyze', 'POST'] as const
}

export function getPostApiV1BooksBookIdAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BooksBookIdAnalyzeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']>,
    ) {
      return parseResponse(client.api.v1.books[':bookId'].analyze.$post(args, options))
    },
  })
}

export function usePostApiV1BooksBookIdAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']>,
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
  const mutationDefaults = getPostApiV1BooksBookIdAnalyzeMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BooksBookIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>,
) {
  return ['api', '/api/v1/books/:bookId/file', toValue(args)] as const
}

export function getApiV1BooksBookIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdFileQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1BooksBookIdFileMutationKey() {
  return ['api', '/api/v1/books/:bookId/file', 'DELETE'] as const
}

export function getDeleteApiV1BooksBookIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BooksBookIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$delete']>,
    ) {
      return parseResponse(client.api.v1.books[':bookId'].file.$delete(args, options))
    },
  })
}

export function useDeleteApiV1BooksBookIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1BooksBookIdFileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BooksBookIdFileStarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/file/*', toValue(args)] as const
}

export function getApiV1BooksBookIdFileStarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdFileStarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].file['*'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdFileStar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdFileStarQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdFileStarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdFileStarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].file['*'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdManifestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/manifest', toValue(args)] as const
}

export function getApiV1BooksBookIdManifestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdManifestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].manifest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdManifest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdManifestQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdManifestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdManifestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].manifest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdManifestDivinaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/manifest/divina', toValue(args)] as const
}

export function getApiV1BooksBookIdManifestDivinaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdManifestDivinaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].manifest.divina.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdManifestDivina<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
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
                  ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdManifestDivinaQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdManifestDivinaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdManifestDivinaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].manifest.divina.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdManifestEpubQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/manifest/epub', toValue(args)] as const
}

export function getApiV1BooksBookIdManifestEpubQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdManifestEpubQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].manifest.epub.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdManifestEpub<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>
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
                  ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdManifestEpubQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdManifestEpubQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdManifestEpubQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].manifest.epub.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdManifestPdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/manifest/pdf', toValue(args)] as const
}

export function getApiV1BooksBookIdManifestPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdManifestPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].manifest.pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdManifestPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>
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
                  ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdManifestPdfQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdManifestPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdManifestPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].manifest.pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV1BooksBookIdMetadataMutationKey() {
  return ['api', '/api/v1/books/:bookId/metadata', 'PATCH'] as const
}

export function getPatchApiV1BooksBookIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1BooksBookIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']>,
    ) {
      return parseResponse(client.api.v1.books[':bookId'].metadata.$patch(args, options))
    },
  })
}

export function usePatchApiV1BooksBookIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']>,
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
  const mutationDefaults = getPatchApiV1BooksBookIdMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1BooksBookIdMetadataRefreshMutationKey() {
  return ['api', '/api/v1/books/:bookId/metadata/refresh', 'POST'] as const
}

export function getPostApiV1BooksBookIdMetadataRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BooksBookIdMetadataRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.books[':bookId'].metadata.refresh.$post(args, options))
    },
  })
}

export function usePostApiV1BooksBookIdMetadataRefresh<
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
                    (typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']>,
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
  const mutationDefaults = getPostApiV1BooksBookIdMetadataRefreshMutationOptions<
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

export function getApiV1BooksBookIdNextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>,
) {
  return ['api', '/api/v1/books/:bookId/next', toValue(args)] as const
}

export function getApiV1BooksBookIdNextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdNextQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdPagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/pages', toValue(args)] as const
}

export function getApiV1BooksBookIdPagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdPagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdPagesPageNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber', keyArgs] as const
}

export function getApiV1BooksBookIdPagesPageNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdPagesPageNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].pages[':pageNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdPagesPageNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>
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
                    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']
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
                    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdPagesPageNumberQueryKey>
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
            ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdPagesPageNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdPagesPageNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].pages[':pageNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdPagesPageNumberRawQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber/raw', toValue(args)] as const
}

export function getApiV1BooksBookIdPagesPageNumberRawQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdPagesPageNumberRawQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].pages[':pageNumber'].raw.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdPagesPageNumberRaw<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']>
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
                    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
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
                    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdPagesPageNumberRawQueryKey>
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
              (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdPagesPageNumberRawQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdPagesPageNumberRawQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].pages[':pageNumber'].raw.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdPagesPageNumberThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
    >
  >,
) {
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber/thumbnail', toValue(args)] as const
}

export function getApiV1BooksBookIdPagesPageNumberThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdPagesPageNumberThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].pages[':pageNumber'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdPagesPageNumberThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
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
                    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
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
                    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdPagesPageNumberThumbnailQueryKey>
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
              (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdPagesPageNumberThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdPagesPageNumberThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].pages[':pageNumber'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdPositionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/positions', toValue(args)] as const
}

export function getApiV1BooksBookIdPositionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdPositionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdPreviousQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/previous', toValue(args)] as const
}

export function getApiV1BooksBookIdPreviousQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdPreviousQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].previous.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdPrevious<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdPreviousQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdPreviousQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdPreviousQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].previous.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdProgressionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/progression', toValue(args)] as const
}

export function getApiV1BooksBookIdProgressionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdProgressionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].progression.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdProgression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdProgressionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdProgressionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdProgressionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].progression.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1BooksBookIdProgressionMutationKey() {
  return ['api', '/api/v1/books/:bookId/progression', 'PUT'] as const
}

export function getPutApiV1BooksBookIdProgressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BooksBookIdProgressionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>,
    ) {
      return parseResponse(client.api.v1.books[':bookId'].progression.$put(args, options))
    },
  })
}

export function usePutApiV1BooksBookIdProgression<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>,
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
  const mutationDefaults = getPutApiV1BooksBookIdProgressionMutationOptions<
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

export function getDeleteApiV1BooksBookIdReadProgressMutationKey() {
  return ['api', '/api/v1/books/:bookId/read-progress', 'DELETE'] as const
}

export function getDeleteApiV1BooksBookIdReadProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BooksBookIdReadProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>,
    ) {
      return parseResponse(client.api.v1.books[':bookId']['read-progress'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1BooksBookIdReadProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1BooksBookIdReadProgressMutationOptions<
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

export function getPatchApiV1BooksBookIdReadProgressMutationKey() {
  return ['api', '/api/v1/books/:bookId/read-progress', 'PATCH'] as const
}

export function getPatchApiV1BooksBookIdReadProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1BooksBookIdReadProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>,
    ) {
      return parseResponse(client.api.v1.books[':bookId']['read-progress'].$patch(args, options))
    },
  })
}

export function usePatchApiV1BooksBookIdReadProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>,
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
  const mutationDefaults = getPatchApiV1BooksBookIdReadProgressMutationOptions<
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

export function getApiV1BooksBookIdReadlistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/readlists', toValue(args)] as const
}

export function getApiV1BooksBookIdReadlistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdReadlistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].readlists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdReadlists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdReadlistsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdReadlistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdReadlistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].readlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdResourceResourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/resource/:resource', toValue(args)] as const
}

export function getApiV1BooksBookIdResourceResourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdResourceResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].resource[':resource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdResourceResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
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
                    (typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']
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
                    (typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdResourceResourceQueryKey>
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
            ReturnType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdResourceResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdResourceResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].resource[':resource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/thumbnail', toValue(args)] as const
}

export function getApiV1BooksBookIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdThumbnailQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BooksBookIdThumbnailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/thumbnails', toValue(args)] as const
}

export function getApiV1BooksBookIdThumbnailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdThumbnailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].thumbnails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdThumbnailsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdThumbnailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdThumbnailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].thumbnails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1BooksBookIdThumbnailsMutationKey() {
  return ['api', '/api/v1/books/:bookId/thumbnails', 'POST'] as const
}

export function getPostApiV1BooksBookIdThumbnailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BooksBookIdThumbnailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>,
    ) {
      return parseResponse(client.api.v1.books[':bookId'].thumbnails.$post(args, options))
    },
  })
}

export function usePostApiV1BooksBookIdThumbnails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>,
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
  const mutationDefaults = getPostApiV1BooksBookIdThumbnailsMutationOptions<
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

export function getApiV1BooksBookIdThumbnailsThumbnailIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']>
  >,
) {
  return ['api', '/api/v1/books/:bookId/thumbnails/:thumbnailId', toValue(args)] as const
}

export function getApiV1BooksBookIdThumbnailsThumbnailIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BooksBookIdThumbnailsThumbnailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BooksBookIdThumbnailsThumbnailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']>
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
                    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
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
                    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BooksBookIdThumbnailsThumbnailIdQueryKey>
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
              (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdThumbnailsThumbnailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BooksBookIdThumbnailsThumbnailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1BooksBookIdThumbnailsThumbnailIdMutationKey() {
  return ['api', '/api/v1/books/:bookId/thumbnails/:thumbnailId', 'DELETE'] as const
}

export function getDeleteApiV1BooksBookIdThumbnailsThumbnailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BooksBookIdThumbnailsThumbnailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1BooksBookIdThumbnailsThumbnailId<
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
                    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$delete']
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
  const mutationDefaults = getDeleteApiV1BooksBookIdThumbnailsThumbnailIdMutationOptions<
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

export function getPutApiV1BooksBookIdThumbnailsThumbnailIdSelectedMutationKey() {
  return ['api', '/api/v1/books/:bookId/thumbnails/:thumbnailId/selected', 'PUT'] as const
}

export function getPutApiV1BooksBookIdThumbnailsThumbnailIdSelectedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['selected']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['selected']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BooksBookIdThumbnailsThumbnailIdSelectedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['selected']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].selected.$put(args, options),
      )
    },
  })
}

export function usePutApiV1BooksBookIdThumbnailsThumbnailIdSelected<
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
                    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['selected']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['selected']['$put']
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
  const mutationDefaults = getPutApiV1BooksBookIdThumbnailsThumbnailIdSelectedMutationOptions<
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

export function getApiV1ClaimQueryKey() {
  return ['api', '/api/v1/claim'] as const
}

export function getApiV1ClaimQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ClaimQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.claim.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>
          >,
          ReturnType<typeof getApiV1ClaimQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ClaimQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ClaimQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.claim.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ClaimMutationKey() {
  return ['api', '/api/v1/claim', 'POST'] as const
}

export function getPostApiV1ClaimMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.claim.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClaimMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.claim.$post>) {
      return parseResponse(client.api.v1.claim.$post(args, options))
    },
  })
}

export function usePostApiV1Claim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.claim.$post>,
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
  const mutationDefaults = getPostApiV1ClaimMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1ClientSettingsGlobalMutationKey() {
  return ['api', '/api/v1/client-settings/global', 'DELETE'] as const
}

export function getDeleteApiV1ClientSettingsGlobalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['client-settings']['global']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ClientSettingsGlobalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['client-settings']['global']['$delete']>,
    ) {
      return parseResponse(client.api.v1['client-settings'].global.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ClientSettingsGlobal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1)['client-settings']['global']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['client-settings']['global']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ClientSettingsGlobalMutationOptions<
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

export function getPatchApiV1ClientSettingsGlobalMutationKey() {
  return ['api', '/api/v1/client-settings/global', 'PATCH'] as const
}

export function getPatchApiV1ClientSettingsGlobalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['client-settings']['global']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1ClientSettingsGlobalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['client-settings']['global']['$patch']>,
    ) {
      return parseResponse(client.api.v1['client-settings'].global.$patch(args, options))
    },
  })
}

export function usePatchApiV1ClientSettingsGlobal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['client-settings']['global']['$patch']>,
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
  const mutationDefaults = getPatchApiV1ClientSettingsGlobalMutationOptions<
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

export function getApiV1ClientSettingsGlobalListQueryKey() {
  return ['api', '/api/v1/client-settings/global/list'] as const
}

export function getApiV1ClientSettingsGlobalListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ClientSettingsGlobalListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['client-settings'].global.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientSettingsGlobalList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>
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
                  ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ClientSettingsGlobalListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientSettingsGlobalListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ClientSettingsGlobalListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['client-settings'].global.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1ClientSettingsUserMutationKey() {
  return ['api', '/api/v1/client-settings/user', 'DELETE'] as const
}

export function getDeleteApiV1ClientSettingsUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['client-settings']['user']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ClientSettingsUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['client-settings']['user']['$delete']>,
    ) {
      return parseResponse(client.api.v1['client-settings'].user.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ClientSettingsUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['client-settings']['user']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ClientSettingsUserMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1ClientSettingsUserMutationKey() {
  return ['api', '/api/v1/client-settings/user', 'PATCH'] as const
}

export function getPatchApiV1ClientSettingsUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1)['client-settings']['user']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1ClientSettingsUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['client-settings']['user']['$patch']>,
    ) {
      return parseResponse(client.api.v1['client-settings'].user.$patch(args, options))
    },
  })
}

export function usePatchApiV1ClientSettingsUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1)['client-settings']['user']['$patch']>,
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
  const mutationDefaults = getPatchApiV1ClientSettingsUserMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ClientSettingsUserListQueryKey() {
  return ['api', '/api/v1/client-settings/user/list'] as const
}

export function getApiV1ClientSettingsUserListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ClientSettingsUserListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['client-settings'].user.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClientSettingsUserList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>
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
                  ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ClientSettingsUserListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClientSettingsUserListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ClientSettingsUserListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['client-settings'].user.list.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.collections.$get>>,
) {
  return ['api', '/api/v1/collections', toValue(args)] as const
}

export function getApiV1CollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Collections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CollectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CollectionsMutationKey() {
  return ['api', '/api/v1/collections', 'POST'] as const
}

export function getPostApiV1CollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.collections.$post>) {
      return parseResponse(client.api.v1.collections.$post(args, options))
    },
  })
}

export function usePostApiV1Collections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.collections.$post>,
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
  const mutationDefaults = getPostApiV1CollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>>,
) {
  return ['api', '/api/v1/collections/:id', toValue(args)] as const
}

export function getApiV1CollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CollectionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1CollectionsIdMutationKey() {
  return ['api', '/api/v1/collections/:id', 'DELETE'] as const
}

export function getDeleteApiV1CollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.collections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CollectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.collections)[':id']['$delete']>) {
      return parseResponse(client.api.v1.collections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1CollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.collections)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1CollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1CollectionsIdMutationKey() {
  return ['api', '/api/v1/collections/:id', 'PATCH'] as const
}

export function getPatchApiV1CollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.collections)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1CollectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.collections)[':id']['$patch']>) {
      return parseResponse(client.api.v1.collections[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiV1CollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.collections)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiV1CollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CollectionsIdSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>
  >,
) {
  return ['api', '/api/v1/collections/:id/series', toValue(args)] as const
}

export function getApiV1CollectionsIdSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CollectionsIdSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.collections[':id'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CollectionsIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CollectionsIdSeriesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsIdSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CollectionsIdSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.collections[':id'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CollectionsIdThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>
  >,
) {
  return ['api', '/api/v1/collections/:id/thumbnail', toValue(args)] as const
}

export function getApiV1CollectionsIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CollectionsIdThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.collections[':id'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CollectionsIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CollectionsIdThumbnailQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CollectionsIdThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.collections[':id'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CollectionsIdThumbnailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>
  >,
) {
  return ['api', '/api/v1/collections/:id/thumbnails', toValue(args)] as const
}

export function getApiV1CollectionsIdThumbnailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CollectionsIdThumbnailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.collections[':id'].thumbnails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CollectionsIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CollectionsIdThumbnailsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsIdThumbnailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CollectionsIdThumbnailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.collections[':id'].thumbnails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CollectionsIdThumbnailsMutationKey() {
  return ['api', '/api/v1/collections/:id/thumbnails', 'POST'] as const
}

export function getPostApiV1CollectionsIdThumbnailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CollectionsIdThumbnailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>,
    ) {
      return parseResponse(client.api.v1.collections[':id'].thumbnails.$post(args, options))
    },
  })
}

export function usePostApiV1CollectionsIdThumbnails<
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
                  ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>,
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
  const mutationDefaults = getPostApiV1CollectionsIdThumbnailsMutationOptions<
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

export function getApiV1CollectionsIdThumbnailsThumbnailIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
    >
  >,
) {
  return ['api', '/api/v1/collections/:id/thumbnails/:thumbnailId', toValue(args)] as const
}

export function getApiV1CollectionsIdThumbnailsThumbnailIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CollectionsIdThumbnailsThumbnailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CollectionsIdThumbnailsThumbnailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
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
                    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
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
                    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CollectionsIdThumbnailsThumbnailIdQueryKey>
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
              (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsIdThumbnailsThumbnailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CollectionsIdThumbnailsThumbnailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1CollectionsIdThumbnailsThumbnailIdMutationKey() {
  return ['api', '/api/v1/collections/:id/thumbnails/:thumbnailId', 'DELETE'] as const
}

export function getDeleteApiV1CollectionsIdThumbnailsThumbnailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CollectionsIdThumbnailsThumbnailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1CollectionsIdThumbnailsThumbnailId<
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
                    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$delete']
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
  const mutationDefaults = getDeleteApiV1CollectionsIdThumbnailsThumbnailIdMutationOptions<
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

export function getPutApiV1CollectionsIdThumbnailsThumbnailIdSelectedMutationKey() {
  return ['api', '/api/v1/collections/:id/thumbnails/:thumbnailId/selected', 'PUT'] as const
}

export function getPutApiV1CollectionsIdThumbnailsThumbnailIdSelectedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CollectionsIdThumbnailsThumbnailIdSelectedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.collections[':id'].thumbnails[':thumbnailId'].selected.$put(args, options),
      )
    },
  })
}

export function usePutApiV1CollectionsIdThumbnailsThumbnailIdSelected<
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
                    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
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
  const mutationDefaults = getPutApiV1CollectionsIdThumbnailsThumbnailIdSelectedMutationOptions<
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

export function getPostApiV1FilesystemMutationKey() {
  return ['api', '/api/v1/filesystem', 'POST'] as const
}

export function getPostApiV1FilesystemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.filesystem.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FilesystemMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.filesystem.$post>) {
      return parseResponse(client.api.v1.filesystem.$post(args, options))
    },
  })
}

export function usePostApiV1Filesystem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.filesystem.$post>,
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
  const mutationDefaults = getPostApiV1FilesystemMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1FontsFamiliesQueryKey() {
  return ['api', '/api/v1/fonts/families'] as const
}

export function getApiV1FontsFamiliesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1FontsFamiliesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.fonts.families.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FontsFamilies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FontsFamiliesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FontsFamiliesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1FontsFamiliesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.fonts.families.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FontsResourceFontFamilyCssQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>
  >,
) {
  return ['api', '/api/v1/fonts/resource/:fontFamily/css', toValue(args)] as const
}

export function getApiV1FontsResourceFontFamilyCssQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FontsResourceFontFamilyCssQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.fonts.resource[':fontFamily'].css.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FontsResourceFontFamilyCss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>
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
                  ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1FontsResourceFontFamilyCssQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FontsResourceFontFamilyCssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FontsResourceFontFamilyCssQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.fonts.resource[':fontFamily'].css.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FontsResourceFontFamilyFontFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
  >,
) {
  return ['api', '/api/v1/fonts/resource/:fontFamily/:fontFile', toValue(args)] as const
}

export function getApiV1FontsResourceFontFamilyFontFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FontsResourceFontFamilyFontFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.fonts.resource[':fontFamily'][':fontFile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FontsResourceFontFamilyFontFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
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
                    (typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']
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
                    (typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1FontsResourceFontFamilyFontFileQueryKey>
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
            ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FontsResourceFontFamilyFontFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FontsResourceFontFamilyFontFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.fonts.resource[':fontFamily'][':fontFile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GenresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.genres.$get>>,
) {
  return ['api', '/api/v1/genres', toValue(args)] as const
}

export function getApiV1GenresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.genres.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GenresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.genres.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Genres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.genres.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
          >,
          ReturnType<typeof getApiV1GenresQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GenresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.genres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
) {
  return ['api', '/api/v1/history', toValue(args)] as const
}

export function getApiV1HistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
          >,
          ReturnType<typeof getApiV1HistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LanguagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.languages.$get>>,
) {
  return ['api', '/api/v1/languages', toValue(args)] as const
}

export function getApiV1LanguagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.languages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.languages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.languages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LanguagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.languages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LibrariesQueryKey() {
  return ['api', '/api/v1/libraries'] as const
}

export function getApiV1LibrariesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LibrariesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.libraries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Libraries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LibrariesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LibrariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LibrariesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.libraries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1LibrariesMutationKey() {
  return ['api', '/api/v1/libraries', 'POST'] as const
}

export function getPostApiV1LibrariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.libraries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LibrariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.libraries.$post>) {
      return parseResponse(client.api.v1.libraries.$post(args, options))
    },
  })
}

export function usePostApiV1Libraries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.libraries.$post>,
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
  const mutationDefaults = getPostApiV1LibrariesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LibrariesLibraryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>,
) {
  return ['api', '/api/v1/libraries/:libraryId', toValue(args)] as const
}

export function getApiV1LibrariesLibraryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LibrariesLibraryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.libraries[':libraryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LibrariesLibraryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LibrariesLibraryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LibrariesLibraryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LibrariesLibraryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.libraries[':libraryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1LibrariesLibraryIdMutationKey() {
  return ['api', '/api/v1/libraries/:libraryId', 'PUT'] as const
}

export function getPutApiV1LibrariesLibraryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1LibrariesLibraryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$put']>,
    ) {
      return parseResponse(client.api.v1.libraries[':libraryId'].$put(args, options))
    },
  })
}

export function usePutApiV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$put']>,
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
  const mutationDefaults = getPutApiV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1LibrariesLibraryIdMutationKey() {
  return ['api', '/api/v1/libraries/:libraryId', 'DELETE'] as const
}

export function getDeleteApiV1LibrariesLibraryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1LibrariesLibraryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.libraries[':libraryId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1LibrariesLibraryIdMutationKey() {
  return ['api', '/api/v1/libraries/:libraryId', 'PATCH'] as const
}

export function getPatchApiV1LibrariesLibraryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1LibrariesLibraryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$patch']>,
    ) {
      return parseResponse(client.api.v1.libraries[':libraryId'].$patch(args, options))
    },
  })
}

export function usePatchApiV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$patch']>,
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
  const mutationDefaults = getPatchApiV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1LibrariesLibraryIdAnalyzeMutationKey() {
  return ['api', '/api/v1/libraries/:libraryId/analyze', 'POST'] as const
}

export function getPostApiV1LibrariesLibraryIdAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LibrariesLibraryIdAnalyzeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>,
    ) {
      return parseResponse(client.api.v1.libraries[':libraryId'].analyze.$post(args, options))
    },
  })
}

export function usePostApiV1LibrariesLibraryIdAnalyze<
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
                  ReturnType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>,
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
  const mutationDefaults = getPostApiV1LibrariesLibraryIdAnalyzeMutationOptions<
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

export function getPostApiV1LibrariesLibraryIdEmptyTrashMutationKey() {
  return ['api', '/api/v1/libraries/:libraryId/empty-trash', 'POST'] as const
}

export function getPostApiV1LibrariesLibraryIdEmptyTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LibrariesLibraryIdEmptyTrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.libraries[':libraryId']['empty-trash'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1LibrariesLibraryIdEmptyTrash<
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
                  ReturnType<(typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']>,
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
  const mutationDefaults = getPostApiV1LibrariesLibraryIdEmptyTrashMutationOptions<
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

export function getPostApiV1LibrariesLibraryIdMetadataRefreshMutationKey() {
  return ['api', '/api/v1/libraries/:libraryId/metadata/refresh', 'POST'] as const
}

export function getPostApiV1LibrariesLibraryIdMetadataRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.libraries)[':libraryId']['metadata']['refresh']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.libraries)[':libraryId']['metadata']['refresh']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LibrariesLibraryIdMetadataRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.libraries)[':libraryId']['metadata']['refresh']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.libraries[':libraryId'].metadata.refresh.$post(args, options),
      )
    },
  })
}

export function usePostApiV1LibrariesLibraryIdMetadataRefresh<
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
                    (typeof client.api.v1.libraries)[':libraryId']['metadata']['refresh']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.libraries)[':libraryId']['metadata']['refresh']['$post']
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
  const mutationDefaults = getPostApiV1LibrariesLibraryIdMetadataRefreshMutationOptions<
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

export function getPostApiV1LibrariesLibraryIdScanMutationKey() {
  return ['api', '/api/v1/libraries/:libraryId/scan', 'POST'] as const
}

export function getPostApiV1LibrariesLibraryIdScanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LibrariesLibraryIdScanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>,
    ) {
      return parseResponse(client.api.v1.libraries[':libraryId'].scan.$post(args, options))
    },
  })
}

export function usePostApiV1LibrariesLibraryIdScan<
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
                Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>,
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
  const mutationDefaults = getPostApiV1LibrariesLibraryIdScanMutationOptions<
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

export function getApiV1LoginSetCookieQueryKey() {
  return ['api', '/api/v1/login/set-cookie'] as const
}

export function getApiV1LoginSetCookieQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LoginSetCookieQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.login['set-cookie'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LoginSetCookie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1LoginSetCookieQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LoginSetCookieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LoginSetCookieQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.login['set-cookie'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1Oauth2ProvidersQueryKey() {
  return ['api', '/api/v1/oauth2/providers'] as const
}

export function getApiV1Oauth2ProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1Oauth2ProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.oauth2.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Oauth2Providers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
            >
          >,
          ReturnType<typeof getApiV1Oauth2ProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Oauth2ProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1Oauth2ProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.oauth2.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PageHashesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>>,
) {
  return ['api', '/api/v1/page-hashes', toValue(args)] as const
}

export function getApiV1PageHashesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PageHashesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['page-hashes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PageHashes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PageHashesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PageHashesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PageHashesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['page-hashes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1PageHashesMutationKey() {
  return ['api', '/api/v1/page-hashes', 'PUT'] as const
}

export function getPutApiV1PageHashesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['page-hashes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PageHashesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['page-hashes']['$put']>) {
      return parseResponse(client.api.v1['page-hashes'].$put(args, options))
    },
  })
}

export function usePutApiV1PageHashes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['page-hashes']['$put']>,
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
  const mutationDefaults = getPutApiV1PageHashesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PageHashesUnknownQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>
  >,
) {
  return ['api', '/api/v1/page-hashes/unknown', toValue(args)] as const
}

export function getApiV1PageHashesUnknownQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PageHashesUnknownQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['page-hashes'].unknown.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PageHashesUnknown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PageHashesUnknownQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PageHashesUnknownQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PageHashesUnknownQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['page-hashes'].unknown.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PageHashesUnknownPageHashThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
    >
  >,
) {
  return ['api', '/api/v1/page-hashes/unknown/:pageHash/thumbnail', toValue(args)] as const
}

export function getApiV1PageHashesUnknownPageHashThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PageHashesUnknownPageHashThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['page-hashes'].unknown[':pageHash'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PageHashesUnknownPageHashThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
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
                    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
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
                    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PageHashesUnknownPageHashThumbnailQueryKey>
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
              (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PageHashesUnknownPageHashThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PageHashesUnknownPageHashThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['page-hashes'].unknown[':pageHash'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PageHashesPageHashQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>
  >,
) {
  return ['api', '/api/v1/page-hashes/:pageHash', toValue(args)] as const
}

export function getApiV1PageHashesPageHashQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PageHashesPageHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['page-hashes'][':pageHash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PageHashesPageHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PageHashesPageHashQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PageHashesPageHashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PageHashesPageHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['page-hashes'][':pageHash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1PageHashesPageHashDeleteAllMutationKey() {
  return ['api', '/api/v1/page-hashes/:pageHash/delete-all', 'POST'] as const
}

export function getPostApiV1PageHashesPageHashDeleteAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PageHashesPageHashDeleteAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['page-hashes'][':pageHash']['delete-all'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1PageHashesPageHashDeleteAll<
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
                    (typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']
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
  const mutationDefaults = getPostApiV1PageHashesPageHashDeleteAllMutationOptions<
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

export function getPostApiV1PageHashesPageHashDeleteMatchMutationKey() {
  return ['api', '/api/v1/page-hashes/:pageHash/delete-match', 'POST'] as const
}

export function getPostApiV1PageHashesPageHashDeleteMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['delete-match']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['delete-match']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PageHashesPageHashDeleteMatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['page-hashes'][':pageHash']['delete-match']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['page-hashes'][':pageHash']['delete-match'].$post(args, options),
      )
    },
  })
}

export function usePostApiV1PageHashesPageHashDeleteMatch<
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
                    (typeof client.api.v1)['page-hashes'][':pageHash']['delete-match']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1)['page-hashes'][':pageHash']['delete-match']['$post']
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
  const mutationDefaults = getPostApiV1PageHashesPageHashDeleteMatchMutationOptions<
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

export function getApiV1PageHashesPageHashThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>
  >,
) {
  return ['api', '/api/v1/page-hashes/:pageHash/thumbnail', toValue(args)] as const
}

export function getApiV1PageHashesPageHashThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PageHashesPageHashThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['page-hashes'][':pageHash'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PageHashesPageHashThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>
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
                    (typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']
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
                    (typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PageHashesPageHashThumbnailQueryKey>
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
            ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PageHashesPageHashThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PageHashesPageHashThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['page-hashes'][':pageHash'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublishersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.publishers.$get>>,
) {
  return ['api', '/api/v1/publishers', toValue(args)] as const
}

export function getApiV1PublishersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.publishers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublishersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.publishers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Publishers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.publishers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PublishersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublishersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublishersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.publishers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReadlistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.readlists.$get>>,
) {
  return ['api', '/api/v1/readlists', toValue(args)] as const
}

export function getApiV1ReadlistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.readlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Readlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.readlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ReadlistsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ReadlistsMutationKey() {
  return ['api', '/api/v1/readlists', 'POST'] as const
}

export function getPostApiV1ReadlistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.readlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReadlistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.readlists.$post>) {
      return parseResponse(client.api.v1.readlists.$post(args, options))
    },
  })
}

export function usePostApiV1Readlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.readlists.$post>,
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
  const mutationDefaults = getPostApiV1ReadlistsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReadlistsMatchComicrackMutationKey() {
  return ['api', '/api/v1/readlists/match/comicrack', 'POST'] as const
}

export function getPostApiV1ReadlistsMatchComicrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.readlists.match.comicrack.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.readlists.match.comicrack.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReadlistsMatchComicrackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.readlists.match.comicrack.$post>) {
      return parseResponse(client.api.v1.readlists.match.comicrack.$post(args, options))
    },
  })
}

export function usePostApiV1ReadlistsMatchComicrack<
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
                Awaited<ReturnType<typeof client.api.v1.readlists.match.comicrack.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.readlists.match.comicrack.$post>,
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
  const mutationDefaults = getPostApiV1ReadlistsMatchComicrackMutationOptions<
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

export function getApiV1ReadlistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>>,
) {
  return ['api', '/api/v1/readlists/:id', toValue(args)] as const
}

export function getApiV1ReadlistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1ReadlistsIdMutationKey() {
  return ['api', '/api/v1/readlists/:id', 'DELETE'] as const
}

export function getDeleteApiV1ReadlistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.readlists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ReadlistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$delete']>) {
      return parseResponse(client.api.v1.readlists[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ReadlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.readlists)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ReadlistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1ReadlistsIdMutationKey() {
  return ['api', '/api/v1/readlists/:id', 'PATCH'] as const
}

export function getPatchApiV1ReadlistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.readlists)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1ReadlistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$patch']>) {
      return parseResponse(client.api.v1.readlists[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiV1ReadlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.readlists)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiV1ReadlistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ReadlistsIdBooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>
  >,
) {
  return ['api', '/api/v1/readlists/:id/books', toValue(args)] as const
}

export function getApiV1ReadlistsIdBooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdBooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id'].books.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsIdBooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdBooksQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdBooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdBooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id'].books.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReadlistsIdBooksBookIdNextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']>
  >,
) {
  return ['api', '/api/v1/readlists/:id/books/:bookId/next', toValue(args)] as const
}

export function getApiV1ReadlistsIdBooksBookIdNextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdBooksBookIdNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id'].books[':bookId'].next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsIdBooksBookIdNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']>
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
                    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
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
                    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdBooksBookIdNextQueryKey>
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
            ReturnType<(typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdBooksBookIdNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdBooksBookIdNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id'].books[':bookId'].next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReadlistsIdBooksBookIdPreviousQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
    >
  >,
) {
  return ['api', '/api/v1/readlists/:id/books/:bookId/previous', toValue(args)] as const
}

export function getApiV1ReadlistsIdBooksBookIdPreviousQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdBooksBookIdPreviousQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id'].books[':bookId'].previous.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsIdBooksBookIdPrevious<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
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
                    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
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
                    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdBooksBookIdPreviousQueryKey>
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
              (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdBooksBookIdPreviousQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdBooksBookIdPreviousQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id'].books[':bookId'].previous.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReadlistsIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>,
) {
  return ['api', '/api/v1/readlists/:id/file', toValue(args)] as const
}

export function getApiV1ReadlistsIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdFileQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReadlistsIdReadProgressTachiyomiQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']>
  >,
) {
  return ['api', '/api/v1/readlists/:id/read-progress/tachiyomi', toValue(args)] as const
}

export function getApiV1ReadlistsIdReadProgressTachiyomiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdReadProgressTachiyomiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id']['read-progress'].tachiyomi.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsIdReadProgressTachiyomi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']>
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
                    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
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
                    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdReadProgressTachiyomiQueryKey>
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
              (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdReadProgressTachiyomiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdReadProgressTachiyomiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id']['read-progress'].tachiyomi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ReadlistsIdReadProgressTachiyomiMutationKey() {
  return ['api', '/api/v1/readlists/:id/read-progress/tachiyomi', 'PUT'] as const
}

export function getPutApiV1ReadlistsIdReadProgressTachiyomiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ReadlistsIdReadProgressTachiyomiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.readlists[':id']['read-progress'].tachiyomi.$put(args, options),
      )
    },
  })
}

export function usePutApiV1ReadlistsIdReadProgressTachiyomi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$put']
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
  const mutationDefaults = getPutApiV1ReadlistsIdReadProgressTachiyomiMutationOptions<
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

export function getApiV1ReadlistsIdThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>
  >,
) {
  return ['api', '/api/v1/readlists/:id/thumbnail', toValue(args)] as const
}

export function getApiV1ReadlistsIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdThumbnailQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReadlistsIdThumbnailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>
  >,
) {
  return ['api', '/api/v1/readlists/:id/thumbnails', toValue(args)] as const
}

export function getApiV1ReadlistsIdThumbnailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdThumbnailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id'].thumbnails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdThumbnailsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdThumbnailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdThumbnailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id'].thumbnails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ReadlistsIdThumbnailsMutationKey() {
  return ['api', '/api/v1/readlists/:id/thumbnails', 'POST'] as const
}

export function getPostApiV1ReadlistsIdThumbnailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReadlistsIdThumbnailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>,
    ) {
      return parseResponse(client.api.v1.readlists[':id'].thumbnails.$post(args, options))
    },
  })
}

export function usePostApiV1ReadlistsIdThumbnails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>,
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
  const mutationDefaults = getPostApiV1ReadlistsIdThumbnailsMutationOptions<
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

export function getApiV1ReadlistsIdThumbnailsThumbnailIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']>
  >,
) {
  return ['api', '/api/v1/readlists/:id/thumbnails/:thumbnailId', toValue(args)] as const
}

export function getApiV1ReadlistsIdThumbnailsThumbnailIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReadlistsIdThumbnailsThumbnailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReadlistsIdThumbnailsThumbnailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']>
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
                    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
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
                    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ReadlistsIdThumbnailsThumbnailIdQueryKey>
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
              (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdThumbnailsThumbnailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReadlistsIdThumbnailsThumbnailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1ReadlistsIdThumbnailsThumbnailIdMutationKey() {
  return ['api', '/api/v1/readlists/:id/thumbnails/:thumbnailId', 'DELETE'] as const
}

export function getDeleteApiV1ReadlistsIdThumbnailsThumbnailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ReadlistsIdThumbnailsThumbnailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1ReadlistsIdThumbnailsThumbnailId<
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
                    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$delete']
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
  const mutationDefaults = getDeleteApiV1ReadlistsIdThumbnailsThumbnailIdMutationOptions<
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

export function getPutApiV1ReadlistsIdThumbnailsThumbnailIdSelectedMutationKey() {
  return ['api', '/api/v1/readlists/:id/thumbnails/:thumbnailId/selected', 'PUT'] as const
}

export function getPutApiV1ReadlistsIdThumbnailsThumbnailIdSelectedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ReadlistsIdThumbnailsThumbnailIdSelectedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].selected.$put(args, options),
      )
    },
  })
}

export function usePutApiV1ReadlistsIdThumbnailsThumbnailIdSelected<
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
                    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
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
  const mutationDefaults = getPutApiV1ReadlistsIdThumbnailsThumbnailIdSelectedMutationOptions<
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

export function getApiV1ReleasesQueryKey() {
  return ['api', '/api/v1/releases'] as const
}

export function getApiV1ReleasesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ReleasesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.releases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Releases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ReleasesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReleasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ReleasesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.releases.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.$get>>,
) {
  return ['api', '/api/v1/series', toValue(args)] as const
}

export function getApiV1SeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Series<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
          >,
          ReturnType<typeof getApiV1SeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesAlphabeticalGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>
  >,
) {
  return ['api', '/api/v1/series/alphabetical-groups', toValue(args)] as const
}

export function getApiV1SeriesAlphabeticalGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesAlphabeticalGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series['alphabetical-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesAlphabeticalGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesAlphabeticalGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesAlphabeticalGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesAlphabeticalGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series['alphabetical-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.latest.$get>>,
) {
  return ['api', '/api/v1/series/latest', toValue(args)] as const
}

export function getApiV1SeriesLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SeriesLatestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SeriesListMutationKey() {
  return ['api', '/api/v1/series/list', 'POST'] as const
}

export function getPostApiV1SeriesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.series.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SeriesListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.series.list.$post>) {
      return parseResponse(client.api.v1.series.list.$post(args, options))
    },
  })
}

export function usePostApiV1SeriesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.series.list.$post>,
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
  const mutationDefaults = getPostApiV1SeriesListMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SeriesListAlphabeticalGroupsMutationKey() {
  return ['api', '/api/v1/series/list/alphabetical-groups', 'POST'] as const
}

export function getPostApiV1SeriesListAlphabeticalGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SeriesListAlphabeticalGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>,
    ) {
      return parseResponse(client.api.v1.series.list['alphabetical-groups'].$post(args, options))
    },
  })
}

export function usePostApiV1SeriesListAlphabeticalGroups<
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
                  ReturnType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>,
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
  const mutationDefaults = getPostApiV1SeriesListAlphabeticalGroupsMutationOptions<
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

export function getApiV1SeriesNewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.new.$get>>,
) {
  return ['api', '/api/v1/series/new', toValue(args)] as const
}

export function getApiV1SeriesNewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.new.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesNewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series.new.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesNew<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.new.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SeriesNewQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesNewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesNewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series.new.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesReleaseDatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>>,
) {
  return ['api', '/api/v1/series/release-dates', toValue(args)] as const
}

export function getApiV1SeriesReleaseDatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesReleaseDatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series['release-dates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesReleaseDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesReleaseDatesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesReleaseDatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesReleaseDatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series['release-dates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesUpdatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.updated.$get>>,
) {
  return ['api', '/api/v1/series/updated', toValue(args)] as const
}

export function getApiV1SeriesUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.updated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series.updated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesUpdated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.series.updated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SeriesUpdatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series.updated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesSeriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>>,
) {
  return ['api', '/api/v1/series/:seriesId', toValue(args)] as const
}

export function getApiV1SeriesSeriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesSeriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series[':seriesId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesSeriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesSeriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesSeriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series[':seriesId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SeriesSeriesIdAnalyzeMutationKey() {
  return ['api', '/api/v1/series/:seriesId/analyze', 'POST'] as const
}

export function getPostApiV1SeriesSeriesIdAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SeriesSeriesIdAnalyzeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>,
    ) {
      return parseResponse(client.api.v1.series[':seriesId'].analyze.$post(args, options))
    },
  })
}

export function usePostApiV1SeriesSeriesIdAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>,
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
  const mutationDefaults = getPostApiV1SeriesSeriesIdAnalyzeMutationOptions<
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

export function getApiV1SeriesSeriesIdBooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>
  >,
) {
  return ['api', '/api/v1/series/:seriesId/books', toValue(args)] as const
}

export function getApiV1SeriesSeriesIdBooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesSeriesIdBooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series[':seriesId'].books.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesSeriesIdBooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesSeriesIdBooksQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesSeriesIdBooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesSeriesIdBooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series[':seriesId'].books.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesSeriesIdCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>
  >,
) {
  return ['api', '/api/v1/series/:seriesId/collections', toValue(args)] as const
}

export function getApiV1SeriesSeriesIdCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesSeriesIdCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series[':seriesId'].collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesSeriesIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>
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
                  ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesSeriesIdCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesSeriesIdCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesSeriesIdCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series[':seriesId'].collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesSeriesIdFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>
  >,
) {
  return ['api', '/api/v1/series/:seriesId/file', toValue(args)] as const
}

export function getApiV1SeriesSeriesIdFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesSeriesIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series[':seriesId'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesSeriesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesSeriesIdFileQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesSeriesIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesSeriesIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series[':seriesId'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1SeriesSeriesIdFileMutationKey() {
  return ['api', '/api/v1/series/:seriesId/file', 'DELETE'] as const
}

export function getDeleteApiV1SeriesSeriesIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SeriesSeriesIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']>,
    ) {
      return parseResponse(client.api.v1.series[':seriesId'].file.$delete(args, options))
    },
  })
}

export function useDeleteApiV1SeriesSeriesIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1SeriesSeriesIdFileMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1SeriesSeriesIdMetadataMutationKey() {
  return ['api', '/api/v1/series/:seriesId/metadata', 'PATCH'] as const
}

export function getPatchApiV1SeriesSeriesIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1SeriesSeriesIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>,
    ) {
      return parseResponse(client.api.v1.series[':seriesId'].metadata.$patch(args, options))
    },
  })
}

export function usePatchApiV1SeriesSeriesIdMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>,
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
  const mutationDefaults = getPatchApiV1SeriesSeriesIdMetadataMutationOptions<
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

export function getPostApiV1SeriesSeriesIdMetadataRefreshMutationKey() {
  return ['api', '/api/v1/series/:seriesId/metadata/refresh', 'POST'] as const
}

export function getPostApiV1SeriesSeriesIdMetadataRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.series)[':seriesId']['metadata']['refresh']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['metadata']['refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SeriesSeriesIdMetadataRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.series)[':seriesId']['metadata']['refresh']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.series[':seriesId'].metadata.refresh.$post(args, options))
    },
  })
}

export function usePostApiV1SeriesSeriesIdMetadataRefresh<
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
                    (typeof client.api.v1.series)[':seriesId']['metadata']['refresh']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.series)[':seriesId']['metadata']['refresh']['$post']
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
  const mutationDefaults = getPostApiV1SeriesSeriesIdMetadataRefreshMutationOptions<
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

export function getPostApiV1SeriesSeriesIdReadProgressMutationKey() {
  return ['api', '/api/v1/series/:seriesId/read-progress', 'POST'] as const
}

export function getPostApiV1SeriesSeriesIdReadProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SeriesSeriesIdReadProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$post']>,
    ) {
      return parseResponse(client.api.v1.series[':seriesId']['read-progress'].$post(args, options))
    },
  })
}

export function usePostApiV1SeriesSeriesIdReadProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$post']>,
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
  const mutationDefaults = getPostApiV1SeriesSeriesIdReadProgressMutationOptions<
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

export function getDeleteApiV1SeriesSeriesIdReadProgressMutationKey() {
  return ['api', '/api/v1/series/:seriesId/read-progress', 'DELETE'] as const
}

export function getDeleteApiV1SeriesSeriesIdReadProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SeriesSeriesIdReadProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.series)[':seriesId']['read-progress']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.series[':seriesId']['read-progress'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1SeriesSeriesIdReadProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.series)[':seriesId']['read-progress']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1SeriesSeriesIdReadProgressMutationOptions<
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

export function getApiV1SeriesSeriesIdThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>
  >,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnail', toValue(args)] as const
}

export function getApiV1SeriesSeriesIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesSeriesIdThumbnailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series[':seriesId'].thumbnail.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesSeriesIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesSeriesIdThumbnailQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesSeriesIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesSeriesIdThumbnailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series[':seriesId'].thumbnail.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SeriesSeriesIdThumbnailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>
  >,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnails', toValue(args)] as const
}

export function getApiV1SeriesSeriesIdThumbnailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesSeriesIdThumbnailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series[':seriesId'].thumbnails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesSeriesIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>
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
                  ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesSeriesIdThumbnailsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesSeriesIdThumbnailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesSeriesIdThumbnailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series[':seriesId'].thumbnails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1SeriesSeriesIdThumbnailsMutationKey() {
  return ['api', '/api/v1/series/:seriesId/thumbnails', 'POST'] as const
}

export function getPostApiV1SeriesSeriesIdThumbnailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SeriesSeriesIdThumbnailsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>,
    ) {
      return parseResponse(client.api.v1.series[':seriesId'].thumbnails.$post(args, options))
    },
  })
}

export function usePostApiV1SeriesSeriesIdThumbnails<
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
                  ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>,
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
  const mutationDefaults = getPostApiV1SeriesSeriesIdThumbnailsMutationOptions<
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

export function getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
    >
  >,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnails/:thumbnailId', toValue(args)] as const
}

export function getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SeriesSeriesIdThumbnailsThumbnailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
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
                    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
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
                    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryKey>
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
              (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1SeriesSeriesIdThumbnailsThumbnailIdMutationKey() {
  return ['api', '/api/v1/series/:seriesId/thumbnails/:thumbnailId', 'DELETE'] as const
}

export function getDeleteApiV1SeriesSeriesIdThumbnailsThumbnailIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SeriesSeriesIdThumbnailsThumbnailIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1SeriesSeriesIdThumbnailsThumbnailId<
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
                    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$delete']
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
  const mutationDefaults = getDeleteApiV1SeriesSeriesIdThumbnailsThumbnailIdMutationOptions<
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

export function getPutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedMutationKey() {
  return ['api', '/api/v1/series/:seriesId/thumbnails/:thumbnailId/selected', 'PUT'] as const
}

export function getPutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['selected']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['selected']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['selected']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].selected.$put(args, options),
      )
    },
  })
}

export function usePutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelected<
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
                    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['selected']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['selected']['$put']
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
  const mutationDefaults = getPutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedMutationOptions<
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

export function getApiV1SettingsQueryKey() {
  return ['api', '/api/v1/settings'] as const
}

export function getApiV1SettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV1SettingsMutationKey() {
  return ['api', '/api/v1/settings', 'PATCH'] as const
}

export function getPatchApiV1SettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$patch>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1SettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.settings.$patch>) {
      return parseResponse(client.api.v1.settings.$patch(args, options))
    },
  })
}

export function usePatchApiV1Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$patch>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.settings.$patch>,
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
  const mutationDefaults = getPatchApiV1SettingsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SharingLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>>,
) {
  return ['api', '/api/v1/sharing-labels', toValue(args)] as const
}

export function getApiV1SharingLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SharingLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['sharing-labels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SharingLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SharingLabelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SharingLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SharingLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['sharing-labels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1SyncpointsMeMutationKey() {
  return ['api', '/api/v1/syncpoints/me', 'DELETE'] as const
}

export function getDeleteApiV1SyncpointsMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.syncpoints.me.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.syncpoints.me.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SyncpointsMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.syncpoints.me.$delete>) {
      return parseResponse(client.api.v1.syncpoints.me.$delete(args, options))
    },
  })
}

export function useDeleteApiV1SyncpointsMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.syncpoints.me.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.syncpoints.me.$delete>,
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
  const mutationDefaults = getDeleteApiV1SyncpointsMeMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.$get>>,
) {
  return ['api', '/api/v1/tags', toValue(args)] as const
}

export function getApiV1TagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
          >,
          ReturnType<typeof getApiV1TagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TagsBookQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.book.$get>>,
) {
  return ['api', '/api/v1/tags/book', toValue(args)] as const
}

export function getApiV1TagsBookQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.book.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagsBookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tags.book.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagsBook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.book.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TagsBookQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsBookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagsBookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tags.book.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TagsSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.series.$get>>,
) {
  return ['api', '/api/v1/tags/series', toValue(args)] as const
}

export function getApiV1TagsSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagsSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tags.series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagsSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tags.series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TagsSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagsSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tags.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1TasksMutationKey() {
  return ['api', '/api/v1/tasks', 'DELETE'] as const
}

export function getDeleteApiV1TasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TasksMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.tasks.$delete(undefined, options))
    },
  })
}

export function useDeleteApiV1Tasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$delete>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteApiV1TasksMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TransientBooksMutationKey() {
  return ['api', '/api/v1/transient-books', 'POST'] as const
}

export function getPostApiV1TransientBooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['transient-books']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['transient-books']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TransientBooksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['transient-books']['$post']>) {
      return parseResponse(client.api.v1['transient-books'].$post(args, options))
    },
  })
}

export function usePostApiV1TransientBooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['transient-books']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['transient-books']['$post']>,
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
  const mutationDefaults = getPostApiV1TransientBooksMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TransientBooksIdAnalyzeMutationKey() {
  return ['api', '/api/v1/transient-books/:id/analyze', 'POST'] as const
}

export function getPostApiV1TransientBooksIdAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TransientBooksIdAnalyzeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>,
    ) {
      return parseResponse(client.api.v1['transient-books'][':id'].analyze.$post(args, options))
    },
  })
}

export function usePostApiV1TransientBooksIdAnalyze<
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
                  ReturnType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>,
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
  const mutationDefaults = getPostApiV1TransientBooksIdAnalyzeMutationOptions<
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

export function getApiV1TransientBooksIdPagesPageNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
    >
  >,
) {
  return ['api', '/api/v1/transient-books/:id/pages/:pageNumber', toValue(args)] as const
}

export function getApiV1TransientBooksIdPagesPageNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TransientBooksIdPagesPageNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['transient-books'][':id'].pages[':pageNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TransientBooksIdPagesPageNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
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
                    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
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
                    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1TransientBooksIdPagesPageNumberQueryKey>
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
              (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TransientBooksIdPagesPageNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TransientBooksIdPagesPageNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['transient-books'][':id'].pages[':pageNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AgeRatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>>,
) {
  return ['api', '/api/v2/age-ratings', toValue(args)] as const
}

export function getApiV2AgeRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AgeRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['age-ratings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AgeRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2AgeRatingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgeRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AgeRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['age-ratings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AuthorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.$get>>,
) {
  return ['api', '/api/v2/authors', toValue(args)] as const
}

export function getApiV2AuthorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.authors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Authors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
          >,
          ReturnType<typeof getApiV2AuthorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.authors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AuthorsNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.names.$get>>,
) {
  return ['api', '/api/v2/authors/names', toValue(args)] as const
}

export function getApiV2AuthorsNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorsNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.authors.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AuthorsNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorsNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorsNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.authors.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AuthorsRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.roles.$get>>,
) {
  return ['api', '/api/v2/authors/roles', toValue(args)] as const
}

export function getApiV2AuthorsRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AuthorsRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.authors.roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AuthorsRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.authors.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AuthorsRolesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorsRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AuthorsRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.authors.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GenresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.genres.$get>>,
) {
  return ['api', '/api/v2/genres', toValue(args)] as const
}

export function getApiV2GenresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.genres.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GenresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.genres.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Genres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.genres.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
          >,
          ReturnType<typeof getApiV2GenresQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GenresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.genres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2LanguagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.languages.$get>>,
) {
  return ['api', '/api/v2/languages', toValue(args)] as const
}

export function getApiV2LanguagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.languages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2LanguagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.languages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.languages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>
            >
          >,
          ReturnType<typeof getApiV2LanguagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2LanguagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.languages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PublishersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.publishers.$get>>,
) {
  return ['api', '/api/v2/publishers', toValue(args)] as const
}

export function getApiV2PublishersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.publishers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PublishersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.publishers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Publishers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.publishers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PublishersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PublishersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PublishersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.publishers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2SeriesReleaseYearsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>>,
) {
  return ['api', '/api/v2/series/release-years', toValue(args)] as const
}

export function getApiV2SeriesReleaseYearsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2SeriesReleaseYearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.series['release-years'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2SeriesReleaseYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2SeriesReleaseYearsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SeriesReleaseYearsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2SeriesReleaseYearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.series['release-years'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2SeriesSeriesIdReadProgressTachiyomiQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
    >
  >,
) {
  return ['api', '/api/v2/series/:seriesId/read-progress/tachiyomi', toValue(args)] as const
}

export function getApiV2SeriesSeriesIdReadProgressTachiyomiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2SeriesSeriesIdReadProgressTachiyomiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2SeriesSeriesIdReadProgressTachiyomi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
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
                    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
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
                    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2SeriesSeriesIdReadProgressTachiyomiQueryKey>
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
              (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SeriesSeriesIdReadProgressTachiyomiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2SeriesSeriesIdReadProgressTachiyomiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV2SeriesSeriesIdReadProgressTachiyomiMutationKey() {
  return ['api', '/api/v2/series/:seriesId/read-progress/tachiyomi', 'PUT'] as const
}

export function getPutApiV2SeriesSeriesIdReadProgressTachiyomiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV2SeriesSeriesIdReadProgressTachiyomiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$put(args, options),
      )
    },
  })
}

export function usePutApiV2SeriesSeriesIdReadProgressTachiyomi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$put']
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
  const mutationDefaults = getPutApiV2SeriesSeriesIdReadProgressTachiyomiMutationOptions<
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

export function getApiV2SharingLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>>,
) {
  return ['api', '/api/v2/sharing-labels', toValue(args)] as const
}

export function getApiV2SharingLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2SharingLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['sharing-labels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2SharingLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2SharingLabelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SharingLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2SharingLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['sharing-labels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2TagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.tags.$get>>,
) {
  return ['api', '/api/v2/tags', toValue(args)] as const
}

export function getApiV2TagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
          >,
          ReturnType<typeof getApiV2TagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2UsersQueryKey() {
  return ['api', '/api/v2/users'] as const
}

export function getApiV2UsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2UsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>
          >,
          ReturnType<typeof getApiV2UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2UsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2UsersMutationKey() {
  return ['api', '/api/v2/users', 'POST'] as const
}

export function getPostApiV2UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.users.$post>) {
      return parseResponse(client.api.v2.users.$post(args, options))
    },
  })
}

export function usePostApiV2Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v2.users.$post>,
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
  const mutationDefaults = getPostApiV2UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2UsersAuthenticationActivityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>
  >,
) {
  return ['api', '/api/v2/users/authentication-activity', toValue(args)] as const
}

export function getApiV2UsersAuthenticationActivityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersAuthenticationActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.users['authentication-activity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersAuthenticationActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2UsersAuthenticationActivityQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersAuthenticationActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersAuthenticationActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.users['authentication-activity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2UsersMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.users.me.$get>>,
) {
  return ['api', '/api/v2/users/me', toValue(args)] as const
}

export function getApiV2UsersMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.users.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.users.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.users.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>
            >
          >,
          ReturnType<typeof getApiV2UsersMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.users.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2UsersMeApiKeysQueryKey() {
  return ['api', '/api/v2/users/me/api-keys'] as const
}

export function getApiV2UsersMeApiKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV2UsersMeApiKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.users.me['api-keys'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersMeApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2UsersMeApiKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersMeApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV2UsersMeApiKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.users.me['api-keys'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV2UsersMeApiKeysMutationKey() {
  return ['api', '/api/v2/users/me/api-keys', 'POST'] as const
}

export function getPostApiV2UsersMeApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.users.me)['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2UsersMeApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.users.me)['api-keys']['$post']>) {
      return parseResponse(client.api.v2.users.me['api-keys'].$post(args, options))
    },
  })
}

export function usePostApiV2UsersMeApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v2.users.me)['api-keys']['$post']>,
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
  const mutationDefaults = getPostApiV2UsersMeApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV2UsersMeApiKeysKeyIdMutationKey() {
  return ['api', '/api/v2/users/me/api-keys/:keyId', 'DELETE'] as const
}

export function getDeleteApiV2UsersMeApiKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2UsersMeApiKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>,
    ) {
      return parseResponse(client.api.v2.users.me['api-keys'][':keyId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV2UsersMeApiKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>,
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
  const mutationDefaults = getDeleteApiV2UsersMeApiKeysKeyIdMutationOptions<
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

export function getApiV2UsersMeAuthenticationActivityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>
  >,
) {
  return ['api', '/api/v2/users/me/authentication-activity', toValue(args)] as const
}

export function getApiV2UsersMeAuthenticationActivityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersMeAuthenticationActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.users.me['authentication-activity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersMeAuthenticationActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>
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
                  ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV2UsersMeAuthenticationActivityQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersMeAuthenticationActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersMeAuthenticationActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.users.me['authentication-activity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV2UsersMePasswordMutationKey() {
  return ['api', '/api/v2/users/me/password', 'PATCH'] as const
}

export function getPatchApiV2UsersMePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.password.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v2.users.me.password.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2UsersMePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.users.me.password.$patch>) {
      return parseResponse(client.api.v2.users.me.password.$patch(args, options))
    },
  })
}

export function usePatchApiV2UsersMePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v2.users.me.password.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v2.users.me.password.$patch>,
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
  const mutationDefaults = getPatchApiV2UsersMePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV2UsersIdMutationKey() {
  return ['api', '/api/v2/users/:id', 'DELETE'] as const
}

export function getDeleteApiV2UsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV2UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.users)[':id']['$delete']>) {
      return parseResponse(client.api.v2.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV2UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.users)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.users)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV2UsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV2UsersIdMutationKey() {
  return ['api', '/api/v2/users/:id', 'PATCH'] as const
}

export function getPatchApiV2UsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.users)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.users)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v2.users)[':id']['$patch']>) {
      return parseResponse(client.api.v2.users[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiV2UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.users)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.users)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiV2UsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2UsersIdAuthenticationActivityLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
    >
  >,
) {
  return ['api', '/api/v2/users/:id/authentication-activity/latest', toValue(args)] as const
}

export function getApiV2UsersIdAuthenticationActivityLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2UsersIdAuthenticationActivityLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.users[':id']['authentication-activity'].latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2UsersIdAuthenticationActivityLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
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
                    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
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
                    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV2UsersIdAuthenticationActivityLatestQueryKey>
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
              (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersIdAuthenticationActivityLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2UsersIdAuthenticationActivityLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.users[':id']['authentication-activity'].latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV2UsersIdPasswordMutationKey() {
  return ['api', '/api/v2/users/:id/password', 'PATCH'] as const
}

export function getPatchApiV2UsersIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users)[':id']['password']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v2.users)[':id']['password']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV2UsersIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v2.users)[':id']['password']['$patch']>,
    ) {
      return parseResponse(client.api.v2.users[':id'].password.$patch(args, options))
    },
  })
}

export function usePatchApiV2UsersIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v2.users)[':id']['password']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v2.users)[':id']['password']['$patch']>,
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
  const mutationDefaults = getPatchApiV2UsersIdPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3NotableEntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>>,
) {
  return ['api', '/api/v3/notable-entities', toValue(args)] as const
}

export function getApiV3NotableEntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3NotableEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3['notable-entities'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3NotableEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3NotableEntitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotableEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3NotableEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3['notable-entities'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3NotableEntitiesKindsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>
  >,
) {
  return ['api', '/api/v3/notable-entities/kinds', toValue(args)] as const
}

export function getApiV3NotableEntitiesKindsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3NotableEntitiesKindsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3['notable-entities'].kinds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3NotableEntitiesKinds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3NotableEntitiesKindsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotableEntitiesKindsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3NotableEntitiesKindsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3['notable-entities'].kinds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3NotableEntitiesNamesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>
  >,
) {
  return ['api', '/api/v3/notable-entities/names', toValue(args)] as const
}

export function getApiV3NotableEntitiesNamesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3NotableEntitiesNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3['notable-entities'].names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3NotableEntitiesNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3NotableEntitiesNamesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotableEntitiesNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3NotableEntitiesNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3['notable-entities'].names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
