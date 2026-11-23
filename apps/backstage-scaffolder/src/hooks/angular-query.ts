import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2TemplatesNamespaceKindNameParameterSchemaQueryKey(
  args: InferRequestType<
    (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
  >,
) {
  return ['v2', '/v2/templates/:namespace/:kind/:name/parameter-schema', args] as const
}

export function getV2TemplatesNamespaceKindNameParameterSchemaQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2TemplatesNamespaceKindNameParameterSchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.templates[':namespace'][':kind'][':name']['parameter-schema'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2TemplatesNamespaceKindNameParameterSchema<
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
  args: () => InferRequestType<
    (typeof client.v2.templates)[':namespace'][':kind'][':name']['parameter-schema']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2TemplatesNamespaceKindNameParameterSchemaQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2ActionsQueryKey() {
  return ['v2', '/v2/actions'] as const
}

export function getV2ActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ActionsQueryKey>
  >({
    queryKey: getV2ActionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Actions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2TasksQueryKey(args: InferRequestType<typeof client.v2.tasks.$get>) {
  return ['v2', '/v2/tasks', args] as const
}

export function getV2TasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TasksQueryKey>
  >({
    queryKey: getV2TasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Tasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2TasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2Tasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tasks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.tasks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2TasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.v2.tasks)[':taskId']['$get']>,
) {
  return ['v2', '/v2/tasks/:taskId', args] as const
}

export function getV2TasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.tasks)[':taskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TasksTaskIdQueryKey>
  >({
    queryKey: getV2TasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tasks[':taskId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2TasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.tasks)[':taskId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TasksTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2TasksTaskIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2TasksTaskIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2TasksTaskIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2TasksTaskIdRetryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TasksTaskIdEventsQueryKey(
  args: InferRequestType<(typeof client.v2.tasks)[':taskId']['events']['$get']>,
) {
  return ['v2', '/v2/tasks/:taskId/events', args] as const
}

export function getV2TasksTaskIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.tasks)[':taskId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2TasksTaskIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tasks[':taskId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2TasksTaskIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.tasks)[':taskId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.tasks)[':taskId']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TasksTaskIdEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2DryRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['dry-run']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['dry-run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2DryRunMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2AutocompleteProviderResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AutocompleteProviderResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TemplatingExtensionsQueryKey() {
  return ['v2', '/v2/templating-extensions'] as const
}

export function getV2TemplatingExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['templating-extensions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getV2TemplatingExtensionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['templating-extensions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2TemplatingExtensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['templating-extensions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TemplatingExtensionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
