import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppsKey() {
  return ['apps'] as const
}

export function getPostAppsLicensingV1ProductProductIdSkuSkuIdUserKey() {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/user', 'POST'] as const
}

export function usePostAppsLicensingV1ProductProductIdSkuSkuIdUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsLicensingV1ProductProductIdSkuSkuIdUserKey()
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
            (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].user.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
  >,
) {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId', args] as const
}

export function useGetAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
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
        ? getGetAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey(args)
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
                (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
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
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
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
        ? getGetAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey(args)
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
                (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
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
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey() {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId', 'PUT'] as const
}

export function usePutAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey()
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
            (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey() {
  return [
    'apps',
    '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId',
    'DELETE',
  ] as const
}

export function useDeleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey()
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
            (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey() {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId', 'PATCH'] as const
}

export function usePatchAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdKey()
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
            (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsLicensingV1ProductProductIdSkuSkuIdUsersKey(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
  >,
) {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/users', args] as const
}

export function useGetAppsLicensingV1ProductProductIdSkuSkuIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
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
        ? getGetAppsLicensingV1ProductProductIdSkuSkuIdUsersKey(args)
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
                (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
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
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsLicensingV1ProductProductIdSkuSkuIdUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
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
        ? getGetAppsLicensingV1ProductProductIdSkuSkuIdUsersKey(args)
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
                (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
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
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAppsLicensingV1ProductProductIdUsersKey(
  args: InferRequestType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>,
) {
  return ['apps', '/apps/licensing/v1/product/:productId/users', args] as const
}

export function useGetAppsLicensingV1ProductProductIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
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
        ? getGetAppsLicensingV1ProductProductIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps.licensing.v1.product[':productId'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsLicensingV1ProductProductIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
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
        ? getGetAppsLicensingV1ProductProductIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apps.licensing.v1.product[':productId'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
