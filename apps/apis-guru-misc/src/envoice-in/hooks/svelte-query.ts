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

export function getApiKey() {
  return ['api'] as const
}

export function getApiClientAllQueryKey(args: InferRequestType<typeof client.api.client.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/all', keyArgs] as const
}

export function getApiClientAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.client.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientAllQueryKey>
  >({
    queryKey: getApiClientAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.client.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiClientAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.client.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiClientAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiClientCandeleteQueryKey(
  args: InferRequestType<typeof client.api.client.candelete.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/candelete', keyArgs] as const
}

export function getApiClientCandeleteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.client.candelete.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientCandeleteQueryKey>
  >({
    queryKey: getApiClientCandeleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.client.candelete.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiClientCandelete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.client.candelete.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientCandeleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiClientCandeleteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiClientDeleteMutationKey() {
  return ['api', '/api/client/delete', 'POST'] as const
}

export function getPostApiClientDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.client.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.delete.$post>) {
      return parseResponse(client.api.client.delete.$post(args, options))
    },
  })
}

export function createPostApiClientDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.client.delete.$post>,
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
    const mutationDefaults = getPostApiClientDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiClientDetailsQueryKey(
  args: InferRequestType<typeof client.api.client.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/details', keyArgs] as const
}

export function getApiClientDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.client.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientDetailsQueryKey>
  >({
    queryKey: getApiClientDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.client.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiClientDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.client.details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiClientDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiClientNewMutationKey() {
  return ['api', '/api/client/new', 'POST'] as const
}

export function getPostApiClientNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.client.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.new.$post>) {
      return parseResponse(client.api.client.new.$post(args, options))
    },
  })
}

export function createPostApiClientNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.client.new.$post>,
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
    const mutationDefaults = getPostApiClientNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiClientUpdateMutationKey() {
  return ['api', '/api/client/update', 'POST'] as const
}

export function getPostApiClientUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.update.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.client.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.client.update.$post>) {
      return parseResponse(client.api.client.update.$post(args, options))
    },
  })
}

export function createPostApiClientUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.client.update.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.client.update.$post>,
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
    const mutationDefaults = getPostApiClientUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiEstimationAllQueryKey(
  args: InferRequestType<typeof client.api.estimation.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/all', keyArgs] as const
}

export function getApiEstimationAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.estimation.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationAllQueryKey>
  >({
    queryKey: getApiEstimationAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.estimation.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEstimationAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.estimation.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEstimationAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiEstimationChangestatusMutationKey() {
  return ['api', '/api/estimation/changestatus', 'POST'] as const
}

export function getPostApiEstimationChangestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.changestatus.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.changestatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationChangestatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.changestatus.$post>) {
      return parseResponse(client.api.estimation.changestatus.$post(args, options))
    },
  })
}

export function createPostApiEstimationChangestatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.estimation.changestatus.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.estimation.changestatus.$post>,
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
    const mutationDefaults = getPostApiEstimationChangestatusMutationOptions<
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

export function getPostApiEstimationConvertMutationKey() {
  return ['api', '/api/estimation/convert', 'POST'] as const
}

export function getPostApiEstimationConvertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.convert.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.convert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationConvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.convert.$post>) {
      return parseResponse(client.api.estimation.convert.$post(args, options))
    },
  })
}

export function createPostApiEstimationConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.convert.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.estimation.convert.$post>,
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
    const mutationDefaults = getPostApiEstimationConvertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiEstimationDeleteMutationKey() {
  return ['api', '/api/estimation/delete', 'POST'] as const
}

export function getPostApiEstimationDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.delete.$post>) {
      return parseResponse(client.api.estimation.delete.$post(args, options))
    },
  })
}

export function createPostApiEstimationDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.estimation.delete.$post>,
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
    const mutationDefaults = getPostApiEstimationDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiEstimationDetailsQueryKey(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/details', keyArgs] as const
}

export function getApiEstimationDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationDetailsQueryKey>
  >({
    queryKey: getApiEstimationDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.estimation.details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiEstimationDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.estimation.details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationDetailsQueryKey>
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
      ...getApiEstimationDetailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiEstimationNewMutationKey() {
  return ['api', '/api/estimation/new', 'POST'] as const
}

export function getPostApiEstimationNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.estimation.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.new.$post>) {
      return parseResponse(client.api.estimation.new.$post(args, options))
    },
  })
}

export function createPostApiEstimationNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.new.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.estimation.new.$post>,
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
    const mutationDefaults = getPostApiEstimationNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiEstimationSendtoclientMutationKey() {
  return ['api', '/api/estimation/sendtoclient', 'POST'] as const
}

export function getPostApiEstimationSendtoclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.sendtoclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.sendtoclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationSendtoclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.sendtoclient.$post>) {
      return parseResponse(client.api.estimation.sendtoclient.$post(args, options))
    },
  })
}

export function createPostApiEstimationSendtoclient<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.estimation.sendtoclient.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.estimation.sendtoclient.$post>,
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
    const mutationDefaults = getPostApiEstimationSendtoclientMutationOptions<
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

export function getApiEstimationStatusQueryKey(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/status', keyArgs] as const
}

export function getApiEstimationStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationStatusQueryKey>
  >({
    queryKey: getApiEstimationStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.estimation.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEstimationStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.estimation.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEstimationStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiEstimationUpdateMutationKey() {
  return ['api', '/api/estimation/update', 'POST'] as const
}

export function getPostApiEstimationUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.update.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.estimation.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEstimationUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.estimation.update.$post>) {
      return parseResponse(client.api.estimation.update.$post(args, options))
    },
  })
}

export function createPostApiEstimationUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.estimation.update.$post>,
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
    const mutationDefaults = getPostApiEstimationUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiEstimationUriQueryKey(
  args: InferRequestType<typeof client.api.estimation.uri.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/uri', keyArgs] as const
}

export function getApiEstimationUriQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.estimation.uri.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEstimationUriQueryKey>
  >({
    queryKey: getApiEstimationUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.estimation.uri.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEstimationUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.estimation.uri.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEstimationUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEstimationUriQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiGeneralCountriesQueryKey(
  args: InferRequestType<typeof client.api.general.countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/countries', keyArgs] as const
}

export function getApiGeneralCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.countries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralCountriesQueryKey>
  >({
    queryKey: getApiGeneralCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.general.countries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiGeneralCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.general.countries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGeneralCountriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiGeneralCurrenciesQueryKey(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/currencies', keyArgs] as const
}

export function getApiGeneralCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralCurrenciesQueryKey>
  >({
    queryKey: getApiGeneralCurrenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.general.currencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGeneralCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.general.currencies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralCurrenciesQueryKey>
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
      ...getApiGeneralCurrenciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiGeneralDateformatsQueryKey(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/dateformats', keyArgs] as const
}

export function getApiGeneralDateformatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralDateformatsQueryKey>
  >({
    queryKey: getApiGeneralDateformatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.general.dateformats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGeneralDateformats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.general.dateformats.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralDateformatsQueryKey>
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
      ...getApiGeneralDateformatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiGeneralUilanguagesQueryKey(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/uilanguages', keyArgs] as const
}

export function getApiGeneralUilanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGeneralUilanguagesQueryKey>
  >({
    queryKey: getApiGeneralUilanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.general.uilanguages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGeneralUilanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.general.uilanguages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGeneralUilanguagesQueryKey>
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
      ...getApiGeneralUilanguagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiInvoiceAllQueryKey(
  args: InferRequestType<typeof client.api.invoice.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/all', keyArgs] as const
}

export function getApiInvoiceAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceAllQueryKey>
  >({
    queryKey: getApiInvoiceAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiInvoiceAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.invoice.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvoiceAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiInvoiceAllcategoriesQueryKey(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/allcategories', keyArgs] as const
}

export function getApiInvoiceAllcategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceAllcategoriesQueryKey>
  >({
    queryKey: getApiInvoiceAllcategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.allcategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiInvoiceAllcategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.invoice.allcategories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceAllcategoriesQueryKey>
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
      ...getApiInvoiceAllcategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiInvoiceChangestatusMutationKey() {
  return ['api', '/api/invoice/changestatus', 'POST'] as const
}

export function getPostApiInvoiceChangestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.changestatus.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.changestatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceChangestatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.changestatus.$post>) {
      return parseResponse(client.api.invoice.changestatus.$post(args, options))
    },
  })
}

export function createPostApiInvoiceChangestatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.changestatus.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.changestatus.$post>,
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
    const mutationDefaults = getPostApiInvoiceChangestatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiInvoiceDeleteMutationKey() {
  return ['api', '/api/invoice/delete', 'POST'] as const
}

export function getPostApiInvoiceDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invoice.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.delete.$post>) {
      return parseResponse(client.api.invoice.delete.$post(args, options))
    },
  })
}

export function createPostApiInvoiceDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.delete.$post>,
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
    const mutationDefaults = getPostApiInvoiceDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiInvoiceDeletecategoryMutationKey() {
  return ['api', '/api/invoice/deletecategory', 'POST'] as const
}

export function getPostApiInvoiceDeletecategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.deletecategory.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.deletecategory.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceDeletecategoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.deletecategory.$post>) {
      return parseResponse(client.api.invoice.deletecategory.$post(args, options))
    },
  })
}

export function createPostApiInvoiceDeletecategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.invoice.deletecategory.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.deletecategory.$post>,
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
    const mutationDefaults = getPostApiInvoiceDeletecategoryMutationOptions<
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

export function getApiInvoiceDetailsQueryKey(
  args: InferRequestType<typeof client.api.invoice.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/details', keyArgs] as const
}

export function getApiInvoiceDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceDetailsQueryKey>
  >({
    queryKey: getApiInvoiceDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiInvoiceDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.invoice.details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvoiceDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiInvoiceNewMutationKey() {
  return ['api', '/api/invoice/new', 'POST'] as const
}

export function getPostApiInvoiceNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invoice.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.new.$post>) {
      return parseResponse(client.api.invoice.new.$post(args, options))
    },
  })
}

export function createPostApiInvoiceNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.invoice.new.$post>,
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
    const mutationDefaults = getPostApiInvoiceNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiInvoiceNewcategoryMutationKey() {
  return ['api', '/api/invoice/newcategory', 'POST'] as const
}

export function getPostApiInvoiceNewcategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.newcategory.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.newcategory.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceNewcategoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.newcategory.$post>) {
      return parseResponse(client.api.invoice.newcategory.$post(args, options))
    },
  })
}

export function createPostApiInvoiceNewcategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.newcategory.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.newcategory.$post>,
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
    const mutationDefaults = getPostApiInvoiceNewcategoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiInvoicePdfQueryKey(
  args: InferRequestType<typeof client.api.invoice.pdf.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/pdf', keyArgs] as const
}

export function getApiInvoicePdfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.pdf.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoicePdfQueryKey>
  >({
    queryKey: getApiInvoicePdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.pdf.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiInvoicePdf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.invoice.pdf.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoicePdfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvoicePdfQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiInvoiceSendtoaccountantMutationKey() {
  return ['api', '/api/invoice/sendtoaccountant', 'POST'] as const
}

export function getPostApiInvoiceSendtoaccountantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.sendtoaccountant.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.sendtoaccountant.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceSendtoaccountantMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.sendtoaccountant.$post>) {
      return parseResponse(client.api.invoice.sendtoaccountant.$post(args, options))
    },
  })
}

export function createPostApiInvoiceSendtoaccountant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.invoice.sendtoaccountant.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.sendtoaccountant.$post>,
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
    const mutationDefaults = getPostApiInvoiceSendtoaccountantMutationOptions<
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

export function getPostApiInvoiceSendtoclientMutationKey() {
  return ['api', '/api/invoice/sendtoclient', 'POST'] as const
}

export function getPostApiInvoiceSendtoclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.sendtoclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.sendtoclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceSendtoclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.sendtoclient.$post>) {
      return parseResponse(client.api.invoice.sendtoclient.$post(args, options))
    },
  })
}

export function createPostApiInvoiceSendtoclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.sendtoclient.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.sendtoclient.$post>,
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
    const mutationDefaults = getPostApiInvoiceSendtoclientMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiInvoiceStatusQueryKey(
  args: InferRequestType<typeof client.api.invoice.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/status', keyArgs] as const
}

export function getApiInvoiceStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceStatusQueryKey>
  >({
    queryKey: getApiInvoiceStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiInvoiceStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.invoice.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvoiceStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiInvoiceUpdateMutationKey() {
  return ['api', '/api/invoice/update', 'POST'] as const
}

export function getPostApiInvoiceUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invoice.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.update.$post>) {
      return parseResponse(client.api.invoice.update.$post(args, options))
    },
  })
}

export function createPostApiInvoiceUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.update.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.update.$post>,
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
    const mutationDefaults = getPostApiInvoiceUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiInvoiceUpdatecategoryMutationKey() {
  return ['api', '/api/invoice/updatecategory', 'POST'] as const
}

export function getPostApiInvoiceUpdatecategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.updatecategory.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.invoice.updatecategory.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoiceUpdatecategoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoice.updatecategory.$post>) {
      return parseResponse(client.api.invoice.updatecategory.$post(args, options))
    },
  })
}

export function createPostApiInvoiceUpdatecategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.invoice.updatecategory.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.invoice.updatecategory.$post>,
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
    const mutationDefaults = getPostApiInvoiceUpdatecategoryMutationOptions<
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

export function getApiInvoiceUriQueryKey(
  args: InferRequestType<typeof client.api.invoice.uri.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/uri', keyArgs] as const
}

export function getApiInvoiceUriQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoice.uri.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoiceUriQueryKey>
  >({
    queryKey: getApiInvoiceUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoice.uri.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiInvoiceUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.invoice.uri.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoiceUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvoiceUriQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiOrderAllQueryKey(args: InferRequestType<typeof client.api.order.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/order/all', keyArgs] as const
}

export function getApiOrderAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.order.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrderAllQueryKey>
  >({
    queryKey: getApiOrderAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.order.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOrderAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.order.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrderAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrderAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiOrderChangeshippingdetailsMutationKey() {
  return ['api', '/api/order/changeshippingdetails', 'POST'] as const
}

export function getPostApiOrderChangeshippingdetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.order.changeshippingdetails.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.order.changeshippingdetails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrderChangeshippingdetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.order.changeshippingdetails.$post>) {
      return parseResponse(client.api.order.changeshippingdetails.$post(args, options))
    },
  })
}

export function createPostApiOrderChangeshippingdetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.order.changeshippingdetails.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.order.changeshippingdetails.$post>,
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
    const mutationDefaults = getPostApiOrderChangeshippingdetailsMutationOptions<
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

export function getPostApiOrderChangestatusMutationKey() {
  return ['api', '/api/order/changestatus', 'POST'] as const
}

export function getPostApiOrderChangestatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.order.changestatus.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.order.changestatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrderChangestatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.order.changestatus.$post>) {
      return parseResponse(client.api.order.changestatus.$post(args, options))
    },
  })
}

export function createPostApiOrderChangestatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.order.changestatus.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.order.changestatus.$post>,
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
    const mutationDefaults = getPostApiOrderChangestatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiOrderDeleteMutationKey() {
  return ['api', '/api/order/delete', 'POST'] as const
}

export function getPostApiOrderDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.order.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrderDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.order.delete.$post>) {
      return parseResponse(client.api.order.delete.$post(args, options))
    },
  })
}

export function createPostApiOrderDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.order.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.order.delete.$post>,
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
    const mutationDefaults = getPostApiOrderDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiOrderDetailsQueryKey(
  args: InferRequestType<typeof client.api.order.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/order/details', keyArgs] as const
}

export function getApiOrderDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.order.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrderDetailsQueryKey>
  >({
    queryKey: getApiOrderDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.order.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOrderDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.order.details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrderDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrderDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiOrderNewMutationKey() {
  return ['api', '/api/order/new', 'POST'] as const
}

export function getPostApiOrderNewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.order.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrderNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.order.new.$post>) {
      return parseResponse(client.api.order.new.$post(args, options))
    },
  })
}

export function createPostApiOrderNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.order.new.$post>,
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
    const mutationDefaults = getPostApiOrderNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPaymentSupportedQueryKey(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payment/supported', keyArgs] as const
}

export function getApiPaymentSupportedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentSupportedQueryKey>
  >({
    queryKey: getApiPaymentSupportedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment.supported.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPaymentSupported<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.payment.supported.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentSupportedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentSupportedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiPaymentlinkAllQueryKey(
  args: InferRequestType<typeof client.api.paymentlink.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/paymentlink/all', keyArgs] as const
}

export function getApiPaymentlinkAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.paymentlink.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentlinkAllQueryKey>
  >({
    queryKey: getApiPaymentlinkAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.paymentlink.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPaymentlinkAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.paymentlink.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentlinkAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentlinkAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPaymentlinkDeleteMutationKey() {
  return ['api', '/api/paymentlink/delete', 'POST'] as const
}

export function getPostApiPaymentlinkDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.paymentlink.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentlinkDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.paymentlink.delete.$post>) {
      return parseResponse(client.api.paymentlink.delete.$post(args, options))
    },
  })
}

export function createPostApiPaymentlinkDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.paymentlink.delete.$post>,
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
    const mutationDefaults = getPostApiPaymentlinkDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiPaymentlinkNewMutationKey() {
  return ['api', '/api/paymentlink/new', 'POST'] as const
}

export function getPostApiPaymentlinkNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.paymentlink.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentlinkNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.paymentlink.new.$post>) {
      return parseResponse(client.api.paymentlink.new.$post(args, options))
    },
  })
}

export function createPostApiPaymentlinkNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.new.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.paymentlink.new.$post>,
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
    const mutationDefaults = getPostApiPaymentlinkNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiPaymentlinkUriQueryKey(
  args: InferRequestType<typeof client.api.paymentlink.uri.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/paymentlink/uri', keyArgs] as const
}

export function getApiPaymentlinkUriQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.paymentlink.uri.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentlinkUriQueryKey>
  >({
    queryKey: getApiPaymentlinkUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.paymentlink.uri.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPaymentlinkUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.paymentlink.uri.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentlinkUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentlinkUriQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiProductAllQueryKey(
  args: InferRequestType<typeof client.api.product.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/product/all', keyArgs] as const
}

export function getApiProductAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.product.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProductAllQueryKey>
  >({
    queryKey: getApiProductAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.product.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProductAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.product.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProductAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProductAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiProductDeleteMutationKey() {
  return ['api', '/api/product/delete', 'POST'] as const
}

export function getPostApiProductDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.product.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProductDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.product.delete.$post>) {
      return parseResponse(client.api.product.delete.$post(args, options))
    },
  })
}

export function createPostApiProductDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.product.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.product.delete.$post>,
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
    const mutationDefaults = getPostApiProductDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiProductDetailsQueryKey(
  args: InferRequestType<typeof client.api.product.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/product/details', keyArgs] as const
}

export function getApiProductDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.product.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiProductDetailsQueryKey>
  >({
    queryKey: getApiProductDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.product.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProductDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.product.details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProductDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProductDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiProductNewMutationKey() {
  return ['api', '/api/product/new', 'POST'] as const
}

export function getPostApiProductNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.product.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProductNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.product.new.$post>) {
      return parseResponse(client.api.product.new.$post(args, options))
    },
  })
}

export function createPostApiProductNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.product.new.$post>,
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
    const mutationDefaults = getPostApiProductNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiProductUpdateMutationKey() {
  return ['api', '/api/product/update', 'POST'] as const
}

export function getPostApiProductUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.product.update.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.product.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiProductUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.product.update.$post>) {
      return parseResponse(client.api.product.update.$post(args, options))
    },
  })
}

export function createPostApiProductUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.product.update.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.product.update.$post>,
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
    const mutationDefaults = getPostApiProductUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTaxAllQueryKey(args: InferRequestType<typeof client.api.tax.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tax/all', keyArgs] as const
}

export function getApiTaxAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tax.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTaxAllQueryKey>
  >({
    queryKey: getApiTaxAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tax.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTaxAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tax.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTaxAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTaxAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiTaxDeleteMutationKey() {
  return ['api', '/api/tax/delete', 'POST'] as const
}

export function getPostApiTaxDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.tax.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaxDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tax.delete.$post>) {
      return parseResponse(client.api.tax.delete.$post(args, options))
    },
  })
}

export function createPostApiTaxDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tax.delete.$post>,
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
    const mutationDefaults = getPostApiTaxDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiTaxNewMutationKey() {
  return ['api', '/api/tax/new', 'POST'] as const
}

export function getPostApiTaxNewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.new.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.tax.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaxNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tax.new.$post>) {
      return parseResponse(client.api.tax.new.$post(args, options))
    },
  })
}

export function createPostApiTaxNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.new.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tax.new.$post>,
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
    const mutationDefaults = getPostApiTaxNewMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiTaxUpdateMutationKey() {
  return ['api', '/api/tax/update', 'POST'] as const
}

export function getPostApiTaxUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.update.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.tax.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTaxUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tax.update.$post>) {
      return parseResponse(client.api.tax.update.$post(args, options))
    },
  })
}

export function createPostApiTaxUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.update.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.tax.update.$post>,
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
    const mutationDefaults = getPostApiTaxUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWorktypeAllQueryKey(
  args: InferRequestType<typeof client.api.worktype.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/all', keyArgs] as const
}

export function getApiWorktypeAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.worktype.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeAllQueryKey>
  >({
    queryKey: getApiWorktypeAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.worktype.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiWorktypeAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.worktype.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWorktypeAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiWorktypeDeleteMutationKey() {
  return ['api', '/api/worktype/delete', 'POST'] as const
}

export function getPostApiWorktypeDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.worktype.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorktypeDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.worktype.delete.$post>) {
      return parseResponse(client.api.worktype.delete.$post(args, options))
    },
  })
}

export function createPostApiWorktypeDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.worktype.delete.$post>,
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
    const mutationDefaults = getPostApiWorktypeDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWorktypeDetailsQueryKey(
  args: InferRequestType<typeof client.api.worktype.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/details', keyArgs] as const
}

export function getApiWorktypeDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.worktype.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeDetailsQueryKey>
  >({
    queryKey: getApiWorktypeDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.worktype.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiWorktypeDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.worktype.details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWorktypeDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiWorktypeNewMutationKey() {
  return ['api', '/api/worktype/new', 'POST'] as const
}

export function getPostApiWorktypeNewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.new.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.worktype.new.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorktypeNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.worktype.new.$post>) {
      return parseResponse(client.api.worktype.new.$post(args, options))
    },
  })
}

export function createPostApiWorktypeNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.new.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.worktype.new.$post>,
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
    const mutationDefaults = getPostApiWorktypeNewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWorktypeSearchQueryKey(
  args: InferRequestType<typeof client.api.worktype.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/search', keyArgs] as const
}

export function getApiWorktypeSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.worktype.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorktypeSearchQueryKey>
  >({
    queryKey: getApiWorktypeSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.worktype.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiWorktypeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.worktype.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorktypeSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWorktypeSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiWorktypeUpdateMutationKey() {
  return ['api', '/api/worktype/update', 'POST'] as const
}

export function getPostApiWorktypeUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.update.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.worktype.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorktypeUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.worktype.update.$post>) {
      return parseResponse(client.api.worktype.update.$post(args, options))
    },
  })
}

export function createPostApiWorktypeUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.update.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.worktype.update.$post>,
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
    const mutationDefaults = getPostApiWorktypeUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
