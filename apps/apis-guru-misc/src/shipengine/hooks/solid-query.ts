import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPutV1AddressesRecognizeMutationKey() {
  return ['v1', '/v1/addresses/recognize', 'PUT'] as const
}

export function getPutV1AddressesRecognizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.addresses.recognize.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.addresses.recognize.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AddressesRecognizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.addresses.recognize.$put>) {
      return parseResponse(client.v1.addresses.recognize.$put(args, options))
    },
  })
}

export function createPutV1AddressesRecognize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.addresses.recognize.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.addresses.recognize.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1AddressesRecognizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AddressesValidateMutationKey() {
  return ['v1', '/v1/addresses/validate', 'POST'] as const
}

export function getPostV1AddressesValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.addresses.validate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.addresses.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AddressesValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.addresses.validate.$post>) {
      return parseResponse(client.v1.addresses.validate.$post(args, options))
    },
  })
}

export function createPostV1AddressesValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.addresses.validate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.addresses.validate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AddressesValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BatchesQueryKey(args: InferRequestType<typeof client.v1.batches.$get>) {
  return ['v1', '/v1/batches', args] as const
}

export function getV1BatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.batches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BatchesQueryKey>
  >({
    queryKey: getV1BatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Batches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.batches.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1BatchesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BatchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1BatchesMutationKey() {
  return ['v1', '/v1/batches', 'POST'] as const
}

export function getPostV1BatchesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.batches.$post>) {
      return parseResponse(client.v1.batches.$post(args, options))
    },
  })
}

export function createPostV1Batches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.batches.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BatchesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BatchesExternalBatchIdExternalBatchIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']
  >,
) {
  return ['v1', '/v1/batches/external_batch_id/:external_batch_id', args] as const
}

export function getV1BatchesExternalBatchIdExternalBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesExternalBatchIdExternalBatchIdQueryKey>
  >({
    queryKey: getV1BatchesExternalBatchIdExternalBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches.external_batch_id[':external_batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BatchesExternalBatchIdExternalBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1BatchesExternalBatchIdExternalBatchIdQueryKey>
        >
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
      ...getV1BatchesExternalBatchIdExternalBatchIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1BatchesBatchIdQueryKey(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$get']>,
) {
  return ['v1', '/v1/batches/:batch_id', args] as const
}

export function getV1BatchesBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchIdQueryKey>
  >({
    queryKey: getV1BatchesBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BatchesBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.batches)[':batch_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1BatchesBatchIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BatchesBatchIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1BatchesBatchIdMutationKey() {
  return ['v1', '/v1/batches/:batch_id', 'PUT'] as const
}

export function getPutV1BatchesBatchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BatchesBatchIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$put']>) {
      return parseResponse(client.v1.batches[':batch_id'].$put(args, options))
    },
  })
}

export function createPutV1BatchesBatchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batch_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1BatchesBatchIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1BatchesBatchIdMutationKey() {
  return ['v1', '/v1/batches/:batch_id', 'DELETE'] as const
}

export function getDeleteV1BatchesBatchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BatchesBatchIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$delete']>) {
      return parseResponse(client.v1.batches[':batch_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1BatchesBatchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batch_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1BatchesBatchIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1BatchesBatchIdAddMutationKey() {
  return ['v1', '/v1/batches/:batch_id/add', 'POST'] as const
}

export function getPostV1BatchesBatchIdAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['add']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesBatchIdAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.batches)[':batch_id']['add']['$post']>,
    ) {
      return parseResponse(client.v1.batches[':batch_id'].add.$post(args, options))
    },
  })
}

export function createPostV1BatchesBatchIdAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['add']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batch_id']['add']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BatchesBatchIdAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BatchesBatchIdErrorsQueryKey(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>,
) {
  return ['v1', '/v1/batches/:batch_id/errors', args] as const
}

export function getV1BatchesBatchIdErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BatchesBatchIdErrorsQueryKey>
  >({
    queryKey: getV1BatchesBatchIdErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.batches[':batch_id'].errors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BatchesBatchIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1BatchesBatchIdErrorsQueryKey>
        >
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
      ...getV1BatchesBatchIdErrorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1BatchesBatchIdProcessLabelsMutationKey() {
  return ['v1', '/v1/batches/:batch_id/process/labels', 'POST'] as const
}

export function getPostV1BatchesBatchIdProcessLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.batches)[':batch_id']['process']['labels']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['process']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesBatchIdProcessLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.batches)[':batch_id']['process']['labels']['$post']>,
    ) {
      return parseResponse(client.v1.batches[':batch_id'].process.labels.$post(args, options))
    },
  })
}

export function createPostV1BatchesBatchIdProcessLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.batches)[':batch_id']['process']['labels']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batch_id']['process']['labels']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BatchesBatchIdProcessLabelsMutationOptions<
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

export function getPostV1BatchesBatchIdRemoveMutationKey() {
  return ['v1', '/v1/batches/:batch_id/remove', 'POST'] as const
}

export function getPostV1BatchesBatchIdRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['remove']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BatchesBatchIdRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.batches)[':batch_id']['remove']['$post']>,
    ) {
      return parseResponse(client.v1.batches[':batch_id'].remove.$post(args, options))
    },
  })
}

export function createPostV1BatchesBatchIdRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['remove']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.batches)[':batch_id']['remove']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BatchesBatchIdRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CarriersQueryKey() {
  return ['v1', '/v1/carriers'] as const
}

export function getV1CarriersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.carriers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.carriers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CarriersQueryKey>
  >({
    queryKey: getV1CarriersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.carriers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Carriers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.carriers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.carriers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1CarriersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CarriersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1CarriersCarrierIdQueryKey(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['$get']>,
) {
  return ['v1', '/v1/carriers/:carrier_id', args] as const
}

export function getV1CarriersCarrierIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CarriersCarrierIdQueryKey>
  >({
    queryKey: getV1CarriersCarrierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.carriers[':carrier_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CarriersCarrierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.carriers)[':carrier_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CarriersCarrierIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CarriersCarrierIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1CarriersCarrierIdAddFundsMutationKey() {
  return ['v1', '/v1/carriers/:carrier_id/add_funds', 'PUT'] as const
}

export function getPutV1CarriersCarrierIdAddFundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CarriersCarrierIdAddFundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>,
    ) {
      return parseResponse(client.v1.carriers[':carrier_id'].add_funds.$put(args, options))
    },
  })
}

export function createPutV1CarriersCarrierIdAddFunds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1CarriersCarrierIdAddFundsMutationOptions<
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

export function getV1CarriersCarrierIdOptionsQueryKey(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>,
) {
  return ['v1', '/v1/carriers/:carrier_id/options', args] as const
}

export function getV1CarriersCarrierIdOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CarriersCarrierIdOptionsQueryKey>
  >({
    queryKey: getV1CarriersCarrierIdOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.carriers[':carrier_id'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CarriersCarrierIdOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CarriersCarrierIdOptionsQueryKey>
        >
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
      ...getV1CarriersCarrierIdOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CarriersCarrierIdPackagesQueryKey(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>,
) {
  return ['v1', '/v1/carriers/:carrier_id/packages', args] as const
}

export function getV1CarriersCarrierIdPackagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CarriersCarrierIdPackagesQueryKey>
  >({
    queryKey: getV1CarriersCarrierIdPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.carriers[':carrier_id'].packages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CarriersCarrierIdPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CarriersCarrierIdPackagesQueryKey>
        >
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
      ...getV1CarriersCarrierIdPackagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CarriersCarrierIdServicesQueryKey(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>,
) {
  return ['v1', '/v1/carriers/:carrier_id/services', args] as const
}

export function getV1CarriersCarrierIdServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CarriersCarrierIdServicesQueryKey>
  >({
    queryKey: getV1CarriersCarrierIdServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.carriers[':carrier_id'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CarriersCarrierIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CarriersCarrierIdServicesQueryKey>
        >
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
      ...getV1CarriersCarrierIdServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ConnectionsCarriersCarrierNameMutationKey() {
  return ['v1', '/v1/connections/carriers/:carrier_name', 'POST'] as const
}

export function getPostV1ConnectionsCarriersCarrierNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsCarriersCarrierNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>,
    ) {
      return parseResponse(client.v1.connections.carriers[':carrier_name'].$post(args, options))
    },
  })
}

export function createPostV1ConnectionsCarriersCarrierName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectionsCarriersCarrierNameMutationOptions<
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

export function getDeleteV1ConnectionsCarriersCarrierNameCarrierIdMutationKey() {
  return ['v1', '/v1/connections/carriers/:carrier_name/:carrier_id', 'DELETE'] as const
}

export function getDeleteV1ConnectionsCarriersCarrierNameCarrierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectionsCarriersCarrierNameCarrierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.connections.carriers[':carrier_name'][':carrier_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ConnectionsCarriersCarrierNameCarrierId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConnectionsCarriersCarrierNameCarrierIdMutationOptions<
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

export function getV1ConnectionsCarriersCarrierNameCarrierIdSettingsQueryKey(
  args: InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
  >,
) {
  return ['v1', '/v1/connections/carriers/:carrier_name/:carrier_id/settings', args] as const
}

export function getV1ConnectionsCarriersCarrierNameCarrierIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectionsCarriersCarrierNameCarrierIdSettingsQueryKey>
  >({
    queryKey: getV1ConnectionsCarriersCarrierNameCarrierIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connections.carriers[':carrier_name'][':carrier_id'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConnectionsCarriersCarrierNameCarrierIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConnectionsCarriersCarrierNameCarrierIdSettingsQueryKey>
        >
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
      ...getV1ConnectionsCarriersCarrierNameCarrierIdSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ConnectionsCarriersCarrierNameCarrierIdSettingsMutationKey() {
  return ['v1', '/v1/connections/carriers/:carrier_name/:carrier_id/settings', 'PUT'] as const
}

export function getPutV1ConnectionsCarriersCarrierNameCarrierIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConnectionsCarriersCarrierNameCarrierIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.connections.carriers[':carrier_name'][':carrier_id'].settings.$put(args, options),
      )
    },
  })
}

export function createPutV1ConnectionsCarriersCarrierNameCarrierIdSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConnectionsCarriersCarrierNameCarrierIdSettingsMutationOptions<
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

export function getPostV1ConnectionsInsuranceShipsuranceMutationKey() {
  return ['v1', '/v1/connections/insurance/shipsurance', 'POST'] as const
}

export function getPostV1ConnectionsInsuranceShipsuranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.insurance.shipsurance.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.connections.insurance.shipsurance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectionsInsuranceShipsuranceMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.connections.insurance.shipsurance.$post>,
    ) {
      return parseResponse(client.v1.connections.insurance.shipsurance.$post(args, options))
    },
  })
}

export function createPostV1ConnectionsInsuranceShipsurance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.connections.insurance.shipsurance.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.connections.insurance.shipsurance.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConnectionsInsuranceShipsuranceMutationOptions<
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

export function getDeleteV1ConnectionsInsuranceShipsuranceMutationKey() {
  return ['v1', '/v1/connections/insurance/shipsurance', 'DELETE'] as const
}

export function getDeleteV1ConnectionsInsuranceShipsuranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.insurance.shipsurance.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectionsInsuranceShipsuranceMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.connections.insurance.shipsurance.$delete(undefined, options))
    },
  })
}

export function createDeleteV1ConnectionsInsuranceShipsurance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.connections.insurance.shipsurance.$delete>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConnectionsInsuranceShipsuranceMutationOptions<
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

export function getV1DownloadsDirSubdirFilenameQueryKey(
  args: InferRequestType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>,
) {
  return ['v1', '/v1/downloads/:dir/:subdir/:filename', args] as const
}

export function getV1DownloadsDirSubdirFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DownloadsDirSubdirFilenameQueryKey>
  >({
    queryKey: getV1DownloadsDirSubdirFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.downloads[':dir'][':subdir'][':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DownloadsDirSubdirFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1DownloadsDirSubdirFilenameQueryKey>
        >
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
      ...getV1DownloadsDirSubdirFilenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1EnvironmentWebhooksQueryKey() {
  return ['v1', '/v1/environment/webhooks'] as const
}

export function getV1EnvironmentWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentWebhooksQueryKey>
  >({
    queryKey: getV1EnvironmentWebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.environment.webhooks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EnvironmentWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1EnvironmentWebhooksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EnvironmentWebhooksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1EnvironmentWebhooksMutationKey() {
  return ['v1', '/v1/environment/webhooks', 'POST'] as const
}

export function getPostV1EnvironmentWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.environment.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EnvironmentWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.environment.webhooks.$post>) {
      return parseResponse(client.v1.environment.webhooks.$post(args, options))
    },
  })
}

export function createPostV1EnvironmentWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.environment.webhooks.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1EnvironmentWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1EnvironmentWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>,
) {
  return ['v1', '/v1/environment/webhooks/:webhook_id', args] as const
}

export function getV1EnvironmentWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentWebhooksWebhookIdQueryKey>
  >({
    queryKey: getV1EnvironmentWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.environment.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EnvironmentWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1EnvironmentWebhooksWebhookIdQueryKey>
        >
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
      ...getV1EnvironmentWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1EnvironmentWebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/environment/webhooks/:webhook_id', 'PUT'] as const
}

export function getPutV1EnvironmentWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EnvironmentWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>,
    ) {
      return parseResponse(client.v1.environment.webhooks[':webhook_id'].$put(args, options))
    },
  })
}

export function createPutV1EnvironmentWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1EnvironmentWebhooksWebhookIdMutationOptions<
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

export function getDeleteV1EnvironmentWebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/environment/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteV1EnvironmentWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EnvironmentWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>,
    ) {
      return parseResponse(client.v1.environment.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1EnvironmentWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1EnvironmentWebhooksWebhookIdMutationOptions<
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

export function getPatchV1InsuranceShipsuranceAddFundsMutationKey() {
  return ['v1', '/v1/insurance/shipsurance/add_funds', 'PATCH'] as const
}

export function getPatchV1InsuranceShipsuranceAddFundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.insurance.shipsurance.add_funds.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.insurance.shipsurance.add_funds.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1InsuranceShipsuranceAddFundsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v1.insurance.shipsurance.add_funds.$patch>,
    ) {
      return parseResponse(client.v1.insurance.shipsurance.add_funds.$patch(args, options))
    },
  })
}

export function createPatchV1InsuranceShipsuranceAddFunds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.insurance.shipsurance.add_funds.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.insurance.shipsurance.add_funds.$patch>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1InsuranceShipsuranceAddFundsMutationOptions<
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

export function getV1InsuranceShipsuranceBalanceQueryKey() {
  return ['v1', '/v1/insurance/shipsurance/balance'] as const
}

export function getV1InsuranceShipsuranceBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.insurance.shipsurance.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.insurance.shipsurance.balance.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1InsuranceShipsuranceBalanceQueryKey>
  >({
    queryKey: getV1InsuranceShipsuranceBalanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.insurance.shipsurance.balance.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1InsuranceShipsuranceBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.insurance.shipsurance.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.insurance.shipsurance.balance.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1InsuranceShipsuranceBalanceQueryKey>
        >
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
      ...getV1InsuranceShipsuranceBalanceQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1LabelsQueryKey(args: InferRequestType<typeof client.v1.labels.$get>) {
  return ['v1', '/v1/labels', args] as const
}

export function getV1LabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LabelsQueryKey>
  >({
    queryKey: getV1LabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Labels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.labels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1LabelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1LabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1LabelsMutationKey() {
  return ['v1', '/v1/labels', 'POST'] as const
}

export function getPostV1LabelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.labels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LabelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.labels.$post>) {
      return parseResponse(client.v1.labels.$post(args, options))
    },
  })
}

export function createPostV1Labels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.labels.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1LabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1LabelsExternalShipmentIdExternalShipmentIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
  >,
) {
  return ['v1', '/v1/labels/external_shipment_id/:external_shipment_id', args] as const
}

export function getV1LabelsExternalShipmentIdExternalShipmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LabelsExternalShipmentIdExternalShipmentIdQueryKey>
  >({
    queryKey: getV1LabelsExternalShipmentIdExternalShipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.labels.external_shipment_id[':external_shipment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1LabelsExternalShipmentIdExternalShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1LabelsExternalShipmentIdExternalShipmentIdQueryKey>
        >
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
      ...getV1LabelsExternalShipmentIdExternalShipmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1LabelsRatesRateIdMutationKey() {
  return ['v1', '/v1/labels/rates/:rate_id', 'POST'] as const
}

export function getPostV1LabelsRatesRateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels.rates)[':rate_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.labels.rates)[':rate_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LabelsRatesRateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.labels.rates)[':rate_id']['$post']>) {
      return parseResponse(client.v1.labels.rates[':rate_id'].$post(args, options))
    },
  })
}

export function createPostV1LabelsRatesRateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.labels.rates)[':rate_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.labels.rates)[':rate_id']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1LabelsRatesRateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1LabelsShipmentShipmentIdMutationKey() {
  return ['v1', '/v1/labels/shipment/:shipment_id', 'POST'] as const
}

export function getPostV1LabelsShipmentShipmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LabelsShipmentShipmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']>,
    ) {
      return parseResponse(client.v1.labels.shipment[':shipment_id'].$post(args, options))
    },
  })
}

export function createPostV1LabelsShipmentShipmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1LabelsShipmentShipmentIdMutationOptions<
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

export function getV1LabelsLabelIdQueryKey(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['$get']>,
) {
  return ['v1', '/v1/labels/:label_id', args] as const
}

export function getV1LabelsLabelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LabelsLabelIdQueryKey>
  >({
    queryKey: getV1LabelsLabelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.labels[':label_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1LabelsLabelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.labels)[':label_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1LabelsLabelIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1LabelsLabelIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1LabelsLabelIdReturnMutationKey() {
  return ['v1', '/v1/labels/:label_id/return', 'POST'] as const
}

export function getPostV1LabelsLabelIdReturnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['return']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.labels)[':label_id']['return']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LabelsLabelIdReturnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.labels)[':label_id']['return']['$post']>,
    ) {
      return parseResponse(client.v1.labels[':label_id'].return.$post(args, options))
    },
  })
}

export function createPostV1LabelsLabelIdReturn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['return']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.labels)[':label_id']['return']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1LabelsLabelIdReturnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1LabelsLabelIdTrackQueryKey(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['track']['$get']>,
) {
  return ['v1', '/v1/labels/:label_id/track', args] as const
}

export function getV1LabelsLabelIdTrackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['track']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['track']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['track']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LabelsLabelIdTrackQueryKey>
  >({
    queryKey: getV1LabelsLabelIdTrackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.labels[':label_id'].track.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1LabelsLabelIdTrack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['track']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.labels)[':label_id']['track']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['track']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1LabelsLabelIdTrackQueryKey>
        >
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
      ...getV1LabelsLabelIdTrackQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1LabelsLabelIdVoidMutationKey() {
  return ['v1', '/v1/labels/:label_id/void', 'PUT'] as const
}

export function getPutV1LabelsLabelIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['void']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.labels)[':label_id']['void']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1LabelsLabelIdVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.labels)[':label_id']['void']['$put']>,
    ) {
      return parseResponse(client.v1.labels[':label_id'].void.$put(args, options))
    },
  })
}

export function createPutV1LabelsLabelIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['void']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.labels)[':label_id']['void']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1LabelsLabelIdVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ManifestsQueryKey(args: InferRequestType<typeof client.v1.manifests.$get>) {
  return ['v1', '/v1/manifests', args] as const
}

export function getV1ManifestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.manifests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ManifestsQueryKey>
  >({
    queryKey: getV1ManifestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.manifests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Manifests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.manifests.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1ManifestsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ManifestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ManifestsMutationKey() {
  return ['v1', '/v1/manifests', 'POST'] as const
}

export function getPostV1ManifestsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.manifests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ManifestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.manifests.$post>) {
      return parseResponse(client.v1.manifests.$post(args, options))
    },
  })
}

export function createPostV1Manifests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.manifests.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ManifestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ManifestsRequestsManifestRequestIdQueryKey(
  args: InferRequestType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>,
) {
  return ['v1', '/v1/manifests/requests/:manifest_request_id', args] as const
}

export function getV1ManifestsRequestsManifestRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ManifestsRequestsManifestRequestIdQueryKey>
  >({
    queryKey: getV1ManifestsRequestsManifestRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.manifests.requests[':manifest_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ManifestsRequestsManifestRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.manifests.requests)[':manifest_request_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ManifestsRequestsManifestRequestIdQueryKey>
        >
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
      ...getV1ManifestsRequestsManifestRequestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ManifestsManifestIdQueryKey(
  args: InferRequestType<(typeof client.v1.manifests)[':manifest_id']['$get']>,
) {
  return ['v1', '/v1/manifests/:manifest_id', args] as const
}

export function getV1ManifestsManifestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.manifests)[':manifest_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.manifests)[':manifest_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.manifests)[':manifest_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ManifestsManifestIdQueryKey>
  >({
    queryKey: getV1ManifestsManifestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.manifests[':manifest_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ManifestsManifestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.manifests)[':manifest_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.manifests)[':manifest_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.manifests)[':manifest_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ManifestsManifestIdQueryKey>
        >
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
      ...getV1ManifestsManifestIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PackagesQueryKey() {
  return ['v1', '/v1/packages'] as const
}

export function getV1PackagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PackagesQueryKey>
  >({
    queryKey: getV1PackagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.packages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Packages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1PackagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PackagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1PackagesMutationKey() {
  return ['v1', '/v1/packages', 'POST'] as const
}

export function getPostV1PackagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.packages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PackagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.packages.$post>) {
      return parseResponse(client.v1.packages.$post(args, options))
    },
  })
}

export function createPostV1Packages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.packages.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PackagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PackagesPackageIdQueryKey(
  args: InferRequestType<(typeof client.v1.packages)[':package_id']['$get']>,
) {
  return ['v1', '/v1/packages/:package_id', args] as const
}

export function getV1PackagesPackageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.packages)[':package_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PackagesPackageIdQueryKey>
  >({
    queryKey: getV1PackagesPackageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.packages[':package_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PackagesPackageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.packages)[':package_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PackagesPackageIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PackagesPackageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1PackagesPackageIdMutationKey() {
  return ['v1', '/v1/packages/:package_id', 'PUT'] as const
}

export function getPutV1PackagesPackageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.packages)[':package_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PackagesPackageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.packages)[':package_id']['$put']>) {
      return parseResponse(client.v1.packages[':package_id'].$put(args, options))
    },
  })
}

export function createPutV1PackagesPackageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.packages)[':package_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1PackagesPackageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1PackagesPackageIdMutationKey() {
  return ['v1', '/v1/packages/:package_id', 'DELETE'] as const
}

export function getDeleteV1PackagesPackageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.packages)[':package_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PackagesPackageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.packages)[':package_id']['$delete']>,
    ) {
      return parseResponse(client.v1.packages[':package_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1PackagesPackageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.packages)[':package_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1PackagesPackageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PickupsQueryKey(args: InferRequestType<typeof client.v1.pickups.$get>) {
  return ['v1', '/v1/pickups', args] as const
}

export function getV1PickupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.pickups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PickupsQueryKey>
  >({
    queryKey: getV1PickupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.pickups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Pickups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.pickups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1PickupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PickupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1PickupsMutationKey() {
  return ['v1', '/v1/pickups', 'POST'] as const
}

export function getPostV1PickupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.pickups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PickupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.pickups.$post>) {
      return parseResponse(client.v1.pickups.$post(args, options))
    },
  })
}

export function createPostV1Pickups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.pickups.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PickupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PickupsPickupIdQueryKey(
  args: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$get']>,
) {
  return ['v1', '/v1/pickups/:pickup_id', args] as const
}

export function getV1PickupsPickupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PickupsPickupIdQueryKey>
  >({
    queryKey: getV1PickupsPickupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.pickups[':pickup_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PickupsPickupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PickupsPickupIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PickupsPickupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1PickupsPickupIdMutationKey() {
  return ['v1', '/v1/pickups/:pickup_id', 'DELETE'] as const
}

export function getDeleteV1PickupsPickupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PickupsPickupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$delete']>) {
      return parseResponse(client.v1.pickups[':pickup_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1PickupsPickupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1PickupsPickupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1RatesMutationKey() {
  return ['v1', '/v1/rates', 'POST'] as const
}

export function getPostV1RatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.rates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rates.$post>) {
      return parseResponse(client.v1.rates.$post(args, options))
    },
  })
}

export function createPostV1Rates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.rates.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1RatesBulkMutationKey() {
  return ['v1', '/v1/rates/bulk', 'POST'] as const
}

export function getPostV1RatesBulkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.rates.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RatesBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rates.bulk.$post>) {
      return parseResponse(client.v1.rates.bulk.$post(args, options))
    },
  })
}

export function createPostV1RatesBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.bulk.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.rates.bulk.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RatesBulkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1RatesEstimateMutationKey() {
  return ['v1', '/v1/rates/estimate', 'POST'] as const
}

export function getPostV1RatesEstimateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.estimate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.rates.estimate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RatesEstimateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rates.estimate.$post>) {
      return parseResponse(client.v1.rates.estimate.$post(args, options))
    },
  })
}

export function createPostV1RatesEstimate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.estimate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.rates.estimate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1RatesEstimateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1RatesRateIdQueryKey(
  args: InferRequestType<(typeof client.v1.rates)[':rate_id']['$get']>,
) {
  return ['v1', '/v1/rates/:rate_id', args] as const
}

export function getV1RatesRateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.rates)[':rate_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.rates)[':rate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.rates)[':rate_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RatesRateIdQueryKey>
  >({
    queryKey: getV1RatesRateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.rates[':rate_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1RatesRateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.rates)[':rate_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.rates)[':rate_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.rates)[':rate_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1RatesRateIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1RatesRateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ServicePointsListMutationKey() {
  return ['v1', '/v1/service_points/list', 'POST'] as const
}

export function getPostV1ServicePointsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.service_points.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.service_points.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ServicePointsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.service_points.list.$post>) {
      return parseResponse(client.v1.service_points.list.$post(args, options))
    },
  })
}

export function createPostV1ServicePointsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.service_points.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.service_points.list.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ServicePointsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ServicePointsCarrierCodeCountryCodeServicePointIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
  >,
) {
  return ['v1', '/v1/service_points/:carrier_code/:country_code/:service_point_id', args] as const
}

export function getV1ServicePointsCarrierCodeCountryCodeServicePointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ServicePointsCarrierCodeCountryCodeServicePointIdQueryKey>
  >({
    queryKey: getV1ServicePointsCarrierCodeCountryCodeServicePointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.service_points[':carrier_code'][':country_code'][':service_point_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ServicePointsCarrierCodeCountryCodeServicePointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ServicePointsCarrierCodeCountryCodeServicePointIdQueryKey>
        >
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
      ...getV1ServicePointsCarrierCodeCountryCodeServicePointIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1ShipmentsQueryKey(args: InferRequestType<typeof client.v1.shipments.$get>) {
  return ['v1', '/v1/shipments', args] as const
}

export function getV1ShipmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.shipments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ShipmentsQueryKey>
  >({
    queryKey: getV1ShipmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.shipments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Shipments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.shipments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1ShipmentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ShipmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ShipmentsMutationKey() {
  return ['v1', '/v1/shipments', 'POST'] as const
}

export function getPostV1ShipmentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.shipments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShipmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.shipments.$post>) {
      return parseResponse(client.v1.shipments.$post(args, options))
    },
  })
}

export function createPostV1Shipments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.shipments.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ShipmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ShipmentsExternalShipmentIdExternalShipmentIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
  >,
) {
  return ['v1', '/v1/shipments/external_shipment_id/:external_shipment_id', args] as const
}

export function getV1ShipmentsExternalShipmentIdExternalShipmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShipmentsExternalShipmentIdExternalShipmentIdQueryKey>
  >({
    queryKey: getV1ShipmentsExternalShipmentIdExternalShipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.shipments.external_shipment_id[':external_shipment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ShipmentsExternalShipmentIdExternalShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ShipmentsExternalShipmentIdExternalShipmentIdQueryKey>
        >
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
      ...getV1ShipmentsExternalShipmentIdExternalShipmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ShipmentsRecognizeMutationKey() {
  return ['v1', '/v1/shipments/recognize', 'PUT'] as const
}

export function getPutV1ShipmentsRecognizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.recognize.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.shipments.recognize.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ShipmentsRecognizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.shipments.recognize.$put>) {
      return parseResponse(client.v1.shipments.recognize.$put(args, options))
    },
  })
}

export function createPutV1ShipmentsRecognize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.recognize.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.shipments.recognize.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ShipmentsRecognizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ShipmentsShipmentIdQueryKey(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$get']>,
) {
  return ['v1', '/v1/shipments/:shipment_id', args] as const
}

export function getV1ShipmentsShipmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShipmentsShipmentIdQueryKey>
  >({
    queryKey: getV1ShipmentsShipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.shipments[':shipment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ShipmentsShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ShipmentsShipmentIdQueryKey>
        >
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
      ...getV1ShipmentsShipmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ShipmentsShipmentIdMutationKey() {
  return ['v1', '/v1/shipments/:shipment_id', 'PUT'] as const
}

export function getPutV1ShipmentsShipmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ShipmentsShipmentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$put']>) {
      return parseResponse(client.v1.shipments[':shipment_id'].$put(args, options))
    },
  })
}

export function createPutV1ShipmentsShipmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ShipmentsShipmentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1ShipmentsShipmentIdCancelMutationKey() {
  return ['v1', '/v1/shipments/:shipment_id/cancel', 'PUT'] as const
}

export function getPutV1ShipmentsShipmentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ShipmentsShipmentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>,
    ) {
      return parseResponse(client.v1.shipments[':shipment_id'].cancel.$put(args, options))
    },
  })
}

export function createPutV1ShipmentsShipmentIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ShipmentsShipmentIdCancelMutationOptions<
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

export function getV1ShipmentsShipmentIdRatesQueryKey(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>,
) {
  return ['v1', '/v1/shipments/:shipment_id/rates', args] as const
}

export function getV1ShipmentsShipmentIdRatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShipmentsShipmentIdRatesQueryKey>
  >({
    queryKey: getV1ShipmentsShipmentIdRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.shipments[':shipment_id'].rates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ShipmentsShipmentIdRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ShipmentsShipmentIdRatesQueryKey>
        >
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
      ...getV1ShipmentsShipmentIdRatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ShipmentsShipmentIdTagsTagNameMutationKey() {
  return ['v1', '/v1/shipments/:shipment_id/tags/:tag_name', 'POST'] as const
}

export function getPostV1ShipmentsShipmentIdTagsTagNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShipmentsShipmentIdTagsTagNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.shipments[':shipment_id'].tags[':tag_name'].$post(args, options),
      )
    },
  })
}

export function createPostV1ShipmentsShipmentIdTagsTagName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ShipmentsShipmentIdTagsTagNameMutationOptions<
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

export function getDeleteV1ShipmentsShipmentIdTagsTagNameMutationKey() {
  return ['v1', '/v1/shipments/:shipment_id/tags/:tag_name', 'DELETE'] as const
}

export function getDeleteV1ShipmentsShipmentIdTagsTagNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ShipmentsShipmentIdTagsTagNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.shipments[':shipment_id'].tags[':tag_name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ShipmentsShipmentIdTagsTagName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ShipmentsShipmentIdTagsTagNameMutationOptions<
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

export function getV1TagsQueryKey() {
  return ['v1', '/v1/tags'] as const
}

export function getV1TagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TagsQueryKey>
  >({
    queryKey: getV1TagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1TagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TagsTagNameMutationKey() {
  return ['v1', '/v1/tags/:tag_name', 'POST'] as const
}

export function getPostV1TagsTagNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tag_name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tags)[':tag_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TagsTagNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':tag_name']['$post']>) {
      return parseResponse(client.v1.tags[':tag_name'].$post(args, options))
    },
  })
}

export function createPostV1TagsTagName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tags)[':tag_name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tags)[':tag_name']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TagsTagNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1TagsTagNameMutationKey() {
  return ['v1', '/v1/tags/:tag_name', 'DELETE'] as const
}

export function getDeleteV1TagsTagNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tag_name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':tag_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TagsTagNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tags)[':tag_name']['$delete']>) {
      return parseResponse(client.v1.tags[':tag_name'].$delete(args, options))
    },
  })
}

export function createDeleteV1TagsTagName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':tag_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':tag_name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TagsTagNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV1TagsTagNameNewTagNameMutationKey() {
  return ['v1', '/v1/tags/:tag_name/:new_tag_name', 'PUT'] as const
}

export function getPutV1TagsTagNameNewTagNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1TagsTagNameNewTagNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']>,
    ) {
      return parseResponse(client.v1.tags[':tag_name'][':new_tag_name'].$put(args, options))
    },
  })
}

export function createPutV1TagsTagNameNewTagName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1TagsTagNameNewTagNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TokensEphemeralMutationKey() {
  return ['v1', '/v1/tokens/ephemeral', 'POST'] as const
}

export function getPostV1TokensEphemeralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.ephemeral.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.tokens.ephemeral.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokensEphemeralMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tokens.ephemeral.$post>) {
      return parseResponse(client.v1.tokens.ephemeral.$post(args, options))
    },
  })
}

export function createPostV1TokensEphemeral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.ephemeral.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.tokens.ephemeral.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TokensEphemeralMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TrackingQueryKey(args: InferRequestType<typeof client.v1.tracking.$get>) {
  return ['v1', '/v1/tracking', args] as const
}

export function getV1TrackingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tracking.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TrackingQueryKey>
  >({
    queryKey: getV1TrackingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tracking.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Tracking<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.tracking.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1TrackingQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TrackingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1TrackingStartMutationKey() {
  return ['v1', '/v1/tracking/start', 'POST'] as const
}

export function getPostV1TrackingStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.start.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.tracking.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TrackingStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tracking.start.$post>) {
      return parseResponse(client.v1.tracking.start.$post(args, options))
    },
  })
}

export function createPostV1TrackingStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.start.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.tracking.start.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TrackingStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TrackingStopMutationKey() {
  return ['v1', '/v1/tracking/stop', 'POST'] as const
}

export function getPostV1TrackingStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.stop.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.tracking.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TrackingStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tracking.stop.$post>) {
      return parseResponse(client.v1.tracking.stop.$post(args, options))
    },
  })
}

export function createPostV1TrackingStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.stop.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.tracking.stop.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TrackingStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1WarehousesQueryKey() {
  return ['v1', '/v1/warehouses'] as const
}

export function getV1WarehousesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehousesQueryKey>
  >({
    queryKey: getV1WarehousesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.warehouses.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Warehouses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1WarehousesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WarehousesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1WarehousesMutationKey() {
  return ['v1', '/v1/warehouses', 'POST'] as const
}

export function getPostV1WarehousesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.warehouses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WarehousesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.warehouses.$post>) {
      return parseResponse(client.v1.warehouses.$post(args, options))
    },
  })
}

export function createPostV1Warehouses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.warehouses.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WarehousesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1WarehousesWarehouseIdQueryKey(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>,
) {
  return ['v1', '/v1/warehouses/:warehouse_id', args] as const
}

export function getV1WarehousesWarehouseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WarehousesWarehouseIdQueryKey>
  >({
    queryKey: getV1WarehousesWarehouseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.warehouses[':warehouse_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1WarehousesWarehouseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1WarehousesWarehouseIdQueryKey>
        >
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
      ...getV1WarehousesWarehouseIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1WarehousesWarehouseIdMutationKey() {
  return ['v1', '/v1/warehouses/:warehouse_id', 'PUT'] as const
}

export function getPutV1WarehousesWarehouseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WarehousesWarehouseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$put']>,
    ) {
      return parseResponse(client.v1.warehouses[':warehouse_id'].$put(args, options))
    },
  })
}

export function createPutV1WarehousesWarehouseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WarehousesWarehouseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1WarehousesWarehouseIdMutationKey() {
  return ['v1', '/v1/warehouses/:warehouse_id', 'DELETE'] as const
}

export function getDeleteV1WarehousesWarehouseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WarehousesWarehouseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']>,
    ) {
      return parseResponse(client.v1.warehouses[':warehouse_id'].$delete(args, options))
    },
  })
}

export function createDeleteV1WarehousesWarehouseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1WarehousesWarehouseIdMutationOptions<
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

export function getPutV1WarehousesWarehouseIdSettingsMutationKey() {
  return ['v1', '/v1/warehouses/:warehouse_id/settings', 'PUT'] as const
}

export function getPutV1WarehousesWarehouseIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WarehousesWarehouseIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>,
    ) {
      return parseResponse(client.v1.warehouses[':warehouse_id'].settings.$put(args, options))
    },
  })
}

export function createPutV1WarehousesWarehouseIdSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WarehousesWarehouseIdSettingsMutationOptions<
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
