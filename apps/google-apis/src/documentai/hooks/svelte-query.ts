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

export function getV1beta3Key() {
  return ['v1beta3'] as const
}

export function getPostV1beta3HumanReviewConfigReviewDocumentMutationKey() {
  return ['v1beta3', '/v1beta3/:humanReviewConfig:reviewDocument', 'POST'] as const
}

export function getPostV1beta3HumanReviewConfigReviewDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3HumanReviewConfigReviewDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>,
    ) {
      return parseResponse(client.v1beta3[':humanReviewConfig:reviewDocument'].$post(args, options))
    },
  })
}

export function createPostV1beta3HumanReviewConfigReviewDocument<
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
                ReturnType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>,
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
    const mutationDefaults = getPostV1beta3HumanReviewConfigReviewDocumentMutationOptions<
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

export function getV1beta3NameQueryKey(
  args: InferRequestType<(typeof client.v1beta3)[':name']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:name', args] as const
}

export function getV1beta3NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3NameQueryKey>
  >({
    queryKey: getV1beta3NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1beta3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta3NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta3NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1beta3NameMutationKey() {
  return ['v1beta3', '/v1beta3/:name', 'DELETE'] as const
}

export function getDeleteV1beta3NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta3)[':name']['$delete']>) {
      return parseResponse(client.v1beta3[':name'].$delete(args, options))
    },
  })
}

export function createDeleteV1beta3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1beta3NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1beta3NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:name/locations', args] as const
}

export function getV1beta3NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3NameLocationsQueryKey>
  >({
    queryKey: getV1beta3NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3[':name'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta3NameLocationsQueryKey>
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
      ...getV1beta3NameLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1beta3NameBatchProcessMutationKey() {
  return ['v1beta3', '/v1beta3/:name:batchProcess', 'POST'] as const
}

export function getPostV1beta3NameBatchProcessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':name:batchProcess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':name:batchProcess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3NameBatchProcessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta3)[':name:batchProcess']['$post']>,
    ) {
      return parseResponse(client.v1beta3[':name:batchProcess'].$post(args, options))
    },
  })
}

export function createPostV1beta3NameBatchProcess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':name:batchProcess']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':name:batchProcess']['$post']>,
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
    const mutationDefaults = getPostV1beta3NameBatchProcessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1beta3NameCancelMutationKey() {
  return ['v1beta3', '/v1beta3/:name:cancel', 'POST'] as const
}

export function getPostV1beta3NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta3)[':name:cancel']['$post']>) {
      return parseResponse(client.v1beta3[':name:cancel'].$post(args, options))
    },
  })
}

export function createPostV1beta3NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1beta3NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1beta3NameDeployMutationKey() {
  return ['v1beta3', '/v1beta3/:name:deploy', 'POST'] as const
}

export function getPostV1beta3NameDeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:deploy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':name:deploy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3NameDeployMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta3)[':name:deploy']['$post']>) {
      return parseResponse(client.v1beta3[':name:deploy'].$post(args, options))
    },
  })
}

export function createPostV1beta3NameDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':name:deploy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':name:deploy']['$post']>,
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
    const mutationDefaults = getPostV1beta3NameDeployMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1beta3NameDisableMutationKey() {
  return ['v1beta3', '/v1beta3/:name:disable', 'POST'] as const
}

export function getPostV1beta3NameDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:disable']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':name:disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3NameDisableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta3)[':name:disable']['$post']>) {
      return parseResponse(client.v1beta3[':name:disable'].$post(args, options))
    },
  })
}

export function createPostV1beta3NameDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':name:disable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':name:disable']['$post']>,
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
    const mutationDefaults = getPostV1beta3NameDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1beta3NameEnableMutationKey() {
  return ['v1beta3', '/v1beta3/:name:enable', 'POST'] as const
}

export function getPostV1beta3NameEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:enable']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':name:enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3NameEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta3)[':name:enable']['$post']>) {
      return parseResponse(client.v1beta3[':name:enable'].$post(args, options))
    },
  })
}

export function createPostV1beta3NameEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':name:enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':name:enable']['$post']>,
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
    const mutationDefaults = getPostV1beta3NameEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1beta3NameProcessMutationKey() {
  return ['v1beta3', '/v1beta3/:name:process', 'POST'] as const
}

export function getPostV1beta3NameProcessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name:process']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':name:process']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3NameProcessMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta3)[':name:process']['$post']>) {
      return parseResponse(client.v1beta3[':name:process'].$post(args, options))
    },
  })
}

export function createPostV1beta3NameProcess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':name:process']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':name:process']['$post']>,
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
    const mutationDefaults = getPostV1beta3NameProcessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1beta3NameUndeployMutationKey() {
  return ['v1beta3', '/v1beta3/:name:undeploy', 'POST'] as const
}

export function getPostV1beta3NameUndeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':name:undeploy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':name:undeploy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3NameUndeployMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta3)[':name:undeploy']['$post']>) {
      return parseResponse(client.v1beta3[':name:undeploy'].$post(args, options))
    },
  })
}

export function createPostV1beta3NameUndeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':name:undeploy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':name:undeploy']['$post']>,
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
    const mutationDefaults = getPostV1beta3NameUndeployMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1beta3ParentEvaluationsQueryKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent/evaluations', args] as const
}

export function getV1beta3ParentEvaluationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentEvaluationsQueryKey>
  >({
    queryKey: getV1beta3ParentEvaluationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3[':parent'].evaluations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3ParentEvaluations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta3ParentEvaluationsQueryKey>
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
      ...getV1beta3ParentEvaluationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3ParentProcessorTypesQueryKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent/processorTypes', args] as const
}

export function getV1beta3ParentProcessorTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentProcessorTypesQueryKey>
  >({
    queryKey: getV1beta3ParentProcessorTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3[':parent'].processorTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3ParentProcessorTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta3ParentProcessorTypesQueryKey>
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
      ...getV1beta3ParentProcessorTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3ParentProcessorVersionsQueryKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent/processorVersions', args] as const
}

export function getV1beta3ParentProcessorVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentProcessorVersionsQueryKey>
  >({
    queryKey: getV1beta3ParentProcessorVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3[':parent'].processorVersions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3ParentProcessorVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta3ParentProcessorVersionsQueryKey>
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
      ...getV1beta3ParentProcessorVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1beta3ParentProcessorVersionsImportProcessorVersionMutationKey() {
  return ['v1beta3', '/v1beta3/:parent/processorVersions:importProcessorVersion', 'POST'] as const
}

export function getPostV1beta3ParentProcessorVersionsImportProcessorVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3ParentProcessorVersionsImportProcessorVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta3[':parent']['processorVersions:importProcessorVersion'].$post(args, options),
      )
    },
  })
}

export function createPostV1beta3ParentProcessorVersionsImportProcessorVersion<
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
                ReturnType<
                  (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
        >,
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
    const mutationDefaults =
      getPostV1beta3ParentProcessorVersionsImportProcessorVersionMutationOptions<
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

export function getPostV1beta3ParentProcessorVersionsTrainMutationKey() {
  return ['v1beta3', '/v1beta3/:parent/processorVersions:train', 'POST'] as const
}

export function getPostV1beta3ParentProcessorVersionsTrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3ParentProcessorVersionsTrainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta3)[':parent']['processorVersions:train']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta3[':parent']['processorVersions:train'].$post(args, options),
      )
    },
  })
}

export function createPostV1beta3ParentProcessorVersionsTrain<
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
                ReturnType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>,
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
    const mutationDefaults = getPostV1beta3ParentProcessorVersionsTrainMutationOptions<
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

export function getV1beta3ParentProcessorsQueryKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent/processors', args] as const
}

export function getV1beta3ParentProcessorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentProcessorsQueryKey>
  >({
    queryKey: getV1beta3ParentProcessorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3[':parent'].processors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3ParentProcessors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta3ParentProcessorsQueryKey>
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
      ...getV1beta3ParentProcessorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1beta3ParentProcessorsMutationKey() {
  return ['v1beta3', '/v1beta3/:parent/processors', 'POST'] as const
}

export function getPostV1beta3ParentProcessorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3ParentProcessorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$post']>,
    ) {
      return parseResponse(client.v1beta3[':parent'].processors.$post(args, options))
    },
  })
}

export function createPostV1beta3ParentProcessors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$post']>,
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
    const mutationDefaults = getPostV1beta3ParentProcessorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1beta3ParentFetchProcessorTypesQueryKey(
  args: InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>,
) {
  return ['v1beta3', '/v1beta3/:parent:fetchProcessorTypes', args] as const
}

export function getV1beta3ParentFetchProcessorTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentFetchProcessorTypesQueryKey>
  >({
    queryKey: getV1beta3ParentFetchProcessorTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3[':parent:fetchProcessorTypes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3ParentFetchProcessorTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta3ParentFetchProcessorTypesQueryKey>
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
      ...getV1beta3ParentFetchProcessorTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1beta3ProcessorVersionEvaluateProcessorVersionMutationKey() {
  return ['v1beta3', '/v1beta3/:processorVersion:evaluateProcessorVersion', 'POST'] as const
}

export function getPostV1beta3ProcessorVersionEvaluateProcessorVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3ProcessorVersionEvaluateProcessorVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta3[':processorVersion:evaluateProcessorVersion'].$post(args, options),
      )
    },
  })
}

export function createPostV1beta3ProcessorVersionEvaluateProcessorVersion<
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
                ReturnType<
                  (typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']
        >,
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
    const mutationDefaults = getPostV1beta3ProcessorVersionEvaluateProcessorVersionMutationOptions<
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

export function getPostV1beta3ProcessorSetDefaultProcessorVersionMutationKey() {
  return ['v1beta3', '/v1beta3/:processor:setDefaultProcessorVersion', 'POST'] as const
}

export function getPostV1beta3ProcessorSetDefaultProcessorVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta3ProcessorSetDefaultProcessorVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta3[':processor:setDefaultProcessorVersion'].$post(args, options),
      )
    },
  })
}

export function createPostV1beta3ProcessorSetDefaultProcessorVersion<
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
                ReturnType<
                  (typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']>,
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
    const mutationDefaults = getPostV1beta3ProcessorSetDefaultProcessorVersionMutationOptions<
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
