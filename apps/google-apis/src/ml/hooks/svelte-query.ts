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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function createDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function createPatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
) {
  return ['v1', '/v1/:name/operations', args] as const
}

export function getV1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameOperationsQueryKey>
  >({
    queryKey: getV1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameOperationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1NameAddMeasurementMutationKey() {
  return ['v1', '/v1/:name:addMeasurement', 'POST'] as const
}

export function getPostV1NameAddMeasurementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:addMeasurement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:addMeasurement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameAddMeasurementMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:addMeasurement']['$post']>) {
      return parseResponse(client.v1[':name:addMeasurement'].$post(args, options))
    },
  })
}

export function createPostV1NameAddMeasurement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:addMeasurement']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:addMeasurement']['$post']>,
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
    const mutationDefaults = getPostV1NameAddMeasurementMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function createPostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameCheckEarlyStoppingStateMutationKey() {
  return ['v1', '/v1/:name:checkEarlyStoppingState', 'POST'] as const
}

export function getPostV1NameCheckEarlyStoppingStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCheckEarlyStoppingStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>,
    ) {
      return parseResponse(client.v1[':name:checkEarlyStoppingState'].$post(args, options))
    },
  })
}

export function createPostV1NameCheckEarlyStoppingState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:checkEarlyStoppingState']['$post']>,
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
    const mutationDefaults = getPostV1NameCheckEarlyStoppingStateMutationOptions<
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

export function getPostV1NameCompleteMutationKey() {
  return ['v1', '/v1/:name:complete', 'POST'] as const
}

export function getPostV1NameCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:complete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCompleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:complete']['$post']>) {
      return parseResponse(client.v1[':name:complete'].$post(args, options))
    },
  })
}

export function createPostV1NameComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:complete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
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
    const mutationDefaults = getPostV1NameCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameExplainMutationKey() {
  return ['v1', '/v1/:name:explain', 'POST'] as const
}

export function getPostV1NameExplainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:explain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:explain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameExplainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:explain']['$post']>) {
      return parseResponse(client.v1[':name:explain'].$post(args, options))
    },
  })
}

export function createPostV1NameExplain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:explain']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:explain']['$post']>,
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
    const mutationDefaults = getPostV1NameExplainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NameGetConfigQueryKey(
  args: InferRequestType<(typeof client.v1)[':name:getConfig']['$get']>,
) {
  return ['v1', '/v1/:name:getConfig', args] as const
}

export function getV1NameGetConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:getConfig']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name:getConfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:getConfig']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameGetConfigQueryKey>
  >({
    queryKey: getV1NameGetConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name:getConfig'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1NameGetConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:getConfig']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name:getConfig']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:getConfig']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameGetConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameGetConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1NamePredictMutationKey() {
  return ['v1', '/v1/:name:predict', 'POST'] as const
}

export function getPostV1NamePredictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:predict']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:predict']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NamePredictMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:predict']['$post']>) {
      return parseResponse(client.v1[':name:predict'].$post(args, options))
    },
  })
}

export function createPostV1NamePredict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:predict']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:predict']['$post']>,
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
    const mutationDefaults = getPostV1NamePredictMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameSetDefaultMutationKey() {
  return ['v1', '/v1/:name:setDefault', 'POST'] as const
}

export function getPostV1NameSetDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:setDefault']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:setDefault']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameSetDefaultMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:setDefault']['$post']>) {
      return parseResponse(client.v1[':name:setDefault'].$post(args, options))
    },
  })
}

export function createPostV1NameSetDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:setDefault']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:setDefault']['$post']>,
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
    const mutationDefaults = getPostV1NameSetDefaultMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameStopMutationKey() {
  return ['v1', '/v1/:name:stop', 'POST'] as const
}

export function getPostV1NameStopMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:stop']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:stop']['$post']>) {
      return parseResponse(client.v1[':name:stop'].$post(args, options))
    },
  })
}

export function createPostV1NameStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:stop']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:stop']['$post']>,
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
    const mutationDefaults = getPostV1NameStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentJobsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
) {
  return ['v1', '/v1/:parent/jobs', args] as const
}

export function getV1ParentJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentJobsQueryKey>
  >({
    queryKey: getV1ParentJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentJobsMutationKey() {
  return ['v1', '/v1/:parent/jobs', 'POST'] as const
}

export function getPostV1ParentJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>) {
      return parseResponse(client.v1[':parent'].jobs.$post(args, options))
    },
  })
}

export function createPostV1ParentJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>,
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
    const mutationDefaults = getPostV1ParentJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentLocationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>,
) {
  return ['v1', '/v1/:parent/locations', args] as const
}

export function getV1ParentLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentLocationsQueryKey>
  >({
    queryKey: getV1ParentLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ParentModelsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['models']['$get']>,
) {
  return ['v1', '/v1/:parent/models', args] as const
}

export function getV1ParentModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentModelsQueryKey>
  >({
    queryKey: getV1ParentModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].models.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentModelsMutationKey() {
  return ['v1', '/v1/:parent/models', 'POST'] as const
}

export function getPostV1ParentModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentModelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['models']['$post']>) {
      return parseResponse(client.v1[':parent'].models.$post(args, options))
    },
  })
}

export function createPostV1ParentModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['models']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['models']['$post']>,
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
    const mutationDefaults = getPostV1ParentModelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentStudiesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['studies']['$get']>,
) {
  return ['v1', '/v1/:parent/studies', args] as const
}

export function getV1ParentStudiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['studies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentStudiesQueryKey>
  >({
    queryKey: getV1ParentStudiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].studies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentStudies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['studies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentStudiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentStudiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentStudiesMutationKey() {
  return ['v1', '/v1/:parent/studies', 'POST'] as const
}

export function getPostV1ParentStudiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['studies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentStudiesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['studies']['$post']>) {
      return parseResponse(client.v1[':parent'].studies.$post(args, options))
    },
  })
}

export function createPostV1ParentStudies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['studies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['studies']['$post']>,
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
    const mutationDefaults = getPostV1ParentStudiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentTrialsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['trials']['$get']>,
) {
  return ['v1', '/v1/:parent/trials', args] as const
}

export function getV1ParentTrialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['trials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentTrialsQueryKey>
  >({
    queryKey: getV1ParentTrialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].trials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentTrials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['trials']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentTrialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentTrialsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentTrialsMutationKey() {
  return ['v1', '/v1/:parent/trials', 'POST'] as const
}

export function getPostV1ParentTrialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['trials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTrialsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['trials']['$post']>) {
      return parseResponse(client.v1[':parent'].trials.$post(args, options))
    },
  })
}

export function createPostV1ParentTrials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['trials']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['trials']['$post']>,
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
    const mutationDefaults = getPostV1ParentTrialsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentTrialsListOptimalTrialsMutationKey() {
  return ['v1', '/v1/:parent/trials:listOptimalTrials', 'POST'] as const
}

export function getPostV1ParentTrialsListOptimalTrialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTrialsListOptimalTrialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['trials:listOptimalTrials'].$post(args, options))
    },
  })
}

export function createPostV1ParentTrialsListOptimalTrials<
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
                ReturnType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['trials:listOptimalTrials']['$post']>,
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
    const mutationDefaults = getPostV1ParentTrialsListOptimalTrialsMutationOptions<
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

export function getPostV1ParentTrialsSuggestMutationKey() {
  return ['v1', '/v1/:parent/trials:suggest', 'POST'] as const
}

export function getPostV1ParentTrialsSuggestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['trials:suggest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['trials:suggest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTrialsSuggestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['trials:suggest']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['trials:suggest'].$post(args, options))
    },
  })
}

export function createPostV1ParentTrialsSuggest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['trials:suggest']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['trials:suggest']['$post']>,
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
    const mutationDefaults = getPostV1ParentTrialsSuggestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentVersionsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
) {
  return ['v1', '/v1/:parent/versions', args] as const
}

export function getV1ParentVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentVersionsQueryKey>
  >({
    queryKey: getV1ParentVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentVersionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentVersionsMutationKey() {
  return ['v1', '/v1/:parent/versions', 'POST'] as const
}

export function getPostV1ParentVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentVersionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>) {
      return parseResponse(client.v1[':parent'].versions.$post(args, options))
    },
  })
}

export function createPostV1ParentVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>,
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
    const mutationDefaults = getPostV1ParentVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ResourceGetIamPolicyQueryKey(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
) {
  return ['v1', '/v1/:resource:getIamPolicy', args] as const
}

export function getV1ResourceGetIamPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResourceGetIamPolicyQueryKey>
  >({
    queryKey: getV1ResourceGetIamPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':resource:getIamPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ResourceGetIamPolicyQueryKey>
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
      ...getV1ResourceGetIamPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ResourceSetIamPolicyMutationKey() {
  return ['v1', '/v1/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function createPostV1ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':resource:setIamPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
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
    const mutationDefaults = getPostV1ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ResourceTestIamPermissionsMutationKey() {
  return ['v1', '/v1/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function createPostV1ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':resource:testIamPermissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
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
    const mutationDefaults = getPostV1ResourceTestIamPermissionsMutationOptions<
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
