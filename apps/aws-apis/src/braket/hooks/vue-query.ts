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

export function getDeviceKey() {
  return ['device'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getJobKey() {
  return ['job'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getQuantumTaskKey() {
  return ['quantum-task'] as const
}

export function getQuantumTasksKey() {
  return ['quantum-tasks'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutJobJobArnCancelMutationKey() {
  return ['job', '/job/:jobArn/cancel', 'PUT'] as const
}

export function getPutJobJobArnCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobArn']['cancel']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.job)[':jobArn']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobJobArnCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.job)[':jobArn']['cancel']['$put']>) {
      return parseResponse(client.job[':jobArn'].cancel.$put(args, options))
    },
  })
}

export function usePutJobJobArnCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.job)[':jobArn']['cancel']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.job)[':jobArn']['cancel']['$put']>,
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
  const mutationDefaults = getPutJobJobArnCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutQuantumTaskQuantumTaskArnCancelMutationKey() {
  return ['quantum-task', '/quantum-task/:quantumTaskArn/cancel', 'PUT'] as const
}

export function getPutQuantumTaskQuantumTaskArnCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['quantum-task'][':quantumTaskArn']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['quantum-task'][':quantumTaskArn']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuantumTaskQuantumTaskArnCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['quantum-task'][':quantumTaskArn']['cancel']['$put']>,
    ) {
      return parseResponse(client['quantum-task'][':quantumTaskArn'].cancel.$put(args, options))
    },
  })
}

export function usePutQuantumTaskQuantumTaskArnCancel<
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
                  ReturnType<(typeof client)['quantum-task'][':quantumTaskArn']['cancel']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['quantum-task'][':quantumTaskArn']['cancel']['$put']>,
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
  const mutationDefaults = getPutQuantumTaskQuantumTaskArnCancelMutationOptions<
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

export function getPostJobMutationKey() {
  return ['job', '/job', 'POST'] as const
}

export function getPostJobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.job.$post>>>>>,
    TError,
    InferRequestType<typeof client.job.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.job.$post>) {
      return parseResponse(client.job.$post(args, options))
    },
  })
}

export function usePostJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.job.$post>>>>>,
          TError,
          InferRequestType<typeof client.job.$post>,
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
  const mutationDefaults = getPostJobMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuantumTaskMutationKey() {
  return ['quantum-task', '/quantum-task', 'POST'] as const
}

export function getPostQuantumTaskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['quantum-task']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['quantum-task']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuantumTaskMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['quantum-task']['$post']>) {
      return parseResponse(client['quantum-task'].$post(args, options))
    },
  })
}

export function usePostQuantumTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['quantum-task']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['quantum-task']['$post']>,
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
  const mutationDefaults = getPostQuantumTaskMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeviceDeviceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['device', '/device/:deviceArn', keyArgs] as const
}

export function getDeviceDeviceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceDeviceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.device[':deviceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceDeviceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.device)[':deviceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device)[':deviceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.device)[':deviceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeviceDeviceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.device)[':deviceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceDeviceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceDeviceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.device[':deviceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobJobArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.job)[':jobArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['job', '/job/:jobArn', keyArgs] as const
}

export function getJobJobArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.job)[':jobArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobJobArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.job[':jobArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobJobArn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobArn']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.job)[':jobArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobArn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobArn']['$get']>>>
            >
          >,
          ReturnType<typeof getJobJobArnQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.job)[':jobArn']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobJobArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobJobArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.job[':jobArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuantumTaskQuantumTaskArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['quantum-task'][':quantumTaskArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['quantum-task', '/quantum-task/:quantumTaskArn', keyArgs] as const
}

export function getQuantumTaskQuantumTaskArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['quantum-task'][':quantumTaskArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuantumTaskQuantumTaskArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['quantum-task'][':quantumTaskArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuantumTaskQuantumTaskArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['quantum-task'][':quantumTaskArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['quantum-task'][':quantumTaskArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['quantum-task'][':quantumTaskArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['quantum-task'][':quantumTaskArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuantumTaskQuantumTaskArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['quantum-task'][':quantumTaskArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuantumTaskQuantumTaskArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuantumTaskQuantumTaskArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['quantum-task'][':quantumTaskArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostDevicesMutationKey() {
  return ['devices', '/devices', 'POST'] as const
}

export function getPostDevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$post>>>>>,
    TError,
    InferRequestType<typeof client.devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.devices.$post>) {
      return parseResponse(client.devices.$post(args, options))
    },
  })
}

export function usePostDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.devices.$post>,
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
  const mutationDefaults = getPostDevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostJobsMutationKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function getPostJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.$post>) {
      return parseResponse(client.jobs.$post(args, options))
    },
  })
}

export function usePostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
          TError,
          InferRequestType<typeof client.jobs.$post>,
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
  const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuantumTasksMutationKey() {
  return ['quantum-tasks', '/quantum-tasks', 'POST'] as const
}

export function getPostQuantumTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['quantum-tasks']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['quantum-tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQuantumTasksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['quantum-tasks']['$post']>) {
      return parseResponse(client['quantum-tasks'].$post(args, options))
    },
  })
}

export function usePostQuantumTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['quantum-tasks']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['quantum-tasks']['$post']>,
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
  const mutationDefaults = getPostQuantumTasksMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
