import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEventsKey() {
  return ['events'] as const
}

export function getGetEvents202609EventDefinitionsKey(
  args: InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$get']>,
) {
  return ['events', '/events/2026-09/event-definitions', args] as const
}

export function useGetEvents202609EventDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$get']>>
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
        ? getGetEvents202609EventDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events['2026-09']['event-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvents202609EventDefinitions<TError = unknown>(
  args: InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$get']>>
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
        ? getGetEvents202609EventDefinitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events['2026-09']['event-definitions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEvents202609EventDefinitionsKey() {
  return ['events', '/events/2026-09/event-definitions', 'POST'] as const
}

export function usePostEvents202609EventDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvents202609EventDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$post']>
        },
      ) => parseResponse(client.events['2026-09']['event-definitions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEvents202609EventDefinitionsEventNameKey(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
  >,
) {
  return ['events', '/events/2026-09/event-definitions/:eventName', args] as const
}

export function useGetEvents202609EventDefinitionsEventName<TError = unknown>(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
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
        ? getGetEvents202609EventDefinitionsEventNameKey(args)
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
                (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
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
          client.events['2026-09']['event-definitions'][':eventName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvents202609EventDefinitionsEventName<TError = unknown>(
  args: InferRequestType<
    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
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
        ? getGetEvents202609EventDefinitionsEventNameKey(args)
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
                (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
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
          client.events['2026-09']['event-definitions'][':eventName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEvents202609EventDefinitionsEventNameKey() {
  return ['events', '/events/2026-09/event-definitions/:eventName', 'DELETE'] as const
}

export function useDeleteEvents202609EventDefinitionsEventName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.events)['2026-09']['event-definitions'][':eventName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEvents202609EventDefinitionsEventNameKey()
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
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.events['2026-09']['event-definitions'][':eventName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEvents202609EventDefinitionsEventNameKey() {
  return ['events', '/events/2026-09/event-definitions/:eventName', 'PATCH'] as const
}

export function usePatchEvents202609EventDefinitionsEventName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.events)['2026-09']['event-definitions'][':eventName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)['2026-09']['event-definitions'][':eventName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvents202609EventDefinitionsEventNameKey()
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
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.events['2026-09']['event-definitions'][':eventName'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEvents202609EventDefinitionsEventNamePropertyKey() {
  return ['events', '/events/2026-09/event-definitions/:eventName/property', 'POST'] as const
}

export function usePostEvents202609EventDefinitionsEventNameProperty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.events)['2026-09']['event-definitions'][':eventName']['property']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['property']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvents202609EventDefinitionsEventNamePropertyKey()
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
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['property']['$post']
          >
        },
      ) =>
        parseResponse(
          client.events['2026-09']['event-definitions'][':eventName'].property.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteEvents202609EventDefinitionsEventNamePropertyPropertyNameKey() {
  return [
    'events',
    '/events/2026-09/event-definitions/:eventName/property/:propertyName',
    'DELETE',
  ] as const
}

export function useDeleteEvents202609EventDefinitionsEventNamePropertyPropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteEvents202609EventDefinitionsEventNamePropertyPropertyNameKey()
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
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.events['2026-09']['event-definitions'][':eventName'].property[
            ':propertyName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEvents202609EventDefinitionsEventNamePropertyPropertyNameKey() {
  return [
    'events',
    '/events/2026-09/event-definitions/:eventName/property/:propertyName',
    'PATCH',
  ] as const
}

export function usePatchEvents202609EventDefinitionsEventNamePropertyPropertyName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEvents202609EventDefinitionsEventNamePropertyPropertyNameKey()
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
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.events['2026-09']['event-definitions'][':eventName'].property[
            ':propertyName'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEvents202609SendBatchKey() {
  return ['events', '/events/2026-09/send/batch', 'POST'] as const
}

export function usePostEvents202609SendBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['2026-09']['send']['batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEvents202609SendBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']> },
      ) => parseResponse(client.events['2026-09'].send.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
