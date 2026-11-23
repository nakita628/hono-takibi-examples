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

export function getHealthKey() {
  return ['health'] as const
}

export function getLinesKey() {
  return ['lines'] as const
}

export function getNewKey() {
  return ['new'] as const
}

export function getApiApikeysQueryKey() {
  return ['api', '/api/apikeys'] as const
}

export function getApiApikeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiApikeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.apikeys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiApikeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>
          >,
          ReturnType<typeof getApiApikeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiApikeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiApikeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.apikeys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAuthsQueryKey() {
  return ['api', '/api/auths'] as const
}

export function getApiAuthsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAuthsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auths.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAuths<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>
          >,
          ReturnType<typeof getApiAuthsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAuthsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAuthsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auths.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAuthsMutationKey() {
  return ['api', '/api/auths', 'POST'] as const
}

export function getPostApiAuthsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.auths.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAuthsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.auths.$post>) {
      return parseResponse(client.api.auths.$post(args, options))
    },
  })
}

export function usePostApiAuths<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.auths.$post>,
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
  const mutationDefaults = getPostApiAuthsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiAuthsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.auths)[':id']['$get']>>,
) {
  return ['api', '/api/auths/:id', toValue(args)] as const
}

export function getApiAuthsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.auths)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAuthsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auths[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAuthsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.auths)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiAuthsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAuthsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auths[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiAuthsIdMutationKey() {
  return ['api', '/api/auths/:id', 'PUT'] as const
}

export function getPutApiAuthsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.auths)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAuthsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.auths)[':id']['$put']>) {
      return parseResponse(client.api.auths[':id'].$put(args, options))
    },
  })
}

export function usePutApiAuthsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.auths)[':id']['$put']>,
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
  const mutationDefaults = getPutApiAuthsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiAuthsIdMutationKey() {
  return ['api', '/api/auths/:id', 'DELETE'] as const
}

export function getDeleteApiAuthsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.auths)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAuthsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.auths)[':id']['$delete']>) {
      return parseResponse(client.api.auths[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAuthsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.auths)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiAuthsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiAuthsIdMutationKey() {
  return ['api', '/api/auths/:id', 'PATCH'] as const
}

export function getPatchApiAuthsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.auths)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAuthsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.auths)[':id']['$patch']>) {
      return parseResponse(client.api.auths[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiAuthsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.auths)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiAuthsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiCertificatesQueryKey() {
  return ['api', '/api/certificates'] as const
}

export function getApiCertificatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiCertificatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.certificates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>
            >
          >,
          ReturnType<typeof getApiCertificatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiCertificatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.certificates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiCertificatesMutationKey() {
  return ['api', '/api/certificates', 'POST'] as const
}

export function getPostApiCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.certificates.$post>) {
      return parseResponse(client.api.certificates.$post(args, options))
    },
  })
}

export function usePostApiCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.certificates.$post>,
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
  const mutationDefaults = getPostApiCertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getApiCertificatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.certificates)[':id']['$get']>>,
) {
  return ['api', '/api/certificates/:id', toValue(args)] as const
}

export function getApiCertificatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.certificates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCertificatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.certificates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.certificates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCertificatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCertificatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCertificatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.certificates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiCertificatesIdMutationKey() {
  return ['api', '/api/certificates/:id', 'PUT'] as const
}

export function getPutApiCertificatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.certificates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCertificatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.certificates)[':id']['$put']>) {
      return parseResponse(client.api.certificates[':id'].$put(args, options))
    },
  })
}

export function usePutApiCertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.certificates)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.certificates)[':id']['$put']>,
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
  const mutationDefaults = getPutApiCertificatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiCertificatesIdMutationKey() {
  return ['api', '/api/certificates/:id', 'DELETE'] as const
}

export function getDeleteApiCertificatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.certificates)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.certificates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCertificatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.certificates)[':id']['$delete']>) {
      return parseResponse(client.api.certificates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiCertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.certificates)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.certificates)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiCertificatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiCertificatesIdMutationKey() {
  return ['api', '/api/certificates/:id', 'PATCH'] as const
}

export function getPatchApiCertificatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.certificates)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCertificatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.certificates)[':id']['$patch']>) {
      return parseResponse(client.api.certificates[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiCertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.certificates)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.certificates)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiCertificatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiClientValidatorsQueryKey() {
  return ['api', '/api/client-validators'] as const
}

export function getApiClientValidatorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiClientValidatorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['client-validators'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClientValidators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClientValidatorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientValidatorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiClientValidatorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['client-validators'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiClientValidatorsMutationKey() {
  return ['api', '/api/client-validators', 'POST'] as const
}

export function getPostApiClientValidatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['client-validators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiClientValidatorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['client-validators']['$post']>) {
      return parseResponse(client.api['client-validators'].$post(args, options))
    },
  })
}

export function usePostApiClientValidators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['client-validators']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['client-validators']['$post']>,
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
  const mutationDefaults = getPostApiClientValidatorsMutationOptions<TError, TOnMutateResult>(
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

export function getApiClientValidatorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>>,
) {
  return ['api', '/api/client-validators/:id', toValue(args)] as const
}

export function getApiClientValidatorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiClientValidatorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['client-validators'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiClientValidatorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiClientValidatorsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientValidatorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiClientValidatorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['client-validators'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiClientValidatorsIdMutationKey() {
  return ['api', '/api/client-validators/:id', 'PUT'] as const
}

export function getPutApiClientValidatorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['client-validators'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiClientValidatorsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['client-validators'][':id']['$put']>,
    ) {
      return parseResponse(client.api['client-validators'][':id'].$put(args, options))
    },
  })
}

export function usePutApiClientValidatorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['client-validators'][':id']['$put']>,
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
  const mutationDefaults = getPutApiClientValidatorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiClientValidatorsIdMutationKey() {
  return ['api', '/api/client-validators/:id', 'DELETE'] as const
}

export function getDeleteApiClientValidatorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['client-validators'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiClientValidatorsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['client-validators'][':id']['$delete']>,
    ) {
      return parseResponse(client.api['client-validators'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiClientValidatorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['client-validators'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiClientValidatorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiClientValidatorsIdMutationKey() {
  return ['api', '/api/client-validators/:id', 'PATCH'] as const
}

export function getPatchApiClientValidatorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['client-validators'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiClientValidatorsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['client-validators'][':id']['$patch']>,
    ) {
      return parseResponse(client.api['client-validators'][':id'].$patch(args, options))
    },
  })
}

export function usePatchApiClientValidatorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['client-validators'][':id']['$patch']>,
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
  const mutationDefaults = getPatchApiClientValidatorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiDataExporterConfigsQueryKey() {
  return ['api', '/api/data-exporter-configs'] as const
}

export function getApiDataExporterConfigsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiDataExporterConfigsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['data-exporter-configs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDataExporterConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
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
                Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDataExporterConfigsQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataExporterConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiDataExporterConfigsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['data-exporter-configs'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiDataExporterConfigsMutationKey() {
  return ['api', '/api/data-exporter-configs', 'POST'] as const
}

export function getPostApiDataExporterConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['data-exporter-configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataExporterConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['data-exporter-configs']['$post']>,
    ) {
      return parseResponse(client.api['data-exporter-configs'].$post(args, options))
    },
  })
}

export function usePostApiDataExporterConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['data-exporter-configs']['$post']>,
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
  const mutationDefaults = getPostApiDataExporterConfigsMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiDataExporterConfigsBulkMutationKey() {
  return ['api', '/api/data-exporter-configs/_bulk', 'PUT'] as const
}

export function getPutApiDataExporterConfigsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataExporterConfigsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']>,
    ) {
      return parseResponse(client.api['data-exporter-configs']._bulk.$put(args, options))
    },
  })
}

export function usePutApiDataExporterConfigsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']>,
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
  const mutationDefaults = getPutApiDataExporterConfigsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiDataExporterConfigsBulkMutationKey() {
  return ['api', '/api/data-exporter-configs/_bulk', 'POST'] as const
}

export function getPostApiDataExporterConfigsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataExporterConfigsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>,
    ) {
      return parseResponse(client.api['data-exporter-configs']._bulk.$post(args, options))
    },
  })
}

export function usePostApiDataExporterConfigsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>,
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
  const mutationDefaults = getPostApiDataExporterConfigsBulkMutationOptions<
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

export function getDeleteApiDataExporterConfigsBulkMutationKey() {
  return ['api', '/api/data-exporter-configs/_bulk', 'DELETE'] as const
}

export function getDeleteApiDataExporterConfigsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataExporterConfigsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>,
    ) {
      return parseResponse(client.api['data-exporter-configs']._bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiDataExporterConfigsBulk<
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
                  ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>,
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
  const mutationDefaults = getDeleteApiDataExporterConfigsBulkMutationOptions<
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

export function getPatchApiDataExporterConfigsBulkMutationKey() {
  return ['api', '/api/data-exporter-configs/_bulk', 'PATCH'] as const
}

export function getPatchApiDataExporterConfigsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataExporterConfigsBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>,
    ) {
      return parseResponse(client.api['data-exporter-configs']._bulk.$patch(args, options))
    },
  })
}

export function usePatchApiDataExporterConfigsBulk<
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
                Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>,
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
  const mutationDefaults = getPatchApiDataExporterConfigsBulkMutationOptions<
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

export function getApiDataExporterConfigsTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>
  >,
) {
  return ['api', '/api/data-exporter-configs/_template', toValue(args)] as const
}

export function getApiDataExporterConfigsTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDataExporterConfigsTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['data-exporter-configs']._template.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDataExporterConfigsTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>
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
                  ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiDataExporterConfigsTemplateQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataExporterConfigsTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDataExporterConfigsTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['data-exporter-configs']._template.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDataExporterConfigsDataExporterConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']>
  >,
) {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', toValue(args)] as const
}

export function getApiDataExporterConfigsDataExporterConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDataExporterConfigsDataExporterConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['data-exporter-configs'][':dataExporterConfigId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDataExporterConfigsDataExporterConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']>
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
                    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
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
                    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDataExporterConfigsDataExporterConfigIdQueryKey>
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
              (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataExporterConfigsDataExporterConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDataExporterConfigsDataExporterConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['data-exporter-configs'][':dataExporterConfigId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiDataExporterConfigsDataExporterConfigIdMutationKey() {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', 'PUT'] as const
}

export function getPutApiDataExporterConfigsDataExporterConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataExporterConfigsDataExporterConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']
      >,
    ) {
      return parseResponse(
        client.api['data-exporter-configs'][':dataExporterConfigId'].$put(args, options),
      )
    },
  })
}

export function usePutApiDataExporterConfigsDataExporterConfigId<
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
                    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']
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
  const mutationDefaults = getPutApiDataExporterConfigsDataExporterConfigIdMutationOptions<
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

export function getDeleteApiDataExporterConfigsDataExporterConfigIdMutationKey() {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', 'DELETE'] as const
}

export function getDeleteApiDataExporterConfigsDataExporterConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataExporterConfigsDataExporterConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['data-exporter-configs'][':dataExporterConfigId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiDataExporterConfigsDataExporterConfigId<
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
                    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
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
  const mutationDefaults = getDeleteApiDataExporterConfigsDataExporterConfigIdMutationOptions<
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

export function getPatchApiDataExporterConfigsDataExporterConfigIdMutationKey() {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', 'PATCH'] as const
}

export function getPatchApiDataExporterConfigsDataExporterConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataExporterConfigsDataExporterConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api['data-exporter-configs'][':dataExporterConfigId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiDataExporterConfigsDataExporterConfigId<
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
                    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
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
  const mutationDefaults = getPatchApiDataExporterConfigsDataExporterConfigIdMutationOptions<
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

export function getApiGlobalconfigQueryKey() {
  return ['api', '/api/globalconfig'] as const
}

export function getApiGlobalconfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiGlobalconfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.globalconfig.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiGlobalconfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>
            >
          >,
          ReturnType<typeof getApiGlobalconfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiGlobalconfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiGlobalconfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.globalconfig.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiGlobalconfigMutationKey() {
  return ['api', '/api/globalconfig', 'PUT'] as const
}

export function getPutApiGlobalconfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.globalconfig.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiGlobalconfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.globalconfig.$put>) {
      return parseResponse(client.api.globalconfig.$put(args, options))
    },
  })
}

export function usePutApiGlobalconfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.globalconfig.$put>,
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
  const mutationDefaults = getPutApiGlobalconfigMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiGlobalconfigMutationKey() {
  return ['api', '/api/globalconfig', 'PATCH'] as const
}

export function getPatchApiGlobalconfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.api.globalconfig.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiGlobalconfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.globalconfig.$patch>) {
      return parseResponse(client.api.globalconfig.$patch(args, options))
    },
  })
}

export function usePatchApiGlobalconfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.globalconfig.$patch>,
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
  const mutationDefaults = getPatchApiGlobalconfigMutationOptions<TError, TOnMutateResult>(
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

export function getApiGroupsQueryKey() {
  return ['api', '/api/groups'] as const
}

export function getApiGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>
          >,
          ReturnType<typeof getApiGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiGroupsMutationKey() {
  return ['api', '/api/groups', 'POST'] as const
}

export function getPostApiGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.groups.$post>) {
      return parseResponse(client.api.groups.$post(args, options))
    },
  })
}

export function usePostApiGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.groups.$post>,
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
  const mutationDefaults = getPostApiGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiGroupsGroupIdApikeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>
  >,
) {
  return ['api', '/api/groups/:groupId/apikeys', toValue(args)] as const
}

export function getApiGroupsGroupIdApikeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGroupsGroupIdApikeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.groups[':groupId'].apikeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGroupsGroupIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiGroupsGroupIdApikeysQueryKey>
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
          Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGroupsGroupIdApikeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGroupsGroupIdApikeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.groups[':groupId'].apikeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiGroupsGroupIdApikeysMutationKey() {
  return ['api', '/api/groups/:groupId/apikeys', 'POST'] as const
}

export function getPostApiGroupsGroupIdApikeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiGroupsGroupIdApikeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$post']>,
    ) {
      return parseResponse(client.api.groups[':groupId'].apikeys.$post(args, options))
    },
  })
}

export function usePostApiGroupsGroupIdApikeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$post']>,
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
  const mutationDefaults = getPostApiGroupsGroupIdApikeysMutationOptions<TError, TOnMutateResult>(
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

export function getApiGroupsGroupIdApikeysClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
  >,
) {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', toValue(args)] as const
}

export function getApiGroupsGroupIdApikeysClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGroupsGroupIdApikeysClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.groups[':groupId'].apikeys[':clientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGroupsGroupIdApikeysClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
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
                  ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiGroupsGroupIdApikeysClientIdQueryKey>
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
            ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGroupsGroupIdApikeysClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGroupsGroupIdApikeysClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.groups[':groupId'].apikeys[':clientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiGroupsGroupIdApikeysClientIdMutationKey() {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', 'PUT'] as const
}

export function getPutApiGroupsGroupIdApikeysClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiGroupsGroupIdApikeysClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']
      >,
    ) {
      return parseResponse(client.api.groups[':groupId'].apikeys[':clientId'].$put(args, options))
    },
  })
}

export function usePutApiGroupsGroupIdApikeysClientId<
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
                  ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']>,
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
  const mutationDefaults = getPutApiGroupsGroupIdApikeysClientIdMutationOptions<
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

export function getDeleteApiGroupsGroupIdApikeysClientIdMutationKey() {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', 'DELETE'] as const
}

export function getDeleteApiGroupsGroupIdApikeysClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiGroupsGroupIdApikeysClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.groups[':groupId'].apikeys[':clientId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiGroupsGroupIdApikeysClientId<
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
                    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']
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
  const mutationDefaults = getDeleteApiGroupsGroupIdApikeysClientIdMutationOptions<
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

export function getPatchApiGroupsGroupIdApikeysClientIdMutationKey() {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', 'PATCH'] as const
}

export function getPatchApiGroupsGroupIdApikeysClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiGroupsGroupIdApikeysClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']
      >,
    ) {
      return parseResponse(client.api.groups[':groupId'].apikeys[':clientId'].$patch(args, options))
    },
  })
}

export function usePatchApiGroupsGroupIdApikeysClientId<
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
                    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']
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
  const mutationDefaults = getPatchApiGroupsGroupIdApikeysClientIdMutationOptions<
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

export function getApiGroupsGroupIdApikeysClientIdQuotasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
    >
  >,
) {
  return ['api', '/api/groups/:groupId/apikeys/:clientId/quotas', toValue(args)] as const
}

export function getApiGroupsGroupIdApikeysClientIdQuotasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGroupsGroupIdApikeysClientIdQuotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.groups[':groupId'].apikeys[':clientId'].quotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGroupsGroupIdApikeysClientIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
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
                    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
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
                    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiGroupsGroupIdApikeysClientIdQuotasQueryKey>
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
              (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGroupsGroupIdApikeysClientIdQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGroupsGroupIdApikeysClientIdQuotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.groups[':groupId'].apikeys[':clientId'].quotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiGroupsGroupIdApikeysClientIdQuotasMutationKey() {
  return ['api', '/api/groups/:groupId/apikeys/:clientId/quotas', 'DELETE'] as const
}

export function getDeleteApiGroupsGroupIdApikeysClientIdQuotasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiGroupsGroupIdApikeysClientIdQuotasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.groups[':groupId'].apikeys[':clientId'].quotas.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiGroupsGroupIdApikeysClientIdQuotas<
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
                    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
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
  const mutationDefaults = getDeleteApiGroupsGroupIdApikeysClientIdQuotasMutationOptions<
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

export function getApiGroupsServiceGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>>,
) {
  return ['api', '/api/groups/:serviceGroupId', toValue(args)] as const
}

export function getApiGroupsServiceGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGroupsServiceGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.groups[':serviceGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGroupsServiceGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiGroupsServiceGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGroupsServiceGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGroupsServiceGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.groups[':serviceGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiGroupsServiceGroupIdMutationKey() {
  return ['api', '/api/groups/:serviceGroupId', 'PUT'] as const
}

export function getPutApiGroupsServiceGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiGroupsServiceGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$put']>,
    ) {
      return parseResponse(client.api.groups[':serviceGroupId'].$put(args, options))
    },
  })
}

export function usePutApiGroupsServiceGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$put']>,
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
  const mutationDefaults = getPutApiGroupsServiceGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiGroupsServiceGroupIdMutationKey() {
  return ['api', '/api/groups/:serviceGroupId', 'DELETE'] as const
}

export function getDeleteApiGroupsServiceGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiGroupsServiceGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$delete']>,
    ) {
      return parseResponse(client.api.groups[':serviceGroupId'].$delete(args, options))
    },
  })
}

export function useDeleteApiGroupsServiceGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$delete']>,
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
  const mutationDefaults = getDeleteApiGroupsServiceGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiGroupsServiceGroupIdMutationKey() {
  return ['api', '/api/groups/:serviceGroupId', 'PATCH'] as const
}

export function getPatchApiGroupsServiceGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiGroupsServiceGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$patch']>,
    ) {
      return parseResponse(client.api.groups[':serviceGroupId'].$patch(args, options))
    },
  })
}

export function usePatchApiGroupsServiceGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$patch']>,
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
  const mutationDefaults = getPatchApiGroupsServiceGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiGroupsServiceGroupIdServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>
  >,
) {
  return ['api', '/api/groups/:serviceGroupId/services', toValue(args)] as const
}

export function getApiGroupsServiceGroupIdServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGroupsServiceGroupIdServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.groups[':serviceGroupId'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGroupsServiceGroupIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>
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
                  ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiGroupsServiceGroupIdServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGroupsServiceGroupIdServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGroupsServiceGroupIdServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.groups[':serviceGroupId'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiImportMutationKey() {
  return ['api', '/api/import', 'POST'] as const
}

export function getPostApiImportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.import.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.import.$post>) {
      return parseResponse(client.api.import.$post(args, options))
    },
  })
}

export function usePostApiImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.import.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.import.$post>,
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
  const mutationDefaults = getPostApiImportMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLiveQueryKey() {
  return ['api', '/api/live'] as const
}

export function getApiLiveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiLiveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.live.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>
          >,
          ReturnType<typeof getApiLiveQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiLiveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.live.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLiveIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.live)[':id']['$get']>>,
) {
  return ['api', '/api/live/:id', toValue(args)] as const
}

export function getApiLiveIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.live)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLiveIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.live[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLiveId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.live)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiLiveIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLiveIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLiveIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.live[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOtoroshiJsonQueryKey() {
  return ['api', '/api/otoroshi.json'] as const
}

export function getApiOtoroshiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiOtoroshiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['otoroshi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOtoroshiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOtoroshiJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOtoroshiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiOtoroshiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['otoroshi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOtoroshiJsonMutationKey() {
  return ['api', '/api/otoroshi.json', 'POST'] as const
}

export function getPostApiOtoroshiJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['otoroshi.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOtoroshiJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['otoroshi.json']['$post']>) {
      return parseResponse(client.api['otoroshi.json'].$post(args, options))
    },
  })
}

export function usePostApiOtoroshiJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['otoroshi.json']['$post']>,
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
  const mutationDefaults = getPostApiOtoroshiJsonMutationOptions<TError, TOnMutateResult>(
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

export function getApiScriptsQueryKey() {
  return ['api', '/api/scripts'] as const
}

export function getApiScriptsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiScriptsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.scripts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>
          >,
          ReturnType<typeof getApiScriptsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiScriptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiScriptsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.scripts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiScriptsMutationKey() {
  return ['api', '/api/scripts', 'POST'] as const
}

export function getPostApiScriptsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.scripts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiScriptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.scripts.$post>) {
      return parseResponse(client.api.scripts.$post(args, options))
    },
  })
}

export function usePostApiScripts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.scripts.$post>,
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
  const mutationDefaults = getPostApiScriptsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiScriptsCompileMutationKey() {
  return ['api', '/api/scripts/_compile', 'POST'] as const
}

export function getPostApiScriptsCompileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts._compile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.scripts._compile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiScriptsCompileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.scripts._compile.$post>) {
      return parseResponse(client.api.scripts._compile.$post(args, options))
    },
  })
}

export function usePostApiScriptsCompile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts._compile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.scripts._compile.$post>,
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
  const mutationDefaults = getPostApiScriptsCompileMutationOptions<TError, TOnMutateResult>(
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

export function getApiScriptsScriptIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>>,
) {
  return ['api', '/api/scripts/:scriptId', toValue(args)] as const
}

export function getApiScriptsScriptIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiScriptsScriptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.scripts[':scriptId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiScriptsScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiScriptsScriptIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiScriptsScriptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiScriptsScriptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.scripts[':scriptId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiScriptsScriptIdMutationKey() {
  return ['api', '/api/scripts/:scriptId', 'PUT'] as const
}

export function getPutApiScriptsScriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.scripts)[':scriptId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiScriptsScriptIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$put']>) {
      return parseResponse(client.api.scripts[':scriptId'].$put(args, options))
    },
  })
}

export function usePutApiScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.scripts)[':scriptId']['$put']>,
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
  const mutationDefaults = getPutApiScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiScriptsScriptIdMutationKey() {
  return ['api', '/api/scripts/:scriptId', 'DELETE'] as const
}

export function getDeleteApiScriptsScriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.scripts)[':scriptId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiScriptsScriptIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$delete']>) {
      return parseResponse(client.api.scripts[':scriptId'].$delete(args, options))
    },
  })
}

export function useDeleteApiScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.scripts)[':scriptId']['$delete']>,
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
  const mutationDefaults = getDeleteApiScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiScriptsScriptIdMutationKey() {
  return ['api', '/api/scripts/:scriptId', 'PATCH'] as const
}

export function getPatchApiScriptsScriptIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.scripts)[':scriptId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiScriptsScriptIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$patch']>) {
      return parseResponse(client.api.scripts[':scriptId'].$patch(args, options))
    },
  })
}

export function usePatchApiScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.scripts)[':scriptId']['$patch']>,
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
  const mutationDefaults = getPatchApiScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiServicesQueryKey() {
  return ['api', '/api/services'] as const
}

export function getApiServicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiServicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.services.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>
          >,
          ReturnType<typeof getApiServicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiServicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.services.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiServicesMutationKey() {
  return ['api', '/api/services', 'POST'] as const
}

export function getPostApiServicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.services.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiServicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.services.$post>) {
      return parseResponse(client.api.services.$post(args, options))
    },
  })
}

export function usePostApiServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.services.$post>,
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
  const mutationDefaults = getPostApiServicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiServicesServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.services)[':serviceId']['$get']>>,
) {
  return ['api', '/api/services/:serviceId', toValue(args)] as const
}

export function getApiServicesServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.services)[':serviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.services[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.services)[':serviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiServicesServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.services[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiServicesServiceIdMutationKey() {
  return ['api', '/api/services/:serviceId', 'PUT'] as const
}

export function getPutApiServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiServicesServiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.services)[':serviceId']['$put']>) {
      return parseResponse(client.api.services[':serviceId'].$put(args, options))
    },
  })
}

export function usePutApiServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['$put']>,
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
  const mutationDefaults = getPutApiServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiServicesServiceIdMutationKey() {
  return ['api', '/api/services/:serviceId', 'DELETE'] as const
}

export function getDeleteApiServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.services)[':serviceId']['$delete']>,
    ) {
      return parseResponse(client.api.services[':serviceId'].$delete(args, options))
    },
  })
}

export function useDeleteApiServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['$delete']>,
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
  const mutationDefaults = getDeleteApiServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiServicesServiceIdMutationKey() {
  return ['api', '/api/services/:serviceId', 'PATCH'] as const
}

export function getPatchApiServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiServicesServiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.services)[':serviceId']['$patch']>) {
      return parseResponse(client.api.services[':serviceId'].$patch(args, options))
    },
  })
}

export function usePatchApiServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['$patch']>,
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
  const mutationDefaults = getPatchApiServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiServicesServiceIdApikeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys', toValue(args)] as const
}

export function getApiServicesServiceIdApikeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesServiceIdApikeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServicesServiceIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiServicesServiceIdApikeysQueryKey>
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
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesServiceIdApikeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesServiceIdApikeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.services[':serviceId'].apikeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiServicesServiceIdApikeysMutationKey() {
  return ['api', '/api/services/:serviceId/apikeys', 'POST'] as const
}

export function getPostApiServicesServiceIdApikeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiServicesServiceIdApikeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>,
    ) {
      return parseResponse(client.api.services[':serviceId'].apikeys.$post(args, options))
    },
  })
}

export function usePostApiServicesServiceIdApikeys<
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
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>,
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
  const mutationDefaults = getPostApiServicesServiceIdApikeysMutationOptions<
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

export function getApiServicesServiceIdApikeysClientIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', toValue(args)] as const
}

export function getApiServicesServiceIdApikeysClientIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesServiceIdApikeysClientIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServicesServiceIdApikeysClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiServicesServiceIdApikeysClientIdQueryKey>
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
            ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesServiceIdApikeysClientIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesServiceIdApikeysClientIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiServicesServiceIdApikeysClientIdMutationKey() {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', 'PUT'] as const
}

export function getPutApiServicesServiceIdApikeysClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiServicesServiceIdApikeysClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].$put(args, options),
      )
    },
  })
}

export function usePutApiServicesServiceIdApikeysClientId<
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']
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
  const mutationDefaults = getPutApiServicesServiceIdApikeysClientIdMutationOptions<
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

export function getDeleteApiServicesServiceIdApikeysClientIdMutationKey() {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', 'DELETE'] as const
}

export function getDeleteApiServicesServiceIdApikeysClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiServicesServiceIdApikeysClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiServicesServiceIdApikeysClientId<
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']
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
  const mutationDefaults = getDeleteApiServicesServiceIdApikeysClientIdMutationOptions<
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

export function getPatchApiServicesServiceIdApikeysClientIdMutationKey() {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', 'PATCH'] as const
}

export function getPatchApiServicesServiceIdApikeysClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiServicesServiceIdApikeysClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiServicesServiceIdApikeysClientId<
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']
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
  const mutationDefaults = getPatchApiServicesServiceIdApikeysClientIdMutationOptions<
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

export function getApiServicesServiceIdApikeysClientIdGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
    >
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId/group', toValue(args)] as const
}

export function getApiServicesServiceIdApikeysClientIdGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesServiceIdApikeysClientIdGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].group.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServicesServiceIdApikeysClientIdGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiServicesServiceIdApikeysClientIdGroupQueryKey>
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
              (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesServiceIdApikeysClientIdGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesServiceIdApikeysClientIdGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].group.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiServicesServiceIdApikeysClientIdQuotasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
    >
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId/quotas', toValue(args)] as const
}

export function getApiServicesServiceIdApikeysClientIdQuotasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesServiceIdApikeysClientIdQuotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].quotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServicesServiceIdApikeysClientIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiServicesServiceIdApikeysClientIdQuotasQueryKey>
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
              (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesServiceIdApikeysClientIdQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesServiceIdApikeysClientIdQuotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.services[':serviceId'].apikeys[':clientId'].quotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiServicesServiceIdApikeysClientIdQuotasMutationKey() {
  return ['api', '/api/services/:serviceId/apikeys/:clientId/quotas', 'DELETE'] as const
}

export function getDeleteApiServicesServiceIdApikeysClientIdQuotasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiServicesServiceIdApikeysClientIdQuotasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].quotas.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiServicesServiceIdApikeysClientIdQuotas<
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
                    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
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
  const mutationDefaults = getDeleteApiServicesServiceIdApikeysClientIdQuotasMutationOptions<
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

export function getApiServicesServiceIdTargetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>
  >,
) {
  return ['api', '/api/services/:serviceId/targets', toValue(args)] as const
}

export function getApiServicesServiceIdTargetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesServiceIdTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.services[':serviceId'].targets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServicesServiceIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiServicesServiceIdTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesServiceIdTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesServiceIdTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.services[':serviceId'].targets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiServicesServiceIdTargetsMutationKey() {
  return ['api', '/api/services/:serviceId/targets', 'POST'] as const
}

export function getPostApiServicesServiceIdTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiServicesServiceIdTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$post']>,
    ) {
      return parseResponse(client.api.services[':serviceId'].targets.$post(args, options))
    },
  })
}

export function usePostApiServicesServiceIdTargets<
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
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$post']>,
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
  const mutationDefaults = getPostApiServicesServiceIdTargetsMutationOptions<
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

export function getDeleteApiServicesServiceIdTargetsMutationKey() {
  return ['api', '/api/services/:serviceId/targets', 'DELETE'] as const
}

export function getDeleteApiServicesServiceIdTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiServicesServiceIdTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$delete']>,
    ) {
      return parseResponse(client.api.services[':serviceId'].targets.$delete(args, options))
    },
  })
}

export function useDeleteApiServicesServiceIdTargets<
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
                  ReturnType<(typeof client.api.services)[':serviceId']['targets']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$delete']>,
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
  const mutationDefaults = getDeleteApiServicesServiceIdTargetsMutationOptions<
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

export function getPatchApiServicesServiceIdTargetsMutationKey() {
  return ['api', '/api/services/:serviceId/targets', 'PATCH'] as const
}

export function getPatchApiServicesServiceIdTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiServicesServiceIdTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$patch']>,
    ) {
      return parseResponse(client.api.services[':serviceId'].targets.$patch(args, options))
    },
  })
}

export function usePatchApiServicesServiceIdTargets<
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
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$patch']>,
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
  const mutationDefaults = getPatchApiServicesServiceIdTargetsMutationOptions<
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

export function getApiServicesServiceIdTemplateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>
  >,
) {
  return ['api', '/api/services/:serviceId/template', toValue(args)] as const
}

export function getApiServicesServiceIdTemplateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesServiceIdTemplateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.services[':serviceId'].template.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServicesServiceIdTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiServicesServiceIdTemplateQueryKey>
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
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesServiceIdTemplateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesServiceIdTemplateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.services[':serviceId'].template.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiServicesServiceIdTemplateMutationKey() {
  return ['api', '/api/services/:serviceId/template', 'PUT'] as const
}

export function getPutApiServicesServiceIdTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiServicesServiceIdTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$put']>,
    ) {
      return parseResponse(client.api.services[':serviceId'].template.$put(args, options))
    },
  })
}

export function usePutApiServicesServiceIdTemplate<
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
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['template']['$put']>,
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
  const mutationDefaults = getPutApiServicesServiceIdTemplateMutationOptions<
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

export function getPostApiServicesServiceIdTemplateMutationKey() {
  return ['api', '/api/services/:serviceId/template', 'POST'] as const
}

export function getPostApiServicesServiceIdTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiServicesServiceIdTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$post']>,
    ) {
      return parseResponse(client.api.services[':serviceId'].template.$post(args, options))
    },
  })
}

export function usePostApiServicesServiceIdTemplate<
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
                Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['template']['$post']>,
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
  const mutationDefaults = getPostApiServicesServiceIdTemplateMutationOptions<
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

export function getDeleteApiServicesServiceIdTemplateMutationKey() {
  return ['api', '/api/services/:serviceId/template', 'DELETE'] as const
}

export function getDeleteApiServicesServiceIdTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.services)[':serviceId']['template']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiServicesServiceIdTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$delete']>,
    ) {
      return parseResponse(client.api.services[':serviceId'].template.$delete(args, options))
    },
  })
}

export function useDeleteApiServicesServiceIdTemplate<
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
                  ReturnType<(typeof client.api.services)[':serviceId']['template']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.services)[':serviceId']['template']['$delete']>,
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
  const mutationDefaults = getDeleteApiServicesServiceIdTemplateMutationOptions<
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

export function getPostApiSnowmonkeyStartMutationKey() {
  return ['api', '/api/snowmonkey/_start', 'POST'] as const
}

export function getPostApiSnowmonkeyStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey._start.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiSnowmonkeyStartMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.snowmonkey._start.$post(undefined, options))
    },
  })
}

export function usePostApiSnowmonkeyStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey._start.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiSnowmonkeyStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiSnowmonkeyStopMutationKey() {
  return ['api', '/api/snowmonkey/_stop', 'POST'] as const
}

export function getPostApiSnowmonkeyStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey._stop.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiSnowmonkeyStopMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.snowmonkey._stop.$post(undefined, options))
    },
  })
}

export function usePostApiSnowmonkeyStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey._stop.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostApiSnowmonkeyStopMutationOptions<TError, TOnMutateResult>(
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

export function getApiSnowmonkeyConfigQueryKey() {
  return ['api', '/api/snowmonkey/config'] as const
}

export function getApiSnowmonkeyConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSnowmonkeyConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.snowmonkey.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSnowmonkeyConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
            >
          >,
          ReturnType<typeof getApiSnowmonkeyConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSnowmonkeyConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSnowmonkeyConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.snowmonkey.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiSnowmonkeyConfigMutationKey() {
  return ['api', '/api/snowmonkey/config', 'PUT'] as const
}

export function getPutApiSnowmonkeyConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.snowmonkey.config.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiSnowmonkeyConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.snowmonkey.config.$put>) {
      return parseResponse(client.api.snowmonkey.config.$put(args, options))
    },
  })
}

export function usePutApiSnowmonkeyConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.snowmonkey.config.$put>,
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
  const mutationDefaults = getPutApiSnowmonkeyConfigMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiSnowmonkeyConfigMutationKey() {
  return ['api', '/api/snowmonkey/config', 'PATCH'] as const
}

export function getPatchApiSnowmonkeyConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.snowmonkey.config.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSnowmonkeyConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.snowmonkey.config.$patch>) {
      return parseResponse(client.api.snowmonkey.config.$patch(args, options))
    },
  })
}

export function usePatchApiSnowmonkeyConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.snowmonkey.config.$patch>,
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
  const mutationDefaults = getPatchApiSnowmonkeyConfigMutationOptions<TError, TOnMutateResult>(
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

export function getApiSnowmonkeyOutagesQueryKey() {
  return ['api', '/api/snowmonkey/outages'] as const
}

export function getApiSnowmonkeyOutagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSnowmonkeyOutagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.snowmonkey.outages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSnowmonkeyOutages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
            >
          >,
          ReturnType<typeof getApiSnowmonkeyOutagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSnowmonkeyOutagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSnowmonkeyOutagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.snowmonkey.outages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiSnowmonkeyOutagesMutationKey() {
  return ['api', '/api/snowmonkey/outages', 'DELETE'] as const
}

export function getDeleteApiSnowmonkeyOutagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSnowmonkeyOutagesMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.snowmonkey.outages.$delete(undefined, options))
    },
  })
}

export function useDeleteApiSnowmonkeyOutages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.snowmonkey.outages.$delete>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteApiSnowmonkeyOutagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiVerifiersQueryKey() {
  return ['api', '/api/verifiers'] as const
}

export function getApiVerifiersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiVerifiersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.verifiers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiVerifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
          >,
          ReturnType<typeof getApiVerifiersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVerifiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiVerifiersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.verifiers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiVerifiersMutationKey() {
  return ['api', '/api/verifiers', 'POST'] as const
}

export function getPostApiVerifiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.verifiers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVerifiersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.verifiers.$post>) {
      return parseResponse(client.api.verifiers.$post(args, options))
    },
  })
}

export function usePostApiVerifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.verifiers.$post>,
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
  const mutationDefaults = getPostApiVerifiersMutationOptions<TError, TOnMutateResult>(
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

export function getApiVerifiersVerifierIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>>,
) {
  return ['api', '/api/verifiers/:verifierId', toValue(args)] as const
}

export function getApiVerifiersVerifierIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVerifiersVerifierIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.verifiers[':verifierId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVerifiersVerifierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiVerifiersVerifierIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVerifiersVerifierIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVerifiersVerifierIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.verifiers[':verifierId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiVerifiersVerifierIdMutationKey() {
  return ['api', '/api/verifiers/:verifierId', 'PUT'] as const
}

export function getPutApiVerifiersVerifierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.verifiers)[':verifierId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiVerifiersVerifierIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$put']>) {
      return parseResponse(client.api.verifiers[':verifierId'].$put(args, options))
    },
  })
}

export function usePutApiVerifiersVerifierId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.verifiers)[':verifierId']['$put']>,
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
  const mutationDefaults = getPutApiVerifiersVerifierIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiVerifiersVerifierIdMutationKey() {
  return ['api', '/api/verifiers/:verifierId', 'DELETE'] as const
}

export function getDeleteApiVerifiersVerifierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.verifiers)[':verifierId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiVerifiersVerifierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$delete']>,
    ) {
      return parseResponse(client.api.verifiers[':verifierId'].$delete(args, options))
    },
  })
}

export function useDeleteApiVerifiersVerifierId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.verifiers)[':verifierId']['$delete']>,
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
  const mutationDefaults = getDeleteApiVerifiersVerifierIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiVerifiersVerifierIdMutationKey() {
  return ['api', '/api/verifiers/:verifierId', 'PATCH'] as const
}

export function getPatchApiVerifiersVerifierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.verifiers)[':verifierId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiVerifiersVerifierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$patch']>,
    ) {
      return parseResponse(client.api.verifiers[':verifierId'].$patch(args, options))
    },
  })
}

export function usePatchApiVerifiersVerifierId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.verifiers)[':verifierId']['$patch']>,
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
  const mutationDefaults = getPatchApiVerifiersVerifierIdMutationOptions<TError, TOnMutateResult>(
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinesQueryKey() {
  return ['lines', '/lines'] as const
}

export function getLinesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLinesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lines.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLines<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
          ReturnType<typeof getLinesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLinesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lines.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinesLineServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lines)[':line']['services']['$get']>>,
) {
  return ['lines', '/lines/:line/services', toValue(args)] as const
}

export function getLinesLineServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lines)[':line']['services']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinesLineServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lines[':line'].services.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinesLineServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lines)[':line']['services']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinesLineServicesQueryKey>
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
          Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinesLineServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinesLineServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lines[':line'].services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNewApikeyQueryKey() {
  return ['new', '/new/apikey'] as const
}

export function getNewApikeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNewApikeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.new.apikey.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNewApikey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>
          >,
          ReturnType<typeof getNewApikeyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNewApikeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNewApikeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.new.apikey.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNewGroupQueryKey() {
  return ['new', '/new/group'] as const
}

export function getNewGroupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNewGroupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.new.group.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNewGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>
          >,
          ReturnType<typeof getNewGroupQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNewGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNewGroupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.new.group.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNewServiceQueryKey() {
  return ['new', '/new/service'] as const
}

export function getNewServiceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNewServiceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.new.service.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNewService<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>
          >,
          ReturnType<typeof getNewServiceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNewServiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNewServiceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.new.service.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
