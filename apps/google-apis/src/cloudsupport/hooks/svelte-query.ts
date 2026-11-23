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

export function getV2betaKey() {
  return ['v2beta'] as const
}

export function getV2betaCaseClassificationsSearchQueryKey(
  args: InferRequestType<(typeof client.v2beta)['caseClassifications:search']['$get']>,
) {
  return ['v2beta', '/v2beta/caseClassifications:search', args] as const
}

export function getV2betaCaseClassificationsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)['caseClassifications:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)['caseClassifications:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2betaCaseClassificationsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta['caseClassifications:search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2betaCaseClassificationsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)['caseClassifications:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2beta)['caseClassifications:search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2betaCaseClassificationsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2betaCasesSearchQueryKey(
  args: InferRequestType<(typeof client.v2beta)['cases:search']['$get']>,
) {
  return ['v2beta', '/v2beta/cases:search', args] as const
}

export function getV2betaCasesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)['cases:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)['cases:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)['cases:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaCasesSearchQueryKey>
  >({
    queryKey: getV2betaCasesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta['cases:search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2betaCasesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)['cases:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2beta)['cases:search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)['cases:search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaCasesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2betaCasesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2betaNameQueryKey(
  args: InferRequestType<(typeof client.v2beta)[':name']['$get']>,
) {
  return ['v2beta', '/v2beta/:name', args] as const
}

export function getV2betaNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2beta)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaNameQueryKey>
  >({
    queryKey: getV2betaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2beta)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2betaNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchV2betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV2betaNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2betaNameClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2betaNameCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2betaNameDownloadQueryKey(
  args: InferRequestType<(typeof client.v2beta)[':name:download']['$get']>,
) {
  return ['v2beta', '/v2beta/:name:download', args] as const
}

export function getV2betaNameDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':name:download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaNameDownloadQueryKey>
  >({
    queryKey: getV2betaNameDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta[':name:download'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2betaNameDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2beta)[':name:download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta)[':name:download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2betaNameDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2betaNameDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2betaNameEscalate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2betaNameEscalateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2betaParentAttachmentsQueryKey(
  args: InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$get']>,
) {
  return ['v2beta', '/v2beta/:parent/attachments', args] as const
}

export function getV2betaParentAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2betaParentAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta[':parent'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2betaParentAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2betaParentAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2betaParentAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2betaParentAttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2betaParentCasesQueryKey(
  args: InferRequestType<(typeof client.v2beta)[':parent']['cases']['$get']>,
) {
  return ['v2beta', '/v2beta/:parent/cases', args] as const
}

export function getV2betaParentCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':parent']['cases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2betaParentCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta[':parent'].cases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2betaParentCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':parent']['cases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2beta)[':parent']['cases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2betaParentCasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2betaParentCases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2betaParentCasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2betaParentCommentsQueryKey(
  args: InferRequestType<(typeof client.v2beta)[':parent']['comments']['$get']>,
) {
  return ['v2beta', '/v2beta/:parent/comments', args] as const
}

export function getV2betaParentCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta)[':parent']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2betaParentCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta[':parent'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2betaParentComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':parent']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2beta)[':parent']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2betaParentCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2betaParentComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2betaParentCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
