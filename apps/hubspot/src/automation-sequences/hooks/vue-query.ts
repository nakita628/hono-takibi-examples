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

export function getAutomationKey() {
  return ['automation'] as const
}

export function getAutomationSequences202609QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>>,
) {
  return ['automation', '/automation/sequences/2026-09', toValue(args)] as const
}

export function getAutomationSequences202609QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationSequences202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.sequences['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAutomationSequences202609QueryKey>
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
          Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationSequences202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.sequences['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.automation.sequences)['2026-09']['enrollments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automation.sequences)['2026-09']['enrollments']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/sequences/2026-09/enrollments/contact/:contactId',
    toValue(args),
  ] as const
}

export function getAutomationSequences202609EnrollmentsContactContactIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationSequences202609EnrollmentsContactContactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.sequences['2026-09'].enrollments.contact[':contactId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
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
                    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
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
                    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationSequences202609EnrollmentsContactContactIdQueryKey>
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
              (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609EnrollmentsContactContactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAutomationSequences202609EnrollmentsContactContactIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.sequences['2026-09'].enrollments.contact[':contactId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences',
    toValue(args),
  ] as const
}

export function getAutomationSequences202609ServiceaccountsSequencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationSequences202609ServiceaccountsSequencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
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
                    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
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
                    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesQueryKey>
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
              (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationSequences202609ServiceaccountsSequencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId',
    toValue(args),
  ] as const
}

export function getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
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
                    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
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
                    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey>
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
              (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAutomationSequences202609ServiceaccountsSequencesSequenceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId/performance',
    toValue(args),
  ] as const
}

export function getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.sequences['2026-09'].serviceaccounts.sequences[
          ':sequenceId'
        ].performance.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
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
                    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
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
                    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences[
            ':sequenceId'
          ].performance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAutomationSequences202609SequenceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
  >,
) {
  return ['automation', '/automation/sequences/2026-09/:sequenceId', toValue(args)] as const
}

export function getAutomationSequences202609SequenceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationSequences202609SequenceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.sequences['2026-09'][':sequenceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAutomationSequences202609SequenceIdQueryKey>
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
            ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationSequences202609SequenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationSequences202609SequenceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.sequences['2026-09'][':sequenceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
