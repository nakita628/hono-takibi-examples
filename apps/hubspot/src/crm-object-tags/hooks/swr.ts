import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getGetCrmObjectTags202609ObjectTypeIdKey(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>,
) {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId', args] as const
}

export function useGetCrmObjectTags202609ObjectTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>
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
        ? getGetCrmObjectTags202609ObjectTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm['object-tags']['2026-09'][':objectTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjectTags202609ObjectTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>
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
        ? getGetCrmObjectTags202609ObjectTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm['object-tags']['2026-09'][':objectTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmObjectTags202609ObjectTypeIdKey() {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId', 'POST'] as const
}

export function usePostCrmObjectTags202609ObjectTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjectTags202609ObjectTypeIdKey()
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
            (typeof client.crm)['object-tags']['2026-09'][':objectTypeId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm['object-tags']['2026-09'][':objectTypeId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjectTags202609ObjectTypeIdTagIdKey(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
  >,
) {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId/:tagId', args] as const
}

export function useGetCrmObjectTags202609ObjectTypeIdTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
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
        ? getGetCrmObjectTags202609ObjectTypeIdTagIdKey(args)
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
                (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
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
          client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjectTags202609ObjectTypeIdTagId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
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
        ? getGetCrmObjectTags202609ObjectTypeIdTagIdKey(args)
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
                (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$get']
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
          client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCrmObjectTags202609ObjectTypeIdTagIdKey() {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId/:tagId', 'PUT'] as const
}

export function usePutCrmObjectTags202609ObjectTypeIdTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCrmObjectTags202609ObjectTypeIdTagIdKey()
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
            (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCrmObjectTags202609ObjectTypeIdTagIdKey() {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId/:tagId', 'DELETE'] as const
}

export function useDeleteCrmObjectTags202609ObjectTypeIdTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmObjectTags202609ObjectTypeIdTagIdKey()
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
            (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmObjectTags202609ObjectTypeIdTagIdKey() {
  return ['crm', '/crm/object-tags/2026-09/:objectTypeId/:tagId', 'PATCH'] as const
}

export function usePatchCrmObjectTags202609ObjectTypeIdTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmObjectTags202609ObjectTypeIdTagIdKey()
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
            (typeof client.crm)['object-tags']['2026-09'][':objectTypeId'][':tagId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm['object-tags']['2026-09'][':objectTypeId'][':tagId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
