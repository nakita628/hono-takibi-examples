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

export function getEventsKey() {
  return ['events'] as const
}

export function getEvents202609EventDefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$get']>
  >,
) {
  return ['events', '/events/2026-09/event-definitions', toValue(args)] as const
}

export function getEvents202609EventDefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvents202609EventDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events['2026-09']['event-definitions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvents202609EventDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEvents202609EventDefinitionsQueryKey>
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
          Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvents202609EventDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvents202609EventDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events['2026-09']['event-definitions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEvents202609EventDefinitionsMutationKey() {
  return ['events', '/events/2026-09/event-definitions', 'POST'] as const
}

export function getPostEvents202609EventDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEvents202609EventDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$post']>,
    ) {
      return parseResponse(client.events['2026-09']['event-definitions'].$post(args, options))
    },
  })
}

export function usePostEvents202609EventDefinitions<
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
                Awaited<ReturnType<(typeof client.events)['2026-09']['event-definitions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)['2026-09']['event-definitions']['$post']>,
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
  const mutationDefaults = getPostEvents202609EventDefinitionsMutationOptions<
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

export function getEvents202609EventDefinitionsEventNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']>
  >,
) {
  return ['events', '/events/2026-09/event-definitions/:eventName', toValue(args)] as const
}

export function getEvents202609EventDefinitionsEventNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEvents202609EventDefinitionsEventNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events['2026-09']['event-definitions'][':eventName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEvents202609EventDefinitionsEventName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']>
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
                    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
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
                    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEvents202609EventDefinitionsEventNameQueryKey>
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
            ReturnType<(typeof client.events)['2026-09']['event-definitions'][':eventName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEvents202609EventDefinitionsEventNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEvents202609EventDefinitionsEventNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events['2026-09']['event-definitions'][':eventName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteEvents202609EventDefinitionsEventNameMutationKey() {
  return ['events', '/events/2026-09/event-definitions/:eventName', 'DELETE'] as const
}

export function getDeleteEvents202609EventDefinitionsEventNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvents202609EventDefinitionsEventNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.events)['2026-09']['event-definitions'][':eventName']['$delete']
      >,
    ) {
      return parseResponse(
        client.events['2026-09']['event-definitions'][':eventName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteEvents202609EventDefinitionsEventName<
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
                      (typeof client.events)['2026-09']['event-definitions'][':eventName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['$delete']
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
  const mutationDefaults = getDeleteEvents202609EventDefinitionsEventNameMutationOptions<
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

export function getPatchEvents202609EventDefinitionsEventNameMutationKey() {
  return ['events', '/events/2026-09/event-definitions/:eventName', 'PATCH'] as const
}

export function getPatchEvents202609EventDefinitionsEventNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchEvents202609EventDefinitionsEventNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.events)['2026-09']['event-definitions'][':eventName']['$patch']
      >,
    ) {
      return parseResponse(
        client.events['2026-09']['event-definitions'][':eventName'].$patch(args, options),
      )
    },
  })
}

export function usePatchEvents202609EventDefinitionsEventName<
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
                    (typeof client.events)['2026-09']['event-definitions'][':eventName']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['$patch']
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
  const mutationDefaults = getPatchEvents202609EventDefinitionsEventNameMutationOptions<
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

export function getPostEvents202609EventDefinitionsEventNamePropertyMutationKey() {
  return ['events', '/events/2026-09/event-definitions/:eventName/property', 'POST'] as const
}

export function getPostEvents202609EventDefinitionsEventNamePropertyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['property']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEvents202609EventDefinitionsEventNamePropertyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.events)['2026-09']['event-definitions'][':eventName']['property']['$post']
      >,
    ) {
      return parseResponse(
        client.events['2026-09']['event-definitions'][':eventName'].property.$post(args, options),
      )
    },
  })
}

export function usePostEvents202609EventDefinitionsEventNameProperty<
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
                    (typeof client.events)['2026-09']['event-definitions'][':eventName']['property']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['property']['$post']
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
  const mutationDefaults = getPostEvents202609EventDefinitionsEventNamePropertyMutationOptions<
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

export function getDeleteEvents202609EventDefinitionsEventNamePropertyPropertyNameMutationKey() {
  return [
    'events',
    '/events/2026-09/event-definitions/:eventName/property/:propertyName',
    'DELETE',
  ] as const
}

export function getDeleteEvents202609EventDefinitionsEventNamePropertyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEvents202609EventDefinitionsEventNamePropertyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$delete']
      >,
    ) {
      return parseResponse(
        client.events['2026-09']['event-definitions'][':eventName'].property[
          ':propertyName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteEvents202609EventDefinitionsEventNamePropertyPropertyName<
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
                      (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$delete']
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
    getDeleteEvents202609EventDefinitionsEventNamePropertyPropertyNameMutationOptions<
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

export function getPatchEvents202609EventDefinitionsEventNamePropertyPropertyNameMutationKey() {
  return [
    'events',
    '/events/2026-09/event-definitions/:eventName/property/:propertyName',
    'PATCH',
  ] as const
}

export function getPatchEvents202609EventDefinitionsEventNamePropertyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchEvents202609EventDefinitionsEventNamePropertyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$patch']
      >,
    ) {
      return parseResponse(
        client.events['2026-09']['event-definitions'][':eventName'].property[
          ':propertyName'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchEvents202609EventDefinitionsEventNamePropertyPropertyName<
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
                    (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.events)['2026-09']['event-definitions'][':eventName']['property'][':propertyName']['$patch']
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
    getPatchEvents202609EventDefinitionsEventNamePropertyPropertyNameMutationOptions<
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

export function getPostEvents202609SendBatchMutationKey() {
  return ['events', '/events/2026-09/send/batch', 'POST'] as const
}

export function getPostEvents202609SendBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)['2026-09']['send']['batch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEvents202609SendBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>,
    ) {
      return parseResponse(client.events['2026-09'].send.batch.$post(args, options))
    },
  })
}

export function usePostEvents202609SendBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.events)['2026-09']['send']['batch']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.events)['2026-09']['send']['batch']['$post']>,
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
  const mutationDefaults = getPostEvents202609SendBatchMutationOptions<TError, TOnMutateResult>(
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
