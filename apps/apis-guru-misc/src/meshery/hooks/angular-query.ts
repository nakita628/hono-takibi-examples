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

export function getApiKey() {
  return ['api'] as const
}

export function getProviderKey() {
  return ['provider'] as const
}

export function getApiApplicationIndexQueryKey() {
  return ['api', '/api/application/'] as const
}

export function getApiApplicationIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiApplicationIndexQueryKey>
  >({
    queryKey: getApiApplicationIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.application.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiApplicationIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiApplicationIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiApplicationIndexMutationKey() {
  return ['api', '/api/application/', 'POST'] as const
}

export function getPostApiApplicationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.application.index.$post(undefined, options))
    },
  })
}

export function injectPostApiApplicationIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.application.index.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiApplicationIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiApplicationDeployMutationKey() {
  return ['api', '/api/application/deploy', 'POST'] as const
}

export function getPostApiApplicationDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.deploy.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.application.deploy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplicationDeployMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.application.deploy.$post>) {
      return parseResponse(client.api.application.deploy.$post(args, options))
    },
  })
}

export function injectPostApiApplicationDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.application.deploy.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.application.deploy.$post>,
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
    const mutationDefaults = getPostApiApplicationDeployMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiApplicationDeployMutationKey() {
  return ['api', '/api/application/deploy', 'DELETE'] as const
}

export function getDeleteApiApplicationDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.application.deploy.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiApplicationDeployMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.application.deploy.$delete(undefined, options))
    },
  })
}

export function injectDeleteApiApplicationDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.application.deploy.$delete>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteApiApplicationDeployMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiApplicationIdQueryKey(
  args: InferRequestType<(typeof client.api.application)[':id']['$get']>,
) {
  return ['api', '/api/application/:id', args] as const
}

export function getApiApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.application)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.application)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.application)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiApplicationIdQueryKey>
  >({
    queryKey: getApiApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.application[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.application)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.application)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.application)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiApplicationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiApplicationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiApplicationIdMutationKey() {
  return ['api', '/api/application/:id', 'DELETE'] as const
}

export function getDeleteApiApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.application)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.application)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiApplicationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.application)[':id']['$delete']>) {
      return parseResponse(client.api.application[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiApplicationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.application)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.application)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiApplicationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiFilterQueryKey() {
  return ['api', '/api/filter'] as const
}

export function getApiFilterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiFilterQueryKey>
  >({
    queryKey: getApiFilterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.filter.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiFilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFilterQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiFilterMutationKey() {
  return ['api', '/api/filter', 'POST'] as const
}

export function getPostApiFilterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiFilterMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.filter.$post(undefined, options))
    },
  })
}

export function injectPostApiFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.filter.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiFilterMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiFilterFileIdQueryKey(
  args: InferRequestType<(typeof client.api.filter.file)[':id']['$get']>,
) {
  return ['api', '/api/filter/file/:id', args] as const
}

export function getApiFilterFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter.file)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.filter.file)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter.file)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFilterFileIdQueryKey>
  >({
    queryKey: getApiFilterFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.filter.file[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiFilterFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter.file)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.filter.file)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.filter.file)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFilterFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFilterFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiFilterIdQueryKey(
  args: InferRequestType<(typeof client.api.filter)[':id']['$get']>,
) {
  return ['api', '/api/filter/:id', args] as const
}

export function getApiFilterIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.filter)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFilterIdQueryKey>
  >({
    queryKey: getApiFilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.filter[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiFilterId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.filter)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFilterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFilterIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiFilterIdMutationKey() {
  return ['api', '/api/filter/:id', 'DELETE'] as const
}

export function getDeleteApiFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.filter)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiFilterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.filter)[':id']['$delete']>) {
      return parseResponse(client.api.filter[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiFilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.filter)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.filter)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiFilterIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiOamTypeQueryKey(
  args: InferRequestType<(typeof client.api.oam)[':type']['$get']>,
) {
  return ['api', '/api/oam/:type', args] as const
}

export function getApiOamTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.oam)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOamTypeQueryKey>
  >({
    queryKey: getApiOamTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oam[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiOamType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.oam)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOamTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOamTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiOamTypeMutationKey() {
  return ['api', '/api/oam/:type', 'POST'] as const
}

export function getPostApiOamTypeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.oam)[':type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOamTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.oam)[':type']['$post']>) {
      return parseResponse(client.api.oam[':type'].$post(args, options))
    },
  })
}

export function injectPostApiOamType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.oam)[':type']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.oam)[':type']['$post']>,
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
    const mutationDefaults = getPostApiOamTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPatternQueryKey() {
  return ['api', '/api/pattern'] as const
}

export function getApiPatternQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPatternQueryKey>
  >({
    queryKey: getApiPatternQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pattern.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPattern<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatternQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatternQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiPatternMutationKey() {
  return ['api', '/api/pattern', 'POST'] as const
}

export function getPostApiPatternMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatternMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.pattern.$post(undefined, options))
    },
  })
}

export function injectPostApiPattern<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiPatternMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiPatternDeployMutationKey() {
  return ['api', '/api/pattern/deploy', 'POST'] as const
}

export function getPostApiPatternDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.deploy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.pattern.deploy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPatternDeployMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pattern.deploy.$post>) {
      return parseResponse(client.api.pattern.deploy.$post(args, options))
    },
  })
}

export function injectPostApiPatternDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.deploy.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.pattern.deploy.$post>,
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
    const mutationDefaults = getPostApiPatternDeployMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiPatternDeployMutationKey() {
  return ['api', '/api/pattern/deploy', 'DELETE'] as const
}

export function getDeleteApiPatternDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.deploy.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatternDeployMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.pattern.deploy.$delete(undefined, options))
    },
  })
}

export function injectDeleteApiPatternDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.pattern.deploy.$delete>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteApiPatternDeployMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPatternIdQueryKey(
  args: InferRequestType<(typeof client.api.pattern)[':id']['$get']>,
) {
  return ['api', '/api/pattern/:id', args] as const
}

export function getApiPatternIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pattern)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPatternIdQueryKey>
  >({
    queryKey: getApiPatternIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pattern[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPatternId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pattern)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPatternIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPatternIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiPatternIdMutationKey() {
  return ['api', '/api/pattern/:id', 'DELETE'] as const
}

export function getDeleteApiPatternIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pattern)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPatternIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pattern)[':id']['$delete']>) {
      return parseResponse(client.api.pattern[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiPatternId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.pattern)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.pattern)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiPatternIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPerfProfileQueryKey(
  args: InferRequestType<typeof client.api.perf.profile.$get>,
) {
  return ['api', '/api/perf/profile', args] as const
}

export function getApiPerfProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.perf.profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPerfProfileQueryKey>
  >({
    queryKey: getApiPerfProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.perf.profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPerfProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.perf.profile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPerfProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPerfProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiPerfProfileResultQueryKey() {
  return ['api', '/api/perf/profile/result'] as const
}

export function getApiPerfProfileResultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.result.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.result.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPerfProfileResultQueryKey>
  >({
    queryKey: getApiPerfProfileResultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.perf.profile.result.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPerfProfileResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.result.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.perf.profile.result.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPerfProfileResultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPerfProfileResultQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiPerfProfileResultIdQueryKey(
  args: InferRequestType<(typeof client.api.perf.profile.result)[':id']['$get']>,
) {
  return ['api', '/api/perf/profile/result/:id', args] as const
}

export function getApiPerfProfileResultIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.perf.profile.result)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.perf.profile.result)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.perf.profile.result)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPerfProfileResultIdQueryKey>
  >({
    queryKey: getApiPerfProfileResultIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.perf.profile.result[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPerfProfileResultId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.perf.profile.result)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.perf.profile.result)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.perf.profile.result)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPerfProfileResultIdQueryKey>
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
      ...getApiPerfProfileResultIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiProviderQueryKey(args: InferRequestType<typeof client.api.provider.$get>) {
  return ['api', '/api/provider', args] as const
}

export function getApiProviderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.provider.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProviderQueryKey>
  >({
    queryKey: getApiProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.provider.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiProvider<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.provider.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProviderQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiProviderCapabilitiesQueryKey() {
  return ['api', '/api/provider/capabilities'] as const
}

export function getApiProviderCapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.capabilities.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.capabilities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProviderCapabilitiesQueryKey>
  >({
    queryKey: getApiProviderCapabilitiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.provider.capabilities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiProviderCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.capabilities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.capabilities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProviderCapabilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProviderCapabilitiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiProviderExtensionQueryKey() {
  return ['api', '/api/provider/extension'] as const
}

export function getApiProviderExtensionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.extension.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.extension.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProviderExtensionQueryKey>
  >({
    queryKey: getApiProviderExtensionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.provider.extension.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiProviderExtension<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.extension.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.provider.extension.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProviderExtensionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProviderExtensionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiProvidersQueryKey() {
  return ['api', '/api/providers'] as const
}

export function getApiProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProvidersQueryKey>
  >({
    queryKey: getApiProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiSystemAdapterManageMutationKey() {
  return ['api', '/api/system/adapter/manage', 'POST'] as const
}

export function getPostApiSystemAdapterManageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapter.manage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.system.adapter.manage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemAdapterManageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.system.adapter.manage.$post>) {
      return parseResponse(client.api.system.adapter.manage.$post(args, options))
    },
  })
}

export function injectPostApiSystemAdapterManage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapter.manage.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.system.adapter.manage.$post>,
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
    const mutationDefaults = getPostApiSystemAdapterManageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiSystemAdapterManageMutationKey() {
  return ['api', '/api/system/adapter/manage', 'DELETE'] as const
}

export function getDeleteApiSystemAdapterManageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapter.manage.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.system.adapter.manage.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSystemAdapterManageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.system.adapter.manage.$delete>) {
      return parseResponse(client.api.system.adapter.manage.$delete(args, options))
    },
  })
}

export function injectDeleteApiSystemAdapterManage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.system.adapter.manage.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.system.adapter.manage.$delete>,
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
    const mutationDefaults = getDeleteApiSystemAdapterManageMutationOptions<
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

export function getPostApiSystemAdapterOperationMutationKey() {
  return ['api', '/api/system/adapter/operation', 'POST'] as const
}

export function getPostApiSystemAdapterOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapter.operation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.system.adapter.operation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemAdapterOperationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.system.adapter.operation.$post>) {
      return parseResponse(client.api.system.adapter.operation.$post(args, options))
    },
  })
}

export function injectPostApiSystemAdapterOperation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.system.adapter.operation.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.system.adapter.operation.$post>,
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
    const mutationDefaults = getPostApiSystemAdapterOperationMutationOptions<
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

export function getApiSystemAdaptersQueryKey(
  args: InferRequestType<typeof client.api.system.adapters.$get>,
) {
  return ['api', '/api/system/adapters', args] as const
}

export function getApiSystemAdaptersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.system.adapters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemAdaptersQueryKey>
  >({
    queryKey: getApiSystemAdaptersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system.adapters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiSystemAdapters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.system.adapters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.adapters.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemAdaptersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSystemAdaptersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiSystemKubernetesMutationKey() {
  return ['api', '/api/system/kubernetes', 'POST'] as const
}

export function getPostApiSystemKubernetesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemKubernetesMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.system.kubernetes.$post(undefined, options))
    },
  })
}

export function injectPostApiSystemKubernetes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiSystemKubernetesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiSystemKubernetesMutationKey() {
  return ['api', '/api/system/kubernetes', 'DELETE'] as const
}

export function getDeleteApiSystemKubernetesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSystemKubernetesMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.system.kubernetes.$delete(undefined, options))
    },
  })
}

export function injectDeleteApiSystemKubernetes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.$delete>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteApiSystemKubernetesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiSystemKubernetesContextsMutationKey() {
  return ['api', '/api/system/kubernetes/contexts', 'POST'] as const
}

export function getPostApiSystemKubernetesContextsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.system.kubernetes.contexts.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiSystemKubernetesContextsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.system.kubernetes.contexts.$post(undefined, options))
    },
  })
}

export function injectPostApiSystemKubernetesContexts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.system.kubernetes.contexts.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiSystemKubernetesContextsMutationOptions<
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

export function getApiSystemKubernetesPingQueryKey() {
  return ['api', '/api/system/kubernetes/ping'] as const
}

export function getApiSystemKubernetesPingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.ping.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.ping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemKubernetesPingQueryKey>
  >({
    queryKey: getApiSystemKubernetesPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system.kubernetes.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSystemKubernetesPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.ping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.kubernetes.ping.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemKubernetesPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSystemKubernetesPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiSystemMeshsyncGrafanaQueryKey() {
  return ['api', '/api/system/meshsync/grafana'] as const
}

export function getApiSystemMeshsyncGrafanaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.grafana.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.grafana.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemMeshsyncGrafanaQueryKey>
  >({
    queryKey: getApiSystemMeshsyncGrafanaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system.meshsync.grafana.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSystemMeshsyncGrafana<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.grafana.$get>>>
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
              Awaited<ReturnType<typeof client.api.system.meshsync.grafana.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemMeshsyncGrafanaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSystemMeshsyncGrafanaQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiSystemMeshsyncPrometheusQueryKey() {
  return ['api', '/api/system/meshsync/prometheus'] as const
}

export function getApiSystemMeshsyncPrometheusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.prometheus.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.prometheus.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemMeshsyncPrometheusQueryKey>
  >({
    queryKey: getApiSystemMeshsyncPrometheusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system.meshsync.prometheus.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSystemMeshsyncPrometheus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.system.meshsync.prometheus.$get>>>
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
              Awaited<ReturnType<typeof client.api.system.meshsync.prometheus.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemMeshsyncPrometheusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSystemMeshsyncPrometheusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiSystemSyncQueryKey() {
  return ['api', '/api/system/sync'] as const
}

export function getApiSystemSyncQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.sync.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.sync.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemSyncQueryKey>
  >({
    queryKey: getApiSystemSyncQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system.sync.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiSystemSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.sync.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSystemSyncQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiSystemVersionQueryKey() {
  return ['api', '/api/system/version'] as const
}

export function getApiSystemVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemVersionQueryKey>
  >({
    queryKey: getApiSystemVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSystemVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.system.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSystemVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiTelemetryMetricsBoardImportMutationKey() {
  return ['api', '/api/telemetry/metrics/board_import', 'POST'] as const
}

export function getPostApiTelemetryMetricsBoardImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.board_import.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsBoardImportMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.telemetry.metrics.board_import.$post(undefined, options))
    },
  })
}

export function injectPostApiTelemetryMetricsBoardImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.telemetry.metrics.board_import.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiTelemetryMetricsBoardImportMutationOptions<
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

export function getPostApiTelemetryMetricsBoardsMutationKey() {
  return ['api', '/api/telemetry/metrics/boards', 'POST'] as const
}

export function getPostApiTelemetryMetricsBoardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.boards.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.telemetry.metrics.boards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsBoardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.telemetry.metrics.boards.$post>) {
      return parseResponse(client.api.telemetry.metrics.boards.$post(args, options))
    },
  })
}

export function injectPostApiTelemetryMetricsBoards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.telemetry.metrics.boards.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.telemetry.metrics.boards.$post>,
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
    const mutationDefaults = getPostApiTelemetryMetricsBoardsMutationOptions<
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

export function getApiTelemetryMetricsConfigQueryKey() {
  return ['api', '/api/telemetry/metrics/config'] as const
}

export function getApiTelemetryMetricsConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsConfigQueryKey>
  >({
    queryKey: getApiTelemetryMetricsConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$get>>>
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
              Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTelemetryMetricsConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiTelemetryMetricsConfigMutationKey() {
  return ['api', '/api/telemetry/metrics/config', 'POST'] as const
}

export function getPostApiTelemetryMetricsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.telemetry.metrics.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.telemetry.metrics.config.$post>) {
      return parseResponse(client.api.telemetry.metrics.config.$post(args, options))
    },
  })
}

export function injectPostApiTelemetryMetricsConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.telemetry.metrics.config.$post>,
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
    const mutationDefaults = getPostApiTelemetryMetricsConfigMutationOptions<
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

export function getDeleteApiTelemetryMetricsConfigMutationKey() {
  return ['api', '/api/telemetry/metrics/config', 'DELETE'] as const
}

export function getDeleteApiTelemetryMetricsConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTelemetryMetricsConfigMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.telemetry.metrics.config.$delete(undefined, options))
    },
  })
}

export function injectDeleteApiTelemetryMetricsConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.telemetry.metrics.config.$delete>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteApiTelemetryMetricsConfigMutationOptions<
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

export function getApiTelemetryMetricsGrafanaBoardsQueryKey(
  args: InferRequestType<typeof client.api.telemetry.metrics.grafana.boards.$get>,
) {
  return ['api', '/api/telemetry/metrics/grafana/boards', args] as const
}

export function getApiTelemetryMetricsGrafanaBoardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.telemetry.metrics.grafana.boards.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaBoardsQueryKey>
  >({
    queryKey: getApiTelemetryMetricsGrafanaBoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.boards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsGrafanaBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.telemetry.metrics.grafana.boards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsGrafanaBoardsQueryKey>
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
      ...getApiTelemetryMetricsGrafanaBoardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiTelemetryMetricsGrafanaBoardsMutationKey() {
  return ['api', '/api/telemetry/metrics/grafana/boards', 'POST'] as const
}

export function getPostApiTelemetryMetricsGrafanaBoardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsGrafanaBoardsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.telemetry.metrics.grafana.boards.$post(undefined, options))
    },
  })
}

export function injectPostApiTelemetryMetricsGrafanaBoards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.boards.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiTelemetryMetricsGrafanaBoardsMutationOptions<
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

export function getApiTelemetryMetricsGrafanaConfigQueryKey() {
  return ['api', '/api/telemetry/metrics/grafana/config'] as const
}

export function getApiTelemetryMetricsGrafanaConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaConfigQueryKey>
  >({
    queryKey: getApiTelemetryMetricsGrafanaConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsGrafanaConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$get>>
      >
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
              Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsGrafanaConfigQueryKey>
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
      ...getApiTelemetryMetricsGrafanaConfigQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiTelemetryMetricsGrafanaConfigMutationKey() {
  return ['api', '/api/telemetry/metrics/grafana/config', 'POST'] as const
}

export function getPostApiTelemetryMetricsGrafanaConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.telemetry.metrics.grafana.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTelemetryMetricsGrafanaConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.telemetry.metrics.grafana.config.$post>,
    ) {
      return parseResponse(client.api.telemetry.metrics.grafana.config.$post(args, options))
    },
  })
}

export function injectPostApiTelemetryMetricsGrafanaConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.telemetry.metrics.grafana.config.$post>,
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
    const mutationDefaults = getPostApiTelemetryMetricsGrafanaConfigMutationOptions<
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

export function getDeleteApiTelemetryMetricsGrafanaConfigMutationKey() {
  return ['api', '/api/telemetry/metrics/grafana/config', 'DELETE'] as const
}

export function getDeleteApiTelemetryMetricsGrafanaConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTelemetryMetricsGrafanaConfigMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.telemetry.metrics.grafana.config.$delete(undefined, options))
    },
  })
}

export function injectDeleteApiTelemetryMetricsGrafanaConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.config.$delete>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteApiTelemetryMetricsGrafanaConfigMutationOptions<
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

export function getApiTelemetryMetricsGrafanaPingQueryKey() {
  return ['api', '/api/telemetry/metrics/grafana/ping'] as const
}

export function getApiTelemetryMetricsGrafanaPingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.ping.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.ping.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaPingQueryKey>
  >({
    queryKey: getApiTelemetryMetricsGrafanaPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsGrafanaPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.ping.$get>>
      >
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
              Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.ping.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsGrafanaPingQueryKey>
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
      ...getApiTelemetryMetricsGrafanaPingQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiTelemetryMetricsGrafanaQueryQueryKey() {
  return ['api', '/api/telemetry/metrics/grafana/query'] as const
}

export function getApiTelemetryMetricsGrafanaQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.query.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.query.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaQueryQueryKey>
  >({
    queryKey: getApiTelemetryMetricsGrafanaQueryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.query.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsGrafanaQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.query.$get>>
      >
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
              Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.query.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsGrafanaQueryQueryKey>
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
      ...getApiTelemetryMetricsGrafanaQueryQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiTelemetryMetricsGrafanaScanQueryKey() {
  return ['api', '/api/telemetry/metrics/grafana/scan'] as const
}

export function getApiTelemetryMetricsGrafanaScanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.scan.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.scan.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsGrafanaScanQueryKey>
  >({
    queryKey: getApiTelemetryMetricsGrafanaScanQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics.grafana.scan.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsGrafanaScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.scan.$get>>
      >
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
              Awaited<ReturnType<typeof client.api.telemetry.metrics.grafana.scan.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsGrafanaScanQueryKey>
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
      ...getApiTelemetryMetricsGrafanaScanQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiTelemetryMetricsPingQueryKey() {
  return ['api', '/api/telemetry/metrics/ping'] as const
}

export function getApiTelemetryMetricsPingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.ping.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.ping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsPingQueryKey>
  >({
    queryKey: getApiTelemetryMetricsPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics.ping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsPing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.ping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.ping.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTelemetryMetricsPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiTelemetryMetricsQueryQueryKey() {
  return ['api', '/api/telemetry/metrics/query'] as const
}

export function getApiTelemetryMetricsQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.query.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.query.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsQueryQueryKey>
  >({
    queryKey: getApiTelemetryMetricsQueryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics.query.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.telemetry.metrics.query.$get>>>
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
              Awaited<ReturnType<typeof client.api.telemetry.metrics.query.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTelemetryMetricsQueryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiTelemetryMetricsStaticBoardQueryKey() {
  return ['api', '/api/telemetry/metrics/static-board'] as const
}

export function getApiTelemetryMetricsStaticBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.telemetry.metrics)['static-board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.telemetry.metrics)['static-board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTelemetryMetricsStaticBoardQueryKey>
  >({
    queryKey: getApiTelemetryMetricsStaticBoardQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.telemetry.metrics['static-board'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTelemetryMetricsStaticBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.telemetry.metrics)['static-board']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.api.telemetry.metrics)['static-board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTelemetryMetricsStaticBoardQueryKey>
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
      ...getApiTelemetryMetricsStaticBoardQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiUserLoginQueryKey() {
  return ['api', '/api/user/login'] as const
}

export function getApiUserLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.login.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserLoginQueryKey>
  >({
    queryKey: getApiUserLoginQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiUserLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.login.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserLoginQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiUserLogoutQueryKey() {
  return ['api', '/api/user/logout'] as const
}

export function getApiUserLogoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.logout.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.logout.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserLogoutQueryKey>
  >({
    queryKey: getApiUserLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiUserLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.logout.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserLogoutQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiUserPerformanceProfilesQueryKey() {
  return ['api', '/api/user/performance/profiles'] as const
}

export function getApiUserPerformanceProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.user.performance.profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.performance.profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesQueryKey>
  >({
    queryKey: getApiUserPerformanceProfilesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.performance.profiles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUserPerformanceProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.user.performance.profiles.$get>>>
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
              Awaited<ReturnType<typeof client.api.user.performance.profiles.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserPerformanceProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserPerformanceProfilesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiUserPerformanceProfilesMutationKey() {
  return ['api', '/api/user/performance/profiles', 'POST'] as const
}

export function getPostApiUserPerformanceProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.performance.profiles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.user.performance.profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserPerformanceProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.performance.profiles.$post>) {
      return parseResponse(client.api.user.performance.profiles.$post(args, options))
    },
  })
}

export function injectPostApiUserPerformanceProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.user.performance.profiles.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.user.performance.profiles.$post>,
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
    const mutationDefaults = getPostApiUserPerformanceProfilesMutationOptions<
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

export function getApiUserPerformanceProfilesResultsQueryKey() {
  return ['api', '/api/user/performance/profiles/results'] as const
}

export function getApiUserPerformanceProfilesResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.user.performance.profiles.results.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.user.performance.profiles.results.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesResultsQueryKey>
  >({
    queryKey: getApiUserPerformanceProfilesResultsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.performance.profiles.results.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUserPerformanceProfilesResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.user.performance.profiles.results.$get>>
      >
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
              Awaited<ReturnType<typeof client.api.user.performance.profiles.results.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserPerformanceProfilesResultsQueryKey>
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
      ...getApiUserPerformanceProfilesResultsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiUserPerformanceProfilesIdQueryKey(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$get']>,
) {
  return ['api', '/api/user/performance/profiles/:id', args] as const
}

export function getApiUserPerformanceProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesIdQueryKey>
  >({
    queryKey: getApiUserPerformanceProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.performance.profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUserPerformanceProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserPerformanceProfilesIdQueryKey>
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
      ...getApiUserPerformanceProfilesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiUserPerformanceProfilesIdMutationKey() {
  return ['api', '/api/user/performance/profiles/:id', 'DELETE'] as const
}

export function getDeleteApiUserPerformanceProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserPerformanceProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.user.performance.profiles[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiUserPerformanceProfilesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.performance.profiles)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiUserPerformanceProfilesIdMutationOptions<
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

export function getApiUserPerformanceProfilesIdResultsQueryKey(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>,
) {
  return ['api', '/api/user/performance/profiles/:id/results', args] as const
}

export function getApiUserPerformanceProfilesIdResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesIdResultsQueryKey>
  >({
    queryKey: getApiUserPerformanceProfilesIdResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.performance.profiles[':id'].results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUserPerformanceProfilesIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.user.performance.profiles)[':id']['results']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.user.performance.profiles)[':id']['results']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserPerformanceProfilesIdResultsQueryKey>
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
      ...getApiUserPerformanceProfilesIdResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiUserPerformanceProfilesIdRunQueryKey(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>,
) {
  return ['api', '/api/user/performance/profiles/:id/run', args] as const
}

export function getApiUserPerformanceProfilesIdRunQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPerformanceProfilesIdRunQueryKey>
  >({
    queryKey: getApiUserPerformanceProfilesIdRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.performance.profiles[':id'].run.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUserPerformanceProfilesIdRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.user.performance.profiles)[':id']['run']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserPerformanceProfilesIdRunQueryKey>
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
      ...getApiUserPerformanceProfilesIdRunQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiUserPrefsQueryKey() {
  return ['api', '/api/user/prefs'] as const
}

export function getApiUserPrefsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPrefsQueryKey>
  >({
    queryKey: getApiUserPrefsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.prefs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiUserPrefs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserPrefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserPrefsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiUserPrefsMutationKey() {
  return ['api', '/api/user/prefs', 'POST'] as const
}

export function getPostApiUserPrefsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserPrefsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.user.prefs.$post(undefined, options))
    },
  })
}

export function injectPostApiUserPrefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiUserPrefsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiUserPrefsPerfQueryKey(
  args: InferRequestType<typeof client.api.user.prefs.perf.$get>,
) {
  return ['api', '/api/user/prefs/perf', args] as const
}

export function getApiUserPrefsPerfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.user.prefs.perf.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserPrefsPerfQueryKey>
  >({
    queryKey: getApiUserPrefsPerfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.prefs.perf.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiUserPrefsPerf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.user.prefs.perf.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserPrefsPerfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserPrefsPerfQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiUserPrefsPerfMutationKey() {
  return ['api', '/api/user/prefs/perf', 'POST'] as const
}

export function getPostApiUserPrefsPerfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.user.prefs.perf.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserPrefsPerfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.prefs.perf.$post>) {
      return parseResponse(client.api.user.prefs.perf.$post(args, options))
    },
  })
}

export function injectPostApiUserPrefsPerf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.user.prefs.perf.$post>,
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
    const mutationDefaults = getPostApiUserPrefsPerfMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiUserPrefsPerfMutationKey() {
  return ['api', '/api/user/prefs/perf', 'DELETE'] as const
}

export function getDeleteApiUserPrefsPerfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.user.prefs.perf.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserPrefsPerfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.user.prefs.perf.$delete>) {
      return parseResponse(client.api.user.prefs.perf.$delete(args, options))
    },
  })
}

export function injectDeleteApiUserPrefsPerf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.prefs.perf.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.user.prefs.perf.$delete>,
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
    const mutationDefaults = getDeleteApiUserPrefsPerfMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiUserSchedulesQueryKey() {
  return ['api', '/api/user/schedules'] as const
}

export function getApiUserSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserSchedulesQueryKey>
  >({
    queryKey: getApiUserSchedulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.schedules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUserSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserSchedulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiUserSchedulesMutationKey() {
  return ['api', '/api/user/schedules', 'POST'] as const
}

export function getPostApiUserSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserSchedulesMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.user.schedules.$post(undefined, options))
    },
  })
}

export function injectPostApiUserSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.user.schedules.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiUserSchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiUserSchedulesIdQueryKey(
  args: InferRequestType<(typeof client.api.user.schedules)[':id']['$get']>,
) {
  return ['api', '/api/user/schedules/:id', args] as const
}

export function getApiUserSchedulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.user.schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserSchedulesIdQueryKey>
  >({
    queryKey: getApiUserSchedulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.schedules[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUserSchedulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.user.schedules)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserSchedulesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserSchedulesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiUserSchedulesIdMutationKey() {
  return ['api', '/api/user/schedules/:id', 'DELETE'] as const
}

export function getDeleteApiUserSchedulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.user.schedules)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserSchedulesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.user.schedules)[':id']['$delete']>) {
      return parseResponse(client.api.user.schedules[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiUserSchedulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.user.schedules)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.user.schedules)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiUserSchedulesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiUserTokenQueryKey() {
  return ['api', '/api/user/token'] as const
}

export function getApiUserTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserTokenQueryKey>
  >({
    queryKey: getApiUserTokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.token.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiUserToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserTokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiUserTokenMutationKey() {
  return ['api', '/api/user/token', 'POST'] as const
}

export function getPostApiUserTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.user.token.$post(undefined, options))
    },
  })
}

export function injectPostApiUserToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.token.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiUserTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProviderQueryKey() {
  return ['provider', '/provider'] as const
}

export function getProviderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.provider.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.provider.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProviderQueryKey>
  >({
    queryKey: getProviderQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.provider.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProvider<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.provider.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.provider.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProviderQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
