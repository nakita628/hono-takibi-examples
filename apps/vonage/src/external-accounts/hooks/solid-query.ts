import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMessenger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messenger.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.messenger.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessengerMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessengerExternalIdQueryKey(
  args: InferRequestType<(typeof client.messenger)[':external_id']['$get']>,
) {
  return ['messenger', '/messenger/:external_id', args] as const
}

export function getMessengerExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messenger)[':external_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messenger)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messenger)[':external_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessengerExternalIdQueryKey>
  >({
    queryKey: getMessengerExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messenger[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessengerExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.messenger)[':external_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messenger)[':external_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messenger)[':external_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessengerExternalIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessengerExternalIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteMessengerExternalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessengerExternalIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchMessengerExternalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessengerExternalIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getViberServiceMsgExternalIdQueryKey(
  args: InferRequestType<(typeof client.viber_service_msg)[':external_id']['$get']>,
) {
  return ['viber_service_msg', '/viber_service_msg/:external_id', args] as const
}

export function getViberServiceMsgExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.viber_service_msg)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.viber_service_msg)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getViberServiceMsgExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.viber_service_msg[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createViberServiceMsgExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.viber_service_msg)[':external_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.viber_service_msg)[':external_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getViberServiceMsgExternalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWhatsappExternalIdQueryKey(
  args: InferRequestType<(typeof client.whatsapp)[':external_id']['$get']>,
) {
  return ['whatsapp', '/whatsapp/:external_id', args] as const
}

export function getWhatsappExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whatsapp)[':external_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.whatsapp)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.whatsapp)[':external_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappExternalIdQueryKey>
  >({
    queryKey: getWhatsappExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.whatsapp[':external_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWhatsappExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.whatsapp)[':external_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.whatsapp)[':external_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsapp)[':external_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWhatsappExternalIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWhatsappExternalIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProviderExternalIdApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProviderExternalIdApplicationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProviderExternalIdApplicationsApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProviderExternalIdApplicationsApplicationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
