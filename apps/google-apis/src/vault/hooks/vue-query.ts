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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1MattersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.matters.$get>>,
) {
  return ['v1', '/v1/matters', toValue(args)] as const
}

export function getV1MattersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.matters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Matters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.matters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$get>>>>
          >,
          ReturnType<typeof getV1MattersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MattersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MattersMutationKey() {
  return ['v1', '/v1/matters', 'POST'] as const
}

export function getPostV1MattersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.matters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.matters.$post>) {
      return parseResponse(client.v1.matters.$post(args, options))
    },
  })
}

export function usePostV1Matters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.matters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.matters.$post>,
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
  const mutationDefaults = getPostV1MattersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1MattersMatterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.matters)[':matterId']['$get']>>,
) {
  return ['v1', '/v1/matters/:matterId', toValue(args)] as const
}

export function getV1MattersMatterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.matters)[':matterId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersMatterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters[':matterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MattersMatterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.matters)[':matterId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MattersMatterIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MattersMatterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersMatterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters[':matterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1MattersMatterIdMutationKey() {
  return ['v1', '/v1/matters/:matterId', 'PUT'] as const
}

export function getPutV1MattersMatterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MattersMatterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.matters)[':matterId']['$put']>) {
      return parseResponse(client.v1.matters[':matterId'].$put(args, options))
    },
  })
}

export function usePutV1MattersMatterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId']['$put']>,
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
  const mutationDefaults = getPutV1MattersMatterIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1MattersMatterIdMutationKey() {
  return ['v1', '/v1/matters/:matterId', 'DELETE'] as const
}

export function getDeleteV1MattersMatterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MattersMatterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.matters)[':matterId']['$delete']>) {
      return parseResponse(client.v1.matters[':matterId'].$delete(args, options))
    },
  })
}

export function useDeleteV1MattersMatterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId']['$delete']>,
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
  const mutationDefaults = getDeleteV1MattersMatterIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1MattersMatterIdExportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$get']>
  >,
) {
  return ['v1', '/v1/matters/:matterId/exports', toValue(args)] as const
}

export function getV1MattersMatterIdExportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersMatterIdExportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters[':matterId'].exports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MattersMatterIdExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MattersMatterIdExportsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MattersMatterIdExportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersMatterIdExportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters[':matterId'].exports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MattersMatterIdExportsMutationKey() {
  return ['v1', '/v1/matters/:matterId/exports', 'POST'] as const
}

export function getPostV1MattersMatterIdExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId'].exports.$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdExportsMutationOptions<TError, TOnMutateResult>(
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

export function getV1MattersMatterIdExportsExportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>
  >,
) {
  return ['v1', '/v1/matters/:matterId/exports/:exportId', toValue(args)] as const
}

export function getV1MattersMatterIdExportsExportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersMatterIdExportsExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters[':matterId'].exports[':exportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MattersMatterIdExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>
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
                    (typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']
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
                    (typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1MattersMatterIdExportsExportIdQueryKey>
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
            ReturnType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MattersMatterIdExportsExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersMatterIdExportsExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters[':matterId'].exports[':exportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1MattersMatterIdExportsExportIdMutationKey() {
  return ['v1', '/v1/matters/:matterId/exports/:exportId', 'DELETE'] as const
}

export function getDeleteV1MattersMatterIdExportsExportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MattersMatterIdExportsExportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.matters[':matterId'].exports[':exportId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1MattersMatterIdExportsExportId<
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
                    (typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']
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
  const mutationDefaults = getDeleteV1MattersMatterIdExportsExportIdMutationOptions<
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

export function getV1MattersMatterIdHoldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$get']>
  >,
) {
  return ['v1', '/v1/matters/:matterId/holds', toValue(args)] as const
}

export function getV1MattersMatterIdHoldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersMatterIdHoldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters[':matterId'].holds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MattersMatterIdHolds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MattersMatterIdHoldsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MattersMatterIdHoldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersMatterIdHoldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters[':matterId'].holds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MattersMatterIdHoldsMutationKey() {
  return ['v1', '/v1/matters/:matterId/holds', 'POST'] as const
}

export function getPostV1MattersMatterIdHoldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdHoldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId'].holds.$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdHolds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdHoldsMutationOptions<TError, TOnMutateResult>(
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

export function getV1MattersMatterIdHoldsHoldIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>
  >,
) {
  return ['v1', '/v1/matters/:matterId/holds/:holdId', toValue(args)] as const
}

export function getV1MattersMatterIdHoldsHoldIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersMatterIdHoldsHoldIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters[':matterId'].holds[':holdId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MattersMatterIdHoldsHoldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>
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
                  ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1MattersMatterIdHoldsHoldIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MattersMatterIdHoldsHoldIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersMatterIdHoldsHoldIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters[':matterId'].holds[':holdId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1MattersMatterIdHoldsHoldIdMutationKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId', 'PUT'] as const
}

export function getPutV1MattersMatterIdHoldsHoldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1MattersMatterIdHoldsHoldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>,
    ) {
      return parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$put(args, options))
    },
  })
}

export function usePutV1MattersMatterIdHoldsHoldId<
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
                  ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>,
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
  const mutationDefaults = getPutV1MattersMatterIdHoldsHoldIdMutationOptions<
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

export function getDeleteV1MattersMatterIdHoldsHoldIdMutationKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId', 'DELETE'] as const
}

export function getDeleteV1MattersMatterIdHoldsHoldIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MattersMatterIdHoldsHoldIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']
      >,
    ) {
      return parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$delete(args, options))
    },
  })
}

export function useDeleteV1MattersMatterIdHoldsHoldId<
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
                  ReturnType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']>,
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
  const mutationDefaults = getDeleteV1MattersMatterIdHoldsHoldIdMutationOptions<
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

export function getV1MattersMatterIdHoldsHoldIdAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
    >
  >,
) {
  return ['v1', '/v1/matters/:matterId/holds/:holdId/accounts', toValue(args)] as const
}

export function getV1MattersMatterIdHoldsHoldIdAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersMatterIdHoldsHoldIdAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters[':matterId'].holds[':holdId'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MattersMatterIdHoldsHoldIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
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
                    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
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
                    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1MattersMatterIdHoldsHoldIdAccountsQueryKey>
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
              (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MattersMatterIdHoldsHoldIdAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersMatterIdHoldsHoldIdAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters[':matterId'].holds[':holdId'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MattersMatterIdHoldsHoldIdAccountsMutationKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId/accounts', 'POST'] as const
}

export function getPostV1MattersMatterIdHoldsHoldIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdHoldsHoldIdAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.matters[':matterId'].holds[':holdId'].accounts.$post(args, options),
      )
    },
  })
}

export function usePostV1MattersMatterIdHoldsHoldIdAccounts<
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
                    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
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
  const mutationDefaults = getPostV1MattersMatterIdHoldsHoldIdAccountsMutationOptions<
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

export function getDeleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdMutationKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId/accounts/:accountId', 'DELETE'] as const
}

export function getDeleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.matters[':matterId'].holds[':holdId'].accounts[':accountId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1MattersMatterIdHoldsHoldIdAccountsAccountId<
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
                    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
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
  const mutationDefaults = getDeleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdMutationOptions<
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

export function getPostV1MattersMatterIdHoldsHoldIdAddHeldAccountsMutationKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId:addHeldAccounts', 'POST'] as const
}

export function getPostV1MattersMatterIdHoldsHoldIdAddHeldAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdHoldsHoldIdAddHeldAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.matters[':matterId'].holds[':holdId:addHeldAccounts'].$post(args, options),
      )
    },
  })
}

export function usePostV1MattersMatterIdHoldsHoldIdAddHeldAccounts<
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
                    (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
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
  const mutationDefaults = getPostV1MattersMatterIdHoldsHoldIdAddHeldAccountsMutationOptions<
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

export function getPostV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsMutationKey() {
  return ['v1', '/v1/matters/:matterId/holds/:holdId:removeHeldAccounts', 'POST'] as const
}

export function getPostV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.matters[':matterId'].holds[':holdId:removeHeldAccounts'].$post(args, options),
      )
    },
  })
}

export function usePostV1MattersMatterIdHoldsHoldIdRemoveHeldAccounts<
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
                    (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
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
  const mutationDefaults = getPostV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsMutationOptions<
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

export function getV1MattersMatterIdSavedQueriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>
  >,
) {
  return ['v1', '/v1/matters/:matterId/savedQueries', toValue(args)] as const
}

export function getV1MattersMatterIdSavedQueriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersMatterIdSavedQueriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters[':matterId'].savedQueries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MattersMatterIdSavedQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MattersMatterIdSavedQueriesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MattersMatterIdSavedQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersMatterIdSavedQueriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters[':matterId'].savedQueries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1MattersMatterIdSavedQueriesMutationKey() {
  return ['v1', '/v1/matters/:matterId/savedQueries', 'POST'] as const
}

export function getPostV1MattersMatterIdSavedQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdSavedQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId'].savedQueries.$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdSavedQueries<
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
                  ReturnType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdSavedQueriesMutationOptions<
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

export function getV1MattersMatterIdSavedQueriesSavedQueryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
    >
  >,
) {
  return ['v1', '/v1/matters/:matterId/savedQueries/:savedQueryId', toValue(args)] as const
}

export function getV1MattersMatterIdSavedQueriesSavedQueryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MattersMatterIdSavedQueriesSavedQueryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.matters[':matterId'].savedQueries[':savedQueryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MattersMatterIdSavedQueriesSavedQueryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
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
                    (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
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
                    (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1MattersMatterIdSavedQueriesSavedQueryIdQueryKey>
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
              (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MattersMatterIdSavedQueriesSavedQueryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MattersMatterIdSavedQueriesSavedQueryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.matters[':matterId'].savedQueries[':savedQueryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1MattersMatterIdSavedQueriesSavedQueryIdMutationKey() {
  return ['v1', '/v1/matters/:matterId/savedQueries/:savedQueryId', 'DELETE'] as const
}

export function getDeleteV1MattersMatterIdSavedQueriesSavedQueryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MattersMatterIdSavedQueriesSavedQueryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.matters[':matterId'].savedQueries[':savedQueryId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1MattersMatterIdSavedQueriesSavedQueryId<
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
                    (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
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
  const mutationDefaults = getDeleteV1MattersMatterIdSavedQueriesSavedQueryIdMutationOptions<
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

export function getPostV1MattersMatterIdAddPermissionsMutationKey() {
  return ['v1', '/v1/matters/:matterId:addPermissions', 'POST'] as const
}

export function getPostV1MattersMatterIdAddPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdAddPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId:addPermissions'].$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdAddPermissions<
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
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdAddPermissionsMutationOptions<
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

export function getPostV1MattersMatterIdCloseMutationKey() {
  return ['v1', '/v1/matters/:matterId:close', 'POST'] as const
}

export function getPostV1MattersMatterIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:close']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId:close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId:close']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId:close'].$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId:close']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId:close']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdCloseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1MattersMatterIdCountMutationKey() {
  return ['v1', '/v1/matters/:matterId:count', 'POST'] as const
}

export function getPostV1MattersMatterIdCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:count']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId:count']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdCountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId:count']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId:count'].$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdCount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId:count']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId:count']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdCountMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1MattersMatterIdRemovePermissionsMutationKey() {
  return ['v1', '/v1/matters/:matterId:removePermissions', 'POST'] as const
}

export function getPostV1MattersMatterIdRemovePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdRemovePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId:removePermissions'].$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdRemovePermissions<
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
                  ReturnType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdRemovePermissionsMutationOptions<
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

export function getPostV1MattersMatterIdReopenMutationKey() {
  return ['v1', '/v1/matters/:matterId:reopen', 'POST'] as const
}

export function getPostV1MattersMatterIdReopenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:reopen']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId:reopen']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdReopenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId:reopen']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId:reopen'].$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdReopen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId:reopen']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId:reopen']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdReopenMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1MattersMatterIdUndeleteMutationKey() {
  return ['v1', '/v1/matters/:matterId:undelete', 'POST'] as const
}

export function getPostV1MattersMatterIdUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.matters)[':matterId:undelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.matters)[':matterId:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MattersMatterIdUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.matters)[':matterId:undelete']['$post']>,
    ) {
      return parseResponse(client.v1.matters[':matterId:undelete'].$post(args, options))
    },
  })
}

export function usePostV1MattersMatterIdUndelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.matters)[':matterId:undelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.matters)[':matterId:undelete']['$post']>,
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
  const mutationDefaults = getPostV1MattersMatterIdUndeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
) {
  return ['v1', '/v1/:name', toValue(args)] as const
}

export function getV1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
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
