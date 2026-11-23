import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiPublicAnnotationQueuesKey(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$get']>,
) {
  return ['api', '/api/public/annotation-queues', args] as const
}

export function useGetApiPublicAnnotationQueues<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
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
        ? getGetApiPublicAnnotationQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['annotation-queues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicAnnotationQueues<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
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
        ? getGetApiPublicAnnotationQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['annotation-queues'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicAnnotationQueuesKey() {
  return ['api', '/api/public/annotation-queues', 'POST'] as const
}

export function usePostApiPublicAnnotationQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public)['annotation-queues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicAnnotationQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public)['annotation-queues']['$post']> },
      ) => parseResponse(client.api.public['annotation-queues'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicAnnotationQueuesQueueIdKey(
  args: InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>,
) {
  return ['api', '/api/public/annotation-queues/:queueId', args] as const
}

export function useGetApiPublicAnnotationQueuesQueueId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>>
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
        ? getGetApiPublicAnnotationQueuesQueueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public['annotation-queues'][':queueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicAnnotationQueuesQueueId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>>
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
        ? getGetApiPublicAnnotationQueuesQueueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public['annotation-queues'][':queueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicAnnotationQueuesQueueIdItemsKey(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
  >,
) {
  return ['api', '/api/public/annotation-queues/:queueId/items', args] as const
}

export function useGetApiPublicAnnotationQueuesQueueIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
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
        ? getGetApiPublicAnnotationQueuesQueueIdItemsKey(args)
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
                (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
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
          client.api.public['annotation-queues'][':queueId'].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicAnnotationQueuesQueueIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
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
        ? getGetApiPublicAnnotationQueuesQueueIdItemsKey(args)
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
                (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
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
          client.api.public['annotation-queues'][':queueId'].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicAnnotationQueuesQueueIdItemsKey() {
  return ['api', '/api/public/annotation-queues/:queueId/items', 'POST'] as const
}

export function usePostApiPublicAnnotationQueuesQueueIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicAnnotationQueuesQueueIdItemsKey()
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
            (typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.public['annotation-queues'][':queueId'].items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicAnnotationQueuesQueueIdItemsItemIdKey(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
  >,
) {
  return ['api', '/api/public/annotation-queues/:queueId/items/:itemId', args] as const
}

export function useGetApiPublicAnnotationQueuesQueueIdItemsItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
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
        ? getGetApiPublicAnnotationQueuesQueueIdItemsItemIdKey(args)
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
                (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
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
          client.api.public['annotation-queues'][':queueId'].items[':itemId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicAnnotationQueuesQueueIdItemsItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
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
        ? getGetApiPublicAnnotationQueuesQueueIdItemsItemIdKey(args)
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
                (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
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
          client.api.public['annotation-queues'][':queueId'].items[':itemId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicAnnotationQueuesQueueIdItemsItemIdKey() {
  return ['api', '/api/public/annotation-queues/:queueId/items/:itemId', 'DELETE'] as const
}

export function useDeleteApiPublicAnnotationQueuesQueueIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicAnnotationQueuesQueueIdItemsItemIdKey()
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
            (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public['annotation-queues'][':queueId'].items[':itemId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiPublicAnnotationQueuesQueueIdItemsItemIdKey() {
  return ['api', '/api/public/annotation-queues/:queueId/items/:itemId', 'PATCH'] as const
}

export function usePatchApiPublicAnnotationQueuesQueueIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicAnnotationQueuesQueueIdItemsItemIdKey()
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
            (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.public['annotation-queues'][':queueId'].items[':itemId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiPublicAnnotationQueuesQueueIdAssignmentsKey() {
  return ['api', '/api/public/annotation-queues/:queueId/assignments', 'POST'] as const
}

export function usePostApiPublicAnnotationQueuesQueueIdAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicAnnotationQueuesQueueIdAssignmentsKey()
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
            (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.public['annotation-queues'][':queueId'].assignments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicAnnotationQueuesQueueIdAssignmentsKey() {
  return ['api', '/api/public/annotation-queues/:queueId/assignments', 'DELETE'] as const
}

export function useDeleteApiPublicAnnotationQueuesQueueIdAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicAnnotationQueuesQueueIdAssignmentsKey()
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
            (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public['annotation-queues'][':queueId'].assignments.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicIntegrationsBlobStorageKey() {
  return ['api', '/api/public/integrations/blob-storage'] as const
}

export function useGetApiPublicIntegrationsBlobStorage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicIntegrationsBlobStorageKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.integrations['blob-storage'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicIntegrationsBlobStorage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicIntegrationsBlobStorageKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.integrations['blob-storage'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiPublicIntegrationsBlobStorageKey() {
  return ['api', '/api/public/integrations/blob-storage', 'PUT'] as const
}

export function usePutApiPublicIntegrationsBlobStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.integrations)['blob-storage']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPublicIntegrationsBlobStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.public.integrations)['blob-storage']['$put']>
        },
      ) => parseResponse(client.api.public.integrations['blob-storage'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicIntegrationsBlobStorageIdKey(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>,
) {
  return ['api', '/api/public/integrations/blob-storage/:id', args] as const
}

export function useGetApiPublicIntegrationsBlobStorageId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>
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
        ? getGetApiPublicIntegrationsBlobStorageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.integrations['blob-storage'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicIntegrationsBlobStorageId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>
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
        ? getGetApiPublicIntegrationsBlobStorageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.integrations['blob-storage'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicIntegrationsBlobStorageIdKey() {
  return ['api', '/api/public/integrations/blob-storage/:id', 'DELETE'] as const
}

export function useDeleteApiPublicIntegrationsBlobStorageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicIntegrationsBlobStorageIdKey()
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
            (typeof client.api.public.integrations)['blob-storage'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.integrations['blob-storage'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicCommentsKey(
  args: InferRequestType<typeof client.api.public.comments.$get>,
) {
  return ['api', '/api/public/comments', args] as const
}

export function useGetApiPublicComments<TError = unknown>(
  args: InferRequestType<typeof client.api.public.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>
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
        ? getGetApiPublicCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicComments<TError = unknown>(
  args: InferRequestType<typeof client.api.public.comments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>
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
        ? getGetApiPublicCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicCommentsKey() {
  return ['api', '/api/public/comments', 'POST'] as const
}

export function usePostApiPublicComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.public.comments.$post> }) =>
        parseResponse(client.api.public.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicCommentsCommentIdKey(
  args: InferRequestType<(typeof client.api.public.comments)[':commentId']['$get']>,
) {
  return ['api', '/api/public/comments/:commentId', args] as const
}

export function useGetApiPublicCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.comments)[':commentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
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
        ? getGetApiPublicCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.comments[':commentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.comments)[':commentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
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
        ? getGetApiPublicCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.comments[':commentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicDatasetItemsKey(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$get']>,
) {
  return ['api', '/api/public/dataset-items', args] as const
}

export function useGetApiPublicDatasetItems<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>
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
        ? getGetApiPublicDatasetItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['dataset-items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicDatasetItems<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>
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
        ? getGetApiPublicDatasetItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['dataset-items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicDatasetItemsKey() {
  return ['api', '/api/public/dataset-items', 'POST'] as const
}

export function usePostApiPublicDatasetItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public)['dataset-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicDatasetItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.public)['dataset-items']['$post']> },
      ) => parseResponse(client.api.public['dataset-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicDatasetItemsIdKey(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$get']>,
) {
  return ['api', '/api/public/dataset-items/:id', args] as const
}

export function useGetApiPublicDatasetItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
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
        ? getGetApiPublicDatasetItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public['dataset-items'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicDatasetItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
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
        ? getGetApiPublicDatasetItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public['dataset-items'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicDatasetItemsIdKey() {
  return ['api', '/api/public/dataset-items/:id', 'DELETE'] as const
}

export function useDeleteApiPublicDatasetItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicDatasetItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$delete']> },
      ) => parseResponse(client.api.public['dataset-items'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2DatasetsKey(
  args: InferRequestType<typeof client.api.public.v2.datasets.$get>,
) {
  return ['api', '/api/public/v2/datasets', args] as const
}

export function useGetApiPublicV2Datasets<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>
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
        ? getGetApiPublicV2DatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2Datasets<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>
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
        ? getGetApiPublicV2DatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicV2DatasetsKey() {
  return ['api', '/api/public/v2/datasets', 'POST'] as const
}

export function usePostApiPublicV2Datasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.v2.datasets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicV2DatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.public.v2.datasets.$post> },
      ) => parseResponse(client.api.public.v2.datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2DatasetsDatasetNameKey(
  args: InferRequestType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>,
) {
  return ['api', '/api/public/v2/datasets/:datasetName', args] as const
}

export function useGetApiPublicV2DatasetsDatasetName<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
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
        ? getGetApiPublicV2DatasetsDatasetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.v2.datasets[':datasetName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2DatasetsDatasetName<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
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
        ? getGetApiPublicV2DatasetsDatasetNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.v2.datasets[':datasetName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicV2EvaluationRulesKey(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$get']>,
) {
  return ['api', '/api/public/v2/evaluation-rules', args] as const
}

export function useGetApiPublicV2EvaluationRules<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
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
        ? getGetApiPublicV2EvaluationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2['evaluation-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2EvaluationRules<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
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
        ? getGetApiPublicV2EvaluationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2['evaluation-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicV2EvaluationRulesKey() {
  return ['api', '/api/public/v2/evaluation-rules', 'POST'] as const
}

export function usePostApiPublicV2EvaluationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicV2EvaluationRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$post']> },
      ) => parseResponse(client.api.public.v2['evaluation-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2EvaluationRulesEvaluationRuleIdKey(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
  >,
) {
  return ['api', '/api/public/v2/evaluation-rules/:evaluationRuleId', args] as const
}

export function useGetApiPublicV2EvaluationRulesEvaluationRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
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
        ? getGetApiPublicV2EvaluationRulesEvaluationRuleIdKey(args)
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
                (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
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
          client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2EvaluationRulesEvaluationRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
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
        ? getGetApiPublicV2EvaluationRulesEvaluationRuleIdKey(args)
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
                (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
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
          client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicV2EvaluationRulesEvaluationRuleIdKey() {
  return ['api', '/api/public/v2/evaluation-rules/:evaluationRuleId', 'DELETE'] as const
}

export function useDeleteApiPublicV2EvaluationRulesEvaluationRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicV2EvaluationRulesEvaluationRuleIdKey()
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
            (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiPublicV2EvaluationRulesEvaluationRuleIdKey() {
  return ['api', '/api/public/v2/evaluation-rules/:evaluationRuleId', 'PATCH'] as const
}

export function usePatchApiPublicV2EvaluationRulesEvaluationRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicV2EvaluationRulesEvaluationRuleIdKey()
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
            (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2EvaluatorsKey(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$get>,
) {
  return ['api', '/api/public/v2/evaluators', args] as const
}

export function useGetApiPublicV2Evaluators<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
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
        ? getGetApiPublicV2EvaluatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.evaluators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2Evaluators<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
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
        ? getGetApiPublicV2EvaluatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.evaluators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicV2EvaluatorsKey() {
  return ['api', '/api/public/v2/evaluators', 'POST'] as const
}

export function usePostApiPublicV2Evaluators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.v2.evaluators.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicV2EvaluatorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.public.v2.evaluators.$post> },
      ) => parseResponse(client.api.public.v2.evaluators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2EvaluatorsEvaluatorIdKey(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>,
) {
  return ['api', '/api/public/v2/evaluators/:evaluatorId', args] as const
}

export function useGetApiPublicV2EvaluatorsEvaluatorId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
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
        ? getGetApiPublicV2EvaluatorsEvaluatorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2EvaluatorsEvaluatorId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
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
        ? getGetApiPublicV2EvaluatorsEvaluatorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicV2EvaluatorsEvaluatorIdKey() {
  return ['api', '/api/public/v2/evaluators/:evaluatorId', 'DELETE'] as const
}

export function useDeleteApiPublicV2EvaluatorsEvaluatorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicV2EvaluatorsEvaluatorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>
        },
      ) =>
        parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiPublicV2EvaluatorsEvaluatorIdKey() {
  return ['api', '/api/public/v2/evaluators/:evaluatorId', 'PATCH'] as const
}

export function usePatchApiPublicV2EvaluatorsEvaluatorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicV2EvaluatorsEvaluatorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>
        },
      ) =>
        parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2EvaluatorsEvaluatorIdVersionsKey(
  args: InferRequestType<
    (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
  >,
) {
  return ['api', '/api/public/v2/evaluators/:evaluatorId/versions', args] as const
}

export function useGetApiPublicV2EvaluatorsEvaluatorIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
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
        ? getGetApiPublicV2EvaluatorsEvaluatorIdVersionsKey(args)
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
                (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
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
          client.api.public.v2.evaluators[':evaluatorId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2EvaluatorsEvaluatorIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
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
        ? getGetApiPublicV2EvaluatorsEvaluatorIdVersionsKey(args)
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
                (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
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
          client.api.public.v2.evaluators[':evaluatorId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicExperimentsKey(
  args: InferRequestType<typeof client.api.public.experiments.$get>,
) {
  return ['api', '/api/public/experiments', args] as const
}

export function useGetApiPublicExperiments<TError = unknown>(
  args: InferRequestType<typeof client.api.public.experiments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>
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
        ? getGetApiPublicExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicExperiments<TError = unknown>(
  args: InferRequestType<typeof client.api.public.experiments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>
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
        ? getGetApiPublicExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicExperimentItemsKey(
  args: InferRequestType<(typeof client.api.public)['experiment-items']['$get']>,
) {
  return ['api', '/api/public/experiment-items', args] as const
}

export function useGetApiPublicExperimentItems<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['experiment-items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
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
        ? getGetApiPublicExperimentItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['experiment-items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicExperimentItems<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['experiment-items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
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
        ? getGetApiPublicExperimentItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['experiment-items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicFeedbackKey() {
  return ['api', '/api/public/feedback', 'POST'] as const
}

export function usePostApiPublicFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.feedback.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.public.feedback.$post> }) =>
        parseResponse(client.api.public.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicHealthKey() {
  return ['api', '/api/public/health'] as const
}

export function useGetApiPublicHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPublicHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPublicHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicLlmConnectionsKey(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$get']>,
) {
  return ['api', '/api/public/llm-connections', args] as const
}

export function useGetApiPublicLlmConnections<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
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
        ? getGetApiPublicLlmConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['llm-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicLlmConnections<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
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
        ? getGetApiPublicLlmConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['llm-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPublicLlmConnectionsKey() {
  return ['api', '/api/public/llm-connections', 'PUT'] as const
}

export function usePutApiPublicLlmConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public)['llm-connections']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPublicLlmConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.public)['llm-connections']['$put']> },
      ) => parseResponse(client.api.public['llm-connections'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicLlmConnectionsIdKey() {
  return ['api', '/api/public/llm-connections/:id', 'DELETE'] as const
}

export function useDeleteApiPublicLlmConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['llm-connections'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public)['llm-connections'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicLlmConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.public)['llm-connections'][':id']['$delete']>
        },
      ) => parseResponse(client.api.public['llm-connections'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicOrganizationsLlmConnectionsKey(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$get']>,
) {
  return ['api', '/api/public/organizations/llm-connections', args] as const
}

export function useGetApiPublicOrganizationsLlmConnections<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>>
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
        ? getGetApiPublicOrganizationsLlmConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.organizations['llm-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicOrganizationsLlmConnections<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>>
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
        ? getGetApiPublicOrganizationsLlmConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.organizations['llm-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPublicOrganizationsLlmConnectionsKey() {
  return ['api', '/api/public/organizations/llm-connections', 'PUT'] as const
}

export function usePutApiPublicOrganizationsLlmConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPublicOrganizationsLlmConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$put']>
        },
      ) =>
        parseResponse(client.api.public.organizations['llm-connections'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicOrganizationsLlmConnectionsIdKey() {
  return ['api', '/api/public/organizations/llm-connections/:id', 'DELETE'] as const
}

export function useDeleteApiPublicOrganizationsLlmConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.organizations)['llm-connections'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.organizations)['llm-connections'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicOrganizationsLlmConnectionsIdKey()
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
            (typeof client.api.public.organizations)['llm-connections'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.organizations['llm-connections'][':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicMediaMediaIdKey(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$get']>,
) {
  return ['api', '/api/public/media/:mediaId', args] as const
}

export function useGetApiPublicMediaMediaId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
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
        ? getGetApiPublicMediaMediaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.media[':mediaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicMediaMediaId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
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
        ? getGetApiPublicMediaMediaIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.media[':mediaId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiPublicMediaMediaIdKey() {
  return ['api', '/api/public/media/:mediaId', 'PATCH'] as const
}

export function usePatchApiPublicMediaMediaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.media)[':mediaId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicMediaMediaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.public.media)[':mediaId']['$patch']> },
      ) => parseResponse(client.api.public.media[':mediaId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPublicMediaKey() {
  return ['api', '/api/public/media', 'POST'] as const
}

export function usePostApiPublicMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.media.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.media.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.public.media.$post> }) =>
        parseResponse(client.api.public.media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2MetricsKey(
  args: InferRequestType<typeof client.api.public.v2.metrics.$get>,
) {
  return ['api', '/api/public/v2/metrics', args] as const
}

export function useGetApiPublicV2Metrics<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>
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
        ? getGetApiPublicV2MetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2Metrics<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>
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
        ? getGetApiPublicV2MetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicModelsKey(
  args: InferRequestType<typeof client.api.public.models.$get>,
) {
  return ['api', '/api/public/models', args] as const
}

export function useGetApiPublicModels<TError = unknown>(
  args: InferRequestType<typeof client.api.public.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>>
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
        ? getGetApiPublicModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicModels<TError = unknown>(
  args: InferRequestType<typeof client.api.public.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>>
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
        ? getGetApiPublicModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicModelsKey() {
  return ['api', '/api/public/models', 'POST'] as const
}

export function usePostApiPublicModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.models.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.public.models.$post> }) =>
        parseResponse(client.api.public.models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicModelsIdKey(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$get']>,
) {
  return ['api', '/api/public/models/:id', args] as const
}

export function useGetApiPublicModelsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>
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
        ? getGetApiPublicModelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.models[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicModelsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>
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
        ? getGetApiPublicModelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.models[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPublicModelsIdKey() {
  return ['api', '/api/public/models/:id', 'PUT'] as const
}

export function usePutApiPublicModelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.public.models)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.models)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPublicModelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.public.models)[':id']['$put']> },
      ) => parseResponse(client.api.public.models[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicModelsIdKey() {
  return ['api', '/api/public/models/:id', 'DELETE'] as const
}

export function useDeleteApiPublicModelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.models)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.models)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicModelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.public.models)[':id']['$delete']> },
      ) => parseResponse(client.api.public.models[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2ObservationsKey(
  args: InferRequestType<typeof client.api.public.v2.observations.$get>,
) {
  return ['api', '/api/public/v2/observations', args] as const
}

export function useGetApiPublicV2Observations<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.observations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
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
        ? getGetApiPublicV2ObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.observations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2Observations<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.observations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
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
        ? getGetApiPublicV2ObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.observations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicOtelV1TracesKey() {
  return ['api', '/api/public/otel/v1/traces', 'POST'] as const
}

export function usePostApiPublicOtelV1Traces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.otel.v1.traces.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.otel.v1.traces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicOtelV1TracesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.public.otel.v1.traces.$post> },
      ) => parseResponse(client.api.public.otel.v1.traces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicOrganizationsMembershipsKey() {
  return ['api', '/api/public/organizations/memberships'] as const
}

export function useGetApiPublicOrganizationsMemberships<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicOrganizationsMembershipsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.organizations.memberships.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicOrganizationsMemberships<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicOrganizationsMembershipsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.organizations.memberships.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPublicOrganizationsMembershipsKey() {
  return ['api', '/api/public/organizations/memberships', 'PUT'] as const
}

export function usePutApiPublicOrganizationsMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.memberships.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.organizations.memberships.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPublicOrganizationsMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.public.organizations.memberships.$put> },
      ) => parseResponse(client.api.public.organizations.memberships.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicOrganizationsMembershipsKey() {
  return ['api', '/api/public/organizations/memberships', 'DELETE'] as const
}

export function useDeleteApiPublicOrganizationsMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.memberships.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.organizations.memberships.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicOrganizationsMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.public.organizations.memberships.$delete> },
      ) => parseResponse(client.api.public.organizations.memberships.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicProjectsProjectIdMembershipsKey(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>,
) {
  return ['api', '/api/public/projects/:projectId/memberships', args] as const
}

export function useGetApiPublicProjectsProjectIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
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
        ? getGetApiPublicProjectsProjectIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.projects[':projectId'].memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicProjectsProjectIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
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
        ? getGetApiPublicProjectsProjectIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.projects[':projectId'].memberships.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiPublicProjectsProjectIdMembershipsKey() {
  return ['api', '/api/public/projects/:projectId/memberships', 'PUT'] as const
}

export function usePutApiPublicProjectsProjectIdMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPublicProjectsProjectIdMembershipsKey()
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
            (typeof client.api.public.projects)[':projectId']['memberships']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.public.projects[':projectId'].memberships.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicProjectsProjectIdMembershipsKey() {
  return ['api', '/api/public/projects/:projectId/memberships', 'DELETE'] as const
}

export function useDeleteApiPublicProjectsProjectIdMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicProjectsProjectIdMembershipsKey()
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
            (typeof client.api.public.projects)[':projectId']['memberships']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.projects[':projectId'].memberships.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicOrganizationsProjectsKey() {
  return ['api', '/api/public/organizations/projects'] as const
}

export function useGetApiPublicOrganizationsProjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicOrganizationsProjectsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.organizations.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicOrganizationsProjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicOrganizationsProjectsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.organizations.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicOrganizationsApiKeysKey() {
  return ['api', '/api/public/organizations/apiKeys'] as const
}

export function useGetApiPublicOrganizationsApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicOrganizationsApiKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.organizations.apiKeys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicOrganizationsApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicOrganizationsApiKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.organizations.apiKeys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicProjectsKey() {
  return ['api', '/api/public/projects'] as const
}

export function useGetApiPublicProjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPublicProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicProjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPublicProjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.projects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicProjectsKey() {
  return ['api', '/api/public/projects', 'POST'] as const
}

export function usePostApiPublicProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.public.projects.$post> }) =>
        parseResponse(client.api.public.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiPublicProjectsProjectIdKey() {
  return ['api', '/api/public/projects/:projectId', 'PUT'] as const
}

export function usePutApiPublicProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPublicProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public.projects)[':projectId']['$put']> },
      ) => parseResponse(client.api.public.projects[':projectId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicProjectsProjectIdKey() {
  return ['api', '/api/public/projects/:projectId', 'DELETE'] as const
}

export function useDeleteApiPublicProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public.projects)[':projectId']['$delete']> },
      ) => parseResponse(client.api.public.projects[':projectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicProjectsProjectIdApiKeysKey(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>,
) {
  return ['api', '/api/public/projects/:projectId/apiKeys', args] as const
}

export function useGetApiPublicProjectsProjectIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>
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
        ? getGetApiPublicProjectsProjectIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.projects[':projectId'].apiKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicProjectsProjectIdApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>
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
        ? getGetApiPublicProjectsProjectIdApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.projects[':projectId'].apiKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicProjectsProjectIdApiKeysKey() {
  return ['api', '/api/public/projects/:projectId/apiKeys', 'POST'] as const
}

export function usePostApiPublicProjectsProjectIdApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicProjectsProjectIdApiKeysKey()
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
            (typeof client.api.public.projects)[':projectId']['apiKeys']['$post']
          >
        },
      ) =>
        parseResponse(client.api.public.projects[':projectId'].apiKeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicProjectsProjectIdApiKeysApiKeyIdKey() {
  return ['api', '/api/public/projects/:projectId/apiKeys/:apiKeyId', 'DELETE'] as const
}

export function useDeleteApiPublicProjectsProjectIdApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicProjectsProjectIdApiKeysApiKeyIdKey()
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
            (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.projects[':projectId'].apiKeys[':apiKeyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiPublicV2PromptsNameVersionsVersionKey() {
  return ['api', '/api/public/v2/prompts/:name/versions/:version', 'PATCH'] as const
}

export function usePatchApiPublicV2PromptsNameVersionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicV2PromptsNameVersionsVersionKey()
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
            (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.public.v2.prompts[':name'].versions[':version'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2PromptsPromptNameKey(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>,
) {
  return ['api', '/api/public/v2/prompts/:promptName', args] as const
}

export function useGetApiPublicV2PromptsPromptName<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
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
        ? getGetApiPublicV2PromptsPromptNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.v2.prompts[':promptName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2PromptsPromptName<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
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
        ? getGetApiPublicV2PromptsPromptNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.v2.prompts[':promptName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicV2PromptsPromptNameKey() {
  return ['api', '/api/public/v2/prompts/:promptName', 'DELETE'] as const
}

export function useDeleteApiPublicV2PromptsPromptName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicV2PromptsPromptNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>
        },
      ) => parseResponse(client.api.public.v2.prompts[':promptName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV2PromptsKey(
  args: InferRequestType<typeof client.api.public.v2.prompts.$get>,
) {
  return ['api', '/api/public/v2/prompts', args] as const
}

export function useGetApiPublicV2Prompts<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.prompts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>
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
        ? getGetApiPublicV2PromptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV2Prompts<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v2.prompts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>
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
        ? getGetApiPublicV2PromptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v2.prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicV2PromptsKey() {
  return ['api', '/api/public/v2/prompts', 'POST'] as const
}

export function usePostApiPublicV2Prompts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.v2.prompts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicV2PromptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.public.v2.prompts.$post> },
      ) => parseResponse(client.api.public.v2.prompts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicScimServiceProviderConfigKey() {
  return ['api', '/api/public/scim/ServiceProviderConfig'] as const
}

export function useGetApiPublicScimServiceProviderConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicScimServiceProviderConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.scim.ServiceProviderConfig.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicScimServiceProviderConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicScimServiceProviderConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.scim.ServiceProviderConfig.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicScimResourceTypesKey() {
  return ['api', '/api/public/scim/ResourceTypes'] as const
}

export function useGetApiPublicScimResourceTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicScimResourceTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.scim.ResourceTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicScimResourceTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicScimResourceTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.scim.ResourceTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicScimSchemasKey() {
  return ['api', '/api/public/scim/Schemas'] as const
}

export function useGetApiPublicScimSchemas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicScimSchemasKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.scim.Schemas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicScimSchemas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPublicScimSchemasKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.scim.Schemas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicScimUsersKey(
  args: InferRequestType<typeof client.api.public.scim.Users.$get>,
) {
  return ['api', '/api/public/scim/Users', args] as const
}

export function useGetApiPublicScimUsers<TError = unknown>(
  args: InferRequestType<typeof client.api.public.scim.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>
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
        ? getGetApiPublicScimUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.scim.Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicScimUsers<TError = unknown>(
  args: InferRequestType<typeof client.api.public.scim.Users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>
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
        ? getGetApiPublicScimUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.scim.Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicScimUsersKey() {
  return ['api', '/api/public/scim/Users', 'POST'] as const
}

export function usePostApiPublicScimUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.scim.Users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicScimUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.public.scim.Users.$post> },
      ) => parseResponse(client.api.public.scim.Users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicScimUsersUserIdKey(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$get']>,
) {
  return ['api', '/api/public/scim/Users/:userId', args] as const
}

export function useGetApiPublicScimUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
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
        ? getGetApiPublicScimUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.scim.Users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicScimUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
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
        ? getGetApiPublicScimUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.scim.Users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicScimUsersUserIdKey() {
  return ['api', '/api/public/scim/Users/:userId', 'DELETE'] as const
}

export function useDeleteApiPublicScimUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicScimUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$delete']> },
      ) => parseResponse(client.api.public.scim.Users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicScoreConfigsKey(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$get']>,
) {
  return ['api', '/api/public/score-configs', args] as const
}

export function useGetApiPublicScoreConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>
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
        ? getGetApiPublicScoreConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['score-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicScoreConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>
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
        ? getGetApiPublicScoreConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public['score-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicScoreConfigsKey() {
  return ['api', '/api/public/score-configs', 'POST'] as const
}

export function usePostApiPublicScoreConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['score-configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public)['score-configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicScoreConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.public)['score-configs']['$post']> },
      ) => parseResponse(client.api.public['score-configs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicScoreConfigsConfigIdKey(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$get']>,
) {
  return ['api', '/api/public/score-configs/:configId', args] as const
}

export function useGetApiPublicScoreConfigsConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
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
        ? getGetApiPublicScoreConfigsConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public['score-configs'][':configId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicScoreConfigsConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
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
        ? getGetApiPublicScoreConfigsConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public['score-configs'][':configId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiPublicScoreConfigsConfigIdKey() {
  return ['api', '/api/public/score-configs/:configId', 'PATCH'] as const
}

export function usePatchApiPublicScoreConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicScoreConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$patch']>
        },
      ) =>
        parseResponse(client.api.public['score-configs'][':configId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPublicScoresKey() {
  return ['api', '/api/public/scores', 'POST'] as const
}

export function usePostApiPublicScores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scores.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.scores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicScoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.public.scores.$post> }) =>
        parseResponse(client.api.public.scores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicScoresScoreIdKey() {
  return ['api', '/api/public/scores/:scoreId', 'DELETE'] as const
}

export function useDeleteApiPublicScoresScoreId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.scores)[':scoreId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.scores)[':scoreId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicScoresScoreIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public.scores)[':scoreId']['$delete']> },
      ) => parseResponse(client.api.public.scores[':scoreId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicV3ScoresKey(
  args: InferRequestType<typeof client.api.public.v3.scores.$get>,
) {
  return ['api', '/api/public/v3/scores', args] as const
}

export function useGetApiPublicV3Scores<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v3.scores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>
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
        ? getGetApiPublicV3ScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v3.scores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicV3Scores<TError = unknown>(
  args: InferRequestType<typeof client.api.public.v3.scores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>
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
        ? getGetApiPublicV3ScoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.v3.scores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicSkillsKey(
  args: InferRequestType<typeof client.api.public.skills.$get>,
) {
  return ['api', '/api/public/skills', args] as const
}

export function useGetApiPublicSkills<TError = unknown>(
  args: InferRequestType<typeof client.api.public.skills.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>>
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
        ? getGetApiPublicSkillsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.skills.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicSkills<TError = unknown>(
  args: InferRequestType<typeof client.api.public.skills.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>>
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
        ? getGetApiPublicSkillsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.skills.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicSkillsKey() {
  return ['api', '/api/public/skills', 'POST'] as const
}

export function usePostApiPublicSkills<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.skills.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicSkillsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.public.skills.$post> }) =>
        parseResponse(client.api.public.skills.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicSkillsSkillNameKey(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$get']>,
) {
  return ['api', '/api/public/skills/:skillName', args] as const
}

export function useGetApiPublicSkillsSkillName<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
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
        ? getGetApiPublicSkillsSkillNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.skills[':skillName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicSkillsSkillName<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
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
        ? getGetApiPublicSkillsSkillNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.skills[':skillName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiPublicSkillsSkillNameKey() {
  return ['api', '/api/public/skills/:skillName', 'PATCH'] as const
}

export function usePatchApiPublicSkillsSkillName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.skills)[':skillName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicSkillsSkillNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public.skills)[':skillName']['$patch']> },
      ) => parseResponse(client.api.public.skills[':skillName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicSkillsFilesContentKey(
  args: InferRequestType<typeof client.api.public.skills.files.content.$get>,
) {
  return ['api', '/api/public/skills/files/content', args] as const
}

export function useGetApiPublicSkillsFilesContent<TError = unknown>(
  args: InferRequestType<typeof client.api.public.skills.files.content.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>
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
        ? getGetApiPublicSkillsFilesContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.skills.files.content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicSkillsFilesContent<TError = unknown>(
  args: InferRequestType<typeof client.api.public.skills.files.content.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>
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
        ? getGetApiPublicSkillsFilesContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.skills.files.content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicSkillsSkillNameVersionsSkillVersionKey() {
  return ['api', '/api/public/skills/:skillName/versions/:skillVersion', 'DELETE'] as const
}

export function useDeleteApiPublicSkillsSkillNameVersionsSkillVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicSkillsSkillNameVersionsSkillVersionKey()
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
            (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.skills[':skillName'].versions[':skillVersion'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiPublicSkillsSkillNameVersionsSkillVersionKey() {
  return ['api', '/api/public/skills/:skillName/versions/:skillVersion', 'PATCH'] as const
}

export function usePatchApiPublicSkillsSkillNameVersionsSkillVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicSkillsSkillNameVersionsSkillVersionKey()
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
            (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.public.skills[':skillName'].versions[':skillVersion'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicTracesTraceIdKey() {
  return ['api', '/api/public/traces/:traceId', 'DELETE'] as const
}

export function useDeleteApiPublicTracesTraceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.traces)[':traceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.traces)[':traceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicTracesTraceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.public.traces)[':traceId']['$delete']> },
      ) => parseResponse(client.api.public.traces[':traceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicTracesKey() {
  return ['api', '/api/public/traces', 'DELETE'] as const
}

export function useDeleteApiPublicTraces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.traces.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.traces.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicTracesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.public.traces.$delete> }) =>
        parseResponse(client.api.public.traces.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicUnstableOrganizationsBillableUnitsKey(
  args: InferRequestType<
    (typeof client.api.public.unstable.organizations)['billable-units']['$get']
  >,
) {
  return ['api', '/api/public/unstable/organizations/billable-units', args] as const
}

export function useGetApiPublicUnstableOrganizationsBillableUnits<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public.unstable.organizations)['billable-units']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public.unstable.organizations)['billable-units']['$get']
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
        ? getGetApiPublicUnstableOrganizationsBillableUnitsKey(args)
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
                (typeof client.api.public.unstable.organizations)['billable-units']['$get']
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
          client.api.public.unstable.organizations['billable-units'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableOrganizationsBillableUnits<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public.unstable.organizations)['billable-units']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public.unstable.organizations)['billable-units']['$get']
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
        ? getGetApiPublicUnstableOrganizationsBillableUnitsKey(args)
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
                (typeof client.api.public.unstable.organizations)['billable-units']['$get']
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
          client.api.public.unstable.organizations['billable-units'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicUnstableDashboardWidgetsKey(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>,
) {
  return ['api', '/api/public/unstable/dashboard-widgets', args] as const
}

export function useGetApiPublicUnstableDashboardWidgets<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
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
        ? getGetApiPublicUnstableDashboardWidgetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['dashboard-widgets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableDashboardWidgets<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
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
        ? getGetApiPublicUnstableDashboardWidgetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['dashboard-widgets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicUnstableDashboardWidgetsKey() {
  return ['api', '/api/public/unstable/dashboard-widgets', 'POST'] as const
}

export function usePostApiPublicUnstableDashboardWidgets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicUnstableDashboardWidgetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>
        },
      ) => parseResponse(client.api.public.unstable['dashboard-widgets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicUnstableDashboardWidgetsWidgetIdKey(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
  >,
) {
  return ['api', '/api/public/unstable/dashboard-widgets/:widgetId', args] as const
}

export function useGetApiPublicUnstableDashboardWidgetsWidgetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
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
        ? getGetApiPublicUnstableDashboardWidgetsWidgetIdKey(args)
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
                (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
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
          client.api.public.unstable['dashboard-widgets'][':widgetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableDashboardWidgetsWidgetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
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
        ? getGetApiPublicUnstableDashboardWidgetsWidgetIdKey(args)
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
                (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
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
          client.api.public.unstable['dashboard-widgets'][':widgetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicUnstableDashboardWidgetsWidgetIdKey() {
  return ['api', '/api/public/unstable/dashboard-widgets/:widgetId', 'DELETE'] as const
}

export function useDeleteApiPublicUnstableDashboardWidgetsWidgetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicUnstableDashboardWidgetsWidgetIdKey()
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
            (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.unstable['dashboard-widgets'][':widgetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiPublicUnstableDashboardWidgetsWidgetIdKey() {
  return ['api', '/api/public/unstable/dashboard-widgets/:widgetId', 'PATCH'] as const
}

export function usePatchApiPublicUnstableDashboardWidgetsWidgetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicUnstableDashboardWidgetsWidgetIdKey()
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
            (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.public.unstable['dashboard-widgets'][':widgetId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicUnstableDashboardsKey(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$get>,
) {
  return ['api', '/api/public/unstable/dashboards', args] as const
}

export function useGetApiPublicUnstableDashboards<TError = unknown>(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>
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
        ? getGetApiPublicUnstableDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.unstable.dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableDashboards<TError = unknown>(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>
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
        ? getGetApiPublicUnstableDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.unstable.dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPublicUnstableDashboardsKey() {
  return ['api', '/api/public/unstable/dashboards', 'POST'] as const
}

export function usePostApiPublicUnstableDashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.public.unstable.dashboards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicUnstableDashboardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.public.unstable.dashboards.$post> },
      ) => parseResponse(client.api.public.unstable.dashboards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicUnstableDashboardsDashboardIdKey(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>,
) {
  return ['api', '/api/public/unstable/dashboards/:dashboardId', args] as const
}

export function useGetApiPublicUnstableDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>
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
        ? getGetApiPublicUnstableDashboardsDashboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.unstable.dashboards[':dashboardId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>
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
        ? getGetApiPublicUnstableDashboardsDashboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.unstable.dashboards[':dashboardId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiPublicUnstableDashboardsDashboardIdKey() {
  return ['api', '/api/public/unstable/dashboards/:dashboardId', 'DELETE'] as const
}

export function useDeleteApiPublicUnstableDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPublicUnstableDashboardsDashboardIdKey()
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
            (typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.unstable.dashboards[':dashboardId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiPublicUnstableDashboardsDashboardIdKey() {
  return ['api', '/api/public/unstable/dashboards/:dashboardId', 'PATCH'] as const
}

export function usePatchApiPublicUnstableDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPublicUnstableDashboardsDashboardIdKey()
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
            (typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.public.unstable.dashboards[':dashboardId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiPublicUnstableDashboardsDashboardIdPlacementsKey() {
  return ['api', '/api/public/unstable/dashboards/:dashboardId/placements', 'POST'] as const
}

export function usePostApiPublicUnstableDashboardsDashboardIdPlacements<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPublicUnstableDashboardsDashboardIdPlacementsKey()
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
            (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.public.unstable.dashboards[':dashboardId'].placements.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdKey() {
  return [
    'api',
    '/api/public/unstable/dashboards/:dashboardId/placements/:placementId',
    'DELETE',
  ] as const
}

export function useDeleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdKey()
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
            (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.public.unstable.dashboards[':dashboardId'].placements[':placementId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdKey() {
  return [
    'api',
    '/api/public/unstable/dashboards/:dashboardId/placements/:placementId',
    'PATCH',
  ] as const
}

export function usePatchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdKey()
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
            (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.public.unstable.dashboards[':dashboardId'].placements[':placementId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPublicUnstableTopicFacetsKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-facets', args] as const
}

export function useGetApiPublicUnstableTopicFacets<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
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
        ? getGetApiPublicUnstableTopicFacetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['topic-facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableTopicFacets<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
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
        ? getGetApiPublicUnstableTopicFacetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['topic-facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicUnstableTopicFacetsFacetIdKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-facets/:facetId', args] as const
}

export function useGetApiPublicUnstableTopicFacetsFacetId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>
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
        ? getGetApiPublicUnstableTopicFacetsFacetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.unstable['topic-facets'][':facetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableTopicFacetsFacetId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>
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
        ? getGetApiPublicUnstableTopicFacetsFacetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.unstable['topic-facets'][':facetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicUnstableTopicsKey(
  args: InferRequestType<typeof client.api.public.unstable.topics.$get>,
) {
  return ['api', '/api/public/unstable/topics', args] as const
}

export function useGetApiPublicUnstableTopics<TError = unknown>(
  args: InferRequestType<typeof client.api.public.unstable.topics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
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
        ? getGetApiPublicUnstableTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.unstable.topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableTopics<TError = unknown>(
  args: InferRequestType<typeof client.api.public.unstable.topics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
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
        ? getGetApiPublicUnstableTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.public.unstable.topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicUnstableTopicsTopicIdKey(
  args: InferRequestType<(typeof client.api.public.unstable.topics)[':topicId']['$get']>,
) {
  return ['api', '/api/public/unstable/topics/:topicId', args] as const
}

export function useGetApiPublicUnstableTopicsTopicId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable.topics)[':topicId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable.topics)[':topicId']['$get']>>
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
        ? getGetApiPublicUnstableTopicsTopicIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable.topics)[':topicId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable.topics[':topicId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableTopicsTopicId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable.topics)[':topicId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable.topics)[':topicId']['$get']>>
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
        ? getGetApiPublicUnstableTopicsTopicIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable.topics)[':topicId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable.topics[':topicId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicUnstableTopicRulesKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-rules', args] as const
}

export function useGetApiPublicUnstableTopicRules<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
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
        ? getGetApiPublicUnstableTopicRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['topic-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableTopicRules<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
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
        ? getGetApiPublicUnstableTopicRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['topic-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicUnstableTopicRulesRuleIdKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-rules/:ruleId', args] as const
}

export function useGetApiPublicUnstableTopicRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>
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
        ? getGetApiPublicUnstableTopicRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.unstable['topic-rules'][':ruleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableTopicRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>
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
        ? getGetApiPublicUnstableTopicRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.public.unstable['topic-rules'][':ruleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicUnstableTopicSummariesKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-summaries']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-summaries', args] as const
}

export function useGetApiPublicUnstableTopicSummaries<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-summaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
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
        ? getGetApiPublicUnstableTopicSummariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['topic-summaries'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableTopicSummaries<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-summaries']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
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
        ? getGetApiPublicUnstableTopicSummariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['topic-summaries'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPublicUnstableTopicAssignmentsKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-assignments']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-assignments', args] as const
}

export function useGetApiPublicUnstableTopicAssignments<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-assignments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
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
        ? getGetApiPublicUnstableTopicAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['topic-assignments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPublicUnstableTopicAssignments<TError = unknown>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-assignments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
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
        ? getGetApiPublicUnstableTopicAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.public.unstable['topic-assignments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
