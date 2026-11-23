import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAutomationKey() {
  return ['automation'] as const
}

export function getAutomationSequences202609QueryKey(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>,
) {
  return ['automation', '/automation/sequences/2026-09', args] as const
}

export function getAutomationSequences202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609QueryKey>
  >({
    queryKey: getAutomationSequences202609QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.sequences['2026-09'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomationSequences202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609QueryKey>
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
      ...getAutomationSequences202609QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationSequences202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609QueryKey>
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
      ...getAutomationSequences202609QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAutomationSequences202609EnrollmentsMutationKey() {
  return ['automation', '/automation/sequences/2026-09/enrollments', 'POST'] as const
}

export function getPostAutomationSequences202609EnrollmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automation.sequences)['2026-09']['enrollments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automation.sequences)['2026-09']['enrollments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationSequences202609EnrollmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.sequences)['2026-09']['enrollments']['$post']
      >,
    ) {
      return parseResponse(client.automation.sequences['2026-09'].enrollments.$post(args, options))
    },
  })
}

export function usePostAutomationSequences202609Enrollments<
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
                ReturnType<(typeof client.automation.sequences)['2026-09']['enrollments']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.automation.sequences)['2026-09']['enrollments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAutomationSequences202609EnrollmentsMutationOptions<
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

export function getAutomationSequences202609EnrollmentsContactContactIdQueryKey(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
  >,
) {
  return [
    'automation',
    '/automation/sequences/2026-09/enrollments/contact/:contactId',
    args,
  ] as const
}

export function getAutomationSequences202609EnrollmentsContactContactIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609EnrollmentsContactContactIdQueryKey>
  >({
    queryKey: getAutomationSequences202609EnrollmentsContactContactIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.sequences['2026-09'].enrollments.contact[':contactId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomationSequences202609EnrollmentsContactContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609EnrollmentsContactContactIdQueryKey>
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
      ...getAutomationSequences202609EnrollmentsContactContactIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationSequences202609EnrollmentsContactContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609EnrollmentsContactContactIdQueryKey>
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
      ...getAutomationSequences202609EnrollmentsContactContactIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAutomationSequences202609ServiceaccountsEnrollmentsMutationKey() {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/enrollments',
    'POST',
  ] as const
}

export function getPostAutomationSequences202609ServiceaccountsEnrollmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.sequences)['2026-09']['serviceaccounts']['enrollments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['enrollments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationSequences202609ServiceaccountsEnrollmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.sequences)['2026-09']['serviceaccounts']['enrollments']['$post']
      >,
    ) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.enrollments.$post(args, options),
      )
    },
  })
}

export function usePostAutomationSequences202609ServiceaccountsEnrollments<
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
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['enrollments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.automation.sequences)['2026-09']['serviceaccounts']['enrollments']['$post']
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
    getPostAutomationSequences202609ServiceaccountsEnrollmentsMutationOptions<
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

export function getAutomationSequences202609ServiceaccountsSequencesQueryKey(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
  >,
) {
  return ['automation', '/automation/sequences/2026-09/serviceaccounts/sequences', args] as const
}

export function getAutomationSequences202609ServiceaccountsSequencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesQueryKey>
  >({
    queryKey: getAutomationSequences202609ServiceaccountsSequencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomationSequences202609ServiceaccountsSequences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesQueryKey>
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
      ...getAutomationSequences202609ServiceaccountsSequencesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationSequences202609ServiceaccountsSequences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesQueryKey>
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
      ...getAutomationSequences202609ServiceaccountsSequencesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAutomationSequences202609ServiceaccountsSequencesMutationKey() {
  return ['automation', '/automation/sequences/2026-09/serviceaccounts/sequences', 'POST'] as const
}

export function getPostAutomationSequences202609ServiceaccountsSequencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationSequences202609ServiceaccountsSequencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$post']
      >,
    ) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences.$post(args, options),
      )
    },
  })
}

export function usePostAutomationSequences202609ServiceaccountsSequences<
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
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$post']
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
  const mutationDefaults = getPostAutomationSequences202609ServiceaccountsSequencesMutationOptions<
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

export function getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
  >,
) {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId',
    args,
  ] as const
}

export function getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey>
  >({
    queryKey: getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomationSequences202609ServiceaccountsSequencesSequenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey>
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
      ...getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationSequences202609ServiceaccountsSequencesSequenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey>
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
      ...getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAutomationSequences202609ServiceaccountsSequencesSequenceIdMutationKey() {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId',
    'PUT',
  ] as const
}

export function getPutAutomationSequences202609ServiceaccountsSequencesSequenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAutomationSequences202609ServiceaccountsSequencesSequenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$put']
      >,
    ) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAutomationSequences202609ServiceaccountsSequencesSequenceId<
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
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$put']
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
    getPutAutomationSequences202609ServiceaccountsSequencesSequenceIdMutationOptions<
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

export function getDeleteAutomationSequences202609ServiceaccountsSequencesSequenceIdMutationKey() {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId',
    'DELETE',
  ] as const
}

export function getDeleteAutomationSequences202609ServiceaccountsSequencesSequenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationSequences202609ServiceaccountsSequencesSequenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAutomationSequences202609ServiceaccountsSequencesSequenceId<
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
                    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$delete']
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
    getDeleteAutomationSequences202609ServiceaccountsSequencesSequenceIdMutationOptions<
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

export function getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryKey(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
  >,
) {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId/performance',
    args,
  ] as const
}

export function getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryKey
    >
  >({
    queryKey:
      getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences[
          ':sequenceId'
        ].performance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryKey
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
      ...getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryKey
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
      ...getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAutomationSequences202609SequenceIdQueryKey(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>,
) {
  return ['automation', '/automation/sequences/2026-09/:sequenceId', args] as const
}

export function getAutomationSequences202609SequenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609SequenceIdQueryKey>
  >({
    queryKey: getAutomationSequences202609SequenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.sequences['2026-09'][':sequenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAutomationSequences202609SequenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609SequenceIdQueryKey>
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
      ...getAutomationSequences202609SequenceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationSequences202609SequenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAutomationSequences202609SequenceIdQueryKey>
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
      ...getAutomationSequences202609SequenceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
