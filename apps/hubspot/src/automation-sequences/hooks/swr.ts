import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAutomationKey() {
  return ['automation'] as const
}

export function getGetAutomationSequences202609Key(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>,
) {
  return ['automation', '/automation/sequences/2026-09', args] as const
}

export function useGetAutomationSequences202609<TError = unknown>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation.sequences['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationSequences202609<TError = unknown>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation.sequences)['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.automation.sequences['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationSequences202609EnrollmentsKey() {
  return ['automation', '/automation/sequences/2026-09/enrollments', 'POST'] as const
}

export function usePostAutomationSequences202609Enrollments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.automation.sequences)['2026-09']['enrollments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationSequences202609EnrollmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.automation.sequences)['2026-09']['enrollments']['$post']
          >
        },
      ) =>
        parseResponse(client.automation.sequences['2026-09'].enrollments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationSequences202609EnrollmentsContactContactIdKey(
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

export function useGetAutomationSequences202609EnrollmentsContactContactId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609EnrollmentsContactContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'].enrollments.contact[':contactId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationSequences202609EnrollmentsContactContactId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['enrollments']['contact'][':contactId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609EnrollmentsContactContactIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'].enrollments.contact[':contactId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationSequences202609ServiceaccountsEnrollmentsKey() {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/enrollments',
    'POST',
  ] as const
}

export function usePostAutomationSequences202609ServiceaccountsEnrollments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['enrollments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationSequences202609ServiceaccountsEnrollmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['enrollments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.enrollments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationSequences202609ServiceaccountsSequencesKey(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
  >,
) {
  return ['automation', '/automation/sequences/2026-09/serviceaccounts/sequences', args] as const
}

export function useGetAutomationSequences202609ServiceaccountsSequences<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609ServiceaccountsSequencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationSequences202609ServiceaccountsSequences<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609ServiceaccountsSequencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationSequences202609ServiceaccountsSequencesKey() {
  return ['automation', '/automation/sequences/2026-09/serviceaccounts/sequences', 'POST'] as const
}

export function usePostAutomationSequences202609ServiceaccountsSequences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationSequences202609ServiceaccountsSequencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences']['$post']
          >
        },
      ) =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationSequences202609ServiceaccountsSequencesSequenceIdKey(
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

export function useGetAutomationSequences202609ServiceaccountsSequencesSequenceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609ServiceaccountsSequencesSequenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationSequences202609ServiceaccountsSequencesSequenceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609ServiceaccountsSequencesSequenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationSequences202609ServiceaccountsSequencesSequenceIdKey() {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId',
    'PUT',
  ] as const
}

export function usePutAutomationSequences202609ServiceaccountsSequencesSequenceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAutomationSequences202609ServiceaccountsSequencesSequenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationSequences202609ServiceaccountsSequencesSequenceIdKey() {
  return [
    'automation',
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId',
    'DELETE',
  ] as const
}

export function useDeleteAutomationSequences202609ServiceaccountsSequencesSequenceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAutomationSequences202609ServiceaccountsSequencesSequenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences[':sequenceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceKey(
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

export function useGetAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformance<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences[
            ':sequenceId'
          ].performance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformance<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.sequences)['2026-09']['serviceaccounts']['sequences'][':sequenceId']['performance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'].serviceaccounts.sequences[
            ':sequenceId'
          ].performance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationSequences202609SequenceIdKey(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>,
) {
  return ['automation', '/automation/sequences/2026-09/:sequenceId', args] as const
}

export function useGetAutomationSequences202609SequenceId<TError = unknown>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609SequenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'][':sequenceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationSequences202609SequenceId<TError = unknown>(
  args: InferRequestType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAutomationSequences202609SequenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.automation.sequences)['2026-09'][':sequenceId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.automation.sequences['2026-09'][':sequenceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
