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

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getTemplatesQueryKey() {
  return ['templates', '/templates'] as const
}

export function getTemplatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTemplatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
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
      queryKey: getTemplatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.$get(undefined, {
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

export function getPostTemplatesOutputMutationKey() {
  return ['templates', '/templates/output', 'POST'] as const
}

export function getPostTemplatesOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.output.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.output.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesOutputMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.output.$post>) {
      return parseResponse(client.templates.output.$post(args, options))
    },
  })
}

export function usePostTemplatesOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.output.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.templates.output.$post>,
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
  const mutationDefaults = getPostTemplatesOutputMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.templateId.$get>>,
) {
  return ['templates', '/templates/templateId', toValue(args)] as const
}

export function getTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.templateId.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.templateId.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesTemplateId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.templateId.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.$get>>>
            >
          >,
          ReturnType<typeof getTemplatesTemplateIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.templateId.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTemplatesTemplateIdMutationKey() {
  return ['templates', '/templates/templateId', 'PUT'] as const
}

export function getPutTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.templateId.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplatesTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.templateId.$put>) {
      return parseResponse(client.templates.templateId.$put(args, options))
    },
  })
}

export function usePutTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.templates.templateId.$put>,
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
  const mutationDefaults = getPutTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTemplatesTemplateIdMutationKey() {
  return ['templates', '/templates/templateId', 'DELETE'] as const
}

export function getDeleteTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.templates.templateId.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesTemplateIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.templateId.$delete>) {
      return parseResponse(client.templates.templateId.$delete(args, options))
    },
  })
}

export function useDeleteTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.templates.templateId.$delete>,
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
  const mutationDefaults = getDeleteTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesTemplateIdCopyMutationKey() {
  return ['templates', '/templates/templateId/copy', 'POST'] as const
}

export function getPostTemplatesTemplateIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.copy.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.templates.templateId.copy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdCopyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.templateId.copy.$post>) {
      return parseResponse(client.templates.templateId.copy.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateIdCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.templates.templateId.copy.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.templates.templateId.copy.$post>,
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
  const mutationDefaults = getPostTemplatesTemplateIdCopyMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesTemplateIdEditorMutationKey() {
  return ['templates', '/templates/templateId/editor', 'POST'] as const
}

export function getPostTemplatesTemplateIdEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.editor.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.templates.templateId.editor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.templateId.editor.$post>) {
      return parseResponse(client.templates.templateId.editor.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateIdEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.templates.templateId.editor.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.templates.templateId.editor.$post>,
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
  const mutationDefaults = getPostTemplatesTemplateIdEditorMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesTemplateIdOutputMutationKey() {
  return ['templates', '/templates/templateId/output', 'POST'] as const
}

export function getPostTemplatesTemplateIdOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.templates.templateId.output.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.templates.templateId.output.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTemplateIdOutputMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.templateId.output.$post>) {
      return parseResponse(client.templates.templateId.output.$post(args, options))
    },
  })
}

export function usePostTemplatesTemplateIdOutput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.templates.templateId.output.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.templates.templateId.output.$post>,
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
  const mutationDefaults = getPostTemplatesTemplateIdOutputMutationOptions<TError, TOnMutateResult>(
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

export function getWorkspacesWorkspaceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workspaces.workspaceId.$get>>,
) {
  return ['workspaces', '/workspaces/workspaceId', toValue(args)] as const
}

export function getWorkspacesWorkspaceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workspaces.workspaceId.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces.workspaceId.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.workspaceId.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workspaces.workspaceId.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.workspaceId.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.workspaceId.$get>>>
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.workspaceId.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces.workspaceId.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWorkspacesWorkspaceIdMutationKey() {
  return ['workspaces', '/workspaces/workspaceId', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.workspaceId.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.workspaces.workspaceId.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workspaces.workspaceId.$delete>) {
      return parseResponse(client.workspaces.workspaceId.$delete(args, options))
    },
  })
}

export function useDeleteWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.workspaces.workspaceId.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.workspaces.workspaceId.$delete>,
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
  const mutationDefaults = getDeleteWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
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
