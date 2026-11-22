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

export function getCalendarsKey() {
  return ['calendars'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getColorsKey() {
  return ['colors'] as const
}

export function getFreeBusyKey() {
  return ['freeBusy'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getPostCalendarsMutationKey() {
  return ['calendars', '/calendars', 'POST'] as const
}

export function getPostCalendarsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendars.$post>>>>>,
    TError,
    InferRequestType<typeof client.calendars.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.calendars.$post>) {
      return parseResponse(client.calendars.$post(args, options))
    },
  })
}

export function usePostCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendars.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.calendars.$post>,
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
  const mutationDefaults = getPostCalendarsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCalendarsCalendarIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calendars)[':calendarId']['$get']>>,
) {
  return ['calendars', '/calendars/:calendarId', toValue(args)] as const
}

export function getCalendarsCalendarIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calendars)[':calendarId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsCalendarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars[':calendarId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCalendarsCalendarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calendars)[':calendarId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCalendarsCalendarIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsCalendarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsCalendarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars[':calendarId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCalendarsCalendarIdMutationKey() {
  return ['calendars', '/calendars/:calendarId', 'PUT'] as const
}

export function getPutCalendarsCalendarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCalendarsCalendarIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.calendars)[':calendarId']['$put']>) {
      return parseResponse(client.calendars[':calendarId'].$put(args, options))
    },
  })
}

export function usePutCalendarsCalendarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['$put']>,
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
  const mutationDefaults = getPutCalendarsCalendarIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCalendarsCalendarIdMutationKey() {
  return ['calendars', '/calendars/:calendarId', 'DELETE'] as const
}

export function getDeleteCalendarsCalendarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCalendarsCalendarIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.calendars)[':calendarId']['$delete']>) {
      return parseResponse(client.calendars[':calendarId'].$delete(args, options))
    },
  })
}

export function useDeleteCalendarsCalendarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['$delete']>,
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
  const mutationDefaults = getDeleteCalendarsCalendarIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCalendarsCalendarIdMutationKey() {
  return ['calendars', '/calendars/:calendarId', 'PATCH'] as const
}

export function getPatchCalendarsCalendarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCalendarsCalendarIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.calendars)[':calendarId']['$patch']>) {
      return parseResponse(client.calendars[':calendarId'].$patch(args, options))
    },
  })
}

export function usePatchCalendarsCalendarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['$patch']>,
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
  const mutationDefaults = getPatchCalendarsCalendarIdMutationOptions<TError, TOnMutateResult>(
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

export function getCalendarsCalendarIdAclQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>>,
) {
  return ['calendars', '/calendars/:calendarId/acl', toValue(args)] as const
}

export function getCalendarsCalendarIdAclQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsCalendarIdAclQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars[':calendarId'].acl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCalendarsCalendarIdAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCalendarsCalendarIdAclQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsCalendarIdAclQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsCalendarIdAclQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars[':calendarId'].acl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCalendarsCalendarIdAclMutationKey() {
  return ['calendars', '/calendars/:calendarId/acl', 'POST'] as const
}

export function getPostCalendarsCalendarIdAclMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsCalendarIdAclMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$post']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].acl.$post(args, options))
    },
  })
}

export function usePostCalendarsCalendarIdAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$post']>,
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
  const mutationDefaults = getPostCalendarsCalendarIdAclMutationOptions<TError, TOnMutateResult>(
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

export function getPostCalendarsCalendarIdAclWatchMutationKey() {
  return ['calendars', '/calendars/:calendarId/acl/watch', 'POST'] as const
}

export function getPostCalendarsCalendarIdAclWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsCalendarIdAclWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].acl.watch.$post(args, options))
    },
  })
}

export function usePostCalendarsCalendarIdAclWatch<
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
                  ReturnType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>,
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
  const mutationDefaults = getPostCalendarsCalendarIdAclWatchMutationOptions<
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

export function getCalendarsCalendarIdAclRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>
  >,
) {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', toValue(args)] as const
}

export function getCalendarsCalendarIdAclRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsCalendarIdAclRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars[':calendarId'].acl[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCalendarsCalendarIdAclRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>
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
                  ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsCalendarIdAclRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsCalendarIdAclRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsCalendarIdAclRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars[':calendarId'].acl[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCalendarsCalendarIdAclRuleIdMutationKey() {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', 'PUT'] as const
}

export function getPutCalendarsCalendarIdAclRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCalendarsCalendarIdAclRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$put(args, options))
    },
  })
}

export function usePutCalendarsCalendarIdAclRuleId<
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
                  ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>,
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
  const mutationDefaults = getPutCalendarsCalendarIdAclRuleIdMutationOptions<
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

export function getDeleteCalendarsCalendarIdAclRuleIdMutationKey() {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', 'DELETE'] as const
}

export function getDeleteCalendarsCalendarIdAclRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCalendarsCalendarIdAclRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$delete(args, options))
    },
  })
}

export function useDeleteCalendarsCalendarIdAclRuleId<
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
                  ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']>,
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
  const mutationDefaults = getDeleteCalendarsCalendarIdAclRuleIdMutationOptions<
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

export function getPatchCalendarsCalendarIdAclRuleIdMutationKey() {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', 'PATCH'] as const
}

export function getPatchCalendarsCalendarIdAclRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCalendarsCalendarIdAclRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$patch(args, options))
    },
  })
}

export function usePatchCalendarsCalendarIdAclRuleId<
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
                  ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']>,
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
  const mutationDefaults = getPatchCalendarsCalendarIdAclRuleIdMutationOptions<
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

export function getPostCalendarsCalendarIdClearMutationKey() {
  return ['calendars', '/calendars/:calendarId/clear', 'POST'] as const
}

export function getPostCalendarsCalendarIdClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['clear']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsCalendarIdClearMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['clear']['$post']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].clear.$post(args, options))
    },
  })
}

export function usePostCalendarsCalendarIdClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['clear']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['clear']['$post']>,
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
  const mutationDefaults = getPostCalendarsCalendarIdClearMutationOptions<TError, TOnMutateResult>(
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

export function getCalendarsCalendarIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>
  >,
) {
  return ['calendars', '/calendars/:calendarId/events', toValue(args)] as const
}

export function getCalendarsCalendarIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsCalendarIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars[':calendarId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCalendarsCalendarIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCalendarsCalendarIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsCalendarIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsCalendarIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars[':calendarId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCalendarsCalendarIdEventsMutationKey() {
  return ['calendars', '/calendars/:calendarId/events', 'POST'] as const
}

export function getPostCalendarsCalendarIdEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsCalendarIdEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$post']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].events.$post(args, options))
    },
  })
}

export function usePostCalendarsCalendarIdEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['events']['$post']>,
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
  const mutationDefaults = getPostCalendarsCalendarIdEventsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCalendarsCalendarIdEventsImportMutationKey() {
  return ['calendars', '/calendars/:calendarId/events/import', 'POST'] as const
}

export function getPostCalendarsCalendarIdEventsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsCalendarIdEventsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['import']['$post']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].events.import.$post(args, options))
    },
  })
}

export function usePostCalendarsCalendarIdEventsImport<
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
                  ReturnType<(typeof client.calendars)[':calendarId']['events']['import']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['events']['import']['$post']>,
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
  const mutationDefaults = getPostCalendarsCalendarIdEventsImportMutationOptions<
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

export function getPostCalendarsCalendarIdEventsQuickAddMutationKey() {
  return ['calendars', '/calendars/:calendarId/events/quickAdd', 'POST'] as const
}

export function getPostCalendarsCalendarIdEventsQuickAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsCalendarIdEventsQuickAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']
      >,
    ) {
      return parseResponse(client.calendars[':calendarId'].events.quickAdd.$post(args, options))
    },
  })
}

export function usePostCalendarsCalendarIdEventsQuickAdd<
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
                    (typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']>,
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
  const mutationDefaults = getPostCalendarsCalendarIdEventsQuickAddMutationOptions<
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

export function getPostCalendarsCalendarIdEventsWatchMutationKey() {
  return ['calendars', '/calendars/:calendarId/events/watch', 'POST'] as const
}

export function getPostCalendarsCalendarIdEventsWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['watch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['watch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsCalendarIdEventsWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['watch']['$post']>,
    ) {
      return parseResponse(client.calendars[':calendarId'].events.watch.$post(args, options))
    },
  })
}

export function usePostCalendarsCalendarIdEventsWatch<
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
                  ReturnType<(typeof client.calendars)[':calendarId']['events']['watch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['events']['watch']['$post']>,
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
  const mutationDefaults = getPostCalendarsCalendarIdEventsWatchMutationOptions<
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

export function getCalendarsCalendarIdEventsEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
  >,
) {
  return ['calendars', '/calendars/:calendarId/events/:eventId', toValue(args)] as const
}

export function getCalendarsCalendarIdEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsCalendarIdEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars[':calendarId'].events[':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCalendarsCalendarIdEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
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
                  ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsCalendarIdEventsEventIdQueryKey>
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
            ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsCalendarIdEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsCalendarIdEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars[':calendarId'].events[':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCalendarsCalendarIdEventsEventIdMutationKey() {
  return ['calendars', '/calendars/:calendarId/events/:eventId', 'PUT'] as const
}

export function getPutCalendarsCalendarIdEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCalendarsCalendarIdEventsEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calendars)[':calendarId']['events'][':eventId']['$put']
      >,
    ) {
      return parseResponse(client.calendars[':calendarId'].events[':eventId'].$put(args, options))
    },
  })
}

export function usePutCalendarsCalendarIdEventsEventId<
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
                  ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$put']>,
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
  const mutationDefaults = getPutCalendarsCalendarIdEventsEventIdMutationOptions<
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

export function getDeleteCalendarsCalendarIdEventsEventIdMutationKey() {
  return ['calendars', '/calendars/:calendarId/events/:eventId', 'DELETE'] as const
}

export function getDeleteCalendarsCalendarIdEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCalendarsCalendarIdEventsEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']
      >,
    ) {
      return parseResponse(
        client.calendars[':calendarId'].events[':eventId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCalendarsCalendarIdEventsEventId<
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
                    (typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']
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
  const mutationDefaults = getDeleteCalendarsCalendarIdEventsEventIdMutationOptions<
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

export function getPatchCalendarsCalendarIdEventsEventIdMutationKey() {
  return ['calendars', '/calendars/:calendarId/events/:eventId', 'PATCH'] as const
}

export function getPatchCalendarsCalendarIdEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCalendarsCalendarIdEventsEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']
      >,
    ) {
      return parseResponse(client.calendars[':calendarId'].events[':eventId'].$patch(args, options))
    },
  })
}

export function usePatchCalendarsCalendarIdEventsEventId<
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
                    (typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']
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
  const mutationDefaults = getPatchCalendarsCalendarIdEventsEventIdMutationOptions<
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

export function getCalendarsCalendarIdEventsEventIdInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
    >
  >,
) {
  return ['calendars', '/calendars/:calendarId/events/:eventId/instances', toValue(args)] as const
}

export function getCalendarsCalendarIdEventsEventIdInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsCalendarIdEventsEventIdInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars[':calendarId'].events[':eventId'].instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCalendarsCalendarIdEventsEventIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
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
                    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
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
                    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsCalendarIdEventsEventIdInstancesQueryKey>
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
              (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsCalendarIdEventsEventIdInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsCalendarIdEventsEventIdInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars[':calendarId'].events[':eventId'].instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCalendarsCalendarIdEventsEventIdMoveMutationKey() {
  return ['calendars', '/calendars/:calendarId/events/:eventId/move', 'POST'] as const
}

export function getPostCalendarsCalendarIdEventsEventIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCalendarsCalendarIdEventsEventIdMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
      >,
    ) {
      return parseResponse(
        client.calendars[':calendarId'].events[':eventId'].move.$post(args, options),
      )
    },
  })
}

export function usePostCalendarsCalendarIdEventsEventIdMove<
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
                    (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
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
  const mutationDefaults = getPostCalendarsCalendarIdEventsEventIdMoveMutationOptions<
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

export function getPostChannelsStopMutationKey() {
  return ['channels', '/channels/stop', 'POST'] as const
}

export function getPostChannelsStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channels.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.stop.$post>) {
      return parseResponse(client.channels.stop.$post(args, options))
    },
  })
}

export function usePostChannelsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.stop.$post>,
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
  const mutationDefaults = getPostChannelsStopMutationOptions<TError, TOnMutateResult>(
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

export function getColorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.colors.$get>>,
) {
  return ['colors', '/colors', toValue(args)] as const
}

export function getColorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.colors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getColorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.colors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useColors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.colors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
          ReturnType<typeof getColorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getColorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getColorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.colors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFreeBusyMutationKey() {
  return ['freeBusy', '/freeBusy', 'POST'] as const
}

export function getPostFreeBusyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freeBusy.$post>>>>>,
    TError,
    InferRequestType<typeof client.freeBusy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFreeBusyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.freeBusy.$post>) {
      return parseResponse(client.freeBusy.$post(args, options))
    },
  })
}

export function usePostFreeBusy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freeBusy.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.freeBusy.$post>,
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
  const mutationDefaults = getPostFreeBusyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersMeCalendarListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.calendarList.$get>>,
) {
  return ['users', '/users/me/calendarList', toValue(args)] as const
}

export function getUsersMeCalendarListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.calendarList.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeCalendarListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.calendarList.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeCalendarList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.calendarList.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeCalendarListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeCalendarListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeCalendarListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.calendarList.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMeCalendarListMutationKey() {
  return ['users', '/users/me/calendarList', 'POST'] as const
}

export function getPostUsersMeCalendarListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.calendarList.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeCalendarListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.calendarList.$post>) {
      return parseResponse(client.users.me.calendarList.$post(args, options))
    },
  })
}

export function usePostUsersMeCalendarList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.calendarList.$post>,
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
  const mutationDefaults = getPostUsersMeCalendarListMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMeCalendarListWatchMutationKey() {
  return ['users', '/users/me/calendarList/watch', 'POST'] as const
}

export function getPostUsersMeCalendarListWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.watch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.calendarList.watch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeCalendarListWatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.calendarList.watch.$post>) {
      return parseResponse(client.users.me.calendarList.watch.$post(args, options))
    },
  })
}

export function usePostUsersMeCalendarListWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.users.me.calendarList.watch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.calendarList.watch.$post>,
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
  const mutationDefaults = getPostUsersMeCalendarListWatchMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeCalendarListCalendarIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>
  >,
) {
  return ['users', '/users/me/calendarList/:calendarId', toValue(args)] as const
}

export function getUsersMeCalendarListCalendarIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeCalendarListCalendarIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.calendarList[':calendarId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeCalendarListCalendarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersMeCalendarListCalendarIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeCalendarListCalendarIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeCalendarListCalendarIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.calendarList[':calendarId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersMeCalendarListCalendarIdMutationKey() {
  return ['users', '/users/me/calendarList/:calendarId', 'PUT'] as const
}

export function getPutUsersMeCalendarListCalendarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersMeCalendarListCalendarIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$put']>,
    ) {
      return parseResponse(client.users.me.calendarList[':calendarId'].$put(args, options))
    },
  })
}

export function usePutUsersMeCalendarListCalendarId<
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
                Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$put']>,
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
  const mutationDefaults = getPutUsersMeCalendarListCalendarIdMutationOptions<
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

export function getDeleteUsersMeCalendarListCalendarIdMutationKey() {
  return ['users', '/users/me/calendarList/:calendarId', 'DELETE'] as const
}

export function getDeleteUsersMeCalendarListCalendarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersMeCalendarListCalendarIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>,
    ) {
      return parseResponse(client.users.me.calendarList[':calendarId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersMeCalendarListCalendarId<
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
                Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>,
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
  const mutationDefaults = getDeleteUsersMeCalendarListCalendarIdMutationOptions<
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

export function getPatchUsersMeCalendarListCalendarIdMutationKey() {
  return ['users', '/users/me/calendarList/:calendarId', 'PATCH'] as const
}

export function getPatchUsersMeCalendarListCalendarIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMeCalendarListCalendarIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>,
    ) {
      return parseResponse(client.users.me.calendarList[':calendarId'].$patch(args, options))
    },
  })
}

export function usePatchUsersMeCalendarListCalendarId<
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
                Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>,
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
  const mutationDefaults = getPatchUsersMeCalendarListCalendarIdMutationOptions<
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

export function getUsersMeSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.settings.$get>>,
) {
  return ['users', '/users/me/settings', toValue(args)] as const
}

export function getUsersMeSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.me.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>
            >
          >,
          ReturnType<typeof getUsersMeSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMeSettingsWatchMutationKey() {
  return ['users', '/users/me/settings/watch', 'POST'] as const
}

export function getPostUsersMeSettingsWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.watch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.settings.watch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeSettingsWatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.settings.watch.$post>) {
      return parseResponse(client.users.me.settings.watch.$post(args, options))
    },
  })
}

export function usePostUsersMeSettingsWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.watch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.settings.watch.$post>,
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
  const mutationDefaults = getPostUsersMeSettingsWatchMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeSettingsSettingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>>,
) {
  return ['users', '/users/me/settings/:setting', toValue(args)] as const
}

export function getUsersMeSettingsSettingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersMeSettingsSettingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.settings[':setting'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersMeSettingsSetting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersMeSettingsSettingQueryKey>
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
          Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeSettingsSettingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersMeSettingsSettingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.settings[':setting'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
