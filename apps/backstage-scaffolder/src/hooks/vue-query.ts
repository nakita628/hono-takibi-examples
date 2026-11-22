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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2TemplatesNamespaceKindNameParameterSchemaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
    >
  >,
) {
  return ['v2', '/v2/templates/:namespace/:kind/:name/parameter-schema', toValue(args)] as const
}

export function getV2TemplatesNamespaceKindNameParameterSchemaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TemplatesNamespaceKindNameParameterSchemaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.templates[':namespace'][':kind'][':name']['parameter-schema'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2TemplatesNamespaceKindNameParameterSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
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
                    (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
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
                    (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2TemplatesNamespaceKindNameParameterSchemaQueryKey>
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
              (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TemplatesNamespaceKindNameParameterSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TemplatesNamespaceKindNameParameterSchemaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.templates[':namespace'][':kind'][':name']['parameter-schema'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActionsQueryKey() {
  return ['v2', '/v2/actions'] as const
}

export function getV2ActionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2ActionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Actions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
          >,
          ReturnType<typeof getV2ActionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2ActionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tasks.$get>>,
) {
  return ['v2', '/v2/tasks', toValue(args)] as const
}

export function getV2TasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Tasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$get>>>>
          >,
          ReturnType<typeof getV2TasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2TasksMutationKey() {
  return ['v2', '/v2/tasks', 'POST'] as const
}

export function getPostV2TasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.tasks.$post>) {
      return parseResponse(client.v2.tasks.$post(args, options))
    },
  })
}

export function usePostV2Tasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.tasks.$post>,
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
  const mutationDefaults = getPostV2TasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2TasksTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tasks)[':taskId']['$get']>>,
) {
  return ['v2', '/v2/tasks/:taskId', toValue(args)] as const
}

export function getV2TasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tasks)[':taskId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.tasks[':taskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tasks)[':taskId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['$get']>>>
            >
          >,
          ReturnType<typeof getV2TasksTaskIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.tasks[':taskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2TasksTaskIdCancelMutationKey() {
  return ['v2', '/v2/tasks/:taskId/cancel', 'POST'] as const
}

export function getPostV2TasksTaskIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.tasks)[':taskId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TasksTaskIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.tasks)[':taskId']['cancel']['$post']>,
    ) {
      return parseResponse(client.v2.tasks[':taskId'].cancel.$post(args, options))
    },
  })
}

export function usePostV2TasksTaskIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.tasks)[':taskId']['cancel']['$post']>,
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
  const mutationDefaults = getPostV2TasksTaskIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TasksTaskIdRetryMutationKey() {
  return ['v2', '/v2/tasks/:taskId/retry', 'POST'] as const
}

export function getPostV2TasksTaskIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.tasks)[':taskId']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TasksTaskIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.tasks)[':taskId']['retry']['$post']>,
    ) {
      return parseResponse(client.v2.tasks[':taskId'].retry.$post(args, options))
    },
  })
}

export function usePostV2TasksTaskIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.tasks)[':taskId']['retry']['$post']>,
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
  const mutationDefaults = getPostV2TasksTaskIdRetryMutationOptions<TError, TOnMutateResult>(
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

export function getV2TasksTaskIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>,
) {
  return ['v2', '/v2/tasks/:taskId/events', toValue(args)] as const
}

export function getV2TasksTaskIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TasksTaskIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.tasks[':taskId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TasksTaskIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TasksTaskIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TasksTaskIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TasksTaskIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.tasks[':taskId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DryRunMutationKey() {
  return ['v2', '/v2/dry-run', 'POST'] as const
}

export function getPostV2DryRunMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['dry-run']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)['dry-run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DryRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['dry-run']['$post']>) {
      return parseResponse(client.v2['dry-run'].$post(args, options))
    },
  })
}

export function usePostV2DryRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['dry-run']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['dry-run']['$post']>,
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
  const mutationDefaults = getPostV2DryRunMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2AutocompleteProviderResourceMutationKey() {
  return ['v2', '/v2/autocomplete/:provider/:resource', 'POST'] as const
}

export function getPostV2AutocompleteProviderResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.autocomplete)[':provider'][':resource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.autocomplete)[':provider'][':resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AutocompleteProviderResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.autocomplete)[':provider'][':resource']['$post']>,
    ) {
      return parseResponse(client.v2.autocomplete[':provider'][':resource'].$post(args, options))
    },
  })
}

export function usePostV2AutocompleteProviderResource<
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
                  ReturnType<(typeof client.v2.autocomplete)[':provider'][':resource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.autocomplete)[':provider'][':resource']['$post']>,
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
  const mutationDefaults = getPostV2AutocompleteProviderResourceMutationOptions<
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

export function getV2TemplatingExtensionsQueryKey() {
  return ['v2', '/v2/templating-extensions'] as const
}

export function getV2TemplatingExtensionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2TemplatingExtensionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['templating-extensions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TemplatingExtensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['templating-extensions']['$get']>>>
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
                Awaited<ReturnType<(typeof client.v2)['templating-extensions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['templating-extensions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TemplatingExtensionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['templating-extensions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TemplatingExtensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2TemplatingExtensionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['templating-extensions'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
