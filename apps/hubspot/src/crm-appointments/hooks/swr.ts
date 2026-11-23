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

export function getGetCrmObjects202609ObjectTypeKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/:objectType', args] as const
}

export function useGetCrmObjects202609ObjectType<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
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
        ? getGetCrmObjects202609ObjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.objects['2026-09'][':objectType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609ObjectType<TError = unknown>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
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
        ? getGetCrmObjects202609ObjectTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.objects['2026-09'][':objectType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeKey() {
  return ['crm', '/crm/objects/2026-09/:objectType', 'POST'] as const
}

export function usePostCrmObjects202609ObjectType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['$post']>
        },
      ) => parseResponse(client.crm.objects['2026-09'][':objectType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchArchiveKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/archive', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchArchiveKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchCreateKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/create', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchCreateKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchReadKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/read', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchReadKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchUpdateKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/update', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchUpdateKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeBatchUpsertKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/batch/upsert', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeBatchUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeBatchUpsertKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['batch']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].batch.upsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeMergeKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/merge', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeMergeKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['merge']['$post']
          >
        },
      ) =>
        parseResponse(client.crm.objects['2026-09'][':objectType'].merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCrmObjects202609ObjectTypeSearchKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/search', 'POST'] as const
}

export function usePostCrmObjects202609ObjectTypeSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmObjects202609ObjectTypeSearchKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'].search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCrmObjects202609ObjectTypeObjectIdKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
) {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', args] as const
}

export function useGetCrmObjects202609ObjectTypeObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
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
        ? getGetCrmObjects202609ObjectTypeObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmObjects202609ObjectTypeObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
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
        ? getGetCrmObjects202609ObjectTypeObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', 'DELETE'] as const
}

export function useDeleteCrmObjects202609ObjectTypeObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCrmObjects202609ObjectTypeObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCrmObjects202609ObjectTypeObjectIdKey() {
  return ['crm', '/crm/objects/2026-09/:objectType/:objectId', 'PATCH'] as const
}

export function usePatchCrmObjects202609ObjectTypeObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCrmObjects202609ObjectTypeObjectIdKey()
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
            (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.crm.objects['2026-09'][':objectType'][':objectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
