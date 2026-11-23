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

export function getHelloKey() {
  return ['hello'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getTykKey() {
  return ['tyk'] as const
}

export function getListenPathKey() {
  return ['{listen_path}'] as const
}

export function getHelloQueryKey() {
  return ['hello', '/hello'] as const
}

export function getHelloQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHelloQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hello.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHello<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
          ReturnType<typeof getHelloQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHelloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHelloQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.hello.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReadyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
          ReturnType<typeof getReadyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReadyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ready.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTykApisQueryKey() {
  return ['tyk', '/tyk/apis'] as const
}

export function getTykApisQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTykApisQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.apis.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykApis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>
          >,
          ReturnType<typeof getTykApisQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykApisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTykApisQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.apis.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTykApisMutationKey() {
  return ['tyk', '/tyk/apis', 'POST'] as const
}

export function getPostTykApisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.apis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykApisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.apis.$post>) {
      return parseResponse(client.tyk.apis.$post(args, options))
    },
  })
}

export function usePostTykApis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tyk.apis.$post>,
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
  const mutationDefaults = getPostTykApisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTykApisApiIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>>,
) {
  return ['tyk', '/tyk/apis/:apiID', toValue(args)] as const
}

export function getTykApisApiIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykApisApiIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.apis[':apiID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykApisApiID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis)[':apiID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
            >
          >,
          ReturnType<typeof getTykApisApiIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisApiIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykApisApiIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.apis[':apiID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTykApisApiIDMutationKey() {
  return ['tyk', '/tyk/apis/:apiID', 'PUT'] as const
}

export function getPutTykApisApiIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykApisApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']>) {
      return parseResponse(client.tyk.apis[':apiID'].$put(args, options))
    },
  })
}

export function usePutTykApisApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.apis)[':apiID']['$put']>,
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
  const mutationDefaults = getPutTykApisApiIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTykApisApiIDMutationKey() {
  return ['tyk', '/tyk/apis/:apiID', 'DELETE'] as const
}

export function getDeleteTykApisApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykApisApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.apis[':apiID'].$delete(args, options))
    },
  })
}

export function useDeleteTykApisApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.apis)[':apiID']['$delete']>,
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
  const mutationDefaults = getDeleteTykApisApiIDMutationOptions<TError, TOnMutateResult>(
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

export function getTykApisApiIDVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>,
) {
  return ['tyk', '/tyk/apis/:apiID/versions', toValue(args)] as const
}

export function getTykApisApiIDVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykApisApiIDVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.apis[':apiID'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykApisApiIDVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykApisApiIDVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.tyk.apis)[':apiID']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisApiIDVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykApisApiIDVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.apis[':apiID'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTykApisOasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.apis.oas.$get>>,
) {
  return ['tyk', '/tyk/apis/oas', toValue(args)] as const
}

export function getTykApisOasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.apis.oas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykApisOasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.apis.oas.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykApisOas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.apis.oas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>
          >,
          ReturnType<typeof getTykApisOasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykApisOasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykApisOasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.apis.oas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTykApisOasMutationKey() {
  return ['tyk', '/tyk/apis/oas', 'POST'] as const
}

export function getPostTykApisOasMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.apis.oas.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykApisOasMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.apis.oas.$post>) {
      return parseResponse(client.tyk.apis.oas.$post(args, options))
    },
  })
}

export function usePostTykApisOas<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tyk.apis.oas.$post>,
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
  const mutationDefaults = getPostTykApisOasMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTykApisOasApiIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>,
) {
  return ['tyk', '/tyk/apis/oas/:apiID', toValue(args)] as const
}

export function getTykApisOasApiIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykApisOasApiIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.apis.oas[':apiID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykApisOasApiID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykApisOasApiIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisOasApiIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykApisOasApiIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.apis.oas[':apiID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTykApisOasApiIDMutationKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'PUT'] as const
}

export function getPutTykApisOasApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykApisOasApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']>) {
      return parseResponse(client.tyk.apis.oas[':apiID'].$put(args, options))
    },
  })
}

export function usePutTykApisOasApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$put']>,
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
  const mutationDefaults = getPutTykApisOasApiIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykApisOasApiIDMutationKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'DELETE'] as const
}

export function getDeleteTykApisOasApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykApisOasApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.apis.oas[':apiID'].$delete(args, options))
    },
  })
}

export function useDeleteTykApisOasApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$delete']>,
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
  const mutationDefaults = getDeleteTykApisOasApiIDMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTykApisOasApiIDMutationKey() {
  return ['tyk', '/tyk/apis/oas/:apiID', 'PATCH'] as const
}

export function getPatchTykApisOasApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTykApisOasApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>) {
      return parseResponse(client.tyk.apis.oas[':apiID'].$patch(args, options))
    },
  })
}

export function usePatchTykApisOasApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['$patch']>,
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
  const mutationDefaults = getPatchTykApisOasApiIDMutationOptions<TError, TOnMutateResult>(
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

export function getTykApisOasApiIDExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>
  >,
) {
  return ['tyk', '/tyk/apis/oas/:apiID/export', toValue(args)] as const
}

export function getTykApisOasApiIDExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykApisOasApiIDExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.apis.oas[':apiID'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykApisOasApiIDExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykApisOasApiIDExportQueryKey>
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
          Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisOasApiIDExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykApisOasApiIDExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.apis.oas[':apiID'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTykApisOasApiIDVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>
  >,
) {
  return ['tyk', '/tyk/apis/oas/:apiID/versions', toValue(args)] as const
}

export function getTykApisOasApiIDVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykApisOasApiIDVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.apis.oas[':apiID'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykApisOasApiIDVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykApisOasApiIDVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.tyk.apis.oas)[':apiID']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisOasApiIDVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykApisOasApiIDVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.apis.oas[':apiID'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTykApisOasExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.apis.oas.export.$get>>,
) {
  return ['tyk', '/tyk/apis/oas/export', toValue(args)] as const
}

export function getTykApisOasExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.apis.oas.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykApisOasExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.apis.oas.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykApisOasExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.apis.oas.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>
            >
          >,
          ReturnType<typeof getTykApisOasExportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.export.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTykApisOasExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykApisOasExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.apis.oas.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTykApisOasImportMutationKey() {
  return ['tyk', '/tyk/apis/oas/import', 'POST'] as const
}

export function getPostTykApisOasImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.apis.oas.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykApisOasImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.apis.oas.import.$post>) {
      return parseResponse(client.tyk.apis.oas.import.$post(args, options))
    },
  })
}

export function usePostTykApisOasImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.apis.oas.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tyk.apis.oas.import.$post>,
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
  const mutationDefaults = getPostTykApisOasImportMutationOptions<TError, TOnMutateResult>(
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

export function getTykMcpsQueryKey() {
  return ['tyk', '/tyk/mcps'] as const
}

export function getTykMcpsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTykMcpsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.mcps.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykMcps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>
          >,
          ReturnType<typeof getTykMcpsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykMcpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTykMcpsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.mcps.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTykMcpsMutationKey() {
  return ['tyk', '/tyk/mcps', 'POST'] as const
}

export function getPostTykMcpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.mcps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykMcpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.mcps.$post>) {
      return parseResponse(client.tyk.mcps.$post(args, options))
    },
  })
}

export function usePostTykMcps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.mcps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tyk.mcps.$post>,
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
  const mutationDefaults = getPostTykMcpsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTykMcpsApiIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>>,
) {
  return ['tyk', '/tyk/mcps/:apiID', toValue(args)] as const
}

export function getTykMcpsApiIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykMcpsApiIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.mcps[':apiID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykMcpsApiID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.mcps)[':apiID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
            >
          >,
          ReturnType<typeof getTykMcpsApiIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykMcpsApiIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykMcpsApiIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.mcps[':apiID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTykMcpsApiIDMutationKey() {
  return ['tyk', '/tyk/mcps/:apiID', 'PUT'] as const
}

export function getPutTykMcpsApiIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykMcpsApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']>) {
      return parseResponse(client.tyk.mcps[':apiID'].$put(args, options))
    },
  })
}

export function usePutTykMcpsApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.mcps)[':apiID']['$put']>,
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
  const mutationDefaults = getPutTykMcpsApiIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTykMcpsApiIDMutationKey() {
  return ['tyk', '/tyk/mcps/:apiID', 'DELETE'] as const
}

export function getDeleteTykMcpsApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykMcpsApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.mcps[':apiID'].$delete(args, options))
    },
  })
}

export function useDeleteTykMcpsApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.mcps)[':apiID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.mcps)[':apiID']['$delete']>,
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
  const mutationDefaults = getDeleteTykMcpsApiIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykCacheApiIDMutationKey() {
  return ['tyk', '/tyk/cache/:apiID', 'DELETE'] as const
}

export function getDeleteTykCacheApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.cache)[':apiID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykCacheApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.cache[':apiID'].$delete(args, options))
    },
  })
}

export function useDeleteTykCacheApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.cache)[':apiID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.cache)[':apiID']['$delete']>,
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
  const mutationDefaults = getDeleteTykCacheApiIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykCacheJwksApiIDMutationKey() {
  return ['tyk', '/tyk/cache/jwks/:apiID', 'DELETE'] as const
}

export function getDeleteTykCacheJwksApiIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykCacheJwksApiIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>) {
      return parseResponse(client.tyk.cache.jwks[':apiID'].$delete(args, options))
    },
  })
}

export function useDeleteTykCacheJwksApiID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.cache.jwks)[':apiID']['$delete']>,
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
  const mutationDefaults = getDeleteTykCacheJwksApiIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykCacheJwksMutationKey() {
  return ['tyk', '/tyk/cache/jwks', 'DELETE'] as const
}

export function getDeleteTykCacheJwksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.cache.jwks.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykCacheJwksMutationKey(),
    async mutationFn() {
      return parseResponse(client.tyk.cache.jwks.$delete(undefined, options))
    },
  })
}

export function useDeleteTykCacheJwks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.cache.jwks.$delete>>>
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
  const mutationDefaults = getDeleteTykCacheJwksMutationOptions<TError, TOnMutateResult>(
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

export function getTykCertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.certs.$get>>,
) {
  return ['tyk', '/tyk/certs', toValue(args)] as const
}

export function getTykCertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.certs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykCertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.certs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykCerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.certs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>
          >,
          ReturnType<typeof getTykCertsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykCertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykCertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.certs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTykCertsMutationKey() {
  return ['tyk', '/tyk/certs', 'POST'] as const
}

export function getPostTykCertsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.certs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykCertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.certs.$post>) {
      return parseResponse(client.tyk.certs.$post(args, options))
    },
  })
}

export function usePostTykCerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.certs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tyk.certs.$post>,
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
  const mutationDefaults = getPostTykCertsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTykCertsCertIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>>,
) {
  return ['tyk', '/tyk/certs/:certID', toValue(args)] as const
}

export function getTykCertsCertIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykCertsCertIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.certs[':certID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykCertsCertID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.certs)[':certID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykCertsCertIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykCertsCertIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykCertsCertIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.certs[':certID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTykCertsCertIDMutationKey() {
  return ['tyk', '/tyk/certs/:certID', 'DELETE'] as const
}

export function getDeleteTykCertsCertIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykCertsCertIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']>) {
      return parseResponse(client.tyk.certs[':certID'].$delete(args, options))
    },
  })
}

export function useDeleteTykCertsCertID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.certs)[':certID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.certs)[':certID']['$delete']>,
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
  const mutationDefaults = getDeleteTykCertsCertIDMutationOptions<TError, TOnMutateResult>(
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

export function getPostTykDebugMutationKey() {
  return ['tyk', '/tyk/debug', 'POST'] as const
}

export function getPostTykDebugMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.debug.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.debug.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykDebugMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.debug.$post>) {
      return parseResponse(client.tyk.debug.$post(args, options))
    },
  })
}

export function usePostTykDebug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.debug.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tyk.debug.$post>,
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
  const mutationDefaults = getPostTykDebugMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTykKeysQueryKey() {
  return ['tyk', '/tyk/keys'] as const
}

export function getTykKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTykKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>
          >,
          ReturnType<typeof getTykKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTykKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTykKeysMutationKey() {
  return ['tyk', '/tyk/keys', 'POST'] as const
}

export function getPostTykKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.tyk.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.keys.$post>) {
      return parseResponse(client.tyk.keys.$post(args, options))
    },
  })
}

export function usePostTykKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tyk.keys.$post>,
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
  const mutationDefaults = getPostTykKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTykKeysKeyIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>>,
) {
  return ['tyk', '/tyk/keys/:keyID', toValue(args)] as const
}

export function getTykKeysKeyIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykKeysKeyIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.keys[':keyID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykKeysKeyID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.keys)[':keyID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
            >
          >,
          ReturnType<typeof getTykKeysKeyIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykKeysKeyIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykKeysKeyIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.keys[':keyID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTykKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/keys/:keyID', 'PUT'] as const
}

export function getPutTykKeysKeyIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']>) {
      return parseResponse(client.tyk.keys[':keyID'].$put(args, options))
    },
  })
}

export function usePutTykKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.keys)[':keyID']['$put']>,
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
  const mutationDefaults = getPutTykKeysKeyIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTykKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/keys/:keyID', 'POST'] as const
}

export function getPostTykKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']>) {
      return parseResponse(client.tyk.keys[':keyID'].$post(args, options))
    },
  })
}

export function usePostTykKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.keys)[':keyID']['$post']>,
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
  const mutationDefaults = getPostTykKeysKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/keys/:keyID', 'DELETE'] as const
}

export function getDeleteTykKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']>) {
      return parseResponse(client.tyk.keys[':keyID'].$delete(args, options))
    },
  })
}

export function useDeleteTykKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.keys)[':keyID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.keys)[':keyID']['$delete']>,
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
  const mutationDefaults = getDeleteTykKeysKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getPostTykKeysCreateMutationKey() {
  return ['tyk', '/tyk/keys/create', 'POST'] as const
}

export function getPostTykKeysCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.keys.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.keys.create.$post>) {
      return parseResponse(client.tyk.keys.create.$post(args, options))
    },
  })
}

export function usePostTykKeysCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tyk.keys.create.$post>,
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
  const mutationDefaults = getPostTykKeysCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTykKeysPolicyKeyIDMutationKey() {
  return ['tyk', '/tyk/keys/policy/:keyID', 'POST'] as const
}

export function getPostTykKeysPolicyKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.keys.policy)[':keyID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysPolicyKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']>) {
      return parseResponse(client.tyk.keys.policy[':keyID'].$post(args, options))
    },
  })
}

export function usePostTykKeysPolicyKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.keys.policy)[':keyID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.keys.policy)[':keyID']['$post']>,
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
  const mutationDefaults = getPostTykKeysPolicyKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getPostTykKeysPreviewMutationKey() {
  return ['tyk', '/tyk/keys/preview', 'POST'] as const
}

export function getPostTykKeysPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.preview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.keys.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykKeysPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.keys.preview.$post>) {
      return parseResponse(client.tyk.keys.preview.$post(args, options))
    },
  })
}

export function usePostTykKeysPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.keys.preview.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tyk.keys.preview.$post>,
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
  const mutationDefaults = getPostTykKeysPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getTykOauthClientsApiIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID', toValue(args)] as const
}

export function getTykOauthClientsApiIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykOauthClientsApiIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.oauth.clients[':apiID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykOauthClientsApiID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykOauthClientsApiIDQueryKey>
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
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOauthClientsApiIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykOauthClientsApiIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.oauth.clients[':apiID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTykOauthClientsApiIDKeyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>
  >,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', toValue(args)] as const
}

export function getTykOauthClientsApiIDKeyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykOauthClientsApiIDKeyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.oauth.clients[':apiID'][':keyName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykOauthClientsApiIDKeyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykOauthClientsApiIDKeyNameQueryKey>
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
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOauthClientsApiIDKeyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykOauthClientsApiIDKeyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.oauth.clients[':apiID'][':keyName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTykOauthClientsApiIDKeyNameMutationKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', 'PUT'] as const
}

export function getPutTykOauthClientsApiIDKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykOauthClientsApiIDKeyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>,
    ) {
      return parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$put(args, options))
    },
  })
}

export function usePutTykOauthClientsApiIDKeyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$put']>,
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
  const mutationDefaults = getPutTykOauthClientsApiIDKeyNameMutationOptions<
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

export function getDeleteTykOauthClientsApiIDKeyNameMutationKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName', 'DELETE'] as const
}

export function getDeleteTykOauthClientsApiIDKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykOauthClientsApiIDKeyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>,
    ) {
      return parseResponse(client.tyk.oauth.clients[':apiID'][':keyName'].$delete(args, options))
    },
  })
}

export function useDeleteTykOauthClientsApiIDKeyName<
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
                  ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['$delete']>,
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
  const mutationDefaults = getDeleteTykOauthClientsApiIDKeyNameMutationOptions<
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

export function getPutTykOauthClientsApiIDKeyNameRotateMutationKey() {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName/rotate', 'PUT'] as const
}

export function getPutTykOauthClientsApiIDKeyNameRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykOauthClientsApiIDKeyNameRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']
      >,
    ) {
      return parseResponse(
        client.tyk.oauth.clients[':apiID'][':keyName'].rotate.$put(args, options),
      )
    },
  })
}

export function usePutTykOauthClientsApiIDKeyNameRotate<
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
                    (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['rotate']['$put']
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
  const mutationDefaults = getPutTykOauthClientsApiIDKeyNameRotateMutationOptions<
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

export function getTykOauthClientsApiIDKeyNameTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
  >,
) {
  return ['tyk', '/tyk/oauth/clients/:apiID/:keyName/tokens', toValue(args)] as const
}

export function getTykOauthClientsApiIDKeyNameTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykOauthClientsApiIDKeyNameTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.oauth.clients[':apiID'][':keyName'].tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykOauthClientsApiIDKeyNameTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
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
                    (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']
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
                    (typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTykOauthClientsApiIDKeyNameTokensQueryKey>
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
            ReturnType<(typeof client.tyk.oauth.clients)[':apiID'][':keyName']['tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOauthClientsApiIDKeyNameTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykOauthClientsApiIDKeyNameTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.oauth.clients[':apiID'][':keyName'].tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTykOauthClientsApisAppIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>
  >,
) {
  return ['tyk', '/tyk/oauth/clients/apis/:appID', toValue(args)] as const
}

export function getTykOauthClientsApisAppIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykOauthClientsApisAppIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.oauth.clients.apis[':appID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykOauthClientsApisAppID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykOauthClientsApisAppIDQueryKey>
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
          Awaited<ReturnType<(typeof client.tyk.oauth.clients.apis)[':appID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOauthClientsApisAppIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykOauthClientsApisAppIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.oauth.clients.apis[':appID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTykOauthClientsCreateMutationKey() {
  return ['tyk', '/tyk/oauth/clients/create', 'POST'] as const
}

export function getPostTykOauthClientsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.clients.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tyk.oauth.clients.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykOauthClientsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.oauth.clients.create.$post>) {
      return parseResponse(client.tyk.oauth.clients.create.$post(args, options))
    },
  })
}

export function usePostTykOauthClientsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.tyk.oauth.clients.create.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.tyk.oauth.clients.create.$post>,
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
  const mutationDefaults = getPostTykOauthClientsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykOauthRefreshKeyNameMutationKey() {
  return ['tyk', '/tyk/oauth/refresh/:keyName', 'DELETE'] as const
}

export function getDeleteTykOauthRefreshKeyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykOauthRefreshKeyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>,
    ) {
      return parseResponse(client.tyk.oauth.refresh[':keyName'].$delete(args, options))
    },
  })
}

export function useDeleteTykOauthRefreshKeyName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.oauth.refresh)[':keyName']['$delete']>,
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
  const mutationDefaults = getDeleteTykOauthRefreshKeyNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostTykOauthRevokeMutationKey() {
  return ['tyk', '/tyk/oauth/revoke', 'POST'] as const
}

export function getPostTykOauthRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykOauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.oauth.revoke.$post>) {
      return parseResponse(client.tyk.oauth.revoke.$post(args, options))
    },
  })
}

export function usePostTykOauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tyk.oauth.revoke.$post>,
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
  const mutationDefaults = getPostTykOauthRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPostTykOauthRevokeAllMutationKey() {
  return ['tyk', '/tyk/oauth/revoke_all', 'POST'] as const
}

export function getPostTykOauthRevokeAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke_all.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tyk.oauth.revoke_all.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykOauthRevokeAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.oauth.revoke_all.$post>) {
      return parseResponse(client.tyk.oauth.revoke_all.$post(args, options))
    },
  })
}

export function usePostTykOauthRevokeAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.revoke_all.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tyk.oauth.revoke_all.$post>,
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
  const mutationDefaults = getPostTykOauthRevokeAllMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykOauthTokensMutationKey() {
  return ['tyk', '/tyk/oauth/tokens', 'DELETE'] as const
}

export function getDeleteTykOauthTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.tokens.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.oauth.tokens.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykOauthTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.oauth.tokens.$delete>) {
      return parseResponse(client.tyk.oauth.tokens.$delete(args, options))
    },
  })
}

export function useDeleteTykOauthTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.oauth.tokens.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tyk.oauth.tokens.$delete>,
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
  const mutationDefaults = getDeleteTykOauthTokensMutationOptions<TError, TOnMutateResult>(
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

export function getTykOrgKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.org.keys.$get>>,
) {
  return ['tyk', '/tyk/org/keys', toValue(args)] as const
}

export function getTykOrgKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.org.keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykOrgKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.org.keys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykOrgKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.org.keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>
          >,
          ReturnType<typeof getTykOrgKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.org.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykOrgKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykOrgKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.org.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTykOrgKeysKeyIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>>,
) {
  return ['tyk', '/tyk/org/keys/:keyID', toValue(args)] as const
}

export function getTykOrgKeysKeyIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykOrgKeysKeyIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.org.keys[':keyID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykOrgKeysKeyID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykOrgKeysKeyIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykOrgKeysKeyIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykOrgKeysKeyIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.org.keys[':keyID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTykOrgKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'PUT'] as const
}

export function getPutTykOrgKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykOrgKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']>) {
      return parseResponse(client.tyk.org.keys[':keyID'].$put(args, options))
    },
  })
}

export function usePutTykOrgKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$put']>,
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
  const mutationDefaults = getPutTykOrgKeysKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getPostTykOrgKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'POST'] as const
}

export function getPostTykOrgKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTykOrgKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']>) {
      return parseResponse(client.tyk.org.keys[':keyID'].$post(args, options))
    },
  })
}

export function usePostTykOrgKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$post']>,
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
  const mutationDefaults = getPostTykOrgKeysKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykOrgKeysKeyIDMutationKey() {
  return ['tyk', '/tyk/org/keys/:keyID', 'DELETE'] as const
}

export function getDeleteTykOrgKeysKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykOrgKeysKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']>) {
      return parseResponse(client.tyk.org.keys[':keyID'].$delete(args, options))
    },
  })
}

export function useDeleteTykOrgKeysKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.org.keys)[':keyID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.org.keys)[':keyID']['$delete']>,
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
  const mutationDefaults = getDeleteTykOrgKeysKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getTykPoliciesQueryKey() {
  return ['tyk', '/tyk/policies'] as const
}

export function getTykPoliciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTykPoliciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.policies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>
          >,
          ReturnType<typeof getTykPoliciesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTykPoliciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.policies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTykPoliciesMutationKey() {
  return ['tyk', '/tyk/policies', 'POST'] as const
}

export function getPostTykPoliciesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tyk.policies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTykPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tyk.policies.$post>) {
      return parseResponse(client.tyk.policies.$post(args, options))
    },
  })
}

export function usePostTykPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.policies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tyk.policies.$post>,
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
  const mutationDefaults = getPostTykPoliciesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTykPoliciesPolIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>>,
) {
  return ['tyk', '/tyk/policies/:polID', toValue(args)] as const
}

export function getTykPoliciesPolIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykPoliciesPolIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.policies[':polID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTykPoliciesPolID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tyk.policies)[':polID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTykPoliciesPolIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTykPoliciesPolIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykPoliciesPolIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.policies[':polID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTykPoliciesPolIDMutationKey() {
  return ['tyk', '/tyk/policies/:polID', 'PUT'] as const
}

export function getPutTykPoliciesPolIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.policies)[':polID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTykPoliciesPolIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.policies)[':polID']['$put']>) {
      return parseResponse(client.tyk.policies[':polID'].$put(args, options))
    },
  })
}

export function usePutTykPoliciesPolID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.policies)[':polID']['$put']>,
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
  const mutationDefaults = getPutTykPoliciesPolIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTykPoliciesPolIDMutationKey() {
  return ['tyk', '/tyk/policies/:polID', 'DELETE'] as const
}

export function getDeleteTykPoliciesPolIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTykPoliciesPolIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']>) {
      return parseResponse(client.tyk.policies[':polID'].$delete(args, options))
    },
  })
}

export function useDeleteTykPoliciesPolID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tyk.policies)[':polID']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tyk.policies)[':polID']['$delete']>,
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
  const mutationDefaults = getDeleteTykPoliciesPolIDMutationOptions<TError, TOnMutateResult>(
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

export function getTykReloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.reload.$get>>,
) {
  return ['tyk', '/tyk/reload', toValue(args)] as const
}

export function getTykReloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.reload.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykReloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.reload.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykReload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.reload.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>
          >,
          ReturnType<typeof getTykReloadQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykReloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykReloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.reload.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTykReloadGroupQueryKey() {
  return ['tyk', '/tyk/reload/group'] as const
}

export function getTykReloadGroupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTykReloadGroupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.reload.group.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykReloadGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>
            >
          >,
          ReturnType<typeof getTykReloadGroupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.reload.group.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTykReloadGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTykReloadGroupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.reload.group.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListenPathTykBatchMutationKey() {
  return [':listen_path', '/:listen_path/tyk/batch', 'POST'] as const
}

export function getPostListenPathTykBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':listen_path']['tyk']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListenPathTykBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']>,
    ) {
      return parseResponse(client[':listen_path'].tyk.batch.$post(args, options))
    },
  })
}

export function usePostListenPathTykBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':listen_path']['tyk']['batch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':listen_path']['tyk']['batch']['$post']>,
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
  const mutationDefaults = getPostListenPathTykBatchMutationOptions<TError, TOnMutateResult>(
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

export function getTykSchemaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.schema.$get>>,
) {
  return ['tyk', '/tyk/schema', toValue(args)] as const
}

export function getTykSchemaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.schema.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTykSchemaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tyk.schema.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTykSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tyk.schema.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>
          >,
          ReturnType<typeof getTykSchemaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tyk.schema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTykSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTykSchemaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tyk.schema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
