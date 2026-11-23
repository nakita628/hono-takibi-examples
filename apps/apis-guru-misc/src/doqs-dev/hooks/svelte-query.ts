import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<typeof client.designer.templates.index.$get>,
) {
  return ['designer', '/designer/templates/', args] as const
}

export function getDesignerTemplatesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.designer.templates.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDesignerTemplatesIndexQueryKey>
  >({
    queryKey: getDesignerTemplatesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.designer.templates.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDesignerTemplatesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.designer.templates.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDesignerTemplatesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDesignerTemplatesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDesignerTemplatesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.designer.templates.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDesignerTemplatesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDesignerTemplatesPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDesignerTemplatesPreviewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDesignerTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.designer.templates)[':id']['$get']>,
) {
  return ['designer', '/designer/templates/:id', args] as const
}

export function getDesignerTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.designer.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDesignerTemplatesIdQueryKey>
  >({
    queryKey: getDesignerTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.designer.templates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDesignerTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.designer.templates)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDesignerTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDesignerTemplatesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutDesignerTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDesignerTemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDesignerTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDesignerTemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDesignerTemplatesIdGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDesignerTemplatesIdGenerateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTemplatesQueryKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
) {
  return ['templates', '/templates/:id', args] as const
}

export function getTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesIdQueryKey>
  >({
    queryKey: getTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTemplatesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTemplatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTemplatesIdFileQueryKey(
  args: InferRequestType<(typeof client.templates)[':id']['file']['$get']>,
) {
  return ['templates', '/templates/:id/file', args] as const
}

export function getTemplatesIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesIdFileQueryKey>
  >({
    queryKey: getTemplatesIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':id'].file.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTemplatesIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.templates)[':id']['file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesIdFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesIdFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTemplatesIdFill<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesIdFillMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
