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

export function getAppsKey() {
  return ['apps'] as const
}

export function getPostAppsLicensingV1ProductProductIdSkuSkuIdUserMutationKey() {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/user', 'POST'] as const
}

export function getPostAppsLicensingV1ProductProductIdSkuSkuIdUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsLicensingV1ProductProductIdSkuSkuIdUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.licensing.v1.product[':productId'].sku[':skuId'].user.$post(args, options),
      )
    },
  })
}

export function usePostAppsLicensingV1ProductProductIdSkuSkuIdUser<
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
                    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user']['$post']
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
  const mutationDefaults = getPostAppsLicensingV1ProductProductIdSkuSkuIdUserMutationOptions<
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

export function getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
    >
  >,
) {
  return [
    'apps',
    '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId',
    toValue(args),
  ] as const
}

export function getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
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
                    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
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
                    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdQueryKey>
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
              (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationKey() {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId', 'PUT'] as const
}

export function getPutAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$put']
      >,
    ) {
      return parseResponse(
        client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<
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
                    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$put']
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
  const mutationDefaults = getPutAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationOptions<
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

export function getDeleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationKey() {
  return [
    'apps',
    '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId',
    'DELETE',
  ] as const
}

export function getDeleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<
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
                    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$delete']
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
  const mutationDefaults =
    getDeleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationOptions<
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

export function getPatchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationKey() {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/user/:userId', 'PATCH'] as const
}

export function getPatchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$patch']
      >,
    ) {
      return parseResponse(
        client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchAppsLicensingV1ProductProductIdSkuSkuIdUserUserId<
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
                    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$patch']
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
  const mutationDefaults = getPatchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdMutationOptions<
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

export function getAppsLicensingV1ProductProductIdSkuSkuIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
    >
  >,
) {
  return ['apps', '/apps/licensing/v1/product/:productId/sku/:skuId/users', toValue(args)] as const
}

export function getAppsLicensingV1ProductProductIdSkuSkuIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsLicensingV1ProductProductIdSkuSkuIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.licensing.v1.product[':productId'].sku[':skuId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsLicensingV1ProductProductIdSkuSkuIdUsers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
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
                    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
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
                    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsLicensingV1ProductProductIdSkuSkuIdUsersQueryKey>
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
              (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsLicensingV1ProductProductIdSkuSkuIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsLicensingV1ProductProductIdSkuSkuIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.licensing.v1.product[':productId'].sku[':skuId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAppsLicensingV1ProductProductIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
  >,
) {
  return ['apps', '/apps/licensing/v1/product/:productId/users', toValue(args)] as const
}

export function getAppsLicensingV1ProductProductIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsLicensingV1ProductProductIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.licensing.v1.product[':productId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsLicensingV1ProductProductIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
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
                    (typeof client.apps.licensing.v1.product)[':productId']['users']['$get']
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
                    (typeof client.apps.licensing.v1.product)[':productId']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsLicensingV1ProductProductIdUsersQueryKey>
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
            ReturnType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsLicensingV1ProductProductIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsLicensingV1ProductProductIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.licensing.v1.product[':productId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
