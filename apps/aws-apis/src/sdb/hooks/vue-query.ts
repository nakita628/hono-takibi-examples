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

export function getActionBatchDeleteAttributesKey() {
  return ['#Action=BatchDeleteAttributes'] as const
}

export function getActionBatchPutAttributesKey() {
  return ['#Action=BatchPutAttributes'] as const
}

export function getActionCreateDomainKey() {
  return ['#Action=CreateDomain'] as const
}

export function getActionDeleteAttributesKey() {
  return ['#Action=DeleteAttributes'] as const
}

export function getActionDeleteDomainKey() {
  return ['#Action=DeleteDomain'] as const
}

export function getActionDomainMetadataKey() {
  return ['#Action=DomainMetadata'] as const
}

export function getActionGetAttributesKey() {
  return ['#Action=GetAttributes'] as const
}

export function getActionListDomainsKey() {
  return ['#Action=ListDomains'] as const
}

export function getActionPutAttributesKey() {
  return ['#Action=PutAttributes'] as const
}

export function getActionSelectKey() {
  return ['#Action=Select'] as const
}

export function getActionBatchDeleteAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteAttributes']['$get']>
  >,
) {
  return ['#Action=BatchDeleteAttributes', '/#Action=BatchDeleteAttributes', toValue(args)] as const
}

export function getActionBatchDeleteAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteAttributes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBatchDeleteAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BatchDeleteAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionBatchDeleteAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchDeleteAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=BatchDeleteAttributes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchDeleteAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchDeleteAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBatchDeleteAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=BatchDeleteAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchDeleteAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBatchDeleteAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BatchDeleteAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionBatchDeleteAttributesMutationKey() {
  return ['#Action=BatchDeleteAttributes', '/#Action=BatchDeleteAttributes', 'POST'] as const
}

export function getPostActionBatchDeleteAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchDeleteAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchDeleteAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchDeleteAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BatchDeleteAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=BatchDeleteAttributes'].$post(args, options))
    },
  })
}

export function usePostActionBatchDeleteAttributes<
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
                Awaited<ReturnType<(typeof client)['#Action=BatchDeleteAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=BatchDeleteAttributes']['$post']>,
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
  const mutationDefaults = getPostActionBatchDeleteAttributesMutationOptions<
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

export function getActionBatchPutAttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BatchPutAttributes']['$get']>>,
) {
  return ['#Action=BatchPutAttributes', '/#Action=BatchPutAttributes', toValue(args)] as const
}

export function getActionBatchPutAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BatchPutAttributes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBatchPutAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BatchPutAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionBatchPutAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=BatchPutAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BatchPutAttributes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchPutAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchPutAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBatchPutAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=BatchPutAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBatchPutAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBatchPutAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BatchPutAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionBatchPutAttributesMutationKey() {
  return ['#Action=BatchPutAttributes', '/#Action=BatchPutAttributes', 'POST'] as const
}

export function getPostActionBatchPutAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BatchPutAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BatchPutAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBatchPutAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=BatchPutAttributes']['$post']>,
    ) {
      return parseResponse(client['#Action=BatchPutAttributes'].$post(args, options))
    },
  })
}

export function usePostActionBatchPutAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BatchPutAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=BatchPutAttributes']['$post']>,
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
  const mutationDefaults = getPostActionBatchPutAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateDomainQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>>,
) {
  return ['#Action=CreateDomain', '/#Action=CreateDomain', toValue(args)] as const
}

export function getActionCreateDomainQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDomain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDomainQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDomain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionCreateDomainMutationKey() {
  return ['#Action=CreateDomain', '/#Action=CreateDomain', 'POST'] as const
}

export function getPostActionCreateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>) {
      return parseResponse(client['#Action=CreateDomain'].$post(args, options))
    },
  })
}

export function usePostActionCreateDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>,
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
  const mutationDefaults = getPostActionCreateDomainMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteAttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAttributes']['$get']>>,
) {
  return ['#Action=DeleteAttributes', '/#Action=DeleteAttributes', toValue(args)] as const
}

export function getActionDeleteAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAttributes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAttributes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteAttributesMutationKey() {
  return ['#Action=DeleteAttributes', '/#Action=DeleteAttributes', 'POST'] as const
}

export function getPostActionDeleteAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAttributesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteAttributes']['$post']>) {
      return parseResponse(client['#Action=DeleteAttributes'].$post(args, options))
    },
  })
}

export function usePostActionDeleteAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteAttributes']['$post']>,
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
  const mutationDefaults = getPostActionDeleteAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteDomainQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>>,
) {
  return ['#Action=DeleteDomain', '/#Action=DeleteDomain', toValue(args)] as const
}

export function getActionDeleteDomainQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDomain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDomainQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDomain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDeleteDomainMutationKey() {
  return ['#Action=DeleteDomain', '/#Action=DeleteDomain', 'POST'] as const
}

export function getPostActionDeleteDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>) {
      return parseResponse(client['#Action=DeleteDomain'].$post(args, options))
    },
  })
}

export function usePostActionDeleteDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>,
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
  const mutationDefaults = getPostActionDeleteDomainMutationOptions<TError, TOnMutateResult>(
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

export function getActionDomainMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DomainMetadata']['$get']>>,
) {
  return ['#Action=DomainMetadata', '/#Action=DomainMetadata', toValue(args)] as const
}

export function getActionDomainMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DomainMetadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDomainMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DomainMetadata'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDomainMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DomainMetadata']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DomainMetadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DomainMetadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DomainMetadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDomainMetadataQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DomainMetadata']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDomainMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDomainMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DomainMetadata'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionDomainMetadataMutationKey() {
  return ['#Action=DomainMetadata', '/#Action=DomainMetadata', 'POST'] as const
}

export function getPostActionDomainMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DomainMetadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DomainMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDomainMetadataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DomainMetadata']['$post']>) {
      return parseResponse(client['#Action=DomainMetadata'].$post(args, options))
    },
  })
}

export function usePostActionDomainMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DomainMetadata']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DomainMetadata']['$post']>,
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
  const mutationDefaults = getPostActionDomainMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getActionGetAttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAttributes']['$get']>>,
) {
  return ['#Action=GetAttributes', '/#Action=GetAttributes', toValue(args)] as const
}

export function getActionGetAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAttributes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionGetAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=GetAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionGetAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=GetAttributes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionGetAttributesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetAttributes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionGetAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionGetAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=GetAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionGetAttributesMutationKey() {
  return ['#Action=GetAttributes', '/#Action=GetAttributes', 'POST'] as const
}

export function getPostActionGetAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=GetAttributes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=GetAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGetAttributesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=GetAttributes']['$post']>) {
      return parseResponse(client['#Action=GetAttributes'].$post(args, options))
    },
  })
}

export function usePostActionGetAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=GetAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=GetAttributes']['$post']>,
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
  const mutationDefaults = getPostActionGetAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getActionListDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListDomains']['$get']>>,
) {
  return ['#Action=ListDomains', '/#Action=ListDomains', toValue(args)] as const
}

export function getActionListDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListDomains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListDomains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDomains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListDomains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListDomains']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListDomains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListDomainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDomains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListDomains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionListDomainsMutationKey() {
  return ['#Action=ListDomains', '/#Action=ListDomains', 'POST'] as const
}

export function getPostActionListDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDomains']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListDomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListDomainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListDomains']['$post']>) {
      return parseResponse(client['#Action=ListDomains'].$post(args, options))
    },
  })
}

export function usePostActionListDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListDomains']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=ListDomains']['$post']>,
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
  const mutationDefaults = getPostActionListDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getActionPutAttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutAttributes']['$get']>>,
) {
  return ['#Action=PutAttributes', '/#Action=PutAttributes', toValue(args)] as const
}

export function getActionPutAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutAttributes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionPutAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=PutAttributes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionPutAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutAttributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=PutAttributes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutAttributes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionPutAttributesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutAttributes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionPutAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionPutAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=PutAttributes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionPutAttributesMutationKey() {
  return ['#Action=PutAttributes', '/#Action=PutAttributes', 'POST'] as const
}

export function getPostActionPutAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=PutAttributes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=PutAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionPutAttributesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=PutAttributes']['$post']>) {
      return parseResponse(client['#Action=PutAttributes'].$post(args, options))
    },
  })
}

export function usePostActionPutAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=PutAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=PutAttributes']['$post']>,
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
  const mutationDefaults = getPostActionPutAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getActionSelectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=Select']['$get']>>,
) {
  return ['#Action=Select', '/#Action=Select', toValue(args)] as const
}

export function getActionSelectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=Select']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionSelectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=Select'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionSelect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Select']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=Select']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Select']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Select']['$get']>>>
            >
          >,
          ReturnType<typeof getActionSelectQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Select']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionSelectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionSelectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=Select'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostActionSelectMutationKey() {
  return ['#Action=Select', '/#Action=Select', 'POST'] as const
}

export function getPostActionSelectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Select']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=Select']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionSelectMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=Select']['$post']>) {
      return parseResponse(client['#Action=Select'].$post(args, options))
    },
  })
}

export function usePostActionSelect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=Select']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=Select']['$post']>,
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
  const mutationDefaults = getPostActionSelectMutationOptions<TError, TOnMutateResult>(
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
