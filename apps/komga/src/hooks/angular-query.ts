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

export function getActuatorKey() {
  return ['actuator'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getActuatorInfoQueryKey() {
  return ['actuator', '/actuator/info'] as const
}

export function getActuatorInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActuatorInfoQueryKey>
  >({
    queryKey: getActuatorInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.actuator.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectActuatorInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getActuatorInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActuatorInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiLogoutQueryKey() {
  return ['api', '/api/logout'] as const
}

export function getApiLogoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLogoutQueryKey>
  >({
    queryKey: getApiLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLogoutQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>
          >
        | undefined,
        TError,
        void,
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
    const mutationDefaults = getPostApiLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1AgeRatingsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>,
) {
  return ['api', '/api/v1/age-ratings', args] as const
}

export function getApiV1AgeRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AgeRatingsQueryKey>
  >({
    queryKey: getApiV1AgeRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['age-ratings'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1AgeRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AgeRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AgeRatingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1AnnouncementsQueryKey() {
  return ['api', '/api/v1/announcements'] as const
}

export function getApiV1AnnouncementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnouncementsQueryKey>
  >({
    queryKey: getApiV1AnnouncementsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.announcements.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1Announcements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnouncementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AnnouncementsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPutApiV1Announcements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1AnnouncementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1AuthorsQueryKey(args: InferRequestType<typeof client.api.v1.authors.$get>) {
  return ['api', '/api/v1/authors', args] as const
}

export function getApiV1AuthorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.authors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuthorsQueryKey>
  >({
    queryKey: getApiV1AuthorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.authors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Authors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.authors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AuthorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AuthorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1AuthorsNamesQueryKey(
  args: InferRequestType<typeof client.api.v1.authors.names.$get>,
) {
  return ['api', '/api/v1/authors/names', args] as const
}

export function getApiV1AuthorsNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.authors.names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuthorsNamesQueryKey>
  >({
    queryKey: getApiV1AuthorsNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.authors.names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1AuthorsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.authors.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AuthorsNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AuthorsNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1AuthorsRolesQueryKey() {
  return ['api', '/api/v1/authors/roles'] as const
}

export function getApiV1AuthorsRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuthorsRolesQueryKey>
  >({
    queryKey: getApiV1AuthorsRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.authors.roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1AuthorsRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AuthorsRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AuthorsRolesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1BooksQueryKey(args: InferRequestType<typeof client.api.v1.books.$get>) {
  return ['api', '/api/v1/books', args] as const
}

export function getApiV1BooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.books.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksQueryKey>
  >({
    queryKey: getApiV1BooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Books<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.books.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1BooksDuplicatesQueryKey(
  args: InferRequestType<typeof client.api.v1.books.duplicates.$get>,
) {
  return ['api', '/api/v1/books/duplicates', args] as const
}

export function getApiV1BooksDuplicatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.books.duplicates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksDuplicatesQueryKey>
  >({
    queryKey: getApiV1BooksDuplicatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books.duplicates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksDuplicates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.books.duplicates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BooksDuplicatesQueryKey>
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
      ...getApiV1BooksDuplicatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiV1BooksImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.books.import.$post>,
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
    const mutationDefaults = getPostApiV1BooksImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1BooksLatestQueryKey(
  args: InferRequestType<typeof client.api.v1.books.latest.$get>,
) {
  return ['api', '/api/v1/books/latest', args] as const
}

export function getApiV1BooksLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.books.latest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksLatestQueryKey>
  >({
    queryKey: getApiV1BooksLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books.latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1BooksLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.books.latest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BooksLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BooksLatestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV1BooksList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.books.list.$post>,
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
    const mutationDefaults = getPostApiV1BooksListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApiV1BooksMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.metadata.$patch>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v1.books.metadata.$patch>,
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
    const mutationDefaults = getPatchApiV1BooksMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1BooksOndeckQueryKey(
  args: InferRequestType<typeof client.api.v1.books.ondeck.$get>,
) {
  return ['api', '/api/v1/books/ondeck', args] as const
}

export function getApiV1BooksOndeckQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.books.ondeck.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksOndeckQueryKey>
  >({
    queryKey: getApiV1BooksOndeckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books.ondeck.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1BooksOndeck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.books.ondeck.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BooksOndeckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BooksOndeckQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutApiV1BooksThumbnails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.thumbnails.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.books.thumbnails.$put>,
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
    const mutationDefaults = getPutApiV1BooksThumbnailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId', args] as const
}

export function getApiV1BooksBookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BooksBookIdQueryKey>
  >({
    queryKey: getApiV1BooksBookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BooksBookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BooksBookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV1BooksBookIdAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1BooksBookIdAnalyzeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdFileQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/file', args] as const
}

export function getApiV1BooksBookIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteApiV1BooksBookIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1BooksBookIdFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdFileStarQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/file/*', args] as const
}

export function getApiV1BooksBookIdFileStarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdFileStarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].file['*'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdFileStar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdFileStarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdManifestQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/manifest', args] as const
}

export function getApiV1BooksBookIdManifestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdManifestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].manifest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdManifest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdManifestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdManifestDivinaQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/manifest/divina', args] as const
}

export function getApiV1BooksBookIdManifestDivinaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdManifestDivinaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].manifest.divina.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdManifestDivina<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1BooksBookIdManifestDivinaQueryKey>
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
      ...getApiV1BooksBookIdManifestDivinaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdManifestEpubQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/manifest/epub', args] as const
}

export function getApiV1BooksBookIdManifestEpubQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdManifestEpubQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].manifest.epub.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdManifestEpub<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1BooksBookIdManifestEpubQueryKey>
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
      ...getApiV1BooksBookIdManifestEpubQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdManifestPdfQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/manifest/pdf', args] as const
}

export function getApiV1BooksBookIdManifestPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdManifestPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].manifest.pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdManifestPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1BooksBookIdManifestPdfQueryKey>
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
      ...getApiV1BooksBookIdManifestPdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchApiV1BooksBookIdMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1BooksBookIdMetadataMutationOptions<
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

export function injectPostApiV1BooksBookIdMetadataRefresh<
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
                ReturnType<(typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']>,
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
    const mutationDefaults = getPostApiV1BooksBookIdMetadataRefreshMutationOptions<
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

export function getApiV1BooksBookIdNextQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/next', args] as const
}

export function getApiV1BooksBookIdNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].next.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdNextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdPagesQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/pages', args] as const
}

export function getApiV1BooksBookIdPagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdPagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].pages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdPagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdPagesPageNumberQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber', keyArgs] as const
}

export function getApiV1BooksBookIdPagesPageNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdPagesPageNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].pages[':pageNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdPagesPageNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdPagesPageNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdPagesPageNumberRawQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
  >,
) {
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber/raw', args] as const
}

export function getApiV1BooksBookIdPagesPageNumberRawQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdPagesPageNumberRawQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].pages[':pageNumber'].raw.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdPagesPageNumberRaw<
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
  args: () => InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdPagesPageNumberRawQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdPagesPageNumberThumbnailQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
  >,
) {
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber/thumbnail', args] as const
}

export function getApiV1BooksBookIdPagesPageNumberThumbnailQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdPagesPageNumberThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].pages[':pageNumber'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdPagesPageNumberThumbnail<
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
  args: () => InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdPagesPageNumberThumbnailQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdPositionsQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/positions', args] as const
}

export function getApiV1BooksBookIdPositionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdPositionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].positions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdPositionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdPreviousQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/previous', args] as const
}

export function getApiV1BooksBookIdPreviousQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdPreviousQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].previous.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdPrevious<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdPreviousQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdProgressionQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/progression', args] as const
}

export function getApiV1BooksBookIdProgressionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdProgressionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].progression.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdProgression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdProgressionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApiV1BooksBookIdProgression<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1BooksBookIdProgressionMutationOptions<
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

export function injectDeleteApiV1BooksBookIdReadProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1BooksBookIdReadProgressMutationOptions<
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

export function injectPatchApiV1BooksBookIdReadProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1BooksBookIdReadProgressMutationOptions<
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

export function getApiV1BooksBookIdReadlistsQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/readlists', args] as const
}

export function getApiV1BooksBookIdReadlistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdReadlistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].readlists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdReadlists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdReadlistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdResourceResourceQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/resource/:resource', args] as const
}

export function getApiV1BooksBookIdResourceResourceQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdResourceResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].resource[':resource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdResourceResource<
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
  args: () => InferRequestType<
    (typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdResourceResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdThumbnailQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/thumbnail', args] as const
}

export function getApiV1BooksBookIdThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BooksBookIdThumbnailsQueryKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/thumbnails', args] as const
}

export function getApiV1BooksBookIdThumbnailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdThumbnailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].thumbnails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdThumbnailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiV1BooksBookIdThumbnails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1BooksBookIdThumbnailsMutationOptions<
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

export function getApiV1BooksBookIdThumbnailsThumbnailIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
  >,
) {
  return ['api', '/api/v1/books/:bookId/thumbnails/:thumbnailId', args] as const
}

export function getApiV1BooksBookIdThumbnailsThumbnailIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1BooksBookIdThumbnailsThumbnailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BooksBookIdThumbnailsThumbnailId<
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
  args: () => InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1BooksBookIdThumbnailsThumbnailIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteApiV1BooksBookIdThumbnailsThumbnailId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1BooksBookIdThumbnailsThumbnailIdMutationOptions<
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

export function injectPutApiV1BooksBookIdThumbnailsThumbnailIdSelected<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1BooksBookIdThumbnailsThumbnailIdSelectedMutationOptions<
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

export function getApiV1ClaimQueryKey() {
  return ['api', '/api/v1/claim'] as const
}

export function getApiV1ClaimQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ClaimQueryKey>
  >({
    queryKey: getApiV1ClaimQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.claim.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ClaimQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV1Claim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.claim.$post>,
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
    const mutationDefaults = getPostApiV1ClaimMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApiV1ClientSettingsGlobal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ClientSettingsGlobalMutationOptions<
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

export function injectPatchApiV1ClientSettingsGlobal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1ClientSettingsGlobalMutationOptions<
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

export function getApiV1ClientSettingsGlobalListQueryKey() {
  return ['api', '/api/v1/client-settings/global/list'] as const
}

export function getApiV1ClientSettingsGlobalListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ClientSettingsGlobalListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['client-settings'].global.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ClientSettingsGlobalList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1ClientSettingsGlobalListQueryKey>
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
      ...getApiV1ClientSettingsGlobalListQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteApiV1ClientSettingsUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ClientSettingsUserMutationOptions<
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

export function injectPatchApiV1ClientSettingsUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1ClientSettingsUserMutationOptions<
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

export function getApiV1ClientSettingsUserListQueryKey() {
  return ['api', '/api/v1/client-settings/user/list'] as const
}

export function getApiV1ClientSettingsUserListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ClientSettingsUserListQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['client-settings'].user.list.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ClientSettingsUserList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ClientSettingsUserListQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1CollectionsQueryKey(
  args: InferRequestType<typeof client.api.v1.collections.$get>,
) {
  return ['api', '/api/v1/collections', args] as const
}

export function getApiV1CollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsQueryKey>
  >({
    queryKey: getApiV1CollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Collections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1CollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV1Collections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.collections.$post>,
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
    const mutationDefaults = getPostApiV1CollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1CollectionsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>,
) {
  return ['api', '/api/v1/collections/:id', args] as const
}

export function getApiV1CollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsIdQueryKey>
  >({
    queryKey: getApiV1CollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.collections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CollectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1CollectionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteApiV1CollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1CollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApiV1CollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1CollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1CollectionsIdSeriesQueryKey(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>,
) {
  return ['api', '/api/v1/collections/:id/series', args] as const
}

export function getApiV1CollectionsIdSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CollectionsIdSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.collections[':id'].series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CollectionsIdSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1CollectionsIdSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CollectionsIdThumbnailQueryKey(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/collections/:id/thumbnail', args] as const
}

export function getApiV1CollectionsIdThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CollectionsIdThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.collections[':id'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CollectionsIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1CollectionsIdThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CollectionsIdThumbnailsQueryKey(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>,
) {
  return ['api', '/api/v1/collections/:id/thumbnails', args] as const
}

export function getApiV1CollectionsIdThumbnailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CollectionsIdThumbnailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.collections[':id'].thumbnails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CollectionsIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1CollectionsIdThumbnailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiV1CollectionsIdThumbnails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1CollectionsIdThumbnailsMutationOptions<
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

export function getApiV1CollectionsIdThumbnailsThumbnailIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
) {
  return ['api', '/api/v1/collections/:id/thumbnails/:thumbnailId', args] as const
}

export function getApiV1CollectionsIdThumbnailsThumbnailIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CollectionsIdThumbnailsThumbnailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CollectionsIdThumbnailsThumbnailId<
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
  args: () => InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1CollectionsIdThumbnailsThumbnailIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteApiV1CollectionsIdThumbnailsThumbnailId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1CollectionsIdThumbnailsThumbnailIdMutationOptions<
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

export function injectPutApiV1CollectionsIdThumbnailsThumbnailIdSelected<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1CollectionsIdThumbnailsThumbnailIdSelectedMutationOptions<
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

export function injectPostApiV1Filesystem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.filesystem.$post>,
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
    const mutationDefaults = getPostApiV1FilesystemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1FontsFamiliesQueryKey() {
  return ['api', '/api/v1/fonts/families'] as const
}

export function getApiV1FontsFamiliesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FontsFamiliesQueryKey>
  >({
    queryKey: getApiV1FontsFamiliesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.fonts.families.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1FontsFamilies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FontsFamiliesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1FontsFamiliesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1FontsResourceFontFamilyCssQueryKey(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>,
) {
  return ['api', '/api/v1/fonts/resource/:fontFamily/css', args] as const
}

export function getApiV1FontsResourceFontFamilyCssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1FontsResourceFontFamilyCssQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.fonts.resource[':fontFamily'].css.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1FontsResourceFontFamilyCss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1FontsResourceFontFamilyCssQueryKey>
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
      ...getApiV1FontsResourceFontFamilyCssQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1FontsResourceFontFamilyFontFileQueryKey(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>,
) {
  return ['api', '/api/v1/fonts/resource/:fontFamily/:fontFile', args] as const
}

export function getApiV1FontsResourceFontFamilyFontFileQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1FontsResourceFontFamilyFontFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.fonts.resource[':fontFamily'][':fontFile'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1FontsResourceFontFamilyFontFile<
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
  args: () => InferRequestType<
    (typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1FontsResourceFontFamilyFontFileQueryKey>
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
      ...getApiV1FontsResourceFontFamilyFontFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1GenresQueryKey(args: InferRequestType<typeof client.api.v1.genres.$get>) {
  return ['api', '/api/v1/genres', args] as const
}

export function getApiV1GenresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.genres.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenresQueryKey>
  >({
    queryKey: getApiV1GenresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.genres.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Genres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.genres.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GenresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1HistoryQueryKey(args: InferRequestType<typeof client.api.v1.history.$get>) {
  return ['api', '/api/v1/history', args] as const
}

export function getApiV1HistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryQueryKey>
  >({
    queryKey: getApiV1HistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.history.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1HistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1HistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1LanguagesQueryKey(
  args: InferRequestType<typeof client.api.v1.languages.$get>,
) {
  return ['api', '/api/v1/languages', args] as const
}

export function getApiV1LanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.languages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LanguagesQueryKey>
  >({
    queryKey: getApiV1LanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.languages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.languages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LanguagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1LibrariesQueryKey() {
  return ['api', '/api/v1/libraries'] as const
}

export function getApiV1LibrariesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LibrariesQueryKey>
  >({
    queryKey: getApiV1LibrariesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.libraries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Libraries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LibrariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LibrariesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV1Libraries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.libraries.$post>,
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
    const mutationDefaults = getPostApiV1LibrariesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1LibrariesLibraryIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>,
) {
  return ['api', '/api/v1/libraries/:libraryId', args] as const
}

export function getApiV1LibrariesLibraryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1LibrariesLibraryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.libraries[':libraryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1LibrariesLibraryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1LibrariesLibraryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApiV1LibrariesLibraryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1LibrariesLibraryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApiV1LibrariesLibraryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1LibrariesLibraryIdMutationOptions<
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

export function injectPatchApiV1LibrariesLibraryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1LibrariesLibraryIdMutationOptions<
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

export function injectPostApiV1LibrariesLibraryIdAnalyze<
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
                ReturnType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>,
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
    const mutationDefaults = getPostApiV1LibrariesLibraryIdAnalyzeMutationOptions<
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

export function injectPostApiV1LibrariesLibraryIdEmptyTrash<
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
                ReturnType<(typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']>,
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
    const mutationDefaults = getPostApiV1LibrariesLibraryIdEmptyTrashMutationOptions<
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

export function injectPostApiV1LibrariesLibraryIdMetadataRefresh<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1LibrariesLibraryIdMetadataRefreshMutationOptions<
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

export function injectPostApiV1LibrariesLibraryIdScan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1LibrariesLibraryIdScanMutationOptions<
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

export function getApiV1LoginSetCookieQueryKey() {
  return ['api', '/api/v1/login/set-cookie'] as const
}

export function getApiV1LoginSetCookieQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiV1LoginSetCookieQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.login['set-cookie'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1LoginSetCookie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1LoginSetCookieQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1Oauth2ProvidersQueryKey() {
  return ['api', '/api/v1/oauth2/providers'] as const
}

export function getApiV1Oauth2ProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Oauth2ProvidersQueryKey>
  >({
    queryKey: getApiV1Oauth2ProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.oauth2.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1Oauth2Providers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1Oauth2ProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1Oauth2ProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1PageHashesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>,
) {
  return ['api', '/api/v1/page-hashes', args] as const
}

export function getApiV1PageHashesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PageHashesQueryKey>
  >({
    queryKey: getApiV1PageHashesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['page-hashes'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1PageHashes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PageHashesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PageHashesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutApiV1PageHashes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['page-hashes']['$put']>,
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
    const mutationDefaults = getPutApiV1PageHashesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1PageHashesUnknownQueryKey(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>,
) {
  return ['api', '/api/v1/page-hashes/unknown', args] as const
}

export function getApiV1PageHashesUnknownQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1PageHashesUnknownQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['page-hashes'].unknown.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1PageHashesUnknown<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1PageHashesUnknownQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1PageHashesUnknownPageHashThumbnailQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
  >,
) {
  return ['api', '/api/v1/page-hashes/unknown/:pageHash/thumbnail', args] as const
}

export function getApiV1PageHashesUnknownPageHashThumbnailQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1PageHashesUnknownPageHashThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['page-hashes'].unknown[':pageHash'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1PageHashesUnknownPageHashThumbnail<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1PageHashesUnknownPageHashThumbnailQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1PageHashesPageHashQueryKey(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>,
) {
  return ['api', '/api/v1/page-hashes/:pageHash', args] as const
}

export function getApiV1PageHashesPageHashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1PageHashesPageHashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['page-hashes'][':pageHash'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1PageHashesPageHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1PageHashesPageHashQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiV1PageHashesPageHashDeleteAll<
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
                  (typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']>,
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
    const mutationDefaults = getPostApiV1PageHashesPageHashDeleteAllMutationOptions<
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

export function injectPostApiV1PageHashesPageHashDeleteMatch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1PageHashesPageHashDeleteMatchMutationOptions<
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

export function getApiV1PageHashesPageHashThumbnailQueryKey(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/page-hashes/:pageHash/thumbnail', args] as const
}

export function getApiV1PageHashesPageHashThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1PageHashesPageHashThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['page-hashes'][':pageHash'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1PageHashesPageHashThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1PageHashesPageHashThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1PublishersQueryKey(
  args: InferRequestType<typeof client.api.v1.publishers.$get>,
) {
  return ['api', '/api/v1/publishers', args] as const
}

export function getApiV1PublishersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.publishers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublishersQueryKey>
  >({
    queryKey: getApiV1PublishersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.publishers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Publishers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.publishers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PublishersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PublishersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1ReadlistsQueryKey(
  args: InferRequestType<typeof client.api.v1.readlists.$get>,
) {
  return ['api', '/api/v1/readlists', args] as const
}

export function getApiV1ReadlistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.readlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsQueryKey>
  >({
    queryKey: getApiV1ReadlistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Readlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.readlists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReadlistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ReadlistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV1Readlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.readlists.$post>,
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
    const mutationDefaults = getPostApiV1ReadlistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostApiV1ReadlistsMatchComicrack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ReadlistsMatchComicrackMutationOptions<
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

export function getApiV1ReadlistsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id', args] as const
}

export function getApiV1ReadlistsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReadlistsIdQueryKey>
  >({
    queryKey: getApiV1ReadlistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReadlistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ReadlistsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteApiV1ReadlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ReadlistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApiV1ReadlistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1ReadlistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ReadlistsIdBooksQueryKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id/books', args] as const
}

export function getApiV1ReadlistsIdBooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ReadlistsIdBooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id'].books.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsIdBooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1ReadlistsIdBooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ReadlistsIdBooksBookIdNextQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
  >,
) {
  return ['api', '/api/v1/readlists/:id/books/:bookId/next', args] as const
}

export function getApiV1ReadlistsIdBooksBookIdNextQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ReadlistsIdBooksBookIdNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id'].books[':bookId'].next.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsIdBooksBookIdNext<
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
  args: () => InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1ReadlistsIdBooksBookIdNextQueryKey>
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
      ...getApiV1ReadlistsIdBooksBookIdNextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ReadlistsIdBooksBookIdPreviousQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
  >,
) {
  return ['api', '/api/v1/readlists/:id/books/:bookId/previous', args] as const
}

export function getApiV1ReadlistsIdBooksBookIdPreviousQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ReadlistsIdBooksBookIdPreviousQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id'].books[':bookId'].previous.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsIdBooksBookIdPrevious<
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
  args: () => InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1ReadlistsIdBooksBookIdPreviousQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ReadlistsIdFileQueryKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id/file', args] as const
}

export function getApiV1ReadlistsIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ReadlistsIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1ReadlistsIdFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ReadlistsIdReadProgressTachiyomiQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
  >,
) {
  return ['api', '/api/v1/readlists/:id/read-progress/tachiyomi', args] as const
}

export function getApiV1ReadlistsIdReadProgressTachiyomiQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ReadlistsIdReadProgressTachiyomiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id']['read-progress'].tachiyomi.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsIdReadProgressTachiyomi<
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
  args: () => InferRequestType<
    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1ReadlistsIdReadProgressTachiyomiQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApiV1ReadlistsIdReadProgressTachiyomi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1ReadlistsIdReadProgressTachiyomiMutationOptions<
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

export function getApiV1ReadlistsIdThumbnailQueryKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id/thumbnail', args] as const
}

export function getApiV1ReadlistsIdThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ReadlistsIdThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1ReadlistsIdThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ReadlistsIdThumbnailsQueryKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id/thumbnails', args] as const
}

export function getApiV1ReadlistsIdThumbnailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ReadlistsIdThumbnailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id'].thumbnails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1ReadlistsIdThumbnailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiV1ReadlistsIdThumbnails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ReadlistsIdThumbnailsMutationOptions<
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

export function getApiV1ReadlistsIdThumbnailsThumbnailIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
) {
  return ['api', '/api/v1/readlists/:id/thumbnails/:thumbnailId', args] as const
}

export function getApiV1ReadlistsIdThumbnailsThumbnailIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ReadlistsIdThumbnailsThumbnailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ReadlistsIdThumbnailsThumbnailId<
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
  args: () => InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1ReadlistsIdThumbnailsThumbnailIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteApiV1ReadlistsIdThumbnailsThumbnailId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ReadlistsIdThumbnailsThumbnailIdMutationOptions<
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

export function injectPutApiV1ReadlistsIdThumbnailsThumbnailIdSelected<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1ReadlistsIdThumbnailsThumbnailIdSelectedMutationOptions<
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

export function getApiV1ReleasesQueryKey() {
  return ['api', '/api/v1/releases'] as const
}

export function getApiV1ReleasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReleasesQueryKey>
  >({
    queryKey: getApiV1ReleasesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.releases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Releases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReleasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ReleasesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1SeriesQueryKey(args: InferRequestType<typeof client.api.v1.series.$get>) {
  return ['api', '/api/v1/series', args] as const
}

export function getApiV1SeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesQueryKey>
  >({
    queryKey: getApiV1SeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Series<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1SeriesAlphabeticalGroupsQueryKey(
  args: InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>,
) {
  return ['api', '/api/v1/series/alphabetical-groups', args] as const
}

export function getApiV1SeriesAlphabeticalGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesAlphabeticalGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series['alphabetical-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesAlphabeticalGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1SeriesAlphabeticalGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1SeriesLatestQueryKey(
  args: InferRequestType<typeof client.api.v1.series.latest.$get>,
) {
  return ['api', '/api/v1/series/latest', args] as const
}

export function getApiV1SeriesLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.series.latest.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesLatestQueryKey>
  >({
    queryKey: getApiV1SeriesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series.latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1SeriesLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.series.latest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SeriesLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SeriesLatestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV1SeriesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.list.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.series.list.$post>,
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
    const mutationDefaults = getPostApiV1SeriesListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostApiV1SeriesListAlphabeticalGroups<
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
                ReturnType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>,
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
    const mutationDefaults = getPostApiV1SeriesListAlphabeticalGroupsMutationOptions<
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

export function getApiV1SeriesNewQueryKey(
  args: InferRequestType<typeof client.api.v1.series.new.$get>,
) {
  return ['api', '/api/v1/series/new', args] as const
}

export function getApiV1SeriesNewQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.series.new.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesNewQueryKey>
  >({
    queryKey: getApiV1SeriesNewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series.new.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1SeriesNew<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.series.new.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SeriesNewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SeriesNewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1SeriesReleaseDatesQueryKey(
  args: InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>,
) {
  return ['api', '/api/v1/series/release-dates', args] as const
}

export function getApiV1SeriesReleaseDatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesReleaseDatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series['release-dates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesReleaseDates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1SeriesReleaseDatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1SeriesUpdatedQueryKey(
  args: InferRequestType<typeof client.api.v1.series.updated.$get>,
) {
  return ['api', '/api/v1/series/updated', args] as const
}

export function getApiV1SeriesUpdatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.series.updated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SeriesUpdatedQueryKey>
  >({
    queryKey: getApiV1SeriesUpdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series.updated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1SeriesUpdated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.series.updated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SeriesUpdatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SeriesUpdatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1SeriesSeriesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId', args] as const
}

export function getApiV1SeriesSeriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesSeriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series[':seriesId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SeriesSeriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV1SeriesSeriesIdAnalyze<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1SeriesSeriesIdAnalyzeMutationOptions<
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

export function getApiV1SeriesSeriesIdBooksQueryKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/books', args] as const
}

export function getApiV1SeriesSeriesIdBooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesSeriesIdBooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series[':seriesId'].books.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesSeriesIdBooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1SeriesSeriesIdBooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1SeriesSeriesIdCollectionsQueryKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/collections', args] as const
}

export function getApiV1SeriesSeriesIdCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesSeriesIdCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series[':seriesId'].collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesSeriesIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1SeriesSeriesIdCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1SeriesSeriesIdFileQueryKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/file', args] as const
}

export function getApiV1SeriesSeriesIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesSeriesIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series[':seriesId'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesSeriesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1SeriesSeriesIdFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteApiV1SeriesSeriesIdFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1SeriesSeriesIdFileMutationOptions<
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

export function injectPatchApiV1SeriesSeriesIdMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1SeriesSeriesIdMetadataMutationOptions<
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

export function injectPostApiV1SeriesSeriesIdMetadataRefresh<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1SeriesSeriesIdMetadataRefreshMutationOptions<
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

export function injectPostApiV1SeriesSeriesIdReadProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1SeriesSeriesIdReadProgressMutationOptions<
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

export function injectDeleteApiV1SeriesSeriesIdReadProgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1SeriesSeriesIdReadProgressMutationOptions<
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

export function getApiV1SeriesSeriesIdThumbnailQueryKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnail', args] as const
}

export function getApiV1SeriesSeriesIdThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesSeriesIdThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series[':seriesId'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesSeriesIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1SeriesSeriesIdThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1SeriesSeriesIdThumbnailsQueryKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnails', args] as const
}

export function getApiV1SeriesSeriesIdThumbnailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesSeriesIdThumbnailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series[':seriesId'].thumbnails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesSeriesIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1SeriesSeriesIdThumbnailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiV1SeriesSeriesIdThumbnails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1SeriesSeriesIdThumbnailsMutationOptions<
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

export function getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
  >,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnails/:thumbnailId', args] as const
}

export function getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SeriesSeriesIdThumbnailsThumbnailId<
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
  args: () => InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1SeriesSeriesIdThumbnailsThumbnailIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteApiV1SeriesSeriesIdThumbnailsThumbnailId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1SeriesSeriesIdThumbnailsThumbnailIdMutationOptions<
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

export function injectPutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelected<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedMutationOptions<
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

export function getApiV1SettingsQueryKey() {
  return ['api', '/api/v1/settings'] as const
}

export function getApiV1SettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SettingsQueryKey>
  >({
    queryKey: getApiV1SettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchApiV1Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV1SettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1SharingLabelsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>,
) {
  return ['api', '/api/v1/sharing-labels', args] as const
}

export function getApiV1SharingLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SharingLabelsQueryKey>
  >({
    queryKey: getApiV1SharingLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['sharing-labels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SharingLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SharingLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SharingLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteApiV1SyncpointsMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.syncpoints.me.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v1.syncpoints.me.$delete>,
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
    const mutationDefaults = getDeleteApiV1SyncpointsMeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1TagsQueryKey(args: InferRequestType<typeof client.api.v1.tags.$get>) {
  return ['api', '/api/v1/tags', args] as const
}

export function getApiV1TagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsQueryKey>
  >({
    queryKey: getApiV1TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1TagsBookQueryKey(
  args: InferRequestType<typeof client.api.v1.tags.book.$get>,
) {
  return ['api', '/api/v1/tags/book', args] as const
}

export function getApiV1TagsBookQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.tags.book.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsBookQueryKey>
  >({
    queryKey: getApiV1TagsBookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tags.book.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1TagsBook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.tags.book.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagsBookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TagsBookQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1TagsSeriesQueryKey(
  args: InferRequestType<typeof client.api.v1.tags.series.$get>,
) {
  return ['api', '/api/v1/tags/series', args] as const
}

export function getApiV1TagsSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.tags.series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagsSeriesQueryKey>
  >({
    queryKey: getApiV1TagsSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tags.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1TagsSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.tags.series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagsSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TagsSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteApiV1Tasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$delete>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteApiV1TasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostApiV1TransientBooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1TransientBooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostApiV1TransientBooksIdAnalyze<
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
                ReturnType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>,
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
    const mutationDefaults = getPostApiV1TransientBooksIdAnalyzeMutationOptions<
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

export function getApiV1TransientBooksIdPagesPageNumberQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
  >,
) {
  return ['api', '/api/v1/transient-books/:id/pages/:pageNumber', args] as const
}

export function getApiV1TransientBooksIdPagesPageNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1TransientBooksIdPagesPageNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['transient-books'][':id'].pages[':pageNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1TransientBooksIdPagesPageNumber<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV1TransientBooksIdPagesPageNumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2AgeRatingsQueryKey(
  args: InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>,
) {
  return ['api', '/api/v2/age-ratings', args] as const
}

export function getApiV2AgeRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AgeRatingsQueryKey>
  >({
    queryKey: getApiV2AgeRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['age-ratings'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2AgeRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AgeRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AgeRatingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2AuthorsQueryKey(args: InferRequestType<typeof client.api.v2.authors.$get>) {
  return ['api', '/api/v2/authors', args] as const
}

export function getApiV2AuthorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.authors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorsQueryKey>
  >({
    queryKey: getApiV2AuthorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.authors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2Authors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.authors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AuthorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2AuthorsNamesQueryKey(
  args: InferRequestType<typeof client.api.v2.authors.names.$get>,
) {
  return ['api', '/api/v2/authors/names', args] as const
}

export function getApiV2AuthorsNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.authors.names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorsNamesQueryKey>
  >({
    queryKey: getApiV2AuthorsNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.authors.names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2AuthorsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.authors.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthorsNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AuthorsNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2AuthorsRolesQueryKey(
  args: InferRequestType<typeof client.api.v2.authors.roles.$get>,
) {
  return ['api', '/api/v2/authors/roles', args] as const
}

export function getApiV2AuthorsRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.authors.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AuthorsRolesQueryKey>
  >({
    queryKey: getApiV2AuthorsRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.authors.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2AuthorsRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.authors.roles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AuthorsRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AuthorsRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2GenresQueryKey(args: InferRequestType<typeof client.api.v2.genres.$get>) {
  return ['api', '/api/v2/genres', args] as const
}

export function getApiV2GenresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.genres.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GenresQueryKey>
  >({
    queryKey: getApiV2GenresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.genres.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2Genres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.genres.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2GenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2GenresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2LanguagesQueryKey(
  args: InferRequestType<typeof client.api.v2.languages.$get>,
) {
  return ['api', '/api/v2/languages', args] as const
}

export function getApiV2LanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.languages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2LanguagesQueryKey>
  >({
    queryKey: getApiV2LanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.languages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2Languages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.languages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2LanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2LanguagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2PublishersQueryKey(
  args: InferRequestType<typeof client.api.v2.publishers.$get>,
) {
  return ['api', '/api/v2/publishers', args] as const
}

export function getApiV2PublishersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.publishers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PublishersQueryKey>
  >({
    queryKey: getApiV2PublishersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.publishers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2Publishers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.publishers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PublishersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PublishersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2SeriesReleaseYearsQueryKey(
  args: InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>,
) {
  return ['api', '/api/v2/series/release-years', args] as const
}

export function getApiV2SeriesReleaseYearsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2SeriesReleaseYearsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.series['release-years'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2SeriesReleaseYears<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2SeriesReleaseYearsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2SeriesSeriesIdReadProgressTachiyomiQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
  >,
) {
  return ['api', '/api/v2/series/:seriesId/read-progress/tachiyomi', args] as const
}

export function getApiV2SeriesSeriesIdReadProgressTachiyomiQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2SeriesSeriesIdReadProgressTachiyomiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2SeriesSeriesIdReadProgressTachiyomi<
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
  args: () => InferRequestType<
    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2SeriesSeriesIdReadProgressTachiyomiQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApiV2SeriesSeriesIdReadProgressTachiyomi<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV2SeriesSeriesIdReadProgressTachiyomiMutationOptions<
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

export function getApiV2SharingLabelsQueryKey(
  args: InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>,
) {
  return ['api', '/api/v2/sharing-labels', args] as const
}

export function getApiV2SharingLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SharingLabelsQueryKey>
  >({
    queryKey: getApiV2SharingLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['sharing-labels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2SharingLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2SharingLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2SharingLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2TagsQueryKey(args: InferRequestType<typeof client.api.v2.tags.$get>) {
  return ['api', '/api/v2/tags', args] as const
}

export function getApiV2TagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2TagsQueryKey>
  >({
    queryKey: getApiV2TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2TagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2UsersQueryKey() {
  return ['api', '/api/v2/users'] as const
}

export function getApiV2UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersQueryKey>
  >({
    queryKey: getApiV2UsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV2Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v2.users.$post>,
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
    const mutationDefaults = getPostApiV2UsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV2UsersAuthenticationActivityQueryKey(
  args: InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>,
) {
  return ['api', '/api/v2/users/authentication-activity', args] as const
}

export function getApiV2UsersAuthenticationActivityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2UsersAuthenticationActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.users['authentication-activity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2UsersAuthenticationActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2UsersAuthenticationActivityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV2UsersMeQueryKey(
  args: InferRequestType<typeof client.api.v2.users.me.$get>,
) {
  return ['api', '/api/v2/users/me', args] as const
}

export function getApiV2UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.users.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2UsersMeQueryKey>
  >({
    queryKey: getApiV2UsersMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.users.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV2UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.users.me.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2UsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UsersMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV2UsersMeApiKeysQueryKey() {
  return ['api', '/api/v2/users/me/api-keys'] as const
}

export function getApiV2UsersMeApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiV2UsersMeApiKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.users.me['api-keys'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2UsersMeApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2UsersMeApiKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiV2UsersMeApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2UsersMeApiKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApiV2UsersMeApiKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2UsersMeApiKeysKeyIdMutationOptions<
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

export function getApiV2UsersMeAuthenticationActivityQueryKey(
  args: InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>,
) {
  return ['api', '/api/v2/users/me/authentication-activity', args] as const
}

export function getApiV2UsersMeAuthenticationActivityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2UsersMeAuthenticationActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.users.me['authentication-activity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2UsersMeAuthenticationActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV2UsersMeAuthenticationActivityQueryKey>
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
      ...getApiV2UsersMeAuthenticationActivityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchApiV2UsersMePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV2UsersMePasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApiV2UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV2UsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchApiV2UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV2UsersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV2UsersIdAuthenticationActivityLatestQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
  >,
) {
  return ['api', '/api/v2/users/:id/authentication-activity/latest', args] as const
}

export function getApiV2UsersIdAuthenticationActivityLatestQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV2UsersIdAuthenticationActivityLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.users[':id']['authentication-activity'].latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV2UsersIdAuthenticationActivityLatest<
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
  args: () => InferRequestType<
    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV2UsersIdAuthenticationActivityLatestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchApiV2UsersIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV2UsersIdPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV3NotableEntitiesQueryKey(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>,
) {
  return ['api', '/api/v3/notable-entities', args] as const
}

export function getApiV3NotableEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3NotableEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3['notable-entities'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV3NotableEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV3NotableEntitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV3NotableEntitiesKindsQueryKey(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>,
) {
  return ['api', '/api/v3/notable-entities/kinds', args] as const
}

export function getApiV3NotableEntitiesKindsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3NotableEntitiesKindsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3['notable-entities'].kinds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV3NotableEntitiesKinds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV3NotableEntitiesKindsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV3NotableEntitiesNamesQueryKey(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>,
) {
  return ['api', '/api/v3/notable-entities/names', args] as const
}

export function getApiV3NotableEntitiesNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3NotableEntitiesNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3['notable-entities'].names.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV3NotableEntitiesNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiV3NotableEntitiesNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
