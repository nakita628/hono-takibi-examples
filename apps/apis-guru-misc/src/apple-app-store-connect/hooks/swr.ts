import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPatchV1AgeRatingDeclarationsIdKey() {
  return ['v1', '/v1/ageRatingDeclarations/:id', 'PATCH'] as const
}

export function usePatchV1AgeRatingDeclarationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AgeRatingDeclarationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']> },
      ) => parseResponse(client.v1.ageRatingDeclarations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppCategoriesKey(
  args: InferRequestType<typeof client.v1.appCategories.$get>,
) {
  return ['v1', '/v1/appCategories', args] as const
}

export function useGetV1AppCategories<TError = unknown>(
  args: InferRequestType<typeof client.v1.appCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
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
        ? getGetV1AppCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppCategories<TError = unknown>(
  args: InferRequestType<typeof client.v1.appCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
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
        ? getGetV1AppCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appCategories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppCategoriesIdKey(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>,
) {
  return ['v1', '/v1/appCategories/:id', args] as const
}

export function useGetV1AppCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
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
        ? getGetV1AppCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appCategories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
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
        ? getGetV1AppCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appCategories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppCategoriesIdParentKey(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>,
) {
  return ['v1', '/v1/appCategories/:id/parent', args] as const
}

export function useGetV1AppCategoriesIdParent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
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
        ? getGetV1AppCategoriesIdParentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appCategories[':id'].parent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppCategoriesIdParent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
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
        ? getGetV1AppCategoriesIdParentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['parent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appCategories[':id'].parent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppCategoriesIdSubcategoriesKey(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>,
) {
  return ['v1', '/v1/appCategories/:id/subcategories', args] as const
}

export function useGetV1AppCategoriesIdSubcategories<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
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
        ? getGetV1AppCategoriesIdSubcategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appCategories[':id'].subcategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppCategoriesIdSubcategories<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
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
        ? getGetV1AppCategoriesIdSubcategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appCategories[':id'].subcategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppEncryptionDeclarationsKey(
  args: InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>,
) {
  return ['v1', '/v1/appEncryptionDeclarations', args] as const
}

export function useGetV1AppEncryptionDeclarations<TError = unknown>(
  args: InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
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
        ? getGetV1AppEncryptionDeclarationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appEncryptionDeclarations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppEncryptionDeclarations<TError = unknown>(
  args: InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
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
        ? getGetV1AppEncryptionDeclarationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.appEncryptionDeclarations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appEncryptionDeclarations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppEncryptionDeclarationsIdKey(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>,
) {
  return ['v1', '/v1/appEncryptionDeclarations/:id', args] as const
}

export function useGetV1AppEncryptionDeclarationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
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
        ? getGetV1AppEncryptionDeclarationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appEncryptionDeclarations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppEncryptionDeclarationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
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
        ? getGetV1AppEncryptionDeclarationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appEncryptionDeclarations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppEncryptionDeclarationsIdAppKey(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/appEncryptionDeclarations/:id/app', args] as const
}

export function useGetV1AppEncryptionDeclarationsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
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
        ? getGetV1AppEncryptionDeclarationsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appEncryptionDeclarations[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppEncryptionDeclarationsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
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
        ? getGetV1AppEncryptionDeclarationsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appEncryptionDeclarations[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppEncryptionDeclarationsIdRelationshipsBuildsKey() {
  return ['v1', '/v1/appEncryptionDeclarations/:id/relationships/builds', 'POST'] as const
}

export function usePostV1AppEncryptionDeclarationsIdRelationshipsBuilds<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppEncryptionDeclarationsIdRelationshipsBuildsKey()
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
            (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.appEncryptionDeclarations[':id'].relationships.builds.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppInfoLocalizationsKey() {
  return ['v1', '/v1/appInfoLocalizations', 'POST'] as const
}

export function usePostV1AppInfoLocalizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appInfoLocalizations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appInfoLocalizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppInfoLocalizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.appInfoLocalizations.$post> },
      ) => parseResponse(client.v1.appInfoLocalizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppInfoLocalizationsIdKey(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>,
) {
  return ['v1', '/v1/appInfoLocalizations/:id', args] as const
}

export function useGetV1AppInfoLocalizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
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
        ? getGetV1AppInfoLocalizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appInfoLocalizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfoLocalizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
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
        ? getGetV1AppInfoLocalizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appInfoLocalizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppInfoLocalizationsIdKey() {
  return ['v1', '/v1/appInfoLocalizations/:id', 'DELETE'] as const
}

export function useDeleteV1AppInfoLocalizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppInfoLocalizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']> },
      ) => parseResponse(client.v1.appInfoLocalizations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AppInfoLocalizationsIdKey() {
  return ['v1', '/v1/appInfoLocalizations/:id', 'PATCH'] as const
}

export function usePatchV1AppInfoLocalizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppInfoLocalizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']> },
      ) => parseResponse(client.v1.appInfoLocalizations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppInfosIdKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id', args] as const
}

export function useGetV1AppInfosId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppInfosIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appInfos[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppInfosIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appInfos[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AppInfosIdKey() {
  return ['v1', '/v1/appInfos/:id', 'PATCH'] as const
}

export function usePatchV1AppInfosId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appInfos)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppInfosIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appInfos)[':id']['$patch']> },
      ) => parseResponse(client.v1.appInfos[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppInfosIdAgeRatingDeclarationKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/ageRatingDeclaration', args] as const
}

export function useGetV1AppInfosIdAgeRatingDeclaration<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
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
        ? getGetV1AppInfosIdAgeRatingDeclarationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].ageRatingDeclaration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosIdAgeRatingDeclaration<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
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
        ? getGetV1AppInfosIdAgeRatingDeclarationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].ageRatingDeclaration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppInfosIdAppInfoLocalizationsKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/appInfoLocalizations', args] as const
}

export function useGetV1AppInfosIdAppInfoLocalizations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
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
        ? getGetV1AppInfosIdAppInfoLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].appInfoLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosIdAppInfoLocalizations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
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
        ? getGetV1AppInfosIdAppInfoLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].appInfoLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppInfosIdPrimaryCategoryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/primaryCategory', args] as const
}

export function useGetV1AppInfosIdPrimaryCategory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
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
        ? getGetV1AppInfosIdPrimaryCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].primaryCategory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosIdPrimaryCategory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
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
        ? getGetV1AppInfosIdPrimaryCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].primaryCategory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppInfosIdPrimarySubcategoryOneKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/primarySubcategoryOne', args] as const
}

export function useGetV1AppInfosIdPrimarySubcategoryOne<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
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
        ? getGetV1AppInfosIdPrimarySubcategoryOneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].primarySubcategoryOne.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosIdPrimarySubcategoryOne<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
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
        ? getGetV1AppInfosIdPrimarySubcategoryOneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].primarySubcategoryOne.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppInfosIdPrimarySubcategoryTwoKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/primarySubcategoryTwo', args] as const
}

export function useGetV1AppInfosIdPrimarySubcategoryTwo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
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
        ? getGetV1AppInfosIdPrimarySubcategoryTwoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].primarySubcategoryTwo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosIdPrimarySubcategoryTwo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
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
        ? getGetV1AppInfosIdPrimarySubcategoryTwoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].primarySubcategoryTwo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppInfosIdSecondaryCategoryKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/secondaryCategory', args] as const
}

export function useGetV1AppInfosIdSecondaryCategory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
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
        ? getGetV1AppInfosIdSecondaryCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].secondaryCategory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosIdSecondaryCategory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
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
        ? getGetV1AppInfosIdSecondaryCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].secondaryCategory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppInfosIdSecondarySubcategoryOneKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/secondarySubcategoryOne', args] as const
}

export function useGetV1AppInfosIdSecondarySubcategoryOne<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
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
        ? getGetV1AppInfosIdSecondarySubcategoryOneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].secondarySubcategoryOne.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosIdSecondarySubcategoryOne<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
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
        ? getGetV1AppInfosIdSecondarySubcategoryOneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].secondarySubcategoryOne.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppInfosIdSecondarySubcategoryTwoKey(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>,
) {
  return ['v1', '/v1/appInfos/:id/secondarySubcategoryTwo', args] as const
}

export function useGetV1AppInfosIdSecondarySubcategoryTwo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
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
        ? getGetV1AppInfosIdSecondarySubcategoryTwoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].secondarySubcategoryTwo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppInfosIdSecondarySubcategoryTwo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
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
        ? getGetV1AppInfosIdSecondarySubcategoryTwoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appInfos[':id'].secondarySubcategoryTwo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppPreOrdersKey() {
  return ['v1', '/v1/appPreOrders', 'POST'] as const
}

export function usePostV1AppPreOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreOrders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appPreOrders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppPreOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.appPreOrders.$post> }) =>
        parseResponse(client.v1.appPreOrders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppPreOrdersIdKey(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>,
) {
  return ['v1', '/v1/appPreOrders/:id', args] as const
}

export function useGetV1AppPreOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
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
        ? getGetV1AppPreOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPreOrders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPreOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
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
        ? getGetV1AppPreOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPreOrders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppPreOrdersIdKey() {
  return ['v1', '/v1/appPreOrders/:id', 'DELETE'] as const
}

export function useDeleteV1AppPreOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appPreOrders)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppPreOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$delete']> },
      ) => parseResponse(client.v1.appPreOrders[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AppPreOrdersIdKey() {
  return ['v1', '/v1/appPreOrders/:id', 'PATCH'] as const
}

export function usePatchV1AppPreOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreOrders)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appPreOrders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppPreOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$patch']> },
      ) => parseResponse(client.v1.appPreOrders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppPreviewSetsKey() {
  return ['v1', '/v1/appPreviewSets', 'POST'] as const
}

export function usePostV1AppPreviewSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreviewSets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appPreviewSets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppPreviewSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.appPreviewSets.$post> }) =>
        parseResponse(client.v1.appPreviewSets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppPreviewSetsIdKey(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>,
) {
  return ['v1', '/v1/appPreviewSets/:id', args] as const
}

export function useGetV1AppPreviewSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>
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
        ? getGetV1AppPreviewSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPreviewSets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPreviewSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>
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
        ? getGetV1AppPreviewSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPreviewSets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppPreviewSetsIdKey() {
  return ['v1', '/v1/appPreviewSets/:id', 'DELETE'] as const
}

export function useDeleteV1AppPreviewSetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppPreviewSetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$delete']> },
      ) => parseResponse(client.v1.appPreviewSets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppPreviewSetsIdAppPreviewsKey(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>,
) {
  return ['v1', '/v1/appPreviewSets/:id/appPreviews', args] as const
}

export function useGetV1AppPreviewSetsIdAppPreviews<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
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
        ? getGetV1AppPreviewSetsIdAppPreviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appPreviewSets[':id'].appPreviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPreviewSetsIdAppPreviews<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
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
        ? getGetV1AppPreviewSetsIdAppPreviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appPreviewSets[':id'].appPreviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppPreviewSetsIdRelationshipsAppPreviewsKey(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
  >,
) {
  return ['v1', '/v1/appPreviewSets/:id/relationships/appPreviews', args] as const
}

export function useGetV1AppPreviewSetsIdRelationshipsAppPreviews<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
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
        ? getGetV1AppPreviewSetsIdRelationshipsAppPreviewsKey(args)
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
                (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
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
          client.v1.appPreviewSets[':id'].relationships.appPreviews.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPreviewSetsIdRelationshipsAppPreviews<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
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
        ? getGetV1AppPreviewSetsIdRelationshipsAppPreviewsKey(args)
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
                (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
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
          client.v1.appPreviewSets[':id'].relationships.appPreviews.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AppPreviewSetsIdRelationshipsAppPreviewsKey() {
  return ['v1', '/v1/appPreviewSets/:id/relationships/appPreviews', 'PATCH'] as const
}

export function usePatchV1AppPreviewSetsIdRelationshipsAppPreviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppPreviewSetsIdRelationshipsAppPreviewsKey()
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
            (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.appPreviewSets[':id'].relationships.appPreviews.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppPreviewsKey() {
  return ['v1', '/v1/appPreviews', 'POST'] as const
}

export function usePostV1AppPreviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPreviews.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appPreviews.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppPreviewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.appPreviews.$post> }) =>
        parseResponse(client.v1.appPreviews.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppPreviewsIdKey(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>,
) {
  return ['v1', '/v1/appPreviews/:id', args] as const
}

export function useGetV1AppPreviewsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
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
        ? getGetV1AppPreviewsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPreviews[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPreviewsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
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
        ? getGetV1AppPreviewsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPreviews[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppPreviewsIdKey() {
  return ['v1', '/v1/appPreviews/:id', 'DELETE'] as const
}

export function useDeleteV1AppPreviewsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appPreviews)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppPreviewsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appPreviews)[':id']['$delete']> },
      ) => parseResponse(client.v1.appPreviews[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AppPreviewsIdKey() {
  return ['v1', '/v1/appPreviews/:id', 'PATCH'] as const
}

export function usePatchV1AppPreviewsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPreviews)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appPreviews)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppPreviewsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appPreviews)[':id']['$patch']> },
      ) => parseResponse(client.v1.appPreviews[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppPricePointsKey(
  args: InferRequestType<typeof client.v1.appPricePoints.$get>,
) {
  return ['v1', '/v1/appPricePoints', args] as const
}

export function useGetV1AppPricePoints<TError = unknown>(
  args: InferRequestType<typeof client.v1.appPricePoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
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
        ? getGetV1AppPricePointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPricePoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPricePoints<TError = unknown>(
  args: InferRequestType<typeof client.v1.appPricePoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
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
        ? getGetV1AppPricePointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPricePoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPricePoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppPricePointsIdKey(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>,
) {
  return ['v1', '/v1/appPricePoints/:id', args] as const
}

export function useGetV1AppPricePointsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>
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
        ? getGetV1AppPricePointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPricePoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPricePointsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>
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
        ? getGetV1AppPricePointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPricePoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppPricePointsIdTerritoryKey(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>,
) {
  return ['v1', '/v1/appPricePoints/:id/territory', args] as const
}

export function useGetV1AppPricePointsIdTerritory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
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
        ? getGetV1AppPricePointsIdTerritoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appPricePoints[':id'].territory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPricePointsIdTerritory<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
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
        ? getGetV1AppPricePointsIdTerritoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appPricePoints[':id'].territory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppPriceTiersKey(
  args: InferRequestType<typeof client.v1.appPriceTiers.$get>,
) {
  return ['v1', '/v1/appPriceTiers', args] as const
}

export function useGetV1AppPriceTiers<TError = unknown>(
  args: InferRequestType<typeof client.v1.appPriceTiers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
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
        ? getGetV1AppPriceTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPriceTiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPriceTiers<TError = unknown>(
  args: InferRequestType<typeof client.v1.appPriceTiers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
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
        ? getGetV1AppPriceTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appPriceTiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPriceTiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppPriceTiersIdKey(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>,
) {
  return ['v1', '/v1/appPriceTiers/:id', args] as const
}

export function useGetV1AppPriceTiersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
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
        ? getGetV1AppPriceTiersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPriceTiers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPriceTiersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
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
        ? getGetV1AppPriceTiersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPriceTiers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppPriceTiersIdPricePointsKey(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>,
) {
  return ['v1', '/v1/appPriceTiers/:id/pricePoints', args] as const
}

export function useGetV1AppPriceTiersIdPricePoints<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
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
        ? getGetV1AppPriceTiersIdPricePointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appPriceTiers[':id'].pricePoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPriceTiersIdPricePoints<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
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
        ? getGetV1AppPriceTiersIdPricePointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appPriceTiers[':id'].pricePoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppPricesIdKey(
  args: InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>,
) {
  return ['v1', '/v1/appPrices/:id', args] as const
}

export function useGetV1AppPricesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppPricesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPrices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppPricesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppPricesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.appPrices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appPrices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppScreenshotSetsKey() {
  return ['v1', '/v1/appScreenshotSets', 'POST'] as const
}

export function usePostV1AppScreenshotSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appScreenshotSets.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appScreenshotSets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppScreenshotSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.appScreenshotSets.$post> },
      ) => parseResponse(client.v1.appScreenshotSets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppScreenshotSetsIdKey(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>,
) {
  return ['v1', '/v1/appScreenshotSets/:id', args] as const
}

export function useGetV1AppScreenshotSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
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
        ? getGetV1AppScreenshotSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appScreenshotSets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppScreenshotSetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
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
        ? getGetV1AppScreenshotSetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appScreenshotSets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppScreenshotSetsIdKey() {
  return ['v1', '/v1/appScreenshotSets/:id', 'DELETE'] as const
}

export function useDeleteV1AppScreenshotSetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshotSets)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppScreenshotSetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$delete']> },
      ) => parseResponse(client.v1.appScreenshotSets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppScreenshotSetsIdAppScreenshotsKey(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>,
) {
  return ['v1', '/v1/appScreenshotSets/:id/appScreenshots', args] as const
}

export function useGetV1AppScreenshotSetsIdAppScreenshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
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
        ? getGetV1AppScreenshotSetsIdAppScreenshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appScreenshotSets[':id'].appScreenshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppScreenshotSetsIdAppScreenshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
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
        ? getGetV1AppScreenshotSetsIdAppScreenshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appScreenshotSets[':id'].appScreenshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppScreenshotSetsIdRelationshipsAppScreenshotsKey(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
  >,
) {
  return ['v1', '/v1/appScreenshotSets/:id/relationships/appScreenshots', args] as const
}

export function useGetV1AppScreenshotSetsIdRelationshipsAppScreenshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
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
        ? getGetV1AppScreenshotSetsIdRelationshipsAppScreenshotsKey(args)
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
                (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
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
          client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppScreenshotSetsIdRelationshipsAppScreenshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
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
        ? getGetV1AppScreenshotSetsIdRelationshipsAppScreenshotsKey(args)
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
                (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
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
          client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AppScreenshotSetsIdRelationshipsAppScreenshotsKey() {
  return ['v1', '/v1/appScreenshotSets/:id/relationships/appScreenshots', 'PATCH'] as const
}

export function usePatchV1AppScreenshotSetsIdRelationshipsAppScreenshots<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppScreenshotSetsIdRelationshipsAppScreenshotsKey()
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
            (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppScreenshotsKey() {
  return ['v1', '/v1/appScreenshots', 'POST'] as const
}

export function usePostV1AppScreenshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appScreenshots.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appScreenshots.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppScreenshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.appScreenshots.$post> }) =>
        parseResponse(client.v1.appScreenshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppScreenshotsIdKey(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>,
) {
  return ['v1', '/v1/appScreenshots/:id', args] as const
}

export function useGetV1AppScreenshotsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>
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
        ? getGetV1AppScreenshotsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appScreenshots[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppScreenshotsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>
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
        ? getGetV1AppScreenshotsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appScreenshots[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppScreenshotsIdKey() {
  return ['v1', '/v1/appScreenshots/:id', 'DELETE'] as const
}

export function useDeleteV1AppScreenshotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appScreenshots)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppScreenshotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$delete']> },
      ) => parseResponse(client.v1.appScreenshots[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AppScreenshotsIdKey() {
  return ['v1', '/v1/appScreenshots/:id', 'PATCH'] as const
}

export function usePatchV1AppScreenshotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appScreenshots)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appScreenshots)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppScreenshotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$patch']> },
      ) => parseResponse(client.v1.appScreenshots[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppStoreReviewAttachmentsKey() {
  return ['v1', '/v1/appStoreReviewAttachments', 'POST'] as const
}

export function usePostV1AppStoreReviewAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreReviewAttachments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appStoreReviewAttachments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppStoreReviewAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.appStoreReviewAttachments.$post> },
      ) => parseResponse(client.v1.appStoreReviewAttachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppStoreReviewAttachmentsIdKey(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>,
) {
  return ['v1', '/v1/appStoreReviewAttachments/:id', args] as const
}

export function useGetV1AppStoreReviewAttachmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
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
        ? getGetV1AppStoreReviewAttachmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appStoreReviewAttachments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreReviewAttachmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
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
        ? getGetV1AppStoreReviewAttachmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appStoreReviewAttachments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppStoreReviewAttachmentsIdKey() {
  return ['v1', '/v1/appStoreReviewAttachments/:id', 'DELETE'] as const
}

export function useDeleteV1AppStoreReviewAttachmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppStoreReviewAttachmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>
        },
      ) => parseResponse(client.v1.appStoreReviewAttachments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AppStoreReviewAttachmentsIdKey() {
  return ['v1', '/v1/appStoreReviewAttachments/:id', 'PATCH'] as const
}

export function usePatchV1AppStoreReviewAttachmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppStoreReviewAttachmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']> },
      ) => parseResponse(client.v1.appStoreReviewAttachments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppStoreReviewDetailsKey() {
  return ['v1', '/v1/appStoreReviewDetails', 'POST'] as const
}

export function usePostV1AppStoreReviewDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreReviewDetails.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appStoreReviewDetails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppStoreReviewDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.appStoreReviewDetails.$post> },
      ) => parseResponse(client.v1.appStoreReviewDetails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppStoreReviewDetailsIdKey(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>,
) {
  return ['v1', '/v1/appStoreReviewDetails/:id', args] as const
}

export function useGetV1AppStoreReviewDetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
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
        ? getGetV1AppStoreReviewDetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appStoreReviewDetails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreReviewDetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
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
        ? getGetV1AppStoreReviewDetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appStoreReviewDetails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AppStoreReviewDetailsIdKey() {
  return ['v1', '/v1/appStoreReviewDetails/:id', 'PATCH'] as const
}

export function usePatchV1AppStoreReviewDetailsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppStoreReviewDetailsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']> },
      ) => parseResponse(client.v1.appStoreReviewDetails[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsKey(
  args: InferRequestType<
    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
  >,
) {
  return ['v1', '/v1/appStoreReviewDetails/:id/appStoreReviewAttachments', args] as const
}

export function useGetV1AppStoreReviewDetailsIdAppStoreReviewAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
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
        ? getGetV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsKey(args)
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
                (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
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
          client.v1.appStoreReviewDetails[':id'].appStoreReviewAttachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreReviewDetailsIdAppStoreReviewAttachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
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
        ? getGetV1AppStoreReviewDetailsIdAppStoreReviewAttachmentsKey(args)
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
                (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
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
          client.v1.appStoreReviewDetails[':id'].appStoreReviewAttachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppStoreVersionLocalizationsKey() {
  return ['v1', '/v1/appStoreVersionLocalizations', 'POST'] as const
}

export function usePostV1AppStoreVersionLocalizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.appStoreVersionLocalizations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appStoreVersionLocalizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppStoreVersionLocalizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.appStoreVersionLocalizations.$post> },
      ) => parseResponse(client.v1.appStoreVersionLocalizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppStoreVersionLocalizationsIdKey(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id', args] as const
}

export function useGetV1AppStoreVersionLocalizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
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
        ? getGetV1AppStoreVersionLocalizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appStoreVersionLocalizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionLocalizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
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
        ? getGetV1AppStoreVersionLocalizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appStoreVersionLocalizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppStoreVersionLocalizationsIdKey() {
  return ['v1', '/v1/appStoreVersionLocalizations/:id', 'DELETE'] as const
}

export function useDeleteV1AppStoreVersionLocalizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppStoreVersionLocalizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>
        },
      ) => parseResponse(client.v1.appStoreVersionLocalizations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AppStoreVersionLocalizationsIdKey() {
  return ['v1', '/v1/appStoreVersionLocalizations/:id', 'PATCH'] as const
}

export function usePatchV1AppStoreVersionLocalizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppStoreVersionLocalizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>
        },
      ) => parseResponse(client.v1.appStoreVersionLocalizations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppStoreVersionLocalizationsIdAppPreviewSetsKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id/appPreviewSets', args] as const
}

export function useGetV1AppStoreVersionLocalizationsIdAppPreviewSets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
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
        ? getGetV1AppStoreVersionLocalizationsIdAppPreviewSetsKey(args)
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
                (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
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
          client.v1.appStoreVersionLocalizations[':id'].appPreviewSets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionLocalizationsIdAppPreviewSets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
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
        ? getGetV1AppStoreVersionLocalizationsIdAppPreviewSetsKey(args)
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
                (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
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
          client.v1.appStoreVersionLocalizations[':id'].appPreviewSets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppStoreVersionLocalizationsIdAppScreenshotSetsKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersionLocalizations/:id/appScreenshotSets', args] as const
}

export function useGetV1AppStoreVersionLocalizationsIdAppScreenshotSets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
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
        ? getGetV1AppStoreVersionLocalizationsIdAppScreenshotSetsKey(args)
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
                (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
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
          client.v1.appStoreVersionLocalizations[':id'].appScreenshotSets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionLocalizationsIdAppScreenshotSets<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
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
        ? getGetV1AppStoreVersionLocalizationsIdAppScreenshotSetsKey(args)
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
                (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
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
          client.v1.appStoreVersionLocalizations[':id'].appScreenshotSets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppStoreVersionPhasedReleasesKey() {
  return ['v1', '/v1/appStoreVersionPhasedReleases', 'POST'] as const
}

export function usePostV1AppStoreVersionPhasedReleases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.appStoreVersionPhasedReleases.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appStoreVersionPhasedReleases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppStoreVersionPhasedReleasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.appStoreVersionPhasedReleases.$post> },
      ) => parseResponse(client.v1.appStoreVersionPhasedReleases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppStoreVersionPhasedReleasesIdKey() {
  return ['v1', '/v1/appStoreVersionPhasedReleases/:id', 'DELETE'] as const
}

export function useDeleteV1AppStoreVersionPhasedReleasesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppStoreVersionPhasedReleasesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>
        },
      ) =>
        parseResponse(client.v1.appStoreVersionPhasedReleases[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AppStoreVersionPhasedReleasesIdKey() {
  return ['v1', '/v1/appStoreVersionPhasedReleases/:id', 'PATCH'] as const
}

export function usePatchV1AppStoreVersionPhasedReleasesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppStoreVersionPhasedReleasesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>
        },
      ) => parseResponse(client.v1.appStoreVersionPhasedReleases[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppStoreVersionSubmissionsKey() {
  return ['v1', '/v1/appStoreVersionSubmissions', 'POST'] as const
}

export function usePostV1AppStoreVersionSubmissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreVersionSubmissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appStoreVersionSubmissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppStoreVersionSubmissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.appStoreVersionSubmissions.$post> },
      ) => parseResponse(client.v1.appStoreVersionSubmissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppStoreVersionSubmissionsIdKey() {
  return ['v1', '/v1/appStoreVersionSubmissions/:id', 'DELETE'] as const
}

export function useDeleteV1AppStoreVersionSubmissionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppStoreVersionSubmissionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>
        },
      ) => parseResponse(client.v1.appStoreVersionSubmissions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppStoreVersionsKey() {
  return ['v1', '/v1/appStoreVersions', 'POST'] as const
}

export function usePostV1AppStoreVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.appStoreVersions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.appStoreVersions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppStoreVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.appStoreVersions.$post> }) =>
        parseResponse(client.v1.appStoreVersions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdKey(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>,
) {
  return ['v1', '/v1/appStoreVersions/:id', args] as const
}

export function useGetV1AppStoreVersionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
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
        ? getGetV1AppStoreVersionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appStoreVersions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
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
        ? getGetV1AppStoreVersionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appStoreVersions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppStoreVersionsIdKey() {
  return ['v1', '/v1/appStoreVersions/:id', 'DELETE'] as const
}

export function useDeleteV1AppStoreVersionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppStoreVersionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$delete']> },
      ) => parseResponse(client.v1.appStoreVersions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AppStoreVersionsIdKey() {
  return ['v1', '/v1/appStoreVersions/:id', 'PATCH'] as const
}

export function usePatchV1AppStoreVersionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppStoreVersionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$patch']> },
      ) => parseResponse(client.v1.appStoreVersions[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdAgeRatingDeclarationKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/ageRatingDeclaration', args] as const
}

export function useGetV1AppStoreVersionsIdAgeRatingDeclaration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
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
        ? getGetV1AppStoreVersionsIdAgeRatingDeclarationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.appStoreVersions[':id'].ageRatingDeclaration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdAgeRatingDeclaration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
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
        ? getGetV1AppStoreVersionsIdAgeRatingDeclarationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.appStoreVersions[':id'].ageRatingDeclaration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdAppStoreReviewDetailKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreReviewDetail', args] as const
}

export function useGetV1AppStoreVersionsIdAppStoreReviewDetail<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
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
        ? getGetV1AppStoreVersionsIdAppStoreReviewDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.appStoreVersions[':id'].appStoreReviewDetail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdAppStoreReviewDetail<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
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
        ? getGetV1AppStoreVersionsIdAppStoreReviewDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.appStoreVersions[':id'].appStoreReviewDetail.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdAppStoreVersionLocalizationsKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionLocalizations', args] as const
}

export function useGetV1AppStoreVersionsIdAppStoreVersionLocalizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
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
        ? getGetV1AppStoreVersionsIdAppStoreVersionLocalizationsKey(args)
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
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
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
          client.v1.appStoreVersions[':id'].appStoreVersionLocalizations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdAppStoreVersionLocalizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
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
        ? getGetV1AppStoreVersionsIdAppStoreVersionLocalizationsKey(args)
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
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
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
          client.v1.appStoreVersions[':id'].appStoreVersionLocalizations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdAppStoreVersionPhasedReleaseKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionPhasedRelease', args] as const
}

export function useGetV1AppStoreVersionsIdAppStoreVersionPhasedRelease<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
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
        ? getGetV1AppStoreVersionsIdAppStoreVersionPhasedReleaseKey(args)
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
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
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
          client.v1.appStoreVersions[':id'].appStoreVersionPhasedRelease.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdAppStoreVersionPhasedRelease<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
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
        ? getGetV1AppStoreVersionsIdAppStoreVersionPhasedReleaseKey(args)
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
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
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
          client.v1.appStoreVersions[':id'].appStoreVersionPhasedRelease.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdAppStoreVersionSubmissionKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/appStoreVersionSubmission', args] as const
}

export function useGetV1AppStoreVersionsIdAppStoreVersionSubmission<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
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
        ? getGetV1AppStoreVersionsIdAppStoreVersionSubmissionKey(args)
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
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
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
          client.v1.appStoreVersions[':id'].appStoreVersionSubmission.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdAppStoreVersionSubmission<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
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
        ? getGetV1AppStoreVersionsIdAppStoreVersionSubmissionKey(args)
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
                (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
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
          client.v1.appStoreVersions[':id'].appStoreVersionSubmission.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdBuildKey(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>,
) {
  return ['v1', '/v1/appStoreVersions/:id/build', args] as const
}

export function useGetV1AppStoreVersionsIdBuild<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
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
        ? getGetV1AppStoreVersionsIdBuildKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appStoreVersions[':id'].build.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdBuild<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
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
        ? getGetV1AppStoreVersionsIdBuildKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.appStoreVersions[':id'].build.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdIdfaDeclarationKey(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>,
) {
  return ['v1', '/v1/appStoreVersions/:id/idfaDeclaration', args] as const
}

export function useGetV1AppStoreVersionsIdIdfaDeclaration<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
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
        ? getGetV1AppStoreVersionsIdIdfaDeclarationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appStoreVersions[':id'].idfaDeclaration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdIdfaDeclaration<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
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
        ? getGetV1AppStoreVersionsIdIdfaDeclarationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.appStoreVersions[':id'].idfaDeclaration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdRelationshipsBuildKey(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
  >,
) {
  return ['v1', '/v1/appStoreVersions/:id/relationships/build', args] as const
}

export function useGetV1AppStoreVersionsIdRelationshipsBuild<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
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
        ? getGetV1AppStoreVersionsIdRelationshipsBuildKey(args)
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
                (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
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
          client.v1.appStoreVersions[':id'].relationships.build.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdRelationshipsBuild<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
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
        ? getGetV1AppStoreVersionsIdRelationshipsBuildKey(args)
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
                (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
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
          client.v1.appStoreVersions[':id'].relationships.build.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AppStoreVersionsIdRelationshipsBuildKey() {
  return ['v1', '/v1/appStoreVersions/:id/relationships/build', 'PATCH'] as const
}

export function usePatchV1AppStoreVersionsIdRelationshipsBuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppStoreVersionsIdRelationshipsBuildKey()
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
            (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.appStoreVersions[':id'].relationships.build.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppStoreVersionsIdRoutingAppCoverageKey(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>,
) {
  return ['v1', '/v1/appStoreVersions/:id/routingAppCoverage', args] as const
}

export function useGetV1AppStoreVersionsIdRoutingAppCoverage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
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
        ? getGetV1AppStoreVersionsIdRoutingAppCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.appStoreVersions[':id'].routingAppCoverage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppStoreVersionsIdRoutingAppCoverage<TError = unknown>(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
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
        ? getGetV1AppStoreVersionsIdRoutingAppCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.appStoreVersions[':id'].routingAppCoverage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsKey(args: InferRequestType<typeof client.v1.apps.$get>) {
  return ['v1', '/v1/apps', args] as const
}

export function useGetV1Apps<TError = unknown>(
  args: InferRequestType<typeof client.v1.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Apps<TError = unknown>(
  args: InferRequestType<typeof client.v1.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV1AppsIdKey(args: InferRequestType<(typeof client.v1.apps)[':id']['$get']>) {
  return ['v1', '/v1/apps/:id', args] as const
}

export function useGetV1AppsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AppsIdKey() {
  return ['v1', '/v1/apps/:id', 'PATCH'] as const
}

export function usePatchV1AppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.apps)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AppsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.apps)[':id']['$patch']> },
      ) => parseResponse(client.v1.apps[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsIdAppInfosKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>,
) {
  return ['v1', '/v1/apps/:id/appInfos', args] as const
}

export function useGetV1AppsIdAppInfos<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
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
        ? getGetV1AppsIdAppInfosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].appInfos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdAppInfos<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
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
        ? getGetV1AppsIdAppInfosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['appInfos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].appInfos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdAppStoreVersionsKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>,
) {
  return ['v1', '/v1/apps/:id/appStoreVersions', args] as const
}

export function useGetV1AppsIdAppStoreVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
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
        ? getGetV1AppsIdAppStoreVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].appStoreVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdAppStoreVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
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
        ? getGetV1AppsIdAppStoreVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].appStoreVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdAvailableTerritoriesKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>,
) {
  return ['v1', '/v1/apps/:id/availableTerritories', args] as const
}

export function useGetV1AppsIdAvailableTerritories<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
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
        ? getGetV1AppsIdAvailableTerritoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].availableTerritories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdAvailableTerritories<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
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
        ? getGetV1AppsIdAvailableTerritoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].availableTerritories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdBetaAppLocalizationsKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>,
) {
  return ['v1', '/v1/apps/:id/betaAppLocalizations', args] as const
}

export function useGetV1AppsIdBetaAppLocalizations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
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
        ? getGetV1AppsIdBetaAppLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].betaAppLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdBetaAppLocalizations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
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
        ? getGetV1AppsIdBetaAppLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].betaAppLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdBetaAppReviewDetailKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>,
) {
  return ['v1', '/v1/apps/:id/betaAppReviewDetail', args] as const
}

export function useGetV1AppsIdBetaAppReviewDetail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
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
        ? getGetV1AppsIdBetaAppReviewDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].betaAppReviewDetail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdBetaAppReviewDetail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
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
        ? getGetV1AppsIdBetaAppReviewDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].betaAppReviewDetail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdBetaGroupsKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>,
) {
  return ['v1', '/v1/apps/:id/betaGroups', args] as const
}

export function useGetV1AppsIdBetaGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
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
        ? getGetV1AppsIdBetaGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].betaGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdBetaGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
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
        ? getGetV1AppsIdBetaGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].betaGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdBetaLicenseAgreementKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>,
) {
  return ['v1', '/v1/apps/:id/betaLicenseAgreement', args] as const
}

export function useGetV1AppsIdBetaLicenseAgreement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
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
        ? getGetV1AppsIdBetaLicenseAgreementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].betaLicenseAgreement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdBetaLicenseAgreement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
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
        ? getGetV1AppsIdBetaLicenseAgreementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].betaLicenseAgreement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdBuildsKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>,
) {
  return ['v1', '/v1/apps/:id/builds', args] as const
}

export function useGetV1AppsIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppsIdBuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppsIdBuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdEndUserLicenseAgreementKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>,
) {
  return ['v1', '/v1/apps/:id/endUserLicenseAgreement', args] as const
}

export function useGetV1AppsIdEndUserLicenseAgreement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
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
        ? getGetV1AppsIdEndUserLicenseAgreementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].endUserLicenseAgreement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdEndUserLicenseAgreement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
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
        ? getGetV1AppsIdEndUserLicenseAgreementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].endUserLicenseAgreement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdGameCenterEnabledVersionsKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>,
) {
  return ['v1', '/v1/apps/:id/gameCenterEnabledVersions', args] as const
}

export function useGetV1AppsIdGameCenterEnabledVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
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
        ? getGetV1AppsIdGameCenterEnabledVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].gameCenterEnabledVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdGameCenterEnabledVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
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
        ? getGetV1AppsIdGameCenterEnabledVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':id'].gameCenterEnabledVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdInAppPurchasesKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>,
) {
  return ['v1', '/v1/apps/:id/inAppPurchases', args] as const
}

export function useGetV1AppsIdInAppPurchases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
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
        ? getGetV1AppsIdInAppPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].inAppPurchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdInAppPurchases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
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
        ? getGetV1AppsIdInAppPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].inAppPurchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdPerfPowerMetricsKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>,
) {
  return ['v1', '/v1/apps/:id/perfPowerMetrics', args] as const
}

export function useGetV1AppsIdPerfPowerMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
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
        ? getGetV1AppsIdPerfPowerMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].perfPowerMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdPerfPowerMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
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
        ? getGetV1AppsIdPerfPowerMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].perfPowerMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdPreOrderKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>,
) {
  return ['v1', '/v1/apps/:id/preOrder', args] as const
}

export function useGetV1AppsIdPreOrder<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
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
        ? getGetV1AppsIdPreOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].preOrder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdPreOrder<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
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
        ? getGetV1AppsIdPreOrderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['preOrder']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].preOrder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdPreReleaseVersionsKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>,
) {
  return ['v1', '/v1/apps/:id/preReleaseVersions', args] as const
}

export function useGetV1AppsIdPreReleaseVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
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
        ? getGetV1AppsIdPreReleaseVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].preReleaseVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdPreReleaseVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
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
        ? getGetV1AppsIdPreReleaseVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].preReleaseVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsIdPricesKey(
  args: InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>,
) {
  return ['v1', '/v1/apps/:id/prices', args] as const
}

export function useGetV1AppsIdPrices<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppsIdPricesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsIdPrices<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AppsIdPricesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':id']['prices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':id'].prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppsIdRelationshipsBetaTestersKey() {
  return ['v1', '/v1/apps/:id/relationships/betaTesters', 'DELETE'] as const
}

export function useDeleteV1AppsIdRelationshipsBetaTesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsIdRelationshipsBetaTestersKey()
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
            (typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.apps[':id'].relationships.betaTesters.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaAppLocalizationsKey(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$get>,
) {
  return ['v1', '/v1/betaAppLocalizations', args] as const
}

export function useGetV1BetaAppLocalizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
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
        ? getGetV1BetaAppLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppLocalizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
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
        ? getGetV1BetaAppLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaAppLocalizationsKey() {
  return ['v1', '/v1/betaAppLocalizations', 'POST'] as const
}

export function usePostV1BetaAppLocalizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppLocalizations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.betaAppLocalizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaAppLocalizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.betaAppLocalizations.$post> },
      ) => parseResponse(client.v1.betaAppLocalizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaAppLocalizationsIdKey(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>,
) {
  return ['v1', '/v1/betaAppLocalizations/:id', args] as const
}

export function useGetV1BetaAppLocalizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
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
        ? getGetV1BetaAppLocalizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppLocalizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppLocalizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
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
        ? getGetV1BetaAppLocalizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppLocalizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BetaAppLocalizationsIdKey() {
  return ['v1', '/v1/betaAppLocalizations/:id', 'DELETE'] as const
}

export function useDeleteV1BetaAppLocalizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaAppLocalizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']> },
      ) => parseResponse(client.v1.betaAppLocalizations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1BetaAppLocalizationsIdKey() {
  return ['v1', '/v1/betaAppLocalizations/:id', 'PATCH'] as const
}

export function usePatchV1BetaAppLocalizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BetaAppLocalizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']> },
      ) => parseResponse(client.v1.betaAppLocalizations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaAppLocalizationsIdAppKey(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/betaAppLocalizations/:id/app', args] as const
}

export function useGetV1BetaAppLocalizationsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
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
        ? getGetV1BetaAppLocalizationsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaAppLocalizations[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppLocalizationsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
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
        ? getGetV1BetaAppLocalizationsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaAppLocalizations[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaAppReviewDetailsKey(
  args: InferRequestType<typeof client.v1.betaAppReviewDetails.$get>,
) {
  return ['v1', '/v1/betaAppReviewDetails', args] as const
}

export function useGetV1BetaAppReviewDetails<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaAppReviewDetails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
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
        ? getGetV1BetaAppReviewDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppReviewDetails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppReviewDetails<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaAppReviewDetails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
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
        ? getGetV1BetaAppReviewDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewDetails.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppReviewDetails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaAppReviewDetailsIdKey(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>,
) {
  return ['v1', '/v1/betaAppReviewDetails/:id', args] as const
}

export function useGetV1BetaAppReviewDetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
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
        ? getGetV1BetaAppReviewDetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppReviewDetails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppReviewDetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
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
        ? getGetV1BetaAppReviewDetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppReviewDetails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1BetaAppReviewDetailsIdKey() {
  return ['v1', '/v1/betaAppReviewDetails/:id', 'PATCH'] as const
}

export function usePatchV1BetaAppReviewDetailsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BetaAppReviewDetailsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']> },
      ) => parseResponse(client.v1.betaAppReviewDetails[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaAppReviewDetailsIdAppKey(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/betaAppReviewDetails/:id/app', args] as const
}

export function useGetV1BetaAppReviewDetailsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
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
        ? getGetV1BetaAppReviewDetailsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaAppReviewDetails[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppReviewDetailsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
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
        ? getGetV1BetaAppReviewDetailsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaAppReviewDetails[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaAppReviewSubmissionsKey(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>,
) {
  return ['v1', '/v1/betaAppReviewSubmissions', args] as const
}

export function useGetV1BetaAppReviewSubmissions<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
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
        ? getGetV1BetaAppReviewSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppReviewSubmissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppReviewSubmissions<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
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
        ? getGetV1BetaAppReviewSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaAppReviewSubmissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaAppReviewSubmissionsKey() {
  return ['v1', '/v1/betaAppReviewSubmissions', 'POST'] as const
}

export function usePostV1BetaAppReviewSubmissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaAppReviewSubmissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.betaAppReviewSubmissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaAppReviewSubmissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$post> },
      ) => parseResponse(client.v1.betaAppReviewSubmissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaAppReviewSubmissionsIdKey(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>,
) {
  return ['v1', '/v1/betaAppReviewSubmissions/:id', args] as const
}

export function useGetV1BetaAppReviewSubmissionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
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
        ? getGetV1BetaAppReviewSubmissionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaAppReviewSubmissions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppReviewSubmissionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
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
        ? getGetV1BetaAppReviewSubmissionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaAppReviewSubmissions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaAppReviewSubmissionsIdBuildKey(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>,
) {
  return ['v1', '/v1/betaAppReviewSubmissions/:id/build', args] as const
}

export function useGetV1BetaAppReviewSubmissionsIdBuild<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
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
        ? getGetV1BetaAppReviewSubmissionsIdBuildKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaAppReviewSubmissions[':id'].build.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaAppReviewSubmissionsIdBuild<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
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
        ? getGetV1BetaAppReviewSubmissionsIdBuildKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaAppReviewSubmissions[':id'].build.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaBuildLocalizationsKey(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$get>,
) {
  return ['v1', '/v1/betaBuildLocalizations', args] as const
}

export function useGetV1BetaBuildLocalizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
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
        ? getGetV1BetaBuildLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaBuildLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaBuildLocalizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
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
        ? getGetV1BetaBuildLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaBuildLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaBuildLocalizationsKey() {
  return ['v1', '/v1/betaBuildLocalizations', 'POST'] as const
}

export function usePostV1BetaBuildLocalizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaBuildLocalizations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.betaBuildLocalizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaBuildLocalizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.betaBuildLocalizations.$post> },
      ) => parseResponse(client.v1.betaBuildLocalizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaBuildLocalizationsIdKey(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>,
) {
  return ['v1', '/v1/betaBuildLocalizations/:id', args] as const
}

export function useGetV1BetaBuildLocalizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
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
        ? getGetV1BetaBuildLocalizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaBuildLocalizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaBuildLocalizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
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
        ? getGetV1BetaBuildLocalizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaBuildLocalizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BetaBuildLocalizationsIdKey() {
  return ['v1', '/v1/betaBuildLocalizations/:id', 'DELETE'] as const
}

export function useDeleteV1BetaBuildLocalizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaBuildLocalizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']> },
      ) => parseResponse(client.v1.betaBuildLocalizations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1BetaBuildLocalizationsIdKey() {
  return ['v1', '/v1/betaBuildLocalizations/:id', 'PATCH'] as const
}

export function usePatchV1BetaBuildLocalizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BetaBuildLocalizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']> },
      ) => parseResponse(client.v1.betaBuildLocalizations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaBuildLocalizationsIdBuildKey(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>,
) {
  return ['v1', '/v1/betaBuildLocalizations/:id/build', args] as const
}

export function useGetV1BetaBuildLocalizationsIdBuild<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
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
        ? getGetV1BetaBuildLocalizationsIdBuildKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaBuildLocalizations[':id'].build.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaBuildLocalizationsIdBuild<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
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
        ? getGetV1BetaBuildLocalizationsIdBuildKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaBuildLocalizations[':id'].build.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaGroupsKey(args: InferRequestType<typeof client.v1.betaGroups.$get>) {
  return ['v1', '/v1/betaGroups', args] as const
}

export function useGetV1BetaGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BetaGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BetaGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaGroupsKey() {
  return ['v1', '/v1/betaGroups', 'POST'] as const
}

export function usePostV1BetaGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaGroups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.betaGroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.betaGroups.$post> }) =>
        parseResponse(client.v1.betaGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaGroupsIdKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id', args] as const
}

export function useGetV1BetaGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1BetaGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1BetaGroupsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BetaGroupsIdKey() {
  return ['v1', '/v1/betaGroups/:id', 'DELETE'] as const
}

export function useDeleteV1BetaGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.betaGroups)[':id']['$delete']> },
      ) => parseResponse(client.v1.betaGroups[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1BetaGroupsIdKey() {
  return ['v1', '/v1/betaGroups/:id', 'PATCH'] as const
}

export function usePatchV1BetaGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BetaGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.betaGroups)[':id']['$patch']> },
      ) => parseResponse(client.v1.betaGroups[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaGroupsIdAppKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id/app', args] as const
}

export function useGetV1BetaGroupsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
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
        ? getGetV1BetaGroupsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaGroupsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
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
        ? getGetV1BetaGroupsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaGroupsIdBetaTestersKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id/betaTesters', args] as const
}

export function useGetV1BetaGroupsIdBetaTesters<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
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
        ? getGetV1BetaGroupsIdBetaTestersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups[':id'].betaTesters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaGroupsIdBetaTesters<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
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
        ? getGetV1BetaGroupsIdBetaTestersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups[':id'].betaTesters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaGroupsIdBuildsKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id/builds', args] as const
}

export function useGetV1BetaGroupsIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
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
        ? getGetV1BetaGroupsIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups[':id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaGroupsIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
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
        ? getGetV1BetaGroupsIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaGroups[':id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaGroupsIdRelationshipsBetaTestersKey(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
  >,
) {
  return ['v1', '/v1/betaGroups/:id/relationships/betaTesters', args] as const
}

export function useGetV1BetaGroupsIdRelationshipsBetaTesters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
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
        ? getGetV1BetaGroupsIdRelationshipsBetaTestersKey(args)
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
                (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
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
          client.v1.betaGroups[':id'].relationships.betaTesters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaGroupsIdRelationshipsBetaTesters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
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
        ? getGetV1BetaGroupsIdRelationshipsBetaTestersKey(args)
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
                (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
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
          client.v1.betaGroups[':id'].relationships.betaTesters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaGroupsIdRelationshipsBetaTestersKey() {
  return ['v1', '/v1/betaGroups/:id/relationships/betaTesters', 'POST'] as const
}

export function usePostV1BetaGroupsIdRelationshipsBetaTesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaGroupsIdRelationshipsBetaTestersKey()
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
            (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.betaGroups[':id'].relationships.betaTesters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BetaGroupsIdRelationshipsBetaTestersKey() {
  return ['v1', '/v1/betaGroups/:id/relationships/betaTesters', 'DELETE'] as const
}

export function useDeleteV1BetaGroupsIdRelationshipsBetaTesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaGroupsIdRelationshipsBetaTestersKey()
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
            (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.betaGroups[':id'].relationships.betaTesters.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaGroupsIdRelationshipsBuildsKey(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>,
) {
  return ['v1', '/v1/betaGroups/:id/relationships/builds', args] as const
}

export function useGetV1BetaGroupsIdRelationshipsBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
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
        ? getGetV1BetaGroupsIdRelationshipsBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaGroups[':id'].relationships.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaGroupsIdRelationshipsBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
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
        ? getGetV1BetaGroupsIdRelationshipsBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaGroups[':id'].relationships.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaGroupsIdRelationshipsBuildsKey() {
  return ['v1', '/v1/betaGroups/:id/relationships/builds', 'POST'] as const
}

export function usePostV1BetaGroupsIdRelationshipsBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaGroupsIdRelationshipsBuildsKey()
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
            (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.betaGroups[':id'].relationships.builds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BetaGroupsIdRelationshipsBuildsKey() {
  return ['v1', '/v1/betaGroups/:id/relationships/builds', 'DELETE'] as const
}

export function useDeleteV1BetaGroupsIdRelationshipsBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaGroupsIdRelationshipsBuildsKey()
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
            (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.betaGroups[':id'].relationships.builds.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaLicenseAgreementsKey(
  args: InferRequestType<typeof client.v1.betaLicenseAgreements.$get>,
) {
  return ['v1', '/v1/betaLicenseAgreements', args] as const
}

export function useGetV1BetaLicenseAgreements<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaLicenseAgreements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
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
        ? getGetV1BetaLicenseAgreementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaLicenseAgreements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaLicenseAgreements<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaLicenseAgreements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
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
        ? getGetV1BetaLicenseAgreementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaLicenseAgreements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaLicenseAgreements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaLicenseAgreementsIdKey(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>,
) {
  return ['v1', '/v1/betaLicenseAgreements/:id', args] as const
}

export function useGetV1BetaLicenseAgreementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
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
        ? getGetV1BetaLicenseAgreementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaLicenseAgreements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaLicenseAgreementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
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
        ? getGetV1BetaLicenseAgreementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaLicenseAgreements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1BetaLicenseAgreementsIdKey() {
  return ['v1', '/v1/betaLicenseAgreements/:id', 'PATCH'] as const
}

export function usePatchV1BetaLicenseAgreementsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BetaLicenseAgreementsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']> },
      ) => parseResponse(client.v1.betaLicenseAgreements[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaLicenseAgreementsIdAppKey(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/betaLicenseAgreements/:id/app', args] as const
}

export function useGetV1BetaLicenseAgreementsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
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
        ? getGetV1BetaLicenseAgreementsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaLicenseAgreements[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaLicenseAgreementsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
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
        ? getGetV1BetaLicenseAgreementsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaLicenseAgreements[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaTesterInvitationsKey() {
  return ['v1', '/v1/betaTesterInvitations', 'POST'] as const
}

export function usePostV1BetaTesterInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesterInvitations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.betaTesterInvitations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaTesterInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.betaTesterInvitations.$post> },
      ) => parseResponse(client.v1.betaTesterInvitations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaTestersKey(args: InferRequestType<typeof client.v1.betaTesters.$get>) {
  return ['v1', '/v1/betaTesters', args] as const
}

export function useGetV1BetaTesters<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaTesters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BetaTestersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaTesters<TError = unknown>(
  args: InferRequestType<typeof client.v1.betaTesters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BetaTestersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaTestersKey() {
  return ['v1', '/v1/betaTesters', 'POST'] as const
}

export function usePostV1BetaTesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.betaTesters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.betaTesters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaTestersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.betaTesters.$post> }) =>
        parseResponse(client.v1.betaTesters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaTestersIdKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id', args] as const
}

export function useGetV1BetaTestersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
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
        ? getGetV1BetaTestersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaTestersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
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
        ? getGetV1BetaTestersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BetaTestersIdKey() {
  return ['v1', '/v1/betaTesters/:id', 'DELETE'] as const
}

export function useDeleteV1BetaTestersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaTestersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.betaTesters)[':id']['$delete']> },
      ) => parseResponse(client.v1.betaTesters[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaTestersIdAppsKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/apps', args] as const
}

export function useGetV1BetaTestersIdApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
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
        ? getGetV1BetaTestersIdAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters[':id'].apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaTestersIdApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
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
        ? getGetV1BetaTestersIdAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters[':id'].apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaTestersIdBetaGroupsKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/betaGroups', args] as const
}

export function useGetV1BetaTestersIdBetaGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
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
        ? getGetV1BetaTestersIdBetaGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters[':id'].betaGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaTestersIdBetaGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
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
        ? getGetV1BetaTestersIdBetaGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters[':id'].betaGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaTestersIdBuildsKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/builds', args] as const
}

export function useGetV1BetaTestersIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
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
        ? getGetV1BetaTestersIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters[':id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaTestersIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
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
        ? getGetV1BetaTestersIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.betaTesters[':id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BetaTestersIdRelationshipsAppsKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/apps', args] as const
}

export function useGetV1BetaTestersIdRelationshipsApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
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
        ? getGetV1BetaTestersIdRelationshipsAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaTesters[':id'].relationships.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaTestersIdRelationshipsApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
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
        ? getGetV1BetaTestersIdRelationshipsAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaTesters[':id'].relationships.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BetaTestersIdRelationshipsAppsKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/apps', 'DELETE'] as const
}

export function useDeleteV1BetaTestersIdRelationshipsApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaTestersIdRelationshipsAppsKey()
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
            (typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.betaTesters[':id'].relationships.apps.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaTestersIdRelationshipsBetaGroupsKey(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
  >,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/betaGroups', args] as const
}

export function useGetV1BetaTestersIdRelationshipsBetaGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
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
        ? getGetV1BetaTestersIdRelationshipsBetaGroupsKey(args)
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
                (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
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
          client.v1.betaTesters[':id'].relationships.betaGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaTestersIdRelationshipsBetaGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
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
        ? getGetV1BetaTestersIdRelationshipsBetaGroupsKey(args)
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
                (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
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
          client.v1.betaTesters[':id'].relationships.betaGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaTestersIdRelationshipsBetaGroupsKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/betaGroups', 'POST'] as const
}

export function usePostV1BetaTestersIdRelationshipsBetaGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaTestersIdRelationshipsBetaGroupsKey()
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
            (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.betaTesters[':id'].relationships.betaGroups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BetaTestersIdRelationshipsBetaGroupsKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/betaGroups', 'DELETE'] as const
}

export function useDeleteV1BetaTestersIdRelationshipsBetaGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaTestersIdRelationshipsBetaGroupsKey()
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
            (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.betaTesters[':id'].relationships.betaGroups.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1BetaTestersIdRelationshipsBuildsKey(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>,
) {
  return ['v1', '/v1/betaTesters/:id/relationships/builds', args] as const
}

export function useGetV1BetaTestersIdRelationshipsBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
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
        ? getGetV1BetaTestersIdRelationshipsBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaTesters[':id'].relationships.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BetaTestersIdRelationshipsBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
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
        ? getGetV1BetaTestersIdRelationshipsBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.betaTesters[':id'].relationships.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BetaTestersIdRelationshipsBuildsKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/builds', 'POST'] as const
}

export function usePostV1BetaTestersIdRelationshipsBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BetaTestersIdRelationshipsBuildsKey()
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
            (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.betaTesters[':id'].relationships.builds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BetaTestersIdRelationshipsBuildsKey() {
  return ['v1', '/v1/betaTesters/:id/relationships/builds', 'DELETE'] as const
}

export function useDeleteV1BetaTestersIdRelationshipsBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BetaTestersIdRelationshipsBuildsKey()
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
            (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.betaTesters[':id'].relationships.builds.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1BuildBetaDetailsKey(
  args: InferRequestType<typeof client.v1.buildBetaDetails.$get>,
) {
  return ['v1', '/v1/buildBetaDetails', args] as const
}

export function useGetV1BuildBetaDetails<TError = unknown>(
  args: InferRequestType<typeof client.v1.buildBetaDetails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>
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
        ? getGetV1BuildBetaDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.buildBetaDetails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildBetaDetails<TError = unknown>(
  args: InferRequestType<typeof client.v1.buildBetaDetails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>
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
        ? getGetV1BuildBetaDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaDetails.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.buildBetaDetails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildBetaDetailsIdKey(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>,
) {
  return ['v1', '/v1/buildBetaDetails/:id', args] as const
}

export function useGetV1BuildBetaDetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
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
        ? getGetV1BuildBetaDetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.buildBetaDetails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildBetaDetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
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
        ? getGetV1BuildBetaDetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.buildBetaDetails[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1BuildBetaDetailsIdKey() {
  return ['v1', '/v1/buildBetaDetails/:id', 'PATCH'] as const
}

export function usePatchV1BuildBetaDetailsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BuildBetaDetailsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$patch']> },
      ) => parseResponse(client.v1.buildBetaDetails[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BuildBetaDetailsIdBuildKey(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>,
) {
  return ['v1', '/v1/buildBetaDetails/:id/build', args] as const
}

export function useGetV1BuildBetaDetailsIdBuild<TError = unknown>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
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
        ? getGetV1BuildBetaDetailsIdBuildKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.buildBetaDetails[':id'].build.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildBetaDetailsIdBuild<TError = unknown>(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
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
        ? getGetV1BuildBetaDetailsIdBuildKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.buildBetaDetails[':id'].build.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BuildBetaNotificationsKey() {
  return ['v1', '/v1/buildBetaNotifications', 'POST'] as const
}

export function usePostV1BuildBetaNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.buildBetaNotifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.buildBetaNotifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BuildBetaNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.buildBetaNotifications.$post> },
      ) => parseResponse(client.v1.buildBetaNotifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BuildsKey(args: InferRequestType<typeof client.v1.builds.$get>) {
  return ['v1', '/v1/builds', args] as const
}

export function useGetV1Builds<TError = unknown>(
  args: InferRequestType<typeof client.v1.builds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Builds<TError = unknown>(
  args: InferRequestType<typeof client.v1.builds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BuildsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.builds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$get']>,
) {
  return ['v1', '/v1/builds/:id', args] as const
}

export function useGetV1BuildsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1BuildsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1BuildsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1BuildsIdKey() {
  return ['v1', '/v1/builds/:id', 'PATCH'] as const
}

export function usePatchV1BuildsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.builds)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BuildsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.builds)[':id']['$patch']> },
      ) => parseResponse(client.v1.builds[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BuildsIdAppKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/builds/:id/app', args] as const
}

export function useGetV1BuildsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1BuildsIdAppKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1BuildsIdAppKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.builds)[':id']['app']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdAppEncryptionDeclarationKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>,
) {
  return ['v1', '/v1/builds/:id/appEncryptionDeclaration', args] as const
}

export function useGetV1BuildsIdAppEncryptionDeclaration<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
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
        ? getGetV1BuildsIdAppEncryptionDeclarationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].appEncryptionDeclaration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdAppEncryptionDeclaration<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
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
        ? getGetV1BuildsIdAppEncryptionDeclarationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].appEncryptionDeclaration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdAppStoreVersionKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>,
) {
  return ['v1', '/v1/builds/:id/appStoreVersion', args] as const
}

export function useGetV1BuildsIdAppStoreVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
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
        ? getGetV1BuildsIdAppStoreVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].appStoreVersion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdAppStoreVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
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
        ? getGetV1BuildsIdAppStoreVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].appStoreVersion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdBetaAppReviewSubmissionKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>,
) {
  return ['v1', '/v1/builds/:id/betaAppReviewSubmission', args] as const
}

export function useGetV1BuildsIdBetaAppReviewSubmission<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
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
        ? getGetV1BuildsIdBetaAppReviewSubmissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].betaAppReviewSubmission.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdBetaAppReviewSubmission<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
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
        ? getGetV1BuildsIdBetaAppReviewSubmissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].betaAppReviewSubmission.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdBetaBuildLocalizationsKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>,
) {
  return ['v1', '/v1/builds/:id/betaBuildLocalizations', args] as const
}

export function useGetV1BuildsIdBetaBuildLocalizations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
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
        ? getGetV1BuildsIdBetaBuildLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].betaBuildLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdBetaBuildLocalizations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
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
        ? getGetV1BuildsIdBetaBuildLocalizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].betaBuildLocalizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdBuildBetaDetailKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>,
) {
  return ['v1', '/v1/builds/:id/buildBetaDetail', args] as const
}

export function useGetV1BuildsIdBuildBetaDetail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
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
        ? getGetV1BuildsIdBuildBetaDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].buildBetaDetail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdBuildBetaDetail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
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
        ? getGetV1BuildsIdBuildBetaDetailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].buildBetaDetail.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdDiagnosticSignaturesKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>,
) {
  return ['v1', '/v1/builds/:id/diagnosticSignatures', args] as const
}

export function useGetV1BuildsIdDiagnosticSignatures<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
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
        ? getGetV1BuildsIdDiagnosticSignaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].diagnosticSignatures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdDiagnosticSignatures<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
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
        ? getGetV1BuildsIdDiagnosticSignaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].diagnosticSignatures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdIconsKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>,
) {
  return ['v1', '/v1/builds/:id/icons', args] as const
}

export function useGetV1BuildsIdIcons<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>
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
        ? getGetV1BuildsIdIconsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].icons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdIcons<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>
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
        ? getGetV1BuildsIdIconsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['icons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].icons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdIndividualTestersKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>,
) {
  return ['v1', '/v1/builds/:id/individualTesters', args] as const
}

export function useGetV1BuildsIdIndividualTesters<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
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
        ? getGetV1BuildsIdIndividualTestersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].individualTesters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdIndividualTesters<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
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
        ? getGetV1BuildsIdIndividualTestersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].individualTesters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdPerfPowerMetricsKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>,
) {
  return ['v1', '/v1/builds/:id/perfPowerMetrics', args] as const
}

export function useGetV1BuildsIdPerfPowerMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
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
        ? getGetV1BuildsIdPerfPowerMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].perfPowerMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdPerfPowerMetrics<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
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
        ? getGetV1BuildsIdPerfPowerMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.builds[':id'].perfPowerMetrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdPreReleaseVersionKey(
  args: InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>,
) {
  return ['v1', '/v1/builds/:id/preReleaseVersion', args] as const
}

export function useGetV1BuildsIdPreReleaseVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
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
        ? getGetV1BuildsIdPreReleaseVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].preReleaseVersion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdPreReleaseVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
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
        ? getGetV1BuildsIdPreReleaseVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.builds[':id'].preReleaseVersion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BuildsIdRelationshipsAppEncryptionDeclarationKey(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
  >,
) {
  return ['v1', '/v1/builds/:id/relationships/appEncryptionDeclaration', args] as const
}

export function useGetV1BuildsIdRelationshipsAppEncryptionDeclaration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
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
        ? getGetV1BuildsIdRelationshipsAppEncryptionDeclarationKey(args)
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
                (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
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
          client.v1.builds[':id'].relationships.appEncryptionDeclaration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdRelationshipsAppEncryptionDeclaration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
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
        ? getGetV1BuildsIdRelationshipsAppEncryptionDeclarationKey(args)
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
                (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
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
          client.v1.builds[':id'].relationships.appEncryptionDeclaration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1BuildsIdRelationshipsAppEncryptionDeclarationKey() {
  return ['v1', '/v1/builds/:id/relationships/appEncryptionDeclaration', 'PATCH'] as const
}

export function usePatchV1BuildsIdRelationshipsAppEncryptionDeclaration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BuildsIdRelationshipsAppEncryptionDeclarationKey()
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
            (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.builds[':id'].relationships.appEncryptionDeclaration.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1BuildsIdRelationshipsBetaGroupsKey() {
  return ['v1', '/v1/builds/:id/relationships/betaGroups', 'POST'] as const
}

export function usePostV1BuildsIdRelationshipsBetaGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BuildsIdRelationshipsBetaGroupsKey()
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
            (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.builds[':id'].relationships.betaGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BuildsIdRelationshipsBetaGroupsKey() {
  return ['v1', '/v1/builds/:id/relationships/betaGroups', 'DELETE'] as const
}

export function useDeleteV1BuildsIdRelationshipsBetaGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BuildsIdRelationshipsBetaGroupsKey()
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
            (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.builds[':id'].relationships.betaGroups.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BuildsIdRelationshipsIndividualTestersKey(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
  >,
) {
  return ['v1', '/v1/builds/:id/relationships/individualTesters', args] as const
}

export function useGetV1BuildsIdRelationshipsIndividualTesters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
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
        ? getGetV1BuildsIdRelationshipsIndividualTestersKey(args)
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
                (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
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
          client.v1.builds[':id'].relationships.individualTesters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BuildsIdRelationshipsIndividualTesters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
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
        ? getGetV1BuildsIdRelationshipsIndividualTestersKey(args)
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
                (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
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
          client.v1.builds[':id'].relationships.individualTesters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1BuildsIdRelationshipsIndividualTestersKey() {
  return ['v1', '/v1/builds/:id/relationships/individualTesters', 'POST'] as const
}

export function usePostV1BuildsIdRelationshipsIndividualTesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BuildsIdRelationshipsIndividualTestersKey()
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
            (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.builds[':id'].relationships.individualTesters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BuildsIdRelationshipsIndividualTestersKey() {
  return ['v1', '/v1/builds/:id/relationships/individualTesters', 'DELETE'] as const
}

export function useDeleteV1BuildsIdRelationshipsIndividualTesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BuildsIdRelationshipsIndividualTestersKey()
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
            (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.builds[':id'].relationships.individualTesters.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1BundleIdCapabilitiesKey() {
  return ['v1', '/v1/bundleIdCapabilities', 'POST'] as const
}

export function usePostV1BundleIdCapabilities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIdCapabilities.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.bundleIdCapabilities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BundleIdCapabilitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.bundleIdCapabilities.$post> },
      ) => parseResponse(client.v1.bundleIdCapabilities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BundleIdCapabilitiesIdKey() {
  return ['v1', '/v1/bundleIdCapabilities/:id', 'DELETE'] as const
}

export function useDeleteV1BundleIdCapabilitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BundleIdCapabilitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']> },
      ) => parseResponse(client.v1.bundleIdCapabilities[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1BundleIdCapabilitiesIdKey() {
  return ['v1', '/v1/bundleIdCapabilities/:id', 'PATCH'] as const
}

export function usePatchV1BundleIdCapabilitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BundleIdCapabilitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']> },
      ) => parseResponse(client.v1.bundleIdCapabilities[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BundleIdsKey(args: InferRequestType<typeof client.v1.bundleIds.$get>) {
  return ['v1', '/v1/bundleIds', args] as const
}

export function useGetV1BundleIds<TError = unknown>(
  args: InferRequestType<typeof client.v1.bundleIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BundleIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bundleIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleIds<TError = unknown>(
  args: InferRequestType<typeof client.v1.bundleIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BundleIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bundleIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BundleIdsKey() {
  return ['v1', '/v1/bundleIds', 'POST'] as const
}

export function usePostV1BundleIds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bundleIds.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.bundleIds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BundleIdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.bundleIds.$post> }) =>
        parseResponse(client.v1.bundleIds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BundleIdsIdKey(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>,
) {
  return ['v1', '/v1/bundleIds/:id', args] as const
}

export function useGetV1BundleIdsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1BundleIdsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bundleIds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleIdsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1BundleIdsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bundleIds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1BundleIdsIdKey() {
  return ['v1', '/v1/bundleIds/:id', 'DELETE'] as const
}

export function useDeleteV1BundleIdsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bundleIds)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BundleIdsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.bundleIds)[':id']['$delete']> },
      ) => parseResponse(client.v1.bundleIds[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1BundleIdsIdKey() {
  return ['v1', '/v1/bundleIds/:id', 'PATCH'] as const
}

export function usePatchV1BundleIdsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bundleIds)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BundleIdsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.bundleIds)[':id']['$patch']> },
      ) => parseResponse(client.v1.bundleIds[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BundleIdsIdAppKey(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/bundleIds/:id/app', args] as const
}

export function useGetV1BundleIdsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
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
        ? getGetV1BundleIdsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bundleIds[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleIdsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
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
        ? getGetV1BundleIdsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bundleIds[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BundleIdsIdBundleIdCapabilitiesKey(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>,
) {
  return ['v1', '/v1/bundleIds/:id/bundleIdCapabilities', args] as const
}

export function useGetV1BundleIdsIdBundleIdCapabilities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
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
        ? getGetV1BundleIdsIdBundleIdCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.bundleIds[':id'].bundleIdCapabilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleIdsIdBundleIdCapabilities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
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
        ? getGetV1BundleIdsIdBundleIdCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.bundleIds[':id'].bundleIdCapabilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BundleIdsIdProfilesKey(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>,
) {
  return ['v1', '/v1/bundleIds/:id/profiles', args] as const
}

export function useGetV1BundleIdsIdProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
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
        ? getGetV1BundleIdsIdProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bundleIds[':id'].profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BundleIdsIdProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
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
        ? getGetV1BundleIdsIdProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bundleIds[':id'].profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CertificatesKey(
  args: InferRequestType<typeof client.v1.certificates.$get>,
) {
  return ['v1', '/v1/certificates', args] as const
}

export function useGetV1Certificates<TError = unknown>(
  args: InferRequestType<typeof client.v1.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Certificates<TError = unknown>(
  args: InferRequestType<typeof client.v1.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CertificatesKey() {
  return ['v1', '/v1/certificates', 'POST'] as const
}

export function usePostV1Certificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.certificates.$post> }) =>
        parseResponse(client.v1.certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CertificatesIdKey(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$get']>,
) {
  return ['v1', '/v1/certificates/:id', args] as const
}

export function useGetV1CertificatesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
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
        ? getGetV1CertificatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.certificates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CertificatesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
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
        ? getGetV1CertificatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.certificates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CertificatesIdKey() {
  return ['v1', '/v1/certificates/:id', 'DELETE'] as const
}

export function useDeleteV1CertificatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.certificates)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.certificates)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CertificatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.certificates)[':id']['$delete']> },
      ) => parseResponse(client.v1.certificates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DevicesKey(args: InferRequestType<typeof client.v1.devices.$get>) {
  return ['v1', '/v1/devices', args] as const
}

export function useGetV1Devices<TError = unknown>(
  args: InferRequestType<typeof client.v1.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Devices<TError = unknown>(
  args: InferRequestType<typeof client.v1.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DevicesKey() {
  return ['v1', '/v1/devices', 'POST'] as const
}

export function usePostV1Devices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.devices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.devices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.devices.$post> }) =>
        parseResponse(client.v1.devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DevicesIdKey(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$get']>,
) {
  return ['v1', '/v1/devices/:id', args] as const
}

export function useGetV1DevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1DevicesIdKey() {
  return ['v1', '/v1/devices/:id', 'PATCH'] as const
}

export function usePatchV1DevicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.devices)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.devices)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DevicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.devices)[':id']['$patch']> },
      ) => parseResponse(client.v1.devices[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DiagnosticSignaturesIdLogsKey(
  args: InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>,
) {
  return ['v1', '/v1/diagnosticSignatures/:id/logs', args] as const
}

export function useGetV1DiagnosticSignaturesIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
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
        ? getGetV1DiagnosticSignaturesIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.diagnosticSignatures[':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DiagnosticSignaturesIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
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
        ? getGetV1DiagnosticSignaturesIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.diagnosticSignatures[':id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EndUserLicenseAgreementsKey() {
  return ['v1', '/v1/endUserLicenseAgreements', 'POST'] as const
}

export function usePostV1EndUserLicenseAgreements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.endUserLicenseAgreements.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.endUserLicenseAgreements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EndUserLicenseAgreementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.endUserLicenseAgreements.$post> },
      ) => parseResponse(client.v1.endUserLicenseAgreements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EndUserLicenseAgreementsIdKey(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>,
) {
  return ['v1', '/v1/endUserLicenseAgreements/:id', args] as const
}

export function useGetV1EndUserLicenseAgreementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
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
        ? getGetV1EndUserLicenseAgreementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.endUserLicenseAgreements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EndUserLicenseAgreementsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
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
        ? getGetV1EndUserLicenseAgreementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.endUserLicenseAgreements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1EndUserLicenseAgreementsIdKey() {
  return ['v1', '/v1/endUserLicenseAgreements/:id', 'DELETE'] as const
}

export function useDeleteV1EndUserLicenseAgreementsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EndUserLicenseAgreementsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']> },
      ) => parseResponse(client.v1.endUserLicenseAgreements[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1EndUserLicenseAgreementsIdKey() {
  return ['v1', '/v1/endUserLicenseAgreements/:id', 'PATCH'] as const
}

export function usePatchV1EndUserLicenseAgreementsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1EndUserLicenseAgreementsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']> },
      ) => parseResponse(client.v1.endUserLicenseAgreements[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EndUserLicenseAgreementsIdTerritoriesKey(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>,
) {
  return ['v1', '/v1/endUserLicenseAgreements/:id/territories', args] as const
}

export function useGetV1EndUserLicenseAgreementsIdTerritories<TError = unknown>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
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
        ? getGetV1EndUserLicenseAgreementsIdTerritoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.endUserLicenseAgreements[':id'].territories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EndUserLicenseAgreementsIdTerritories<TError = unknown>(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
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
        ? getGetV1EndUserLicenseAgreementsIdTerritoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.endUserLicenseAgreements[':id'].territories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinanceReportsKey(
  args: InferRequestType<typeof client.v1.financeReports.$get>,
) {
  return ['v1', '/v1/financeReports', args] as const
}

export function useGetV1FinanceReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.financeReports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
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
        ? getGetV1FinanceReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.financeReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinanceReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.financeReports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
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
        ? getGetV1FinanceReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financeReports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.financeReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1GameCenterEnabledVersionsIdCompatibleVersionsKey(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
  >,
) {
  return ['v1', '/v1/gameCenterEnabledVersions/:id/compatibleVersions', args] as const
}

export function useGetV1GameCenterEnabledVersionsIdCompatibleVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
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
        ? getGetV1GameCenterEnabledVersionsIdCompatibleVersionsKey(args)
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
                (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
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
          client.v1.gameCenterEnabledVersions[':id'].compatibleVersions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GameCenterEnabledVersionsIdCompatibleVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
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
        ? getGetV1GameCenterEnabledVersionsIdCompatibleVersionsKey(args)
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
                (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
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
          client.v1.gameCenterEnabledVersions[':id'].compatibleVersions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
  >,
) {
  return ['v1', '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions', args] as const
}

export function useGetV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
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
        ? getGetV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey(args)
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
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
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
          client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
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
        ? getGetV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey(args)
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
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
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
          client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey() {
  return [
    'v1',
    '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions',
    'POST',
  ] as const
}

export function usePostV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey()
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
            (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey() {
  return [
    'v1',
    '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions',
    'DELETE',
  ] as const
}

export function useDeleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey()
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
            (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey() {
  return [
    'v1',
    '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions',
    'PATCH',
  ] as const
}

export function usePatchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersionsKey()
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
            (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IdfaDeclarationsKey() {
  return ['v1', '/v1/idfaDeclarations', 'POST'] as const
}

export function usePostV1IdfaDeclarations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.idfaDeclarations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.idfaDeclarations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IdfaDeclarationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.idfaDeclarations.$post> }) =>
        parseResponse(client.v1.idfaDeclarations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1IdfaDeclarationsIdKey() {
  return ['v1', '/v1/idfaDeclarations/:id', 'DELETE'] as const
}

export function useDeleteV1IdfaDeclarationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.idfaDeclarations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1IdfaDeclarationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$delete']> },
      ) => parseResponse(client.v1.idfaDeclarations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1IdfaDeclarationsIdKey() {
  return ['v1', '/v1/idfaDeclarations/:id', 'PATCH'] as const
}

export function usePatchV1IdfaDeclarationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.idfaDeclarations)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1IdfaDeclarationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$patch']> },
      ) => parseResponse(client.v1.idfaDeclarations[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InAppPurchasesIdKey(
  args: InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>,
) {
  return ['v1', '/v1/inAppPurchases/:id', args] as const
}

export function useGetV1InAppPurchasesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>
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
        ? getGetV1InAppPurchasesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.inAppPurchases[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InAppPurchasesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>
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
        ? getGetV1InAppPurchasesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.inAppPurchases)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.inAppPurchases[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PreReleaseVersionsKey(
  args: InferRequestType<typeof client.v1.preReleaseVersions.$get>,
) {
  return ['v1', '/v1/preReleaseVersions', args] as const
}

export function useGetV1PreReleaseVersions<TError = unknown>(
  args: InferRequestType<typeof client.v1.preReleaseVersions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
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
        ? getGetV1PreReleaseVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preReleaseVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PreReleaseVersions<TError = unknown>(
  args: InferRequestType<typeof client.v1.preReleaseVersions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
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
        ? getGetV1PreReleaseVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preReleaseVersions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preReleaseVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PreReleaseVersionsIdKey(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>,
) {
  return ['v1', '/v1/preReleaseVersions/:id', args] as const
}

export function useGetV1PreReleaseVersionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
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
        ? getGetV1PreReleaseVersionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preReleaseVersions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PreReleaseVersionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
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
        ? getGetV1PreReleaseVersionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preReleaseVersions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PreReleaseVersionsIdAppKey(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>,
) {
  return ['v1', '/v1/preReleaseVersions/:id/app', args] as const
}

export function useGetV1PreReleaseVersionsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
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
        ? getGetV1PreReleaseVersionsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preReleaseVersions[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PreReleaseVersionsIdApp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
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
        ? getGetV1PreReleaseVersionsIdAppKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preReleaseVersions[':id'].app.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PreReleaseVersionsIdBuildsKey(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>,
) {
  return ['v1', '/v1/preReleaseVersions/:id/builds', args] as const
}

export function useGetV1PreReleaseVersionsIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
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
        ? getGetV1PreReleaseVersionsIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.preReleaseVersions[':id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PreReleaseVersionsIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
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
        ? getGetV1PreReleaseVersionsIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.preReleaseVersions[':id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProfilesKey(args: InferRequestType<typeof client.v1.profiles.$get>) {
  return ['v1', '/v1/profiles', args] as const
}

export function useGetV1Profiles<TError = unknown>(
  args: InferRequestType<typeof client.v1.profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Profiles<TError = unknown>(
  args: InferRequestType<typeof client.v1.profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProfilesKey() {
  return ['v1', '/v1/profiles', 'POST'] as const
}

export function usePostV1Profiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.profiles.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.profiles.$post> }) =>
        parseResponse(client.v1.profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProfilesIdKey(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$get']>,
) {
  return ['v1', '/v1/profiles/:id', args] as const
}

export function useGetV1ProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ProfilesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ProfilesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProfilesIdKey() {
  return ['v1', '/v1/profiles/:id', 'DELETE'] as const
}

export function useDeleteV1ProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.profiles)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.profiles)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.profiles)[':id']['$delete']> },
      ) => parseResponse(client.v1.profiles[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProfilesIdBundleIdKey(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>,
) {
  return ['v1', '/v1/profiles/:id/bundleId', args] as const
}

export function useGetV1ProfilesIdBundleId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
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
        ? getGetV1ProfilesIdBundleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles[':id'].bundleId.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProfilesIdBundleId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
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
        ? getGetV1ProfilesIdBundleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles[':id'].bundleId.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProfilesIdCertificatesKey(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>,
) {
  return ['v1', '/v1/profiles/:id/certificates', args] as const
}

export function useGetV1ProfilesIdCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
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
        ? getGetV1ProfilesIdCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles[':id'].certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProfilesIdCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
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
        ? getGetV1ProfilesIdCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['certificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles[':id'].certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProfilesIdDevicesKey(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>,
) {
  return ['v1', '/v1/profiles/:id/devices', args] as const
}

export function useGetV1ProfilesIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
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
        ? getGetV1ProfilesIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles[':id'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProfilesIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
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
        ? getGetV1ProfilesIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.profiles)[':id']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.profiles[':id'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RoutingAppCoveragesKey() {
  return ['v1', '/v1/routingAppCoverages', 'POST'] as const
}

export function usePostV1RoutingAppCoverages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.routingAppCoverages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.routingAppCoverages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RoutingAppCoveragesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.routingAppCoverages.$post> },
      ) => parseResponse(client.v1.routingAppCoverages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RoutingAppCoveragesIdKey(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>,
) {
  return ['v1', '/v1/routingAppCoverages/:id', args] as const
}

export function useGetV1RoutingAppCoveragesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
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
        ? getGetV1RoutingAppCoveragesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.routingAppCoverages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RoutingAppCoveragesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
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
        ? getGetV1RoutingAppCoveragesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.routingAppCoverages[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1RoutingAppCoveragesIdKey() {
  return ['v1', '/v1/routingAppCoverages/:id', 'DELETE'] as const
}

export function useDeleteV1RoutingAppCoveragesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RoutingAppCoveragesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$delete']> },
      ) => parseResponse(client.v1.routingAppCoverages[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1RoutingAppCoveragesIdKey() {
  return ['v1', '/v1/routingAppCoverages/:id', 'PATCH'] as const
}

export function usePatchV1RoutingAppCoveragesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.routingAppCoverages)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1RoutingAppCoveragesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$patch']> },
      ) => parseResponse(client.v1.routingAppCoverages[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SalesReportsKey(
  args: InferRequestType<typeof client.v1.salesReports.$get>,
) {
  return ['v1', '/v1/salesReports', args] as const
}

export function useGetV1SalesReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.salesReports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SalesReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.salesReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SalesReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.salesReports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SalesReportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.salesReports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.salesReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TerritoriesKey(args: InferRequestType<typeof client.v1.territories.$get>) {
  return ['v1', '/v1/territories', args] as const
}

export function useGetV1Territories<TError = unknown>(
  args: InferRequestType<typeof client.v1.territories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TerritoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.territories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Territories<TError = unknown>(
  args: InferRequestType<typeof client.v1.territories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TerritoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.territories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.territories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UserInvitationsKey(
  args: InferRequestType<typeof client.v1.userInvitations.$get>,
) {
  return ['v1', '/v1/userInvitations', args] as const
}

export function useGetV1UserInvitations<TError = unknown>(
  args: InferRequestType<typeof client.v1.userInvitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
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
        ? getGetV1UserInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.userInvitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserInvitations<TError = unknown>(
  args: InferRequestType<typeof client.v1.userInvitations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
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
        ? getGetV1UserInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.userInvitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1UserInvitationsKey() {
  return ['v1', '/v1/userInvitations', 'POST'] as const
}

export function usePostV1UserInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.userInvitations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.userInvitations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UserInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.userInvitations.$post> }) =>
        parseResponse(client.v1.userInvitations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserInvitationsIdKey(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>,
) {
  return ['v1', '/v1/userInvitations/:id', args] as const
}

export function useGetV1UserInvitationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>
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
        ? getGetV1UserInvitationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.userInvitations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserInvitationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>
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
        ? getGetV1UserInvitationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.userInvitations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1UserInvitationsIdKey() {
  return ['v1', '/v1/userInvitations/:id', 'DELETE'] as const
}

export function useDeleteV1UserInvitationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.userInvitations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UserInvitationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.userInvitations)[':id']['$delete']> },
      ) => parseResponse(client.v1.userInvitations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserInvitationsIdVisibleAppsKey(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>,
) {
  return ['v1', '/v1/userInvitations/:id/visibleApps', args] as const
}

export function useGetV1UserInvitationsIdVisibleApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
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
        ? getGetV1UserInvitationsIdVisibleAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.userInvitations[':id'].visibleApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserInvitationsIdVisibleApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
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
        ? getGetV1UserInvitationsIdVisibleAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.userInvitations[':id'].visibleApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersKey(args: InferRequestType<typeof client.v1.users.$get>) {
  return ['v1', '/v1/users', args] as const
}

export function useGetV1Users<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Users<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV1UsersIdKey(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
) {
  return ['v1', '/v1/users/:id', args] as const
}

export function useGetV1UsersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1UsersIdKey() {
  return ['v1', '/v1/users/:id', 'DELETE'] as const
}

export function useDeleteV1UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users)[':id']['$delete']> },
      ) => parseResponse(client.v1.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1UsersIdKey() {
  return ['v1', '/v1/users/:id', 'PATCH'] as const
}

export function usePatchV1UsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1UsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users)[':id']['$patch']> },
      ) => parseResponse(client.v1.users[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersIdRelationshipsVisibleAppsKey(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>,
) {
  return ['v1', '/v1/users/:id/relationships/visibleApps', args] as const
}

export function useGetV1UsersIdRelationshipsVisibleApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
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
        ? getGetV1UsersIdRelationshipsVisibleAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':id'].relationships.visibleApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersIdRelationshipsVisibleApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
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
        ? getGetV1UsersIdRelationshipsVisibleAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':id'].relationships.visibleApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1UsersIdRelationshipsVisibleAppsKey() {
  return ['v1', '/v1/users/:id/relationships/visibleApps', 'POST'] as const
}

export function usePostV1UsersIdRelationshipsVisibleApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersIdRelationshipsVisibleAppsKey()
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
            (typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.users[':id'].relationships.visibleApps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersIdRelationshipsVisibleAppsKey() {
  return ['v1', '/v1/users/:id/relationships/visibleApps', 'DELETE'] as const
}

export function useDeleteV1UsersIdRelationshipsVisibleApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersIdRelationshipsVisibleAppsKey()
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
            (typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.users[':id'].relationships.visibleApps.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1UsersIdRelationshipsVisibleAppsKey() {
  return ['v1', '/v1/users/:id/relationships/visibleApps', 'PATCH'] as const
}

export function usePatchV1UsersIdRelationshipsVisibleApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1UsersIdRelationshipsVisibleAppsKey()
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
            (typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']
          >
        },
      ) =>
        parseResponse(client.v1.users[':id'].relationships.visibleApps.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersIdVisibleAppsKey(
  args: InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>,
) {
  return ['v1', '/v1/users/:id/visibleApps', args] as const
}

export function useGetV1UsersIdVisibleApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
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
        ? getGetV1UsersIdVisibleAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':id'].visibleApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersIdVisibleApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
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
        ? getGetV1UsersIdVisibleAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':id']['visibleApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':id'].visibleApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
