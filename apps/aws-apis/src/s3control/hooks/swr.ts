import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV20180820Key() {
  return ['v20180820'] as const
}

export function getGetV20180820AccesspointNameXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/accesspoint/:name#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820AccesspointNameXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointNameXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspoint[':name#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointNameXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointNameXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspoint[':name#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820AccesspointNameXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/accesspoint/:name#x-amz-account-id', 'PUT'] as const
}

export function usePutV20180820AccesspointNameXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820AccesspointNameXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspoint[':name#x-amz-account-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820AccesspointNameXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/accesspoint/:name#x-amz-account-id', 'DELETE'] as const
}

export function useDeleteV20180820AccesspointNameXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820AccesspointNameXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspoint[':name#x-amz-account-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820AccesspointforobjectlambdaNameXAmzAccountIdKey(
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

export function useGetV20180820AccesspointforobjectlambdaNameXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaNameXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointforobjectlambdaNameXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaNameXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820AccesspointforobjectlambdaNameXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name#x-amz-account-id',
    'PUT',
  ] as const
}

export function usePutV20180820AccesspointforobjectlambdaNameXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820AccesspointforobjectlambdaNameXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820AccesspointforobjectlambdaNameXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name#x-amz-account-id',
    'DELETE',
  ] as const
}

export function useDeleteV20180820AccesspointforobjectlambdaNameXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820AccesspointforobjectlambdaNameXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV20180820BucketNameKey() {
  return ['v20180820', '/v20180820/bucket/:name', 'PUT'] as const
}

export function usePutV20180820BucketName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v20180820.bucket)[':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v20180820.bucket)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820BucketNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v20180820.bucket)[':name']['$put']> },
      ) => parseResponse(client.v20180820.bucket[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820JobsXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/jobs#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820JobsXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820JobsXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820['jobs#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820JobsXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820JobsXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820['jobs#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV20180820JobsXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/jobs#x-amz-account-id', 'POST'] as const
}

export function usePostV20180820JobsXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV20180820JobsXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']> },
      ) => parseResponse(client.v20180820['jobs#x-amz-account-id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV20180820AsyncRequestsMrapCreateXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/async-requests/mrap/create#x-amz-account-id', 'POST'] as const
}

export function usePostV20180820AsyncRequestsMrapCreateXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap']['create#x-amz-account-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV20180820AsyncRequestsMrapCreateXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820)['async-requests']['mrap']['create#x-amz-account-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v20180820['async-requests'].mrap['create#x-amz-account-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820AccesspointNamePolicyXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/accesspoint/:name/policy#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820AccesspointNamePolicyXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointNamePolicyXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointNamePolicyXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointNamePolicyXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820AccesspointNamePolicyXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/accesspoint/:name/policy#x-amz-account-id', 'PUT'] as const
}

export function usePutV20180820AccesspointNamePolicyXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820AccesspointNamePolicyXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820AccesspointNamePolicyXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/accesspoint/:name/policy#x-amz-account-id', 'DELETE'] as const
}

export function useDeleteV20180820AccesspointNamePolicyXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820AccesspointNamePolicyXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdKey(
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

export function useGetV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/policy#x-amz-account-id',
    'PUT',
  ] as const
}

export function usePutV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/policy#x-amz-account-id',
    'DELETE',
  ] as const
}

export function useDeleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820BucketNameXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820BucketNameXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820.bucket[':name#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820BucketNameXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820.bucket[':name#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV20180820BucketNameXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/bucket/:name#x-amz-account-id', 'DELETE'] as const
}

export function useDeleteV20180820BucketNameXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820BucketNameXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name#x-amz-account-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820BucketNameLifecycleconfigurationXAmzAccountIdKey(
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

export function useGetV20180820BucketNameLifecycleconfigurationXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameLifecycleconfigurationXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820BucketNameLifecycleconfigurationXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameLifecycleconfigurationXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820BucketNameLifecycleconfigurationXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/bucket/:name/lifecycleconfiguration#x-amz-account-id',
    'PUT',
  ] as const
}

export function usePutV20180820BucketNameLifecycleconfigurationXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820BucketNameLifecycleconfigurationXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820BucketNameLifecycleconfigurationXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/bucket/:name/lifecycleconfiguration#x-amz-account-id',
    'DELETE',
  ] as const
}

export function useDeleteV20180820BucketNameLifecycleconfigurationXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820BucketNameLifecycleconfigurationXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820BucketNamePolicyXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name/policy#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820BucketNamePolicyXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNamePolicyXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['policy#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820BucketNamePolicyXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNamePolicyXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['policy#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820BucketNamePolicyXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/bucket/:name/policy#x-amz-account-id', 'PUT'] as const
}

export function usePutV20180820BucketNamePolicyXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820BucketNamePolicyXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['policy#x-amz-account-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820BucketNamePolicyXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/bucket/:name/policy#x-amz-account-id', 'DELETE'] as const
}

export function useDeleteV20180820BucketNamePolicyXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820BucketNamePolicyXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['policy#x-amz-account-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820BucketNameReplicationXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name/replication#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820BucketNameReplicationXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameReplicationXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['replication#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820BucketNameReplicationXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameReplicationXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['replication#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820BucketNameReplicationXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/bucket/:name/replication#x-amz-account-id', 'PUT'] as const
}

export function usePutV20180820BucketNameReplicationXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820BucketNameReplicationXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['replication#x-amz-account-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820BucketNameReplicationXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/bucket/:name/replication#x-amz-account-id', 'DELETE'] as const
}

export function useDeleteV20180820BucketNameReplicationXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820BucketNameReplicationXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['replication#x-amz-account-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820BucketNameTaggingXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name/tagging#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820BucketNameTaggingXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameTaggingXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820BucketNameTaggingXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameTaggingXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820BucketNameTaggingXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/bucket/:name/tagging#x-amz-account-id', 'PUT'] as const
}

export function usePutV20180820BucketNameTaggingXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820BucketNameTaggingXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820BucketNameTaggingXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/bucket/:name/tagging#x-amz-account-id', 'DELETE'] as const
}

export function useDeleteV20180820BucketNameTaggingXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820BucketNameTaggingXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820JobsIdTaggingXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/jobs/:id/tagging#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820JobsIdTaggingXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820JobsIdTaggingXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820JobsIdTaggingXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820JobsIdTaggingXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820JobsIdTaggingXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/jobs/:id/tagging#x-amz-account-id', 'PUT'] as const
}

export function usePutV20180820JobsIdTaggingXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820JobsIdTaggingXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820JobsIdTaggingXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/jobs/:id/tagging#x-amz-account-id', 'DELETE'] as const
}

export function useDeleteV20180820JobsIdTaggingXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820JobsIdTaggingXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV20180820AsyncRequestsMrapDeleteXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/async-requests/mrap/delete#x-amz-account-id', 'POST'] as const
}

export function usePostV20180820AsyncRequestsMrapDeleteXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap']['delete#x-amz-account-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV20180820AsyncRequestsMrapDeleteXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820)['async-requests']['mrap']['delete#x-amz-account-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v20180820['async-requests'].mrap['delete#x-amz-account-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820ConfigurationPublicAccessBlockXAmzAccountIdKey(
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

export function useGetV20180820ConfigurationPublicAccessBlockXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820ConfigurationPublicAccessBlockXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820ConfigurationPublicAccessBlockXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820ConfigurationPublicAccessBlockXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820ConfigurationPublicAccessBlockXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
    'PUT',
  ] as const
}

export function usePutV20180820ConfigurationPublicAccessBlockXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820ConfigurationPublicAccessBlockXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820ConfigurationPublicAccessBlockXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/configuration/publicAccessBlock#x-amz-account-id',
    'DELETE',
  ] as const
}

export function useDeleteV20180820ConfigurationPublicAccessBlockXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820ConfigurationPublicAccessBlockXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820StoragelensStoragelensidXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/storagelens/:storagelensid#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820StoragelensStoragelensidXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820StoragelensStoragelensidXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820StoragelensStoragelensidXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820StoragelensStoragelensidXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820StoragelensStoragelensidXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/storagelens/:storagelensid#x-amz-account-id', 'PUT'] as const
}

export function usePutV20180820StoragelensStoragelensidXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820StoragelensStoragelensidXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820StoragelensStoragelensidXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/storagelens/:storagelensid#x-amz-account-id', 'DELETE'] as const
}

export function useDeleteV20180820StoragelensStoragelensidXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820StoragelensStoragelensidXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820StoragelensStoragelensidTaggingXAmzAccountIdKey(
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

export function useGetV20180820StoragelensStoragelensidTaggingXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820StoragelensStoragelensidTaggingXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820StoragelensStoragelensidTaggingXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820StoragelensStoragelensidTaggingXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820StoragelensStoragelensidTaggingXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/storagelens/:storagelensid/tagging#x-amz-account-id',
    'PUT',
  ] as const
}

export function usePutV20180820StoragelensStoragelensidTaggingXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820StoragelensStoragelensidTaggingXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20180820StoragelensStoragelensidTaggingXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/storagelens/:storagelensid/tagging#x-amz-account-id',
    'DELETE',
  ] as const
}

export function useDeleteV20180820StoragelensStoragelensidTaggingXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20180820StoragelensStoragelensidTaggingXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820JobsIdXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/jobs/:id#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820JobsIdXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820JobsIdXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820.jobs[':id#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820JobsIdXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820JobsIdXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820.jobs[':id#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdKey(
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

export function useGetV20180820AsyncRequestsMrapRequestTokenXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820['async-requests'].mrap[':request_token#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AsyncRequestsMrapRequestTokenXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AsyncRequestsMrapRequestTokenXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820['async-requests'].mrap[':request_token#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdKey(
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

export function useGetV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name'][
            'configuration#x-amz-account-id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name'][
            'configuration#x-amz-account-id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/accesspointforobjectlambda/:name/configuration#x-amz-account-id',
    'PUT',
  ] as const
}

export function usePutV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name'][
            'configuration#x-amz-account-id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820AccesspointNamePolicyStatusXAmzAccountIdKey(
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

export function useGetV20180820AccesspointNamePolicyStatusXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointNamePolicyStatusXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspoint[':name']['policyStatus#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointNamePolicyStatusXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointNamePolicyStatusXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspoint[':name']['policyStatus#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdKey(
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

export function useGetV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name'][
            'policyStatus#x-amz-account-id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.accesspointforobjectlambda[':name'][
            'policyStatus#x-amz-account-id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820BucketNameVersioningXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket/:name/versioning#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820BucketNameVersioningXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameVersioningXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820BucketNameVersioningXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketNameVersioningXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20180820BucketNameVersioningXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/bucket/:name/versioning#x-amz-account-id', 'PUT'] as const
}

export function usePutV20180820BucketNameVersioningXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20180820BucketNameVersioningXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820MrapInstancesNameXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/mrap/instances/:name#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820MrapInstancesNameXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesNameXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap.instances[':name#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820MrapInstancesNameXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesNameXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap.instances[':name#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820MrapInstancesNamePolicyXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/mrap/instances/:name/policy#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820MrapInstancesNamePolicyXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesNamePolicyXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap.instances[':name']['policy#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820MrapInstancesNamePolicyXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesNamePolicyXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap.instances[':name']['policy#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820MrapInstancesNamePolicystatusXAmzAccountIdKey(
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

export function useGetV20180820MrapInstancesNamePolicystatusXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesNamePolicystatusXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap.instances[':name']['policystatus#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820MrapInstancesNamePolicystatusXAmzAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesNamePolicystatusXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap.instances[':name']['policystatus#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820MrapInstancesMrapRoutesXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/mrap/instances/:mrap/routes#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820MrapInstancesMrapRoutesXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesMrapRoutesXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820MrapInstancesMrapRoutesXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesMrapRoutesXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV20180820MrapInstancesMrapRoutesXAmzAccountIdKey() {
  return ['v20180820', '/v20180820/mrap/instances/:mrap/routes#x-amz-account-id', 'PATCH'] as const
}

export function usePatchV20180820MrapInstancesMrapRoutesXAmzAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV20180820MrapInstancesMrapRoutesXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20180820AccesspointXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/accesspoint#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820AccesspointXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820['accesspoint#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820['accesspoint#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820AccesspointforobjectlambdaXAmzAccountIdKey(
  args: InferRequestType<
    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/accesspointforobjectlambda#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820AccesspointforobjectlambdaXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820['accesspointforobjectlambda#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820AccesspointforobjectlambdaXAmzAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820AccesspointforobjectlambdaXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820['accesspointforobjectlambda#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820MrapInstancesXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/mrap/instances#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820MrapInstancesXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap['instances#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820MrapInstancesXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820MrapInstancesXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20180820.mrap['instances#x-amz-account-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820BucketXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/bucket#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820BucketXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820['bucket#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820BucketXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820BucketXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820['bucket#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV20180820StoragelensXAmzAccountIdKey(
  args: InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20180820', '/v20180820/storagelens#x-amz-account-id', keyArgs] as const
}

export function useGetV20180820StoragelensXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820StoragelensXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820['storagelens#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20180820StoragelensXAmzAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV20180820StoragelensXAmzAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20180820['storagelens#x-amz-account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV20180820AsyncRequestsMrapPutPolicyXAmzAccountIdKey() {
  return [
    'v20180820',
    '/v20180820/async-requests/mrap/put-policy#x-amz-account-id',
    'POST',
  ] as const
}

export function usePostV20180820AsyncRequestsMrapPutPolicyXAmzAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820)['async-requests']['mrap']['put-policy#x-amz-account-id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV20180820AsyncRequestsMrapPutPolicyXAmzAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820)['async-requests']['mrap']['put-policy#x-amz-account-id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v20180820['async-requests'].mrap['put-policy#x-amz-account-id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV20180820JobsIdPriorityXAmzAccountIdPriorityKey() {
  return ['v20180820', '/v20180820/jobs/:id/priority#x-amz-account-id&priority', 'POST'] as const
}

export function usePostV20180820JobsIdPriorityXAmzAccountIdPriority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.jobs)[':id']['priority#x-amz-account-id&priority']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV20180820JobsIdPriorityXAmzAccountIdPriorityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.jobs)[':id']['priority#x-amz-account-id&priority']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.jobs[':id']['priority#x-amz-account-id&priority'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV20180820JobsIdStatusXAmzAccountIdRequestedJobStatusKey() {
  return [
    'v20180820',
    '/v20180820/jobs/:id/status#x-amz-account-id&requestedJobStatus',
    'POST',
  ] as const
}

export function usePostV20180820JobsIdStatusXAmzAccountIdRequestedJobStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20180820.jobs)[':id']['status#x-amz-account-id&requestedJobStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV20180820JobsIdStatusXAmzAccountIdRequestedJobStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v20180820.jobs)[':id']['status#x-amz-account-id&requestedJobStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v20180820.jobs[':id']['status#x-amz-account-id&requestedJobStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
