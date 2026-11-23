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

export function getOperationCancelJobActionCancelJobQueryKey(
  args: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>,
) {
  return [
    '#Operation=CancelJob&Action=CancelJob',
    '/#Operation=CancelJob&Action=CancelJob',
    args,
  ] as const
}

export function getOperationCancelJobActionCancelJobQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationCancelJobActionCancelJobQueryKey>
  >({
    queryKey: getOperationCancelJobActionCancelJobQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Operation=CancelJob&Action=CancelJob'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperationCancelJobActionCancelJob<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperationCancelJobActionCancelJobQueryKey>
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
      ...getOperationCancelJobActionCancelJobQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOperationCancelJobActionCancelJobMutationKey() {
  return [
    '#Operation=CancelJob&Action=CancelJob',
    '/#Operation=CancelJob&Action=CancelJob',
    'POST',
  ] as const
}

export function getPostOperationCancelJobActionCancelJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOperationCancelJobActionCancelJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>,
    ) {
      return parseResponse(client['#Operation=CancelJob&Action=CancelJob'].$post(args, options))
    },
  })
}

export function createPostOperationCancelJobActionCancelJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Operation=CancelJob&Action=CancelJob']['$post']>,
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
    const mutationDefaults = getPostOperationCancelJobActionCancelJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOperationCreateJobActionCreateJobQueryKey(
  args: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>,
) {
  return [
    '#Operation=CreateJob&Action=CreateJob',
    '/#Operation=CreateJob&Action=CreateJob',
    args,
  ] as const
}

export function getOperationCreateJobActionCreateJobQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationCreateJobActionCreateJobQueryKey>
  >({
    queryKey: getOperationCreateJobActionCreateJobQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Operation=CreateJob&Action=CreateJob'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperationCreateJobActionCreateJob<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperationCreateJobActionCreateJobQueryKey>
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
      ...getOperationCreateJobActionCreateJobQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOperationCreateJobActionCreateJobMutationKey() {
  return [
    '#Operation=CreateJob&Action=CreateJob',
    '/#Operation=CreateJob&Action=CreateJob',
    'POST',
  ] as const
}

export function getPostOperationCreateJobActionCreateJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOperationCreateJobActionCreateJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>,
    ) {
      return parseResponse(client['#Operation=CreateJob&Action=CreateJob'].$post(args, options))
    },
  })
}

export function createPostOperationCreateJobActionCreateJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Operation=CreateJob&Action=CreateJob']['$post']>,
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
    const mutationDefaults = getPostOperationCreateJobActionCreateJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOperationGetShippingLabelActionGetShippingLabelQueryKey(
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

export function getOperationGetShippingLabelActionGetShippingLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOperationGetShippingLabelActionGetShippingLabelQueryKey>
  >({
    queryKey: getOperationGetShippingLabelActionGetShippingLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Operation=GetShippingLabel&Action=GetShippingLabel'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperationGetShippingLabelActionGetShippingLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOperationGetShippingLabelActionGetShippingLabelQueryKey>
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
      ...getOperationGetShippingLabelActionGetShippingLabelQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOperationGetShippingLabelActionGetShippingLabelMutationKey() {
  return [
    '#Operation=GetShippingLabel&Action=GetShippingLabel',
    '/#Operation=GetShippingLabel&Action=GetShippingLabel',
    'POST',
  ] as const
}

export function getPostOperationGetShippingLabelActionGetShippingLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOperationGetShippingLabelActionGetShippingLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#Operation=GetShippingLabel&Action=GetShippingLabel'].$post(args, options),
      )
    },
  })
}

export function createPostOperationGetShippingLabelActionGetShippingLabel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#Operation=GetShippingLabel&Action=GetShippingLabel']['$post']
        >,
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
    const mutationDefaults = getPostOperationGetShippingLabelActionGetShippingLabelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOperationGetStatusActionGetStatusQueryKey(
  args: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>,
) {
  return [
    '#Operation=GetStatus&Action=GetStatus',
    '/#Operation=GetStatus&Action=GetStatus',
    args,
  ] as const
}

export function getOperationGetStatusActionGetStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationGetStatusActionGetStatusQueryKey>
  >({
    queryKey: getOperationGetStatusActionGetStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Operation=GetStatus&Action=GetStatus'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperationGetStatusActionGetStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperationGetStatusActionGetStatusQueryKey>
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
      ...getOperationGetStatusActionGetStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOperationGetStatusActionGetStatusMutationKey() {
  return [
    '#Operation=GetStatus&Action=GetStatus',
    '/#Operation=GetStatus&Action=GetStatus',
    'POST',
  ] as const
}

export function getPostOperationGetStatusActionGetStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOperationGetStatusActionGetStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>,
    ) {
      return parseResponse(client['#Operation=GetStatus&Action=GetStatus'].$post(args, options))
    },
  })
}

export function createPostOperationGetStatusActionGetStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Operation=GetStatus&Action=GetStatus']['$post']>,
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
    const mutationDefaults = getPostOperationGetStatusActionGetStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOperationListJobsActionListJobsQueryKey(
  args: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>,
) {
  return [
    '#Operation=ListJobs&Action=ListJobs',
    '/#Operation=ListJobs&Action=ListJobs',
    args,
  ] as const
}

export function getOperationListJobsActionListJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationListJobsActionListJobsQueryKey>
  >({
    queryKey: getOperationListJobsActionListJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Operation=ListJobs&Action=ListJobs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperationListJobsActionListJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperationListJobsActionListJobsQueryKey>
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
      ...getOperationListJobsActionListJobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOperationListJobsActionListJobsMutationKey() {
  return [
    '#Operation=ListJobs&Action=ListJobs',
    '/#Operation=ListJobs&Action=ListJobs',
    'POST',
  ] as const
}

export function getPostOperationListJobsActionListJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOperationListJobsActionListJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>,
    ) {
      return parseResponse(client['#Operation=ListJobs&Action=ListJobs'].$post(args, options))
    },
  })
}

export function createPostOperationListJobsActionListJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Operation=ListJobs&Action=ListJobs']['$post']>,
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
    const mutationDefaults = getPostOperationListJobsActionListJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOperationUpdateJobActionUpdateJobQueryKey(
  args: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>,
) {
  return [
    '#Operation=UpdateJob&Action=UpdateJob',
    '/#Operation=UpdateJob&Action=UpdateJob',
    args,
  ] as const
}

export function getOperationUpdateJobActionUpdateJobQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationUpdateJobActionUpdateJobQueryKey>
  >({
    queryKey: getOperationUpdateJobActionUpdateJobQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Operation=UpdateJob&Action=UpdateJob'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOperationUpdateJobActionUpdateJob<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperationUpdateJobActionUpdateJobQueryKey>
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
      ...getOperationUpdateJobActionUpdateJobQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOperationUpdateJobActionUpdateJobMutationKey() {
  return [
    '#Operation=UpdateJob&Action=UpdateJob',
    '/#Operation=UpdateJob&Action=UpdateJob',
    'POST',
  ] as const
}

export function getPostOperationUpdateJobActionUpdateJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOperationUpdateJobActionUpdateJobMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>,
    ) {
      return parseResponse(client['#Operation=UpdateJob&Action=UpdateJob'].$post(args, options))
    },
  })
}

export function createPostOperationUpdateJobActionUpdateJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Operation=UpdateJob&Action=UpdateJob']['$post']>,
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
    const mutationDefaults = getPostOperationUpdateJobActionUpdateJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
