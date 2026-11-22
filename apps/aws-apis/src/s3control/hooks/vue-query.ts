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

export function getV20180820Key() {
  return ['v20180820'] as const
}

export function getV20180820AccesspointNameXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/accesspoint/:name#x-amz-account-id', keyArgs] as const
}

export function getV20180820AccesspointNameXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820AccesspointNameXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.accesspoint[':name#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820AccesspointNameXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>
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
                    (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820AccesspointNameXAmzAccountIdQueryKey>
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
            ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointNameXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820AccesspointNameXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.accesspoint[':name#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820AccesspointNameXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/accesspoint/:name#x-amz-account-id', 'PUT'] as const
}

export function getPutV20180820AccesspointNameXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820AccesspointNameXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspoint[':name#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820AccesspointNameXAmzAccountId<
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
                    (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$put']>,
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
  const mutationDefaults = getPutV20180820AccesspointNameXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820AccesspointNameXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/accesspoint/:name#x-amz-account-id', 'DELETE'] as const
}

export function getDeleteV20180820AccesspointNameXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820AccesspointNameXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspoint[':name#x-amz-account-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20180820AccesspointNameXAmzAccountId<
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
                    (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$delete']
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
  const mutationDefaults = getDeleteV20180820AccesspointNameXAmzAccountIdMutationOptions<
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

export function getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820AccesspointforobjectlambdaNameXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820AccesspointforobjectlambdaNameXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name#x-amz-account-id',
    'PUT',
  ] as const
}

export function getPutV20180820AccesspointforobjectlambdaNameXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820AccesspointforobjectlambdaNameXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820AccesspointforobjectlambdaNameXAmzAccountId<
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$put']
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
    getPutV20180820AccesspointforobjectlambdaNameXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820AccesspointforobjectlambdaNameXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name#x-amz-account-id',
    'DELETE',
  ] as const
}

export function getDeleteV20180820AccesspointforobjectlambdaNameXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820AccesspointforobjectlambdaNameXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV20180820AccesspointforobjectlambdaNameXAmzAccountId<
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$delete']
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
    getDeleteV20180820AccesspointforobjectlambdaNameXAmzAccountIdMutationOptions<
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

export function getPutV20180820BucketNameMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name', 'PUT'] as const
}

export function getPutV20180820BucketNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v20180820.bucket)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820.bucket)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820BucketNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v20180820.bucket)[':name']['$put']>) {
      return parseResponse(client.v20180820.bucket[':name'].$put(args, options))
    },
  })
}

export function usePutV20180820BucketName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20180820.bucket)[':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20180820.bucket)[':name']['$put']>,
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
  const mutationDefaults = getPutV20180820BucketNameMutationOptions<TError, TOnMutateResult>(
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

export function getV20180820JobsXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/jobs#x-amz-account-id', keyArgs] as const
}

export function getV20180820JobsXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820JobsXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820['jobs#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820JobsXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV20180820JobsXAmzAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820JobsXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820JobsXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820['jobs#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV20180820JobsXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/jobs#x-amz-account-id', 'POST'] as const
}

export function getPostV20180820JobsXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV20180820JobsXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']>,
    ) {
      return parseResponse(client.v20180820['jobs#x-amz-account-id'].$post(args, options))
    },
  })
}

export function usePostV20180820JobsXAmzAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']>,
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
  const mutationDefaults = getPostV20180820JobsXAmzAccountIdMutationOptions<
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

export function getPostV20180820AsyncRequestsMrapCreateXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/async-requests/mrap/create#x-amz-account-id', 'POST'] as const
}

export function getPostV20180820AsyncRequestsMrapCreateXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820)['async-requests']['mrap']['create#x-amz-account-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap']['create#x-amz-account-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV20180820AsyncRequestsMrapCreateXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820)['async-requests']['mrap']['create#x-amz-account-id']['$post']
      >,
    ) {
      return parseResponse(
        client.v20180820['async-requests'].mrap['create#x-amz-account-id'].$post(args, options),
      )
    },
  })
}

export function usePostV20180820AsyncRequestsMrapCreateXAmzAccountId<
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
                    (typeof client.v20180820)['async-requests']['mrap']['create#x-amz-account-id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820)['async-requests']['mrap']['create#x-amz-account-id']['$post']
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
  const mutationDefaults = getPostV20180820AsyncRequestsMrapCreateXAmzAccountIdMutationOptions<
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

export function getV20180820AccesspointNamePolicyXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/accesspoint/:name/policy#x-amz-account-id', keyArgs] as const
}

export function getV20180820AccesspointNamePolicyXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820AccesspointNamePolicyXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820AccesspointNamePolicyXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820AccesspointNamePolicyXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointNamePolicyXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820AccesspointNamePolicyXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820AccesspointNamePolicyXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/accesspoint/:name/policy#x-amz-account-id', 'PUT'] as const
}

export function getPutV20180820AccesspointNamePolicyXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820AccesspointNamePolicyXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820AccesspointNamePolicyXAmzAccountId<
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
                    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$put']
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
  const mutationDefaults = getPutV20180820AccesspointNamePolicyXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820AccesspointNamePolicyXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/accesspoint/:name/policy#x-amz-account-id', 'DELETE'] as const
}

export function getDeleteV20180820AccesspointNamePolicyXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820AccesspointNamePolicyXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20180820AccesspointNamePolicyXAmzAccountId<
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
                    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$delete']
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
  const mutationDefaults = getDeleteV20180820AccesspointNamePolicyXAmzAccountIdMutationOptions<
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

export function getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/policy#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/policy#x-amz-account-id',
    'PUT',
  ] as const
}

export function getPutV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId<
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$put']
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
    getPutV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/policy#x-amz-account-id',
    'DELETE',
  ] as const
}

export function getDeleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId<
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$delete']
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
    getDeleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdMutationOptions<
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

export function getV20180820BucketNameXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/bucket/:name#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNameXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820BucketNameXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.bucket[':name#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820BucketNameXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>
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
                  ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV20180820BucketNameXAmzAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820BucketNameXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820BucketNameXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.bucket[':name#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV20180820BucketNameXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name#x-amz-account-id', 'DELETE'] as const
}

export function getDeleteV20180820BucketNameXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820BucketNameXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']>,
    ) {
      return parseResponse(client.v20180820.bucket[':name#x-amz-account-id'].$delete(args, options))
    },
  })
}

export function useDeleteV20180820BucketNameXAmzAccountId<
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
                  ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']>,
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
  const mutationDefaults = getDeleteV20180820BucketNameXAmzAccountIdMutationOptions<
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

export function getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/bucket/:name/lifecycleconfiguration#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20180820BucketNameLifecycleconfigurationXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820BucketNameLifecycleconfigurationXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/bucket/:name/lifecycleconfiguration#x-amz-account-id',
    'PUT',
  ] as const
}

export function getPutV20180820BucketNameLifecycleconfigurationXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820BucketNameLifecycleconfigurationXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV20180820BucketNameLifecycleconfigurationXAmzAccountId<
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
                    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$put']
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
    getPutV20180820BucketNameLifecycleconfigurationXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820BucketNameLifecycleconfigurationXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/bucket/:name/lifecycleconfiguration#x-amz-account-id',
    'DELETE',
  ] as const
}

export function getDeleteV20180820BucketNameLifecycleconfigurationXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820BucketNameLifecycleconfigurationXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV20180820BucketNameLifecycleconfigurationXAmzAccountId<
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
                    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$delete']
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
    getDeleteV20180820BucketNameLifecycleconfigurationXAmzAccountIdMutationOptions<
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

export function getV20180820BucketNamePolicyXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/bucket/:name/policy#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNamePolicyXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820BucketNamePolicyXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.bucket[':name']['policy#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820BucketNamePolicyXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']>
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
                    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820BucketNamePolicyXAmzAccountIdQueryKey>
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
            ReturnType<(typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820BucketNamePolicyXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820BucketNamePolicyXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.bucket[':name']['policy#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820BucketNamePolicyXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name/policy#x-amz-account-id', 'PUT'] as const
}

export function getPutV20180820BucketNamePolicyXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820BucketNamePolicyXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['policy#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820BucketNamePolicyXAmzAccountId<
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
                    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$put']
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
  const mutationDefaults = getPutV20180820BucketNamePolicyXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820BucketNamePolicyXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name/policy#x-amz-account-id', 'DELETE'] as const
}

export function getDeleteV20180820BucketNamePolicyXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820BucketNamePolicyXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['policy#x-amz-account-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20180820BucketNamePolicyXAmzAccountId<
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
                    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$delete']
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
  const mutationDefaults = getDeleteV20180820BucketNamePolicyXAmzAccountIdMutationOptions<
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

export function getV20180820BucketNameReplicationXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/bucket/:name/replication#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNameReplicationXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820BucketNameReplicationXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.bucket[':name']['replication#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820BucketNameReplicationXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820BucketNameReplicationXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820BucketNameReplicationXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820BucketNameReplicationXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.bucket[':name']['replication#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820BucketNameReplicationXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name/replication#x-amz-account-id', 'PUT'] as const
}

export function getPutV20180820BucketNameReplicationXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820BucketNameReplicationXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['replication#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820BucketNameReplicationXAmzAccountId<
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
                    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$put']
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
  const mutationDefaults = getPutV20180820BucketNameReplicationXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820BucketNameReplicationXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name/replication#x-amz-account-id', 'DELETE'] as const
}

export function getDeleteV20180820BucketNameReplicationXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820BucketNameReplicationXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['replication#x-amz-account-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20180820BucketNameReplicationXAmzAccountId<
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
                    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$delete']
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
  const mutationDefaults = getDeleteV20180820BucketNameReplicationXAmzAccountIdMutationOptions<
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

export function getV20180820BucketNameTaggingXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/bucket/:name/tagging#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNameTaggingXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820BucketNameTaggingXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820BucketNameTaggingXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']>
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
                    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820BucketNameTaggingXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820BucketNameTaggingXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820BucketNameTaggingXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820BucketNameTaggingXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name/tagging#x-amz-account-id', 'PUT'] as const
}

export function getPutV20180820BucketNameTaggingXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820BucketNameTaggingXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820BucketNameTaggingXAmzAccountId<
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
                    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$put']
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
  const mutationDefaults = getPutV20180820BucketNameTaggingXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820BucketNameTaggingXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name/tagging#x-amz-account-id', 'DELETE'] as const
}

export function getDeleteV20180820BucketNameTaggingXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820BucketNameTaggingXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20180820BucketNameTaggingXAmzAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$delete']
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
  const mutationDefaults = getDeleteV20180820BucketNameTaggingXAmzAccountIdMutationOptions<
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

export function getV20180820JobsIdTaggingXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/jobs/:id/tagging#x-amz-account-id', keyArgs] as const
}

export function getV20180820JobsIdTaggingXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820JobsIdTaggingXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820JobsIdTaggingXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
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
                    (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820JobsIdTaggingXAmzAccountIdQueryKey>
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
            ReturnType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820JobsIdTaggingXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820JobsIdTaggingXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820JobsIdTaggingXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/jobs/:id/tagging#x-amz-account-id', 'PUT'] as const
}

export function getPutV20180820JobsIdTaggingXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820JobsIdTaggingXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820JobsIdTaggingXAmzAccountId<
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
                    (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']
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
  const mutationDefaults = getPutV20180820JobsIdTaggingXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820JobsIdTaggingXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/jobs/:id/tagging#x-amz-account-id', 'DELETE'] as const
}

export function getDeleteV20180820JobsIdTaggingXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820JobsIdTaggingXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20180820JobsIdTaggingXAmzAccountId<
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
                    (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$delete']
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
  const mutationDefaults = getDeleteV20180820JobsIdTaggingXAmzAccountIdMutationOptions<
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

export function getPostV20180820AsyncRequestsMrapDeleteXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/async-requests/mrap/delete#x-amz-account-id', 'POST'] as const
}

export function getPostV20180820AsyncRequestsMrapDeleteXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820)['async-requests']['mrap']['delete#x-amz-account-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap']['delete#x-amz-account-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV20180820AsyncRequestsMrapDeleteXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820)['async-requests']['mrap']['delete#x-amz-account-id']['$post']
      >,
    ) {
      return parseResponse(
        client.v20180820['async-requests'].mrap['delete#x-amz-account-id'].$post(args, options),
      )
    },
  })
}

export function usePostV20180820AsyncRequestsMrapDeleteXAmzAccountId<
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
                    (typeof client.v20180820)['async-requests']['mrap']['delete#x-amz-account-id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820)['async-requests']['mrap']['delete#x-amz-account-id']['$post']
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
  const mutationDefaults = getPostV20180820AsyncRequestsMrapDeleteXAmzAccountIdMutationOptions<
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

export function getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820ConfigurationPublicAccessBlockXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820ConfigurationPublicAccessBlockXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
    'PUT',
  ] as const
}

export function getPutV20180820ConfigurationPublicAccessBlockXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820ConfigurationPublicAccessBlockXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820ConfigurationPublicAccessBlockXAmzAccountId<
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
                    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$put']
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
    getPutV20180820ConfigurationPublicAccessBlockXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820ConfigurationPublicAccessBlockXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
    'DELETE',
  ] as const
}

export function getDeleteV20180820ConfigurationPublicAccessBlockXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820ConfigurationPublicAccessBlockXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20180820ConfigurationPublicAccessBlockXAmzAccountId<
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
                    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$delete']
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
    getDeleteV20180820ConfigurationPublicAccessBlockXAmzAccountIdMutationOptions<
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

export function getV20180820StoragelensStoragelensidXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/storagelens/:storagelensid#x-amz-account-id', keyArgs] as const
}

export function getV20180820StoragelensStoragelensidXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820StoragelensStoragelensidXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820StoragelensStoragelensidXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820StoragelensStoragelensidXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820StoragelensStoragelensidXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820StoragelensStoragelensidXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820StoragelensStoragelensidXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/storagelens/:storagelensid#x-amz-account-id', 'PUT'] as const
}

export function getPutV20180820StoragelensStoragelensidXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820StoragelensStoragelensidXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820StoragelensStoragelensidXAmzAccountId<
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
                    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$put']
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
  const mutationDefaults = getPutV20180820StoragelensStoragelensidXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820StoragelensStoragelensidXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/storagelens/:storagelensid#x-amz-account-id', 'DELETE'] as const
}

export function getDeleteV20180820StoragelensStoragelensidXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820StoragelensStoragelensidXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20180820StoragelensStoragelensidXAmzAccountId<
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
                    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$delete']
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
  const mutationDefaults = getDeleteV20180820StoragelensStoragelensidXAmzAccountIdMutationOptions<
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

export function getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/storagelens/:storagelensid/tagging#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20180820StoragelensStoragelensidTaggingXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820StoragelensStoragelensidTaggingXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/storagelens/:storagelensid/tagging#x-amz-account-id',
    'PUT',
  ] as const
}

export function getPutV20180820StoragelensStoragelensidTaggingXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820StoragelensStoragelensidTaggingXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV20180820StoragelensStoragelensidTaggingXAmzAccountId<
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
                    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$put']
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
    getPutV20180820StoragelensStoragelensidTaggingXAmzAccountIdMutationOptions<
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

export function getDeleteV20180820StoragelensStoragelensidTaggingXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/storagelens/:storagelensid/tagging#x-amz-account-id',
    'DELETE',
  ] as const
}

export function getDeleteV20180820StoragelensStoragelensidTaggingXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20180820StoragelensStoragelensidTaggingXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV20180820StoragelensStoragelensidTaggingXAmzAccountId<
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
                    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$delete']
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
    getDeleteV20180820StoragelensStoragelensidTaggingXAmzAccountIdMutationOptions<
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

export function getV20180820JobsIdXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/jobs/:id#x-amz-account-id', keyArgs] as const
}

export function getV20180820JobsIdXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820JobsIdXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.jobs[':id#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820JobsIdXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV20180820JobsIdXAmzAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820JobsIdXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820JobsIdXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.jobs[':id#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/async-requests/mrap/:request_token#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820['async-requests'].mrap[':request_token#x-amz-account-id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20180820AsyncRequestsMrapRequestTokenXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
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
                    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
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
                    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryKey>
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
              (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820['async-requests'].mrap[':request_token#x-amz-account-id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/configuration#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['configuration#x-amz-account-id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey
          >
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
              (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.accesspointforobjectlambda[':name'][
            'configuration#x-amz-account-id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/configuration#x-amz-account-id',
    'PUT',
  ] as const
}

export function getPutV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['configuration#x-amz-account-id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountId<
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$put']
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
    getPutV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdMutationOptions<
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

export function getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/accesspoint/:name/policyStatus#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.accesspoint[':name']['policyStatus#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820AccesspointNamePolicyStatusXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.accesspoint[':name']['policyStatus#x-amz-account-id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/policyStatus#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['policyStatus#x-amz-account-id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey
          >
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
              (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.accesspointforobjectlambda[':name'][
            'policyStatus#x-amz-account-id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820BucketNameVersioningXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/bucket/:name/versioning#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNameVersioningXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820BucketNameVersioningXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820BucketNameVersioningXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820BucketNameVersioningXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820BucketNameVersioningXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820BucketNameVersioningXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20180820BucketNameVersioningXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/bucket/:name/versioning#x-amz-account-id', 'PUT'] as const
}

export function getPutV20180820BucketNameVersioningXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20180820BucketNameVersioningXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$put']
      >,
    ) {
      return parseResponse(
        client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$put(args, options),
      )
    },
  })
}

export function usePutV20180820BucketNameVersioningXAmzAccountId<
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
                    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$put']
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
  const mutationDefaults = getPutV20180820BucketNameVersioningXAmzAccountIdMutationOptions<
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

export function getV20180820MrapInstancesNameXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/mrap/instances/:name#x-amz-account-id', keyArgs] as const
}

export function getV20180820MrapInstancesNameXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820MrapInstancesNameXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.mrap.instances[':name#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820MrapInstancesNameXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
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
                    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820MrapInstancesNameXAmzAccountIdQueryKey>
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
            ReturnType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820MrapInstancesNameXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820MrapInstancesNameXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.mrap.instances[':name#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/mrap/instances/:name/policy#x-amz-account-id', keyArgs] as const
}

export function getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.mrap.instances[':name']['policy#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820MrapInstancesNamePolicyXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.mrap.instances[':name']['policy#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20180820',
    '/v20180820/mrap/instances/:name/policystatus#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.mrap.instances[':name']['policystatus#x-amz-account-id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20180820MrapInstancesNamePolicystatusXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.mrap.instances[':name']['policystatus#x-amz-account-id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/mrap/instances/:mrap/routes#x-amz-account-id', keyArgs] as const
}

export function getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820MrapInstancesMrapRoutesXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
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
                    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryKey>
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
              (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV20180820MrapInstancesMrapRoutesXAmzAccountIdMutationKey() {
  return ['v20180820', '/v20180820/mrap/instances/:mrap/routes#x-amz-account-id', 'PATCH'] as const
}

export function getPatchV20180820MrapInstancesMrapRoutesXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV20180820MrapInstancesMrapRoutesXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV20180820MrapInstancesMrapRoutesXAmzAccountId<
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
                    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$patch']
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
  const mutationDefaults = getPatchV20180820MrapInstancesMrapRoutesXAmzAccountIdMutationOptions<
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

export function getV20180820AccesspointXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/accesspoint#x-amz-account-id', keyArgs] as const
}

export function getV20180820AccesspointXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820AccesspointXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820['accesspoint#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820AccesspointXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>
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
                  ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV20180820AccesspointXAmzAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820AccesspointXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820['accesspoint#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/accesspointforobjectlambda#x-amz-account-id', keyArgs] as const
}

export function getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820['accesspointforobjectlambda#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820AccesspointforobjectlambdaXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
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
                    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
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
                    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryKey>
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
              (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820['accesspointforobjectlambda#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820MrapInstancesXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/mrap/instances#x-amz-account-id', keyArgs] as const
}

export function getV20180820MrapInstancesXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820MrapInstancesXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820.mrap['instances#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820MrapInstancesXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
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
                  ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV20180820MrapInstancesXAmzAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820MrapInstancesXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820MrapInstancesXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820.mrap['instances#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820BucketXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/bucket#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820BucketXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820['bucket#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820BucketXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV20180820BucketXAmzAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820BucketXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820BucketXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820['bucket#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV20180820StoragelensXAmzAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20180820', '/v20180820/storagelens#x-amz-account-id', keyArgs] as const
}

export function getV20180820StoragelensXAmzAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20180820StoragelensXAmzAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20180820['storagelens#x-amz-account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20180820StoragelensXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>
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
                  ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV20180820StoragelensXAmzAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20180820StoragelensXAmzAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20180820StoragelensXAmzAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20180820['storagelens#x-amz-account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV20180820AsyncRequestsMrapPutPolicyXAmzAccountIdMutationKey() {
  return [
    'v20180820',
    '/v20180820/async-requests/mrap/put-policy#x-amz-account-id',
    'POST',
  ] as const
}

export function getPostV20180820AsyncRequestsMrapPutPolicyXAmzAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820)['async-requests']['mrap']['put-policy#x-amz-account-id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap']['put-policy#x-amz-account-id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV20180820AsyncRequestsMrapPutPolicyXAmzAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820)['async-requests']['mrap']['put-policy#x-amz-account-id']['$post']
      >,
    ) {
      return parseResponse(
        client.v20180820['async-requests'].mrap['put-policy#x-amz-account-id'].$post(args, options),
      )
    },
  })
}

export function usePostV20180820AsyncRequestsMrapPutPolicyXAmzAccountId<
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
                    (typeof client.v20180820)['async-requests']['mrap']['put-policy#x-amz-account-id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820)['async-requests']['mrap']['put-policy#x-amz-account-id']['$post']
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
  const mutationDefaults = getPostV20180820AsyncRequestsMrapPutPolicyXAmzAccountIdMutationOptions<
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

export function getPostV20180820JobsIdPriorityXAmzAccountIdPriorityMutationKey() {
  return ['v20180820', '/v20180820/jobs/:id/priority#x-amz-account-id&priority', 'POST'] as const
}

export function getPostV20180820JobsIdPriorityXAmzAccountIdPriorityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.jobs)[':id']['priority#x-amz-account-id&priority']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.jobs)[':id']['priority#x-amz-account-id&priority']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV20180820JobsIdPriorityXAmzAccountIdPriorityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.jobs)[':id']['priority#x-amz-account-id&priority']['$post']
      >,
    ) {
      return parseResponse(
        client.v20180820.jobs[':id']['priority#x-amz-account-id&priority'].$post(args, options),
      )
    },
  })
}

export function usePostV20180820JobsIdPriorityXAmzAccountIdPriority<
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
                    (typeof client.v20180820.jobs)[':id']['priority#x-amz-account-id&priority']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.jobs)[':id']['priority#x-amz-account-id&priority']['$post']
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
  const mutationDefaults = getPostV20180820JobsIdPriorityXAmzAccountIdPriorityMutationOptions<
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

export function getPostV20180820JobsIdStatusXAmzAccountIdRequestedJobStatusMutationKey() {
  return [
    'v20180820',
    '/v20180820/jobs/:id/status#x-amz-account-id&requestedJobStatus',
    'POST',
  ] as const
}

export function getPostV20180820JobsIdStatusXAmzAccountIdRequestedJobStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20180820.jobs)[':id']['status#x-amz-account-id&requestedJobStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20180820.jobs)[':id']['status#x-amz-account-id&requestedJobStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV20180820JobsIdStatusXAmzAccountIdRequestedJobStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20180820.jobs)[':id']['status#x-amz-account-id&requestedJobStatus']['$post']
      >,
    ) {
      return parseResponse(
        client.v20180820.jobs[':id']['status#x-amz-account-id&requestedJobStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV20180820JobsIdStatusXAmzAccountIdRequestedJobStatus<
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
                    (typeof client.v20180820.jobs)[':id']['status#x-amz-account-id&requestedJobStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20180820.jobs)[':id']['status#x-amz-account-id&requestedJobStatus']['$post']
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
    getPostV20180820JobsIdStatusXAmzAccountIdRequestedJobStatusMutationOptions<
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
