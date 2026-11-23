import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getCrmObjects202609FeedbackSubmissionsQueryKey(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>,
) {
  return ['crm', '/crm/objects/2026-09/feedback_submissions', args] as const
}

export function getCrmObjects202609FeedbackSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609FeedbackSubmissionsQueryKey>
  >({
    queryKey: getCrmObjects202609FeedbackSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjects202609FeedbackSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609FeedbackSubmissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609FeedbackSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609FeedbackSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609FeedbackSubmissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609FeedbackSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCrmObjects202609FeedbackSubmissionsMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['$post']
      >,
    ) {
      return parseResponse(client.crm.objects['2026-09'].feedback_submissions.$post(args, options))
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.objects)['2026-09']['feedback_submissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsMutationOptions<
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

export function getPostCrmObjects202609FeedbackSubmissionsBatchArchiveMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/batch/archive', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions.batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissionsBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['archive']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsBatchArchiveMutationOptions<
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

export function getPostCrmObjects202609FeedbackSubmissionsBatchCreateMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/batch/create', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions.batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissionsBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['create']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsBatchCreateMutationOptions<
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

export function getPostCrmObjects202609FeedbackSubmissionsBatchReadMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/batch/read', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions.batch.read.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissionsBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['read']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsBatchReadMutationOptions<
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

export function getPostCrmObjects202609FeedbackSubmissionsBatchUpdateMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/batch/update', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions.batch.update.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissionsBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['update']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsBatchUpdateMutationOptions<
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

export function getPostCrmObjects202609FeedbackSubmissionsBatchUpsertMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/batch/upsert', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsBatchUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['upsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsBatchUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['upsert']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions.batch.upsert.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissionsBatchUpsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['upsert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions']['batch']['upsert']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsBatchUpsertMutationOptions<
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

export function getPostCrmObjects202609FeedbackSubmissionsGdprDeleteMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/gdpr-delete', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsGdprDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['feedback_submissions']['gdpr-delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions']['gdpr-delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsGdprDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['gdpr-delete']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions['gdpr-delete'].$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissionsGdprDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09']['feedback_submissions']['gdpr-delete']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions']['gdpr-delete']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsGdprDeleteMutationOptions<
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

export function getPostCrmObjects202609FeedbackSubmissionsMergeMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/merge', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions']['merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions']['merge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['merge']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions.merge.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissionsMerge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions']['merge']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions']['merge']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsMergeMutationOptions<
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

export function getPostCrmObjects202609FeedbackSubmissionsSearchMutationKey() {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/search', 'POST'] as const
}

export function getPostCrmObjects202609FeedbackSubmissionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions']['search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmObjects202609FeedbackSubmissionsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions']['search']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions.search.$post(args, options),
      )
    },
  })
}

export function usePostCrmObjects202609FeedbackSubmissionsSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions']['search']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions']['search']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmObjects202609FeedbackSubmissionsSearchMutationOptions<
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

export function getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdQueryKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
  >,
) {
  return ['crm', '/crm/objects/2026-09/feedback_submissions/:feedbackSubmissionId', args] as const
}

export function getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdQueryKey>
  >({
    queryKey: getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions[':feedbackSubmissionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmObjects202609FeedbackSubmissionsFeedbackSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609FeedbackSubmissionsFeedbackSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/feedback_submissions/:feedbackSubmissionId',
    'DELETE',
  ] as const
}

export function getDeleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions[':feedbackSubmissionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdMutationOptions<
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

export function getPatchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/feedback_submissions/:feedbackSubmissionId',
    'PATCH',
  ] as const
}

export function getPatchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions[':feedbackSubmissionId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdMutationOptions<
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

export function getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeQueryKey(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
  >,
) {
  return [
    'crm',
    '/crm/objects/2026-09/feedback_submissions/:feedbackSubmissionId/associations/:toObjectType',
    args,
  ] as const
}

export function getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeQueryKey
    >
  >({
    queryKey:
      getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.objects['2026-09'].feedback_submissions[':feedbackSubmissionId'].associations[
          ':toObjectType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09']['feedback_submissions'][':feedbackSubmissionId']['associations'][':toObjectType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:fromObjectType/:fromObjectId/associations/default/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':fromObjectType'][':fromObjectId'].associations.default[
          ':toObjectType'
        ][':toObjectId'].$put(args, options),
      )
    },
  })
}

export function usePutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':fromObjectType'][':fromObjectId']['associations']['default'][':toObjectType'][':toObjectId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdMutationOptions<
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

export function getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'PUT',
  ] as const
}

export function getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
          ':toObjectId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
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

export function getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey() {
  return [
    'crm',
    '/crm/objects/2026-09/:objectType/:objectId/associations/:toObjectType/:toObjectId',
    'DELETE',
  ] as const
}

export function getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.objects['2026-09'][':objectType'][':objectId'].associations[':toObjectType'][
          ':toObjectId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.objects)['2026-09'][':objectType'][':objectId']['associations'][':toObjectType'][':toObjectId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdMutationOptions<
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
