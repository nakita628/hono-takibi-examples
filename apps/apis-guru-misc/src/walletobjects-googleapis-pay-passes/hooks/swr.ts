import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWalletobjectsKey() {
  return ['walletobjects'] as const
}

export function getGetWalletobjectsV1EventTicketClassKey(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass', args] as const
}

export function useGetWalletobjectsV1EventTicketClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
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
        ? getGetWalletobjectsV1EventTicketClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.eventTicketClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1EventTicketClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
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
        ? getGetWalletobjectsV1EventTicketClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.eventTicketClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1EventTicketClassKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass', 'POST'] as const
}

export function usePostWalletobjectsV1EventTicketClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketClass.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1EventTicketClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.eventTicketClass.$post> },
      ) => parseResponse(client.walletobjects.v1.eventTicketClass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1EventTicketClassResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass/:resourceId', args] as const
}

export function useGetWalletobjectsV1EventTicketClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1EventTicketClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.eventTicketClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1EventTicketClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1EventTicketClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.eventTicketClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1EventTicketClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1EventTicketClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1EventTicketClassResourceIdKey()
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
            (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.eventTicketClass[':resourceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1EventTicketClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketClass/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1EventTicketClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1EventTicketClassResourceIdKey()
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
            (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.eventTicketClass[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1EventTicketClassResourceIdAddMessageKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/eventTicketClass/:resourceId/addMessage',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1EventTicketClassResourceIdAddMessage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1EventTicketClassResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.eventTicketClass)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.eventTicketClass[':resourceId'].addMessage.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1EventTicketObjectKey(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject', args] as const
}

export function useGetWalletobjectsV1EventTicketObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
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
        ? getGetWalletobjectsV1EventTicketObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.eventTicketObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1EventTicketObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
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
        ? getGetWalletobjectsV1EventTicketObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.eventTicketObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1EventTicketObjectKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject', 'POST'] as const
}

export function usePostWalletobjectsV1EventTicketObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.eventTicketObject.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1EventTicketObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.eventTicketObject.$post> },
      ) => parseResponse(client.walletobjects.v1.eventTicketObject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1EventTicketObjectResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject/:resourceId', args] as const
}

export function useGetWalletobjectsV1EventTicketObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1EventTicketObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.eventTicketObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1EventTicketObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1EventTicketObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.eventTicketObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1EventTicketObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1EventTicketObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1EventTicketObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.eventTicketObject[':resourceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1EventTicketObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/eventTicketObject/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1EventTicketObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1EventTicketObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.eventTicketObject[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1EventTicketObjectResourceIdAddMessageKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/eventTicketObject/:resourceId/addMessage',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1EventTicketObjectResourceIdAddMessage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1EventTicketObjectResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.eventTicketObject[':resourceId'].addMessage.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/eventTicketObject/:resourceId/modifyLinkedOfferObjects',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjects<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsKey()
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
            (typeof client.walletobjects.v1.eventTicketObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.eventTicketObject[':resourceId'].modifyLinkedOfferObjects.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1FlightClassKey(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/flightClass', args] as const
}

export function useGetWalletobjectsV1FlightClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>>
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
        ? getGetWalletobjectsV1FlightClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.flightClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1FlightClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.flightClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>>
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
        ? getGetWalletobjectsV1FlightClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.flightClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1FlightClassKey() {
  return ['walletobjects', '/walletobjects/v1/flightClass', 'POST'] as const
}

export function usePostWalletobjectsV1FlightClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightClass.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.flightClass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1FlightClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.flightClass.$post> },
      ) => parseResponse(client.walletobjects.v1.flightClass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1FlightClassResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/flightClass/:resourceId', args] as const
}

export function useGetWalletobjectsV1FlightClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1FlightClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.flightClass[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1FlightClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1FlightClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.flightClass[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1FlightClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/flightClass/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1FlightClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1FlightClassResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$put']>
        },
      ) =>
        parseResponse(client.walletobjects.v1.flightClass[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1FlightClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/flightClass/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1FlightClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1FlightClassResourceIdKey()
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
            (typeof client.walletobjects.v1.flightClass)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.flightClass[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1FlightClassResourceIdAddMessageKey() {
  return ['walletobjects', '/walletobjects/v1/flightClass/:resourceId/addMessage', 'POST'] as const
}

export function usePostWalletobjectsV1FlightClassResourceIdAddMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1FlightClassResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.flightClass)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.flightClass[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1FlightObjectKey(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/flightObject', args] as const
}

export function useGetWalletobjectsV1FlightObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>
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
        ? getGetWalletobjectsV1FlightObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.flightObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1FlightObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.flightObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>
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
        ? getGetWalletobjectsV1FlightObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.flightObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1FlightObjectKey() {
  return ['walletobjects', '/walletobjects/v1/flightObject', 'POST'] as const
}

export function usePostWalletobjectsV1FlightObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.flightObject.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.flightObject.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1FlightObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.flightObject.$post> },
      ) => parseResponse(client.walletobjects.v1.flightObject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1FlightObjectResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/flightObject/:resourceId', args] as const
}

export function useGetWalletobjectsV1FlightObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1FlightObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.flightObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1FlightObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1FlightObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.flightObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1FlightObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/flightObject/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1FlightObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1FlightObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.flightObject)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(client.walletobjects.v1.flightObject[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1FlightObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/flightObject/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1FlightObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1FlightObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.flightObject)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.flightObject[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1FlightObjectResourceIdAddMessageKey() {
  return ['walletobjects', '/walletobjects/v1/flightObject/:resourceId/addMessage', 'POST'] as const
}

export function usePostWalletobjectsV1FlightObjectResourceIdAddMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1FlightObjectResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.flightObject)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.flightObject[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1GenericClassKey(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/genericClass', args] as const
}

export function useGetWalletobjectsV1GenericClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>
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
        ? getGetWalletobjectsV1GenericClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.genericClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1GenericClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.genericClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>
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
        ? getGetWalletobjectsV1GenericClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.genericClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1GenericClassKey() {
  return ['walletobjects', '/walletobjects/v1/genericClass', 'POST'] as const
}

export function usePostWalletobjectsV1GenericClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.genericClass.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.genericClass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1GenericClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.genericClass.$post> },
      ) => parseResponse(client.walletobjects.v1.genericClass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1GenericClassResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/genericClass/:resourceId', args] as const
}

export function useGetWalletobjectsV1GenericClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1GenericClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.genericClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1GenericClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1GenericClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.genericClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1GenericClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/genericClass/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1GenericClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1GenericClassResourceIdKey()
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
            (typeof client.walletobjects.v1.genericClass)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(client.walletobjects.v1.genericClass[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1GenericClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/genericClass/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1GenericClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1GenericClassResourceIdKey()
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
            (typeof client.walletobjects.v1.genericClass)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.genericClass[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1GenericObjectKey(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/genericObject', args] as const
}

export function useGetWalletobjectsV1GenericObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>
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
        ? getGetWalletobjectsV1GenericObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.genericObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1GenericObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.genericObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>
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
        ? getGetWalletobjectsV1GenericObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.genericObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1GenericObjectKey() {
  return ['walletobjects', '/walletobjects/v1/genericObject', 'POST'] as const
}

export function usePostWalletobjectsV1GenericObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.genericObject.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.genericObject.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1GenericObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.genericObject.$post> },
      ) => parseResponse(client.walletobjects.v1.genericObject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1GenericObjectResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/genericObject/:resourceId', args] as const
}

export function useGetWalletobjectsV1GenericObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1GenericObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.genericObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1GenericObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1GenericObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.genericObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1GenericObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/genericObject/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1GenericObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1GenericObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.genericObject)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.genericObject[':resourceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1GenericObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/genericObject/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1GenericObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1GenericObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.genericObject)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.genericObject[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1GiftCardClassKey(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/giftCardClass', args] as const
}

export function useGetWalletobjectsV1GiftCardClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>
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
        ? getGetWalletobjectsV1GiftCardClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.giftCardClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1GiftCardClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>
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
        ? getGetWalletobjectsV1GiftCardClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.giftCardClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1GiftCardClassKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardClass', 'POST'] as const
}

export function usePostWalletobjectsV1GiftCardClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.giftCardClass.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.giftCardClass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1GiftCardClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.giftCardClass.$post> },
      ) => parseResponse(client.walletobjects.v1.giftCardClass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1GiftCardClassResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/giftCardClass/:resourceId', args] as const
}

export function useGetWalletobjectsV1GiftCardClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1GiftCardClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.giftCardClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1GiftCardClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1GiftCardClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.giftCardClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1GiftCardClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardClass/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1GiftCardClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1GiftCardClassResourceIdKey()
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
            (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.giftCardClass[':resourceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1GiftCardClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardClass/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1GiftCardClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1GiftCardClassResourceIdKey()
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
            (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.giftCardClass[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1GiftCardClassResourceIdAddMessageKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/giftCardClass/:resourceId/addMessage',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1GiftCardClassResourceIdAddMessage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1GiftCardClassResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.giftCardClass)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.giftCardClass[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1GiftCardObjectKey(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/giftCardObject', args] as const
}

export function useGetWalletobjectsV1GiftCardObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>
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
        ? getGetWalletobjectsV1GiftCardObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.giftCardObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1GiftCardObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>
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
        ? getGetWalletobjectsV1GiftCardObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.giftCardObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1GiftCardObjectKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardObject', 'POST'] as const
}

export function usePostWalletobjectsV1GiftCardObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.giftCardObject.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.giftCardObject.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1GiftCardObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.giftCardObject.$post> },
      ) => parseResponse(client.walletobjects.v1.giftCardObject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1GiftCardObjectResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/giftCardObject/:resourceId', args] as const
}

export function useGetWalletobjectsV1GiftCardObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1GiftCardObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.giftCardObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1GiftCardObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1GiftCardObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.giftCardObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1GiftCardObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardObject/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1GiftCardObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1GiftCardObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.giftCardObject[':resourceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1GiftCardObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/giftCardObject/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1GiftCardObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1GiftCardObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.giftCardObject[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1GiftCardObjectResourceIdAddMessageKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/giftCardObject/:resourceId/addMessage',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1GiftCardObjectResourceIdAddMessage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1GiftCardObjectResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.giftCardObject)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.giftCardObject[':resourceId'].addMessage.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1IssuerKey(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/issuer', args] as const
}

export function useGetWalletobjectsV1Issuer<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
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
        ? getGetWalletobjectsV1IssuerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.issuer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1Issuer<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.issuer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
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
        ? getGetWalletobjectsV1IssuerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.issuer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1IssuerKey() {
  return ['walletobjects', '/walletobjects/v1/issuer', 'POST'] as const
}

export function usePostWalletobjectsV1Issuer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.issuer.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.issuer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1IssuerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.issuer.$post> },
      ) => parseResponse(client.walletobjects.v1.issuer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1IssuerResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/issuer/:resourceId', args] as const
}

export function useGetWalletobjectsV1IssuerResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1IssuerResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.issuer[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1IssuerResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1IssuerResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.issuer[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1IssuerResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/issuer/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1IssuerResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1IssuerResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$put']>
        },
      ) => parseResponse(client.walletobjects.v1.issuer[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1IssuerResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/issuer/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1IssuerResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1IssuerResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.walletobjects.v1.issuer)[':resourceId']['$patch']>
        },
      ) => parseResponse(client.walletobjects.v1.issuer[':resourceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1JwtKey() {
  return ['walletobjects', '/walletobjects/v1/jwt', 'POST'] as const
}

export function usePostWalletobjectsV1Jwt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.jwt.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.jwt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1JwtKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.jwt.$post> },
      ) => parseResponse(client.walletobjects.v1.jwt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1LoyaltyClassKey(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass', args] as const
}

export function useGetWalletobjectsV1LoyaltyClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>
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
        ? getGetWalletobjectsV1LoyaltyClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.loyaltyClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1LoyaltyClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>
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
        ? getGetWalletobjectsV1LoyaltyClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.loyaltyClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1LoyaltyClassKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass', 'POST'] as const
}

export function usePostWalletobjectsV1LoyaltyClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyClass.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1LoyaltyClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.loyaltyClass.$post> },
      ) => parseResponse(client.walletobjects.v1.loyaltyClass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1LoyaltyClassResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass/:resourceId', args] as const
}

export function useGetWalletobjectsV1LoyaltyClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1LoyaltyClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.loyaltyClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1LoyaltyClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1LoyaltyClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.loyaltyClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1LoyaltyClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1LoyaltyClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1LoyaltyClassResourceIdKey()
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
            (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(client.walletobjects.v1.loyaltyClass[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1LoyaltyClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1LoyaltyClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1LoyaltyClassResourceIdKey()
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
            (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.loyaltyClass[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1LoyaltyClassResourceIdAddMessageKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyClass/:resourceId/addMessage', 'POST'] as const
}

export function usePostWalletobjectsV1LoyaltyClassResourceIdAddMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1LoyaltyClassResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.loyaltyClass)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.loyaltyClass[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1LoyaltyObjectKey(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject', args] as const
}

export function useGetWalletobjectsV1LoyaltyObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>
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
        ? getGetWalletobjectsV1LoyaltyObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.loyaltyObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1LoyaltyObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>
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
        ? getGetWalletobjectsV1LoyaltyObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.loyaltyObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1LoyaltyObjectKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject', 'POST'] as const
}

export function usePostWalletobjectsV1LoyaltyObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.loyaltyObject.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1LoyaltyObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.loyaltyObject.$post> },
      ) => parseResponse(client.walletobjects.v1.loyaltyObject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1LoyaltyObjectResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject/:resourceId', args] as const
}

export function useGetWalletobjectsV1LoyaltyObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1LoyaltyObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.loyaltyObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1LoyaltyObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1LoyaltyObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.loyaltyObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1LoyaltyObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1LoyaltyObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1LoyaltyObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.loyaltyObject[':resourceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1LoyaltyObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/loyaltyObject/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1LoyaltyObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1LoyaltyObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.loyaltyObject[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1LoyaltyObjectResourceIdAddMessageKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/loyaltyObject/:resourceId/addMessage',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1LoyaltyObjectResourceIdAddMessage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1LoyaltyObjectResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.loyaltyObject[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/loyaltyObject/:resourceId/modifyLinkedOfferObjects',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjects<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsKey()
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
            (typeof client.walletobjects.v1.loyaltyObject)[':resourceId']['modifyLinkedOfferObjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.loyaltyObject[':resourceId'].modifyLinkedOfferObjects.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1OfferClassKey(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/offerClass', args] as const
}

export function useGetWalletobjectsV1OfferClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>>
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
        ? getGetWalletobjectsV1OfferClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.offerClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1OfferClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.offerClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>>
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
        ? getGetWalletobjectsV1OfferClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.offerClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1OfferClassKey() {
  return ['walletobjects', '/walletobjects/v1/offerClass', 'POST'] as const
}

export function usePostWalletobjectsV1OfferClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerClass.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.offerClass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1OfferClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.offerClass.$post> },
      ) => parseResponse(client.walletobjects.v1.offerClass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1OfferClassResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/offerClass/:resourceId', args] as const
}

export function useGetWalletobjectsV1OfferClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1OfferClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.offerClass[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1OfferClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1OfferClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.offerClass[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1OfferClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/offerClass/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1OfferClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1OfferClassResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$put']>
        },
      ) =>
        parseResponse(client.walletobjects.v1.offerClass[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1OfferClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/offerClass/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1OfferClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1OfferClassResourceIdKey()
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
            (typeof client.walletobjects.v1.offerClass)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(client.walletobjects.v1.offerClass[':resourceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1OfferClassResourceIdAddMessageKey() {
  return ['walletobjects', '/walletobjects/v1/offerClass/:resourceId/addMessage', 'POST'] as const
}

export function usePostWalletobjectsV1OfferClassResourceIdAddMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1OfferClassResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.offerClass)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.offerClass[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1OfferObjectKey(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/offerObject', args] as const
}

export function useGetWalletobjectsV1OfferObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>>
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
        ? getGetWalletobjectsV1OfferObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.offerObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1OfferObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.offerObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>>
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
        ? getGetWalletobjectsV1OfferObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.offerObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1OfferObjectKey() {
  return ['walletobjects', '/walletobjects/v1/offerObject', 'POST'] as const
}

export function usePostWalletobjectsV1OfferObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.offerObject.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.offerObject.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1OfferObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.offerObject.$post> },
      ) => parseResponse(client.walletobjects.v1.offerObject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1OfferObjectResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/offerObject/:resourceId', args] as const
}

export function useGetWalletobjectsV1OfferObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1OfferObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.offerObject[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1OfferObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1OfferObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.offerObject[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1OfferObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/offerObject/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1OfferObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1OfferObjectResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$put']>
        },
      ) =>
        parseResponse(client.walletobjects.v1.offerObject[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1OfferObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/offerObject/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1OfferObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1OfferObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.offerObject)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.offerObject[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1OfferObjectResourceIdAddMessageKey() {
  return ['walletobjects', '/walletobjects/v1/offerObject/:resourceId/addMessage', 'POST'] as const
}

export function usePostWalletobjectsV1OfferObjectResourceIdAddMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1OfferObjectResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.offerObject)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.offerObject[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1PermissionsResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/permissions/:resourceId', args] as const
}

export function useGetWalletobjectsV1PermissionsResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1PermissionsResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.permissions[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1PermissionsResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>>
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
        ? getGetWalletobjectsV1PermissionsResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.walletobjects.v1.permissions[':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1PermissionsResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/permissions/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1PermissionsResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1PermissionsResourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.walletobjects.v1.permissions)[':resourceId']['$put']>
        },
      ) =>
        parseResponse(client.walletobjects.v1.permissions[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1PrivateContentUploadPrivateDataKey() {
  return ['walletobjects', '/walletobjects/v1/privateContent/uploadPrivateData', 'POST'] as const
}

export function usePostWalletobjectsV1PrivateContentUploadPrivateData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1PrivateContentUploadPrivateDataKey()
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
            typeof client.walletobjects.v1.privateContent.uploadPrivateData.$post
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.privateContent.uploadPrivateData.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/privateContent/:issuerId/uploadPrivateImage',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1PrivateContentIssuerIdUploadPrivateImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageKey()
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
            (typeof client.walletobjects.v1.privateContent)[':issuerId']['uploadPrivateImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.privateContent[':issuerId'].uploadPrivateImage.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1SmartTapKey() {
  return ['walletobjects', '/walletobjects/v1/smartTap', 'POST'] as const
}

export function usePostWalletobjectsV1SmartTap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.smartTap.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.smartTap.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1SmartTapKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.smartTap.$post> },
      ) => parseResponse(client.walletobjects.v1.smartTap.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1TransitClassKey(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/transitClass', args] as const
}

export function useGetWalletobjectsV1TransitClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>
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
        ? getGetWalletobjectsV1TransitClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.transitClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1TransitClass<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.transitClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>
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
        ? getGetWalletobjectsV1TransitClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.transitClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1TransitClassKey() {
  return ['walletobjects', '/walletobjects/v1/transitClass', 'POST'] as const
}

export function usePostWalletobjectsV1TransitClass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.walletobjects.v1.transitClass.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.transitClass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1TransitClassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.transitClass.$post> },
      ) => parseResponse(client.walletobjects.v1.transitClass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1TransitClassResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/transitClass/:resourceId', args] as const
}

export function useGetWalletobjectsV1TransitClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1TransitClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.transitClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1TransitClassResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1TransitClassResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.transitClass[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1TransitClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/transitClass/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1TransitClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1TransitClassResourceIdKey()
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
            (typeof client.walletobjects.v1.transitClass)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(client.walletobjects.v1.transitClass[':resourceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1TransitClassResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/transitClass/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1TransitClassResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1TransitClassResourceIdKey()
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
            (typeof client.walletobjects.v1.transitClass)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.transitClass[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1TransitClassResourceIdAddMessageKey() {
  return ['walletobjects', '/walletobjects/v1/transitClass/:resourceId/addMessage', 'POST'] as const
}

export function usePostWalletobjectsV1TransitClassResourceIdAddMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1TransitClassResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.transitClass)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.transitClass[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1TransitObjectKey(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$get>,
) {
  return ['walletobjects', '/walletobjects/v1/transitObject', args] as const
}

export function useGetWalletobjectsV1TransitObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>
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
        ? getGetWalletobjectsV1TransitObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.transitObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1TransitObject<TError = unknown>(
  args: InferRequestType<typeof client.walletobjects.v1.transitObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>
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
        ? getGetWalletobjectsV1TransitObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.walletobjects.v1.transitObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletobjectsV1TransitObjectKey() {
  return ['walletobjects', '/walletobjects/v1/transitObject', 'POST'] as const
}

export function usePostWalletobjectsV1TransitObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.walletobjects.v1.transitObject.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.walletobjects.v1.transitObject.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1TransitObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.walletobjects.v1.transitObject.$post> },
      ) => parseResponse(client.walletobjects.v1.transitObject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletobjectsV1TransitObjectResourceIdKey(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>,
) {
  return ['walletobjects', '/walletobjects/v1/transitObject/:resourceId', args] as const
}

export function useGetWalletobjectsV1TransitObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1TransitObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.transitObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletobjectsV1TransitObjectResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>
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
        ? getGetWalletobjectsV1TransitObjectResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.walletobjects.v1.transitObject[':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutWalletobjectsV1TransitObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/transitObject/:resourceId', 'PUT'] as const
}

export function usePutWalletobjectsV1TransitObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWalletobjectsV1TransitObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.transitObject)[':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.transitObject[':resourceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWalletobjectsV1TransitObjectResourceIdKey() {
  return ['walletobjects', '/walletobjects/v1/transitObject/:resourceId', 'PATCH'] as const
}

export function usePatchWalletobjectsV1TransitObjectResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWalletobjectsV1TransitObjectResourceIdKey()
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
            (typeof client.walletobjects.v1.transitObject)[':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.transitObject[':resourceId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWalletobjectsV1TransitObjectResourceIdAddMessageKey() {
  return [
    'walletobjects',
    '/walletobjects/v1/transitObject/:resourceId/addMessage',
    'POST',
  ] as const
}

export function usePostWalletobjectsV1TransitObjectResourceIdAddMessage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletobjectsV1TransitObjectResourceIdAddMessageKey()
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
            (typeof client.walletobjects.v1.transitObject)[':resourceId']['addMessage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.walletobjects.v1.transitObject[':resourceId'].addMessage.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
