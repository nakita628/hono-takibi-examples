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

export function getV2betaKey() {
  return ['v2beta'] as const
}

export function getV2betaCaseClassificationsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta)['caseClassifications:search']['$get']>
  >,
) {
  return ['v2beta', '/v2beta/caseClassifications:search', toValue(args)] as const
}

export function getV2betaCaseClassificationsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta)['caseClassifications:search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaCaseClassificationsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta['caseClassifications:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaCaseClassificationsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)['caseClassifications:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta)['caseClassifications:search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)['caseClassifications:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)['caseClassifications:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2betaCaseClassificationsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta)['caseClassifications:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaCaseClassificationsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaCaseClassificationsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta['caseClassifications:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2betaCasesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)['cases:search']['$get']>>,
) {
  return ['v2beta', '/v2beta/cases:search', toValue(args)] as const
}

export function getV2betaCasesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)['cases:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaCasesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta['cases:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaCasesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)['cases:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)['cases:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)['cases:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)['cases:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2betaCasesSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)['cases:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaCasesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaCasesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta['cases:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2betaNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['$get']>>,
) {
  return ['v2beta', '/v2beta/:name', toValue(args)] as const
}

export function getV2betaNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2betaNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2betaNameMutationKey() {
  return ['v2beta', '/v2beta/:name', 'PATCH'] as const
}

export function getPatchV2betaNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name']['$patch']>) {
      return parseResponse(client.v2beta[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2beta)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV2betaNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2betaNameCloseMutationKey() {
  return ['v2beta', '/v2beta/:name:close', 'POST'] as const
}

export function getPostV2betaNameCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:close']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name:close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaNameCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name:close']['$post']>) {
      return parseResponse(client.v2beta[':name:close'].$post(args, options))
    },
  })
}

export function usePostV2betaNameClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name:close']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2beta)[':name:close']['$post']>,
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
  const mutationDefaults = getPostV2betaNameCloseMutationOptions<TError, TOnMutateResult>(
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

export function getV2betaNameDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name:download']['$get']>>,
) {
  return ['v2beta', '/v2beta/:name:download', toValue(args)] as const
}

export function getV2betaNameDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name:download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaNameDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta[':name:download'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaNameDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name:download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name:download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name:download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2betaNameDownloadQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaNameDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaNameDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta[':name:download'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2betaNameEscalateMutationKey() {
  return ['v2beta', '/v2beta/:name:escalate', 'POST'] as const
}

export function getPostV2betaNameEscalateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:escalate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name:escalate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaNameEscalateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name:escalate']['$post']>) {
      return parseResponse(client.v2beta[':name:escalate'].$post(args, options))
    },
  })
}

export function usePostV2betaNameEscalate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name:escalate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2beta)[':name:escalate']['$post']>,
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
  const mutationDefaults = getPostV2betaNameEscalateMutationOptions<TError, TOnMutateResult>(
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

export function getV2betaParentAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$get']>
  >,
) {
  return ['v2beta', '/v2beta/:parent/attachments', toValue(args)] as const
}

export function getV2betaParentAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaParentAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta[':parent'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaParentAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2betaParentAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaParentAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaParentAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta[':parent'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2betaParentAttachmentsMutationKey() {
  return ['v2beta', '/v2beta/:parent/attachments', 'POST'] as const
}

export function getPostV2betaParentAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaParentAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$post']>,
    ) {
      return parseResponse(client.v2beta[':parent'].attachments.$post(args, options))
    },
  })
}

export function usePostV2betaParentAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['attachments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$post']>,
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
  const mutationDefaults = getPostV2betaParentAttachmentsMutationOptions<TError, TOnMutateResult>(
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

export function getV2betaParentCasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':parent']['cases']['$get']>>,
) {
  return ['v2beta', '/v2beta/:parent/cases', toValue(args)] as const
}

export function getV2betaParentCasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':parent']['cases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaParentCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta[':parent'].cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaParentCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':parent']['cases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':parent']['cases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['cases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['cases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2betaParentCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['cases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaParentCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaParentCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta[':parent'].cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2betaParentCasesMutationKey() {
  return ['v2beta', '/v2beta/:parent/cases', 'POST'] as const
}

export function getPostV2betaParentCasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['cases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':parent']['cases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaParentCasesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':parent']['cases']['$post']>) {
      return parseResponse(client.v2beta[':parent'].cases.$post(args, options))
    },
  })
}

export function usePostV2betaParentCases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['cases']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2beta)[':parent']['cases']['$post']>,
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
  const mutationDefaults = getPostV2betaParentCasesMutationOptions<TError, TOnMutateResult>(
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

export function getV2betaParentCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':parent']['comments']['$get']>>,
) {
  return ['v2beta', '/v2beta/:parent/comments', toValue(args)] as const
}

export function getV2betaParentCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':parent']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaParentCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta[':parent'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaParentComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':parent']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2betaParentCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaParentCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaParentCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta[':parent'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2betaParentCommentsMutationKey() {
  return ['v2beta', '/v2beta/:parent/comments', 'POST'] as const
}

export function getPostV2betaParentCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':parent']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaParentCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta)[':parent']['comments']['$post']>,
    ) {
      return parseResponse(client.v2beta[':parent'].comments.$post(args, options))
    },
  })
}

export function usePostV2betaParentComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2beta)[':parent']['comments']['$post']>,
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
  const mutationDefaults = getPostV2betaParentCommentsMutationOptions<TError, TOnMutateResult>(
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
