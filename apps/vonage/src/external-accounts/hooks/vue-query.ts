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

export function getMessengerKey() {
  return ['messenger'] as const
}

export function getViberServiceMsgKey() {
  return ['viber_service_msg'] as const
}

export function getWhatsappKey() {
  return ['whatsapp'] as const
}

export function getProviderKey() {
  return ['{provider}'] as const
}

export function getQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>) {
  return ['', '/', toValue(args)] as const
}

export function getQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessengerMutationKey() {
  return ['messenger', '/messenger', 'POST'] as const
}

export function getPostMessengerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messenger.$post>>>>>,
    TError,
    InferRequestType<typeof client.messenger.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessengerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messenger.$post>) {
      return parseResponse(client.messenger.$post(args, options))
    },
  })
}

export function usePostMessenger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messenger.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.messenger.$post>,
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
  const mutationDefaults = getPostMessengerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMessengerExternalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messenger)[':external_id']['$get']>>,
) {
  return ['messenger', '/messenger/:external_id', toValue(args)] as const
}

export function getMessengerExternalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messenger)[':external_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessengerExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messenger[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessengerExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messenger)[':external_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messenger)[':external_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messenger)[':external_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messenger)[':external_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessengerExternalIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.messenger)[':external_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessengerExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessengerExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messenger[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMessengerExternalIdMutationKey() {
  return ['messenger', '/messenger/:external_id', 'DELETE'] as const
}

export function getDeleteMessengerExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messenger)[':external_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.messenger)[':external_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessengerExternalIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messenger)[':external_id']['$delete']>) {
      return parseResponse(client.messenger[':external_id'].$delete(args, options))
    },
  })
}

export function useDeleteMessengerExternalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.messenger)[':external_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.messenger)[':external_id']['$delete']>,
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
  const mutationDefaults = getDeleteMessengerExternalIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessengerExternalIdMutationKey() {
  return ['messenger', '/messenger/:external_id', 'PATCH'] as const
}

export function getPatchMessengerExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messenger)[':external_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messenger)[':external_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessengerExternalIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messenger)[':external_id']['$patch']>) {
      return parseResponse(client.messenger[':external_id'].$patch(args, options))
    },
  })
}

export function usePatchMessengerExternalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messenger)[':external_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messenger)[':external_id']['$patch']>,
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
  const mutationDefaults = getPatchMessengerExternalIdMutationOptions<TError, TOnMutateResult>(
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

export function getViberServiceMsgExternalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.viber_service_msg)[':external_id']['$get']>
  >,
) {
  return ['viber_service_msg', '/viber_service_msg/:external_id', toValue(args)] as const
}

export function getViberServiceMsgExternalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.viber_service_msg)[':external_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViberServiceMsgExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.viber_service_msg[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useViberServiceMsgExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.viber_service_msg)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.viber_service_msg)[':external_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.viber_service_msg)[':external_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.viber_service_msg)[':external_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getViberServiceMsgExternalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.viber_service_msg)[':external_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViberServiceMsgExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViberServiceMsgExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.viber_service_msg[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWhatsappExternalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whatsapp)[':external_id']['$get']>>,
) {
  return ['whatsapp', '/whatsapp/:external_id', toValue(args)] as const
}

export function getWhatsappExternalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whatsapp)[':external_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhatsappExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whatsapp[':external_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhatsappExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whatsapp)[':external_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whatsapp)[':external_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsapp)[':external_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsapp)[':external_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWhatsappExternalIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.whatsapp)[':external_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhatsappExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whatsapp[':external_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProviderExternalIdApplicationsMutationKey() {
  return [':provider', '/:provider/:external_id/applications', 'POST'] as const
}

export function getPostProviderExternalIdApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':provider'][':external_id']['applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':provider'][':external_id']['applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProviderExternalIdApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':provider'][':external_id']['applications']['$post']>,
    ) {
      return parseResponse(client[':provider'][':external_id'].applications.$post(args, options))
    },
  })
}

export function usePostProviderExternalIdApplications<
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
                  ReturnType<(typeof client)[':provider'][':external_id']['applications']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':provider'][':external_id']['applications']['$post']>,
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
  const mutationDefaults = getPostProviderExternalIdApplicationsMutationOptions<
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

export function getDeleteProviderExternalIdApplicationsApplicationIdMutationKey() {
  return [':provider', '/:provider/:external_id/applications/:application_id', 'DELETE'] as const
}

export function getDeleteProviderExternalIdApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':provider'][':external_id']['applications'][':application_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':provider'][':external_id']['applications'][':application_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProviderExternalIdApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':provider'][':external_id']['applications'][':application_id']['$delete']
      >,
    ) {
      return parseResponse(
        client[':provider'][':external_id'].applications[':application_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProviderExternalIdApplicationsApplicationId<
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
                      (typeof client)[':provider'][':external_id']['applications'][':application_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)[':provider'][':external_id']['applications'][':application_id']['$delete']
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
  const mutationDefaults = getDeleteProviderExternalIdApplicationsApplicationIdMutationOptions<
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
