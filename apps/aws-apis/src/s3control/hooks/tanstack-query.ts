import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV20180820Key() {
  return ['v20180820'] as const
}

export function getV20180820AccesspointNameXAmzAccountIdQueryKey(
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/accesspoint/:name#x-amz-account-id', keyArgs] as const
}

export function getV20180820AccesspointNameXAmzAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointNameXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.accesspoint[':name#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointNameXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointNameXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointNameXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointforobjectlambdaNameXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointforobjectlambdaNameXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/jobs#x-amz-account-id', keyArgs] as const
}

export function getV20180820JobsXAmzAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820JobsXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820['jobs#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820JobsXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820JobsXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820JobsXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820JobsXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/accesspoint/:name/policy#x-amz-account-id', keyArgs] as const
}

export function getV20180820AccesspointNamePolicyXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointNamePolicyXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820AccesspointNamePolicyXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointNamePolicyXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointNamePolicyXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointNamePolicyXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/policy#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNameXAmzAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820BucketNameXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.bucket[':name#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820BucketNameXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820BucketNameXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820BucketNameXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getV20180820BucketNameXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820BucketNameXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/bucket/:name/lifecycleconfiguration#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820BucketNameLifecycleconfigurationXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820BucketNameLifecycleconfigurationXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name/policy#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNamePolicyXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820BucketNamePolicyXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.bucket[':name']['policy#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820BucketNamePolicyXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820BucketNamePolicyXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820BucketNamePolicyXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getV20180820BucketNamePolicyXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820BucketNamePolicyXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name/replication#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNameReplicationXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820BucketNameReplicationXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.bucket[':name']['replication#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820BucketNameReplicationXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820BucketNameReplicationXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820BucketNameReplicationXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820BucketNameReplicationXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name/tagging#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNameTaggingXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820BucketNameTaggingXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820BucketNameTaggingXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820BucketNameTaggingXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820BucketNameTaggingXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820BucketNameTaggingXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/jobs/:id/tagging#x-amz-account-id', keyArgs] as const
}

export function getV20180820JobsIdTaggingXAmzAccountIdQueryOptions<
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
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820JobsIdTaggingXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820JobsIdTaggingXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820JobsIdTaggingXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820JobsIdTaggingXAmzAccountId<
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
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getV20180820JobsIdTaggingXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820JobsIdTaggingXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
        InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']>,
        TOnMutateResult
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
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820ConfigurationPublicAccessBlockXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820ConfigurationPublicAccessBlockXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/storagelens/:storagelensid#x-amz-account-id', keyArgs] as const
}

export function getV20180820StoragelensStoragelensidXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820StoragelensStoragelensidXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820StoragelensStoragelensidXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820StoragelensStoragelensidXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820StoragelensStoragelensidXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820StoragelensStoragelensidXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/storagelens/:storagelensid/tagging#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820StoragelensStoragelensidTaggingXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820StoragelensStoragelensidTaggingXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/jobs/:id#x-amz-account-id', keyArgs] as const
}

export function getV20180820JobsIdXAmzAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820JobsIdXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.jobs[':id#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820JobsIdXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820JobsIdXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820JobsIdXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820JobsIdXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/async-requests/mrap/:request_token#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820['async-requests'].mrap[':request_token#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AsyncRequestsMrapRequestTokenXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/configuration#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['configuration#x-amz-account-id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/accesspoint/:name/policyStatus#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.accesspoint[':name']['policyStatus#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointNamePolicyStatusXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointNamePolicyStatusXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/policyStatus#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.accesspointforobjectlambda[':name']['policyStatus#x-amz-account-id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820BucketNameVersioningXAmzAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name/versioning#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketNameVersioningXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820BucketNameVersioningXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820BucketNameVersioningXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820BucketNameVersioningXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820BucketNameVersioningXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820BucketNameVersioningXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/mrap/instances/:name#x-amz-account-id', keyArgs] as const
}

export function getV20180820MrapInstancesNameXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820MrapInstancesNameXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.mrap.instances[':name#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820MrapInstancesNameXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820MrapInstancesNameXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820MrapInstancesNameXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getV20180820MrapInstancesNameXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820MrapInstancesNameXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/mrap/instances/:name/policy#x-amz-account-id', keyArgs] as const
}

export function getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.mrap.instances[':name']['policy#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820MrapInstancesNamePolicyXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820MrapInstancesNamePolicyXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20180820',
    '/v20180820/mrap/instances/:name/policystatus#x-amz-account-id',
    keyArgs,
  ] as const
}

export function getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.mrap.instances[':name']['policystatus#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820MrapInstancesNamePolicystatusXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820MrapInstancesNamePolicystatusXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/mrap/instances/:mrap/routes#x-amz-account-id', keyArgs] as const
}

export function getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820MrapInstancesMrapRoutesXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820MrapInstancesMrapRoutesXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/accesspoint#x-amz-account-id', keyArgs] as const
}

export function getV20180820AccesspointXAmzAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820['accesspoint#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/accesspointforobjectlambda#x-amz-account-id', keyArgs] as const
}

export function getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820['accesspointforobjectlambda#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820AccesspointforobjectlambdaXAmzAccountId<
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
  args: InferRequestType<
    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820AccesspointforobjectlambdaXAmzAccountIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820MrapInstancesXAmzAccountIdQueryKey(
  args: InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/mrap/instances#x-amz-account-id', keyArgs] as const
}

export function getV20180820MrapInstancesXAmzAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820MrapInstancesXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820.mrap['instances#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820MrapInstancesXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820MrapInstancesXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820MrapInstancesXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getV20180820MrapInstancesXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820MrapInstancesXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820BucketXAmzAccountIdQueryKey(
  args: InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket#x-amz-account-id', keyArgs] as const
}

export function getV20180820BucketXAmzAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820BucketXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820['bucket#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV20180820BucketXAmzAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820BucketXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820BucketXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820BucketXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV20180820StoragelensXAmzAccountIdQueryKey(
  args: InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/storagelens#x-amz-account-id', keyArgs] as const
}

export function getV20180820StoragelensXAmzAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20180820StoragelensXAmzAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20180820['storagelens#x-amz-account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV20180820StoragelensXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV20180820StoragelensXAmzAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV20180820StoragelensXAmzAccountIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
