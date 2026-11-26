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

export function getV1FoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.folders.$get>>,
) {
  return ['v1', '/v1/folders', toValue(args)] as const
}

export function getV1FoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.folders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Folders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$get>>>>
          >,
          ReturnType<typeof getV1FoldersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FoldersMutationKey() {
  return ['v1', '/v1/folders', 'POST'] as const
}

export function getPostV1FoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.folders.$post>) {
      return parseResponse(client.v1.folders.$post(args, options))
    },
  })
}

export function usePostV1Folders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.folders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.folders.$post>,
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
  const mutationDefaults = getPostV1FoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FoldersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.folders)[':id']['$get']>>,
) {
  return ['v1', '/v1/folders/:id', toValue(args)] as const
}

export function getV1FoldersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.folders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FoldersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.folders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FoldersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.folders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1FoldersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FoldersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FoldersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.folders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FoldersIdMutationKey() {
  return ['v1', '/v1/folders/:id', 'POST'] as const
}

export function getPostV1FoldersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.folders)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.folders)[':id']['$post']>) {
      return parseResponse(client.v1.folders[':id'].$post(args, options))
    },
  })
}

export function usePostV1FoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.folders)[':id']['$post']>,
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
  const mutationDefaults = getPostV1FoldersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1FoldersIdMutationKey() {
  return ['v1', '/v1/folders/:id', 'DELETE'] as const
}

export function getDeleteV1FoldersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.folders)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.folders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FoldersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.folders)[':id']['$delete']>) {
      return parseResponse(client.v1.folders[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1FoldersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.folders)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.folders)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1FoldersIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1FlowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.flows.$get>>,
) {
  return ['v1', '/v1/flows', toValue(args)] as const
}

export function getV1FlowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.flows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.flows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Flows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.flows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>
          >,
          ReturnType<typeof getV1FlowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FlowsMutationKey() {
  return ['v1', '/v1/flows', 'POST'] as const
}

export function getPostV1FlowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.flows.$post>) {
      return parseResponse(client.v1.flows.$post(args, options))
    },
  })
}

export function usePostV1Flows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.flows.$post>,
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
  const mutationDefaults = getPostV1FlowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FlowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.flows)[':id']['$get']>>,
) {
  return ['v1', '/v1/flows/:id', toValue(args)] as const
}

export function getV1FlowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.flows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FlowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.flows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FlowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.flows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1FlowsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FlowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.flows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FlowsIdMutationKey() {
  return ['v1', '/v1/flows/:id', 'POST'] as const
}

export function getPostV1FlowsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.flows)[':id']['$post']>) {
      return parseResponse(client.v1.flows[':id'].$post(args, options))
    },
  })
}

export function usePostV1FlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.flows)[':id']['$post']>,
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
  const mutationDefaults = getPostV1FlowsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1FlowsIdMutationKey() {
  return ['v1', '/v1/flows/:id', 'DELETE'] as const
}

export function getDeleteV1FlowsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.flows)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FlowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.flows)[':id']['$delete']>) {
      return parseResponse(client.v1.flows[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1FlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.flows)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.flows)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1FlowsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FlowsIdTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.flows)[':id']['template']['$get']>>,
) {
  return ['v1', '/v1/flows/:id/template', toValue(args)] as const
}

export function getV1FlowsIdTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.flows)[':id']['template']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FlowsIdTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.flows[':id'].template.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FlowsIdTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':id']['template']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.flows)[':id']['template']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.flows)[':id']['template']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.flows)[':id']['template']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FlowsIdTemplateQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.flows)[':id']['template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowsIdTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FlowsIdTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.flows[':id'].template.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1SampleDataTestStepMutationKey() {
  return ['v1', '/v1/sample-data/test-step', 'POST'] as const
}

export function getPostV1SampleDataTestStepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sample-data']['test-step']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['sample-data']['test-step']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SampleDataTestStepMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['sample-data']['test-step']['$post']>,
    ) {
      return parseResponse(client.v1['sample-data']['test-step'].$post(args, options))
    },
  })
}

export function usePostV1SampleDataTestStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sample-data']['test-step']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['sample-data']['test-step']['$post']>,
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
  const mutationDefaults = getPostV1SampleDataTestStepMutationOptions<TError, TOnMutateResult>(
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

export function getV1SampleDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sample-data']['$get']>>,
) {
  return ['v1', '/v1/sample-data', toValue(args)] as const
}

export function getV1SampleDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sample-data']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SampleDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sample-data'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SampleData<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sample-data']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sample-data']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sample-data']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sample-data']['$get']>>>
            >
          >,
          ReturnType<typeof getV1SampleDataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sample-data']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SampleDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SampleDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sample-data'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FlowRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['flow-runs']['$get']>>,
) {
  return ['v1', '/v1/flow-runs', toValue(args)] as const
}

export function getV1FlowRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['flow-runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FlowRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['flow-runs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FlowRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['flow-runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs']['$get']>>>
            >
          >,
          ReturnType<typeof getV1FlowRunsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FlowRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['flow-runs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FlowRunsCountByStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>
  >,
) {
  return ['v1', '/v1/flow-runs/count-by-status', toValue(args)] as const
}

export function getV1FlowRunsCountByStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FlowRunsCountByStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['flow-runs']['count-by-status'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FlowRunsCountByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FlowRunsCountByStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['flow-runs']['count-by-status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowRunsCountByStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FlowRunsCountByStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['flow-runs']['count-by-status'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FlowRunsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['flow-runs'][':id']['$get']>>,
) {
  return ['v1', '/v1/flow-runs/:id', toValue(args)] as const
}

export function getV1FlowRunsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['flow-runs'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FlowRunsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['flow-runs'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FlowRunsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['flow-runs'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['flow-runs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['flow-runs'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FlowRunsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['flow-runs'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowRunsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FlowRunsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['flow-runs'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1FlowRunsCancelMutationKey() {
  return ['v1', '/v1/flow-runs/cancel', 'POST'] as const
}

export function getPostV1FlowRunsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['flow-runs']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['flow-runs']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowRunsCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['flow-runs']['cancel']['$post']>) {
      return parseResponse(client.v1['flow-runs'].cancel.$post(args, options))
    },
  })
}

export function usePostV1FlowRunsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['flow-runs']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['flow-runs']['cancel']['$post']>,
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
  const mutationDefaults = getPostV1FlowRunsCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections']['$get']>>,
) {
  return ['v1', '/v1/app-connections', toValue(args)] as const
}

export function getV1AppConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['app-connections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['app-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppConnectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['app-connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['app-connections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppConnectionsMutationKey() {
  return ['v1', '/v1/app-connections', 'POST'] as const
}

export function getPostV1AppConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['app-connections']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['app-connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['app-connections']['$post']>) {
      return parseResponse(client.v1['app-connections'].$post(args, options))
    },
  })
}

export function usePostV1AppConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['app-connections']['$post']>,
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
  const mutationDefaults = getPostV1AppConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppConnectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections'][':id']['$get']>>,
) {
  return ['v1', '/v1/app-connections/:id', toValue(args)] as const
}

export function getV1AppConnectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppConnectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['app-connections'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppConnectionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppConnectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppConnectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['app-connections'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppConnectionsIdMutationKey() {
  return ['v1', '/v1/app-connections/:id', 'POST'] as const
}

export function getPostV1AppConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['app-connections'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$post']>,
    ) {
      return parseResponse(client.v1['app-connections'][':id'].$post(args, options))
    },
  })
}

export function usePostV1AppConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['app-connections'][':id']['$post']>,
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
  const mutationDefaults = getPostV1AppConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1AppConnectionsIdMutationKey() {
  return ['v1', '/v1/app-connections/:id', 'DELETE'] as const
}

export function getDeleteV1AppConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['app-connections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AppConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['app-connections'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['app-connections'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AppConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['app-connections'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['app-connections'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AppConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AppConnectionsOwnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections']['owners']['$get']>>,
) {
  return ['v1', '/v1/app-connections/owners', toValue(args)] as const
}

export function getV1AppConnectionsOwnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections']['owners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AppConnectionsOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['app-connections'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AppConnectionsOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['app-connections']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['app-connections']['owners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections']['owners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['app-connections']['owners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AppConnectionsOwnersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['app-connections']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AppConnectionsOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AppConnectionsOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['app-connections'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AppConnectionsReplaceMutationKey() {
  return ['v1', '/v1/app-connections/replace', 'POST'] as const
}

export function getPostV1AppConnectionsReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['app-connections']['replace']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['app-connections']['replace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppConnectionsReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['app-connections']['replace']['$post']>,
    ) {
      return parseResponse(client.v1['app-connections'].replace.$post(args, options))
    },
  })
}

export function usePostV1AppConnectionsReplace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['app-connections']['replace']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['app-connections']['replace']['$post']>,
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
  const mutationDefaults = getPostV1AppConnectionsReplaceMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AppConnectionsOauth2AuthorizationUrlMutationKey() {
  return ['v1', '/v1/app-connections/oauth2/authorization-url', 'POST'] as const
}

export function getPostV1AppConnectionsOauth2AuthorizationUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AppConnectionsOauth2AuthorizationUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['app-connections'].oauth2['authorization-url'].$post(args, options),
      )
    },
  })
}

export function usePostV1AppConnectionsOauth2AuthorizationUrl<
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
                    (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['app-connections']['oauth2']['authorization-url']['$post']
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
  const mutationDefaults = getPostV1AppConnectionsOauth2AuthorizationUrlMutationOptions<
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

export function getV1VariablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.variables.$get>>,
) {
  return ['v1', '/v1/variables', toValue(args)] as const
}

export function getV1VariablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.variables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.variables.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Variables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.variables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
          >,
          ReturnType<typeof getV1VariablesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1VariablesMutationKey() {
  return ['v1', '/v1/variables', 'POST'] as const
}

export function getPostV1VariablesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.variables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VariablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.variables.$post>) {
      return parseResponse(client.v1.variables.$post(args, options))
    },
  })
}

export function usePostV1Variables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.variables.$post>,
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
  const mutationDefaults = getPostV1VariablesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1VariablesIdMutationKey() {
  return ['v1', '/v1/variables/:id', 'POST'] as const
}

export function getPostV1VariablesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.variables)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VariablesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.variables)[':id']['$post']>) {
      return parseResponse(client.v1.variables[':id'].$post(args, options))
    },
  })
}

export function usePostV1VariablesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.variables)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.variables)[':id']['$post']>,
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
  const mutationDefaults = getPostV1VariablesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1VariablesIdMutationKey() {
  return ['v1', '/v1/variables/:id', 'DELETE'] as const
}

export function getDeleteV1VariablesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.variables)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1VariablesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.variables)[':id']['$delete']>) {
      return parseResponse(client.v1.variables[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1VariablesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.variables)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.variables)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1VariablesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1PlatformsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.platforms)[':id']['$get']>>,
) {
  return ['v1', '/v1/platforms/:id', toValue(args)] as const
}

export function getV1PlatformsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.platforms)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PlatformsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.platforms[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PlatformsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.platforms)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.platforms)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.platforms)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.platforms)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1PlatformsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.platforms)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PlatformsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PlatformsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.platforms[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdMcpServerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:projectId/mcp-server', toValue(args)] as const
}

export function getV1ProjectsProjectIdMcpServerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdMcpServerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':projectId']['mcp-server'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdMcpServer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdMcpServerQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdMcpServerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdMcpServerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':projectId']['mcp-server'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectIdMcpServerMutationKey() {
  return ['v1', '/v1/projects/:projectId/mcp-server', 'POST'] as const
}

export function getPostV1ProjectsProjectIdMcpServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdMcpServerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':projectId']['mcp-server'].$post(args, options))
    },
  })
}

export function usePostV1ProjectsProjectIdMcpServer<
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
                  ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['$post']>,
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
  const mutationDefaults = getPostV1ProjectsProjectIdMcpServerMutationOptions<
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

export function getPostV1ProjectsProjectIdMcpServerRotateMutationKey() {
  return ['v1', '/v1/projects/:projectId/mcp-server/rotate', 'POST'] as const
}

export function getPostV1ProjectsProjectIdMcpServerRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdMcpServerRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':projectId']['mcp-server'].rotate.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectIdMcpServerRotate<
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
                    (typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':projectId']['mcp-server']['rotate']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectIdMcpServerRotateMutationOptions<
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

export function getV1McpServerQueryKey() {
  return ['v1', '/v1/mcp-server'] as const
}

export function getV1McpServerQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1McpServerQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['mcp-server'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1McpServer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$get']>>>
            >
          >,
          ReturnType<typeof getV1McpServerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1McpServerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1McpServerQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['mcp-server'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1McpServerMutationKey() {
  return ['v1', '/v1/mcp-server', 'POST'] as const
}

export function getPostV1McpServerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['mcp-server']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1McpServerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['mcp-server']['$post']>) {
      return parseResponse(client.v1['mcp-server'].$post(args, options))
    },
  })
}

export function usePostV1McpServer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['mcp-server']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['mcp-server']['$post']>,
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
  const mutationDefaults = getPostV1McpServerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1McpServerRotateMutationKey() {
  return ['v1', '/v1/mcp-server/rotate', 'POST'] as const
}

export function getPostV1McpServerRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['mcp-server']['rotate']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1McpServerRotateMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1['mcp-server'].rotate.$post(undefined, options))
    },
  })
}

export function usePostV1McpServerRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['mcp-server']['rotate']['$post']>>
              >
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
  const mutationDefaults = getPostV1McpServerRotateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1McpOauthApproveMutationKey() {
  return ['v1', '/v1/mcp-oauth/approve', 'POST'] as const
}

export function getPostV1McpOauthApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['mcp-oauth']['approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['mcp-oauth']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1McpOauthApproveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['mcp-oauth']['approve']['$post']>) {
      return parseResponse(client.v1['mcp-oauth'].approve.$post(args, options))
    },
  })
}

export function usePostV1McpOauthApprove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['mcp-oauth']['approve']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['mcp-oauth']['approve']['$post']>,
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
  const mutationDefaults = getPostV1McpOauthApproveMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ProjectsProjectIdAgentToolsMcpValidateMutationKey() {
  return ['v1', '/v1/projects/:projectId/agent-tools/mcp/validate', 'POST'] as const
}

export function getPostV1ProjectsProjectIdAgentToolsMcpValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdAgentToolsMcpValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':projectId']['agent-tools'].mcp.validate.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectIdAgentToolsMcpValidate<
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
                    (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':projectId']['agent-tools']['mcp']['validate']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectIdAgentToolsMcpValidateMutationOptions<
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

export function getV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
) {
  return ['v1', '/v1/users', toValue(args)] as const
}

export function getV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          ReturnType<typeof getV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['$get']>>,
) {
  return ['v1', '/v1/users/:id', toValue(args)] as const
}

export function getV1UsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1UsersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1UsersIdMutationKey() {
  return ['v1', '/v1/users/:id', 'POST'] as const
}

export function getPostV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':id']['$post']>) {
      return parseResponse(client.v1.users[':id'].$post(args, options))
    },
  })
}

export function usePostV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.users)[':id']['$post']>,
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
  const mutationDefaults = getPostV1UsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1UsersIdMutationKey() {
  return ['v1', '/v1/users/:id', 'DELETE'] as const
}

export function getDeleteV1UsersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':id']['$delete']>) {
      return parseResponse(client.v1.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1UsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.users)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1UsersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1UserInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['user-invitations']['$get']>>,
) {
  return ['v1', '/v1/user-invitations', toValue(args)] as const
}

export function getV1UserInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['user-invitations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UserInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['user-invitations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UserInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['user-invitations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['user-invitations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['user-invitations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['user-invitations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1UserInvitationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['user-invitations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UserInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['user-invitations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1UserInvitationsMutationKey() {
  return ['v1', '/v1/user-invitations', 'POST'] as const
}

export function getPostV1UserInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['user-invitations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['user-invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['user-invitations']['$post']>) {
      return parseResponse(client.v1['user-invitations'].$post(args, options))
    },
  })
}

export function usePostV1UserInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['user-invitations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['user-invitations']['$post']>,
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
  const mutationDefaults = getPostV1UserInvitationsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1UserInvitationsIdMutationKey() {
  return ['v1', '/v1/user-invitations/:id', 'DELETE'] as const
}

export function getDeleteV1UserInvitationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['user-invitations'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['user-invitations'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UserInvitationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['user-invitations'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['user-invitations'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1UserInvitationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['user-invitations'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['user-invitations'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1UserInvitationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1WorkerMachinesQueueMetricsQueryKey() {
  return ['v1', '/v1/worker-machines/queue-metrics'] as const
}

export function getV1WorkerMachinesQueueMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1WorkerMachinesQueueMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['worker-machines']['queue-metrics'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WorkerMachinesQueueMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['worker-machines']['queue-metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['worker-machines']['queue-metrics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['worker-machines']['queue-metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WorkerMachinesQueueMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['worker-machines']['queue-metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WorkerMachinesQueueMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1WorkerMachinesQueueMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['worker-machines']['queue-metrics'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TablesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['$get']>>,
) {
  return ['v1', '/v1/tables/:id', toValue(args)] as const
}

export function getV1TablesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TablesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tables[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TablesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1TablesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TablesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TablesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tables[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TablesIdMutationKey() {
  return ['v1', '/v1/tables/:id', 'POST'] as const
}

export function getPostV1TablesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TablesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tables)[':id']['$post']>) {
      return parseResponse(client.v1.tables[':id'].$post(args, options))
    },
  })
}

export function usePostV1TablesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tables)[':id']['$post']>,
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
  const mutationDefaults = getPostV1TablesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1TablesIdMutationKey() {
  return ['v1', '/v1/tables/:id', 'DELETE'] as const
}

export function getDeleteV1TablesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TablesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tables)[':id']['$delete']>) {
      return parseResponse(client.v1.tables[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1TablesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tables)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tables)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1TablesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1TablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tables.$get>>,
) {
  return ['v1', '/v1/tables', toValue(args)] as const
}

export function getV1TablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tables.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Tables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.$get>>>>
          >,
          ReturnType<typeof getV1TablesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TablesIdTemplateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['template']['$get']>>,
) {
  return ['v1', '/v1/tables/:id/template', toValue(args)] as const
}

export function getV1TablesIdTemplateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['template']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TablesIdTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tables[':id'].template.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TablesIdTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tables)[':id']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['template']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tables)[':id']['template']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tables)[':id']['template']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TablesIdTemplateQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.tables)[':id']['template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TablesIdTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TablesIdTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tables[':id'].template.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TablesCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tables.count.$get>>,
) {
  return ['v1', '/v1/tables/count', toValue(args)] as const
}

export function getV1TablesCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tables.count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TablesCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tables.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TablesCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.tables.count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.count.$get>>>
            >
          >,
          ReturnType<typeof getV1TablesCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tables.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TablesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TablesCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tables.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TablesIdExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['export']['$get']>>,
) {
  return ['v1', '/v1/tables/:id/export', toValue(args)] as const
}

export function getV1TablesIdExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['export']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TablesIdExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tables[':id'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TablesIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tables)[':id']['export']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tables)[':id']['export']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tables)[':id']['export']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tables)[':id']['export']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1TablesIdExportQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.tables)[':id']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TablesIdExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TablesIdExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tables[':id'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TablesIdWebhooksMutationKey() {
  return ['v1', '/v1/tables/:id/webhooks', 'POST'] as const
}

export function getPostV1TablesIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tables)[':id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TablesIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tables)[':id']['webhooks']['$post']>,
    ) {
      return parseResponse(client.v1.tables[':id'].webhooks.$post(args, options))
    },
  })
}

export function usePostV1TablesIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tables)[':id']['webhooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tables)[':id']['webhooks']['$post']>,
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
  const mutationDefaults = getPostV1TablesIdWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1TablesIdWebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/tables/:id/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteV1TablesIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TablesIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>,
    ) {
      return parseResponse(client.v1.tables[':id'].webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteV1TablesIdWebhooksWebhookId<
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
                  ReturnType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tables)[':id']['webhooks'][':webhookId']['$delete']>,
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
  const mutationDefaults = getDeleteV1TablesIdWebhooksWebhookIdMutationOptions<
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

export function getPostV1TablesIdClearMutationKey() {
  return ['v1', '/v1/tables/:id/clear', 'POST'] as const
}

export function getPostV1TablesIdClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tables)[':id']['clear']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tables)[':id']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TablesIdClearMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tables)[':id']['clear']['$post']>) {
      return parseResponse(client.v1.tables[':id'].clear.$post(args, options))
    },
  })
}

export function usePostV1TablesIdClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tables)[':id']['clear']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tables)[':id']['clear']['$post']>,
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
  const mutationDefaults = getPostV1TablesIdClearMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1RecordsIdMutationKey() {
  return ['v1', '/v1/records/:id', 'POST'] as const
}

export function getPostV1RecordsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.records)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.records)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RecordsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.records)[':id']['$post']>) {
      return parseResponse(client.v1.records[':id'].$post(args, options))
    },
  })
}

export function usePostV1RecordsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.records)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.records)[':id']['$post']>,
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
  const mutationDefaults = getPostV1RecordsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1RecordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.records.$get>>,
) {
  return ['v1', '/v1/records', toValue(args)] as const
}

export function getV1RecordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.records.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.records.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Records<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.records.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$get>>>>
          >,
          ReturnType<typeof getV1RecordsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1RecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1RecordsMutationKey() {
  return ['v1', '/v1/records', 'DELETE'] as const
}

export function getDeleteV1RecordsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.records.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RecordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.records.$delete>) {
      return parseResponse(client.v1.records.$delete(args, options))
    },
  })
}

export function useDeleteV1Records<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.records.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.records.$delete>,
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
  const mutationDefaults = getDeleteV1RecordsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1KnowledgeBaseFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['knowledge-base']['files']['$get']>>,
) {
  return ['v1', '/v1/knowledge-base/files', toValue(args)] as const
}

export function getV1KnowledgeBaseFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['knowledge-base']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1KnowledgeBaseFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['knowledge-base'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1KnowledgeBaseFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['knowledge-base']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1KnowledgeBaseFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KnowledgeBaseFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1KnowledgeBaseFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['knowledge-base'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1KnowledgeBaseFilesMutationKey() {
  return ['v1', '/v1/knowledge-base/files', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['$post']>,
    ) {
      return parseResponse(client.v1['knowledge-base'].files.$post(args, options))
    },
  })
}

export function usePostV1KnowledgeBaseFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['knowledge-base']['files']['$post']>,
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
  const mutationDefaults = getPostV1KnowledgeBaseFilesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1KnowledgeBaseFilesUploadMutationKey() {
  return ['v1', '/v1/knowledge-base/files/upload', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>,
    ) {
      return parseResponse(client.v1['knowledge-base'].files.upload.$post(args, options))
    },
  })
}

export function usePostV1KnowledgeBaseFilesUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['knowledge-base']['files']['upload']['$post']>,
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
  const mutationDefaults = getPostV1KnowledgeBaseFilesUploadMutationOptions<
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

export function getDeleteV1KnowledgeBaseFilesIdMutationKey() {
  return ['v1', '/v1/knowledge-base/files/:id', 'DELETE'] as const
}

export function getDeleteV1KnowledgeBaseFilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1KnowledgeBaseFilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['knowledge-base'].files[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1KnowledgeBaseFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1KnowledgeBaseFilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1KnowledgeBaseFilesIdChunksCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
    >
  >,
) {
  return ['v1', '/v1/knowledge-base/files/:id/chunks/count', toValue(args)] as const
}

export function getV1KnowledgeBaseFilesIdChunksCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1KnowledgeBaseFilesIdChunksCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['knowledge-base'].files[':id'].chunks.count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1KnowledgeBaseFilesIdChunksCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
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
                    (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
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
                    (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1KnowledgeBaseFilesIdChunksCountQueryKey>
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
              (typeof client.v1)['knowledge-base']['files'][':id']['chunks']['count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KnowledgeBaseFilesIdChunksCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1KnowledgeBaseFilesIdChunksCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['knowledge-base'].files[':id'].chunks.count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1KnowledgeBaseFilesIdExtractChunksMutationKey() {
  return ['v1', '/v1/knowledge-base/files/:id/extract-chunks', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesIdExtractChunksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesIdExtractChunksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['knowledge-base'].files[':id']['extract-chunks'].$post(args, options),
      )
    },
  })
}

export function usePostV1KnowledgeBaseFilesIdExtractChunks<
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
                    (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['knowledge-base']['files'][':id']['extract-chunks']['$post']
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
  const mutationDefaults = getPostV1KnowledgeBaseFilesIdExtractChunksMutationOptions<
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

export function getPostV1KnowledgeBaseFilesIdStoreChunksMutationKey() {
  return ['v1', '/v1/knowledge-base/files/:id/store-chunks', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesIdStoreChunksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesIdStoreChunksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['knowledge-base'].files[':id']['store-chunks'].$post(args, options),
      )
    },
  })
}

export function usePostV1KnowledgeBaseFilesIdStoreChunks<
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
                    (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['knowledge-base']['files'][':id']['store-chunks']['$post']
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
  const mutationDefaults = getPostV1KnowledgeBaseFilesIdStoreChunksMutationOptions<
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

export function getV1KnowledgeBaseFilesIdChunksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>
  >,
) {
  return ['v1', '/v1/knowledge-base/files/:id/chunks', toValue(args)] as const
}

export function getV1KnowledgeBaseFilesIdChunksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1KnowledgeBaseFilesIdChunksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['knowledge-base'].files[':id'].chunks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1KnowledgeBaseFilesIdChunks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>
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
                  ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1KnowledgeBaseFilesIdChunksQueryKey>
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
            ReturnType<(typeof client.v1)['knowledge-base']['files'][':id']['chunks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1KnowledgeBaseFilesIdChunksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1KnowledgeBaseFilesIdChunksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['knowledge-base'].files[':id'].chunks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1KnowledgeBaseFilesSearchMutationKey() {
  return ['v1', '/v1/knowledge-base/files/search', 'POST'] as const
}

export function getPostV1KnowledgeBaseFilesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1KnowledgeBaseFilesSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>,
    ) {
      return parseResponse(client.v1['knowledge-base'].files.search.$post(args, options))
    },
  })
}

export function usePostV1KnowledgeBaseFilesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['knowledge-base']['files']['search']['$post']>,
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
  const mutationDefaults = getPostV1KnowledgeBaseFilesSearchMutationOptions<
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

export function getV1TemplatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.templates)[':id']['$get']>>,
) {
  return ['v1', '/v1/templates/:id', toValue(args)] as const
}

export function getV1TemplatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.templates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.templates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1TemplatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TemplatesIdMutationKey() {
  return ['v1', '/v1/templates/:id', 'POST'] as const
}

export function getPostV1TemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.templates)[':id']['$post']>) {
      return parseResponse(client.v1.templates[':id'].$post(args, options))
    },
  })
}

export function usePostV1TemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':id']['$post']>,
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
  const mutationDefaults = getPostV1TemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1TemplatesIdMutationKey() {
  return ['v1', '/v1/templates/:id', 'DELETE'] as const
}

export function getDeleteV1TemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.templates)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.templates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.templates)[':id']['$delete']>) {
      return parseResponse(client.v1.templates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1TemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.templates)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.templates)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1TemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1TemplatesCategoriesQueryKey() {
  return ['v1', '/v1/templates/categories'] as const
}

export function getV1TemplatesCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TemplatesCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TemplatesCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.categories.$get>>>
            >
          >,
          ReturnType<typeof getV1TemplatesCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TemplatesCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.templates.$get>>,
) {
  return ['v1', '/v1/templates', toValue(args)] as const
}

export function getV1TemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.templates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Templates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
          >,
          ReturnType<typeof getV1TemplatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TemplatesMutationKey() {
  return ['v1', '/v1/templates', 'POST'] as const
}

export function getPostV1TemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.templates.$post>) {
      return parseResponse(client.v1.templates.$post(args, options))
    },
  })
}

export function usePostV1Templates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.templates.$post>,
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
  const mutationDefaults = getPostV1TemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.projects.$get>>,
) {
  return ['v1', '/v1/projects', toValue(args)] as const
}

export function getV1ProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
          >,
          ReturnType<typeof getV1ProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsMutationKey() {
  return ['v1', '/v1/projects', 'POST'] as const
}

export function getPostV1ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.projects.$post>) {
      return parseResponse(client.v1.projects.$post(args, options))
    },
  })
}

export function usePostV1Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.projects.$post>,
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
  const mutationDefaults = getPostV1ProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1ProjectsIdMutationKey() {
  return ['v1', '/v1/projects/:id', 'POST'] as const
}

export function getPostV1ProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.projects)[':id']['$post']>) {
      return parseResponse(client.v1.projects[':id'].$post(args, options))
    },
  })
}

export function usePostV1ProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':id']['$post']>,
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
  const mutationDefaults = getPostV1ProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ProjectsIdMutationKey() {
  return ['v1', '/v1/projects/:id', 'DELETE'] as const
}

export function getDeleteV1ProjectsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.projects)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.projects)[':id']['$delete']>) {
      return parseResponse(client.v1.projects[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ProjectsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['project-members']['$get']>>,
) {
  return ['v1', '/v1/project-members', toValue(args)] as const
}

export function getV1ProjectMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['project-members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['project-members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['project-members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['project-members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['project-members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['project-members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectMembersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['project-members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['project-members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ProjectMembersIdMutationKey() {
  return ['v1', '/v1/project-members/:id', 'DELETE'] as const
}

export function getDeleteV1ProjectMembersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['project-members'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['project-members'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectMembersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['project-members'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['project-members'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectMembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['project-members'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['project-members'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ProjectMembersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PiecesMutationKey() {
  return ['v1', '/v1/pieces', 'POST'] as const
}

export function getPostV1PiecesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pieces.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.pieces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PiecesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.pieces.$post>) {
      return parseResponse(client.v1.pieces.$post(args, options))
    },
  })
}

export function usePostV1Pieces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pieces.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.pieces.$post>,
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
  const mutationDefaults = getPostV1PiecesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1GitReposMutationKey() {
  return ['v1', '/v1/git-repos', 'POST'] as const
}

export function getPostV1GitReposMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['git-repos']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['git-repos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GitReposMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['git-repos']['$post']>) {
      return parseResponse(client.v1['git-repos'].$post(args, options))
    },
  })
}

export function usePostV1GitRepos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['git-repos']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['git-repos']['$post']>,
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
  const mutationDefaults = getPostV1GitReposMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1EventDestinationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['event-destinations']['$get']>>,
) {
  return ['v1', '/v1/event-destinations', toValue(args)] as const
}

export function getV1EventDestinationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['event-destinations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventDestinationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['event-destinations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventDestinations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-destinations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['event-destinations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['event-destinations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['event-destinations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EventDestinationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['event-destinations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventDestinationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventDestinationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['event-destinations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectRolesIdProjectMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>
  >,
) {
  return ['v1', '/v1/project-roles/:id/project-members', toValue(args)] as const
}

export function getV1ProjectRolesIdProjectMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectRolesIdProjectMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['project-roles'][':id']['project-members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectRolesIdProjectMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>
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
                  ReturnType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectRolesIdProjectMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['project-roles'][':id']['project-members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectRolesIdProjectMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectRolesIdProjectMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['project-roles'][':id']['project-members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectReleasesMutationKey() {
  return ['v1', '/v1/project-releases', 'POST'] as const
}

export function getPostV1ProjectReleasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['project-releases']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['project-releases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectReleasesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['project-releases']['$post']>) {
      return parseResponse(client.v1['project-releases'].$post(args, options))
    },
  })
}

export function usePostV1ProjectReleases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['project-releases']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['project-releases']['$post']>,
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
  const mutationDefaults = getPostV1ProjectReleasesMutationOptions<TError, TOnMutateResult>(
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

export function getV1GlobalConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['global-connections']['$get']>>,
) {
  return ['v1', '/v1/global-connections', toValue(args)] as const
}

export function getV1GlobalConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['global-connections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1GlobalConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['global-connections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1GlobalConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['global-connections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['global-connections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['global-connections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1GlobalConnectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GlobalConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1GlobalConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['global-connections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1GlobalConnectionsMutationKey() {
  return ['v1', '/v1/global-connections', 'POST'] as const
}

export function getPostV1GlobalConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-connections']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['global-connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GlobalConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['global-connections']['$post']>) {
      return parseResponse(client.v1['global-connections'].$post(args, options))
    },
  })
}

export function usePostV1GlobalConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['global-connections']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['global-connections']['$post']>,
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
  const mutationDefaults = getPostV1GlobalConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1GlobalConnectionsIdMutationKey() {
  return ['v1', '/v1/global-connections/:id', 'POST'] as const
}

export function getPostV1GlobalConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['global-connections'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['global-connections'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GlobalConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['global-connections'][':id']['$post']>,
    ) {
      return parseResponse(client.v1['global-connections'][':id'].$post(args, options))
    },
  })
}

export function usePostV1GlobalConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['global-connections'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['global-connections'][':id']['$post']>,
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
  const mutationDefaults = getPostV1GlobalConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1GlobalConnectionsIdMutationKey() {
  return ['v1', '/v1/global-connections/:id', 'DELETE'] as const
}

export function getDeleteV1GlobalConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['global-connections'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['global-connections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GlobalConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['global-connections'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['global-connections'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1GlobalConnectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['global-connections'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['global-connections'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1GlobalConnectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1EmbedSubdomainAllowedEmbedOriginsMutationKey() {
  return ['v1', '/v1/embed-subdomain/allowed-embed-origins', 'POST'] as const
}

export function getPostV1EmbedSubdomainAllowedEmbedOriginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmbedSubdomainAllowedEmbedOriginsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['embed-subdomain']['allowed-embed-origins'].$post(args, options),
      )
    },
  })
}

export function usePostV1EmbedSubdomainAllowedEmbedOrigins<
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
                    (typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['embed-subdomain']['allowed-embed-origins']['$post']>,
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
  const mutationDefaults = getPostV1EmbedSubdomainAllowedEmbedOriginsMutationOptions<
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

export function getV1AgentsConversationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.conversations.$get>>,
) {
  return ['v1', '/v1/agents/conversations', toValue(args)] as const
}

export function getV1AgentsConversationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.conversations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents.conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentsConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agents.conversations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$get>>>
            >
          >,
          ReturnType<typeof getV1AgentsConversationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents.conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AgentsConversationsMutationKey() {
  return ['v1', '/v1/agents/conversations', 'POST'] as const
}

export function getPostV1AgentsConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.agents.conversations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsConversationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.agents.conversations.$post>) {
      return parseResponse(client.v1.agents.conversations.$post(args, options))
    },
  })
}

export function usePostV1AgentsConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.conversations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.agents.conversations.$post>,
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
  const mutationDefaults = getPostV1AgentsConversationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AgentsConversationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.agents.conversations)[':id']['$get']>>,
) {
  return ['v1', '/v1/agents/conversations/:id', toValue(args)] as const
}

export function getV1AgentsConversationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.agents.conversations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsConversationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents.conversations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentsConversationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.agents.conversations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AgentsConversationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsConversationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsConversationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents.conversations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AgentsConversationsIdMutationKey() {
  return ['v1', '/v1/agents/conversations/:id', 'POST'] as const
}

export function getPostV1AgentsConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsConversationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$post']>,
    ) {
      return parseResponse(client.v1.agents.conversations[':id'].$post(args, options))
    },
  })
}

export function usePostV1AgentsConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agents.conversations)[':id']['$post']>,
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
  const mutationDefaults = getPostV1AgentsConversationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1AgentsConversationsIdMutationKey() {
  return ['v1', '/v1/agents/conversations/:id', 'DELETE'] as const
}

export function getDeleteV1AgentsConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AgentsConversationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.agents.conversations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AgentsConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agents.conversations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AgentsConversationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AgentsConversationsIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>
  >,
) {
  return ['v1', '/v1/agents/conversations/:id/messages', toValue(args)] as const
}

export function getV1AgentsConversationsIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentsConversationsIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agents.conversations[':id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentsConversationsIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>
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
                  ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AgentsConversationsIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsConversationsIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentsConversationsIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agents.conversations[':id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AgentsConversationsIdMessagesMutationKey() {
  return ['v1', '/v1/agents/conversations/:id/messages', 'POST'] as const
}

export function getPostV1AgentsConversationsIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsConversationsIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>,
    ) {
      return parseResponse(client.v1.agents.conversations[':id'].messages.$post(args, options))
    },
  })
}

export function usePostV1AgentsConversationsIdMessages<
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
                  ReturnType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agents.conversations)[':id']['messages']['$post']>,
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
  const mutationDefaults = getPostV1AgentsConversationsIdMessagesMutationOptions<
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

export function getPostV1AgentsToolApprovalsGateIdMutationKey() {
  return ['v1', '/v1/agents/tool-approvals/:gateId', 'POST'] as const
}

export function getPostV1AgentsToolApprovalsGateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsToolApprovalsGateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>,
    ) {
      return parseResponse(client.v1.agents['tool-approvals'][':gateId'].$post(args, options))
    },
  })
}

export function usePostV1AgentsToolApprovalsGateId<
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
                Awaited<ReturnType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agents)['tool-approvals'][':gateId']['$post']>,
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
  const mutationDefaults = getPostV1AgentsToolApprovalsGateIdMutationOptions<
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

export function getPostV1PlatformConfigurationsMutationKey() {
  return ['v1', '/v1/platform-configurations', 'POST'] as const
}

export function getPostV1PlatformConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-configurations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['platform-configurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PlatformConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['platform-configurations']['$post']>,
    ) {
      return parseResponse(client.v1['platform-configurations'].$post(args, options))
    },
  })
}

export function usePostV1PlatformConfigurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['platform-configurations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['platform-configurations']['$post']>,
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
  const mutationDefaults = getPostV1PlatformConfigurationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AiProvidersConfigsQueryKey() {
  return ['v1', '/v1/ai-providers/configs'] as const
}

export function getV1AiProvidersConfigsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AiProvidersConfigsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['ai-providers'].configs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AiProvidersConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AiProvidersConfigsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiProvidersConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AiProvidersConfigsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['ai-providers'].configs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AiProvidersConfigsIdModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>
  >,
) {
  return ['v1', '/v1/ai-providers/configs/:id/models', toValue(args)] as const
}

export function getV1AiProvidersConfigsIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AiProvidersConfigsIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['ai-providers'].configs[':id'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AiProvidersConfigsIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>
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
                  ReturnType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AiProvidersConfigsIdModelsQueryKey>
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
            ReturnType<(typeof client.v1)['ai-providers']['configs'][':id']['models']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiProvidersConfigsIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AiProvidersConfigsIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['ai-providers'].configs[':id'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AiProvidersConfigsIdSuggestedModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
    >
  >,
) {
  return ['v1', '/v1/ai-providers/configs/:id/suggested-models', toValue(args)] as const
}

export function getV1AiProvidersConfigsIdSuggestedModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AiProvidersConfigsIdSuggestedModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['ai-providers'].configs[':id']['suggested-models'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AiProvidersConfigsIdSuggestedModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
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
                    (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
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
                    (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AiProvidersConfigsIdSuggestedModelsQueryKey>
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
              (typeof client.v1)['ai-providers']['configs'][':id']['suggested-models']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiProvidersConfigsIdSuggestedModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AiProvidersConfigsIdSuggestedModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['ai-providers'].configs[':id']['suggested-models'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AiProvidersModelOptionsPlatformQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>
  >,
) {
  return ['v1', '/v1/ai-providers/model-options/platform', toValue(args)] as const
}

export function getV1AiProvidersModelOptionsPlatformQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AiProvidersModelOptionsPlatformQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['ai-providers']['model-options'].platform.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AiProvidersModelOptionsPlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>
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
                    (typeof client.v1)['ai-providers']['model-options']['platform']['$get']
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
                    (typeof client.v1)['ai-providers']['model-options']['platform']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AiProvidersModelOptionsPlatformQueryKey>
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
            ReturnType<(typeof client.v1)['ai-providers']['model-options']['platform']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiProvidersModelOptionsPlatformQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AiProvidersModelOptionsPlatformQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['ai-providers']['model-options'].platform.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AiProvidersMutationKey() {
  return ['v1', '/v1/ai-providers', 'POST'] as const
}

export function getPostV1AiProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-providers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-providers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiProvidersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-providers']['$post']>) {
      return parseResponse(client.v1['ai-providers'].$post(args, options))
    },
  })
}

export function usePostV1AiProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-providers']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['ai-providers']['$post']>,
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
  const mutationDefaults = getPostV1AiProvidersMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AiProvidersIdRecheckMutationKey() {
  return ['v1', '/v1/ai-providers/:id/recheck', 'POST'] as const
}

export function getPostV1AiProvidersIdRecheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiProvidersIdRecheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>,
    ) {
      return parseResponse(client.v1['ai-providers'][':id'].recheck.$post(args, options))
    },
  })
}

export function usePostV1AiProvidersIdRecheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['ai-providers'][':id']['recheck']['$post']>,
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
  const mutationDefaults = getPostV1AiProvidersIdRecheckMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AiProvidersIdMutationKey() {
  return ['v1', '/v1/ai-providers/:id', 'POST'] as const
}

export function getPostV1AiProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-providers'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiProvidersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['$post']>) {
      return parseResponse(client.v1['ai-providers'][':id'].$post(args, options))
    },
  })
}

export function usePostV1AiProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['ai-providers'][':id']['$post']>,
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
  const mutationDefaults = getPostV1AiProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1AiProvidersIdMutationKey() {
  return ['v1', '/v1/ai-providers/:id', 'DELETE'] as const
}

export function getDeleteV1AiProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['ai-providers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AiProvidersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-providers'][':id']['$delete']>) {
      return parseResponse(client.v1['ai-providers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AiProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['ai-providers'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['ai-providers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AiProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1PlatformModelTiersAdminQueryKey() {
  return ['v1', '/v1/platform-model-tiers/admin'] as const
}

export function getV1PlatformModelTiersAdminQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PlatformModelTiersAdminQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['platform-model-tiers'].admin.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PlatformModelTiersAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['admin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['admin']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['admin']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PlatformModelTiersAdminQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['admin']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PlatformModelTiersAdminQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PlatformModelTiersAdminQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['platform-model-tiers'].admin.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PlatformModelTiersMutationKey() {
  return ['v1', '/v1/platform-model-tiers', 'POST'] as const
}

export function getPostV1PlatformModelTiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['platform-model-tiers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PlatformModelTiersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['platform-model-tiers']['$post']>) {
      return parseResponse(client.v1['platform-model-tiers'].$post(args, options))
    },
  })
}

export function usePostV1PlatformModelTiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['platform-model-tiers']['$post']>,
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
  const mutationDefaults = getPostV1PlatformModelTiersMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1PlatformModelTiersReorderMutationKey() {
  return ['v1', '/v1/platform-model-tiers/reorder', 'POST'] as const
}

export function getPostV1PlatformModelTiersReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PlatformModelTiersReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>,
    ) {
      return parseResponse(client.v1['platform-model-tiers'].reorder.$post(args, options))
    },
  })
}

export function usePostV1PlatformModelTiersReorder<
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
                Awaited<ReturnType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['platform-model-tiers']['reorder']['$post']>,
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
  const mutationDefaults = getPostV1PlatformModelTiersReorderMutationOptions<
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

export function getPostV1PlatformModelTiersIdMutationKey() {
  return ['v1', '/v1/platform-model-tiers/:id', 'POST'] as const
}

export function getPostV1PlatformModelTiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PlatformModelTiersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>,
    ) {
      return parseResponse(client.v1['platform-model-tiers'][':id'].$post(args, options))
    },
  })
}

export function usePostV1PlatformModelTiersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$post']>,
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
  const mutationDefaults = getPostV1PlatformModelTiersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1PlatformModelTiersIdMutationKey() {
  return ['v1', '/v1/platform-model-tiers/:id', 'DELETE'] as const
}

export function getDeleteV1PlatformModelTiersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PlatformModelTiersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1['platform-model-tiers'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1PlatformModelTiersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['platform-model-tiers'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1PlatformModelTiersIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AiToolsQueryKey() {
  return ['v1', '/v1/ai-tools'] as const
}

export function getV1AiToolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1AiToolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['ai-tools'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1AiTools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$get']>>>
            >
          >,
          ReturnType<typeof getV1AiToolsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiToolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1AiToolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['ai-tools'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AiToolsMutationKey() {
  return ['v1', '/v1/ai-tools', 'POST'] as const
}

export function getPostV1AiToolsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-tools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiToolsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-tools']['$post']>) {
      return parseResponse(client.v1['ai-tools'].$post(args, options))
    },
  })
}

export function usePostV1AiTools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['ai-tools']['$post']>,
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
  const mutationDefaults = getPostV1AiToolsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1AiToolsIdMutationKey() {
  return ['v1', '/v1/ai-tools/:id', 'POST'] as const
}

export function getPostV1AiToolsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-tools'][':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['ai-tools'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AiToolsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-tools'][':id']['$post']>) {
      return parseResponse(client.v1['ai-tools'][':id'].$post(args, options))
    },
  })
}

export function usePostV1AiToolsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-tools'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['ai-tools'][':id']['$post']>,
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
  const mutationDefaults = getPostV1AiToolsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1AiToolsIdMutationKey() {
  return ['v1', '/v1/ai-tools/:id', 'DELETE'] as const
}

export function getDeleteV1AiToolsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ai-tools'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['ai-tools'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AiToolsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['ai-tools'][':id']['$delete']>) {
      return parseResponse(client.v1['ai-tools'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AiToolsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['ai-tools'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['ai-tools'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AiToolsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AiUsageOverviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['ai-usage']['overview']['$get']>>,
) {
  return ['v1', '/v1/ai-usage/overview', toValue(args)] as const
}

export function getV1AiUsageOverviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['ai-usage']['overview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AiUsageOverviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['ai-usage'].overview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AiUsageOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-usage']['overview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['ai-usage']['overview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-usage']['overview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-usage']['overview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AiUsageOverviewQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['ai-usage']['overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiUsageOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AiUsageOverviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['ai-usage'].overview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AiUsageItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['ai-usage']['items']['$get']>>,
) {
  return ['v1', '/v1/ai-usage/items', toValue(args)] as const
}

export function getV1AiUsageItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['ai-usage']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AiUsageItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['ai-usage'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AiUsageItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-usage']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['ai-usage']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-usage']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['ai-usage']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AiUsageItemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['ai-usage']['items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiUsageItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AiUsageItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['ai-usage'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AiUsageItemsDimensionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/ai-usage/items/:dimension/:id', toValue(args)] as const
}

export function getV1AiUsageItemsDimensionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AiUsageItemsDimensionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['ai-usage'].items[':dimension'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AiUsageItemsDimensionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>
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
                  ReturnType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AiUsageItemsDimensionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['ai-usage']['items'][':dimension'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AiUsageItemsDimensionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AiUsageItemsDimensionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['ai-usage'].items[':dimension'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
