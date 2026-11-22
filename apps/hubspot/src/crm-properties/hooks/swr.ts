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

export function getGetCrmProperties202609ObjectTypeKey(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>,
) {
  return ['crm', '/crm/properties/2026-09/:objectType', args] as const
}

export function useGetCrmProperties202609ObjectType<TError = unknown>(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
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
        ? getGetCrmProperties202609ObjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.properties['2026-09'][':objectType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmProperties202609ObjectType<TError = unknown>(
  args: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
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
        ? getGetCrmProperties202609ObjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.properties['2026-09'][':objectType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmProperties202609ObjectTypeKey() {
  return ['crm', '/crm/properties/2026-09/:objectType', 'POST'] as const
}

export function usePostCrmProperties202609ObjectType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmProperties202609ObjectTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['$post']>
        },
      ) => parseResponse(client.crm.properties['2026-09'][':objectType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmProperties202609ObjectTypeBatchArchiveKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/batch/archive', 'POST'] as const
}

export function usePostCrmProperties202609ObjectTypeBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmProperties202609ObjectTypeBatchArchiveKey()
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
            (typeof client.crm.properties)['2026-09'][':objectType']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmProperties202609ObjectTypeBatchCreateKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/batch/create', 'POST'] as const
}

export function usePostCrmProperties202609ObjectTypeBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmProperties202609ObjectTypeBatchCreateKey()
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
            (typeof client.crm.properties)['2026-09'][':objectType']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'].batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmProperties202609ObjectTypeBatchReadKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/batch/read', 'POST'] as const
}

export function usePostCrmProperties202609ObjectTypeBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmProperties202609ObjectTypeBatchReadKey()
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
            (typeof client.crm.properties)['2026-09'][':objectType']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'].batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmProperties202609ObjectTypeGroupsKey(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
  >,
) {
  return ['crm', '/crm/properties/2026-09/:objectType/groups', args] as const
}

export function useGetCrmProperties202609ObjectTypeGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']>
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
        ? getGetCrmProperties202609ObjectTypeGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'].groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmProperties202609ObjectTypeGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']>
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
        ? getGetCrmProperties202609ObjectTypeGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'].groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCrmProperties202609ObjectTypeGroupsKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/groups', 'POST'] as const
}

export function usePostCrmProperties202609ObjectTypeGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmProperties202609ObjectTypeGroupsKey()
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
            (typeof client.crm.properties)['2026-09'][':objectType']['groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'].groups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmProperties202609ObjectTypeGroupsGroupNameKey(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
  >,
) {
  return ['crm', '/crm/properties/2026-09/:objectType/groups/:groupName', args] as const
}

export function useGetCrmProperties202609ObjectTypeGroupsGroupName<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
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
        ? getGetCrmProperties202609ObjectTypeGroupsGroupNameKey(args)
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
                (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
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
          client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmProperties202609ObjectTypeGroupsGroupName<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
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
        ? getGetCrmProperties202609ObjectTypeGroupsGroupNameKey(args)
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
                (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$get']
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
          client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmProperties202609ObjectTypeGroupsGroupNameKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/groups/:groupName', 'DELETE'] as const
}

export function useDeleteCrmProperties202609ObjectTypeGroupsGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmProperties202609ObjectTypeGroupsGroupNameKey()
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
            (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmProperties202609ObjectTypeGroupsGroupNameKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/groups/:groupName', 'PATCH'] as const
}

export function usePatchCrmProperties202609ObjectTypeGroupsGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmProperties202609ObjectTypeGroupsGroupNameKey()
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
            (typeof client.crm.properties)['2026-09'][':objectType']['groups'][':groupName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'].groups[':groupName'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmProperties202609ObjectTypePropertyNameKey(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
  >,
) {
  return ['crm', '/crm/properties/2026-09/:objectType/:propertyName', args] as const
}

export function useGetCrmProperties202609ObjectTypePropertyName<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
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
        ? getGetCrmProperties202609ObjectTypePropertyNameKey(args)
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
                (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
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
          client.crm.properties['2026-09'][':objectType'][':propertyName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmProperties202609ObjectTypePropertyName<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
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
        ? getGetCrmProperties202609ObjectTypePropertyNameKey(args)
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
                (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$get']
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
          client.crm.properties['2026-09'][':objectType'][':propertyName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmProperties202609ObjectTypePropertyNameKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/:propertyName', 'DELETE'] as const
}

export function useDeleteCrmProperties202609ObjectTypePropertyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmProperties202609ObjectTypePropertyNameKey()
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
            (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'][':propertyName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmProperties202609ObjectTypePropertyNameKey() {
  return ['crm', '/crm/properties/2026-09/:objectType/:propertyName', 'PATCH'] as const
}

export function usePatchCrmProperties202609ObjectTypePropertyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmProperties202609ObjectTypePropertyNameKey()
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
            (typeof client.crm.properties)['2026-09'][':objectType'][':propertyName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.properties['2026-09'][':objectType'][':propertyName'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
