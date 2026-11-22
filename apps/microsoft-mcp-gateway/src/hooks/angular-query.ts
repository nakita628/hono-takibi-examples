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

export function getAdaptersKey() {
  return ['adapters'] as const
}

export function getMcpKey() {
  return ['mcp'] as const
}

export function getToolsKey() {
  return ['tools'] as const
}

export function getAdaptersQueryKey() {
  return ['adapters', '/adapters'] as const
}

export function getAdaptersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdaptersQueryKey>
  >({
    queryKey: getAdaptersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.adapters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdapters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdaptersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdaptersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdaptersMutationKey() {
  return ['adapters', '/adapters', 'POST'] as const
}

export function getPostAdaptersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$post>>>>>,
    TError,
    InferRequestType<typeof client.adapters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdaptersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.adapters.$post>) {
      return parseResponse(client.adapters.$post(args, options))
    },
  })
}

export function injectPostAdapters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.adapters.$post>,
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
    const mutationDefaults = getPostAdaptersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdaptersNameQueryKey(
  args: InferRequestType<(typeof client.adapters)[':name']['$get']>,
) {
  return ['adapters', '/adapters/:name', args] as const
}

export function getAdaptersNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adapters)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdaptersNameQueryKey>
  >({
    queryKey: getAdaptersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adapters[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdaptersName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adapters)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdaptersNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdaptersNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutAdaptersNameMutationKey() {
  return ['adapters', '/adapters/:name', 'PUT'] as const
}

export function getPutAdaptersNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.adapters)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdaptersNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.adapters)[':name']['$put']>) {
      return parseResponse(client.adapters[':name'].$put(args, options))
    },
  })
}

export function injectPutAdaptersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.adapters)[':name']['$put']>,
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
    const mutationDefaults = getPutAdaptersNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdaptersNameMutationKey() {
  return ['adapters', '/adapters/:name', 'DELETE'] as const
}

export function getDeleteAdaptersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.adapters)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdaptersNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.adapters)[':name']['$delete']>) {
      return parseResponse(client.adapters[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteAdaptersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adapters)[':name']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.adapters)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteAdaptersNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdaptersNameStatusQueryKey(
  args: InferRequestType<(typeof client.adapters)[':name']['status']['$get']>,
) {
  return ['adapters', '/adapters/:name/status', args] as const
}

export function getAdaptersNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adapters)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.adapters)[':name']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdaptersNameStatusQueryKey>
  >({
    queryKey: getAdaptersNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adapters[':name'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdaptersNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adapters)[':name']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.adapters)[':name']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdaptersNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdaptersNameStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAdaptersNameLogsQueryKey(
  args: InferRequestType<(typeof client.adapters)[':name']['logs']['$get']>,
) {
  return ['adapters', '/adapters/:name/logs', args] as const
}

export function getAdaptersNameLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.adapters)[':name']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdaptersNameLogsQueryKey>
  >({
    queryKey: getAdaptersNameLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adapters[':name'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdaptersNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.adapters)[':name']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.adapters)[':name']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdaptersNameLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdaptersNameLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getToolsQueryKey() {
  return ['tools', '/tools'] as const
}

export function getToolsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getToolsQueryKey>
  >({
    queryKey: getToolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getToolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getToolsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostToolsMutationKey() {
  return ['tools', '/tools', 'POST'] as const
}

export function getPostToolsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$post>>>>>,
    TError,
    InferRequestType<typeof client.tools.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.$post>) {
      return parseResponse(client.tools.$post(args, options))
    },
  })
}

export function injectPostTools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$post>>>>>,
        TError,
        InferRequestType<typeof client.tools.$post>,
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
    const mutationDefaults = getPostToolsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getToolsNameQueryKey(
  args: InferRequestType<(typeof client.tools)[':name']['$get']>,
) {
  return ['tools', '/tools/:name', args] as const
}

export function getToolsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tools)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getToolsNameQueryKey>
  >({
    queryKey: getToolsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tools[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectToolsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tools)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getToolsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutToolsNameMutationKey() {
  return ['tools', '/tools/:name', 'PUT'] as const
}

export function getPutToolsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.tools)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)[':name']['$put']>) {
      return parseResponse(client.tools[':name'].$put(args, options))
    },
  })
}

export function injectPutToolsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tools)[':name']['$put']>,
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
    const mutationDefaults = getPutToolsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteToolsNameMutationKey() {
  return ['tools', '/tools/:name', 'DELETE'] as const
}

export function getDeleteToolsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tools)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteToolsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)[':name']['$delete']>) {
      return parseResponse(client.tools[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteToolsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tools)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteToolsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getToolsNameStatusQueryKey(
  args: InferRequestType<(typeof client.tools)[':name']['status']['$get']>,
) {
  return ['tools', '/tools/:name/status', args] as const
}

export function getToolsNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tools)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsNameStatusQueryKey>
  >({
    queryKey: getToolsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tools[':name'].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectToolsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tools)[':name']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)[':name']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsNameStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getToolsNameStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getToolsNameLogsQueryKey(
  args: InferRequestType<(typeof client.tools)[':name']['logs']['$get']>,
) {
  return ['tools', '/tools/:name/logs', args] as const
}

export function getToolsNameLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tools)[':name']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsNameLogsQueryKey>
  >({
    queryKey: getToolsNameLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tools[':name'].logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectToolsNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tools)[':name']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tools)[':name']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getToolsNameLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getToolsNameLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMcpMutationKey() {
  return ['mcp', '/mcp', 'POST'] as const
}

export function getPostMcpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcp.$post>>>>>,
    TError,
    InferRequestType<typeof client.mcp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMcpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mcp.$post>) {
      return parseResponse(client.mcp.$post(args, options))
    },
  })
}

export function injectPostMcp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcp.$post>>>>>,
        TError,
        InferRequestType<typeof client.mcp.$post>,
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
    const mutationDefaults = getPostMcpMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdaptersNameMcpMutationKey() {
  return ['adapters', '/adapters/:name/mcp', 'POST'] as const
}

export function getPostAdaptersNameMcpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['mcp']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.adapters)[':name']['mcp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdaptersNameMcpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.adapters)[':name']['mcp']['$post']>) {
      return parseResponse(client.adapters[':name'].mcp.$post(args, options))
    },
  })
}

export function injectPostAdaptersNameMcp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.adapters)[':name']['mcp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.adapters)[':name']['mcp']['$post']>,
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
    const mutationDefaults = getPostAdaptersNameMcpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
