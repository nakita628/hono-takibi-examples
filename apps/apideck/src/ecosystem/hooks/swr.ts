import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEcosystemsKey() {
  return ['ecosystems'] as const
}

export function getGetEcosystemsEcosystemIdKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id', args] as const
}

export function useGetEcosystemsEcosystemId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecosystems[':ecosystem_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ecosystems[':ecosystem_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdCategoriesKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories', args] as const
}

export function useGetEcosystemsEcosystemIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdCategories<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdCategoriesIdKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories/:id', args] as const
}

export function useGetEcosystemsEcosystemIdCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
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
        ? getGetEcosystemsEcosystemIdCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ecosystems[':ecosystem_id'].categories[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
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
        ? getGetEcosystemsEcosystemIdCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ecosystems[':ecosystem_id'].categories[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdCategoriesIdListingsKey(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/categories/:id/listings', args] as const
}

export function useGetEcosystemsEcosystemIdCategoriesIdListings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
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
        ? getGetEcosystemsEcosystemIdCategoriesIdListingsKey(args)
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
                (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
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
          client.ecosystems[':ecosystem_id'].categories[':id'].listings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdCategoriesIdListings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
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
        ? getGetEcosystemsEcosystemIdCategoriesIdListingsKey(args)
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
                (typeof client.ecosystems)[':ecosystem_id']['categories'][':id']['listings']['$get']
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
          client.ecosystems[':ecosystem_id'].categories[':id'].listings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdCollectionsKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/collections', args] as const
}

export function useGetEcosystemsEcosystemIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdCollections<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdCollectionsIdKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/collections/:id', args] as const
}

export function useGetEcosystemsEcosystemIdCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
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
        ? getGetEcosystemsEcosystemIdCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ecosystems[':ecosystem_id'].collections[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
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
        ? getGetEcosystemsEcosystemIdCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ecosystems[':ecosystem_id'].collections[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdCollectionsIdListingsKey(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/collections/:id/listings', args] as const
}

export function useGetEcosystemsEcosystemIdCollectionsIdListings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
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
        ? getGetEcosystemsEcosystemIdCollectionsIdListingsKey(args)
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
                (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
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
          client.ecosystems[':ecosystem_id'].collections[':id'].listings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdCollectionsIdListings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
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
        ? getGetEcosystemsEcosystemIdCollectionsIdListingsKey(args)
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
                (typeof client.ecosystems)[':ecosystem_id']['collections'][':id']['listings']['$get']
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
          client.ecosystems[':ecosystem_id'].collections[':id'].listings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdListingsKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/listings', args] as const
}

export function useGetEcosystemsEcosystemIdListings<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdListingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdListings<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdListingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdListingsIdKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/listings/:id', args] as const
}

export function useGetEcosystemsEcosystemIdListingsId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
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
        ? getGetEcosystemsEcosystemIdListingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].listings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdListingsId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
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
        ? getGetEcosystemsEcosystemIdListingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['listings'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].listings[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdProductsKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products', args] as const
}

export function useGetEcosystemsEcosystemIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEcosystemsEcosystemIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdProductsIdKey(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products/:id', args] as const
}

export function useGetEcosystemsEcosystemIdProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
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
        ? getGetEcosystemsEcosystemIdProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
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
        ? getGetEcosystemsEcosystemIdProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ecosystems)[':ecosystem_id']['products'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ecosystems[':ecosystem_id'].products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEcosystemsEcosystemIdProductsIdListingsKey(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
  >,
) {
  return ['ecosystems', '/ecosystems/:ecosystem_id/products/:id/listings', args] as const
}

export function useGetEcosystemsEcosystemIdProductsIdListings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
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
        ? getGetEcosystemsEcosystemIdProductsIdListingsKey(args)
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
                (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
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
          client.ecosystems[':ecosystem_id'].products[':id'].listings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEcosystemsEcosystemIdProductsIdListings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
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
        ? getGetEcosystemsEcosystemIdProductsIdListingsKey(args)
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
                (typeof client.ecosystems)[':ecosystem_id']['products'][':id']['listings']['$get']
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
          client.ecosystems[':ecosystem_id'].products[':id'].listings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
