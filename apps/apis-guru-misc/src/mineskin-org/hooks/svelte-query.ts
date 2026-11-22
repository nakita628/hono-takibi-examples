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

export function getGenerateKey() {
  return ['generate'] as const
}

export function getGetKey() {
  return ['get'] as const
}

export function getValidateKey() {
  return ['validate'] as const
}

export function getPostGenerateUploadMutationKey() {
  return ['generate', '/generate/upload', 'POST'] as const
}

export function getPostGenerateUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.upload.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.generate.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.generate.upload.$post>) {
      return parseResponse(client.generate.upload.$post(args, options))
    },
  })
}

export function createPostGenerateUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.upload.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.generate.upload.$post>,
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
    const mutationDefaults = getPostGenerateUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGenerateUrlMutationKey() {
  return ['generate', '/generate/url', 'POST'] as const
}

export function getPostGenerateUrlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.url.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.generate.url.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateUrlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.generate.url.$post>) {
      return parseResponse(client.generate.url.$post(args, options))
    },
  })
}

export function createPostGenerateUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.url.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.generate.url.$post>,
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
    const mutationDefaults = getPostGenerateUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGenerateUserMutationKey() {
  return ['generate', '/generate/user', 'POST'] as const
}

export function getPostGenerateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.user.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.generate.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.generate.user.$post>) {
      return parseResponse(client.generate.user.$post(args, options))
    },
  })
}

export function createPostGenerateUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.user.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.generate.user.$post>,
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
    const mutationDefaults = getPostGenerateUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGetDelayQueryKey(args: InferRequestType<typeof client.get.delay.$get>) {
  const { header: _, ...keyArgs } = args
  return ['get', '/get/delay', keyArgs] as const
}

export function getGetDelayQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.get.delay.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetDelayQueryKey>
  >({
    queryKey: getGetDelayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.get.delay.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetDelay<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.get.delay.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetDelayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetDelayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGetIdIdQueryKey(args: InferRequestType<(typeof client.get.id)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['get', '/get/id/:id', keyArgs] as const
}

export function getGetIdIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.get.id)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetIdIdQueryKey>
  >({
    queryKey: getGetIdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.get.id[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetIdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.get.id)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetIdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetIdIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGetListPageQueryKey(
  args: InferRequestType<(typeof client.get.list)[':page']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['get', '/get/list/:page', keyArgs] as const
}

export function getGetListPageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.get.list)[':page']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetListPageQueryKey>
  >({
    queryKey: getGetListPageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.get.list[':page'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetListPage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.get.list)[':page']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetListPageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetListPageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGetUuidUuidQueryKey(
  args: InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['get', '/get/uuid/:uuid', keyArgs] as const
}

export function getGetUuidUuidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetUuidUuidQueryKey>
  >({
    queryKey: getGetUuidUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.get.uuid[':uuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetUuidUuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetUuidUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetUuidUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getValidateNameNameQueryKey(
  args: InferRequestType<(typeof client.validate.name)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['validate', '/validate/name/:name', keyArgs] as const
}

export function getValidateNameNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.validate.name)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValidateNameNameQueryKey>
  >({
    queryKey: getValidateNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.validate.name[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValidateNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.validate.name)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getValidateNameNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getValidateNameNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getValidateUuidUuidQueryKey(
  args: InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['validate', '/validate/uuid/:uuid', keyArgs] as const
}

export function getValidateUuidUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValidateUuidUuidQueryKey>
  >({
    queryKey: getValidateUuidUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.validate.uuid[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createValidateUuidUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getValidateUuidUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getValidateUuidUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
