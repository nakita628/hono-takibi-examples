import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiRegistryKey() {
  return ['api-registry'] as const
}

export function getApiSpecificationKey() {
  return ['api-specification'] as const
}

export function getApplyKey() {
  return ['apply'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getChangelogsKey() {
  return ['changelogs'] as const
}

export function getCustompagesKey() {
  return ['custompages'] as const
}

export function getDocsKey() {
  return ['docs'] as const
}

export function getSchemaKey() {
  return ['schema'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getGetApiRegistryUuidKey(
  args: InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>,
) {
  return ['api-registry', '/api-registry/:uuid', args] as const
}

export function useGetApiRegistryUuid<TError = unknown>(
  args: InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>
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
        ? getGetApiRegistryUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-registry'][':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRegistryUuid<TError = unknown>(
  args: InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>
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
        ? getGetApiRegistryUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-registry'][':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-registry'][':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpecificationKey(
  args: InferRequestType<(typeof client)['api-specification']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api-specification', '/api-specification', keyArgs] as const
}

export function useGetApiSpecification<TError = unknown>(
  args: InferRequestType<(typeof client)['api-specification']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
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
        ? getGetApiSpecificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-specification'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpecification<TError = unknown>(
  args: InferRequestType<(typeof client)['api-specification']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
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
        ? getGetApiSpecificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['api-specification'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSpecificationKey() {
  return ['api-specification', '/api-specification', 'POST'] as const
}

export function usePostApiSpecification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-specification']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-specification']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSpecificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-specification']['$post']> },
      ) => parseResponse(client['api-specification'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiSpecificationIdKey() {
  return ['api-specification', '/api-specification/:id', 'PUT'] as const
}

export function usePutApiSpecificationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-specification'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-specification'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiSpecificationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-specification'][':id']['$put']> },
      ) => parseResponse(client['api-specification'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiSpecificationIdKey() {
  return ['api-specification', '/api-specification/:id', 'DELETE'] as const
}

export function useDeleteApiSpecificationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-specification'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['api-specification'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiSpecificationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['api-specification'][':id']['$delete']> },
      ) => parseResponse(client['api-specification'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplyKey() {
  return ['apply', '/apply'] as const
}

export function useGetApply<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetApplyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apply.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApply<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetApplyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apply.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApplyKey() {
  return ['apply', '/apply', 'POST'] as const
}

export function usePostApply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apply.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.apply.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.apply.$post> }) =>
        parseResponse(client.apply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoriesKey(args: InferRequestType<typeof client.categories.$get>) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories', keyArgs] as const
}

export function useGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategories<TError = unknown>(
  args: InferRequestType<typeof client.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCategoriesKey() {
  return ['categories', '/categories', 'POST'] as const
}

export function usePostCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.categories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.categories.$post> }) =>
        parseResponse(client.categories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoriesSlugKey(
  args: InferRequestType<(typeof client.categories)[':slug']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories/:slug', keyArgs] as const
}

export function useGetCategoriesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCategoriesSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCategoriesSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCategoriesSlugKey() {
  return ['categories', '/categories/:slug', 'PUT'] as const
}

export function usePutCategoriesSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.categories)[':slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCategoriesSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.categories)[':slug']['$put']> },
      ) => parseResponse(client.categories[':slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCategoriesSlugKey() {
  return ['categories', '/categories/:slug', 'DELETE'] as const
}

export function useDeleteCategoriesSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.categories)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCategoriesSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.categories)[':slug']['$delete']> },
      ) => parseResponse(client.categories[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCategoriesSlugDocsKey(
  args: InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['categories', '/categories/:slug/docs', keyArgs] as const
}

export function useGetCategoriesSlugDocs<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
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
        ? getGetCategoriesSlugDocsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':slug'].docs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesSlugDocs<TError = unknown>(
  args: InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
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
        ? getGetCategoriesSlugDocsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':slug']['docs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categories[':slug'].docs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChangelogsKey(args: InferRequestType<typeof client.changelogs.$get>) {
  return ['changelogs', '/changelogs', args] as const
}

export function useGetChangelogs<TError = unknown>(
  args: InferRequestType<typeof client.changelogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangelogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.changelogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChangelogs<TError = unknown>(
  args: InferRequestType<typeof client.changelogs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangelogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.changelogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChangelogsKey() {
  return ['changelogs', '/changelogs', 'POST'] as const
}

export function usePostChangelogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changelogs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.changelogs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChangelogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.changelogs.$post> }) =>
        parseResponse(client.changelogs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChangelogsSlugKey(
  args: InferRequestType<(typeof client.changelogs)[':slug']['$get']>,
) {
  return ['changelogs', '/changelogs/:slug', args] as const
}

export function useGetChangelogsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.changelogs)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetChangelogsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.changelogs[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChangelogsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.changelogs)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetChangelogsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.changelogs[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChangelogsSlugKey() {
  return ['changelogs', '/changelogs/:slug', 'PUT'] as const
}

export function usePutChangelogsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.changelogs)[':slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChangelogsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.changelogs)[':slug']['$put']> },
      ) => parseResponse(client.changelogs[':slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChangelogsSlugKey() {
  return ['changelogs', '/changelogs/:slug', 'DELETE'] as const
}

export function useDeleteChangelogsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.changelogs)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.changelogs)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChangelogsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.changelogs)[':slug']['$delete']> },
      ) => parseResponse(client.changelogs[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustompagesKey(args: InferRequestType<typeof client.custompages.$get>) {
  return ['custompages', '/custompages', args] as const
}

export function useGetCustompages<TError = unknown>(
  args: InferRequestType<typeof client.custompages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustompagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custompages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustompages<TError = unknown>(
  args: InferRequestType<typeof client.custompages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustompagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custompages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustompagesKey() {
  return ['custompages', '/custompages', 'POST'] as const
}

export function usePostCustompages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custompages.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.custompages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustompagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.custompages.$post> }) =>
        parseResponse(client.custompages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustompagesSlugKey(
  args: InferRequestType<(typeof client.custompages)[':slug']['$get']>,
) {
  return ['custompages', '/custompages/:slug', args] as const
}

export function useGetCustompagesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.custompages)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
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
        ? getGetCustompagesSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custompages[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustompagesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.custompages)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
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
        ? getGetCustompagesSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custompages[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustompagesSlugKey() {
  return ['custompages', '/custompages/:slug', 'PUT'] as const
}

export function usePutCustompagesSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.custompages)[':slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustompagesSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.custompages)[':slug']['$put']> },
      ) => parseResponse(client.custompages[':slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustompagesSlugKey() {
  return ['custompages', '/custompages/:slug', 'DELETE'] as const
}

export function useDeleteCustompagesSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.custompages)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.custompages)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustompagesSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.custompages)[':slug']['$delete']> },
      ) => parseResponse(client.custompages[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocsSlugKey(args: InferRequestType<(typeof client.docs)[':slug']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['docs', '/docs/:slug', keyArgs] as const
}

export function useGetDocsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.docs)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.docs)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDocsSlugKey() {
  return ['docs', '/docs/:slug', 'PUT'] as const
}

export function usePutDocsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.docs)[':slug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDocsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.docs)[':slug']['$put']> }) =>
        parseResponse(client.docs[':slug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDocsSlugKey() {
  return ['docs', '/docs/:slug', 'DELETE'] as const
}

export function useDeleteDocsSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docs)[':slug']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.docs)[':slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocsSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.docs)[':slug']['$delete']> },
      ) => parseResponse(client.docs[':slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocsSlugProductionKey(
  args: InferRequestType<(typeof client.docs)[':slug']['production']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docs', '/docs/:slug/production', keyArgs] as const
}

export function useGetDocsSlugProduction<TError = unknown>(
  args: InferRequestType<(typeof client.docs)[':slug']['production']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
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
        ? getGetDocsSlugProductionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs[':slug'].production.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocsSlugProduction<TError = unknown>(
  args: InferRequestType<(typeof client.docs)[':slug']['production']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
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
        ? getGetDocsSlugProductionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docs)[':slug']['production']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs[':slug'].production.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocsKey() {
  return ['docs', '/docs', 'POST'] as const
}

export function usePostDocs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.docs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.docs.$post> }) =>
        parseResponse(client.docs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocsSearchKey() {
  return ['docs', '/docs/search', 'POST'] as const
}

export function usePostDocsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.docs.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.docs.search.$post> }) =>
        parseResponse(client.docs.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchemaKey() {
  return ['schema', '/schema'] as const
}

export function useGetSchema<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schema.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchema<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchemaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schema.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionKey() {
  return ['version', '/version'] as const
}

export function useGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVersionKey() {
  return ['version', '/version', 'POST'] as const
}

export function usePostVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.version.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.version.$post> }) =>
        parseResponse(client.version.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionVersionIdKey(
  args: InferRequestType<(typeof client.version)[':versionId']['$get']>,
) {
  return ['version', '/version/:versionId', args] as const
}

export function useGetVersionVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.version)[':versionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
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
        ? getGetVersionVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version[':versionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.version)[':versionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
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
        ? getGetVersionVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version[':versionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVersionVersionIdKey() {
  return ['version', '/version/:versionId', 'PUT'] as const
}

export function usePutVersionVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.version)[':versionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVersionVersionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.version)[':versionId']['$put']> },
      ) => parseResponse(client.version[':versionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVersionVersionIdKey() {
  return ['version', '/version/:versionId', 'DELETE'] as const
}

export function useDeleteVersionVersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.version)[':versionId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.version)[':versionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVersionVersionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.version)[':versionId']['$delete']> },
      ) => parseResponse(client.version[':versionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
