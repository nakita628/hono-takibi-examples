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

export function getV1alphaKey() {
  return ['v1alpha'] as const
}

export function getV1alphaNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':name']['$get']>>,
) {
  return ['v1alpha', '/v1alpha/:name', toValue(args)] as const
}

export function getV1alphaNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alphaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alphaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1alphaNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alphaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alphaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1alphaNameMutationKey() {
  return ['v1alpha', '/v1alpha/:name', 'DELETE'] as const
}

export function getDeleteV1alphaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1alphaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha)[':name']['$delete']>) {
      return parseResponse(client.v1alpha[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1alphaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1alphaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1alphaNameMutationKey() {
  return ['v1alpha', '/v1alpha/:name', 'PATCH'] as const
}

export function getPatchV1alphaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alphaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha)[':name']['$patch']>) {
      return parseResponse(client.v1alpha[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1alphaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1alphaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1alphaNameTestNotifyMutationKey() {
  return ['v1alpha', '/v1alpha/:name:testNotify', 'POST'] as const
}

export function getPostV1alphaNameTestNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':name:testNotify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':name:testNotify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alphaNameTestNotifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha)[':name:testNotify']['$post']>) {
      return parseResponse(client.v1alpha[':name:testNotify'].$post(args, options))
    },
  })
}

export function usePostV1alphaNameTestNotify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':name:testNotify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha)[':name:testNotify']['$post']>,
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
  const mutationDefaults = getPostV1alphaNameTestNotifyMutationOptions<TError, TOnMutateResult>(
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

export function getV1alphaParentInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['instances']['$get']>>,
) {
  return ['v1alpha', '/v1alpha/:parent/instances', toValue(args)] as const
}

export function getV1alphaParentInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['instances']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alphaParentInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha[':parent'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alphaParentInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha)[':parent']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha)[':parent']['instances']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alphaParentInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alphaParentInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alphaParentInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha[':parent'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alphaParentInstancesMutationKey() {
  return ['v1alpha', '/v1alpha/:parent/instances', 'POST'] as const
}

export function getPostV1alphaParentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':parent']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alphaParentInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha)[':parent']['instances']['$post']>,
    ) {
      return parseResponse(client.v1alpha[':parent'].instances.$post(args, options))
    },
  })
}

export function usePostV1alphaParentInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['instances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha)[':parent']['instances']['$post']>,
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
  const mutationDefaults = getPostV1alphaParentInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getV1alphaParentWorkerpoolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha)[':parent']['workerpools']['$get']>
  >,
) {
  return ['v1alpha', '/v1alpha/:parent/workerpools', toValue(args)] as const
}

export function getV1alphaParentWorkerpoolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha)[':parent']['workerpools']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alphaParentWorkerpoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha[':parent'].workerpools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alphaParentWorkerpools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha)[':parent']['workerpools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1alpha)[':parent']['workerpools']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['workerpools']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['workerpools']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alphaParentWorkerpoolsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['workerpools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alphaParentWorkerpoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alphaParentWorkerpoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha[':parent'].workerpools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alphaParentWorkerpoolsMutationKey() {
  return ['v1alpha', '/v1alpha/:parent/workerpools', 'POST'] as const
}

export function getPostV1alphaParentWorkerpoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['workerpools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':parent']['workerpools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alphaParentWorkerpoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha)[':parent']['workerpools']['$post']>,
    ) {
      return parseResponse(client.v1alpha[':parent'].workerpools.$post(args, options))
    },
  })
}

export function usePostV1alphaParentWorkerpools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha)[':parent']['workerpools']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha)[':parent']['workerpools']['$post']>,
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
  const mutationDefaults = getPostV1alphaParentWorkerpoolsMutationOptions<TError, TOnMutateResult>(
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
