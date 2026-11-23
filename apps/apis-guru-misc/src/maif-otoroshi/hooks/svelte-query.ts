import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getApiApikeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiApikeysQueryKey>
  >({
    queryKey: getApiApikeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.apikeys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiApikeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.apikeys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiApikeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiApikeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiAuthsQueryKey() {
  return ['api', '/api/auths'] as const
}

export function getApiAuthsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAuthsQueryKey>
  >({
    queryKey: getApiAuthsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auths.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAuths<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAuths<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auths.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.auths.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAuthsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAuthsIdQueryKey(
  args: InferRequestType<(typeof client.api.auths)[':id']['$get']>,
) {
  return ['api', '/api/auths/:id', args] as const
}

export function getApiAuthsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.auths)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthsIdQueryKey>
  >({
    queryKey: getApiAuthsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auths[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAuthsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.auths)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiAuthsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.auths)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiAuthsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiAuthsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.auths)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAuthsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiAuthsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.auths)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.auths)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiAuthsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCertificatesQueryKey() {
  return ['api', '/api/certificates'] as const
}

export function getApiCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCertificatesQueryKey>
  >({
    queryKey: getApiCertificatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.certificates.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCertificatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.certificates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.certificates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCertificatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCertificatesIdQueryKey(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$get']>,
) {
  return ['api', '/api/certificates/:id', args] as const
}

export function getApiCertificatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCertificatesIdQueryKey>
  >({
    queryKey: getApiCertificatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.certificates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.certificates)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.certificates)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCertificatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCertificatesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiCertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiCertificatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiCertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiCertificatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiCertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiCertificatesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiClientValidatorsQueryKey() {
  return ['api', '/api/client-validators'] as const
}

export function getApiClientValidatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClientValidatorsQueryKey>
  >({
    queryKey: getApiClientValidatorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['client-validators'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClientValidators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['client-validators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClientValidatorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiClientValidatorsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiClientValidators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiClientValidatorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiClientValidatorsIdQueryKey(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>,
) {
  return ['api', '/api/client-validators/:id', args] as const
}

export function getApiClientValidatorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiClientValidatorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['client-validators'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiClientValidatorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['client-validators'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiClientValidatorsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiClientValidatorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiClientValidatorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiClientValidatorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiClientValidatorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiClientValidatorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiClientValidatorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiDataExporterConfigsQueryKey() {
  return ['api', '/api/data-exporter-configs'] as const
}

export function getApiDataExporterConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiDataExporterConfigsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['data-exporter-configs'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDataExporterConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDataExporterConfigsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiDataExporterConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDataExporterConfigsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutApiDataExporterConfigsBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiDataExporterConfigsBulkMutationOptions<
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

export function createPostApiDataExporterConfigsBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDataExporterConfigsBulkMutationOptions<
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

export function createDeleteApiDataExporterConfigsBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiDataExporterConfigsBulkMutationOptions<
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

export function createPatchApiDataExporterConfigsBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiDataExporterConfigsBulkMutationOptions<
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

export function getApiDataExporterConfigsTemplateQueryKey(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>,
) {
  return ['api', '/api/data-exporter-configs/_template', args] as const
}

export function getApiDataExporterConfigsTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiDataExporterConfigsTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['data-exporter-configs']._template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDataExporterConfigsTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['data-exporter-configs']['_template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiDataExporterConfigsTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiDataExporterConfigsDataExporterConfigIdQueryKey(
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
  >,
) {
  return ['api', '/api/data-exporter-configs/:dataExporterConfigId', args] as const
}

export function getApiDataExporterConfigsDataExporterConfigIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiDataExporterConfigsDataExporterConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['data-exporter-configs'][':dataExporterConfigId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDataExporterConfigsDataExporterConfigId<
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
  args: () => InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiDataExporterConfigsDataExporterConfigIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiDataExporterConfigsDataExporterConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiDataExporterConfigsDataExporterConfigIdMutationOptions<
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

export function createDeleteApiDataExporterConfigsDataExporterConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiDataExporterConfigsDataExporterConfigIdMutationOptions<
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

export function createPatchApiDataExporterConfigsDataExporterConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiDataExporterConfigsDataExporterConfigIdMutationOptions<
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

export function getApiGlobalconfigQueryKey() {
  return ['api', '/api/globalconfig'] as const
}

export function getApiGlobalconfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiGlobalconfigQueryKey>
  >({
    queryKey: getApiGlobalconfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.globalconfig.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiGlobalconfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiGlobalconfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGlobalconfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutApiGlobalconfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.globalconfig.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiGlobalconfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiGlobalconfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.globalconfig.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.globalconfig.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiGlobalconfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiGroupsQueryKey() {
  return ['api', '/api/groups'] as const
}

export function getApiGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiGroupsQueryKey>
  >({
    queryKey: getApiGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.groups.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiGroupsGroupIdApikeysQueryKey(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>,
) {
  return ['api', '/api/groups/:groupId/apikeys', args] as const
}

export function getApiGroupsGroupIdApikeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiGroupsGroupIdApikeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.groups[':groupId'].apikeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGroupsGroupIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiGroupsGroupIdApikeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiGroupsGroupIdApikeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiGroupsGroupIdApikeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiGroupsGroupIdApikeysClientIdQueryKey(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>,
) {
  return ['api', '/api/groups/:groupId/apikeys/:clientId', args] as const
}

export function getApiGroupsGroupIdApikeysClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiGroupsGroupIdApikeysClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.groups[':groupId'].apikeys[':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGroupsGroupIdApikeysClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiGroupsGroupIdApikeysClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiGroupsGroupIdApikeysClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiGroupsGroupIdApikeysClientIdMutationOptions<
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

export function createDeleteApiGroupsGroupIdApikeysClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiGroupsGroupIdApikeysClientIdMutationOptions<
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

export function createPatchApiGroupsGroupIdApikeysClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiGroupsGroupIdApikeysClientIdMutationOptions<
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

export function getApiGroupsGroupIdApikeysClientIdQuotasQueryKey(
  args: InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
  >,
) {
  return ['api', '/api/groups/:groupId/apikeys/:clientId/quotas', args] as const
}

export function getApiGroupsGroupIdApikeysClientIdQuotasQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiGroupsGroupIdApikeysClientIdQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.groups[':groupId'].apikeys[':clientId'].quotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGroupsGroupIdApikeysClientIdQuotas<
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
  args: () => InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiGroupsGroupIdApikeysClientIdQuotasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiGroupsGroupIdApikeysClientIdQuotas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiGroupsGroupIdApikeysClientIdQuotasMutationOptions<
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

export function getApiGroupsServiceGroupIdQueryKey(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>,
) {
  return ['api', '/api/groups/:serviceGroupId', args] as const
}

export function getApiGroupsServiceGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiGroupsServiceGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.groups[':serviceGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGroupsServiceGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiGroupsServiceGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiGroupsServiceGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiGroupsServiceGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiGroupsServiceGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiGroupsServiceGroupIdMutationOptions<
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

export function createPatchApiGroupsServiceGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiGroupsServiceGroupIdMutationOptions<
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

export function getApiGroupsServiceGroupIdServicesQueryKey(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>,
) {
  return ['api', '/api/groups/:serviceGroupId/services', args] as const
}

export function getApiGroupsServiceGroupIdServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiGroupsServiceGroupIdServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.groups[':serviceGroupId'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGroupsServiceGroupIdServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiGroupsServiceGroupIdServicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiImportMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiLiveQueryKey() {
  return ['api', '/api/live'] as const
}

export function getApiLiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLiveQueryKey>
  >({
    queryKey: getApiLiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.live.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.live.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiLiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLiveQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiLiveIdQueryKey(
  args: InferRequestType<(typeof client.api.live)[':id']['$get']>,
) {
  return ['api', '/api/live/:id', args] as const
}

export function getApiLiveIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.api.live)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLiveIdQueryKey>
  >({
    queryKey: getApiLiveIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.live[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiLiveId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.live)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.live)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLiveIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLiveIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiOtoroshiJsonQueryKey() {
  return ['api', '/api/otoroshi.json'] as const
}

export function getApiOtoroshiJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOtoroshiJsonQueryKey>
  >({
    queryKey: getApiOtoroshiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['otoroshi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOtoroshiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOtoroshiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOtoroshiJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiOtoroshiJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['otoroshi.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['otoroshi.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOtoroshiJsonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiScriptsQueryKey() {
  return ['api', '/api/scripts'] as const
}

export function getApiScriptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiScriptsQueryKey>
  >({
    queryKey: getApiScriptsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.scripts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiScripts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiScriptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiScriptsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiScripts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.scripts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiScriptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiScriptsCompile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.scripts._compile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.scripts._compile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiScriptsCompileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiScriptsScriptIdQueryKey(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>,
) {
  return ['api', '/api/scripts/:scriptId', args] as const
}

export function getApiScriptsScriptIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiScriptsScriptIdQueryKey>
  >({
    queryKey: getApiScriptsScriptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.scripts[':scriptId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiScriptsScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.scripts)[':scriptId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiScriptsScriptIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiScriptsScriptIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutApiScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiScriptsScriptId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiScriptsScriptIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiServicesQueryKey() {
  return ['api', '/api/services'] as const
}

export function getApiServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiServicesQueryKey>
  >({
    queryKey: getApiServicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.services.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiServicesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.services.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.services.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiServicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiServicesServiceIdQueryKey(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$get']>,
) {
  return ['api', '/api/services/:serviceId', args] as const
}

export function getApiServicesServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.services[':serviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.services)[':serviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.services)[':serviceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiServicesServiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiServicesServiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiServicesServiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiServicesServiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiServicesServiceIdApikeysQueryKey(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>,
) {
  return ['api', '/api/services/:serviceId/apikeys', args] as const
}

export function getApiServicesServiceIdApikeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiServicesServiceIdApikeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServicesServiceIdApikeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiServicesServiceIdApikeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiServicesServiceIdApikeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiServicesServiceIdApikeysMutationOptions<
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

export function getApiServicesServiceIdApikeysClientIdQueryKey(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId', args] as const
}

export function getApiServicesServiceIdApikeysClientIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiServicesServiceIdApikeysClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServicesServiceIdApikeysClientId<
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
  args: () => InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiServicesServiceIdApikeysClientIdQueryKey>
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
      ...getApiServicesServiceIdApikeysClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiServicesServiceIdApikeysClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiServicesServiceIdApikeysClientIdMutationOptions<
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

export function createDeleteApiServicesServiceIdApikeysClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiServicesServiceIdApikeysClientIdMutationOptions<
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

export function createPatchApiServicesServiceIdApikeysClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiServicesServiceIdApikeysClientIdMutationOptions<
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

export function getApiServicesServiceIdApikeysClientIdGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId/group', args] as const
}

export function getApiServicesServiceIdApikeysClientIdGroupQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiServicesServiceIdApikeysClientIdGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].group.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServicesServiceIdApikeysClientIdGroup<
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
  args: () => InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiServicesServiceIdApikeysClientIdGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiServicesServiceIdApikeysClientIdQuotasQueryKey(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
  >,
) {
  return ['api', '/api/services/:serviceId/apikeys/:clientId/quotas', args] as const
}

export function getApiServicesServiceIdApikeysClientIdQuotasQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiServicesServiceIdApikeysClientIdQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.services[':serviceId'].apikeys[':clientId'].quotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServicesServiceIdApikeysClientIdQuotas<
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
  args: () => InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiServicesServiceIdApikeysClientIdQuotasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiServicesServiceIdApikeysClientIdQuotas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiServicesServiceIdApikeysClientIdQuotasMutationOptions<
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

export function getApiServicesServiceIdTargetsQueryKey(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>,
) {
  return ['api', '/api/services/:serviceId/targets', args] as const
}

export function getApiServicesServiceIdTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiServicesServiceIdTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.services[':serviceId'].targets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServicesServiceIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiServicesServiceIdTargetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiServicesServiceIdTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiServicesServiceIdTargetsMutationOptions<
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

export function createDeleteApiServicesServiceIdTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiServicesServiceIdTargetsMutationOptions<
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

export function createPatchApiServicesServiceIdTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiServicesServiceIdTargetsMutationOptions<
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

export function getApiServicesServiceIdTemplateQueryKey(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>,
) {
  return ['api', '/api/services/:serviceId/template', args] as const
}

export function getApiServicesServiceIdTemplateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiServicesServiceIdTemplateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.services[':serviceId'].template.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiServicesServiceIdTemplate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.services)[':serviceId']['template']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiServicesServiceIdTemplateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiServicesServiceIdTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiServicesServiceIdTemplateMutationOptions<
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

export function createPostApiServicesServiceIdTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiServicesServiceIdTemplateMutationOptions<
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

export function createDeleteApiServicesServiceIdTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiServicesServiceIdTemplateMutationOptions<
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

export function createPostApiSnowmonkeyStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey._start.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSnowmonkeyStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiSnowmonkeyStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey._stop.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSnowmonkeyStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSnowmonkeyConfigQueryKey() {
  return ['api', '/api/snowmonkey/config'] as const
}

export function getApiSnowmonkeyConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSnowmonkeyConfigQueryKey>
  >({
    queryKey: getApiSnowmonkeyConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.snowmonkey.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSnowmonkeyConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSnowmonkeyConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSnowmonkeyConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutApiSnowmonkeyConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.snowmonkey.config.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiSnowmonkeyConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchApiSnowmonkeyConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.config.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.snowmonkey.config.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiSnowmonkeyConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSnowmonkeyOutagesQueryKey() {
  return ['api', '/api/snowmonkey/outages'] as const
}

export function getApiSnowmonkeyOutagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSnowmonkeyOutagesQueryKey>
  >({
    queryKey: getApiSnowmonkeyOutagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.snowmonkey.outages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSnowmonkeyOutages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSnowmonkeyOutagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSnowmonkeyOutagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiSnowmonkeyOutages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.snowmonkey.outages.$delete>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSnowmonkeyOutagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiVerifiersQueryKey() {
  return ['api', '/api/verifiers'] as const
}

export function getApiVerifiersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVerifiersQueryKey>
  >({
    queryKey: getApiVerifiersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.verifiers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiVerifiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVerifiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVerifiersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiVerifiers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.verifiers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.verifiers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiVerifiersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiVerifiersVerifierIdQueryKey(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>,
) {
  return ['api', '/api/verifiers/:verifierId', args] as const
}

export function getApiVerifiersVerifierIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiVerifiersVerifierIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.verifiers[':verifierId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiVerifiersVerifierId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.verifiers)[':verifierId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiVerifiersVerifierIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutApiVerifiersVerifierId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiVerifiersVerifierIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiVerifiersVerifierId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiVerifiersVerifierIdMutationOptions<
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

export function createPatchApiVerifiersVerifierId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiVerifiersVerifierIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLinesQueryKey() {
  return ['lines', '/lines'] as const
}

export function getLinesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinesQueryKey>
  >({
    queryKey: getLinesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lines.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLines<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lines.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLinesLineServicesQueryKey(
  args: InferRequestType<(typeof client.lines)[':line']['services']['$get']>,
) {
  return ['lines', '/lines/:line/services', args] as const
}

export function getLinesLineServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lines)[':line']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLinesLineServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lines[':line'].services.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLinesLineServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lines)[':line']['services']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lines)[':line']['services']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinesLineServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNewApikeyQueryKey() {
  return ['new', '/new/apikey'] as const
}

export function getNewApikeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNewApikeyQueryKey>
  >({
    queryKey: getNewApikeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.new.apikey.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNewApikey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.apikey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewApikeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNewApikeyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNewGroupQueryKey() {
  return ['new', '/new/group'] as const
}

export function getNewGroupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNewGroupQueryKey>
  >({
    queryKey: getNewGroupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.new.group.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNewGroup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.group.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNewGroupQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNewServiceQueryKey() {
  return ['new', '/new/service'] as const
}

export function getNewServiceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNewServiceQueryKey>
  >({
    queryKey: getNewServiceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.new.service.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNewService<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.new.service.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewServiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNewServiceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
