import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOperationCancelJobActionCancelJobKey() {
  return ['#Operation=CancelJob&Action=CancelJob'] as const
}

export function getOperationCreateJobActionCreateJobKey() {
  return ['#Operation=CreateJob&Action=CreateJob'] as const
}

export function getOperationGetShippingLabelActionGetShippingLabelKey() {
  return ['#Operation=GetShippingLabel&Action=GetShippingLabel'] as const
}

export function getOperationGetStatusActionGetStatusKey() {
  return ['#Operation=GetStatus&Action=GetStatus'] as const
}

export function getOperationListJobsActionListJobsKey() {
  return ['#Operation=ListJobs&Action=ListJobs'] as const
}

export function getOperationUpdateJobActionUpdateJobKey() {
  return ['#Operation=UpdateJob&Action=UpdateJob'] as const
}

export function getGetOperationCancelJobActionCancelJobKey(
  args: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>,
) {
  return [
    '#Operation=CancelJob&Action=CancelJob',
    '/#Operation=CancelJob&Action=CancelJob',
    args,
  ] as const
}

export function useGetOperationCancelJobActionCancelJob<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>>
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
        ? getGetOperationCancelJobActionCancelJobKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=CancelJob&Action=CancelJob'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationCancelJobActionCancelJob<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>>
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
        ? getGetOperationCancelJobActionCancelJobKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=CancelJob&Action=CancelJob'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOperationCancelJobActionCancelJobKey() {
  return [
    '#Operation=CancelJob&Action=CancelJob',
    '/#Operation=CancelJob&Action=CancelJob',
    'POST',
  ] as const
}

export function usePostOperationCancelJobActionCancelJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationCancelJobActionCancelJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>
        },
      ) => parseResponse(client['#Operation=CancelJob&Action=CancelJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOperationCreateJobActionCreateJobKey(
  args: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>,
) {
  return [
    '#Operation=CreateJob&Action=CreateJob',
    '/#Operation=CreateJob&Action=CreateJob',
    args,
  ] as const
}

export function useGetOperationCreateJobActionCreateJob<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>>
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
        ? getGetOperationCreateJobActionCreateJobKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=CreateJob&Action=CreateJob'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationCreateJobActionCreateJob<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>>
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
        ? getGetOperationCreateJobActionCreateJobKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=CreateJob&Action=CreateJob'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOperationCreateJobActionCreateJobKey() {
  return [
    '#Operation=CreateJob&Action=CreateJob',
    '/#Operation=CreateJob&Action=CreateJob',
    'POST',
  ] as const
}

export function usePostOperationCreateJobActionCreateJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationCreateJobActionCreateJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>
        },
      ) => parseResponse(client['#Operation=CreateJob&Action=CreateJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOperationGetShippingLabelActionGetShippingLabelKey(
  args: InferRequestType<
    (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
  >,
) {
  return [
    '#Operation=GetShippingLabel&Action=GetShippingLabel',
    '/#Operation=GetShippingLabel&Action=GetShippingLabel',
    args,
  ] as const
}

export function useGetOperationGetShippingLabelActionGetShippingLabel<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
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
        ? getGetOperationGetShippingLabelActionGetShippingLabelKey(args)
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
                (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
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
          client['#Operation=GetShippingLabel&Action=GetShippingLabel'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationGetShippingLabelActionGetShippingLabel<TError = unknown>(
  args: InferRequestType<
    (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
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
        ? getGetOperationGetShippingLabelActionGetShippingLabelKey(args)
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
                (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
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
          client['#Operation=GetShippingLabel&Action=GetShippingLabel'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOperationGetShippingLabelActionGetShippingLabelKey() {
  return [
    '#Operation=GetShippingLabel&Action=GetShippingLabel',
    '/#Operation=GetShippingLabel&Action=GetShippingLabel',
    'POST',
  ] as const
}

export function usePostOperationGetShippingLabelActionGetShippingLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationGetShippingLabelActionGetShippingLabelKey()
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
            (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#Operation=GetShippingLabel&Action=GetShippingLabel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOperationGetStatusActionGetStatusKey(
  args: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>,
) {
  return [
    '#Operation=GetStatus&Action=GetStatus',
    '/#Operation=GetStatus&Action=GetStatus',
    args,
  ] as const
}

export function useGetOperationGetStatusActionGetStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>>
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
        ? getGetOperationGetStatusActionGetStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=GetStatus&Action=GetStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationGetStatusActionGetStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>>
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
        ? getGetOperationGetStatusActionGetStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=GetStatus&Action=GetStatus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOperationGetStatusActionGetStatusKey() {
  return [
    '#Operation=GetStatus&Action=GetStatus',
    '/#Operation=GetStatus&Action=GetStatus',
    'POST',
  ] as const
}

export function usePostOperationGetStatusActionGetStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationGetStatusActionGetStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>
        },
      ) => parseResponse(client['#Operation=GetStatus&Action=GetStatus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOperationListJobsActionListJobsKey(
  args: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>,
) {
  return [
    '#Operation=ListJobs&Action=ListJobs',
    '/#Operation=ListJobs&Action=ListJobs',
    args,
  ] as const
}

export function useGetOperationListJobsActionListJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>>
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
        ? getGetOperationListJobsActionListJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=ListJobs&Action=ListJobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationListJobsActionListJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>>
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
        ? getGetOperationListJobsActionListJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=ListJobs&Action=ListJobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOperationListJobsActionListJobsKey() {
  return [
    '#Operation=ListJobs&Action=ListJobs',
    '/#Operation=ListJobs&Action=ListJobs',
    'POST',
  ] as const
}

export function usePostOperationListJobsActionListJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationListJobsActionListJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>
        },
      ) => parseResponse(client['#Operation=ListJobs&Action=ListJobs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOperationUpdateJobActionUpdateJobKey(
  args: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>,
) {
  return [
    '#Operation=UpdateJob&Action=UpdateJob',
    '/#Operation=UpdateJob&Action=UpdateJob',
    args,
  ] as const
}

export function useGetOperationUpdateJobActionUpdateJob<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>>
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
        ? getGetOperationUpdateJobActionUpdateJobKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=UpdateJob&Action=UpdateJob'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationUpdateJobActionUpdateJob<TError = unknown>(
  args: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>>
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
        ? getGetOperationUpdateJobActionUpdateJobKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Operation=UpdateJob&Action=UpdateJob'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOperationUpdateJobActionUpdateJobKey() {
  return [
    '#Operation=UpdateJob&Action=UpdateJob',
    '/#Operation=UpdateJob&Action=UpdateJob',
    'POST',
  ] as const
}

export function usePostOperationUpdateJobActionUpdateJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOperationUpdateJobActionUpdateJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>
        },
      ) => parseResponse(client['#Operation=UpdateJob&Action=UpdateJob'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
