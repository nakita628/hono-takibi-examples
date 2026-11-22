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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1ActionsServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>>,
) {
  return ['api', '/api/v1/actions/:serviceId', toValue(args)] as const
}

export function getApiV1ActionsServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ActionsServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.actions[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ActionsServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.actions)[':serviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ActionsServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActionsServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ActionsServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.actions[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ActionsServiceIdActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>
  >,
) {
  return ['api', '/api/v1/actions/:serviceId/:actionId', toValue(args)] as const
}

export function getApiV1ActionsServiceIdActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ActionsServiceIdActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.actions[':serviceId'][':actionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ActionsServiceIdActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>
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
                  ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ActionsServiceIdActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActionsServiceIdActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ActionsServiceIdActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.actions[':serviceId'][':actionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ActionsServiceIdActionIdExecMutationKey() {
  return ['api', '/api/v1/actions/:serviceId/:actionId/exec', 'POST'] as const
}

export function getPostApiV1ActionsServiceIdActionIdExecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ActionsServiceIdActionIdExecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.actions[':serviceId'][':actionId'].exec.$post(args, options),
      )
    },
  })
}

export function usePostApiV1ActionsServiceIdActionIdExec<
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
                    (typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.actions)[':serviceId'][':actionId']['exec']['$post']
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
  const mutationDefaults = getPostApiV1ActionsServiceIdActionIdExecMutationOptions<
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

export function getApiV1ActionsServiceIdActionIdHelpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
  >,
) {
  return ['api', '/api/v1/actions/:serviceId/:actionId/help', toValue(args)] as const
}

export function getApiV1ActionsServiceIdActionIdHelpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ActionsServiceIdActionIdHelpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.actions[':serviceId'][':actionId'].help.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ActionsServiceIdActionIdHelp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
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
                    (typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']
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
                    (typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ActionsServiceIdActionIdHelpQueryKey>
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
            ReturnType<(typeof client.api.v1.actions)[':serviceId'][':actionId']['help']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ActionsServiceIdActionIdHelpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ActionsServiceIdActionIdHelpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.actions[':serviceId'][':actionId'].help.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LoginQueryKey() {
  return ['api', '/api/v1/login'] as const
}

export function getApiV1LoginQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LoginQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Login<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>
          >,
          ReturnType<typeof getApiV1LoginQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1LoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LoginQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.login.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogoutQueryKey() {
  return ['api', '/api/v1/logout'] as const
}

export function getApiV1LogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1LogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Logout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
          >,
          ReturnType<typeof getApiV1LogoutQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1LogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ServicesQueryKey() {
  return ['api', '/api/v1/services'] as const
}

export function getApiV1ServicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ServicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.services.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Services<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ServicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ServicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.services.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ServicesMutationKey() {
  return ['api', '/api/v1/services', 'POST'] as const
}

export function getPostApiV1ServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.services.$post>) {
      return parseResponse(client.api.v1.services.$post(args, options))
    },
  })
}

export function usePostApiV1Services<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.services.$post>,
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
  const mutationDefaults = getPostApiV1ServicesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ServicesServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>>,
) {
  return ['api', '/api/v1/services/:serviceId', toValue(args)] as const
}

export function getApiV1ServicesServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ServicesServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.services[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.services)[':serviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ServicesServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ServicesServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ServicesServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.services[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1ServicesServiceIdMutationKey() {
  return ['api', '/api/v1/services/:serviceId', 'DELETE'] as const
}

export function getDeleteApiV1ServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.services[':serviceId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.services)[':serviceId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.services)[':serviceId']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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
