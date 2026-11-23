import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActuatorKey() {
  return ['actuator'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getGetActuatorInfoKey() {
  return ['actuator', '/actuator/info'] as const
}

export function useGetActuatorInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActuatorInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actuator.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActuatorInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActuatorInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actuator.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actuator.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLogoutKey() {
  return ['api', '/api/logout'] as const
}

export function useGetApiLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLogoutKey() {
  return ['api', '/api/logout', 'POST'] as const
}

export function usePostApiLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AgeRatingsKey(
  args: InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>,
) {
  return ['api', '/api/v1/age-ratings', args] as const
}

export function useGetApiV1AgeRatings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
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
        ? getGetApiV1AgeRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['age-ratings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AgeRatings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['age-ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
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
        ? getGetApiV1AgeRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['age-ratings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['age-ratings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AnnouncementsKey() {
  return ['api', '/api/v1/announcements'] as const
}

export function useGetApiV1Announcements<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AnnouncementsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.announcements.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Announcements<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AnnouncementsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.announcements.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AnnouncementsKey() {
  return ['api', '/api/v1/announcements', 'PUT'] as const
}

export function usePutApiV1Announcements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$put>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.announcements.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AnnouncementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.announcements.$put> }) =>
        parseResponse(client.api.v1.announcements.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AuthorsKey(args: InferRequestType<typeof client.api.v1.authors.$get>) {
  return ['api', '/api/v1/authors', args] as const
}

export function useGetApiV1Authors<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.authors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AuthorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.authors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Authors<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.authors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AuthorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.authors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AuthorsNamesKey(
  args: InferRequestType<typeof client.api.v1.authors.names.$get>,
) {
  return ['api', '/api/v1/authors/names', args] as const
}

export function useGetApiV1AuthorsNames<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.authors.names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>
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
        ? getGetApiV1AuthorsNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.authors.names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AuthorsNames<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.authors.names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>
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
        ? getGetApiV1AuthorsNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.names.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.authors.names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1AuthorsRolesKey() {
  return ['api', '/api/v1/authors/roles'] as const
}

export function useGetApiV1AuthorsRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AuthorsRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.authors.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AuthorsRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AuthorsRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.authors.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.authors.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksKey(args: InferRequestType<typeof client.api.v1.books.$get>) {
  return ['api', '/api/v1/books', args] as const
}

export function useGetApiV1Books<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.books.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1BooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Books<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.books.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1BooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksDuplicatesKey(
  args: InferRequestType<typeof client.api.v1.books.duplicates.$get>,
) {
  return ['api', '/api/v1/books/duplicates', args] as const
}

export function useGetApiV1BooksDuplicates<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.books.duplicates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
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
        ? getGetApiV1BooksDuplicatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books.duplicates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksDuplicates<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.books.duplicates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
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
        ? getGetApiV1BooksDuplicatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.duplicates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books.duplicates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BooksImportKey() {
  return ['api', '/api/v1/books/import', 'POST'] as const
}

export function usePostApiV1BooksImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.books.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BooksImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.books.import.$post> }) =>
        parseResponse(client.api.v1.books.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BooksLatestKey(
  args: InferRequestType<typeof client.api.v1.books.latest.$get>,
) {
  return ['api', '/api/v1/books/latest', args] as const
}

export function useGetApiV1BooksLatest<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.books.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>
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
        ? getGetApiV1BooksLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksLatest<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.books.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>
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
        ? getGetApiV1BooksLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BooksListKey() {
  return ['api', '/api/v1/books/list', 'POST'] as const
}

export function usePostApiV1BooksList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.books.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BooksListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.books.list.$post> }) =>
        parseResponse(client.api.v1.books.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1BooksMetadataKey() {
  return ['api', '/api/v1/books/metadata', 'PATCH'] as const
}

export function usePatchApiV1BooksMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.metadata.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.books.metadata.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1BooksMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.books.metadata.$patch> },
      ) => parseResponse(client.api.v1.books.metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BooksOndeckKey(
  args: InferRequestType<typeof client.api.v1.books.ondeck.$get>,
) {
  return ['api', '/api/v1/books/ondeck', args] as const
}

export function useGetApiV1BooksOndeck<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.books.ondeck.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>
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
        ? getGetApiV1BooksOndeckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books.ondeck.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksOndeck<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.books.ondeck.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>
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
        ? getGetApiV1BooksOndeckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.ondeck.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books.ondeck.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1BooksThumbnailsKey() {
  return ['api', '/api/v1/books/thumbnails', 'PUT'] as const
}

export function usePutApiV1BooksThumbnails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.books.thumbnails.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.books.thumbnails.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BooksThumbnailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.books.thumbnails.$put> },
      ) => parseResponse(client.api.v1.books.thumbnails.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId', args] as const
}

export function useGetApiV1BooksBookId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
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
        ? getGetApiV1BooksBookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
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
        ? getGetApiV1BooksBookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BooksBookIdAnalyzeKey() {
  return ['api', '/api/v1/books/:bookId/analyze', 'POST'] as const
}

export function usePostApiV1BooksBookIdAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BooksBookIdAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.books)[':bookId']['analyze']['$post']> },
      ) => parseResponse(client.api.v1.books[':bookId'].analyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdFileKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/file', args] as const
}

export function useGetApiV1BooksBookIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
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
        ? getGetApiV1BooksBookIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
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
        ? getGetApiV1BooksBookIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1BooksBookIdFileKey() {
  return ['api', '/api/v1/books/:bookId/file', 'DELETE'] as const
}

export function useDeleteApiV1BooksBookIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BooksBookIdFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['$delete']> },
      ) => parseResponse(client.api.v1.books[':bookId'].file.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdFileStarKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/file/*', args] as const
}

export function useGetApiV1BooksBookIdFileStar<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
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
        ? getGetApiV1BooksBookIdFileStarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].file['*'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdFileStar<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
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
        ? getGetApiV1BooksBookIdFileStarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['file']['*']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].file['*'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdManifestKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/manifest', args] as const
}

export function useGetApiV1BooksBookIdManifest<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
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
        ? getGetApiV1BooksBookIdManifestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].manifest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdManifest<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
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
        ? getGetApiV1BooksBookIdManifestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].manifest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdManifestDivinaKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/manifest/divina', args] as const
}

export function useGetApiV1BooksBookIdManifestDivina<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
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
        ? getGetApiV1BooksBookIdManifestDivinaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].manifest.divina.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdManifestDivina<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
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
        ? getGetApiV1BooksBookIdManifestDivinaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['divina']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].manifest.divina.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdManifestEpubKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/manifest/epub', args] as const
}

export function useGetApiV1BooksBookIdManifestEpub<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>>
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
        ? getGetApiV1BooksBookIdManifestEpubKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].manifest.epub.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdManifestEpub<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>>
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
        ? getGetApiV1BooksBookIdManifestEpubKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['epub']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].manifest.epub.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdManifestPdfKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/manifest/pdf', args] as const
}

export function useGetApiV1BooksBookIdManifestPdf<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>>
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
        ? getGetApiV1BooksBookIdManifestPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].manifest.pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdManifestPdf<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>>
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
        ? getGetApiV1BooksBookIdManifestPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['manifest']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].manifest.pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1BooksBookIdMetadataKey() {
  return ['api', '/api/v1/books/:bookId/metadata', 'PATCH'] as const
}

export function usePatchApiV1BooksBookIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1BooksBookIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['$patch']> },
      ) => parseResponse(client.api.v1.books[':bookId'].metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BooksBookIdMetadataRefreshKey() {
  return ['api', '/api/v1/books/:bookId/metadata/refresh', 'POST'] as const
}

export function usePostApiV1BooksBookIdMetadataRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BooksBookIdMetadataRefreshKey()
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
            (typeof client.api.v1.books)[':bookId']['metadata']['refresh']['$post']
          >
        },
      ) => parseResponse(client.api.v1.books[':bookId'].metadata.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdNextKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/next', args] as const
}

export function useGetApiV1BooksBookIdNext<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
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
        ? getGetApiV1BooksBookIdNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdNext<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
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
        ? getGetApiV1BooksBookIdNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdPagesKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/pages', args] as const
}

export function useGetApiV1BooksBookIdPages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
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
        ? getGetApiV1BooksBookIdPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdPages<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
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
        ? getGetApiV1BooksBookIdPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdPagesPageNumberKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber', keyArgs] as const
}

export function useGetApiV1BooksBookIdPagesPageNumber<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>
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
        ? getGetApiV1BooksBookIdPagesPageNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.books[':bookId'].pages[':pageNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdPagesPageNumber<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>
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
        ? getGetApiV1BooksBookIdPagesPageNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.books[':bookId'].pages[':pageNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdPagesPageNumberRawKey(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
  >,
) {
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber/raw', args] as const
}

export function useGetApiV1BooksBookIdPagesPageNumberRaw<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1BooksBookIdPagesPageNumberRawKey(args)
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
                (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
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
          client.api.v1.books[':bookId'].pages[':pageNumber'].raw.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdPagesPageNumberRaw<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1BooksBookIdPagesPageNumberRawKey(args)
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
                (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['raw']['$get']
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
          client.api.v1.books[':bookId'].pages[':pageNumber'].raw.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdPagesPageNumberThumbnailKey(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
  >,
) {
  return ['api', '/api/v1/books/:bookId/pages/:pageNumber/thumbnail', args] as const
}

export function useGetApiV1BooksBookIdPagesPageNumberThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1BooksBookIdPagesPageNumberThumbnailKey(args)
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
                (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
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
          client.api.v1.books[':bookId'].pages[':pageNumber'].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdPagesPageNumberThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1BooksBookIdPagesPageNumberThumbnailKey(args)
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
                (typeof client.api.v1.books)[':bookId']['pages'][':pageNumber']['thumbnail']['$get']
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
          client.api.v1.books[':bookId'].pages[':pageNumber'].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdPositionsKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/positions', args] as const
}

export function useGetApiV1BooksBookIdPositions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
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
        ? getGetApiV1BooksBookIdPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdPositions<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
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
        ? getGetApiV1BooksBookIdPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['positions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdPreviousKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/previous', args] as const
}

export function useGetApiV1BooksBookIdPrevious<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
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
        ? getGetApiV1BooksBookIdPreviousKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].previous.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdPrevious<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
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
        ? getGetApiV1BooksBookIdPreviousKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['previous']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].previous.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdProgressionKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/progression', args] as const
}

export function useGetApiV1BooksBookIdProgression<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
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
        ? getGetApiV1BooksBookIdProgressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].progression.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdProgression<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
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
        ? getGetApiV1BooksBookIdProgressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].progression.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1BooksBookIdProgressionKey() {
  return ['api', '/api/v1/books/:bookId/progression', 'PUT'] as const
}

export function usePutApiV1BooksBookIdProgression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BooksBookIdProgressionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.books)[':bookId']['progression']['$put']>
        },
      ) => parseResponse(client.api.v1.books[':bookId'].progression.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1BooksBookIdReadProgressKey() {
  return ['api', '/api/v1/books/:bookId/read-progress', 'DELETE'] as const
}

export function useDeleteApiV1BooksBookIdReadProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BooksBookIdReadProgressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$delete']>
        },
      ) =>
        parseResponse(client.api.v1.books[':bookId']['read-progress'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1BooksBookIdReadProgressKey() {
  return ['api', '/api/v1/books/:bookId/read-progress', 'PATCH'] as const
}

export function usePatchApiV1BooksBookIdReadProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1BooksBookIdReadProgressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.books)[':bookId']['read-progress']['$patch']>
        },
      ) =>
        parseResponse(client.api.v1.books[':bookId']['read-progress'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdReadlistsKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/readlists', args] as const
}

export function useGetApiV1BooksBookIdReadlists<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
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
        ? getGetApiV1BooksBookIdReadlistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].readlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdReadlists<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
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
        ? getGetApiV1BooksBookIdReadlistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['readlists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].readlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdResourceResourceKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/resource/:resource', args] as const
}

export function useGetApiV1BooksBookIdResourceResource<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
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
        ? getGetApiV1BooksBookIdResourceResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.books[':bookId'].resource[':resource'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdResourceResource<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
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
        ? getGetApiV1BooksBookIdResourceResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.books)[':bookId']['resource'][':resource']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.books[':bookId'].resource[':resource'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdThumbnailKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/thumbnail', args] as const
}

export function useGetApiV1BooksBookIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
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
        ? getGetApiV1BooksBookIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
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
        ? getGetApiV1BooksBookIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.books[':bookId'].thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdThumbnailsKey(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>,
) {
  return ['api', '/api/v1/books/:bookId/thumbnails', args] as const
}

export function useGetApiV1BooksBookIdThumbnails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
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
        ? getGetApiV1BooksBookIdThumbnailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].thumbnails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdThumbnails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
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
        ? getGetApiV1BooksBookIdThumbnailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.books[':bookId'].thumbnails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BooksBookIdThumbnailsKey() {
  return ['api', '/api/v1/books/:bookId/thumbnails', 'POST'] as const
}

export function usePostApiV1BooksBookIdThumbnails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BooksBookIdThumbnailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.books)[':bookId']['thumbnails']['$post']>
        },
      ) => parseResponse(client.api.v1.books[':bookId'].thumbnails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BooksBookIdThumbnailsThumbnailIdKey(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
  >,
) {
  return ['api', '/api/v1/books/:bookId/thumbnails/:thumbnailId', args] as const
}

export function useGetApiV1BooksBookIdThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1BooksBookIdThumbnailsThumbnailIdKey(args)
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
                (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
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
          client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BooksBookIdThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1BooksBookIdThumbnailsThumbnailIdKey(args)
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
                (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$get']
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
          client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1BooksBookIdThumbnailsThumbnailIdKey() {
  return ['api', '/api/v1/books/:bookId/thumbnails/:thumbnailId', 'DELETE'] as const
}

export function useDeleteApiV1BooksBookIdThumbnailsThumbnailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BooksBookIdThumbnailsThumbnailIdKey()
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
            (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1BooksBookIdThumbnailsThumbnailIdSelectedKey() {
  return ['api', '/api/v1/books/:bookId/thumbnails/:thumbnailId/selected', 'PUT'] as const
}

export function usePutApiV1BooksBookIdThumbnailsThumbnailIdSelected<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['selected']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BooksBookIdThumbnailsThumbnailIdSelectedKey()
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
            (typeof client.api.v1.books)[':bookId']['thumbnails'][':thumbnailId']['selected']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.books[':bookId'].thumbnails[':thumbnailId'].selected.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClaimKey() {
  return ['api', '/api/v1/claim'] as const
}

export function useGetApiV1Claim<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ClaimKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.claim.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Claim<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ClaimKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.claim.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ClaimKey() {
  return ['api', '/api/v1/claim', 'POST'] as const
}

export function usePostApiV1Claim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.claim.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.claim.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.claim.$post> }) =>
        parseResponse(client.api.v1.claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1ClientSettingsGlobalKey() {
  return ['api', '/api/v1/client-settings/global', 'DELETE'] as const
}

export function useDeleteApiV1ClientSettingsGlobal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['client-settings']['global']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ClientSettingsGlobalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1)['client-settings']['global']['$delete']>
        },
      ) => parseResponse(client.api.v1['client-settings'].global.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1ClientSettingsGlobalKey() {
  return ['api', '/api/v1/client-settings/global', 'PATCH'] as const
}

export function usePatchApiV1ClientSettingsGlobal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['client-settings']['global']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1ClientSettingsGlobalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['client-settings']['global']['$patch']> },
      ) => parseResponse(client.api.v1['client-settings'].global.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClientSettingsGlobalListKey() {
  return ['api', '/api/v1/client-settings/global/list'] as const
}

export function useGetApiV1ClientSettingsGlobalList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClientSettingsGlobalListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['client-settings'].global.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientSettingsGlobalList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClientSettingsGlobalListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['global']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['client-settings'].global.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1ClientSettingsUserKey() {
  return ['api', '/api/v1/client-settings/user', 'DELETE'] as const
}

export function useDeleteApiV1ClientSettingsUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['client-settings']['user']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ClientSettingsUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['client-settings']['user']['$delete']> },
      ) => parseResponse(client.api.v1['client-settings'].user.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1ClientSettingsUserKey() {
  return ['api', '/api/v1/client-settings/user', 'PATCH'] as const
}

export function usePatchApiV1ClientSettingsUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['client-settings']['user']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1ClientSettingsUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['client-settings']['user']['$patch']> },
      ) => parseResponse(client.api.v1['client-settings'].user.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ClientSettingsUserListKey() {
  return ['api', '/api/v1/client-settings/user/list'] as const
}

export function useGetApiV1ClientSettingsUserList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClientSettingsUserListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['client-settings'].user.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClientSettingsUserList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1ClientSettingsUserListKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['client-settings']['user']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['client-settings'].user.list.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CollectionsKey(
  args: InferRequestType<typeof client.api.v1.collections.$get>,
) {
  return ['api', '/api/v1/collections', args] as const
}

export function useGetApiV1Collections<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
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
        ? getGetApiV1CollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Collections<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
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
        ? getGetApiV1CollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CollectionsKey() {
  return ['api', '/api/v1/collections', 'POST'] as const
}

export function usePostApiV1Collections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.collections.$post> }) =>
        parseResponse(client.api.v1.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CollectionsIdKey(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>,
) {
  return ['api', '/api/v1/collections/:id', args] as const
}

export function useGetApiV1CollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>
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
        ? getGetApiV1CollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>
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
        ? getGetApiV1CollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1CollectionsIdKey() {
  return ['api', '/api/v1/collections/:id', 'DELETE'] as const
}

export function useDeleteApiV1CollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.collections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1CollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.collections)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.collections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1CollectionsIdKey() {
  return ['api', '/api/v1/collections/:id', 'PATCH'] as const
}

export function usePatchApiV1CollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.collections)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1CollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.collections)[':id']['$patch']> },
      ) => parseResponse(client.api.v1.collections[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CollectionsIdSeriesKey(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>,
) {
  return ['api', '/api/v1/collections/:id/series', args] as const
}

export function useGetApiV1CollectionsIdSeries<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
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
        ? getGetApiV1CollectionsIdSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.collections[':id'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CollectionsIdSeries<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['series']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
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
        ? getGetApiV1CollectionsIdSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['series']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.collections[':id'].series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CollectionsIdThumbnailKey(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/collections/:id/thumbnail', args] as const
}

export function useGetApiV1CollectionsIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
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
        ? getGetApiV1CollectionsIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.collections[':id'].thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CollectionsIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
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
        ? getGetApiV1CollectionsIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.collections[':id'].thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CollectionsIdThumbnailsKey(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>,
) {
  return ['api', '/api/v1/collections/:id/thumbnails', args] as const
}

export function useGetApiV1CollectionsIdThumbnails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
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
        ? getGetApiV1CollectionsIdThumbnailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.collections[':id'].thumbnails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CollectionsIdThumbnails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
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
        ? getGetApiV1CollectionsIdThumbnailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.collections[':id'].thumbnails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CollectionsIdThumbnailsKey() {
  return ['api', '/api/v1/collections/:id/thumbnails', 'POST'] as const
}

export function usePostApiV1CollectionsIdThumbnails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CollectionsIdThumbnailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.collections)[':id']['thumbnails']['$post']>
        },
      ) => parseResponse(client.api.v1.collections[':id'].thumbnails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CollectionsIdThumbnailsThumbnailIdKey(
  args: InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
) {
  return ['api', '/api/v1/collections/:id/thumbnails/:thumbnailId', args] as const
}

export function useGetApiV1CollectionsIdThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1CollectionsIdThumbnailsThumbnailIdKey(args)
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
                (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
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
          client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CollectionsIdThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1CollectionsIdThumbnailsThumbnailIdKey(args)
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
                (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$get']
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
          client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1CollectionsIdThumbnailsThumbnailIdKey() {
  return ['api', '/api/v1/collections/:id/thumbnails/:thumbnailId', 'DELETE'] as const
}

export function useDeleteApiV1CollectionsIdThumbnailsThumbnailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1CollectionsIdThumbnailsThumbnailIdKey()
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
            (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.collections[':id'].thumbnails[':thumbnailId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1CollectionsIdThumbnailsThumbnailIdSelectedKey() {
  return ['api', '/api/v1/collections/:id/thumbnails/:thumbnailId/selected', 'PUT'] as const
}

export function usePutApiV1CollectionsIdThumbnailsThumbnailIdSelected<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1CollectionsIdThumbnailsThumbnailIdSelectedKey()
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
            (typeof client.api.v1.collections)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.collections[':id'].thumbnails[':thumbnailId'].selected.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1FilesystemKey() {
  return ['api', '/api/v1/filesystem', 'POST'] as const
}

export function usePostApiV1Filesystem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filesystem.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.filesystem.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1FilesystemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.filesystem.$post> }) =>
        parseResponse(client.api.v1.filesystem.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FontsFamiliesKey() {
  return ['api', '/api/v1/fonts/families'] as const
}

export function useGetApiV1FontsFamilies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1FontsFamiliesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.fonts.families.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FontsFamilies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1FontsFamiliesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.fonts.families.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.fonts.families.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1FontsResourceFontFamilyCssKey(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>,
) {
  return ['api', '/api/v1/fonts/resource/:fontFamily/css', args] as const
}

export function useGetApiV1FontsResourceFontFamilyCss<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>>
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
        ? getGetApiV1FontsResourceFontFamilyCssKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.fonts.resource[':fontFamily'].css.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FontsResourceFontFamilyCss<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>>
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
        ? getGetApiV1FontsResourceFontFamilyCssKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily']['css']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.fonts.resource[':fontFamily'].css.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1FontsResourceFontFamilyFontFileKey(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>,
) {
  return ['api', '/api/v1/fonts/resource/:fontFamily/:fontFile', args] as const
}

export function useGetApiV1FontsResourceFontFamilyFontFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
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
        ? getGetApiV1FontsResourceFontFamilyFontFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.fonts.resource[':fontFamily'][':fontFile'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FontsResourceFontFamilyFontFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
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
        ? getGetApiV1FontsResourceFontFamilyFontFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.fonts.resource)[':fontFamily'][':fontFile']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.fonts.resource[':fontFamily'][':fontFile'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1GenresKey(args: InferRequestType<typeof client.api.v1.genres.$get>) {
  return ['api', '/api/v1/genres', args] as const
}

export function useGetApiV1Genres<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1GenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.genres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Genres<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1GenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.genres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.genres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1HistoryKey(args: InferRequestType<typeof client.api.v1.history.$get>) {
  return ['api', '/api/v1/history', args] as const
}

export function useGetApiV1History<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1HistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1History<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1HistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LanguagesKey(
  args: InferRequestType<typeof client.api.v1.languages.$get>,
) {
  return ['api', '/api/v1/languages', args] as const
}

export function useGetApiV1Languages<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Languages<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LibrariesKey() {
  return ['api', '/api/v1/libraries'] as const
}

export function useGetApiV1Libraries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LibrariesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.libraries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Libraries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1LibrariesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.libraries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1LibrariesKey() {
  return ['api', '/api/v1/libraries', 'POST'] as const
}

export function usePostApiV1Libraries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.libraries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.libraries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LibrariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.libraries.$post> }) =>
        parseResponse(client.api.v1.libraries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LibrariesLibraryIdKey(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>,
) {
  return ['api', '/api/v1/libraries/:libraryId', args] as const
}

export function useGetApiV1LibrariesLibraryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
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
        ? getGetApiV1LibrariesLibraryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.libraries[':libraryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LibrariesLibraryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
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
        ? getGetApiV1LibrariesLibraryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.libraries[':libraryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1LibrariesLibraryIdKey() {
  return ['api', '/api/v1/libraries/:libraryId', 'PUT'] as const
}

export function usePutApiV1LibrariesLibraryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1LibrariesLibraryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$put']> },
      ) => parseResponse(client.api.v1.libraries[':libraryId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1LibrariesLibraryIdKey() {
  return ['api', '/api/v1/libraries/:libraryId', 'DELETE'] as const
}

export function useDeleteApiV1LibrariesLibraryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1LibrariesLibraryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$delete']> },
      ) => parseResponse(client.api.v1.libraries[':libraryId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1LibrariesLibraryIdKey() {
  return ['api', '/api/v1/libraries/:libraryId', 'PATCH'] as const
}

export function usePatchApiV1LibrariesLibraryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1LibrariesLibraryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['$patch']> },
      ) => parseResponse(client.api.v1.libraries[':libraryId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LibrariesLibraryIdAnalyzeKey() {
  return ['api', '/api/v1/libraries/:libraryId/analyze', 'POST'] as const
}

export function usePostApiV1LibrariesLibraryIdAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LibrariesLibraryIdAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['analyze']['$post']>
        },
      ) => parseResponse(client.api.v1.libraries[':libraryId'].analyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LibrariesLibraryIdEmptyTrashKey() {
  return ['api', '/api/v1/libraries/:libraryId/empty-trash', 'POST'] as const
}

export function usePostApiV1LibrariesLibraryIdEmptyTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LibrariesLibraryIdEmptyTrashKey()
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
            (typeof client.api.v1.libraries)[':libraryId']['empty-trash']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.libraries[':libraryId']['empty-trash'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LibrariesLibraryIdMetadataRefreshKey() {
  return ['api', '/api/v1/libraries/:libraryId/metadata/refresh', 'POST'] as const
}

export function usePostApiV1LibrariesLibraryIdMetadataRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['metadata']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LibrariesLibraryIdMetadataRefreshKey()
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
            (typeof client.api.v1.libraries)[':libraryId']['metadata']['refresh']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.libraries[':libraryId'].metadata.refresh.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LibrariesLibraryIdScanKey() {
  return ['api', '/api/v1/libraries/:libraryId/scan', 'POST'] as const
}

export function usePostApiV1LibrariesLibraryIdScan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LibrariesLibraryIdScanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.libraries)[':libraryId']['scan']['$post']>
        },
      ) => parseResponse(client.api.v1.libraries[':libraryId'].scan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1LoginSetCookieKey() {
  return ['api', '/api/v1/login/set-cookie'] as const
}

export function useGetApiV1LoginSetCookie<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1LoginSetCookieKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.login['set-cookie'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1LoginSetCookie<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1LoginSetCookieKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.login)['set-cookie']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.login['set-cookie'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1Oauth2ProvidersKey() {
  return ['api', '/api/v1/oauth2/providers'] as const
}

export function useGetApiV1Oauth2Providers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1Oauth2ProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.oauth2.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Oauth2Providers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1Oauth2ProvidersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.oauth2.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.oauth2.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PageHashesKey(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>,
) {
  return ['api', '/api/v1/page-hashes', args] as const
}

export function useGetApiV1PageHashes<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
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
        ? getGetApiV1PageHashesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['page-hashes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PageHashes<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
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
        ? getGetApiV1PageHashesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['page-hashes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PageHashesKey() {
  return ['api', '/api/v1/page-hashes', 'PUT'] as const
}

export function usePutApiV1PageHashes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['page-hashes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PageHashesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['page-hashes']['$put']> },
      ) => parseResponse(client.api.v1['page-hashes'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PageHashesUnknownKey(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>,
) {
  return ['api', '/api/v1/page-hashes/unknown', args] as const
}

export function useGetApiV1PageHashesUnknown<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
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
        ? getGetApiV1PageHashesUnknownKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['page-hashes'].unknown.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PageHashesUnknown<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
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
        ? getGetApiV1PageHashesUnknownKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['page-hashes']['unknown']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['page-hashes'].unknown.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PageHashesUnknownPageHashThumbnailKey(
  args: InferRequestType<
    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
  >,
) {
  return ['api', '/api/v1/page-hashes/unknown/:pageHash/thumbnail', args] as const
}

export function useGetApiV1PageHashesUnknownPageHashThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1PageHashesUnknownPageHashThumbnailKey(args)
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
                (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
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
          client.api.v1['page-hashes'].unknown[':pageHash'].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PageHashesUnknownPageHashThumbnail<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1PageHashesUnknownPageHashThumbnailKey(args)
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
                (typeof client.api.v1)['page-hashes']['unknown'][':pageHash']['thumbnail']['$get']
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
          client.api.v1['page-hashes'].unknown[':pageHash'].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PageHashesPageHashKey(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>,
) {
  return ['api', '/api/v1/page-hashes/:pageHash', args] as const
}

export function useGetApiV1PageHashesPageHash<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
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
        ? getGetApiV1PageHashesPageHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['page-hashes'][':pageHash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PageHashesPageHash<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
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
        ? getGetApiV1PageHashesPageHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['page-hashes'][':pageHash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PageHashesPageHashDeleteAllKey() {
  return ['api', '/api/v1/page-hashes/:pageHash/delete-all', 'POST'] as const
}

export function usePostApiV1PageHashesPageHashDeleteAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PageHashesPageHashDeleteAllKey()
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
            (typeof client.api.v1)['page-hashes'][':pageHash']['delete-all']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['page-hashes'][':pageHash']['delete-all'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PageHashesPageHashDeleteMatchKey() {
  return ['api', '/api/v1/page-hashes/:pageHash/delete-match', 'POST'] as const
}

export function usePostApiV1PageHashesPageHashDeleteMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['delete-match']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PageHashesPageHashDeleteMatchKey()
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
            (typeof client.api.v1)['page-hashes'][':pageHash']['delete-match']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['page-hashes'][':pageHash']['delete-match'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PageHashesPageHashThumbnailKey(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/page-hashes/:pageHash/thumbnail', args] as const
}

export function useGetApiV1PageHashesPageHashThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>
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
        ? getGetApiV1PageHashesPageHashThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['page-hashes'][':pageHash'].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PageHashesPageHashThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>
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
        ? getGetApiV1PageHashesPageHashThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['page-hashes'][':pageHash']['thumbnail']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['page-hashes'][':pageHash'].thumbnail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PublishersKey(
  args: InferRequestType<typeof client.api.v1.publishers.$get>,
) {
  return ['api', '/api/v1/publishers', args] as const
}

export function useGetApiV1Publishers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.publishers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
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
        ? getGetApiV1PublishersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.publishers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Publishers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.publishers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
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
        ? getGetApiV1PublishersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.publishers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.publishers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ReadlistsKey(
  args: InferRequestType<typeof client.api.v1.readlists.$get>,
) {
  return ['api', '/api/v1/readlists', args] as const
}

export function useGetApiV1Readlists<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.readlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ReadlistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Readlists<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.readlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ReadlistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ReadlistsKey() {
  return ['api', '/api/v1/readlists', 'POST'] as const
}

export function usePostApiV1Readlists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.readlists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.readlists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReadlistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.readlists.$post> }) =>
        parseResponse(client.api.v1.readlists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1ReadlistsMatchComicrackKey() {
  return ['api', '/api/v1/readlists/match/comicrack', 'POST'] as const
}

export function usePostApiV1ReadlistsMatchComicrack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.readlists.match.comicrack.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.readlists.match.comicrack.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReadlistsMatchComicrackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.readlists.match.comicrack.$post> },
      ) => parseResponse(client.api.v1.readlists.match.comicrack.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id', args] as const
}

export function useGetApiV1ReadlistsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
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
        ? getGetApiV1ReadlistsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
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
        ? getGetApiV1ReadlistsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1ReadlistsIdKey() {
  return ['api', '/api/v1/readlists/:id', 'DELETE'] as const
}

export function useDeleteApiV1ReadlistsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.readlists)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ReadlistsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.readlists)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.readlists[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1ReadlistsIdKey() {
  return ['api', '/api/v1/readlists/:id', 'PATCH'] as const
}

export function usePatchApiV1ReadlistsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.readlists)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1ReadlistsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.readlists)[':id']['$patch']> },
      ) => parseResponse(client.api.v1.readlists[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdBooksKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id/books', args] as const
}

export function useGetApiV1ReadlistsIdBooks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
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
        ? getGetApiV1ReadlistsIdBooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists[':id'].books.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsIdBooks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['books']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
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
        ? getGetApiV1ReadlistsIdBooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['books']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists[':id'].books.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdBooksBookIdNextKey(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
  >,
) {
  return ['api', '/api/v1/readlists/:id/books/:bookId/next', args] as const
}

export function useGetApiV1ReadlistsIdBooksBookIdNext<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1ReadlistsIdBooksBookIdNextKey(args)
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
                (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
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
          client.api.v1.readlists[':id'].books[':bookId'].next.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsIdBooksBookIdNext<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1ReadlistsIdBooksBookIdNextKey(args)
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
                (typeof client.api.v1.readlists)[':id']['books'][':bookId']['next']['$get']
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
          client.api.v1.readlists[':id'].books[':bookId'].next.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdBooksBookIdPreviousKey(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
  >,
) {
  return ['api', '/api/v1/readlists/:id/books/:bookId/previous', args] as const
}

export function useGetApiV1ReadlistsIdBooksBookIdPrevious<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1ReadlistsIdBooksBookIdPreviousKey(args)
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
                (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
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
          client.api.v1.readlists[':id'].books[':bookId'].previous.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsIdBooksBookIdPrevious<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1ReadlistsIdBooksBookIdPreviousKey(args)
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
                (typeof client.api.v1.readlists)[':id']['books'][':bookId']['previous']['$get']
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
          client.api.v1.readlists[':id'].books[':bookId'].previous.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdFileKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id/file', args] as const
}

export function useGetApiV1ReadlistsIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
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
        ? getGetApiV1ReadlistsIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
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
        ? getGetApiV1ReadlistsIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdReadProgressTachiyomiKey(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
  >,
) {
  return ['api', '/api/v1/readlists/:id/read-progress/tachiyomi', args] as const
}

export function useGetApiV1ReadlistsIdReadProgressTachiyomi<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1ReadlistsIdReadProgressTachiyomiKey(args)
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
                (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
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
          client.api.v1.readlists[':id']['read-progress'].tachiyomi.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsIdReadProgressTachiyomi<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1ReadlistsIdReadProgressTachiyomiKey(args)
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
                (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$get']
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
          client.api.v1.readlists[':id']['read-progress'].tachiyomi.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1ReadlistsIdReadProgressTachiyomiKey() {
  return ['api', '/api/v1/readlists/:id/read-progress/tachiyomi', 'PUT'] as const
}

export function usePutApiV1ReadlistsIdReadProgressTachiyomi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ReadlistsIdReadProgressTachiyomiKey()
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
            (typeof client.api.v1.readlists)[':id']['read-progress']['tachiyomi']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.readlists[':id']['read-progress'].tachiyomi.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdThumbnailKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id/thumbnail', args] as const
}

export function useGetApiV1ReadlistsIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
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
        ? getGetApiV1ReadlistsIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists[':id'].thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
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
        ? getGetApiV1ReadlistsIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.readlists[':id'].thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdThumbnailsKey(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>,
) {
  return ['api', '/api/v1/readlists/:id/thumbnails', args] as const
}

export function useGetApiV1ReadlistsIdThumbnails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
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
        ? getGetApiV1ReadlistsIdThumbnailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.readlists[':id'].thumbnails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsIdThumbnails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
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
        ? getGetApiV1ReadlistsIdThumbnailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.readlists[':id'].thumbnails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ReadlistsIdThumbnailsKey() {
  return ['api', '/api/v1/readlists/:id/thumbnails', 'POST'] as const
}

export function usePostApiV1ReadlistsIdThumbnails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ReadlistsIdThumbnailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.readlists)[':id']['thumbnails']['$post']>
        },
      ) => parseResponse(client.api.v1.readlists[':id'].thumbnails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ReadlistsIdThumbnailsThumbnailIdKey(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
) {
  return ['api', '/api/v1/readlists/:id/thumbnails/:thumbnailId', args] as const
}

export function useGetApiV1ReadlistsIdThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1ReadlistsIdThumbnailsThumbnailIdKey(args)
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
                (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
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
          client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ReadlistsIdThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1ReadlistsIdThumbnailsThumbnailIdKey(args)
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
                (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$get']
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
          client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1ReadlistsIdThumbnailsThumbnailIdKey() {
  return ['api', '/api/v1/readlists/:id/thumbnails/:thumbnailId', 'DELETE'] as const
}

export function useDeleteApiV1ReadlistsIdThumbnailsThumbnailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1ReadlistsIdThumbnailsThumbnailIdKey()
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
            (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1ReadlistsIdThumbnailsThumbnailIdSelectedKey() {
  return ['api', '/api/v1/readlists/:id/thumbnails/:thumbnailId/selected', 'PUT'] as const
}

export function usePutApiV1ReadlistsIdThumbnailsThumbnailIdSelected<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1ReadlistsIdThumbnailsThumbnailIdSelectedKey()
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
            (typeof client.api.v1.readlists)[':id']['thumbnails'][':thumbnailId']['selected']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.readlists[':id'].thumbnails[':thumbnailId'].selected.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1ReleasesKey() {
  return ['api', '/api/v1/releases'] as const
}

export function useGetApiV1Releases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ReleasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.releases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Releases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ReleasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.releases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.releases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesKey(args: InferRequestType<typeof client.api.v1.series.$get>) {
  return ['api', '/api/v1/series', args] as const
}

export function useGetApiV1Series<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Series<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesAlphabeticalGroupsKey(
  args: InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>,
) {
  return ['api', '/api/v1/series/alphabetical-groups', args] as const
}

export function useGetApiV1SeriesAlphabeticalGroups<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
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
        ? getGetApiV1SeriesAlphabeticalGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.series['alphabetical-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesAlphabeticalGroups<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
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
        ? getGetApiV1SeriesAlphabeticalGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)['alphabetical-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.series['alphabetical-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesLatestKey(
  args: InferRequestType<typeof client.api.v1.series.latest.$get>,
) {
  return ['api', '/api/v1/series/latest', args] as const
}

export function useGetApiV1SeriesLatest<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.series.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>
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
        ? getGetApiV1SeriesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesLatest<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.series.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>
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
        ? getGetApiV1SeriesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SeriesListKey() {
  return ['api', '/api/v1/series/list', 'POST'] as const
}

export function usePostApiV1SeriesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.series.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SeriesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.series.list.$post> }) =>
        parseResponse(client.api.v1.series.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SeriesListAlphabeticalGroupsKey() {
  return ['api', '/api/v1/series/list/alphabetical-groups', 'POST'] as const
}

export function usePostApiV1SeriesListAlphabeticalGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SeriesListAlphabeticalGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.series.list)['alphabetical-groups']['$post']>
        },
      ) =>
        parseResponse(client.api.v1.series.list['alphabetical-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SeriesNewKey(
  args: InferRequestType<typeof client.api.v1.series.new.$get>,
) {
  return ['api', '/api/v1/series/new', args] as const
}

export function useGetApiV1SeriesNew<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.series.new.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SeriesNewKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series.new.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesNew<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.series.new.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SeriesNewKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.new.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series.new.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesReleaseDatesKey(
  args: InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>,
) {
  return ['api', '/api/v1/series/release-dates', args] as const
}

export function useGetApiV1SeriesReleaseDates<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
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
        ? getGetApiV1SeriesReleaseDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series['release-dates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesReleaseDates<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)['release-dates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
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
        ? getGetApiV1SeriesReleaseDatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)['release-dates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series['release-dates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesUpdatedKey(
  args: InferRequestType<typeof client.api.v1.series.updated.$get>,
) {
  return ['api', '/api/v1/series/updated', args] as const
}

export function useGetApiV1SeriesUpdated<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.series.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
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
        ? getGetApiV1SeriesUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesUpdated<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.series.updated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
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
        ? getGetApiV1SeriesUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.series.updated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesSeriesIdKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId', args] as const
}

export function useGetApiV1SeriesSeriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series[':seriesId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesSeriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series[':seriesId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SeriesSeriesIdAnalyzeKey() {
  return ['api', '/api/v1/series/:seriesId/analyze', 'POST'] as const
}

export function usePostApiV1SeriesSeriesIdAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SeriesSeriesIdAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.series)[':seriesId']['analyze']['$post']>
        },
      ) => parseResponse(client.api.v1.series[':seriesId'].analyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SeriesSeriesIdBooksKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/books', args] as const
}

export function useGetApiV1SeriesSeriesIdBooks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdBooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series[':seriesId'].books.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesSeriesIdBooks<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdBooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['books']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series[':seriesId'].books.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesSeriesIdCollectionsKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/collections', args] as const
}

export function useGetApiV1SeriesSeriesIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.series[':seriesId'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesSeriesIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.series[':seriesId'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesSeriesIdFileKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/file', args] as const
}

export function useGetApiV1SeriesSeriesIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series[':seriesId'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesSeriesIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.series[':seriesId'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1SeriesSeriesIdFileKey() {
  return ['api', '/api/v1/series/:seriesId/file', 'DELETE'] as const
}

export function useDeleteApiV1SeriesSeriesIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SeriesSeriesIdFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.series)[':seriesId']['file']['$delete']> },
      ) => parseResponse(client.api.v1.series[':seriesId'].file.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1SeriesSeriesIdMetadataKey() {
  return ['api', '/api/v1/series/:seriesId/metadata', 'PATCH'] as const
}

export function usePatchApiV1SeriesSeriesIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1SeriesSeriesIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.series)[':seriesId']['metadata']['$patch']>
        },
      ) => parseResponse(client.api.v1.series[':seriesId'].metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SeriesSeriesIdMetadataRefreshKey() {
  return ['api', '/api/v1/series/:seriesId/metadata/refresh', 'POST'] as const
}

export function usePostApiV1SeriesSeriesIdMetadataRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['metadata']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SeriesSeriesIdMetadataRefreshKey()
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
            (typeof client.api.v1.series)[':seriesId']['metadata']['refresh']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.series[':seriesId'].metadata.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SeriesSeriesIdReadProgressKey() {
  return ['api', '/api/v1/series/:seriesId/read-progress', 'POST'] as const
}

export function usePostApiV1SeriesSeriesIdReadProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SeriesSeriesIdReadProgressKey()
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
            (typeof client.api.v1.series)[':seriesId']['read-progress']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.series[':seriesId']['read-progress'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1SeriesSeriesIdReadProgressKey() {
  return ['api', '/api/v1/series/:seriesId/read-progress', 'DELETE'] as const
}

export function useDeleteApiV1SeriesSeriesIdReadProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['read-progress']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SeriesSeriesIdReadProgressKey()
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
            (typeof client.api.v1.series)[':seriesId']['read-progress']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.series[':seriesId']['read-progress'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SeriesSeriesIdThumbnailKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnail', args] as const
}

export function useGetApiV1SeriesSeriesIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.series[':seriesId'].thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesSeriesIdThumbnail<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdThumbnailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.series[':seriesId'].thumbnail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SeriesSeriesIdThumbnailsKey(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnails', args] as const
}

export function useGetApiV1SeriesSeriesIdThumbnails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdThumbnailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.series[':seriesId'].thumbnails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesSeriesIdThumbnails<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>>
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
        ? getGetApiV1SeriesSeriesIdThumbnailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.series[':seriesId'].thumbnails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SeriesSeriesIdThumbnailsKey() {
  return ['api', '/api/v1/series/:seriesId/thumbnails', 'POST'] as const
}

export function usePostApiV1SeriesSeriesIdThumbnails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SeriesSeriesIdThumbnailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.series)[':seriesId']['thumbnails']['$post']>
        },
      ) => parseResponse(client.api.v1.series[':seriesId'].thumbnails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SeriesSeriesIdThumbnailsThumbnailIdKey(
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
  >,
) {
  return ['api', '/api/v1/series/:seriesId/thumbnails/:thumbnailId', args] as const
}

export function useGetApiV1SeriesSeriesIdThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1SeriesSeriesIdThumbnailsThumbnailIdKey(args)
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
                (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
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
          client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SeriesSeriesIdThumbnailsThumbnailId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1SeriesSeriesIdThumbnailsThumbnailIdKey(args)
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
                (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$get']
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
          client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1SeriesSeriesIdThumbnailsThumbnailIdKey() {
  return ['api', '/api/v1/series/:seriesId/thumbnails/:thumbnailId', 'DELETE'] as const
}

export function useDeleteApiV1SeriesSeriesIdThumbnailsThumbnailId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SeriesSeriesIdThumbnailsThumbnailIdKey()
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
            (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedKey() {
  return ['api', '/api/v1/series/:seriesId/thumbnails/:thumbnailId/selected', 'PUT'] as const
}

export function usePutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelected<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['selected']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedKey()
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
            (typeof client.api.v1.series)[':seriesId']['thumbnails'][':thumbnailId']['selected']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.series[':seriesId'].thumbnails[':thumbnailId'].selected.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SettingsKey() {
  return ['api', '/api/v1/settings'] as const
}

export function useGetApiV1Settings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Settings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1SettingsKey() {
  return ['api', '/api/v1/settings', 'PATCH'] as const
}

export function usePatchApiV1Settings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.settings.$patch>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.settings.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1SettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.settings.$patch> }) =>
        parseResponse(client.api.v1.settings.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SharingLabelsKey(
  args: InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>,
) {
  return ['api', '/api/v1/sharing-labels', args] as const
}

export function useGetApiV1SharingLabels<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>
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
        ? getGetApiV1SharingLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['sharing-labels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SharingLabels<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['sharing-labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>
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
        ? getGetApiV1SharingLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['sharing-labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['sharing-labels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1SyncpointsMeKey() {
  return ['api', '/api/v1/syncpoints/me', 'DELETE'] as const
}

export function useDeleteApiV1SyncpointsMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.syncpoints.me.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.syncpoints.me.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SyncpointsMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.syncpoints.me.$delete> },
      ) => parseResponse(client.api.v1.syncpoints.me.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TagsKey(args: InferRequestType<typeof client.api.v1.tags.$get>) {
  return ['api', '/api/v1/tags', args] as const
}

export function useGetApiV1Tags<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Tags<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TagsBookKey(
  args: InferRequestType<typeof client.api.v1.tags.book.$get>,
) {
  return ['api', '/api/v1/tags/book', args] as const
}

export function useGetApiV1TagsBook<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.book.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TagsBookKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.book.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TagsBook<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.book.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1TagsBookKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.book.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.book.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1TagsSeriesKey(
  args: InferRequestType<typeof client.api.v1.tags.series.$get>,
) {
  return ['api', '/api/v1/tags/series', args] as const
}

export function useGetApiV1TagsSeries<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
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
        ? getGetApiV1TagsSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TagsSeries<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.tags.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
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
        ? getGetApiV1TagsSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tags.series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.tags.series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1TasksKey() {
  return ['api', '/api/v1/tasks', 'DELETE'] as const
}

export function useDeleteApiV1Tasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tasks.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1TasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.api.v1.tasks.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TransientBooksKey() {
  return ['api', '/api/v1/transient-books', 'POST'] as const
}

export function usePostApiV1TransientBooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['transient-books']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['transient-books']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TransientBooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['transient-books']['$post']> },
      ) => parseResponse(client.api.v1['transient-books'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TransientBooksIdAnalyzeKey() {
  return ['api', '/api/v1/transient-books/:id/analyze', 'POST'] as const
}

export function usePostApiV1TransientBooksIdAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['transient-books'][':id']['analyze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TransientBooksIdAnalyzeKey()
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
            (typeof client.api.v1)['transient-books'][':id']['analyze']['$post']
          >
        },
      ) => parseResponse(client.api.v1['transient-books'][':id'].analyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1TransientBooksIdPagesPageNumberKey(
  args: InferRequestType<
    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
  >,
) {
  return ['api', '/api/v1/transient-books/:id/pages/:pageNumber', args] as const
}

export function useGetApiV1TransientBooksIdPagesPageNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1TransientBooksIdPagesPageNumberKey(args)
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
                (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
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
          client.api.v1['transient-books'][':id'].pages[':pageNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1TransientBooksIdPagesPageNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV1TransientBooksIdPagesPageNumberKey(args)
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
                (typeof client.api.v1)['transient-books'][':id']['pages'][':pageNumber']['$get']
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
          client.api.v1['transient-books'][':id'].pages[':pageNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AgeRatingsKey(
  args: InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>,
) {
  return ['api', '/api/v2/age-ratings', args] as const
}

export function useGetApiV2AgeRatings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
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
        ? getGetApiV2AgeRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['age-ratings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AgeRatings<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['age-ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
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
        ? getGetApiV2AgeRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['age-ratings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['age-ratings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AuthorsKey(args: InferRequestType<typeof client.api.v2.authors.$get>) {
  return ['api', '/api/v2/authors', args] as const
}

export function useGetApiV2Authors<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.authors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AuthorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.authors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Authors<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.authors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2AuthorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.authors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AuthorsNamesKey(
  args: InferRequestType<typeof client.api.v2.authors.names.$get>,
) {
  return ['api', '/api/v2/authors/names', args] as const
}

export function useGetApiV2AuthorsNames<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.authors.names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>
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
        ? getGetApiV2AuthorsNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.authors.names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorsNames<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.authors.names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>
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
        ? getGetApiV2AuthorsNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.names.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.authors.names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2AuthorsRolesKey(
  args: InferRequestType<typeof client.api.v2.authors.roles.$get>,
) {
  return ['api', '/api/v2/authors/roles', args] as const
}

export function useGetApiV2AuthorsRoles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.authors.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>
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
        ? getGetApiV2AuthorsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.authors.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2AuthorsRoles<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.authors.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>
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
        ? getGetApiV2AuthorsRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.authors.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.authors.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2GenresKey(args: InferRequestType<typeof client.api.v2.genres.$get>) {
  return ['api', '/api/v2/genres', args] as const
}

export function useGetApiV2Genres<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2GenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.genres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Genres<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.genres.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2GenresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.genres.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.genres.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2LanguagesKey(
  args: InferRequestType<typeof client.api.v2.languages.$get>,
) {
  return ['api', '/api/v2/languages', args] as const
}

export function useGetApiV2Languages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Languages<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.languages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2LanguagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.languages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.languages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2PublishersKey(
  args: InferRequestType<typeof client.api.v2.publishers.$get>,
) {
  return ['api', '/api/v2/publishers', args] as const
}

export function useGetApiV2Publishers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.publishers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
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
        ? getGetApiV2PublishersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.publishers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Publishers<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.publishers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
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
        ? getGetApiV2PublishersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.publishers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.publishers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2SeriesReleaseYearsKey(
  args: InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>,
) {
  return ['api', '/api/v2/series/release-years', args] as const
}

export function useGetApiV2SeriesReleaseYears<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
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
        ? getGetApiV2SeriesReleaseYearsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.series['release-years'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SeriesReleaseYears<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.series)['release-years']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
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
        ? getGetApiV2SeriesReleaseYearsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.series)['release-years']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.series['release-years'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2SeriesSeriesIdReadProgressTachiyomiKey(
  args: InferRequestType<
    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
  >,
) {
  return ['api', '/api/v2/series/:seriesId/read-progress/tachiyomi', args] as const
}

export function useGetApiV2SeriesSeriesIdReadProgressTachiyomi<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV2SeriesSeriesIdReadProgressTachiyomiKey(args)
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
                (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
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
          client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SeriesSeriesIdReadProgressTachiyomi<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV2SeriesSeriesIdReadProgressTachiyomiKey(args)
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
                (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$get']
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
          client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2SeriesSeriesIdReadProgressTachiyomiKey() {
  return ['api', '/api/v2/series/:seriesId/read-progress/tachiyomi', 'PUT'] as const
}

export function usePutApiV2SeriesSeriesIdReadProgressTachiyomi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV2SeriesSeriesIdReadProgressTachiyomiKey()
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
            (typeof client.api.v2.series)[':seriesId']['read-progress']['tachiyomi']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.series[':seriesId']['read-progress'].tachiyomi.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2SharingLabelsKey(
  args: InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>,
) {
  return ['api', '/api/v2/sharing-labels', args] as const
}

export function useGetApiV2SharingLabels<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>
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
        ? getGetApiV2SharingLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['sharing-labels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2SharingLabels<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2)['sharing-labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>
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
        ? getGetApiV2SharingLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2)['sharing-labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2['sharing-labels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2TagsKey(args: InferRequestType<typeof client.api.v2.tags.$get>) {
  return ['api', '/api/v2/tags', args] as const
}

export function useGetApiV2Tags<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Tags<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersKey() {
  return ['api', '/api/v2/users'] as const
}

export function useGetApiV2Users<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Users<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2UsersKey() {
  return ['api', '/api/v2/users', 'POST'] as const
}

export function usePostApiV2Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.users.$post> }) =>
        parseResponse(client.api.v2.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsersAuthenticationActivityKey(
  args: InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>,
) {
  return ['api', '/api/v2/users/authentication-activity', args] as const
}

export function useGetApiV2UsersAuthenticationActivity<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
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
        ? getGetApiV2UsersAuthenticationActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.users['authentication-activity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersAuthenticationActivity<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.users)['authentication-activity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
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
        ? getGetApiV2UsersAuthenticationActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users)['authentication-activity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.users['authentication-activity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersMeKey(args: InferRequestType<typeof client.api.v2.users.me.$get>) {
  return ['api', '/api/v2/users/me', args] as const
}

export function useGetApiV2UsersMe<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.users.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.users.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersMe<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.users.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2UsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.users.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2UsersMeApiKeysKey() {
  return ['api', '/api/v2/users/me/api-keys'] as const
}

export function useGetApiV2UsersMeApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2UsersMeApiKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.users.me['api-keys'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersMeApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV2UsersMeApiKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.users.me['api-keys'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2UsersMeApiKeysKey() {
  return ['api', '/api/v2/users/me/api-keys', 'POST'] as const
}

export function usePostApiV2UsersMeApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.users.me)['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2UsersMeApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.users.me)['api-keys']['$post']> },
      ) => parseResponse(client.api.v2.users.me['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2UsersMeApiKeysKeyIdKey() {
  return ['api', '/api/v2/users/me/api-keys/:keyId', 'DELETE'] as const
}

export function useDeleteApiV2UsersMeApiKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2UsersMeApiKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v2.users.me)['api-keys'][':keyId']['$delete']>
        },
      ) => parseResponse(client.api.v2.users.me['api-keys'][':keyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsersMeAuthenticationActivityKey(
  args: InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>,
) {
  return ['api', '/api/v2/users/me/authentication-activity', args] as const
}

export function useGetApiV2UsersMeAuthenticationActivity<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>>
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
        ? getGetApiV2UsersMeAuthenticationActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.users.me['authentication-activity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersMeAuthenticationActivity<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>>
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
        ? getGetApiV2UsersMeAuthenticationActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users.me)['authentication-activity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.users.me['authentication-activity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2UsersMePasswordKey() {
  return ['api', '/api/v2/users/me/password', 'PATCH'] as const
}

export function usePatchApiV2UsersMePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.users.me.password.$patch>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.users.me.password.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2UsersMePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v2.users.me.password.$patch> },
      ) => parseResponse(client.api.v2.users.me.password.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV2UsersIdKey() {
  return ['api', '/api/v2/users/:id', 'DELETE'] as const
}

export function useDeleteApiV2UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV2UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.users)[':id']['$delete']> },
      ) => parseResponse(client.api.v2.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV2UsersIdKey() {
  return ['api', '/api/v2/users/:id', 'PATCH'] as const
}

export function usePatchApiV2UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.users)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.users)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v2.users)[':id']['$patch']> },
      ) => parseResponse(client.api.v2.users[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2UsersIdAuthenticationActivityLatestKey(
  args: InferRequestType<
    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
  >,
) {
  return ['api', '/api/v2/users/:id/authentication-activity/latest', args] as const
}

export function useGetApiV2UsersIdAuthenticationActivityLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV2UsersIdAuthenticationActivityLatestKey(args)
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
                (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
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
          client.api.v2.users[':id']['authentication-activity'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2UsersIdAuthenticationActivityLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV2UsersIdAuthenticationActivityLatestKey(args)
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
                (typeof client.api.v2.users)[':id']['authentication-activity']['latest']['$get']
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
          client.api.v2.users[':id']['authentication-activity'].latest.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV2UsersIdPasswordKey() {
  return ['api', '/api/v2/users/:id/password', 'PATCH'] as const
}

export function usePatchApiV2UsersIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.users)[':id']['password']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.users)[':id']['password']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV2UsersIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v2.users)[':id']['password']['$patch']> },
      ) => parseResponse(client.api.v2.users[':id'].password.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3NotableEntitiesKey(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>,
) {
  return ['api', '/api/v3/notable-entities', args] as const
}

export function useGetApiV3NotableEntities<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>
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
        ? getGetApiV3NotableEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3['notable-entities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3NotableEntities<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>
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
        ? getGetApiV3NotableEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3['notable-entities'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3NotableEntitiesKindsKey(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>,
) {
  return ['api', '/api/v3/notable-entities/kinds', args] as const
}

export function useGetApiV3NotableEntitiesKinds<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
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
        ? getGetApiV3NotableEntitiesKindsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3['notable-entities'].kinds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3NotableEntitiesKinds<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
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
        ? getGetApiV3NotableEntitiesKindsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['kinds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3['notable-entities'].kinds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3NotableEntitiesNamesKey(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>,
) {
  return ['api', '/api/v3/notable-entities/names', args] as const
}

export function useGetApiV3NotableEntitiesNames<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
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
        ? getGetApiV3NotableEntitiesNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3['notable-entities'].names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3NotableEntitiesNames<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3)['notable-entities']['names']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
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
        ? getGetApiV3NotableEntitiesNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['notable-entities']['names']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3['notable-entities'].names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
