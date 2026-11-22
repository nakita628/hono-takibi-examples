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

export function getDesignerKey() {
  return ['designer'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getDesignerTemplatesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.designer.templates.index.$get>>,
) {
  return ['designer', '/designer/templates/', toValue(args)] as const
}

export function getDesignerTemplatesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.designer.templates.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDesignerTemplatesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.designer.templates.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDesignerTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.designer.templates.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
            >
          >,
          ReturnType<typeof getDesignerTemplatesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDesignerTemplatesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDesignerTemplatesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.designer.templates.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDesignerTemplatesIndexMutationKey() {
  return ['designer', '/designer/templates/', 'POST'] as const
}

export function getPostDesignerTemplatesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.designer.templates.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDesignerTemplatesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.designer.templates.index.$post>) {
      return parseResponse(client.designer.templates.index.$post(args, options))
    },
  })
}

export function usePostDesignerTemplatesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.designer.templates.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.designer.templates.index.$post>,
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
  const mutationDefaults = getPostDesignerTemplatesIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostDesignerTemplatesPreviewMutationKey() {
  return ['designer', '/designer/templates/preview', 'POST'] as const
}

export function getPostDesignerTemplatesPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.designer.templates.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDesignerTemplatesPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.designer.templates.preview.$post>) {
      return parseResponse(client.designer.templates.preview.$post(args, options))
    },
  })
}

export function usePostDesignerTemplatesPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.designer.templates.preview.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.designer.templates.preview.$post>,
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
  const mutationDefaults = getPostDesignerTemplatesPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getDesignerTemplatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designer.templates)[':id']['$get']>>,
) {
  return ['designer', '/designer/templates/:id', toValue(args)] as const
}

export function getDesignerTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designer.templates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDesignerTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.designer.templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDesignerTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.designer.templates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDesignerTemplatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDesignerTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDesignerTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.designer.templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDesignerTemplatesIdMutationKey() {
  return ['designer', '/designer/templates/:id', 'PUT'] as const
}

export function getPutDesignerTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.designer.templates)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.designer.templates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDesignerTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.designer.templates)[':id']['$put']>) {
      return parseResponse(client.designer.templates[':id'].$put(args, options))
    },
  })
}

export function usePutDesignerTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designer.templates)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.designer.templates)[':id']['$put']>,
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
  const mutationDefaults = getPutDesignerTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDesignerTemplatesIdMutationKey() {
  return ['designer', '/designer/templates/:id', 'DELETE'] as const
}

export function getDeleteDesignerTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.designer.templates)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.designer.templates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDesignerTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.designer.templates)[':id']['$delete']>) {
      return parseResponse(client.designer.templates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDesignerTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.designer.templates)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.designer.templates)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteDesignerTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDesignerTemplatesIdGenerateMutationKey() {
  return ['designer', '/designer/templates/:id/generate', 'POST'] as const
}

export function getPostDesignerTemplatesIdGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.designer.templates)[':id']['generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.designer.templates)[':id']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDesignerTemplatesIdGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.designer.templates)[':id']['generate']['$post']>,
    ) {
      return parseResponse(client.designer.templates[':id'].generate.$post(args, options))
    },
  })
}

export function usePostDesignerTemplatesIdGenerate<
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
                Awaited<ReturnType<(typeof client.designer.templates)[':id']['generate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.designer.templates)[':id']['generate']['$post']>,
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
  const mutationDefaults = getPostDesignerTemplatesIdGenerateMutationOptions<
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

export function getTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
) {
  return ['templates', '/templates', toValue(args)] as const
}

export function getTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
          >,
          ReturnType<typeof getTemplatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesMutationKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function getPostTemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    InferRequestType<typeof client.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.$post>) {
      return parseResponse(client.templates.$post(args, options))
    },
  })
}

export function usePostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.templates.$post>,
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
  const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['$get']>>,
) {
  return ['templates', '/templates/:id', toValue(args)] as const
}

export function getTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTemplatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTemplatesIdMutationKey() {
  return ['templates', '/templates/:id', 'PUT'] as const
}

export function getPutTemplatesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['$put']>) {
      return parseResponse(client.templates[':id'].$put(args, options))
    },
  })
}

export function usePutTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':id']['$put']>,
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
  const mutationDefaults = getPutTemplatesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTemplatesIdMutationKey() {
  return ['templates', '/templates/:id', 'DELETE'] as const
}

export function getDeleteTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['$delete']>) {
      return parseResponse(client.templates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['file']['$get']>>,
) {
  return ['templates', '/templates/:id/file', toValue(args)] as const
}

export function getTemplatesIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['file']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates[':id'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.templates)[':id']['file']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTemplatesIdFileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates[':id'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTemplatesIdFillMutationKey() {
  return ['templates', '/templates/:id/fill', 'POST'] as const
}

export function getPostTemplatesIdFillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['fill']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['fill']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesIdFillMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['fill']['$post']>) {
      return parseResponse(client.templates[':id'].fill.$post(args, options))
    },
  })
}

export function usePostTemplatesIdFill<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':id']['fill']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.templates)[':id']['fill']['$post']>,
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
  const mutationDefaults = getPostTemplatesIdFillMutationOptions<TError, TOnMutateResult>(
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
