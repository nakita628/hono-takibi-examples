import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getGetV1beta1NameKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function useGetV1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1beta1NameKey() {
  return ['v1beta1', '/v1beta1/:name', 'PUT'] as const
}

export function usePutV1beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name']['$put']> },
      ) => parseResponse(client.v1beta1[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1beta1NameKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function useDeleteV1beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name']['$delete']> },
      ) => parseResponse(client.v1beta1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameWatchKey() {
  return ['v1beta1', '/v1beta1/:name:watch', 'POST'] as const
}

export function usePostV1beta1NameWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:watch']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:watch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:watch']['$post']> },
      ) => parseResponse(client.v1beta1[':name:watch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentConfigsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['configs']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/configs', args] as const
}

export function useGetV1beta1ParentConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['configs']['$get']>>
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
        ? getGetV1beta1ParentConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['configs']['$get']>>
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
        ? getGetV1beta1ParentConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentConfigsKey() {
  return ['v1beta1', '/v1beta1/:parent/configs', 'POST'] as const
}

export function usePostV1beta1ParentConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['configs']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].configs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentVariablesKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['variables']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/variables', args] as const
}

export function useGetV1beta1ParentVariables<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['variables']['$get']>>
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
        ? getGetV1beta1ParentVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentVariables<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['variables']['$get']>>
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
        ? getGetV1beta1ParentVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentVariablesKey() {
  return ['v1beta1', '/v1beta1/:parent/variables', 'POST'] as const
}

export function usePostV1beta1ParentVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['variables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentVariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['variables']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].variables.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentWaitersKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['waiters']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/waiters', args] as const
}

export function useGetV1beta1ParentWaiters<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['waiters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['waiters']['$get']>>
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
        ? getGetV1beta1ParentWaitersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['waiters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].waiters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentWaiters<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['waiters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['waiters']['$get']>>
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
        ? getGetV1beta1ParentWaitersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['waiters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].waiters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentWaitersKey() {
  return ['v1beta1', '/v1beta1/:parent/waiters', 'POST'] as const
}

export function usePostV1beta1ParentWaiters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['waiters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['waiters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentWaitersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['waiters']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].waiters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ResourceGetIamPolicyKey(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:resource:getIamPolicy', args] as const
}

export function useGetV1beta1ResourceGetIamPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
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
        ? getGetV1beta1ResourceGetIamPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ResourceGetIamPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
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
        ? getGetV1beta1ResourceGetIamPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ResourceSetIamPolicyKey() {
  return ['v1beta1', '/v1beta1/:resource:setIamPolicy', 'POST'] as const
}

export function usePostV1beta1ResourceSetIamPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ResourceSetIamPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']> },
      ) => parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ResourceTestIamPermissionsKey() {
  return ['v1beta1', '/v1beta1/:resource:testIamPermissions', 'POST'] as const
}

export function usePostV1beta1ResourceTestIamPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ResourceTestIamPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>
        },
      ) => parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
