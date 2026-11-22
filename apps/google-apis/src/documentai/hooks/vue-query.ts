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

export function usePostV1beta3HumanReviewConfigReviewDocument<
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
                  ReturnType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>,
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
  const mutationDefaults = getPostV1beta3HumanReviewConfigReviewDocumentMutationOptions<
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

export function getV1beta3NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3)[':name']['$get']>>,
) {
  return ['v1beta3', '/v1beta3/:name', toValue(args)] as const
}

export function getV1beta3NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta3NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1beta3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta3)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta3)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1beta3NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta3NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>>,
) {
  return ['v1beta3', '/v1beta3/:name/locations', toValue(args)] as const
}

export function getV1beta3NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3NameLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1beta3NameBatchProcess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3NameBatchProcessMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1beta3NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1beta3NameDeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3NameDeployMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1beta3NameDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3NameDisableMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1beta3NameEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3NameEnableMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1beta3NameProcess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3NameProcessMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1beta3NameUndeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3NameUndeployMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta3ParentEvaluationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/:parent/evaluations', toValue(args)] as const
}

export function getV1beta3ParentEvaluationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3ParentEvaluationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3[':parent'].evaluations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3ParentEvaluations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3ParentEvaluationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentEvaluationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3ParentEvaluationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3[':parent'].evaluations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3ParentProcessorTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/:parent/processorTypes', toValue(args)] as const
}

export function getV1beta3ParentProcessorTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3ParentProcessorTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3[':parent'].processorTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3ParentProcessorTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3ParentProcessorTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentProcessorTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3ParentProcessorTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3[':parent'].processorTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3ParentProcessorVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/:parent/processorVersions', toValue(args)] as const
}

export function getV1beta3ParentProcessorVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3ParentProcessorVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3[':parent'].processorVersions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3ParentProcessorVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3ParentProcessorVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentProcessorVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3ParentProcessorVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3[':parent'].processorVersions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1beta3ParentProcessorVersionsImportProcessorVersion<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostV1beta3ParentProcessorVersionsImportProcessorVersionMutationOptions<
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

export function usePostV1beta3ParentProcessorVersionsTrain<
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
                  ReturnType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>,
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
  const mutationDefaults = getPostV1beta3ParentProcessorVersionsTrainMutationOptions<
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

export function getV1beta3ParentProcessorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/:parent/processors', toValue(args)] as const
}

export function getV1beta3ParentProcessorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3ParentProcessorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3[':parent'].processors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3ParentProcessors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3ParentProcessorsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3)[':parent']['processors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentProcessorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3ParentProcessorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3[':parent'].processors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1beta3ParentProcessors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3ParentProcessorsMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta3ParentFetchProcessorTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/:parent:fetchProcessorTypes', toValue(args)] as const
}

export function getV1beta3ParentFetchProcessorTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3ParentFetchProcessorTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3[':parent:fetchProcessorTypes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3ParentFetchProcessorTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3ParentFetchProcessorTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3ParentFetchProcessorTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3ParentFetchProcessorTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3[':parent:fetchProcessorTypes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1beta3ProcessorVersionEvaluateProcessorVersion<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta3ProcessorVersionEvaluateProcessorVersionMutationOptions<
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

export function usePostV1beta3ProcessorSetDefaultProcessorVersion<
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
                  ReturnType<
                    (typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']
          >,
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
  const mutationDefaults = getPostV1beta3ProcessorSetDefaultProcessorVersionMutationOptions<
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
