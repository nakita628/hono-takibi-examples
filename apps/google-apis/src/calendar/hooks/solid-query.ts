import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createPostCalendars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendars.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.calendars.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCalendarsCalendarIdQueryKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId', args] as const
}

export function getCalendarsCalendarIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsCalendarIdQueryKey>
  >({
    queryKey: getCalendarsCalendarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars[':calendarId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCalendarsCalendarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars)[':calendarId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCalendarsCalendarIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCalendarsCalendarIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutCalendarsCalendarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCalendarsCalendarIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCalendarsCalendarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCalendarsCalendarIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchCalendarsCalendarId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCalendarsCalendarIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCalendarsCalendarIdAclQueryKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId/acl', args] as const
}

export function getCalendarsCalendarIdAclQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCalendarsCalendarIdAclQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars[':calendarId'].acl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCalendarsCalendarIdAcl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getCalendarsCalendarIdAclQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCalendarsCalendarIdAcl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsCalendarIdAclMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCalendarsCalendarIdAclWatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsCalendarIdAclWatchMutationOptions<
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

export function getCalendarsCalendarIdAclRuleIdQueryKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', args] as const
}

export function getCalendarsCalendarIdAclRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCalendarsCalendarIdAclRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars[':calendarId'].acl[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCalendarsCalendarIdAclRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getCalendarsCalendarIdAclRuleIdQueryKey>
        >
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
      ...getCalendarsCalendarIdAclRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutCalendarsCalendarIdAclRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCalendarsCalendarIdAclRuleIdMutationOptions<
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

export function createDeleteCalendarsCalendarIdAclRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCalendarsCalendarIdAclRuleIdMutationOptions<
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

export function createPatchCalendarsCalendarIdAclRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCalendarsCalendarIdAclRuleIdMutationOptions<
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

export function createPostCalendarsCalendarIdClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsCalendarIdClearMutationOptions<
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

export function getCalendarsCalendarIdEventsQueryKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId/events', args] as const
}

export function getCalendarsCalendarIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCalendarsCalendarIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars[':calendarId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCalendarsCalendarIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getCalendarsCalendarIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostCalendarsCalendarIdEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsCalendarIdEventsMutationOptions<
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

export function createPostCalendarsCalendarIdEventsImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsCalendarIdEventsImportMutationOptions<
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

export function createPostCalendarsCalendarIdEventsQuickAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsCalendarIdEventsQuickAddMutationOptions<
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

export function createPostCalendarsCalendarIdEventsWatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsCalendarIdEventsWatchMutationOptions<
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

export function getCalendarsCalendarIdEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId/events/:eventId', args] as const
}

export function getCalendarsCalendarIdEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCalendarsCalendarIdEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars[':calendarId'].events[':eventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCalendarsCalendarIdEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getCalendarsCalendarIdEventsEventIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutCalendarsCalendarIdEventsEventId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCalendarsCalendarIdEventsEventIdMutationOptions<
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

export function createDeleteCalendarsCalendarIdEventsEventId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCalendarsCalendarIdEventsEventIdMutationOptions<
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

export function createPatchCalendarsCalendarIdEventsEventId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCalendarsCalendarIdEventsEventIdMutationOptions<
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

export function getCalendarsCalendarIdEventsEventIdInstancesQueryKey(
  args: InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
  >,
) {
  return ['calendars', '/calendars/:calendarId/events/:eventId/instances', args] as const
}

export function getCalendarsCalendarIdEventsEventIdInstancesQueryOptions<
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
  args: InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCalendarsCalendarIdEventsEventIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars[':calendarId'].events[':eventId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCalendarsCalendarIdEventsEventIdInstances<
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
  args: () => InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getCalendarsCalendarIdEventsEventIdInstancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCalendarsCalendarIdEventsEventIdMove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCalendarsCalendarIdEventsEventIdMoveMutationOptions<
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

export function createPostChannelsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.stop.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getColorsQueryKey(args: InferRequestType<typeof client.colors.$get>) {
  return ['colors', '/colors', args] as const
}

export function getColorsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.colors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getColorsQueryKey>
  >({
    queryKey: getColorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.colors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createColors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.colors.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getColorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getColorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFreeBusy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freeBusy.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.freeBusy.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFreeBusyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeCalendarListQueryKey(
  args: InferRequestType<typeof client.users.me.calendarList.$get>,
) {
  return ['users', '/users/me/calendarList', args] as const
}

export function getUsersMeCalendarListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.me.calendarList.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeCalendarListQueryKey>
  >({
    queryKey: getUsersMeCalendarListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.calendarList.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMeCalendarList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.me.calendarList.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeCalendarListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeCalendarListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersMeCalendarList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.calendarList.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMeCalendarListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersMeCalendarListWatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMeCalendarListWatchMutationOptions<
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

export function getUsersMeCalendarListCalendarIdQueryKey(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>,
) {
  return ['users', '/users/me/calendarList/:calendarId', args] as const
}

export function getUsersMeCalendarListCalendarIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersMeCalendarListCalendarIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.calendarList[':calendarId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersMeCalendarListCalendarId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getUsersMeCalendarListCalendarIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutUsersMeCalendarListCalendarId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersMeCalendarListCalendarIdMutationOptions<
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

export function createDeleteUsersMeCalendarListCalendarId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersMeCalendarListCalendarIdMutationOptions<
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

export function createPatchUsersMeCalendarListCalendarId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersMeCalendarListCalendarIdMutationOptions<
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

export function getUsersMeSettingsQueryKey(
  args: InferRequestType<typeof client.users.me.settings.$get>,
) {
  return ['users', '/users/me/settings', args] as const
}

export function getUsersMeSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.me.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeSettingsQueryKey>
  >({
    queryKey: getUsersMeSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMeSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.me.settings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeSettingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersMeSettingsWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.watch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.me.settings.watch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMeSettingsWatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeSettingsSettingQueryKey(
  args: InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>,
) {
  return ['users', '/users/me/settings/:setting', args] as const
}

export function getUsersMeSettingsSettingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersMeSettingsSettingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.settings[':setting'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersMeSettingsSetting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getUsersMeSettingsSettingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
