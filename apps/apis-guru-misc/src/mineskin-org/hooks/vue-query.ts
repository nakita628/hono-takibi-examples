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

export function usePostGenerateUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.generate.upload.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.generate.upload.$post>,
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
  const mutationDefaults = getPostGenerateUploadMutationOptions<TError, TOnMutateResult>(
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

export function usePostGenerateUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.url.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.generate.url.$post>,
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
  const mutationDefaults = getPostGenerateUrlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostGenerateUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generate.user.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.generate.user.$post>,
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
  const mutationDefaults = getPostGenerateUserMutationOptions<TError, TOnMutateResult>(
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

export function getGetDelayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get.delay.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['get', '/get/delay', keyArgs] as const
}

export function getGetDelayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get.delay.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetDelayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get.delay.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetDelay<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.get.delay.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>
          >,
          ReturnType<typeof getGetDelayQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.delay.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetDelayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetDelayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get.delay.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetIdIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.id)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['get', '/get/id/:id', keyArgs] as const
}

export function getGetIdIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.id)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetIdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get.id[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetIdId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.id)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGetIdIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.id)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetIdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetIdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get.id[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetListPageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.list)[':page']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['get', '/get/list/:page', keyArgs] as const
}

export function getGetListPageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.list)[':page']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetListPageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get.list[':page'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetListPage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.list)[':page']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
            >
          >,
          ReturnType<typeof getGetListPageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.get.list)[':page']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetListPageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetListPageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get.list[':page'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetUuidUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['get', '/get/uuid/:uuid', keyArgs] as const
}

export function getGetUuidUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetUuidUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get.uuid[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetUuidUuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.get.uuid)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
            >
          >,
          ReturnType<typeof getGetUuidUuidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.get.uuid)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetUuidUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetUuidUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.get.uuid[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValidateNameNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.validate.name)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['validate', '/validate/name/:name', keyArgs] as const
}

export function getValidateNameNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.validate.name)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValidateNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.validate.name[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValidateNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.validate.name)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getValidateNameNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.validate.name)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValidateNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValidateNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.validate.name[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValidateUuidUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['validate', '/validate/uuid/:uuid', keyArgs] as const
}

export function getValidateUuidUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValidateUuidUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.validate.uuid[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useValidateUuidUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.validate.uuid)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getValidateUuidUuidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.validate.uuid)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getValidateUuidUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValidateUuidUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.validate.uuid[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
