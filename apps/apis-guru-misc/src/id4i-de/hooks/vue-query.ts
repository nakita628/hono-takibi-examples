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

export function getAccountKey() {
  return ['account'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getGoKey() {
  return ['go'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getWhoisKey() {
  return ['whois'] as const
}

export function getPutAccountPasswordMutationKey() {
  return ['account', '/account/password', 'PUT'] as const
}

export function getPutAccountPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.password.$put>) {
      return parseResponse(client.account.password.$put(args, options))
    },
  })
}

export function usePutAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.password.$put>,
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
  const mutationDefaults = getPutAccountPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountPasswordMutationKey() {
  return ['account', '/account/password', 'POST'] as const
}

export function getPostAccountPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.password.$post>) {
      return parseResponse(client.account.password.$post(args, options))
    },
  })
}

export function usePostAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.password.$post>,
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
  const mutationDefaults = getPostAccountPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountRegistrationMutationKey() {
  return ['account', '/account/registration', 'PUT'] as const
}

export function getPutAccountRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.registration.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.registration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountRegistrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.registration.$put>) {
      return parseResponse(client.account.registration.$put(args, options))
    },
  })
}

export function usePutAccountRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.registration.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.registration.$put>,
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
  const mutationDefaults = getPutAccountRegistrationMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountRegistrationMutationKey() {
  return ['account', '/account/registration', 'POST'] as const
}

export function getPostAccountRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.registration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.registration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRegistrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.registration.$post>) {
      return parseResponse(client.account.registration.$post(args, options))
    },
  })
}

export function usePostAccountRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.registration.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.registration.$post>,
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
  const mutationDefaults = getPostAccountRegistrationMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountVerificationMutationKey() {
  return ['account', '/account/verification', 'POST'] as const
}

export function getPostAccountVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.verification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountVerificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.verification.$post>) {
      return parseResponse(client.account.verification.$post(args, options))
    },
  })
}

export function usePostAccountVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.verification.$post>,
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
  const mutationDefaults = getPostAccountVerificationMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ApikeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apikeys.$get>>,
) {
  return ['api', '/api/v1/apikeys', toValue(args)] as const
}

export function getApiV1ApikeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apikeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApikeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.apikeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Apikeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apikeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apikeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apikeys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apikeys.$get>>>>
          >,
          ReturnType<typeof getApiV1ApikeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apikeys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApikeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApikeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.apikeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ApikeysMutationKey() {
  return ['api', '/api/v1/apikeys', 'POST'] as const
}

export function getPostApiV1ApikeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apikeys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.apikeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApikeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.apikeys.$post>) {
      return parseResponse(client.api.v1.apikeys.$post(args, options))
    },
  })
}

export function usePostApiV1Apikeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apikeys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.apikeys.$post>,
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
  const mutationDefaults = getPostApiV1ApikeysMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ApikeysPrivilegesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apikeys.privileges.$get>>,
) {
  return ['api', '/api/v1/apikeys/privileges', toValue(args)] as const
}

export function getApiV1ApikeysPrivilegesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apikeys.privileges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApikeysPrivilegesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.apikeys.privileges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApikeysPrivileges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apikeys.privileges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apikeys.privileges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.apikeys.privileges.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.apikeys.privileges.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApikeysPrivilegesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apikeys.privileges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApikeysPrivilegesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApikeysPrivilegesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.apikeys.privileges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ApikeysKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.apikeys)[':key']['$get']>>,
) {
  return ['api', '/api/v1/apikeys/:key', toValue(args)] as const
}

export function getApiV1ApikeysKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.apikeys)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApikeysKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.apikeys[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApikeysKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.apikeys)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApikeysKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApikeysKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApikeysKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.apikeys[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ApikeysKeyMutationKey() {
  return ['api', '/api/v1/apikeys/:key', 'PUT'] as const
}

export function getPutApiV1ApikeysKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.apikeys)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ApikeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['$put']>) {
      return parseResponse(client.api.v1.apikeys[':key'].$put(args, options))
    },
  })
}

export function usePutApiV1ApikeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.apikeys)[':key']['$put']>,
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
  const mutationDefaults = getPutApiV1ApikeysKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ApikeysKeyMutationKey() {
  return ['api', '/api/v1/apikeys/:key', 'DELETE'] as const
}

export function getDeleteApiV1ApikeysKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.apikeys)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApikeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['$delete']>) {
      return parseResponse(client.api.v1.apikeys[':key'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ApikeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.apikeys)[':key']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ApikeysKeyMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ApikeysKeyPrivilegesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$get']>
  >,
) {
  return ['api', '/api/v1/apikeys/:key/privileges', toValue(args)] as const
}

export function getApiV1ApikeysKeyPrivilegesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApikeysKeyPrivilegesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.apikeys[':key'].privileges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApikeysKeyPrivileges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['privileges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['privileges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['privileges']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ApikeysKeyPrivilegesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['privileges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApikeysKeyPrivilegesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApikeysKeyPrivilegesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.apikeys[':key'].privileges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ApikeysKeyPrivilegesMutationKey() {
  return ['api', '/api/v1/apikeys/:key/privileges', 'POST'] as const
}

export function getPostApiV1ApikeysKeyPrivilegesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['privileges']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApikeysKeyPrivilegesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$post']>,
    ) {
      return parseResponse(client.api.v1.apikeys[':key'].privileges.$post(args, options))
    },
  })
}

export function usePostApiV1ApikeysKeyPrivileges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['privileges']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$post']>,
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
  const mutationDefaults = getPostApiV1ApikeysKeyPrivilegesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ApikeysKeyPrivilegesMutationKey() {
  return ['api', '/api/v1/apikeys/:key/privileges', 'DELETE'] as const
}

export function getDeleteApiV1ApikeysKeyPrivilegesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['privileges']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApikeysKeyPrivilegesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$delete']>,
    ) {
      return parseResponse(client.api.v1.apikeys[':key'].privileges.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ApikeysKeyPrivileges<
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
                Awaited<ReturnType<(typeof client.api.v1.apikeys)[':key']['privileges']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ApikeysKeyPrivilegesMutationOptions<
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

export function getApiV1ApikeysKeyPrivilegesPrivilegeId4nsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$get']
    >
  >,
) {
  return ['api', '/api/v1/apikeys/:key/privileges/:privilege/id4ns', toValue(args)] as const
}

export function getApiV1ApikeysKeyPrivilegesPrivilegeId4nsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ApikeysKeyPrivilegesPrivilegeId4nsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.apikeys[':key'].privileges[':privilege'].id4ns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ApikeysKeyPrivilegesPrivilegeId4ns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$get']
    >
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
                    (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$get']
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
                    (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ApikeysKeyPrivilegesPrivilegeId4nsQueryKey>
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
            ReturnType<
              (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ApikeysKeyPrivilegesPrivilegeId4nsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ApikeysKeyPrivilegesPrivilegeId4nsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.apikeys[':key'].privileges[':privilege'].id4ns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ApikeysKeyPrivilegesPrivilegeId4nsMutationKey() {
  return ['api', '/api/v1/apikeys/:key/privileges/:privilege/id4ns', 'POST'] as const
}

export function getPostApiV1ApikeysKeyPrivilegesPrivilegeId4nsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ApikeysKeyPrivilegesPrivilegeId4nsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.apikeys[':key'].privileges[':privilege'].id4ns.$post(args, options),
      )
    },
  })
}

export function usePostApiV1ApikeysKeyPrivilegesPrivilegeId4ns<
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
                    (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$post']
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
  const mutationDefaults = getPostApiV1ApikeysKeyPrivilegesPrivilegeId4nsMutationOptions<
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

export function getDeleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsMutationKey() {
  return ['api', '/api/v1/apikeys/:key/privileges/:privilege/id4ns', 'DELETE'] as const
}

export function getDeleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.apikeys[':key'].privileges[':privilege'].id4ns.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1ApikeysKeyPrivilegesPrivilegeId4ns<
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
                    (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$delete']
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
  const mutationDefaults = getDeleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsMutationOptions<
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

export function getApiV1BillingOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing)[':organizationId']['$get']>
  >,
) {
  return ['api', '/api/v1/billing/:organizationId', toValue(args)] as const
}

export function getApiV1BillingOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillingOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.billing[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillingOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing)[':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing)[':organizationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BillingOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.billing)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillingOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.billing[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillingOrganizationIdPositionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing)[':organizationId']['positions']['$get']>
  >,
) {
  return ['api', '/api/v1/billing/:organizationId/positions', toValue(args)] as const
}

export function getApiV1BillingOrganizationIdPositionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing)[':organizationId']['positions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillingOrganizationIdPositionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.billing[':organizationId'].positions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillingOrganizationIdPositions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing)[':organizationId']['positions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing)[':organizationId']['positions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.billing)[':organizationId']['positions']['$get']>
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
                  ReturnType<(typeof client.api.v1.billing)[':organizationId']['positions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BillingOrganizationIdPositionsQueryKey>
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
            ReturnType<(typeof client.api.v1.billing)[':organizationId']['positions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingOrganizationIdPositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillingOrganizationIdPositionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.billing[':organizationId'].positions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChangelogOrganizationOrganizationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.changelog.organization)[':organizationId']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/changelog/organization/:organizationId/', toValue(args)] as const
}

export function getApiV1ChangelogOrganizationOrganizationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.changelog.organization)[':organizationId']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChangelogOrganizationOrganizationIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.changelog.organization[':organizationId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChangelogOrganizationOrganizationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.changelog.organization)[':organizationId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.changelog.organization)[':organizationId']['index']['$get']
    >
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
                    (typeof client.api.v1.changelog.organization)[':organizationId']['index']['$get']
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
                    (typeof client.api.v1.changelog.organization)[':organizationId']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ChangelogOrganizationOrganizationIdIndexQueryKey>
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
            ReturnType<
              (typeof client.api.v1.changelog.organization)[':organizationId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChangelogOrganizationOrganizationIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChangelogOrganizationOrganizationIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.changelog.organization[':organizationId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CollectionsMutationKey() {
  return ['api', '/api/v1/collections', 'POST'] as const
}

export function getPostApiV1CollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.collections.$post>) {
      return parseResponse(client.api.v1.collections.$post(args, options))
    },
  })
}

export function usePostApiV1Collections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.collections.$post>,
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
  const mutationDefaults = getPostApiV1CollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CollectionsId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.collections)[':id4n']['$get']>>,
) {
  return ['api', '/api/v1/collections/:id4n', toValue(args)] as const
}

export function getApiV1CollectionsId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.collections)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CollectionsId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.collections[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CollectionsId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.collections)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CollectionsId4nQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CollectionsId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.collections[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1CollectionsId4nMutationKey() {
  return ['api', '/api/v1/collections/:id4n', 'DELETE'] as const
}

export function getDeleteApiV1CollectionsId4nMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.collections)[':id4n']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CollectionsId4nMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['$delete']>,
    ) {
      return parseResponse(client.api.v1.collections[':id4n'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1CollectionsId4n<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.collections)[':id4n']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1CollectionsId4nMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiV1CollectionsId4nMutationKey() {
  return ['api', '/api/v1/collections/:id4n', 'PATCH'] as const
}

export function getPatchApiV1CollectionsId4nMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.collections)[':id4n']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1CollectionsId4nMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['$patch']>,
    ) {
      return parseResponse(client.api.v1.collections[':id4n'].$patch(args, options))
    },
  })
}

export function usePatchApiV1CollectionsId4n<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.collections)[':id4n']['$patch']>,
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
  const mutationDefaults = getPatchApiV1CollectionsId4nMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CollectionsId4nElementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$get']>
  >,
) {
  return ['api', '/api/v1/collections/:id4n/elements', toValue(args)] as const
}

export function getApiV1CollectionsId4nElementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CollectionsId4nElementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.collections[':id4n'].elements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CollectionsId4nElements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['elements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['elements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['elements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CollectionsId4nElementsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['elements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CollectionsId4nElementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CollectionsId4nElementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.collections[':id4n'].elements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CollectionsId4nElementsMutationKey() {
  return ['api', '/api/v1/collections/:id4n/elements', 'POST'] as const
}

export function getPostApiV1CollectionsId4nElementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['elements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CollectionsId4nElementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$post']>,
    ) {
      return parseResponse(client.api.v1.collections[':id4n'].elements.$post(args, options))
    },
  })
}

export function usePostApiV1CollectionsId4nElements<
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
                  ReturnType<(typeof client.api.v1.collections)[':id4n']['elements']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$post']>,
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
  const mutationDefaults = getPostApiV1CollectionsId4nElementsMutationOptions<
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

export function getDeleteApiV1CollectionsId4nElementsMutationKey() {
  return ['api', '/api/v1/collections/:id4n/elements', 'DELETE'] as const
}

export function getDeleteApiV1CollectionsId4nElementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.collections)[':id4n']['elements']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CollectionsId4nElementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$delete']>,
    ) {
      return parseResponse(client.api.v1.collections[':id4n'].elements.$delete(args, options))
    },
  })
}

export function useDeleteApiV1CollectionsId4nElements<
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
                  ReturnType<(typeof client.api.v1.collections)[':id4n']['elements']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1CollectionsId4nElementsMutationOptions<
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

export function getApiV1CountriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.countries.$get>>,
) {
  return ['api', '/api/v1/countries', toValue(args)] as const
}

export function getApiV1CountriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.countries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.countries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Countries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.countries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.countries.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CountriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DocumentsId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.documents)[':id4n']['$get']>>,
) {
  return ['api', '/api/v1/documents/:id4n', toValue(args)] as const
}

export function getApiV1DocumentsId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.documents)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DocumentsId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.documents)[':id4n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.documents)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.documents)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.documents)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsId4nQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.documents)[':id4n']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DocumentsId4nOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$get']>
  >,
) {
  return ['api', '/api/v1/documents/:id4n/:organizationId', toValue(args)] as const
}

export function getApiV1DocumentsId4nOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsId4nOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':id4n'][':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DocumentsId4nOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$get']>
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
                  ReturnType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsId4nOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsId4nOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsId4nOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':id4n'][':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1DocumentsId4nOrganizationIdMutationKey() {
  return ['api', '/api/v1/documents/:id4n/:organizationId', 'PUT'] as const
}

export function getPutApiV1DocumentsId4nOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DocumentsId4nOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$put']>,
    ) {
      return parseResponse(client.api.v1.documents[':id4n'][':organizationId'].$put(args, options))
    },
  })
}

export function usePutApiV1DocumentsId4nOrganizationId<
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
                  ReturnType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$put']>,
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
  const mutationDefaults = getPutApiV1DocumentsId4nOrganizationIdMutationOptions<
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

export function getPostApiV1DocumentsId4nOrganizationIdMutationKey() {
  return ['api', '/api/v1/documents/:id4n/:organizationId', 'POST'] as const
}

export function getPostApiV1DocumentsId4nOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DocumentsId4nOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$post']>,
    ) {
      return parseResponse(client.api.v1.documents[':id4n'][':organizationId'].$post(args, options))
    },
  })
}

export function usePostApiV1DocumentsId4nOrganizationId<
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
                  ReturnType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$post']>,
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
  const mutationDefaults = getPostApiV1DocumentsId4nOrganizationIdMutationOptions<
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

export function getApiV1DocumentsId4nOrganizationIdFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$get']
    >
  >,
) {
  return ['api', '/api/v1/documents/:id4n/:organizationId/:fileName', toValue(args)] as const
}

export function getApiV1DocumentsId4nOrganizationIdFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsId4nOrganizationIdFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':id4n'][':organizationId'][':fileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DocumentsId4nOrganizationIdFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$get']
    >
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
                    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$get']
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
                    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsId4nOrganizationIdFileNameQueryKey>
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
            ReturnType<
              (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsId4nOrganizationIdFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsId4nOrganizationIdFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':id4n'][':organizationId'][':fileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1DocumentsId4nOrganizationIdFileNameMutationKey() {
  return ['api', '/api/v1/documents/:id4n/:organizationId/:fileName', 'DELETE'] as const
}

export function getDeleteApiV1DocumentsId4nOrganizationIdFileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DocumentsId4nOrganizationIdFileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.documents[':id4n'][':organizationId'][':fileName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1DocumentsId4nOrganizationIdFileName<
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
                    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$delete']
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
  const mutationDefaults = getDeleteApiV1DocumentsId4nOrganizationIdFileNameMutationOptions<
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

export function getApiV1DocumentsId4nOrganizationIdFileNameMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/documents/:id4n/:organizationId/:fileName/metadata',
    toValue(args),
  ] as const
}

export function getApiV1DocumentsId4nOrganizationIdFileNameMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DocumentsId4nOrganizationIdFileNameMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.documents[':id4n'][':organizationId'][':fileName'].metadata.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1DocumentsId4nOrganizationIdFileNameMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
    >
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
                    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
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
                    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DocumentsId4nOrganizationIdFileNameMetadataQueryKey>
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
            ReturnType<
              (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DocumentsId4nOrganizationIdFileNameMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DocumentsId4nOrganizationIdFileNameMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.documents[':id4n'][':organizationId'][':fileName'].metadata.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV1DocumentsId4nOrganizationIdFileNameMetadataMutationKey() {
  return ['api', '/api/v1/documents/:id4n/:organizationId/:fileName/metadata', 'PATCH'] as const
}

export function getPatchApiV1DocumentsId4nOrganizationIdFileNameMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1DocumentsId4nOrganizationIdFileNameMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.documents[':id4n'][':organizationId'][':fileName'].metadata.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV1DocumentsId4nOrganizationIdFileNameMetadata<
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
                      (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$patch']
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
  const mutationDefaults = getPatchApiV1DocumentsId4nOrganizationIdFileNameMetadataMutationOptions<
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

export function getPostApiV1GuidsMutationKey() {
  return ['api', '/api/v1/guids', 'POST'] as const
}

export function getPostApiV1GuidsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.guids.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.guids.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GuidsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.guids.$post>) {
      return parseResponse(client.api.v1.guids.$post(args, options))
    },
  })
}

export function usePostApiV1Guids<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.guids.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.guids.$post>,
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
  const mutationDefaults = getPostApiV1GuidsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1GuidsWithoutCollectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.guids.withoutCollection.$get>>,
) {
  return ['api', '/api/v1/guids/withoutCollection', toValue(args)] as const
}

export function getApiV1GuidsWithoutCollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.guids.withoutCollection.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GuidsWithoutCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.guids.withoutCollection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GuidsWithoutCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.guids.withoutCollection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.guids.withoutCollection.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.guids.withoutCollection.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.guids.withoutCollection.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1GuidsWithoutCollectionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.guids.withoutCollection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GuidsWithoutCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GuidsWithoutCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.guids.withoutCollection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GuidsId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.guids)[':id4n']['$get']>>,
) {
  return ['api', '/api/v1/guids/:id4n', toValue(args)] as const
}

export function getApiV1GuidsId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.guids)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GuidsId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.guids[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GuidsId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.guids)[':id4n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.guids)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.guids)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.guids)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GuidsId4nQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.guids)[':id4n']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GuidsId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GuidsId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.guids[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV1GuidsId4nMutationKey() {
  return ['api', '/api/v1/guids/:id4n', 'PATCH'] as const
}

export function getPatchApiV1GuidsId4nMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.guids)[':id4n']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.guids)[':id4n']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1GuidsId4nMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.guids)[':id4n']['$patch']>) {
      return parseResponse(client.api.v1.guids[':id4n'].$patch(args, options))
    },
  })
}

export function usePatchApiV1GuidsId4n<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.guids)[':id4n']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.guids)[':id4n']['$patch']>,
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
  const mutationDefaults = getPatchApiV1GuidsId4nMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1HistoryId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.history)[':id4n']['$get']>>,
) {
  return ['api', '/api/v1/history/:id4n', toValue(args)] as const
}

export function getApiV1HistoryId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.history)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistoryId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HistoryId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.history)[':id4n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.history)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.history)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.history)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1HistoryId4nQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.history)[':id4n']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistoryId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1HistoryId4nMutationKey() {
  return ['api', '/api/v1/history/:id4n', 'POST'] as const
}

export function getPostApiV1HistoryId4nMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.history)[':id4n']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.history)[':id4n']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1HistoryId4nMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.history)[':id4n']['$post']>) {
      return parseResponse(client.api.v1.history[':id4n'].$post(args, options))
    },
  })
}

export function usePostApiV1HistoryId4n<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.history)[':id4n']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.history)[':id4n']['$post']>,
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
  const mutationDefaults = getPostApiV1HistoryId4nMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1HistoryId4nOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.history)[':id4n'][':organizationId']['$get']>
  >,
) {
  return ['api', '/api/v1/history/:id4n/:organizationId', toValue(args)] as const
}

export function getApiV1HistoryId4nOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.history)[':id4n'][':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistoryId4nOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history[':id4n'][':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HistoryId4nOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.history)[':id4n'][':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.history)[':id4n'][':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.history)[':id4n'][':organizationId']['$get']>
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
                  ReturnType<(typeof client.api.v1.history)[':id4n'][':organizationId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1HistoryId4nOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.history)[':id4n'][':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryId4nOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistoryId4nOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history[':id4n'][':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1HistoryId4nOrganizationIdSequenceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$get']
    >
  >,
) {
  return ['api', '/api/v1/history/:id4n/:organizationId/:sequenceId', toValue(args)] as const
}

export function getApiV1HistoryId4nOrganizationIdSequenceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1HistoryId4nOrganizationIdSequenceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.history[':id4n'][':organizationId'][':sequenceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1HistoryId4nOrganizationIdSequenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$get']
    >
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
                    (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$get']
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
                    (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1HistoryId4nOrganizationIdSequenceIdQueryKey>
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
            ReturnType<
              (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1HistoryId4nOrganizationIdSequenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1HistoryId4nOrganizationIdSequenceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.history[':id4n'][':organizationId'][':sequenceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV1HistoryId4nOrganizationIdSequenceIdMutationKey() {
  return ['api', '/api/v1/history/:id4n/:organizationId/:sequenceId', 'PATCH'] as const
}

export function getPatchApiV1HistoryId4nOrganizationIdSequenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1HistoryId4nOrganizationIdSequenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.history[':id4n'][':organizationId'][':sequenceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1HistoryId4nOrganizationIdSequenceId<
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
                      (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$patch']
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
  const mutationDefaults = getPatchApiV1HistoryId4nOrganizationIdSequenceIdMutationOptions<
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

export function getPutApiV1HistoryId4nOrganizationIdSequenceIdVisibilityMutationKey() {
  return ['api', '/api/v1/history/:id4n/:organizationId/:sequenceId/visibility', 'PUT'] as const
}

export function getPutApiV1HistoryId4nOrganizationIdSequenceIdVisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['visibility']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['visibility']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1HistoryId4nOrganizationIdSequenceIdVisibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['visibility']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.history[':id4n'][':organizationId'][':sequenceId'].visibility.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiV1HistoryId4nOrganizationIdSequenceIdVisibility<
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
                    (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['visibility']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['visibility']['$put']
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
  const mutationDefaults = getPutApiV1HistoryId4nOrganizationIdSequenceIdVisibilityMutationOptions<
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

export function getApiV1Id4nsId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['$get']>>,
) {
  return ['api', '/api/v1/id4ns/:id4n', toValue(args)] as const
}

export function getApiV1Id4nsId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1Id4nsId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.id4ns[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Id4nsId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1Id4nsId4nQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Id4nsId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1Id4nsId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.id4ns[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1Id4nsId4nAliasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias']['$get']>>,
) {
  return ['api', '/api/v1/id4ns/:id4n/alias', toValue(args)] as const
}

export function getApiV1Id4nsId4nAliasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1Id4nsId4nAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.id4ns[':id4n'].alias.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Id4nsId4nAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['alias']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['alias']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['alias']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1Id4nsId4nAliasQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['alias']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Id4nsId4nAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1Id4nsId4nAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.id4ns[':id4n'].alias.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1Id4nsId4nAliasAliasTypeMutationKey() {
  return ['api', '/api/v1/id4ns/:id4n/alias/:aliasType', 'POST'] as const
}

export function getPostApiV1Id4nsId4nAliasAliasTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1Id4nsId4nAliasAliasTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$post']>,
    ) {
      return parseResponse(client.api.v1.id4ns[':id4n'].alias[':aliasType'].$post(args, options))
    },
  })
}

export function usePostApiV1Id4nsId4nAliasAliasType<
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
                  ReturnType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$post']>,
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
  const mutationDefaults = getPostApiV1Id4nsId4nAliasAliasTypeMutationOptions<
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

export function getDeleteApiV1Id4nsId4nAliasAliasTypeMutationKey() {
  return ['api', '/api/v1/id4ns/:id4n/alias/:aliasType', 'DELETE'] as const
}

export function getDeleteApiV1Id4nsId4nAliasAliasTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1Id4nsId4nAliasAliasTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.id4ns[':id4n'].alias[':aliasType'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1Id4nsId4nAliasAliasType<
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
                    (typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1Id4nsId4nAliasAliasTypeMutationOptions<
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

export function getApiV1Id4nsId4nCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['collections']['$get']>
  >,
) {
  return ['api', '/api/v1/id4ns/:id4n/collections', toValue(args)] as const
}

export function getApiV1Id4nsId4nCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1Id4nsId4nCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.id4ns[':id4n'].collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Id4nsId4nCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['collections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['collections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1Id4nsId4nCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Id4nsId4nCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1Id4nsId4nCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.id4ns[':id4n'].collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1Id4nsId4nPropertiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$get']>
  >,
) {
  return ['api', '/api/v1/id4ns/:id4n/properties', toValue(args)] as const
}

export function getApiV1Id4nsId4nPropertiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1Id4nsId4nPropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.id4ns[':id4n'].properties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Id4nsId4nProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1Id4nsId4nPropertiesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1Id4nsId4nPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1Id4nsId4nPropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.id4ns[':id4n'].properties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1Id4nsId4nPropertiesMutationKey() {
  return ['api', '/api/v1/id4ns/:id4n/properties', 'DELETE'] as const
}

export function getDeleteApiV1Id4nsId4nPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1Id4nsId4nPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$delete']>,
    ) {
      return parseResponse(client.api.v1.id4ns[':id4n'].properties.$delete(args, options))
    },
  })
}

export function useDeleteApiV1Id4nsId4nProperties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1Id4nsId4nPropertiesMutationOptions<
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

export function getPatchApiV1Id4nsId4nPropertiesMutationKey() {
  return ['api', '/api/v1/id4ns/:id4n/properties', 'PATCH'] as const
}

export function getPatchApiV1Id4nsId4nPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1Id4nsId4nPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$patch']>,
    ) {
      return parseResponse(client.api.v1.id4ns[':id4n'].properties.$patch(args, options))
    },
  })
}

export function usePatchApiV1Id4nsId4nProperties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$patch']>,
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
  const mutationDefaults = getPatchApiV1Id4nsId4nPropertiesMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ImportGs1MutationKey() {
  return ['api', '/api/v1/import/gs1', 'POST'] as const
}

export function getPostApiV1ImportGs1MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.import.gs1.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.import.gs1.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ImportGs1MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.import.gs1.$post>) {
      return parseResponse(client.api.v1.import.gs1.$post(args, options))
    },
  })
}

export function usePostApiV1ImportGs1<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.import.gs1.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.import.gs1.$post>,
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
  const mutationDefaults = getPostApiV1ImportGs1MutationOptions<TError, TOnMutateResult>(
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

export function getApiV1InfoQueryKey() {
  return ['api', '/api/v1/info'] as const
}

export function getApiV1InfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1InfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
          >,
          ReturnType<typeof getApiV1InfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1InfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1InfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MicrostorageId4nOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$get']>
  >,
) {
  return ['api', '/api/v1/microstorage/:id4n/:organization', toValue(args)] as const
}

export function getApiV1MicrostorageId4nOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MicrostorageId4nOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.microstorage[':id4n'][':organization'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MicrostorageId4nOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$get']>
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
                  ReturnType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1MicrostorageId4nOrganizationQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MicrostorageId4nOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MicrostorageId4nOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.microstorage[':id4n'][':organization'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1MicrostorageId4nOrganizationMutationKey() {
  return ['api', '/api/v1/microstorage/:id4n/:organization', 'PUT'] as const
}

export function getPutApiV1MicrostorageId4nOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1MicrostorageId4nOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$put']>,
    ) {
      return parseResponse(client.api.v1.microstorage[':id4n'][':organization'].$put(args, options))
    },
  })
}

export function usePutApiV1MicrostorageId4nOrganization<
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
                  ReturnType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$put']>,
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
  const mutationDefaults = getPutApiV1MicrostorageId4nOrganizationMutationOptions<
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

export function getApiV1MultipleId4nsPropertiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.multiple.id4ns.properties.$get>>,
) {
  return ['api', '/api/v1/multiple/id4ns/properties', toValue(args)] as const
}

export function getApiV1MultipleId4nsPropertiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.multiple.id4ns.properties.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MultipleId4nsPropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.multiple.id4ns.properties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MultipleId4nsProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.multiple.id4ns.properties.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.multiple.id4ns.properties.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.multiple.id4ns.properties.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.multiple.id4ns.properties.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MultipleId4nsPropertiesQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.multiple.id4ns.properties.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MultipleId4nsPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MultipleId4nsPropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.multiple.id4ns.properties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1OrganizationsMutationKey() {
  return ['api', '/api/v1/organizations', 'POST'] as const
}

export function getPostApiV1OrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.organizations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.organizations.$post>) {
      return parseResponse(client.api.v1.organizations.$post(args, options))
    },
  })
}

export function usePostApiV1Organizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.organizations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.organizations.$post>,
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
  const mutationDefaults = getPostApiV1OrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1OrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$get']>
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1OrganizationsOrganizationIdMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId', 'PUT'] as const
}

export function getPutApiV1OrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.organizations)[':organizationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1OrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$put']>,
    ) {
      return parseResponse(client.api.v1.organizations[':organizationId'].$put(args, options))
    },
  })
}

export function usePutApiV1OrganizationsOrganizationId<
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
                Awaited<ReturnType<(typeof client.api.v1.organizations)[':organizationId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$put']>,
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
  const mutationDefaults = getPutApiV1OrganizationsOrganizationIdMutationOptions<
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

export function getDeleteApiV1OrganizationsOrganizationIdMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId', 'DELETE'] as const
}

export function getDeleteApiV1OrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.organizations)[':organizationId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1OrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.organizations[':organizationId'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1OrganizationsOrganizationId<
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
                  ReturnType<(typeof client.api.v1.organizations)[':organizationId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1OrganizationsOrganizationIdMutationOptions<
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

export function getApiV1OrganizationsOrganizationIdAddressesBillingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$get']
    >
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId/addresses/billing', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdAddressesBillingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdAddressesBillingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].addresses.billing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdAddressesBilling<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$get']
    >
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
                    (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdAddressesBillingQueryKey>
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
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdAddressesBillingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdAddressesBillingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].addresses.billing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1OrganizationsOrganizationIdAddressesBillingMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/addresses/billing', 'PUT'] as const
}

export function getPutApiV1OrganizationsOrganizationIdAddressesBillingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1OrganizationsOrganizationIdAddressesBillingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].addresses.billing.$put(args, options),
      )
    },
  })
}

export function usePutApiV1OrganizationsOrganizationIdAddressesBilling<
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
                    (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$put']
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
  const mutationDefaults = getPutApiV1OrganizationsOrganizationIdAddressesBillingMutationOptions<
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

export function getDeleteApiV1OrganizationsOrganizationIdAddressesBillingMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/addresses/billing', 'DELETE'] as const
}

export function getDeleteApiV1OrganizationsOrganizationIdAddressesBillingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1OrganizationsOrganizationIdAddressesBillingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].addresses.billing.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1OrganizationsOrganizationIdAddressesBilling<
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
                    (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$delete']
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
  const mutationDefaults = getDeleteApiV1OrganizationsOrganizationIdAddressesBillingMutationOptions<
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

export function getApiV1OrganizationsOrganizationIdAddressesDefaultQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$get']
    >
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId/addresses/default', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdAddressesDefaultQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdAddressesDefaultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].addresses.default.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdAddressesDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$get']
    >
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
                    (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdAddressesDefaultQueryKey>
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
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdAddressesDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdAddressesDefaultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].addresses.default.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1OrganizationsOrganizationIdAddressesDefaultMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/addresses/default', 'PUT'] as const
}

export function getPutApiV1OrganizationsOrganizationIdAddressesDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1OrganizationsOrganizationIdAddressesDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].addresses.default.$put(args, options),
      )
    },
  })
}

export function usePutApiV1OrganizationsOrganizationIdAddressesDefault<
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
                    (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$put']
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
  const mutationDefaults = getPutApiV1OrganizationsOrganizationIdAddressesDefaultMutationOptions<
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

export function getApiV1OrganizationsOrganizationIdCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['collections']['$get']>
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId/collections', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.organizations)[':organizationId']['collections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['collections']['$get']>
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
                    (typeof client.api.v1.organizations)[':organizationId']['collections']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['collections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdCollectionsQueryKey>
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
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['collections']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1OrganizationsOrganizationIdLogoMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/logo', 'POST'] as const
}

export function getPostApiV1OrganizationsOrganizationIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.organizations)[':organizationId']['logo']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['logo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OrganizationsOrganizationIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['logo']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.organizations[':organizationId'].logo.$post(args, options))
    },
  })
}

export function usePostApiV1OrganizationsOrganizationIdLogo<
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
                    (typeof client.api.v1.organizations)[':organizationId']['logo']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['logo']['$post']
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
  const mutationDefaults = getPostApiV1OrganizationsOrganizationIdLogoMutationOptions<
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

export function getDeleteApiV1OrganizationsOrganizationIdLogoMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/logo', 'DELETE'] as const
}

export function getDeleteApiV1OrganizationsOrganizationIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.organizations)[':organizationId']['logo']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1OrganizationsOrganizationIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['logo']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].logo.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1OrganizationsOrganizationIdLogo<
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
                    (typeof client.api.v1.organizations)[':organizationId']['logo']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['logo']['$delete']
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
  const mutationDefaults = getDeleteApiV1OrganizationsOrganizationIdLogoMutationOptions<
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

export function getApiV1OrganizationsOrganizationIdMessagingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['messaging']['$get']>
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId/messaging', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdMessagingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['messaging']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdMessagingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].messaging.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdMessaging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.organizations)[':organizationId']['messaging']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['messaging']['$get']>
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
                    (typeof client.api.v1.organizations)[':organizationId']['messaging']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['messaging']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdMessagingQueryKey>
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
            ReturnType<(typeof client.api.v1.organizations)[':organizationId']['messaging']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdMessagingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdMessagingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].messaging.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiV1OrganizationsOrganizationIdMessagingMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/messaging', 'PATCH'] as const
}

export function getPatchApiV1OrganizationsOrganizationIdMessagingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.organizations)[':organizationId']['messaging']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['messaging']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1OrganizationsOrganizationIdMessagingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['messaging']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].messaging.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV1OrganizationsOrganizationIdMessaging<
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
                      (typeof client.api.v1.organizations)[':organizationId']['messaging']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['messaging']['$patch']
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
  const mutationDefaults = getPatchApiV1OrganizationsOrganizationIdMessagingMutationOptions<
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

export function getPostApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageMutationKey() {
  return [
    'api',
    '/api/v1/organizations/:organizationId/messaging/enqueueCustomMessage',
    'POST',
  ] as const
}

export function getPostApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['messaging']['enqueueCustomMessage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['messaging']['enqueueCustomMessage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['messaging']['enqueueCustomMessage']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].messaging.enqueueCustomMessage.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessage<
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
                    (typeof client.api.v1.organizations)[':organizationId']['messaging']['enqueueCustomMessage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['messaging']['enqueueCustomMessage']['$post']
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
    getPostApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageMutationOptions<
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

export function getApiV1OrganizationsOrganizationIdPartnerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['partner']['$get']>
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId/partner', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdPartnerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['partner']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdPartnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].partner.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdPartner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.organizations)[':organizationId']['partner']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['partner']['$get']>
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
                    (typeof client.api.v1.organizations)[':organizationId']['partner']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['partner']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdPartnerQueryKey>
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
            ReturnType<(typeof client.api.v1.organizations)[':organizationId']['partner']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdPartnerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdPartnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].partner.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1OrganizationsOrganizationIdPartnerMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/partner', 'PUT'] as const
}

export function getPutApiV1OrganizationsOrganizationIdPartnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.organizations)[':organizationId']['partner']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['partner']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1OrganizationsOrganizationIdPartnerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['partner']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].partner.$put(args, options),
      )
    },
  })
}

export function usePutApiV1OrganizationsOrganizationIdPartner<
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
                    (typeof client.api.v1.organizations)[':organizationId']['partner']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['partner']['$put']
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
  const mutationDefaults = getPutApiV1OrganizationsOrganizationIdPartnerMutationOptions<
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

export function getDeleteApiV1OrganizationsOrganizationIdPartnerMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/partner', 'DELETE'] as const
}

export function getDeleteApiV1OrganizationsOrganizationIdPartnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['partner']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['partner']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1OrganizationsOrganizationIdPartnerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['partner']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].partner.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1OrganizationsOrganizationIdPartner<
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
                    (typeof client.api.v1.organizations)[':organizationId']['partner']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['partner']['$delete']
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
  const mutationDefaults = getDeleteApiV1OrganizationsOrganizationIdPartnerMutationOptions<
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

export function getApiV1OrganizationsOrganizationIdPrivilegesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['privileges']['$get']>
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId/privileges', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdPrivilegesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['privileges']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdPrivilegesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].privileges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdPrivileges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.organizations)[':organizationId']['privileges']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['privileges']['$get']>
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
                    (typeof client.api.v1.organizations)[':organizationId']['privileges']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['privileges']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdPrivilegesQueryKey>
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
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['privileges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdPrivilegesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdPrivilegesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].privileges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1OrganizationsOrganizationIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['roles']['$get']>
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId/roles', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.organizations)[':organizationId']['roles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['roles']['$get']>
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
                    (typeof client.api.v1.organizations)[':organizationId']['roles']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdRolesQueryKey>
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
            ReturnType<(typeof client.api.v1.organizations)[':organizationId']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1OrganizationsOrganizationIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['users']['$get']>
  >,
) {
  return ['api', '/api/v1/organizations/:organizationId/users', toValue(args)] as const
}

export function getApiV1OrganizationsOrganizationIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.organizations)[':organizationId']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['users']['$get']>
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
                    (typeof client.api.v1.organizations)[':organizationId']['users']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdUsersQueryKey>
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
            ReturnType<(typeof client.api.v1.organizations)[':organizationId']['users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1OrganizationsOrganizationIdUsersInviteMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/users/invite', 'POST'] as const
}

export function getPostApiV1OrganizationsOrganizationIdUsersInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['users']['invite']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['users']['invite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OrganizationsOrganizationIdUsersInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['users']['invite']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].users.invite.$post(args, options),
      )
    },
  })
}

export function usePostApiV1OrganizationsOrganizationIdUsersInvite<
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
                    (typeof client.api.v1.organizations)[':organizationId']['users']['invite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['users']['invite']['$post']
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
  const mutationDefaults = getPostApiV1OrganizationsOrganizationIdUsersInviteMutationOptions<
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

export function getApiV1OrganizationsOrganizationIdUsersUsernameRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/organizations/:organizationId/users/:username/roles',
    toValue(args),
  ] as const
}

export function getApiV1OrganizationsOrganizationIdUsersUsernameRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1OrganizationsOrganizationIdUsersUsernameRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].users[':username'].roles.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1OrganizationsOrganizationIdUsersUsernameRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$get']
    >
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
                    (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$get']
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
                    (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1OrganizationsOrganizationIdUsersUsernameRolesQueryKey>
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
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OrganizationsOrganizationIdUsersUsernameRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1OrganizationsOrganizationIdUsersUsernameRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.organizations[':organizationId'].users[':username'].roles.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1OrganizationsOrganizationIdUsersUsernameRolesMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/users/:username/roles', 'POST'] as const
}

export function getPostApiV1OrganizationsOrganizationIdUsersUsernameRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OrganizationsOrganizationIdUsersUsernameRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].users[':username'].roles.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1OrganizationsOrganizationIdUsersUsernameRoles<
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
                    (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$post']
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
  const mutationDefaults = getPostApiV1OrganizationsOrganizationIdUsersUsernameRolesMutationOptions<
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

export function getDeleteApiV1OrganizationsOrganizationIdUsersUsernameRolesMutationKey() {
  return ['api', '/api/v1/organizations/:organizationId/users/:username/roles', 'DELETE'] as const
}

export function getDeleteApiV1OrganizationsOrganizationIdUsersUsernameRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1OrganizationsOrganizationIdUsersUsernameRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.organizations[':organizationId'].users[':username'].roles.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV1OrganizationsOrganizationIdUsersUsernameRoles<
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
                    (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$delete']
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
    getDeleteApiV1OrganizationsOrganizationIdUsersUsernameRolesMutationOptions<
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

export function getApiV1PublicDocumentsId4nQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.public.documents)[':id4n']['$get']>
  >,
) {
  return ['api', '/api/v1/public/documents/:id4n', toValue(args)] as const
}

export function getApiV1PublicDocumentsId4nQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.public.documents)[':id4n']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublicDocumentsId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.public.documents[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PublicDocumentsId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.public.documents)[':id4n']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.public.documents)[':id4n']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.public.documents)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.public.documents)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PublicDocumentsId4nQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.public.documents)[':id4n']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicDocumentsId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublicDocumentsId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.public.documents[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicDocumentsId4nOrganizationIdFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['$get']
    >
  >,
) {
  return ['api', '/api/v1/public/documents/:id4n/:organizationId/:fileName', toValue(args)] as const
}

export function getApiV1PublicDocumentsId4nOrganizationIdFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublicDocumentsId4nOrganizationIdFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.public.documents[':id4n'][':organizationId'][':fileName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1PublicDocumentsId4nOrganizationIdFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['$get']
    >
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
                    (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['$get']
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
                    (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PublicDocumentsId4nOrganizationIdFileNameQueryKey>
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
            ReturnType<
              (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicDocumentsId4nOrganizationIdFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublicDocumentsId4nOrganizationIdFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.public.documents[':id4n'][':organizationId'][':fileName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/public/documents/:id4n/:organizationId/:fileName/metadata',
    toValue(args),
  ] as const
}

export function getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.public.documents[':id4n'][':organizationId'][':fileName'].metadata.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1PublicDocumentsId4nOrganizationIdFileNameMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
    >
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
                    (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
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
                    (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataQueryKey>
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
            ReturnType<
              (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.public.documents[':id4n'][':organizationId'][':fileName'].metadata.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicHistoryId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.history)[':id4n']['$get']>>,
) {
  return ['api', '/api/v1/public/history/:id4n', toValue(args)] as const
}

export function getApiV1PublicHistoryId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.history)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublicHistoryId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.public.history[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PublicHistoryId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.public.history)[':id4n']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.history)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.public.history)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.public.history)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PublicHistoryId4nQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.public.history)[':id4n']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicHistoryId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublicHistoryId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.public.history[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicImageImageIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.image)[':imageID']['$get']>>,
) {
  return ['api', '/api/v1/public/image/:imageID', toValue(args)] as const
}

export function getApiV1PublicImageImageIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.image)[':imageID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublicImageImageIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.public.image[':imageID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PublicImageImageID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.public.image)[':imageID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.image)[':imageID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.public.image)[':imageID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.public.image)[':imageID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PublicImageImageIDQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.public.image)[':imageID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicImageImageIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublicImageImageIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.public.image[':imageID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicOrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.public.organizations)[':organizationId']['$get']>
  >,
) {
  return ['api', '/api/v1/public/organizations/:organizationId', toValue(args)] as const
}

export function getApiV1PublicOrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.public.organizations)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublicOrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.public.organizations[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PublicOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.public.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.public.organizations)[':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.public.organizations)[':organizationId']['$get']>
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
                  ReturnType<(typeof client.api.v1.public.organizations)[':organizationId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PublicOrganizationsOrganizationIdQueryKey>
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
            ReturnType<(typeof client.api.v1.public.organizations)[':organizationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicOrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublicOrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.public.organizations[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicRoutesId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.routes)[':id4n']['$get']>>,
) {
  return ['api', '/api/v1/public/routes/:id4n', toValue(args)] as const
}

export function getApiV1PublicRoutesId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.routes)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublicRoutesId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.public.routes[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PublicRoutesId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.public.routes)[':id4n']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.public.routes)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.public.routes)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.public.routes)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PublicRoutesId4nQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.public.routes)[':id4n']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicRoutesId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublicRoutesId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.public.routes[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.roles.$get>>,
) {
  return ['api', '/api/v1/roles', toValue(args)] as const
}

export function getApiV1RolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.roles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Roles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.roles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.roles.$get>>>>
          >,
          ReturnType<typeof getApiV1RolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoutingfilesId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['$get']>>,
) {
  return ['api', '/api/v1/routingfiles/:id4n', toValue(args)] as const
}

export function getApiV1RoutingfilesId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoutingfilesId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.routingfiles[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoutingfilesId4n<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RoutingfilesId4nQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoutingfilesId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoutingfilesId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.routingfiles[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1RoutingfilesId4nMutationKey() {
  return ['api', '/api/v1/routingfiles/:id4n', 'PUT'] as const
}

export function getPutApiV1RoutingfilesId4nMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1RoutingfilesId4nMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['$put']>) {
      return parseResponse(client.api.v1.routingfiles[':id4n'].$put(args, options))
    },
  })
}

export function usePutApiV1RoutingfilesId4n<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['$put']>,
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
  const mutationDefaults = getPutApiV1RoutingfilesId4nMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RoutingfilesId4nRouteTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['route'][':type']['$get']>
  >,
) {
  return ['api', '/api/v1/routingfiles/:id4n/route/:type', toValue(args)] as const
}

export function getApiV1RoutingfilesId4nRouteTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['route'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoutingfilesId4nRouteTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.routingfiles[':id4n'].route[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoutingfilesId4nRouteType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['route'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['route'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['route'][':type']['$get']>
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
                  ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['route'][':type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RoutingfilesId4nRouteTypeQueryKey>
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
            ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['route'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoutingfilesId4nRouteTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoutingfilesId4nRouteTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.routingfiles[':id4n'].route[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RoutingfilesId4nRoutesTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['routes'][':type']['$get']>
  >,
) {
  return ['api', '/api/v1/routingfiles/:id4n/routes/:type', toValue(args)] as const
}

export function getApiV1RoutingfilesId4nRoutesTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['routes'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RoutingfilesId4nRoutesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.routingfiles[':id4n'].routes[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RoutingfilesId4nRoutesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['routes'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['routes'][':type']['$get']>
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
                    (typeof client.api.v1.routingfiles)[':id4n']['routes'][':type']['$get']
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
                    (typeof client.api.v1.routingfiles)[':id4n']['routes'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RoutingfilesId4nRoutesTypeQueryKey>
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
            ReturnType<(typeof client.api.v1.routingfiles)[':id4n']['routes'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoutingfilesId4nRoutesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RoutingfilesId4nRoutesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.routingfiles[':id4n'].routes[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SearchGuidsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.guids.$get>>,
) {
  return ['api', '/api/v1/search/guids', toValue(args)] as const
}

export function getApiV1SearchGuidsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.guids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SearchGuidsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.search.guids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SearchGuids<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.guids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.search.guids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.guids.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.guids.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SearchGuidsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.search.guids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchGuidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SearchGuidsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.search.guids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SearchGuidsAliasesTypesQueryKey() {
  return ['api', '/api/v1/search/guids/aliases/types'] as const
}

export function getApiV1SearchGuidsAliasesTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SearchGuidsAliasesTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.search.guids.aliases.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SearchGuidsAliasesTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.search.guids.aliases.types.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.search.guids.aliases.types.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.search.guids.aliases.types.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SearchGuidsAliasesTypesQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.search.guids.aliases.types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SearchGuidsAliasesTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SearchGuidsAliasesTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.search.guids.aliases.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TransfersId4nReceiveInfoMutationKey() {
  return ['api', '/api/v1/transfers/:id4n/receiveInfo', 'PUT'] as const
}

export function getPutApiV1TransfersId4nReceiveInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.transfers)[':id4n']['receiveInfo']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.transfers)[':id4n']['receiveInfo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TransfersId4nReceiveInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.transfers)[':id4n']['receiveInfo']['$put']>,
    ) {
      return parseResponse(client.api.v1.transfers[':id4n'].receiveInfo.$put(args, options))
    },
  })
}

export function usePutApiV1TransfersId4nReceiveInfo<
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
                  ReturnType<(typeof client.api.v1.transfers)[':id4n']['receiveInfo']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.transfers)[':id4n']['receiveInfo']['$put']>,
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
  const mutationDefaults = getPutApiV1TransfersId4nReceiveInfoMutationOptions<
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

export function getApiV1TransfersId4nSendInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$get']>
  >,
) {
  return ['api', '/api/v1/transfers/:id4n/sendInfo', toValue(args)] as const
}

export function getApiV1TransfersId4nSendInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TransfersId4nSendInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.transfers[':id4n'].sendInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TransfersId4nSendInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TransfersId4nSendInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TransfersId4nSendInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TransfersId4nSendInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.transfers[':id4n'].sendInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1TransfersId4nSendInfoMutationKey() {
  return ['api', '/api/v1/transfers/:id4n/sendInfo', 'PUT'] as const
}

export function getPutApiV1TransfersId4nSendInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TransfersId4nSendInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$put']>,
    ) {
      return parseResponse(client.api.v1.transfers[':id4n'].sendInfo.$put(args, options))
    },
  })
}

export function usePutApiV1TransfersId4nSendInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$put']>,
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
  const mutationDefaults = getPutApiV1TransfersId4nSendInfoMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UserOrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.user.organizations.$get>>,
) {
  return ['api', '/api/v1/user/organizations', toValue(args)] as const
}

export function getApiV1UserOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.user.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UserOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.user.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UserOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.user.organizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.user.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.user.organizations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.user.organizations.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1UserOrganizationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.user.organizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UserOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UserOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.user.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
) {
  return ['api', '/api/v1/users', toValue(args)] as const
}

export function getApiV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          ReturnType<typeof getApiV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':username']['$get']>>,
) {
  return ['api', '/api/v1/users/:username', toValue(args)] as const
}

export function getApiV1UsersUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGoGuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.go)[':guid']['$get']>>,
) {
  return ['go', '/go/:guid', toValue(args)] as const
}

export function getGoGuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.go)[':guid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGoGuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.go[':guid'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGoGuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.go)[':guid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.go)[':guid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.go)[':guid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.go)[':guid']['$get']>>>
            >
          >,
          ReturnType<typeof getGoGuidQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.go)[':guid']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGoGuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGoGuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.go[':guid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWhoisId4nQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whois)[':id4n']['$get']>>,
) {
  return ['whois', '/whois/:id4n', toValue(args)] as const
}

export function getWhoisId4nQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whois)[':id4n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhoisId4nQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whois[':id4n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhoisId4n<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.whois)[':id4n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.whois)[':id4n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.whois)[':id4n']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.whois)[':id4n']['$get']>>>
            >
          >,
          ReturnType<typeof getWhoisId4nQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.whois)[':id4n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhoisId4nQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhoisId4nQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whois[':id4n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
